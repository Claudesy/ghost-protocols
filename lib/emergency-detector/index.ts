/**
 * Clinical Inference Module Index
 *
 * Exports all 4 gates of the clinical decision support system
 *
 * @module lib/emergency-detector
 */

// Gate 1: TTV Inference
export * from './ttv-inference';
export { default as TTVInference } from './ttv-inference';

// Gate 2: Hypertension Classification
export * from './htn-classifier';
export { default as HTNClassifier } from './htn-classifier';

// Gate 3: Blood Glucose Classification
export * from './glucose-classifier';
export { default as GlucoseClassifier } from './glucose-classifier';

// Gate 4: Occult Shock Detection
export * from './occult-shock-detector';
export { default as OccultShockDetector } from './occult-shock-detector';

