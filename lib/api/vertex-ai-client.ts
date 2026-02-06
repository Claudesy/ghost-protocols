/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * Vertex AI Client
 * Google Cloud Integration for CDSS Diagnosis Engine
 *
 * @module lib/api/vertex-ai-client
 * @version 1.0.0
 */

import { VertexAI } from '@google-cloud/vertexai';
import type { RAGSearchResult } from '../rag/types';
import type { AIDiagnosisSuggestion, AnonymizedClinicalContext } from './deepseek-types';
import { buildMessages, parseAIResponse } from './prompt-templates';
import {
  DEFAULT_VERTEX_AI_CONFIG,
  type VertexAIConfig,
  type VertexAIInferenceResult,
} from './vertex-ai-types';

// =============================================================================
// CONFIGURATION MANAGEMENT
// =============================================================================

const CONFIG_STORAGE_KEY = 'sentra:vertex:config';

/**
 * Get API configuration from storage
 */
async function getStoredConfig(): Promise<Partial<VertexAIConfig>> {
  try {
    const result = await browser.storage.sync.get(CONFIG_STORAGE_KEY);
    return result[CONFIG_STORAGE_KEY] || {};
  } catch {
    return {};
  }
}

/**
 * Save API configuration to storage
 */
export async function saveConfig(config: Partial<VertexAIConfig>): Promise<void> {
  await browser.storage.sync.set({
    [CONFIG_STORAGE_KEY]: config,
  });
}

/**
 * Get merged configuration (defaults + stored)
 */
async function getConfig(): Promise<VertexAIConfig> {
  const stored = await getStoredConfig();
  return {
    ...DEFAULT_VERTEX_AI_CONFIG,
    ...stored,
  };
}

// =============================================================================
// CLIENT INITIALIZATION
// =============================================================================

let vertexAIInstance: VertexAI | null = null;
let currentProjectId: string | null = null;
let currentLocation: string | null = null;

/**
 * Get or initialize Vertex AI instance
 * Re-initializes if config changes
 */
function getVertexAI(config: VertexAIConfig): VertexAI {
  if (
    !vertexAIInstance ||
    currentProjectId !== config.projectId ||
    currentLocation !== config.location
  ) {
    vertexAIInstance = new VertexAI({
      project: config.projectId,
      location: config.location,
    });
    currentProjectId = config.projectId;
    currentLocation = config.location;
  }
  return vertexAIInstance;
}

// =============================================================================
// MAIN INFERENCE FUNCTION
// =============================================================================

/**
 * Run diagnosis inference with Vertex AI (Gemini)
 */
export async function inferDiagnosis(
  context: AnonymizedClinicalContext,
  ragResults: RAGSearchResult[]
): Promise<VertexAIInferenceResult> {
  const startTime = Date.now();
  const config = await getConfig();

  try {
    const vertexAI = getVertexAI(config);

    // Initialize model with grounding tools if enabled
    const tools = config.enableSearchGrounding ? [{ googleSearchRetrieval: {} }] : [];

    // Build user prompt (reusing existing template logic for now)
    const messages = buildMessages(context, ragResults);

    // For Gemini, system instruction is better passed in model config
    const systemPrompt = messages.find((m) => m.role === 'system')?.content || '';
    const userPrompt = messages.find((m) => m.role === 'user')?.content || '';

    const modelWithSystem = vertexAI.getGenerativeModel({
      model: config.model,
      systemInstruction: systemPrompt,
      generationConfig: {
        maxOutputTokens: config.maxTokens,
        temperature: config.temperature,
        responseMimeType: 'application/json',
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      tools: tools as any,
    });

    const result = await modelWithSystem.generateContent({
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
    });

    const response = await result.response;
    const responseText = response.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // Parse response using common logic
    const parsed = parseAIResponse(responseText);

    if (!parsed.success || !parsed.data) {
      return {
        suggestions: [],
        raw_response: responseText,
        token_usage: {
          input: response.usageMetadata?.promptTokenCount || 0,
          output: response.usageMetadata?.candidatesTokenCount || 0,
          total: response.usageMetadata?.totalTokenCount || 0,
        },
        latency_ms: Date.now() - startTime,
        model_version: config.model,
        used_fallback: false,
        data_quality_note: `Parse error: ${parsed.error}`,
      };
    }

    return {
      suggestions: parsed.data.suggestions as AIDiagnosisSuggestion[],
      raw_response: responseText,
      grounding_metadata: response.candidates?.[0]?.groundingMetadata,
      token_usage: {
        input: response.usageMetadata?.promptTokenCount || 0,
        output: response.usageMetadata?.candidatesTokenCount || 0,
        total: response.usageMetadata?.totalTokenCount || 0,
      },
      latency_ms: Date.now() - startTime,
      model_version: config.model,
      used_fallback: false,
      data_quality_note: parsed.data.data_quality_note,
    };
  } catch (error) {
    console.error('[VertexAI] Inference error:', error);
    throw error;
  }
}

// =============================================================================
// FALLBACK
// =============================================================================

export { localFallbackInference } from './deepseek-client';
