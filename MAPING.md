**PENGKAJIAN AWAL**

**ANAMNESA**

&lt;div class="row"&gt;

&lt;form form-ajax="" id="form_create" method="POST" action="<https://kotakediri.epuskesmas.id/anamnesa/update/58517>" class="form-horizontal"&gt;

&lt;input type="hidden" name="\_token" value="Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"&gt;

&lt;div class="col-sm-12"&gt;

&lt;div class="box"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;Anamnesa&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="form-group col-sm-6"&gt;

&lt;label class="col-sm-4 control-label"&gt;Dokter / Tenaga Medis &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;input type="hidden" name="skrining_on" id="skrining_on" value="false"&gt;

&lt;input type="hidden" name="bridging_non_active_on" id="bridging_non_active_on" value="false"&gt;

&lt;input type="text" class="hidden form-control input-sm" readonly="" name="Anamnesa\[pelayanan_id\]" value="63569"&gt;

&lt;input type="text" class="hidden form-control input-sm" readonly="" name="Anamnesa\[dokter_id\]" value="0000000000000771" required=""&gt;

&lt;input type="text" class="form-control input-sm ui-autocomplete-input" name="dokter_nama_bpjs" value="dr. CHICHA LUSIANA" placeholder="🔍 Nama Dokter / Bidan / Perawat BPJS" maxlength="128" autocomplete="off"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group col-sm-6"&gt;

&lt;label class="col-sm-4 control-label"&gt;Perawat / Bidan / Nutrisionist / Sanitarian &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;input type="text" class="hidden form-control input-sm" readonly="" name="Anamnesa\[perawat_id\]" value="0000000000000802"&gt;

&lt;input type="text" class="form-control input-sm ui-autocomplete-input" name="perawat_nama" value="EKO RATNANINGSIH. A.Md Kep" placeholder="🔍 Nama Asisten Dokter / Bidan / Perawat" maxlength="128" autocomplete="off"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group col-sm-6"&gt;

&lt;label class="col-sm-4 control-label"&gt;Keluhan Utama &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;textarea class="form-control input-sm ui-autocomplete-input" id="keluhan" rows="3" name="Anamnesa\[keluhan_utama\]" placeholder="🔍 Keluhan Utama \*pisahkan dengan tanda koma ','" required="" autocomplete="off"&gt;lemas, nafas tidaak enak, keringat dingin&lt;/textarea&gt;

&lt;p id="pkeluhan"&gt;&lt;/p&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group col-sm-6"&gt;

&lt;label class="col-sm-4 control-label"&gt;Keluhan Tambahan / Anamnesa &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;textarea class="form-control input-sm ui-autocomplete-input" rows="3" id="keluhan-tambahan" name="Anamnesa\[keluhan_tambahan\]" placeholder="🔍 Keluhan Tambahan \*pisahkan dengan tanda koma ','" autocomplete="off"&gt;lemas, nafas tidaak enak, keringat dingin&lt;/textarea&gt;

&lt;p id="pkeluhan-tambahan"&gt;&lt;/p&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div id="lamasakit" class="form-group col-sm-6"&gt;

&lt;div class="form-group"&gt;

&lt;br&gt;

&lt;label id="lslabel" class="control-label col-sm-4"&gt;Lama Sakit &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;div class="input-group"&gt;

&lt;input type="number" pattern="\[0-9\]\*" inputmode="numeric" min="0" required="" class="form-control input-sm" id="sakit_tahun" name="Anamnesa\[lama_sakit_tahun\]" value="0" placeholder="0"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;Thn&lt;/label&gt;&lt;/span&gt;

&lt;input type="number" pattern="\[0-9\]\*" inputmode="numeric" min="0" required="" class="form-control input-sm" id="sakit_bulan" name="Anamnesa\[lama_sakit_bulan\]" value="0" placeholder="0"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;Bln&lt;/label&gt;&lt;/span&gt;

&lt;input type="number" pattern="\[0-9\]\*" inputmode="numeric" min="0" required="" class="form-control input-sm" id="sakit_hari" name="Anamnesa\[lama_sakit_hari\]" value="1" placeholder="0"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;Hr&lt;/label&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-sm-6"&gt;

&lt;div class="box box-bordered" id="riwayatAccordion"&gt;

&lt;div class="box-header with-border accordion" data-toggle="collapse" data-target="#collapseriwayatAccordio" aria-expanded="true" aria-controls="collapseriwayatAccordion"&gt;

&lt;label&gt;&lt;b&gt;Riwayat Penyakit&lt;/b&gt;&lt;/label&gt;

&lt;label&gt;

&lt;input type="checkbox" id="riwayatcheckempty" checked=""&gt; Tidak Ada

&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered collapse" id="collapseriwayatAccordion" aria-labelledby="headingTwo" data-parent="#riwayatAccordion"&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-2 control-label"&gt;RPS &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-10 has-success"&gt;

&lt;input id="id_rps" class="hidden" name="MRiwayatPasien\[Riwayat Penyakit Sekarang\]\[id\]" value=""&gt;

&lt;textarea id="text_rps" class="form-control input-sm" rows="2" name="MRiwayatPasien\[Riwayat Penyakit Sekarang\]\[value\]" maxlength="256" placeholder="Riwayat Penyakit Sekarang"&gt;&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-2 control-label"&gt;RPD &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-10 has-success"&gt;

&lt;input id="id_rpd" class="hidden" name="MRiwayatPasien\[Riwayat Penyakit Dulu\]\[id\]" value=""&gt;

&lt;textarea id="text_rpd" class="form-control input-sm" rows="2" name="MRiwayatPasien\[Riwayat Penyakit Dulu\]\[value\]" maxlength="256" placeholder="Riwayat Penyakit Dulu"&gt;&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-2 control-label"&gt;RPK &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-10 has-success"&gt;

&lt;input id="id_rpu" class="hidden" name="MRiwayatPasien\[Riwayat Penyakit Keluarga\]\[id\]" value=""&gt;

&lt;textarea id="text_rpk" class="form-control input-sm" rows="2" name="MRiwayatPasien\[Riwayat Penyakit Keluarga\]\[value\]" maxlength="256" placeholder="Riwayat Penyakit Keluarga"&gt;&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-sm-6"&gt;

&lt;div class="box box-bordered" id="alergiAccordion"&gt;

&lt;div class="box-header with-border accordion" data-toggle="collapse" data-target="#collapsealergiAccordio" aria-expanded="true" aria-controls="collapsealergiAccordion"&gt;

&lt;label&gt;&lt;b&gt;Alergi Pasien&lt;/b&gt;&lt;/label&gt;

&lt;label&gt;

&lt;input type="checkbox" id="checkempty"&gt; Tidak Ada

&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered collapse in" id="collapsealergiAccordion" aria-labelledby="headingTwo" data-parent="#alergiAccordion" aria-expanded="true" style=""&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-2 control-label"&gt;Obat &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-10 has-success"&gt;

&lt;input id="id_alergiobat" class="hidden" name="MAlergiPasien\[Obat\]\[id\]" value="185826"&gt;

&lt;textarea id="text_alergiobat" class="hidden form-control input-sm" rows="2" name="MAlergiPasien\[Obat\]\[value\]" maxlength="256" placeholder="Alergi Obat"&gt;&lt;/textarea&gt;

&lt;select class="js-select2-obat select2-hidden-accessible" multiple="" style="width:100%" data-select2-id="1" tabindex="-1" aria-hidden="true"&gt;

&lt;/select&gt;&lt;span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style="width: 100%;"&gt;&lt;span class="selection"&gt;&lt;span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1"&gt;&lt;ul class="select2-selection_\_rendered"&gt;&lt;li class="select2-search select2-search--inline"&gt;&lt;input class="select2-search_\_field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="Cari obat" style="width: 100px;"&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class="dropdown-wrapper" aria-hidden="true"&gt;&lt;/span&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-2 control-label"&gt;Makanan &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-10 has-success"&gt;

&lt;input id="id_alergimakanan" class="hidden" name="MAlergiPasien\[Makanan\]\[id\]" value="185827"&gt;

&lt;textarea id="text_alergimakanan" class="hidden form-control input-sm" rows="2" name="MAlergiPasien\[Makanan\]\[value\]" maxlength="256" placeholder="Alergi Makanan"&gt;&lt;/textarea&gt;

&lt;select class="js-select2-makanan select2-hidden-accessible" multiple="" style="width:100%" data-select2-id="3" tabindex="-1" aria-hidden="true"&gt;

&lt;/select&gt;&lt;span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="4" style="width: 100%;"&gt;&lt;span class="selection"&gt;&lt;span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1"&gt;&lt;ul class="select2-selection_\_rendered"&gt;&lt;li class="select2-search select2-search--inline"&gt;&lt;input class="select2-search_\_field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="Cari makanan" style="width: 100px;"&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class="dropdown-wrapper" aria-hidden="true"&gt;&lt;/span&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-2 control-label"&gt;Udara &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-10 has-success"&gt;

&lt;input id="id_alergiudara" class="hidden" name="MAlergiPasien\[Udara\]\[id\]" value="185828"&gt;

&lt;textarea id="text_alergiudara" class="hidden form-control input-sm" rows="2" name="MAlergiPasien\[Udara\]\[value\]" maxlength="256" placeholder="Alergi Udara"&gt;&lt;/textarea&gt;

&lt;select class="js-select2-udara select2-hidden-accessible" multiple="" style="width:100%" data-select2-id="5" tabindex="-1" aria-hidden="true"&gt;

&lt;/select&gt;&lt;span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="6" style="width: 100%;"&gt;&lt;span class="selection"&gt;&lt;span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1"&gt;&lt;ul class="select2-selection_\_rendered"&gt;&lt;li class="select2-search select2-search--inline"&gt;&lt;input class="select2-search_\_field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="Cari udara" style="width: 100px;"&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class="dropdown-wrapper" aria-hidden="true"&gt;&lt;/span&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-2 control-label"&gt;Lainnya &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-10 has-success"&gt;

&lt;input id="id_alergiumum" class="hidden" name="MAlergiPasien\[Umum\]\[id\]" value="185829"&gt;

&lt;textarea id="text_alergiumum" class="hidden form-control input-sm" rows="2" name="MAlergiPasien\[Umum\]\[value\]" maxlength="256" placeholder="Alergi Umum atau Lainnya"&gt;&lt;/textarea&gt;

&lt;select class="js-select2-umum select2-hidden-accessible" multiple="" style="width:100%" data-select2-id="7" tabindex="-1" aria-hidden="true"&gt;

&lt;/select&gt;&lt;span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="8" style="width: 100%;"&gt;&lt;span class="selection"&gt;&lt;span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1"&gt;&lt;ul class="select2-selection_\_rendered"&gt;&lt;li class="select2-search select2-search--inline"&gt;&lt;input class="select2-search_\_field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="Cari lainnya" style="width: 100px;"&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class="dropdown-wrapper" aria-hidden="true"&gt;&lt;/span&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;style&gt;

.ngumpet{

display: none;

}

&lt;/style&gt;

&lt;div class="col-sm-12"&gt;

&lt;div class="box box-bordered" id="RiwayatPsikologis"&gt;

&lt;div class="box-header with-border accordion-toggle" data-toggle="collapse" data-target="#collapseRiwayatPsikologis" aria-expanded="true" aria-controls="collapseIdentitas"&gt;

&lt;label&gt;&lt;b&gt;Status Fisis/ Neurologis/ Mental, Biologis, Psikososiospiritual dan Ekonomi&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered collapse in" id="collapseRiwayatPsikologis" aria-labelledby="headingTwo" data-parent="#RiwayatPsikologis"&gt;

&lt;div class="col-sm-12" style="padding:0px;"&gt;

&lt;table class="table table-hover table-condensed" style="width:100%"&gt;

&lt;tbody&gt;

&lt;tr&gt;

&lt;td&gt;&lt;label class="control-label"&gt;Apakah menggunakan alat bantu saat beraktifitas &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;&lt;/td&gt;

&lt;td&gt;

&lt;div class="input-group" style="width: 100%;margin-bottom:10px;"&gt;

&lt;label class="radio-inline" style="width: 50%"&gt;

&lt;input type="radio" name="Anamnesa\[alat_bantu_aktrifitas\]" value="1" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Ya

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="Anamnesa\[alat_bantu_aktrifitas\]" value="0" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Tidak

&lt;/label&gt;

&lt;/div&gt;

&lt;input type="text" class="form-control input-sm ngumpet " name="Anamnesa\[alat_bantu_aktrifitas_jelaskan\]" value="" placeholder="Jelaskan"&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;&lt;label class="control-label"&gt;Agama/Kepercayaan&lt;/label&gt;&lt;/td&gt;

&lt;td&gt;

&lt;input type="text" class="form-control input-sm" value="ISLAM" placeholder="" readonly=""&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;&lt;label class="control-label"&gt;Adakah Kendala Komunikasi &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;&lt;/td&gt;

&lt;td&gt;

&lt;div class="input-group" style="width: 100%;margin-bottom:10px;"&gt;

&lt;label class="radio-inline" style="width: 50%"&gt;

&lt;input type="radio" name="Anamnesa\[kendala_komunikasi\]" value="1" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Ya

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="Anamnesa\[kendala_komunikasi\]" value="0" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Tidak Ada

&lt;/label&gt;

&lt;/div&gt;

&lt;input type="text" class="form-control input-sm ngumpet " name="Anamnesa\[kendala_komunikasi_jelaskan\]" value="" placeholder="Jelaskan"&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;&lt;label class="control-label"&gt;Adakah yang merawat dirumah &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;&lt;/td&gt;

&lt;td&gt;

&lt;div class="input-group" style="width: 100%;margin-bottom:10px;"&gt;

&lt;label class="radio-inline" style="width: 50%"&gt;

&lt;input type="radio" name="Anamnesa\[merawat_dirumah\]" value="1" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Ya

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="Anamnesa\[merawat_dirumah\]" value="0" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Tidak Ada

&lt;/label&gt;

&lt;/div&gt;

&lt;input type="text" class="form-control input-sm ngumpet " name="Anamnesa\[merawat_dirumah_jelaskan\]" value="" placeholder="Jelaskan"&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;&lt;label class="control-label"&gt;Apakah membutuhkan bantuan orang lain saat beraktifitas &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;&lt;/td&gt;

&lt;td&gt;

&lt;div class="input-group" style="width: 100%;margin-bottom:10px;"&gt;

&lt;label class="radio-inline" style="width: 50%"&gt;

&lt;input type="radio" name="Anamnesa\[membutuhkan_bantuan\]" value="1" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Ya

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="Anamnesa\[membutuhkan_bantuan\]" value="0" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Tidak

&lt;/label&gt;

&lt;/div&gt;

&lt;input type="text" class="form-control input-sm ngumpet " name="Anamnesa\[membutuhkan_bantuan_jelaskan\]" value="" placeholder="Jelaskan"&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;&lt;label class="control-label"&gt;Ekspresi dan Emosi &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;&lt;/td&gt;

&lt;td&gt;

&lt;select class="form-control input-sm" name="Anamnesa\[ekspresi_emosi\]"&gt;

&lt;option value="" disabled="" selected=""&gt;Pilih ekspresi dan emosi&lt;/option&gt;

&lt;option value="tenang"&gt;Tenang&lt;/option&gt;

&lt;option value="cemas"&gt;Cemas&lt;/option&gt;

&lt;option value="takut"&gt;Takut&lt;/option&gt;

&lt;option value="gelisah"&gt;Gelisah&lt;/option&gt;

&lt;option value="sedih"&gt;Sedih&lt;/option&gt;

&lt;option value="marah"&gt;Marah&lt;/option&gt;

&lt;/select&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;&lt;label class="control-label"&gt;Bahasa yang digunakan &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;&lt;/td&gt;

&lt;td&gt;

&lt;div class="input-group" style="width: 100%"&gt;

&lt;label class="radio-inline" style="width: 50%"&gt;

&lt;input type="radio" name="Anamnesa\[bahasa_digunakan\]" value="indonesia" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Indonesia

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="Anamnesa\[bahasa_digunakan\]" value="daerah" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Daerah

&lt;/label&gt;

&lt;/div&gt;

&lt;div class="input-group" style="width: 100%;margin-bottom:10px;"&gt;

&lt;label class="radio-inline" style="width: 50%"&gt;

&lt;input type="radio" name="Anamnesa\[bahasa_digunakan\]" value="lainnya" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Lainnya

&lt;/label&gt;

&lt;/div&gt;

&lt;input type="text" class="form-control input-sm ngumpet " name="Anamnesa\[bahasa_digunakan_sebutkan\]" value="" placeholder="Sebutkan"&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;&lt;label class="control-label"&gt;Pekerjaan&lt;/label&gt;&lt;/td&gt;

&lt;td&gt;

&lt;input type="text" class="form-control input-sm" value="" placeholder="" readonly=""&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;&lt;label class="control-label"&gt;Tinggal dengan &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;&lt;/td&gt;

&lt;td&gt;

&lt;div class="input-group" style="width: 100%"&gt;

&lt;label class="radio-inline" style="width: 50%"&gt;

&lt;input type="radio" name="Anamnesa\[tinggal_dengan\]" value="sendiri" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Sendiri

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="Anamnesa\[tinggal_dengan\]" value="suami/istri" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Suami/istri

&lt;/label&gt;

&lt;/div&gt;

&lt;div class="input-group" style="width: 100%;margin-bottom:10px;"&gt;

&lt;label class="radio-inline" style="width: 50%"&gt;

&lt;input type="radio" name="Anamnesa\[tinggal_dengan\]" value="orangtua" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Orangtua

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="Anamnesa\[tinggal_dengan\]" value="lainnya" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Lainnya

&lt;/label&gt;

&lt;/div&gt;

&lt;input type="text" class="form-control input-sm ngumpet " name="Anamnesa\[tinggal_dengan_sebutkan\]" value="" placeholder="Sebutkan"&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;&lt;label class="control-label"&gt;Sosial ekonomi &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;&lt;/td&gt;

&lt;td&gt;

&lt;div class="input-group" style="width: 100%"&gt;

&lt;label class="radio-inline" style="width: 50%"&gt;

&lt;input type="radio" name="Anamnesa\[sosial_ekonomi\]" value="baik" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Baik

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="Anamnesa\[sosial_ekonomi\]" value="kurang" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Kurang

&lt;/label&gt;

&lt;/div&gt;

&lt;div class="input-group" style="width: 100%"&gt;

&lt;label class="radio-inline" style="width: 50%"&gt;

&lt;input type="radio" name="Anamnesa\[sosial_ekonomi\]" value="cukup" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Cukup

&lt;/label&gt;

&lt;/div&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;&lt;label class="control-label"&gt;Jaminan&lt;/label&gt;&lt;/td&gt;

&lt;td&gt;

&lt;input type="text" class="form-control input-sm" value="BPJS Kesehatan" placeholder="" readonly=""&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;&lt;label class="control-label"&gt;Gangguan jiwa dimasa lalu &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;&lt;/td&gt;

&lt;td&gt;

&lt;div class="input-group" style="width: 100%"&gt;

&lt;label class="radio-inline" style="width: 50%"&gt;

&lt;input type="radio" name="Anamnesa\[gangguan_jiwa_dimasa_lalu\]" value="1" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Ya

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="Anamnesa\[gangguan_jiwa_dimasa_lalu\]" value="0" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Tidak Ada

&lt;/label&gt;

&lt;/div&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;&lt;label class="control-label"&gt;Status Perkawinan&lt;/label&gt;&lt;/td&gt;

&lt;td&gt;

&lt;input type="text" class="form-control input-sm" value="KAWIN" placeholder="" readonly=""&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;&lt;label class="control-label"&gt;Status ekonomi &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;&lt;/td&gt;

&lt;td&gt;

&lt;div class="input-group" style="width: 100%"&gt;

&lt;label class="radio-inline" style="width: 50%"&gt;

&lt;input type="radio" name="Anamnesa\[status_ekonomi\]" value="baik" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Baik

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="Anamnesa\[status_ekonomi\]" value="kurang" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Kurang

&lt;/label&gt;

&lt;/div&gt;

&lt;div class="input-group" style="width: 100%"&gt;

&lt;label class="radio-inline" style="width: 50%"&gt;

&lt;input type="radio" name="Anamnesa\[status_ekonomi\]" value="cukup" onchange="checkRadioRiwayatPsikologis(this)"&gt;

Cukup

&lt;/label&gt;

&lt;/div&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;&lt;label class="control-label"&gt;Hubungan dengan keluarga &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;&lt;/td&gt;

&lt;td&gt;

&lt;select class="form-control input-sm" name="Anamnesa\[hubungan_keluarga\]"&gt;

&lt;option value="" selected=""&gt;Pilih hubungan dengan keluarga&lt;/option&gt;

&lt;option value="harmonis"&gt;Harmonis&lt;/option&gt;

&lt;option value="kurang_harmonis"&gt;Kurang Harmonis&lt;/option&gt;

&lt;option value="tidak_harmonis"&gt;Tidak harmonis&lt;/option&gt;

&lt;option value="konflik"&gt;Konflik besar&lt;/option&gt;

&lt;/select&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;/tbody&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;script&gt;

function checkRadioRiwayatPsikologis(obj)

{

const requiredColumn = {"Anamnesa":\["dokter_id","keluhan_utama","lama_sakit_tahun","lama_sakit_bulan","lama_sakit_hari","terapi","terapi_non_obat","edukasi","dokter_id","keluhan_utama","lama_sakit_tahun","lama_sakit_bulan","lama_sakit_hari"\],"PeriksaFisik":\["sistole","diastole","detak_nadi","nafas","kesadaran","berat","tinggi","cara_ukur","lingkar_perut","skala_nyeri","sistole","diastole","detak_nadi","nafas","berat","tinggi","lingkar_perut"\],"MRiwayatPasien":\[\],"MAlergiPasien":\[\]};

console.log(requiredColumn);

let value = \$(obj).val();

const validMod = \$(obj).attr('name').includes('Anamnesa') ? 'Anamnesa' : 'PeriksaFisik';

const name = \$(obj).attr('name').replace(\`\${validMod}\[\`, '').replace('\]', '');

if(value == '1' || value == 'lainnya'){

\$(obj).closest('td').find('input\[type=text\]').show();

if (requiredColumn\[validMod\].includes(\`\${name}\_jelaskan\`)) {

\$(\`input\[name="\${validMod}\[\${name}\_jelaskan\]"\]\`).attr('required', true);

}

if (requiredColumn\[validMod\].includes(\`\${name}\_sebutkan\`)) {

\$(\`input\[name="\${validMod}\[\${name}\_sebutkan\]"\]\`).attr('required', true);

}

} else {

\$(obj).closest('td').find('input\[type=text\]').hide()

if (requiredColumn\[validMod\].includes(\`\${name}\_jelaskan\`)) {

\$(\`input\[name="\${validMod}\[\${name}\_jelaskan\]"\]\`).attr('required', false);

}

if (requiredColumn\[validMod\].includes(\`\${name}\_sebutkan\`)) {

\$(\`input\[name="\${validMod}\[\${name}\_sebutkan\]"\]\`).attr('required', false);

}

}

}

&lt;/script&gt; &lt;div class="col-sm-12"&gt;

&lt;div class="box box-bordered" id="PeriksaFisik"&gt;

&lt;div class="box-header with-border accordion-toggle" data-toggle="collapse" "="" data-target="#collapsePeriksaFisik" aria-expanded="true" aria-controls="collapseIdentitas"&gt;

&lt;label&gt;&lt;b&gt;Periksa Fisik&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered collapse in" id="collapsePeriksaFisik" aria-labelledby="headingTwo" data-parent="#PeriksaFisik"&gt;

&lt;div class="col-sm-6"&gt;

&lt;div class="form-group"&gt;

&lt;table class="table table-bordered table-condensed table-sortable" style="width:100%;" id="GSC"&gt;

&lt;tbody&gt;&lt;tr&gt;

&lt;td class="accordion-toggle" data-toggle="collapse" "="" data-target="#collapseGSC" aria-expanded="true" aria-controls="collapseIdentitas" colspan="3" style="font-size: 14px;font-weight:bold;padding-left:20px;"&gt;

Glasglow Coma Scale (GCS)

&lt;/td&gt;

&lt;/tr&gt;

&lt;/tbody&gt;&lt;tbody class="collapse in" id="collapseGSC" data-parent="#GSC"&gt;

&lt;tr&gt;

&lt;td width="45%"&gt;&lt;b&gt;Behaviour&lt;/b&gt;&lt;/td&gt;

&lt;td width="35%"&gt;&lt;b&gt;Respon&lt;/b&gt;&lt;/td&gt;

&lt;td style="text-align: center"&gt;&lt;b&gt;Skor&lt;/b&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;1. Membuka Mata &lt;span class="req_check" style="color:red;"&gt;&lt;/span&gt;&lt;/td&gt;

&lt;td&gt;

&lt;select class="form-control input-sm" name="PeriksaFisik\[membuka_mata\]" onchange="checkGsc()"&gt;

&lt;option value="" selected=""&gt;Pilih&lt;/option&gt;

&lt;option value="4"&gt;Spontan&lt;/option&gt;

&lt;option value="3"&gt;Terhadap rangsangan suara&lt;/option&gt;

&lt;option value="2"&gt;Terhadap nyeri&lt;/option&gt;

&lt;option value="1"&gt;Tidak ada&lt;/option&gt;

&lt;/select&gt;

&lt;/td&gt;

&lt;td class="score" style="text-align: center"&gt;0&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;2. Respon Verbal &lt;span class="req_check" style="color:red;"&gt;&lt;/span&gt;&lt;/td&gt;

&lt;td&gt;

&lt;select class="form-control input-sm" name="PeriksaFisik\[respon_verbal\]" onchange="checkGsc()"&gt;

&lt;option value="" selected=""&gt;Pilih&lt;/option&gt;

&lt;option value="5"&gt;Orientasi baik&lt;/option&gt;

&lt;option value="4"&gt;Orientasi terganggu&lt;/option&gt;

&lt;option value="3"&gt;Kata-kata tidak jelas&lt;/option&gt;

&lt;option value="2"&gt;Suara tidak jelas&lt;/option&gt;

&lt;option value="1"&gt;Tidak ada respon&lt;/option&gt;

&lt;/select&gt;

&lt;/td&gt;

&lt;td class="score" style="text-align: center"&gt;0&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;3. Respon Motorik &lt;span class="req_check" style="color:red;"&gt;&lt;/span&gt;&lt;/td&gt;

&lt;td&gt;

&lt;select class="form-control input-sm" name="PeriksaFisik\[respon_motorik\]" onchange="checkGsc()"&gt;

&lt;option value="" selected=""&gt;Pilih&lt;/option&gt;

&lt;option value="6"&gt;Mampu bergerak&lt;/option&gt;

&lt;option value="5"&gt;Melokalisasi nyeri&lt;/option&gt;

&lt;option value="4"&gt;Fleksi menarik&lt;/option&gt;

&lt;option value="3"&gt;Fleksi abnormal&lt;/option&gt;

&lt;option value="2"&gt;Ekstensi&lt;/option&gt;

&lt;option value="1"&gt;Tidak ada respon&lt;/option&gt;

&lt;/select&gt;

&lt;/td&gt;

&lt;td class="score" style="text-align: center"&gt;0&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td colspan="2" style="text-align: right"&gt;Total&lt;/td&gt;

&lt;td style="text-align: center;font-weight:bold" id="totalGSC"&gt;0&lt;/td&gt;

&lt;/tr&gt;

&lt;/tbody&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Kesadaran &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;input type="text" class="hidden form-control input-sm" readonly="" name="PeriksaFisik\[id\]" value="58643"&gt;

&lt;input type="text" class="hidden form-control input-sm" readonly="" name="PeriksaFisik\[pelayanan_id\]" value="63569"&gt;

&lt;select class="form-control input-sm" required="" name="PeriksaFisik\[kesadaran\]" style=""&gt;

&lt;option value="COMPOS MENTIS" selected=""&gt;COMPOS MENTIS&lt;/option&gt;

&lt;option value="SOMNOLEN"&gt;SOMNOLEN&lt;/option&gt;

&lt;option value="SOPOR"&gt;SOPOR&lt;/option&gt;

&lt;option value="COMA"&gt;COMA&lt;/option&gt;

&lt;/select&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Sistole &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;div class="input-group"&gt;

&lt;input type="number" id="sistole" pattern="\[0-9\]\*" inputmode="numeric" min="0" class="form-control input-sm" required="" name="PeriksaFisik\[sistole\]" value="130" placeholder="0" onchange="checkMap()"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;mm&lt;/label&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;p id="psistole"&gt;&lt;/p&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Diastole &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;div class="input-group"&gt;

&lt;input type="number" id="diastole" pattern="\[0-9\]\*" inputmode="numeric" min="0" class="form-control input-sm" required="" name="PeriksaFisik\[diastole\]" value="80" placeholder="0" onchange="checkMap()"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;Hg&lt;/label&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;p id="pdiastole"&gt;&lt;/p&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;MAP&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;div class="input-group"&gt;

&lt;input type="number" id="nilai-map" pattern="\[0-9\]\*" inputmode="numeric" min="0" class="form-control input-sm" name="PeriksaFisik\[map\]" value="96.67" placeholder="0" readonly=""&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;mmHg&lt;/label&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Tinggi Badan &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;div class="input-group"&gt;

&lt;input type="number" id="tinggi_badan" step="0.01" onchange="hitungImt();" required="" inputmode="numeric" min="0" class="form-control input-sm" name="PeriksaFisik\[tinggi\]" value="164" placeholder="0.00"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;cm&lt;/label&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;p id="ptb"&gt;&lt;/p&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Cara Ukur Tinggi Badan &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;select class="form-control input-sm" name="PeriksaFisik\[cara_ukur\]" id="cara_ukur" onchange="hitungImt();" required=""&gt;

&lt;option value="berdiri" selected=""&gt;Berdiri&lt;/option&gt;

&lt;option value="telentang"&gt;Telentang&lt;/option&gt;

&lt;/select&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Berat Badan &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;div class="input-group"&gt;

&lt;input type="number" id="berat_badan" step="0.01" onchange="hitungImt();" required="" inputmode="numeric" min="0" class="form-control input-sm" name="PeriksaFisik\[berat\]" value="50" placeholder="0.00"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;Kg&lt;/label&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;p id="pbb"&gt;&lt;/p&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Lingkar Perut &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;div class="input-group"&gt;

&lt;input type="number" step="0.1" required="" inputmode="numeric" min="0" class="form-control input-sm" name="PeriksaFisik\[lingkar_perut\]" value="88" placeholder="0.0" maxlength="3"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;cm&lt;/label&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;IMT &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;input type="text" maxlength="5" class="form-control input-sm" readonly="" name="PeriksaFisik\[imt\]" value="18.59" placeholder="0"&gt;

&lt;input type="text" class="form-control input-sm hidden" readonly="" name="data_imt" value="{"telentang":\[{"imt":18.5,"kategori":"KURANG"},{"imt":25,"kategori":"IDEAL"},{"imt":30,"kategori":"LEBIH"},{"imt":40,"kategori":"GEMUK"},{"imt":999,"kategori":"SANGAT GEMUK"}\],"berdiri":\[{"imt":18.5,"kategori":"KURANG"},{"imt":25,"kategori":"IDEAL"},{"imt":30,"kategori":"LEBIH"},{"imt":40,"kategori":"GEMUK"},{"imt":999,"kategori":"SANGAT GEMUK"}\]}"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Hasil IMT &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;input type="text" class="form-control input-sm" readonly="" name="PeriksaFisik\[hasil_imt\]" value="IDEAL" placeholder="-"&gt;

&lt;span id="imt_message" class="" style="font-size: 11px; color: red;display: none"&gt;Berpotensi menderita penyakit HT & DM&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-sm-6"&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Detak Nadi &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;div class="input-group"&gt;

&lt;input type="number" id="detak-nadi" pattern="\[0-9\]\*" required="" inputmode="numeric" min="0" class="form-control input-sm" name="PeriksaFisik\[detak_nadi\]" value="88" placeholder="0"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;/menit&lt;/label&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;p id="pdetak-nadi"&gt;&lt;/p&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Nafas &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;div class="input-group"&gt;

&lt;input type="number" id="nafas" pattern="\[0-9\]\*" required="" inputmode="numeric" min="0" class="form-control input-sm" name="PeriksaFisik\[nafas\]" value="20" placeholder="0"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;/menit&lt;/label&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;p id="pnafas"&gt;&lt;/p&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Saturasi (Sp02) &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;div class="input-group"&gt;

&lt;input type="number" step="0.1" inputmode="numeric" min="10" max="100" class="form-control input-sm" name="PeriksaFisik\[saturasi\]" value="" placeholder="0.0" maxlength="3"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;%&lt;/label&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Suhu &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;div class="input-group"&gt;

&lt;input type="number" step="0.1" inputmode="numeric" min="0" class="form-control input-sm" name="PeriksaFisik\[suhu\]" value="" placeholder="0.0" maxlength="3"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;°C&lt;/label&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Aktifitas Fisik dan Assessment Fungsional &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;table class="table table-bordered table-condensed table-sortable" style="width: 100%"&gt;

&lt;tbody&gt;&lt;tr&gt;

&lt;td&gt;&lt;b&gt;Jenis Aktifitas&lt;/b&gt;&lt;/td&gt;

&lt;td&gt;&lt;b&gt;Skor & Keterangan&lt;/b&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Mobilisasi&lt;/td&gt;

&lt;td&gt;

&lt;select class="form-control input-sm jenis-aktifitas" name="PeriksaFisik\[mobilisasi\]" onchange="checkJenisAktifitas()"&gt;

&lt;option value="" selected=""&gt;Pilih&lt;/option&gt;

&lt;option value="0"&gt;\[0\] Mandiri&lt;/option&gt;

&lt;option value="1"&gt;\[1\] Dibantu Sebagian&lt;/option&gt;

&lt;option value="2"&gt;\[2\] Perlu Bantuan Orang Lain&lt;/option&gt;

&lt;option value="3"&gt;\[3\] Perlu Bantuan Orang Lain Dan Alat&lt;/option&gt;

&lt;option value="4"&gt;\[4\] Tergantung / Tidak Mampu&lt;/option&gt;

&lt;/select&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Toileting&lt;/td&gt;

&lt;td&gt;

&lt;select class="form-control input-sm jenis-aktifitas" name="PeriksaFisik\[toileting\]" onchange="checkJenisAktifitas()"&gt;

&lt;option value="" selected=""&gt;Pilih&lt;/option&gt;

&lt;option value="0"&gt;\[0\] Mandiri&lt;/option&gt;

&lt;option value="1"&gt;\[1\] Dibantu Sebagian&lt;/option&gt;

&lt;option value="2"&gt;\[2\] Perlu Bantuan Orang Lain&lt;/option&gt;

&lt;option value="3"&gt;\[3\] Perlu Bantuan Orang Lain Dan Alat&lt;/option&gt;

&lt;option value="4"&gt;\[4\] Tergantung / Tidak Mampu&lt;/option&gt;

&lt;/select&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Makan/Minum&lt;/td&gt;

&lt;td&gt;

&lt;select class="form-control input-sm jenis-aktifitas" name="PeriksaFisik\[makan_minum\]" onchange="checkJenisAktifitas()"&gt;

&lt;option value="" selected=""&gt;Pilih&lt;/option&gt;

&lt;option value="0"&gt;\[0\] Mandiri&lt;/option&gt;

&lt;option value="1"&gt;\[1\] Dibantu Sebagian&lt;/option&gt;

&lt;option value="2"&gt;\[2\] Perlu Bantuan Orang Lain&lt;/option&gt;

&lt;option value="3"&gt;\[3\] Perlu Bantuan Orang Lain Dan Alat&lt;/option&gt;

&lt;option value="4"&gt;\[4\] Tergantung / Tidak Mampu&lt;/option&gt;

&lt;/select&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Mandi&lt;/td&gt;

&lt;td&gt;

&lt;select class="form-control input-sm jenis-aktifitas" name="PeriksaFisik\[mandi\]" onchange="checkJenisAktifitas()"&gt;

&lt;option value="" selected=""&gt;Pilih&lt;/option&gt;

&lt;option value="0"&gt;\[0\] Mandiri&lt;/option&gt;

&lt;option value="1"&gt;\[1\] Dibantu Sebagian&lt;/option&gt;

&lt;option value="2"&gt;\[2\] Perlu Bantuan Orang Lain&lt;/option&gt;

&lt;option value="3"&gt;\[3\] Perlu Bantuan Orang Lain Dan Alat&lt;/option&gt;

&lt;option value="4"&gt;\[4\] Tergantung / Tidak Mampu&lt;/option&gt;

&lt;/select&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Berpakaian&lt;/td&gt;

&lt;td&gt;

&lt;select class="form-control input-sm jenis-aktifitas" name="PeriksaFisik\[berpakaian\]" onchange="checkJenisAktifitas()"&gt;

&lt;option value="" selected=""&gt;Pilih&lt;/option&gt;

&lt;option value="0"&gt;\[0\] Mandiri&lt;/option&gt;

&lt;option value="1"&gt;\[1\] Dibantu Sebagian&lt;/option&gt;

&lt;option value="2"&gt;\[2\] Perlu Bantuan Orang Lain&lt;/option&gt;

&lt;option value="3"&gt;\[3\] Perlu Bantuan Orang Lain Dan Alat&lt;/option&gt;

&lt;option value="4"&gt;\[4\] Tergantung / Tidak Mampu&lt;/option&gt;

&lt;/select&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;&lt;b&gt;Skor&lt;/b&gt;&lt;/td&gt;

&lt;td style="text-align: center"&gt;&lt;b id="score_aktifitas"&gt;0&lt;/b&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;/tbody&gt;&lt;/table&gt;

&lt;textarea class="form-control input-sm" rows="2" name="PeriksaFisik\[aktifitas_fisik\]" maxlength="191" placeholder="Aktifitas Fisik dan Assessment Fungsional"&gt;&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Detak Jantung &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;div class="input-group"&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="PeriksaFisik\[detak_jantung\]" value="REGULAR" checked=""&gt;

&lt;span class="label" style="background-color: grey;"&gt;REGULAR&lt;/span&gt;

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="PeriksaFisik\[detak_jantung\]" value="IREGULAR"&gt;

&lt;span class="label" style="background-color: black;"&gt;IREGULAR&lt;/span&gt;

&lt;/label&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Triage &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;div class="input-group"&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="PeriksaFisik\[triage\]" value="GAWAT DARURAT"&gt;

&lt;span class="label" style="background-color: red"&gt;Gawat Darurat&lt;/span&gt;

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="PeriksaFisik\[triage\]" value="DARURAT"&gt;

&lt;span class="label label-warning"&gt;Darurat&lt;/span&gt;

&lt;/label&gt;

&lt;/div&gt;

&lt;div class="input-group"&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="PeriksaFisik\[triage\]" value="TIDAK GAWAT DARURAT" checked=""&gt;

&lt;span class="label" style="background-color: green"&gt;Tidak Gawat Darurat&lt;/span&gt;

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="PeriksaFisik\[triage\]" value="MENINGGAL"&gt;

&lt;span class="label" style="background-color: black"&gt;Meninggal&lt;/span&gt;

&lt;/label&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-sm-12"&gt;

&lt;div class="box box-bordered" id="AsesmenNyeri"&gt;

&lt;div class="box-header with-border accordion-toggle" data-toggle="collapse" "="" data-target="#collapseAsesmenNyeri" aria-expanded="true" aria-controls="collapseIdentitas"&gt;

&lt;label&gt;&lt;b&gt;Assesmen Nyeri&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered collapse in" id="collapseAsesmenNyeri" aria-labelledby="headingTwo" data-parent="#AsesmenNyeri"&gt;

&lt;div class="col-sm-6"&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Apakah pasien merasakan nyeri?&lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;div class="input-group"&gt;

&lt;label class="radio-inline" style="margin-right: 20px;"&gt;

&lt;input type="radio" name="PeriksaFisik\[merasakan_nyeri\]" value="1"&gt;

Ya

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="PeriksaFisik\[merasakan_nyeri\]" value="0"&gt;

Tidak

&lt;/label&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Pencetus&lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;input type="text" class="form-control input-sm" name="PeriksaFisik\[pencetus\]" value="" placeholder=""&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Kualitas&lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;select class="form-control input-sm" name="PeriksaFisik\[kualitas\]"&gt;

&lt;option value="" selected=""&gt;Pilih Kualitas&lt;/option&gt;

&lt;option value="tekanan"&gt;Tekanan&lt;/option&gt;

&lt;option value="terbakar"&gt;Terbakar&lt;/option&gt;

&lt;option value="melilit"&gt;Melilit&lt;/option&gt;

&lt;option value="tertusuk"&gt;Tertusuk&lt;/option&gt;

&lt;option value="diiris"&gt;Diiris&lt;/option&gt;

&lt;option value="mencengkram"&gt;Mencengkram&lt;/option&gt;

&lt;/select&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Lokasi&lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;input type="text" class="form-control input-sm" name="PeriksaFisik\[lokasi\]" value="" placeholder=""&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-sm-6"&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Skala Nyeri &lt;span class="asterix"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8 has-success"&gt;

&lt;label id="labelNyeri" style="font-size: large;"&gt;&lt;span class="label" style="background-color: #A8E044;color: black;"&gt;Tidak Nyeri&lt;/span&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;div class="col-sm-10 col-sm-offset-1"&gt;

&lt;input type="hidden" id="skala_nyeri" name="PeriksaFisik\[skala_nyeri\]" value="0"&gt;

&lt;div&gt;

&lt;img src="/images/ScalePain.png" style="width: 100%;"&gt;

&lt;/div&gt;

&lt;div class="range-wrap"&gt;

&lt;input type="range" name="PeriksaFisik\[skala_nyeri_slider\]" value="0" class="range" id="range-slider" min="0" max="10" data-toggle="tooltip" data-show-value="true" data-popup-enabled="true" data-mini="true" style="background: linear-gradient(to right, rgb(112, 214, 53) 0%, rgb(168, 224, 68) 0%, rgb(255, 255, 255) 0%, white 100%);" data-original-title="" title=""&gt;

&lt;output class="bubble" style="left: calc(0% + 8px);"&gt;&lt;svg xmlns="<http://www.w3.org/2000/svg>" width="32" height="33" viewBox="0 0 32 33" fill="none"&gt;

&lt;g clip-path="url(#clip0_4691_15848)"&gt;

&lt;path d="M15.9968 0.0124512C24.8347 0.0124512 31.9964 7.17686 31.9964 16.0121C31.9964 24.85 24.8347 32.0117 15.9968 32.0117C7.1589 32.0117 -0.00280762 24.8473 -0.00280762 16.0121C-0.00280762 7.17686 7.1616 0.0124512 15.9968 0.0124512Z" fill="#70D635"&gt;&lt;/path&gt;

&lt;path d="M7.67535 12.1646C7.67535 11.4103 8.28636 10.7993 9.04065 10.7993C9.79494 10.7993 10.4059 11.4103 10.4059 12.1646C10.4059 12.9162 9.79494 13.5299 9.04065 13.5299C8.28636 13.5299 7.67535 12.9162 7.67535 12.1646Z" fill="#3D8419"&gt;&lt;/path&gt;

&lt;path d="M21.5934 12.1646C21.5934 11.4103 22.2044 10.7993 22.956 10.7993C23.7103 10.7993 24.3213 11.4103 24.3213 12.1646C24.3213 12.9162 23.7103 13.5299 22.956 13.5299C22.2017 13.5299 21.5934 12.9162 21.5934 12.1646Z" fill="#3D8419"&gt;&lt;/path&gt;

&lt;path d="M23.7667 19.3048C23.253 20.9593 22.223 22.3868 20.8658 23.4033C19.5086 24.4199 17.827 25.0201 15.9994 25.0201C14.1718 25.0201 12.4902 24.4199 11.133 23.4033C9.77582 22.3868 8.74577 20.9593 8.23209 19.3048C8.14017 19.0101 7.82656 18.8452 7.53187 18.9371C7.23718 19.029 7.07227 19.3426 7.16419 19.6373C7.75086 21.5217 8.9215 23.1465 10.4625 24.2982C12.0035 25.4526 13.9231 26.1366 15.9967 26.1366C18.0703 26.1366 19.9898 25.4526 21.5336 24.2982C23.0773 23.1438 24.2479 21.519 24.8346 19.6373C24.9265 19.3426 24.7616 19.029 24.4669 18.9371C24.1722 18.8452 23.8586 19.0101 23.7667 19.3048Z" fill="#3D8419"&gt;&lt;/path&gt;

&lt;path d="M8.11599 18.5856L6.5317 19.3426C6.25324 19.4778 6.13699 19.8103 6.26946 20.0888C6.40193 20.3673 6.73717 20.4835 7.01564 20.3511L8.59722 19.5914C8.87568 19.4589 8.99194 19.1264 8.85946 18.8479C8.72699 18.5694 8.39175 18.4505 8.11328 18.5856H8.11599Z" fill="#3D8419"&gt;&lt;/path&gt;

&lt;path d="M23.3992 19.594L24.9808 20.3537C25.2593 20.4862 25.5918 20.37 25.727 20.0915C25.8594 19.813 25.7432 19.4805 25.4647 19.3453L23.8804 18.5883C23.602 18.4531 23.2694 18.5721 23.1343 18.8506C23.0018 19.129 23.118 19.4643 23.3965 19.594H23.3992Z" fill="#3D8419"&gt;&lt;/path&gt;

&lt;path d="M10.4764 6.9325C10.1951 6.8825 9.9014 6.87625 9.6264 6.90125C9.00765 6.9575 8.4139 7.13875 7.9014 7.48875C7.7139 7.61375 7.6139 7.87625 7.7514 8.0825C7.87015 8.27 8.14515 8.37625 8.34515 8.2325C8.47015 8.145 8.60765 8.07 8.7389 8.00125C8.7639 7.98875 8.8014 7.96375 8.83265 7.9575C8.7764 7.9825 8.77015 7.9825 8.8139 7.96375C8.83265 7.9575 8.8514 7.95125 8.87015 7.945C8.93265 7.92 8.99515 7.90125 9.0639 7.8825C9.18265 7.845 9.30765 7.82 9.4264 7.795C9.4514 7.78875 9.4764 7.78875 9.5014 7.7825C9.53265 7.77625 9.6514 7.76375 9.50765 7.7825C9.55765 7.77625 9.6139 7.77 9.6639 7.76375C9.8264 7.75125 10.0014 7.745 10.1639 7.7575C10.2139 7.76375 10.2639 7.76375 10.3076 7.77C10.3764 7.77625 10.1639 7.75125 10.2389 7.76375C10.2451 7.76375 10.2514 7.76375 10.2576 7.76375C10.4826 7.80125 10.7326 7.7075 10.7951 7.46375C10.8264 7.2575 10.7201 6.97625 10.4764 6.9325Z" fill="#3D8419"&gt;&lt;/path&gt;

&lt;path d="M21.1689 7.95035C21.2314 7.9316 21.3002 7.9191 21.3752 7.9066C21.4064 7.90035 21.4439 7.8941 21.4814 7.88785C21.5502 7.87535 21.3502 7.9066 21.4502 7.8941C21.4689 7.8941 21.4877 7.88785 21.5064 7.88785C21.6002 7.87535 21.7064 7.8691 21.8064 7.8691C21.9189 7.86285 22.0377 7.8691 22.1502 7.87535C22.2127 7.8816 22.2689 7.88785 22.3377 7.8941C22.4314 7.90035 22.2377 7.87535 22.3314 7.8941C22.3689 7.90035 22.4064 7.9066 22.4377 7.91285C22.5689 7.93785 22.7064 7.9691 22.8314 8.01285C22.8564 8.0191 22.8877 8.0316 22.9127 8.0441C22.9252 8.05035 23.0377 8.0941 22.9752 8.0691C22.9127 8.0441 23.0252 8.0941 23.0314 8.0941C23.0689 8.11285 23.1064 8.1316 23.1377 8.15035C23.3377 8.2566 23.6127 8.2066 23.7314 8.00035C23.8377 7.7941 23.7877 7.52535 23.5814 7.4066C23.0439 7.1191 22.4377 7.00035 21.8252 7.01285C21.5314 7.0191 21.2252 7.05035 20.9439 7.12535C20.7252 7.1816 20.5689 7.43785 20.6439 7.66285C20.7127 7.87535 20.9377 8.01285 21.1689 7.95035Z" fill="#3D8419"&gt;&lt;/path&gt;

&lt;/g&gt;

&lt;defs&gt;

&lt;clipPath id="clip0_4691_15848"&gt;

&lt;rect width="31.9992" height="32" fill="white" transform="translate(0 0.0119629)"&gt;&lt;/rect&gt;

&lt;/clipPath&gt;

&lt;/defs&gt;

&lt;/svg&gt;&lt;/output&gt;&lt;br&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group" style="border-top: 1px solid var(--border-border-main, #DDD);"&gt;

&lt;label class="col-sm-4 control-label"&gt;Waktu&lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;div class="input-group"&gt;

&lt;label class="radio-inline" style="margin-right: 20px;"&gt;

&lt;input type="radio" name="PeriksaFisik\[waktu\]" value="1"&gt;

Intermiten

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="PeriksaFisik\[waktu\]" value="0"&gt;

Hilang timbul

&lt;/label&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-sm-12"&gt;

&lt;div class="box box-bordered" id="AsesmenResikoJatuh"&gt;

&lt;div class="box-header with-border accordion-toggle" data-toggle="collapse" "="" data-target="#collapseAsesmenResikoJatuh" aria-expanded="true" aria-controls="collapseIdentitas"&gt;

&lt;label&gt;&lt;b&gt;Assesmen Resiko Jatuh (Get Up and Go)&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered collapse in" id="collapseAsesmenResikoJatuh" aria-labelledby="headingTwo" data-parent="#AsesmenResikoJatuh"&gt;

&lt;div class="col-sm-12"&gt;

&lt;table class="table table-hover table-condensed" style="width:100%"&gt;

&lt;tbody&gt;&lt;tr&gt;

&lt;td&gt;a.&lt;/td&gt;

&lt;td&gt;Perhatikan cara berjalan pasien saat akan duduk di kursi. Apakah pasien tampak tidak seimbang (sempoyongan/tumbang)?&lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/td&gt;

&lt;td width="15%"&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="PeriksaFisik\[cara_berjalan\]" value="1" onchange="checkAssesmentResikoJatuh()"&gt;

Ya

&lt;/label&gt;

&lt;/td&gt;

&lt;td width="20%"&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="PeriksaFisik\[cara_berjalan\]" value="0" onchange="checkAssesmentResikoJatuh()"&gt;

Tidak

&lt;/label&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;b.&lt;/td&gt;

&lt;td&gt;Apakah pasien memegang pinggiran kursi atau meja atau benda lain sebagai penopang saat duduk?&lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/td&gt;

&lt;td width="15%"&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="PeriksaFisik\[penopang\]" value="1" onchange="checkAssesmentResikoJatuh()"&gt;

Ya

&lt;/label&gt;

&lt;/td&gt;

&lt;td width="20%"&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="PeriksaFisik\[penopang\]" value="0" onchange="checkAssesmentResikoJatuh()"&gt;

Tidak

&lt;/label&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td colspan="4"&gt;&lt;b&gt;Hasil Kegiatan: &lt;/b&gt;&lt;span id="label-resikojatuh" class="label label-success"&gt;Tidak Beresiko&lt;/span&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;/tbody&gt;&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-sm-12"&gt;

&lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;Lainnya&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="col-sm-12" style="padding:0px;"&gt;

&lt;div class="col-sm-6"&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label"&gt;Terapi Obat yang dianjurkan&lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9 has-success"&gt;

&lt;textarea id="text_terapi" class="form-control input-sm" rows="2" name="Anamnesa\[terapi\]" maxlength="256" placeholder="Terapi Obat" required=""&gt;obat&lt;/textarea&gt;

&lt;p id="pterapi"&gt;&lt;/p&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label"&gt;Terapi Non Obat yang dianjurkan&lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9 has-success"&gt;

&lt;textarea id="text_terapi_non_obat" class="form-control input-sm" rows="2" name="Anamnesa\[terapi_non_obat\]" maxlength="256" placeholder="Terapi Non Obat" required=""&gt;diet seimbang&lt;/textarea&gt;

&lt;p id="pterapi-non"&gt;&lt;/p&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label"&gt;BMHP yang digunakan&lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9 has-success"&gt;

&lt;textarea id="text_bmhp" class="form-control input-sm" rows="2" name="Anamnesa\[bmhp\]" maxlength="256" placeholder="Bahan Medis Habis Pakai (BMHP)"&gt;&lt;/textarea&gt;

&lt;p id="bmhp"&gt;&lt;/p&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label"&gt;Rencana &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9 has-success"&gt;

&lt;textarea id="text_riwayat" class="form-control input-sm" rows="2" name="Anamnesa\[rencana_tindakan\]" maxlength="256" placeholder="Rencana Tindakan"&gt;&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-sm-6"&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Merokok &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;div class="input-group"&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="Anamnesa\[merokok\]" value="0" checked=""&gt;

&lt;span class="label" style="background-color: black;"&gt;Tidak&lt;/span&gt;

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="Anamnesa\[merokok\]" value="1"&gt;

&lt;span class="label" style="background-color: grey;"&gt;Ya&lt;/span&gt;

&lt;/label&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Konsumsi Alkohol &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;div class="input-group"&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="Anamnesa\[konsumsi_alkohol\]" value="0" checked=""&gt;

&lt;span class="label" style="background-color: black;"&gt;Tidak&lt;/span&gt;

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="Anamnesa\[konsumsi_alkohol\]" value="1"&gt;

&lt;span class="label" style="background-color: grey;"&gt;Ya&lt;/span&gt;

&lt;/label&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Kurang Sayur/Buah &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;div class="input-group"&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="Anamnesa\[kurang_sayur_buah\]" value="0" checked=""&gt;

&lt;span class="label" style="background-color: black;"&gt;Tidak&lt;/span&gt;

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="Anamnesa\[kurang_sayur_buah\]" value="1"&gt;

&lt;span class="label" style="background-color: grey;"&gt;Ya&lt;/span&gt;

&lt;/label&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-sm-6"&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label"&gt;Tipe Askep &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;div class="input-group"&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="tipeaskep" value="text" checked="" onclick="setAskep(true)"&gt;

Text

&lt;/label&gt;

&lt;label class="radio-inline"&gt;

&lt;input type="radio" name="tipeaskep" value="soap" onclick="setAskep(false)"&gt;

SOAP

&lt;/label&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label"&gt;Edukasi &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9 has-success"&gt;

&lt;textarea id="text_edukasi" class="form-control input-sm" rows="2" name="Anamnesa\[edukasi\]" placeholder="Edukasi" required=""&gt;istirhat cukup&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group askep-text" style="display:"&gt;

&lt;label class="col-sm-3 control-label"&gt;Deskripsi Askep &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9 has-success"&gt;

&lt;textarea id="text_riwayat" class="form-control input-sm" rows="2" name="Anamnesa\[askep\]" maxlength="256" placeholder="Asuhan Keperawatan "&gt;&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label"&gt;Observasi &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9 has-success"&gt;

&lt;textarea id="text_riwayat" class="form-control input-sm" rows="2" name="Anamnesa\[observasi\]" placeholder="Obeservasi"&gt;&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label"&gt;Ket &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9 has-success"&gt;

&lt;textarea id="text_keterangan" class="form-control input-sm" rows="2" name="Anamnesa\[keterangan\]" maxlength="256" placeholder="Keterangan Lainya"&gt;&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label"&gt;Biopsikososial &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9 has-success"&gt;

&lt;textarea id="text_biopsikososial" class="form-control input-sm" rows="2" name="Anamnesa\[biopsikososial\]" maxlength="256" placeholder="Biopsikososial"&gt;&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label"&gt;Tindakan Keperawatan &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9 has-success"&gt;

&lt;textarea id="tindakan_keperawatan" class="form-control input-sm" rows="2" name="Anamnesa\[tindakan_keperawatan\]" placeholder="Tindakan Keperawatan "&gt;&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;style type="text/css"&gt;

.table>tbody>tr>td{

vertical-align: top;

}

# form_create_msoap {

background-color: #eaf2ff;

}

.my-td {

position: relative;

}

.my-data {

min-height: 95px;

}

.my-data-top {

padding-bottom: 50px;

}

.my-data-bottom {

position: absolute;

padding: 5px 5px 0 0px;

bottom: 5px;

}

# button_save_msoap {

margin-bottom: unset;

}

.kode-msoap {

margin-bottom: 5px;

}

&lt;/style&gt;

&lt;div class="col-sm-12 askep-soap" style="display:none"&gt;

&lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;Asuhan Keperawatan : SOAP &lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="col-sm-12"&gt;

&lt;div class="table-responsive"&gt;

&lt;table class="table table-bordered table-hover"&gt;

&lt;thead&gt;

&lt;tr class="btn-primary"&gt;

&lt;td width="2%"&gt;No.&lt;/td&gt;

&lt;td width="24.5%"&gt;Subjective&lt;/td&gt;

&lt;td width="24.5%"&gt;Objective&lt;/td&gt;

&lt;td width="24.5%"&gt;Assessment&lt;/td&gt;

&lt;td width="24.5%"&gt;Planning&lt;/td&gt;

&lt;td align="center"&gt;&lt;input type="checkbox" value="1" id="check_all_soap"&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;/thead&gt;

&lt;tbody id="table_soap"&gt;

&lt;/tbody&gt;

&lt;tfoot&gt;

&lt;tr&gt;

&lt;td colspan="9"&gt;

&lt;div class="pull-left"&gt;

&lt;button id="button_add_msoap" type="button" class="btn btn-sm btn-primary" onclick="addMSoap()"&gt;Kelola SOAP&lt;/button&gt;

&lt;button id="button_finish_msoap" type="button" class="btn btn-sm btn-primary" style="display: none;"&gt;Selesai&lt;/button&gt;

&lt;/div&gt;

&lt;div class="pull-right"&gt;

&lt;button id="button_delete_soap" type="button" formnovalidate="" class="btn btn-sm btn-danger" onclick="destroyDetailChecked(this);"&gt;Hapus&lt;/button&gt;

&lt;button id="button_add_soap" type="button" class="btn btn-sm btn-info"&gt; Tambah&lt;/button&gt;

&lt;/div&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;/tfoot&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;link href="<https://kotakediri.epuskesmas.id/lib/taggd/dist/taggd.css>" type="text/css" rel="stylesheet"&gt;

&lt;div class="col-sm-12"&gt;

&lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;Keadaan Fisik&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="col-sm-6"&gt;

&lt;div class="form-group"&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[1\]" onchange="aksiCheckMaster(this,1)"&gt;

Pemeriksaan Kulit

&lt;/label&gt;

&lt;ul id="ulHidden\[1\]" hidden=""&gt;

inspeksi

&lt;br&gt;

&lt;textarea id="ulHidden\[1\]" name="PeriksaFisik\[kulit\]\[Inspeksi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt; Normal : kulit tidak ada ikterik/pucat/sianosis &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[1\]" hidden=""&gt;

palpasi

&lt;br&gt;

&lt;textarea id="ulHidden\[1\]" name="PeriksaFisik\[kulit\]\[Palpasi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt; Normal : lembab, turgor baik/elastic, tidak ada edema &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[2\]" onchange="aksiCheckMaster(this,2)"&gt;

Pemeriksaan Kuku

&lt;/label&gt;

&lt;ul id="ulHidden\[2\]" hidden=""&gt;

inspeksi

&lt;br&gt;

&lt;textarea id="ulHidden\[2\]" name="PeriksaFisik\[kuku\]\[Inspeksi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : bersih, bentuk normal tidak ada tanda-tanda jari tabuh (clubbing finger), tidak ikterik/sianosis &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[2\]" hidden=""&gt;

palpasi

&lt;br&gt;

&lt;textarea id="ulHidden\[2\]" name="PeriksaFisik\[kuku\]\[Palpasi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : aliran darah kuku akan kembali &lt; 3 detik </textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[3\]" onchange="aksiCheckMaster(this,3)"&gt;

Pemeriksaan Kepala

&lt;/label&gt;

&lt;ul id="ulHidden\[3\]" hidden=""&gt;

inspeksi

&lt;br&gt;

&lt;textarea id="ulHidden\[3\]" name="PeriksaFisik\[kepala\]\[Inspeksi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : simetris, bersih, tidak ada lesi, tidak menunjukkan tanda-tanda kekurangan gizi(rambut jagung dan kering) &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[3\]" hidden=""&gt;

palpasi

&lt;br&gt;

&lt;textarea id="ulHidden\[3\]" name="PeriksaFisik\[kepala\]\[Palpasi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : tidak ada penonjolan /pembengkakan, rambut lebat dan kuat/tidak rapuh &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[4\]" onchange="aksiCheckMaster(this,4)"&gt;

Pemeriksaan Wajah

&lt;/label&gt;

&lt;ul id="ulHidden\[4\]" hidden=""&gt;

inspeksi

&lt;br&gt;

&lt;textarea id="ulHidden\[4\]" name="PeriksaFisik\[wajah\]\[Inspeksi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : warna sama dengan bagian tubuh lain, tidak pucat/ikterik, simetris &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[4\]" hidden=""&gt;

palpasi

&lt;br&gt;

&lt;textarea id="ulHidden\[4\]" name="PeriksaFisik\[wajah\]\[Palpasi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : tidak ada nyeri tekan dan edema &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[5\]" onchange="aksiCheckMaster(this,5)"&gt;

Pemeriksaan Mata

&lt;/label&gt;

&lt;ul id="ulHidden\[5\]" hidden=""&gt;

inspeksi

&lt;br&gt;

&lt;textarea id="ulHidden\[5\]" name="PeriksaFisik\[mata\]\[Inspeksi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : simetris mata kika, simetris bola mata kika, warna konjungtiva pink, dan sclera berwarna putih &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[6\]" onchange="aksiCheckMaster(this,6)"&gt;

Pemeriksaan Telinga

&lt;/label&gt;

&lt;ul id="ulHidden\[6\]" hidden=""&gt;

inspeksi

&lt;br&gt;

&lt;textarea id="ulHidden\[6\]" name="PeriksaFisik\[telinga\]\[Inspeksi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : bentuk dan posisi simetris kika, integritas kulit bagus, warna sama dengan kulit lain, tidak ada tanda-tanda infeksi, dan alat bantu dengar &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[6\]" hidden=""&gt;

palpasi

&lt;br&gt;

&lt;textarea id="ulHidden\[6\]" name="PeriksaFisik\[telinga\]\[Palpasi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : tidak ada nyeri tekan &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[7\]" onchange="aksiCheckMaster(this,7)"&gt;

Pemeriksaan Hidung dan Sinus

&lt;/label&gt;

&lt;ul id="ulHidden\[7\]" hidden=""&gt;

inspeksi

&lt;br&gt;

&lt;textarea id="ulHidden\[7\]" name="PeriksaFisik\[hidung_sinus\]\[Inspeksi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : simetris kika, warna sama dengan warna kulit lain, tidak ada lesi, tidak ada sumbatan, perdarahan dan tanda-tanda infeksi &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[7\]" hidden=""&gt;

palpasi dan perkusi

&lt;br&gt;

&lt;textarea id="ulHidden\[7\]" name="PeriksaFisik\[hidung_sinus\]\[Palpasi dan Perkusi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : tidak ada bengkak dan nyeri tekan &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[8\]" onchange="aksiCheckMaster(this,8)"&gt;

Pemeriksaan Mulut dan Bibir

&lt;/label&gt;

&lt;ul id="ulHidden\[8\]" hidden=""&gt;

inspeksi dan palpasi struktur luar

&lt;br&gt;

&lt;textarea id="ulHidden\[8\]" name="PeriksaFisik\[mulut_bibir\]\[Inspeksi dan Palpasi Struktur Luar\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : warna mukosa mulut dan bibir pink, lembab, tidak ada lesi dan stomatitis &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[8\]" hidden=""&gt;

inspeksi dan palpasi strukur dalam

&lt;br&gt;

&lt;textarea id="ulHidden\[8\]" name="PeriksaFisik\[mulut_bibir\]\[Inspeksi dan Palpasi Strukur Dalam\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : gigi lengkap, tidak ada tanda-tanda gigi berlobang atau kerusakan gigi, tidak ada perdarahan atau radang gusi, lidah simetris, warna pink, langit2 utuh dan tidak ada tanda infeksi &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-sm-6"&gt;

&lt;div class="form-group"&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[9\]" onchange="aksiCheckMaster(this,9)"&gt;

Pemeriksaan Leher

&lt;/label&gt;

&lt;ul id="ulHidden\[9\]" hidden=""&gt;

inspeksi leher

&lt;br&gt;

&lt;textarea id="ulHidden\[9\]" name="PeriksaFisik\[leher\]\[Inspeksi Leher\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : warna sama dengan kulit lain, integritas kulit baik, bentuk simetris, tidak ada pembesaran kelenjer gondok &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[9\]" hidden=""&gt;

inspeksi dan auskultasi arteri karotis

&lt;br&gt;

&lt;textarea id="ulHidden\[9\]" name="PeriksaFisik\[leher\]\[Inspeksi dan Auskultasi Arteri Karotis\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : arteri karotis terdengar &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[9\]" hidden=""&gt;

inspeksi dan palpasi kelenjer tiroid

&lt;br&gt;

&lt;textarea id="ulHidden\[9\]" name="PeriksaFisik\[leher\]\[Inspeksi dan Palpasi Kelenjer Tiroid\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : tidak teraba pembesaran kel.gondok, tidak ada nyeri, tidak ada pembesaran kel.limfe, tidak ada nyeri &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[9\]" hidden=""&gt;

auskultasi (bising pembuluh darah)

&lt;br&gt;

&lt;textarea id="ulHidden\[9\]" name="PeriksaFisik\[leher\]\[Auskultasi (Bising Pembuluh Darah)\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[10\]" onchange="aksiCheckMaster(this,10)"&gt;

Pemeriksaan Dada dan Punggung

&lt;/label&gt;

&lt;ul id="ulHidden\[10\]" hidden=""&gt;

inspeksi

&lt;br&gt;

&lt;textarea id="ulHidden\[10\]" name="PeriksaFisik\[dada_punggung\]\[Inspeksi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt; Normal : simetris, bentuk dan postur normal, tidak ada tanda-tanda distress pernapasan, warna kulit sama dengan warna kulit lain, tidak ikterik/sianosis, tidak ada pembengkakan/penonjolan/edema &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[10\]" hidden=""&gt;

palpasi

&lt;br&gt;

&lt;textarea id="ulHidden\[10\]" name="PeriksaFisik\[dada_punggung\]\[Palpasi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt; Normal : integritas kulit baik, tidak ada nyeri tekan/massa/tanda-tanda peradangan, ekspansi simetris, taktil vremitus cendrung sebelah kanan lebih teraba jelas &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[10\]" hidden=""&gt;

perkusi

&lt;br&gt;

&lt;textarea id="ulHidden\[10\]" name="PeriksaFisik\[dada_punggung\]\[Perkusi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt; Normal : resonan ("dug dug dug"), jika bagian padat lebih daripada bagian udara = pekak ("bleg bleg bleg"), jika bagian udara lebih besar dari bagian padat=hiperesonan ("deng deng deng"), batas jantung=bunyi rensonan----hilang>>redup &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[10\]" hidden=""&gt;

auskultasi

&lt;br&gt;

&lt;textarea id="ulHidden\[10\]" name="PeriksaFisik\[dada_punggung\]\[Auskultasi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt; Normal : bunyi napas vesikuler, bronchovesikuler, brochial, tracheal &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[11\]" onchange="aksiCheckMaster(this,11)"&gt;

Pemeriksaan Kardiovaskuler

&lt;/label&gt;

&lt;ul id="ulHidden\[11\]" hidden=""&gt;

inspeksi

&lt;br&gt;

&lt;textarea id="ulHidden\[11\]" name="PeriksaFisik\[kardiovaskuler\]\[Inspeksi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : denyutan aorta teraba &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[11\]" hidden=""&gt;

palpasi

&lt;br&gt;

&lt;textarea id="ulHidden\[11\]" name="PeriksaFisik\[kardiovaskuler\]\[Palpasi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : denyutan aorta teraba &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[11\]" hidden=""&gt;

perkusi

&lt;br&gt;

&lt;textarea id="ulHidden\[11\]" name="PeriksaFisik\[kardiovaskuler\]\[Perkusi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : batas jantung, tidak lebih dari 4,7,10 cm ke arah kiri dari garis mid sterna, pada RIC 4,5,dan 8 &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[11\]" hidden=""&gt;

auskultasi

&lt;br&gt;

&lt;textarea id="ulHidden\[11\]" name="PeriksaFisik\[kardiovaskuler\]\[Auskultasi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : terdengar bunyi jantung I/S1 (lub) dan bunyi jantung II/S2 (dub), tidak ada bunyi jantung tambahan (S3 atau S4) &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[12\]" onchange="aksiCheckMaster(this,12)"&gt;

Pemeriksaan Dada dan Aksila

&lt;/label&gt;

&lt;ul id="ulHidden\[12\]" hidden=""&gt;

inspeksi dada

&lt;br&gt;

&lt;textarea id="ulHidden\[12\]" name="PeriksaFisik\[dada_aksila\]\[Inspeksi Dada\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[12\]" hidden=""&gt;

palpasi dada

&lt;br&gt;

&lt;textarea id="ulHidden\[12\]" name="PeriksaFisik\[dada_aksila\]\[Palpasi Dada\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[12\]" hidden=""&gt;

inspeksi dan palpasi aksila

&lt;br&gt;

&lt;textarea id="ulHidden\[12\]" name="PeriksaFisik\[dada_aksila\]\[Inspeksi dan Palpasi Aksila\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[13\]" onchange="aksiCheckMaster(this,13)"&gt;

Pemeriksaan Abdomen Perut

&lt;/label&gt;

&lt;ul id="ulHidden\[13\]" hidden=""&gt;

inspeksi

&lt;br&gt;

&lt;textarea id="ulHidden\[13\]" name="PeriksaFisik\[abdomen_perut\]\[Inspeksi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : simetris kika, warna dengan warna kulit lain, tidak ikterik tidak terdapat ostomy, distensi, tonjolan, pelebaran vena, kelainan umbilicus &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[13\]" hidden=""&gt;

auskultasi

&lt;br&gt;

&lt;textarea id="ulHidden\[13\]" name="PeriksaFisik\[abdomen_perut\]\[Auskultasi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : suara peristaltic terdengar setiap 5-20x/dtk, terdengar denyutan arteri renalis, arteri iliaka dan aorta &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[13\]" hidden=""&gt;

perkusi semua kuadran

&lt;br&gt;

&lt;textarea id="ulHidden\[13\]" name="PeriksaFisik\[abdomen_perut\]\[Perkusi Semua Kuadran\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[13\]" hidden=""&gt;

perkusi hepar

&lt;br&gt;

&lt;textarea id="ulHidden\[13\]" name="PeriksaFisik\[abdomen_perut\]\[Perkusi Hepar\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[13\]" hidden=""&gt;

perkusi limfa

&lt;br&gt;

&lt;textarea id="ulHidden\[13\]" name="PeriksaFisik\[abdomen_perut\]\[Perkusi Limfa\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[13\]" hidden=""&gt;

perkusi ginjal

&lt;br&gt;

&lt;textarea id="ulHidden\[13\]" name="PeriksaFisik\[abdomen_perut\]\[Perkusi Ginjal\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[13\]" hidden=""&gt;

palpasi semua kuadran

&lt;br&gt;

&lt;textarea id="ulHidden\[13\]" name="PeriksaFisik\[abdomen_perut\]\[Palpasi Semua Kuadran\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : tidak teraba penonjolan tidak ada nyeri tekan, tidak ada massa dan penumpukan cairan &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[14\]" onchange="aksiCheckMaster(this,14)"&gt;

Pemeriksaan Ekstermitas Atas (Bahu, Siku, Tangan)

&lt;/label&gt;

&lt;ul id="ulHidden\[14\]" hidden=""&gt;

inspeksi struktur muskuloskletal

&lt;br&gt;

&lt;textarea id="ulHidden\[14\]" name="PeriksaFisik\[ekstermitas_atas\]\[Inspeksi Struktur Muskuloskletal\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : simetris kika, integritas kulit baik, ROM aktif, kekuatan otot penuh &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[14\]" hidden=""&gt;

palpasi

&lt;br&gt;

&lt;textarea id="ulHidden\[14\]" name="PeriksaFisik\[ekstermitas_atas\]\[Palpasi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : teraba jelas &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[14\]" hidden=""&gt;

tes reflex

&lt;br&gt;

&lt;textarea id="ulHidden\[14\]" name="PeriksaFisik\[ekstermitas_atas\]\[Tes Reflex\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : reflek bisep dan trisep positif &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[15\]" onchange="aksiCheckMaster(this,15)"&gt;

Pemeriksaan Ekstermitas Bawah (Panggul, Lutut, Pergelangan Kaki dan Telapak Kaki)

&lt;/label&gt;

&lt;ul id="ulHidden\[15\]" hidden=""&gt;

inspeksi struktur muskuloskletal

&lt;br&gt;

&lt;textarea id="ulHidden\[15\]" name="PeriksaFisik\[ekstermitas_bawah\]\[Inspeksi Struktur Muskuloskletal\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : simetris kika, integritas kulit baik, ROM aktif, kekuatan otot penuh &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[15\]" hidden=""&gt;

palpasi

&lt;br&gt;

&lt;textarea id="ulHidden\[15\]" name="PeriksaFisik\[ekstermitas_bawah\]\[Palpasi\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : teraba jelas &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[15\]" hidden=""&gt;

tes reflex

&lt;br&gt;

&lt;textarea id="ulHidden\[15\]" name="PeriksaFisik\[ekstermitas_bawah\]\[Tes Reflex\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : reflex patella dan archiles positif &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div class="form-group" id="genitalia_wanita" hidden=""&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[16\]" onchange="aksiCheckMaster(this,16)"&gt;

Pemeriksaan Genitalia Wanita

&lt;/label&gt;

&lt;ul id="ulHidden\[16\]" hidden=""&gt;

inspeksi genitalia eksternal

&lt;br&gt;

&lt;textarea id="ulHidden\[16\]" name="PeriksaFisik\[genitalia_wanita\]\[Inspeksi Genitalia Eksternal\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : bersih, mukosa lembab, integritas kulit baik, semetris tidak ada edema dan tanda-tanda infeksi (pengeluaran pus /bau) &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[16\]" hidden=""&gt;

inspeksi vagina dan servik

&lt;br&gt;

&lt;textarea id="ulHidden\[16\]" name="PeriksaFisik\[genitalia_wanita\]\[Inspeksi Vagina dan Servik\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[16\]" hidden=""&gt;

palpasi vagina, uterus dan ovarium

&lt;br&gt;

&lt;textarea id="ulHidden\[16\]" name="PeriksaFisik\[genitalia_wanita\]\[Palpasi Vagina, Uterus dan Ovarium\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[16\]" hidden=""&gt;

pemeriksaan anus dan rectum

&lt;br&gt;

&lt;textarea id="ulHidden\[16\]" name="PeriksaFisik\[genitalia_wanita\]\[Pemeriksaan Anus dan Rectum\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : tidak ada nyeri, tidak terdapat edema / hemoroid/ polip/ tanda-tanda infeksi dan pendarahan &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div class="form-group" id="genitalia_pria"&gt;

&lt;ul&gt;

&lt;label&gt;

&lt;input type="checkbox" id="textareaFisik\[17\]" onchange="aksiCheckMaster(this,17)"&gt;

Pemeriksaan Genitalia Pria

&lt;/label&gt;

&lt;ul id="ulHidden\[17\]" hidden=""&gt;

inspeksi dan palpasi penis

&lt;br&gt;

&lt;textarea id="ulHidden\[17\]" name="PeriksaFisik\[genitalia_pria\]\[Inspeksi dan Palpasi Penis\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : integritas kulit baik, tidak ada masa atau pembengkakan, tidak ada pengeluaran pus atau darah &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[17\]" hidden=""&gt;

inspeksi dan palpasi skrotum

&lt;br&gt;

&lt;textarea id="ulHidden\[17\]" name="PeriksaFisik\[genitalia_pria\]\[Inspeksi dan Palpasi Skrotum\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;ul id="ulHidden\[17\]" hidden=""&gt;

pemeriksaan anus dan rectum

&lt;br&gt;

&lt;textarea id="ulHidden\[17\]" name="PeriksaFisik\[genitalia_pria\]\[Pemeriksaan Anus dan Rectum\]" class="form-control" rows="2" cols="80" style="font-style: italic;font-size:11px;" disabled=""&gt;Normal : tidak ada nyeri , tidak terdapat edema / hemoroid/ polip/ tanda-tanda infeksi dan pendarahan &lt;/textarea&gt;

&lt;br&gt;

&lt;/ul&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-sm-12"&gt;

&lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;Anatomi Tubuh&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="taggd"&gt;&lt;img id="img_anatomi" src="/images/anatomi.svg" class="taggd_\_image"&gt;&lt;/div&gt;

&lt;div class="col-sm-12"&gt;

&lt;div id="table_data"&gt;

&lt;div class="table-responsive"&gt;

&lt;table class="table table-bordered table-hover table-condensed table-sortable"&gt;

&lt;thead&gt;

&lt;tr class="btn-primary"&gt;

&lt;td align="center"&gt;Bagian Tubuh&lt;/td&gt;

&lt;td align="center"&gt;Keterangan&lt;/td&gt;

&lt;td align="center"&gt;&lt;input type="checkbox" value="1" id="check_all_fisik"&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;/thead&gt;

&lt;tbody id="tabel_detail"&gt;

&lt;/tbody&gt;

&lt;tfoot&gt;

&lt;tr&gt;

&lt;td colspan="5"&gt;

&lt;div class="pull-right"&gt;

&lt;button id="button_delete" type="button" formnovalidate="" class="btn btn-sm btn-danger" onclick="destroyChecked(this);"&gt;Hapus&lt;/button&gt;

&lt;/div&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;/tfoot&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;script&gt;

function aksiCheckMaster(obj,x){

var a = 'ul\[id="ulHidden\['+x+'\]"\]';

var disabled = 'textarea\[id="ulHidden\['+x+'\]"\]';

if(obj.checked){

\$(a).removeAttr('hidden');

\$(disabled).removeAttr('disabled');

}else{

\$(a).attr('hidden',true);

\$(disabled).attr('disabled',true);

}

}

function reArange()

{

\$("#tabel_detail").children("tr").each(function(a){

var numx=parseInt(a)+1;

if (numx==-1) idnya=''; else idnya='tr_'+numx;

this.id=idnya;

\$('#tr_'+numx+' input').each(function(z){

var angka = this.name.toString();

var thenum = parseInt(angka.replace(/\[^0-9\\.\]/g, ''), 10);

this.name=angka.replace(thenum, numx);

thenum='';

});

});

}

function destroyChecked(obj)

{

var arrayData=\[\];

var z = 1;

\$('#tabel_detail input\[name\*="check"\]:checked').each(function(){

var value = \$(this).parent().parent().find('input\[name\*="\[id\]"\]').val();

var x = \$('input\[name\*="\[posisi_x\]"\]').val();

var y = \$('input\[name\*="\[posisi_y\]"\]').val();

if(value ==''){

\$(this).parent().parent().remove();

\$('button\[id="tag_x_'+x+'\_y_'+y+'"\]').parent().remove();

}else{

arrayData.push(value);

}

});

if(arrayData.length>0){

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/periksafisik/destroycheckeddetail>",

method: 'POST',

dataType: "json",

data: {

ids : arrayData,

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

alert(data.message, data.status);

var check = \$("input\[name\*=check\]:checked");

check.each(function(){

var x = \$(this).parent().find('input\[name\*="\[posisi_x\]"\]').val();

var y = \$(this).parent().find('input\[name\*="\[posisi_y\]"\]').val();

\$('button\[id="tag_x_'+x+'\_y_'+y+'"\]').parent().remove();

});

check.parent().parent().remove();

\$(obj).removeClass('loading');

reArange();

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$(obj).removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

}

});

}

\$('#check_all_fisik').prop('checked',false);

}

\$("#check_all_fisik").change(function () {

\$('#tabel_detail tr td input\[type="checkbox"\]').prop('checked', \$(this).prop('checked'));

});

\$('#img_anatomi').click(function(e){

var width = this.clientWidth;

var height = this.clientHeight;

var offset = \$(this).offset();

var x_input = (e.pageX - offset.left)/width;

var y_input = (e.pageY - offset.top)/height;

var image = document.getElementById('img_anatomi');

var options = {};

var tags = \[\];

var data = \[

Taggd.Tag.createFromObject({

position: { x: x_input, y: y_input },

text: '&lt;div id="popup"&gt;'

+'&lt;label&gt;Bagian Tubuh&lt;\\/label&gt;'

+'&lt;input id="bagiantubuh" class="form-control" type="text"\\/&gt;'

+'&lt;label&gt;Keterangan&lt;\\/label&gt;'

+'&lt;textarea id="keterangan" class="form-control"&gt;&lt;\\/textarea&gt;&lt;br\\/&gt;'

+'&lt;button id="button_add" type="button" formnovalidate class="btn btn-primary"&gt;Tambah&lt;\\/button&gt; '

+'&lt;button id="button_cancel" type="button" formnovalidate class="btn btn-default"&gt;Batal&lt;\\/button&gt;'

+'&lt;\\/div&gt;',

}),

\];

var taggd = new Taggd(image, options, data, tags);

\$('#button_cancel').click(function(){

taggd.deleteTag(0);

});

\$('#button_add').click(function(){

tag = taggd.getTag(0).toJSON();

var x = tag\['position'\]\['x'\];

var y = tag\['position'\]\['y'\];

var bagiantubuh = \$('#bagiantubuh').val();

var keterangan = \$('#keterangan').val();

var table = "";

table += "&lt;tr&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='PeriksaFisikDetail\[0\]\[bagiantubuh\]' class='form-control input-sm' type='text' value='"+bagiantubuh+"'&gt;";

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='PeriksaFisikDetail\[0\]\[keterangan\]' class='form-control input-sm' type='text' value='"+keterangan+"'&gt;";

table += "&lt;/td&gt;";

table += "&lt;td align='center'&gt;";

table += "&lt;input type='checkbox' name='check\[\]'&gt;";

table += "&lt;input name='PeriksaFisikDetail\[0\]\[id\]' type='text' class='hidden' value=''&gt;";

table += "&lt;input name='PeriksaFisikDetail\[0\]\[posisi_x\]' class='hidden' type='text' value='"+x+"'&gt;";

table += "&lt;input name='PeriksaFisikDetail\[0\]\[posisi_y\]' class='hidden' type='text' value='"+y+"'&gt;";

table += "&lt;/td&gt;";

table += "&lt;/tr&gt;";

\$("#tabel_detail").append(table);

\$(this).parents('.taggd_\_wrapper').find('.taggd_\_button').attr('id','tag_x_'+x+'\_y_'+y);

reArange();

});

});

function showTagEdit(){

var image = document.getElementById('img_anatomi');

var options = {};

var tags = \[\];

var data = \[\];

var taggd = new Taggd(image, options, data, tags);

}

\$(document).ready(function(){

showTagEdit();

reArange();

});

&lt;/script&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/taggd/dist/taggd.js"&gt;&lt;/script>&gt;

&lt;div id="root"&gt;&lt;div class="col-sm-12"&gt;&lt;div id="RiwayatPemeriksaan" class="box box-bordered"&gt;&lt;div data-toggle="collapse" data-target="#collapseRiwayatPemeriksaan" aria-expanded="true" aria-controls="collapseIdentitas" class="box-header with-border accordion-toggle"&gt;&lt;label&gt;&lt;b&gt;Riwayat Pemeriksaan&lt;/b&gt;&lt;/label&gt;&lt;/div&gt; &lt;div id="collapseRiwayatPemeriksaan" aria-labelledby="headingTwo" data-parent="#RiwayatPemeriksaan" class="panel-body box-bordered collapse"&gt;&lt;div id="table_data"&gt;&lt;div class="table-responsive freeze-table" style="max-height: 300px; overflow-x: scroll;"&gt;&lt;table class="table table-bordered table-hover table-condensed table-sortable"&gt;&lt;thead style=""&gt;&lt;tr class="btn-primary"&gt;&lt;th align="center"&gt;Tanggal&lt;/th&gt; &lt;th align="center"&gt;Pemeriksaan&lt;/th&gt; &lt;th align="center"&gt;Keterangan&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt; &lt;tbody id="tabel_detail"&gt;&lt;tr&gt;&lt;td colspan="3"&gt;Tidak ada data.&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt; &lt;tfoot&gt;&lt;/tfoot&gt;&lt;/table&gt;&lt;div class="clone-head-table-wrap" style="position: fixed; overflow: hidden; visibility: hidden; top: 0px; z-index: 2; width: 0px; height: 0px;"&gt;&lt;table class="table table-bordered table-hover table-condensed table-sortable" style="background-color: white;"&gt;&lt;thead&gt;&lt;tr class="btn-primary"&gt;&lt;th align="center"&gt;Tanggal&lt;/th&gt; &lt;th align="center"&gt;Pemeriksaan&lt;/th&gt; &lt;th align="center"&gt;Keterangan&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt; &lt;tbody id="tabel_detail"&gt;&lt;tr&gt;&lt;td colspan="3"&gt;Tidak ada data.&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt; &lt;tfoot&gt;&lt;/tfoot&gt;&lt;/table&gt;&lt;/div&gt;&lt;div class="clone-column-table-wrap" style="position: fixed; overflow: hidden; visibility: hidden; z-index: 1; height: 87px; width: 1px; top: 0px;"&gt;&lt;table class="table table-bordered table-hover table-condensed table-sortable" style="background-color: white; width: 108px;"&gt;&lt;thead&gt;&lt;tr class="btn-primary"&gt;&lt;th align="center"&gt;Tanggal&lt;/th&gt; &lt;th align="center"&gt;Pemeriksaan&lt;/th&gt; &lt;th align="center"&gt;Keterangan&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt; &lt;tbody id="tabel_detail"&gt;&lt;tr&gt;&lt;td colspan="3"&gt;Tidak ada data.&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt; &lt;tfoot&gt;&lt;/tfoot&gt;&lt;/table&gt;&lt;/div&gt;&lt;div class="clone-head-table-wrap clone-column-head-table-wrap" style="position: fixed; overflow: hidden; visibility: hidden; top: 0px; z-index: 3; background-color: white; width: 1px; height: 0px;"&gt;&lt;table class="table table-bordered table-hover table-condensed table-sortable" style="background-color: white; width: 100px;"&gt;&lt;thead&gt;&lt;tr class="btn-primary"&gt;&lt;th align="center"&gt;Tanggal&lt;/th&gt; &lt;th align="center"&gt;Pemeriksaan&lt;/th&gt; &lt;th align="center"&gt;Keterangan&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt; &lt;tbody id="tabel_detail"&gt;&lt;tr&gt;&lt;td colspan="3"&gt;Tidak ada data.&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt; &lt;tfoot&gt;&lt;/tfoot&gt;&lt;/table&gt;&lt;/div&gt;&lt;/div&gt; &lt;div style="text-align: center;"&gt;&lt;!----&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;

&lt;div class="panel panel-button"&gt;

&lt;div class="pull-right" style="margin-bottom: 30px;"&gt;

&lt;div class="btn-group"&gt;

&lt;button id="button_save" type="submit" class="btn btn-sm btn-warning" onclick="return cekTanggalMulai(this)"&gt;Update&lt;/button&gt;

&lt;button type="button" class="btn btn-sm btn-danger dropdown-toggle" style="min-width:20px;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"&gt;

&lt;span class="caret"&gt;&lt;/span&gt;

&lt;span class="sr-only"&gt;Toggle Dropup&lt;/span&gt;

&lt;/button&gt;

&lt;div class="dropdown-menu" style="min-width:0; padding:0; margin:0;"&gt;

&lt;button id="button_destroy" type="button" class="btn btn-sm btn-danger" style="min-width:120px;" onclick="destroyData(this);"&gt;Hapus Permanen&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;input type="hidden" name="askep_enable" value="1"&gt;

&lt;button id="buttonAskep" type="submit" class="btn btn-sm btn-success" onclick="return cekTanggalMulai(this)"&gt;Simpan & Isi Asuhan Keperawatan&lt;/button&gt;

&lt;button id="button_print_0" type="button" class="btn btn-sm btn-info" onclick="window.open('<https://kotakediri.epuskesmas.id/anamnesa/print/58517>', '', 'left=100,top=100')"&gt; Cetak&lt;/button&gt;

&lt;button id="button_reset" type="reset" class="btn btn-sm btn-warning"&gt;Reset&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;/div&gt;

**DIAGNOSA**

&lt;body class="v2-body"&gt;

&lt;script type="text/javascript"&gt;

var cloud_host = "";

localStorage.setItem("epuskesmas-cloud-server", cloud_host);

&lt;/script&gt;

&lt;script type="text/javascript"&gt;

if('serviceWorker' in navigator){

localStorage.removeItem('epuskesmas-cloud-server');

localStorage.removeItem('epuskesmas-connection-status');

navigator.serviceWorker.getRegistrations().then(function(registrations) {

for(let registration of registrations) {

registration.unregister()

}

})

}

&lt;/script&gt;

&lt;div class="bg-loading"&gt;&lt;/div&gt;

&lt;nav class="navbar navbar-default navbar-static-top"&gt;

&lt;div class="container-fluid"&gt;

&lt;a class="navbar-brand" href="<https://kotakediri.epuskesmas.id"&gt;&lt;/a>&gt;

&lt;div class="navbar-header"&gt;

&lt;button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"&gt;

&lt;span class="sr-only"&gt;Toggle navigation&lt;/span&gt;

&lt;span class="fa fa-caret-square-o-down"&gt;&lt;/span&gt;

&lt;/button&gt;

&lt;/div&gt;

&lt;div id="navbar" class="navbar-collapse collapse"&gt;

&lt;ul class="nav navbar-nav "&gt;

&lt;li class="dropdown"&gt;

&lt;a id="menu_pendaftaran" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"&gt;Pendaftaran &lt;span class="caret"&gt;&lt;/span&gt;&lt;/a&gt;

&lt;ul class="dropdown-menu"&gt;

&lt;li&gt;&lt;a id="menu_pendaftaran_pasien" pjax-content="" href="<https://kotakediri.epuskesmas.id/pasien?broadcastNotif=1"&gt;Pasien> & KK&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pendaftaran_pendaftaran" href="<https://kotakediri.epuskesmas.id/pendaftaran?broadcastNotif=1"&gt;Pendaftaran> Pasien&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pendaftaran_rekammedis" href="<https://kotakediri.epuskesmas.id/rekammedis"&gt;Rekam> Medis&lt;/a&gt;&lt;/li&gt;

&lt;li id="kiosk_pendaftaran_feature"&gt;

<a href="javascript:void(0)" onclick="window.open(

'<https://kotakediri.epuskesmas.id/antreanpendaftaran?fullscreen=antrian>',

'Antrian',

'menubar=no,location=no,fullscreen=yes,scrollbars=auto'

);">

Antrean

&lt;/a&gt;

&lt;/li&gt;

&lt;li id="kiosk_panggilan_feature"&gt;

&lt;a id="menu_pendaftaran_rekammedis" href="<https://kotakediri.epuskesmas.id/loket/index>"&gt;

Panggil Antrean

&lt;/a&gt;

&lt;/li&gt;

&lt;/ul&gt;

&lt;/li&gt;

&lt;li class="dropdown"&gt;

&lt;a id="menu_pelayanan" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"&gt;Pelayanan &lt;span class="caret"&gt;&lt;/span&gt;&lt;/a&gt;

&lt;ul class="dropdown-menu"&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Pelayanan&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_medis" href="<https://kotakediri.epuskesmas.id/pelayanan?broadcastNotif=1"&gt;Medis&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_medis_inap" href="<https://kotakediri.epuskesmas.id/pelayananrawatinap?broadcastNotif=1"&gt;Rawat> Inap&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_resep" pjax-content="" href="<https://kotakediri.epuskesmas.id/resep?broadcastNotif=1"&gt;Resep&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_obat_pasien" pjax-content="" href="<https://kotakediri.epuskesmas.id/obatpasien?broadcastNotif=1"&gt;Obat> Pasien&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_penimbangan_balita" pjax-content="" href="<https://kotakediri.epuskesmas.id/penimbanganbalita"&gt;Penimbangan> Balita&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_diare_advokasi" pjax-content="" href="<https://kotakediri.epuskesmas.id/diareadvokasi"&gt;Diare> Advokasi&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Pelayanan Luar Gedung&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_skrininganaksekolah" href="<https://kotakediri.epuskesmas.id/siswa"&gt;Skrining> Anak Sekolah&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_skriningptm" href="<https://kotakediri.epuskesmas.id/skrining/ptm"&gt;Skrining> PTM&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_skrininglansia" href="<https://kotakediri.epuskesmas.id/skrining/lansia"&gt;Skrining> Lansia&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_sinkronisasidatasihepi" href="<https://kotakediri.epuskesmas.id/sinkronisasidatasihepi?type=hepc"&gt;Sinkronisasi> Data Sihepi&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_kegiatankelompok" href="<https://kotakediri.epuskesmas.id/kegiatankelompok"&gt;Kegiatan> Kelompok&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_penyuluhan_bpjs" href="<https://kotakediri.epuskesmas.id/penyuluhan_bpjs"&gt;Sinkronisasi> BPJS - Penyuluhan Kesehatan&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Pemeriksaan&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_laboratorium" pjax-content="" href="<https://kotakediri.epuskesmas.id/laboratorium?broadcastNotif=1"&gt;Laboratorium&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_pemeriksaan_air" pjax-content="" href="<https://kotakediri.epuskesmas.id/pemeriksaanair"&gt;Pemeriksaan> Air&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Pasien Pulang&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_rujukan_external" pjax-content="" href="<https://kotakediri.epuskesmas.id/rujukanexternal"&gt;Rujukan> External&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_pasienmeninggal" pjax-content="" href="<https://kotakediri.epuskesmas.id/pasienmeninggal"&gt;Pasien> Meninggal&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_bayar_tindakan" pjax-content="" href="<https://kotakediri.epuskesmas.id/pembayaran"&gt;Pembayaran&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_daftar_shift" pjax-content="" href="<https://kotakediri.epuskesmas.id/daftarshift"&gt;Daftar> Shift&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_bayar_tindakan" pjax-content="" href="<https://kotakediri.epuskesmas.id/pembayarandetail"&gt;Detail> Transaksi&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Survey Kepuasan/Testimoni Pasien&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_survey" pjax-content="" href="<https://kotakediri.epuskesmas.id/surveytestimoni"&gt;Survey> Kepuasan & Testimoni Pasien&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_survey" pjax-content="" href="<https://kotakediri.epuskesmas.id/surveytestimoni/data"&gt;Pengelolaan> Survey Kepuasan & Testimoni Pasien&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Lroa&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_lroa" pjax-content="" href="<https://kotakediri.epuskesmas.id/lroa"&gt;Lroa&lt;/a&gt;&lt;/li>&gt;

&lt;/ul&gt;

&lt;/li&gt;

&lt;li class="dropdown"&gt;

&lt;a id="menu_pengelolaan" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"&gt;Pengelolaan &lt;span class="caret"&gt;&lt;/span&gt;&lt;/a&gt;

&lt;ul class="dropdown-menu"&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Gudang Farmasi&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_pemesanan_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/pemesananobat"&gt;Pemesanan> Obat&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_penerimaan_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/penerimaanobat"&gt;Penerimaan> Obat&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_stok_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/stokobat"&gt;Stok> Obat&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_stok_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/stokobat/new"&gt;Stok> Obat \*&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_stok_opname" pjax-content="" href="<https://kotakediri.epuskesmas.id/stokopname"&gt;Stok> Opname&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_distribusi_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/distribusiobat"&gt;Distribusi> Obat&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Data Master&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_pegawai" pjax-content="" href="<https://kotakediri.epuskesmas.id/mpegawai"&gt;Pegawai&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_pengguna" pjax-content="" href="<https://kotakediri.epuskesmas.id/user"&gt;Pengguna&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_mruangan" pjax-content="" href="<https://kotakediri.epuskesmas.id/mruangan"&gt;Ruangan&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_mruanganakses" pjax-content="" href="<https://kotakediri.epuskesmas.id/mruanganakses"&gt;Ruangan> Akses&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_puskesmas" pjax-content="" href="<https://kotakediri.epuskesmas.id/mpuskesmas"&gt;Puskesmas&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_master_pbf" pjax-content="" href="<https://kotakediri.epuskesmas.id/mperlengkapan"&gt;Perlengkapan&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_sasaran_program" pjax-content="" href="<https://kotakediri.epuskesmas.id/sasaranprogram"&gt;Sasaran> Program&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_sasaran_proyeksi" pjax-content="" href="<https://kotakediri.epuskesmas.id/sasaranproyeksi"&gt;Sasaran> Proyeksi&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_jadwal" pjax-content="" href="<https://kotakediri.epuskesmas.id/mjadwal"&gt;Jadwal> Pelayanan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_bayar_tindakan" pjax-content="" href="<https://kotakediri.epuskesmas.id/shift"&gt;Jadwal> Shift&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_libur" pjax-content="" href="<https://kotakediri.epuskesmas.id/mlibur"&gt;Libur&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_master_tindakan" pjax-content="" href="<https://kotakediri.epuskesmas.id/master/tindakan"&gt;Data> Tindakan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_master_imunisasi" pjax-content="" href="<https://kotakediri.epuskesmas.id/master/imunisasi"&gt;Data> Imunisasi&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_kamar" pjax-content="" href="<https://kotakediri.epuskesmas.id/mkamar"&gt;Kamar> & Bed&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_msekolah" pjax-content="" href="<https://kotakediri.epuskesmas.id/msekolah"&gt;Sekolah&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_asuransi" pjax-content="" href="<https://kotakediri.epuskesmas.id/masuransi"&gt;Asuransi&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_master_laboratorium" pjax-content="" href="<https://kotakediri.epuskesmas.id/mjenislaboratorium"&gt;Laboratorium&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_master_paket_laboratorium" href="<https://kotakediri.epuskesmas.id/mpaketlaboratorium"&gt;Paket> Laboratorium&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_master_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/mobat"&gt;Obat&lt;/a&gt;&lt;/li>&gt;

&lt;li id="kiosk_monitor_feature"&gt;

&lt;a id="menu_config_antrian" pjax-content="" href="<https://kotakediri.epuskesmas.id/antrian>"&gt;

Konfigurasi Dashboard Antrian

&lt;/a&gt;

&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_config_konfigurasiform" pjax-content="" href="<https://kotakediri.epuskesmas.id/konfigurasiform"&gt;Konfigurasi> Form&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_config_konfigurasilaboratorium" pjax-content="" href="<https://kotakediri.epuskesmas.id/konfigurasilaboratorium"&gt;Konfigurasi> Laboratorium&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_config_smsnotifikasi" pjax-content="" href="<https://kotakediri.epuskesmas.id/smskonfigurasi"&gt;SMS> Konfigurasi&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_konfigurasi_ilp" pjax-content="" href="<https://kotakediri.epuskesmas.id/configilp"&gt;Konfigurasi> Skrining ILP&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_master_asupan_makanan" pjax-content="" href="<https://kotakediri.epuskesmas.id/masupanmakanan"&gt;Asupan> Makanan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_master_industri" pjax-content="" href="<https://kotakediri.epuskesmas.id/mindustri"&gt;Industri&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_master_pbf" pjax-content="" href="<https://kotakediri.epuskesmas.id/mpbf"&gt;PBF&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_master_mkomponentarif" pjax-content="" href="<https://kotakediri.epuskesmas.id/mkomponentarif"&gt;Komponen> Tarif&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_master_metode_pembayaran" pjax-content="" href="<https://kotakediri.epuskesmas.id/metode_pembayaran"&gt;Metode> Pembayaran&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_master_diagnosa" pjax-content="" href="<https://kotakediri.epuskesmas.id/mdiagnosa"&gt;Diagnosa&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_master_template_print" pjax-content="" href="<https://kotakediri.epuskesmas.id/templateprint"&gt;Template> Print&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_signature_pegawai" pjax-content="" href="<https://kotakediri.epuskesmas.id/signaturepegawai"&gt;Signature> Pegawai&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengaturan_signature" pjax-content="" href="<https://kotakediri.epuskesmas.id/pengaturansignature"&gt;Pengaturan> Signature&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_management_file_signature" pjax-content="" href="<https://kotakediri.epuskesmas.id/managementfilesignature"&gt;Management> File Signature&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_master_kegiatan" pjax-content="" href="<https://kotakediri.epuskesmas.id/mkegiatan"&gt;Kegiatan&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_data_dasar_puskesmas" pjax-content="" href="<https://kotakediri.epuskesmas.id/datadasarpuskesmas"&gt;Data> Dasar Puskesmas&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;BPJS&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_pengaturan_bpjs" pjax-content="" href="<https://kotakediri.epuskesmas.id/cbpjs"&gt;Pengaturan> BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_provider" pjax-content="" href="<https://kotakediri.epuskesmas.id/mproviderbpjs"&gt;RS> Provider BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_poli_fktl" pjax-content="" href="<https://kotakediri.epuskesmas.id/mpolifktlbpjs"&gt;Poli> FKTL BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_dokter" pjax-content="" href="<https://kotakediri.epuskesmas.id/mdokterbpjs"&gt;Dokter> BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_tindakan" pjax-content="" href="<https://kotakediri.epuskesmas.id/mtindakanbpjs"&gt;Tindakan> BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_laboratorium" pjax-content="" href="<https://kotakediri.epuskesmas.id/mlaboratoriumbpjs"&gt;Laboratorium> BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/mobatbpjs"&gt;Obat> BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_ruangan" pjax-content="" href="<https://kotakediri.epuskesmas.id/mruanganbpjs"&gt;Ruangan> BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_sinkron" pjax-content="" href="<https://kotakediri.epuskesmas.id/switchbridgingasuransi"&gt;Pengaturan> Bridging BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_sinkron" pjax-content="" href="<https://kotakediri.epuskesmas.id/sinkronbpjs"&gt;Sinkron> BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_sinkron_jejaring" pjax-content="" href="<https://kotakediri.epuskesmas.id/sinkronbpjsjejaring"&gt;Sinkron> BPJS Jejaring&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;SISRUTE&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_konfigurasi_sisrute" href="<https://kotakediri.epuskesmas.id/sisrute-configuration/credential"&gt;Konfigurasi&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_tujuan_rujukan_sisrute" href="<https://kotakediri.epuskesmas.id/sisrute-configuration/faskes"&gt;Tujuan> Rujukan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_sisrute_kriteria_khusus" href="<https://kotakediri.epuskesmas.id/msisrutekriteriakhusus"&gt;Kriteria> Khusus&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_sisrute_sdm" href="<https://kotakediri.epuskesmas.id/msisrutesdm"&gt;SDM&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_sisrute_ruang_perawatan" href="<https://kotakediri.epuskesmas.id/msisruteruangperawatan"&gt;Ruang> Perawatan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_sisrute_pelayanan" href="<https://kotakediri.epuskesmas.id/msisrutepelayanan"&gt;Pelayanan&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_sisrute_sarana" href="<https://kotakediri.epuskesmas.id/msisrutesarana"&gt;Sarana&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_sisrute_kelas_perawatan" href="<https://kotakediri.epuskesmas.id/msisrutekelasperawatan"&gt;Kelas> Perawatan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_sisrute_alkes" href="<https://kotakediri.epuskesmas.id/msisrutealkes"&gt;Alkes&lt;/a&gt;&lt;/li>&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Master Wilayah&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_wilayah_kerja" href="<https://kotakediri.epuskesmas.id/wilayah-kerja"&gt;Wilayah> Kerja&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Antrian&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_data_retention" href="<https://kotakediri.epuskesmas.id/antrian"&gt;Antrian&lt;/a&gt;&lt;/li>&gt;

&lt;li id="kiosk_speaker_feature" class="dropdown-header"&gt;

&lt;span class="label label-default"&gt;Speaker&lt;/span&gt;

&lt;/li&gt;

&lt;li id="kiosk_speaker_head_feature"&gt;

&lt;a id="menu_data_speaker" href="<https://kotakediri.epuskesmas.id/speaker>"&gt;

Speaker

&lt;/a&gt;

&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Klinisia&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_data_api_rekam_medis" href="<https://kotakediri.epuskesmas.id/konfigurasiklinisiaapps"&gt;Konfigurasi> Klinisia Apps &lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Satu Sehat&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_data_api_rekam_medis" href="<https://kotakediri.epuskesmas.id/konfigurasisatusehat/v2"&gt;Konfigurasi> Satu Sehat &lt;span style="color: red;"&gt;\*&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;

&lt;/ul&gt;

&lt;/li&gt;

&lt;li class="dropdown"&gt;

&lt;a id="menu_gis" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"&gt;GIS &lt;span class="caret"&gt;&lt;/span&gt;&lt;/a&gt;

&lt;ul class="dropdown-menu"&gt;

&lt;li&gt;&lt;a id="menu_gis_pasien" href="<https://kotakediri.epuskesmas.id/gis/patient"&gt;Pasien&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_gis_penyakit" href="<https://kotakediri.epuskesmas.id/gis/penyakit"&gt;Penyakit&lt;/a&gt;&lt;/li>&gt;

&lt;/ul&gt;

&lt;/li&gt;

&lt;li class="dropdown"&gt;

&lt;a id="menu_laporan" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"&gt;Laporan &lt;span class="caret"&gt;&lt;/span&gt;&lt;/a&gt;

&lt;ul class="dropdown-menu"&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Grafik&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="grafik" pjax-content="" href="<https://kotakediri.epuskesmas.id/grafik"&gt;Grafik&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="dashboardsip" pjax-content="" href="<https://kotakediri.epuskesmas.id/dashboardsip"&gt;Dashboard> SIP&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="dashboardskringilp" pjax-content="" href="<https://kotakediri.epuskesmas.id/dashboardilp"&gt;Dashboard> Skrining ILP&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Monitoring&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_updatelog" pjax-content="" href="<https://kotakediri.epuskesmas.id/updatelog"&gt;Update> Log&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_monitoring_satusehat" pjax-content="" href="<https://kotakediri.epuskesmas.id/monitoring-satusehat"&gt;Satu> Sehat&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Laporan Harian&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pemeriksaan_Air" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpemeriksaanair"&gt;Laporan> Pemeriksaan Air&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_capaian_kbk" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporan_capaian_kbk"&gt;Laporan> Prakiraan Capaian KBK&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pendapatan_tindakan" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpendapatantindakan"&gt;Pendapatan> Tindakan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_kunjungan_pasien" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporankunjunganpasien"&gt;Kunjungan> Pasien&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_kunjungan_pasien_bpjs" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporankunjunganpasienbpjs"&gt;Kunjungan> Pasien BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pelayanan_pasien" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpelayananpasien"&gt;Pelayanan> Pasien&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pemeriksaan_medis" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpemeriksaanmedis"&gt;Pemeriksaan> Medis&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_laporan_pelayanan_resep" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpelayananresep"&gt;Pelayanan> Resep&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pengeluaran_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpengeluaranobat"&gt;Pengeluaran> Obat Pasien&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pengeluaran_alkes" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanharianpengeluaranalkes"&gt;Pengeluaran> Alat Kesehatan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pelayanan_lab" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpelayananlab"&gt;Pelayanan> Laboratorium&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_rujukan_internal" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanrujukaninternal"&gt;Rujukan> Internal&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_rujukan_external" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanrujukanexternal"&gt;Rujukan> External&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_laporan_tindakan_dokter" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporantindakandokter>"&gt;

Tindakan Dokter/Perawat

&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pemeriksaan_laboratorium" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpemeriksaanlaboratorium"&gt;Pemeriksaan> Laboratorium&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_kinerja_puskesmas" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporankinerjapuskesmas"&gt;Kinerja> Puskesmas&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pelayanan_ruangan" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpelayananruangan"&gt;Pelayanan> Ruangan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_penyakit" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpenyakit"&gt;Penyakit&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_laporan_askep" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanaskep"&gt;Asuhan> Keperawatan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_kunjungan_ptm" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporankunjunganptm"&gt;Kunjungan> PTM&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_harian_pkpr" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanharianpkpr"&gt;PKPR&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_laporan_harian_alkes_terbanyak" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanharianalkesterbanyak"&gt;Alat> Kesehatan Terbanyak&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pendapatan" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpendapatan"&gt;Laporan> Pendapatan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pendapatan_pendaftaran" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpendapatanpendaftaran"&gt;Laporan> Pendapatan Pendaftaran &lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pendapatan" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpendapatankasir"&gt;Laporan> Pendapatan Kasir&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pendapatan_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpendapatanobat"&gt;Laporan> Pendapatan Obat&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_covid19" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporancovid19"&gt;Laporan> Skrining COVID-19&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pengeluaran_obat_per_pasien" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpengeluaranobatperpasien"&gt;Laporan> Pengeluaran Obat&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_stok_opname" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanstokopname"&gt;Laporan> Stok Opname&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_hepatitis_b" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanhepatitisb"&gt;Laporan> Hepatitis B&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_skrining_tb" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanskriningtb"&gt;Laporan> Skrining TB&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_barang_persediaan" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanbarangpersediaan"&gt;Laporan> Barang Persediaan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_register_mtbs" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanmtbsv2"&gt;Laporan> Register MTBS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_kunjungan_bpjs" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporan_kunjungan_bpjs"&gt;Laporan> Kunjungan BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Laporan Mingguan&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pws_penyakit" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpwspenyakit"&gt;Laporan> PWS Penyakit&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Laporan Bulanan&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_all" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporan"&gt;Laporan&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_laporan_data_dasar" pjax-content="" href="<https://kotakediri.epuskesmas.id/datadasar"&gt;Data> Dasar&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_kirim_report" pjax-content="" href="<https://kotakediri.epuskesmas.id/kirimreport"&gt;Kirim> Report&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pkg" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpkg"&gt;Laporan> PKG&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sp3_lb1" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansp3lb1"&gt;SP3> LB1&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sp3_lb2" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansp3lb2/lplpo"&gt;SP3> LB2 (LPLPO)&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sp3_lb3" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansp3lb3"&gt;SP3> LB3&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sp3_lb4" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansp3lb4"&gt;SP3> LB4&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sip_ukp1" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansipukp1/0"&gt;UKP-1>. Pelayanan Puskesmas&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sip_ukp2" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansipukp2"&gt;UKP-2>. Kesakitan Umum&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sip_ukp3" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansipukp3"&gt;UKP-3>. Kesakitan Gigi dan Mulut&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sip_ukp4" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansipukp4"&gt;UKP-4>. Data Kesakitan Terbanyak&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sip_ukp5" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansipukp5"&gt;UKP-5>. Data Kematian di Puskesmas&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sip_ukp6" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansipukp6"&gt;UKP-6>. LPLPO&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_ukme1" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-promkes/0"&gt;UKME-1>. Promosi Kesehatan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_ukme2" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-kesling/0"&gt;UKME-2>. Kesehatan Lingkungan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_ukme3" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-gizi/0"&gt;UKME-3>. Gizi, Kesehatan Ibu dan Kesehatan Anak&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_ukme4" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-imunisasi/0"&gt;UKME-4>. Imunisasi&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_ukme5" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-menular/0"&gt;UKME-5>. Pengendalian Penyakit Menular&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_ukme6" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-tidakmenular/0"&gt;UKME-6>. Pengendalian Penyakit Tidak Menular&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_ukme7" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-perkesmas/0"&gt;UKME-7>. Perawatan Kesehatan Masyarakat&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_potensi_klb" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-regklb/0"&gt;Penyakit> Menular Potensi KLB&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_potensi_klb_des" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-pwsklb/0"&gt;Penyakit> Potensi KLB Menurut Desa/Kel&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_promosi_kesmit" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-promkesmitra/0"&gt;Promosi> Kesehatan Data Kemitraan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_promosi_kesker" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukmp-kesehatankerja/0"&gt;UKMP>. Kesehatan Kerja&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_program" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram"&gt;Program&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_laporan_pemeriksaan_ims" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpemeriksaanims"&gt;Pemeriksaan> IMS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_kohort" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporankohort"&gt;Laporan> Kunjungan Ibu Hamil&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_deteksi_dini_kanker" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanbulanandeteksidinikanker"&gt;Laporan> Rekapitulasi Penemuan Dini Kanker pada Anak FKTP (PDKA FKTP)

&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_kohort_kia" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporankohortkia"&gt;Kohort> KIA&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pkpr" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpkpr"&gt;PKPR&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_laporan_konseling_hiv" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporankonselinghiv"&gt;Konseling> HIV&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_rekapitulasi_mtbs_mtbm" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporan/view/2"&gt;Rekapitulasi> MTBS MTBM&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_laporan_ptm" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanptm"&gt;PTM&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_kirim_laporan" pjax-content="" href="<https://kotakediri.epuskesmas.id/kirimlaporan"&gt;Kirim> Laporan&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Laporan Tahunan&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laopran_interpretasi_skrining" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporaninterpretasiskrining"&gt;Laporan> Interpretasi Skrining ILP&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laopran_pengendalian_ptm" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpengendalianptm"&gt;Laporan> Pengendalian PTM&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_ht_dm_terkontrol" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanhtdmterkontrol"&gt;Laporan> HT dan DM Terkontrol&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laopran_ketersediaan_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanketersediaanobat"&gt;Laporan> Ketersediaan Obat&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_tahunan_siplt" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-lt-thnprogram/0"&gt;Laporan> Tahunan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_tahunan_lsd1" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sp3-lsd1/0"&gt;Laporan> Tahunan LSD 1&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sp3_lsd2" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansp3lsd2"&gt;Laporan> Tahunan LSD 2&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_tahunan_lsd3" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sp3-lsd3/0"&gt;Laporan> Tahunan LSD 3&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_center_view" pjax-content="" href="<https://kotakediri.epuskesmas.id/centerviewjawatimur"&gt;Sinkron> Center View Jawa Timur (Cron)&lt;/a&gt;&lt;/li&gt;

&lt;/ul&gt;

&lt;/li&gt;

&lt;/ul&gt;

&lt;ul class="nav navbar-nav navbar-right"&gt;

&lt;li class=""&gt;

&lt;style type="text/css"&gt;

.broadcastBox::-webkit-scrollbar-track

{

\-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);

background-color: #F5F5F5;

border-radius: 5px

}

.broadcastBox::-webkit-scrollbar

{

width: 10px;

background-color: #F5F5F5;

border-radius: 5px

}

.broadcastBox::-webkit-scrollbar-thumb

{

background-color: black;

border: 2px solid black;

border-radius: 5px

}

.fasBroadcast{

font-size: 25pt;

padding-bottom: 10px;

color: black;

margin-right: 40px;

margin-left: 40px;

}

.broadcastBox{

width: 350px;

height: 0px;

border-radius: 10px;

transition: 0.5s;

position: absolute;

overflow-y: scroll;

padding: 0px;

left: 0px;

margin-top: 5px;

background-color: #F4F4F4;

\-webkit-box-shadow: 10px 10px 23px 0px rgba(0,0,0,0.2);

\-moz-box-shadow: 10px 10px 23px 0px rgba(0,0,0,0.1);

box-shadow: 10px 10px 23px 0px rgba(0,0,0,0.1);

}

.fasBroadcast:hover {

color: #d63031;

}

.displayBroadcast{

position: relative;

}

.contBroadcast{

position: absolute;

top: 0;

width: 100%;

height: 100%;

background-color: #F4F4F4;

}

.contBroadcast:empty{

display: none;

}

.stickBroadcast{

text-align: center;

display: block;

font-size: 50pt;

padding-top: 70px;

padding-left: 80px

}

.stickBroadcast:hover{

color: black;

}

.centBroadcast{

text-align: center;

display: block;

}

.secBroadcast{

padding: 25px 10px;

background-color: #F4F4F4;

transition: 0.5s;

}

.profContBroadcast{

padding-left: 15px;

}

.profileBroadcast{

\-webkit-clip-path: circle(50% at 50% 50%);

clip-path: circle(50% at 50% 50%);

width: 75px;

float: left;

}

.txtBroadcast{

vertical-align: top;

font-size: 1.25rem;

padding: 5px 10px 0px 115px;

}

.subBroadcast{

font-size: 1rem;

color: grey;

}

.newBroadcast{

border-style: none none solid none;

border-color: red;

}

.secBroadcast:hover{

background-color: #BFBFBF;

}

.headerBroadcast{

padding: 5px;

}

.isiContentBroadcast{

padding: 10px;

}

.judulBroadcast{

padding-bottom: 10px;

}

.dotBroadcast {

height: 9px;

width: 9px;

background-color: #9D2D15;

border-radius: 50%;

display: inline-block;

}

.containerNotifBroadcast img {

transition: transform 0.25s ease;

cursor: zoom-in;

}

.zoomCheckNotif:checked ~ label > img {

transform: scale(2);

cursor: zoom-out;

}

&lt;/style&gt;

&lt;a class="fa fa-bell" style="font-size: 20px;" onclick="showHideBroadcast();"&gt;

&lt;/a&gt;

&lt;div id="isiNotifBroadcast"&gt;&lt;/div&gt;

&lt;script type="text/javascript"&gt;

var openBroadcast = "true"

let numClicks = 0;

function showHideBroadcast() {

if (openBroadcast == "false") {

\$('.broadcastBox').removeAttr("style");

openBroadcast = "true";

return false

}

numClicks++;

if (numClicks === 1) {

singleClickTimer = setTimeout(() => {

numClicks = 0;

}, 400);

} else if (numClicks === 2) {

clearTimeout(singleClickTimer);

numClicks = 0;

return false

}

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/notifikasi/getform>",

method: 'GET',

dataType: "json",

data: {

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"

},

success: function(data) {

\$("#isiNotifBroadcast").html(data.data)

setTimeout(function (){

if(openBroadcast == "true") {

\$('.broadcastBox').css({

height: "60vh"

});

openBroadcast = "false";

}

}, 100);

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

}

function setPilihanBroadcast() {

var broadcastPilih = \$('select\[name="broadcastPilihan"\]').val()

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/notifikasi/getform>",

method: 'GET',

dataType: "json",

data: {

pilihanBroadcast: broadcastPilih,

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"

},

success: function(data) {

\$('#contBroadcast').html("")

\$('#contBroadcast').html('&lt;br/&gt;&lt;br/&gt;&lt;span class="loading" style="background-color:#F4F4F4!important;padding-top: 30px;padding-left: 90%;"&gt; &lt;/span&gt;')

setTimeout(function (){

\$('#contBroadcast').html(data.data)

}, 300);

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

}

function bacaSelengkapnyaBroadcast(ids) {

\$('.broadcastBox').removeAttr("style");

openBroadcast = "true";

\$.blockUI({

css: {

border: 'none',

padding: '15px',

backgroundColor: '#000',

'-webkit-border-radius': '10px',

'-moz-border-radius': '10px',

opacity: .5,

fontSize: '8px',

color: '#fff'

},

message: '&lt;h3&gt;Memuat....&lt;/h3&gt;'

});

\$.unblockUI()

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/notifikasi/show>",

method: 'GET',

dataType: "json",

data: {

ids: ids,

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"

},

success: function(data) {

\$("#modal_notif_broadcast_notifikasi").modal({ backdrop: 'static'});

\$("#modal_notif_broadcast_notifikasi .modal-dialog").addClass("modal-lg");

\$('#modal_notif_broadcast_notifikasi .modal-title').html(data.tipe);

\$('#modal_notif_broadcast_notifikasi .modal-form').html(data.data);

console.log(data.ressRead)

if (data.ressRead == false) {

\$("#dotBroadcast").addClass('hidden')

}

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

}

function skemaAction() {

let skema = \$("#skema").val()

\$("#skemaAction").addClass('loading')

var broadcastPilih = \$('select\[name="broadcastPilihan"\]').val()

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/notifikasi/getformother>",

method: 'GET',

dataType: "json",

data: {

skema: skema,

pilihanBroadcast: broadcastPilih,

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"

},

success: function(data) {

setTimeout(function (){

\$("#skemaAction").removeClass('loading')

let totalSkema = Number(skema) + 1

\$("#skema").val(totalSkema)

\$("#isiDetailNotif").append(data.data)

if(data.nextAction != "true") {

\$("#skemaAction").addClass("hidden")

}

}, 300);

},

error: function (xhr, ajaxOptions, thrownError) {

\$("#skemaAction").removeClass('loading')

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

}

&lt;/script&gt; &lt;/li&gt;

&lt;li class=""&gt;

&lt;a href="javascript:showNotifBridging();" class="notification" id="button_gagal_bridging"&gt;

&lt;span class="icon-bpjs"&gt; Belum Bridging&lt;/span&gt;

&lt;span class="badge" id="kolom_gagal_bridging"&gt;65&lt;/span&gt;

&lt;/a&gt;

&lt;/li&gt;

&lt;li class="dropdown"&gt;

&lt;a id="menu_user" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"&gt;

dr Ferdi Andriska &lt;span class="label label-default"&gt;PUSKESMAS BALOWERTI&lt;/span&gt; &lt;span class="caret"&gt;&lt;/span&gt;

&lt;/a&gt;

&lt;ul class="dropdown-menu" role="menu"&gt;

&lt;li&gt;&lt;a id="menu_user_profil" href="<https://kotakediri.epuskesmas.id/user/editbysession"&gt;Profil&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_user_userguide" href="<https://kotakediri.epuskesmas.id/userguide"&gt;User> Guide&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_user_update" href="#" onclick="showUpdateLog(true);"&gt;Update&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_user_umpanbalik" href="<https://kotakediri.epuskesmas.id/umpanbalik"&gt;Umpan> Balik&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_user_bantuan" href="#" onclick="openBantuan();"&gt;Bantuan&lt;/a&gt;&lt;/li&gt;

&lt;li role="separator" class="divider"&gt;&lt;/li&gt;

&lt;li&gt;

<a id="menu_user_logout" href="<https://kotakediri.epuskesmas.id/logout>" onclick="event.preventDefault();

document.getElementById('logout-form').submit();">

Keluar

&lt;/a&gt;

&lt;form id="logout-form" action="<https://kotakediri.epuskesmas.id/logout>" method="POST" style="display: none;"&gt;

&lt;input type="hidden" name="\_token" value="r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"&gt;

&lt;/form&gt;

&lt;/li&gt;

&lt;/ul&gt;

&lt;/li&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/nav&gt;

<!-- Bootstrap core JavaScript

\================================================== -->

&lt;!-- Placed at the end of the document so the pages load faster --&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/jquery/jquery-3.2.1.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/bootstrap/js/bootstrap.min.js"&gt;&lt;/script>&gt;

&lt;!-- Alert & Notification --&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/bootstrap-notify/bootstrap-notify.min.js"&gt;&lt;/script>&gt;

&lt;!-- Pjax --&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/pjax/jquery.pjax.min.js"&gt;&lt;/script>&gt;

&lt;!-- Datetime picker --&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/momentjs/moment-with-locales-id.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/jquery-blockui/jquery-blockui.min.js"&gt;&lt;/script>&gt;

&lt;!-- Swal alert package --&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/swal2.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/js-url/url.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/bootstrap-maxlength/bootstrap-maxlength.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/jquery-ui/js/jquery-ui-autocomplete.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/jquery-masknumber/jquery.masknumber.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/datatable.js?v=1.2"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/jquery.form.min.js"&gt;&lt;/script>&gt;

&lt;!-- Custom Chart Generator --&gt;

&lt;script&gt;backgroundChart = "images/gis/bg-grafik.png";&lt;/script&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/mychart.js"&gt;&lt;/script>&gt;

&lt;div id="loader" class="loading-lg hidden" style="height: 32px"&gt;&lt;/div&gt;

&lt;section id="content" class="container-fluid noprint"&gt;

&lt;style&gt;

.kronis-badge {

display: flex;

flex-direction: row;

align-items: flex-start;

padding: 8px;

gap: 4px;

background: #F7F7F7;

border-radius: 4px;

color: #6C757D;

flex: none;

order: 1;

align-self: stretch;

flex-grow: 0;

}

.PenyakitKronisLists {

box-sizing: border-box;

display: flex;

flex-wrap: wrap;

align-items: flex-start;

padding: 12px 16px;

background: #FFFFFF;

border: 1px solid #DDDDDD;

border-radius: 4px;

}

.fieldListKronis {

width: 100%;

padding: 4px 0px;

}

.PenyakitKronisLists>.fieldListKronis {

flex: 50%;

}

.fieldListKronis>input:checked {

accent-color: #28A745;

}

&lt;/style&gt;

&lt;div class="panel panel-default container-fluid"&gt;

&lt;div class="panel-heading row"&gt;

&lt;span class="panel-title"&gt;Buat Baru Diagnosa&lt;/span&gt;

&lt;span class="pull-right"&gt;

&lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/pelayanan>" type="button" class="btn btn-sm btn-primary"&gt;

Lihat Semua

&lt;/a&gt;

&lt;/span&gt;

&lt;/div&gt;

&lt;div class="panel-body row"&gt;

&lt;div class="col-sm-4"&gt;

&lt;a class="btn btn-sm btn-primary" onclick="\$('#button_lihatriwayat').click();"&gt;Lihat Riwayat&lt;/a&gt;

&lt;a class="btn btn-sm btn-primary" onclick="\$('#button_index').click();"&gt;Lihat Pelayanan&lt;/a&gt;

&lt;/div&gt;

&lt;div class="col-sm-8"&gt;

&lt;div class="wrapped"&gt;&lt;a href="<https://kotakediri.epuskesmas.id/pelayanan/show/63860>" id="button_index" class="btn btn-sm btn-primary hidden"&gt;Lihat Semua&lt;/a&gt;&lt;a onclick="showRiwayat()" id="button_lihatriwayat" class="btn btn-sm btn-primary hidden"&gt;Lihat Riwayat&lt;/a&gt;&lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/anamnesa/create/63860?from='pelayanan'&action='edit>'" id="button_anamnesa" class="btn btn-sm btn-primary"&gt;Anamnesa&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/diagnosa/create/63860?from='pelayanan'&action='edit>'" id="button_diagnosa" class="btn btn-sm btn-primary"&gt;Diagnosa&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/resep/create/63860?from='pelayanan'&action='edit>'" id="button_resep" class="btn btn-sm btn-primary"&gt;Resep&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/alkes/create/63860?from='pelayanan'&action='edit>'" id="button_alkes" class="btn btn-sm btn-primary"&gt;Alkes&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/obatpasien/create/63860?from='pelayanan'&action='edit>'" id="button_obat" class="btn btn-sm btn-primary"&gt;Pemakaian Obat&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/odontogram/create/63860?from='pelayanan'&action='edit>'" id="button_odontogram" class="btn btn-sm btn-primary"&gt;Odontogram&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/laboratorium/create/63860?from='pelayanan'&action='edit>'" id="button_laboratorium" class="btn btn-sm btn-primary"&gt;Laboratorium&lt;/a&gt; &lt;a href="<https://kotakediri.epuskesmas.id/tindakan/create/63860?from='pelayanan'&action='edit>'" id="button_tindakan" class="btn btn-sm btn-primary"&gt;Tindakan&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/mtbsv2/create/63860?from='pelayanan'&action='edit>'" id="button_mtbs" class="btn btn-sm btn-primary"&gt;MTBS&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/imunisasi/create/63860?from='pelayanan'&action='edit>'" id="button_imunisasi" class="btn btn-sm btn-primary"&gt;Imunisasi&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/kartubayi/create/63860?from='pelayanan'&action='edit>'" id="button_kartubayi" class="btn btn-sm btn-primary"&gt;Kartu Bayi&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/keur/create/63860?from='pelayanan'&action='edit>'" id="button_keur" class="btn btn-sm btn-primary"&gt;Keur&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/kb/create/63860?from='pelayanan'&action='edit>'" id="button_kb" class="btn btn-sm btn-primary"&gt;KB&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/pkpr/create/63860?from='pelayanan'&action='edit>'" id="button_pkpr" class="btn btn-sm btn-primary"&gt;PKPR&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/kohort/create/63860?from='pelayanan'&action='edit>'" id="button_kohort" class="btn btn-sm btn-primary"&gt;KIA&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/periksagizi/create/63860?from='pelayanan'&action='edit>'" id="button_periksagizi" class="btn btn-sm btn-primary"&gt;Periksa Gizi&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/tbparu/create/63860?from='pelayanan'&action='edit>'" id="button_tbparu" class="btn btn-sm btn-primary"&gt;TB Paru&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/periksaims/create/63860?from='pelayanan'&action='edit>'" id="button_periksaims" class="btn btn-sm btn-primary"&gt;Periksa IMS&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/konselinghiv/create/63860?from='pelayanan'&action='edit>'" id="button_konselinghiv" class="btn btn-sm btn-primary"&gt;Konseling HIV&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/askep/create_pengkajian/63860?from='pelayanan>'" id="button_askep" class="btn btn-sm btn-primary"&gt;Asuhan Keperawatan&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/periksaiva/create/63860?from='pelayanan'&action='edit>'" id="button_periksaiva" class="btn btn-sm btn-primary"&gt;Tes IVA&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/kpsp/create/63860?from='pelayanan'&action='edit>'" id="button_tumbuhkembanganak" class="btn btn-sm btn-primary"&gt;Tumbuh Kembang Anak&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/caten/create/63860?from='pelayanan>'" id="button_caten" class="btn btn-sm btn-primary"&gt;Caten&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/ptm/create/63860?from='pelayanan'&action='edit>'" id="button_ptm" class="btn btn-sm btn-primary"&gt;PTM&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/mata/create/63860?from='pelayanan'&action='edit>'" id="button_mata" class="btn btn-sm btn-primary"&gt;Mata&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/pengkajianresikojatuh/create/63860?from='pelayanan'&action='edit>'" id="button_pengkajian_resiko_jatuh" class="btn btn-sm btn-primary"&gt;Pengkajian Resiko Jatuh&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/prima/create/63860?from='pelayanan'&action='edit>'" id="button_prima" class="btn btn-sm btn-primary"&gt;Prima&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/psikologi/create/63860?from='pelayanan'&action='edit>'" id="button_psikologi" class="btn btn-sm btn-primary"&gt;Psikologi&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/pal/63860?from='pelayanan'&action='edit>'" id="button_psikologi" class="btn btn-sm btn-primary"&gt;PAL&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/haji/63860?from='pelayanan'&action='edit>'" id="button_psikologi" class="btn btn-sm btn-primary"&gt;Haji&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/covid19/create/63860?from=pelayanan&action=edit>" id="button_covid19" class="btn btn-sm btn-primary"&gt;COVID-19&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/diare/create/63860?from=pelayanan&action=edit>" id="button_diare" class="btn btn-sm btn-primary"&gt;Diare&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/anestesibedah/create/63860?from=pelayanan&action=edit>" id="button_anestesibedah" class="btn btn-sm btn-primary"&gt;Pemantauan Anestesi & Bedah&lt;/a&gt; &lt;/div&gt;&lt;label style="color: red;"&gt;&lt;/label&gt; &lt;script type="text/javascript"&gt;function showRiwayat()

{

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/showriwayat/0000000000140458>",

method: "GET",

dataType: "json",

data: {

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP",

page: "1"

},

success: function(data) {

\$("#modal .modal-title").html(data.title);

\$("#modal .modal-form").html(data.form);

openmodal("modal-lg");

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

}

\$(() => {

\$("#button_index").bind("click", ({ delegateTarget }) => {

window.location.replace(\$(delegateTarget).attr("href"))

})

})&lt;/script&gt; &lt;/div&gt;

&lt;div class="col-sm-4"&gt;

&lt;style&gt;

.swal-custom .swal2-actions .swal2-cancel{

border: 1px solid #bdbdbd

}

.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{

width:500px;

}

&lt;/style&gt;

&lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;Pasien Pulang&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;form id="form_pasienpulang" method="POST" action="<https://kotakediri.epuskesmas.id/pelayanan/update/63860>" class="form-horizontal"&gt;

&lt;input type="hidden" name="\_token" value="r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Status Pulang &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;select class="form-control input-sm" required="" name="Pelayanan\[statuspulang_id\]"&gt;

&lt;option value=""&gt;- PILIH -&lt;/option&gt;

&lt;option value="01"&gt;Berobat Jalan&lt;/option&gt;

&lt;option value="04"&gt;Rujuk Internal&lt;/option&gt;

&lt;option value="05"&gt;Rujuk Lanjut&lt;/option&gt;

&lt;option value="06"&gt;Meninggal&lt;/option&gt;

&lt;option value="07"&gt;Batal Berobat&lt;/option&gt;

&lt;/select&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Tgl. Mulai&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;div class="input-group datetime-free"&gt;

&lt;input type="text" class="form-control input-sm " id="tgl_mulai" name="Pelayanan\[tanggal_mulai\]" value="03-02-2026 21:22:36" placeholder="dd-mm-yyyy 00:00:00" readonly=""&gt;

&lt;span class="input-group-addon btn-info" readonly=""&gt;&lt;i class="fa fa-calendar"&gt;&lt;/i&gt; &lt;i class="fa fa-clock-o"&gt;&lt;/i&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Tgl. Selesai&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;div class="input-group" id="finishDate"&gt;

&lt;input type="text" class="form-control input-sm " id="tgl_selesai" onblur="setTanggalSelesai()" name="Pelayanan\[tanggal_selesai\]" value="03-02-2026 21:22:36" placeholder="dd-mm-yyyy 00:00:00"&gt;

&lt;span class="input-group-addon btn-info"&gt;&lt;i class="fa fa-calendar"&gt;&lt;/i&gt; &lt;i class="fa fa-clock-o"&gt;&lt;/i&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Lama Pelayanan &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;div class="input-group"&gt;

&lt;input type="number" pattern="\[0-9\]\*" inputmode="numeric" min="0" required="" class="form-control input-sm" id="hari" name="Pelayanan\[lama_hari\]" value="0" placeholder="0"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;Hr&lt;/label&gt;&lt;/span&gt;

&lt;input type="number" pattern="\[0-9\]\*" inputmode="numeric" min="0" required="" class="form-control input-sm" id="jam" name="Pelayanan\[lama_jam\]" value="0" placeholder="0"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;Jm&lt;/label&gt;&lt;/span&gt;

&lt;input type="number" pattern="\[0-9\]\*" inputmode="numeric" min="0" required="" class="form-control input-sm" id="menit" name="Pelayanan\[lama_menit\]" value="0" placeholder="0"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;Mnt&lt;/label&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label" id="label-tanggal-kontrol"&gt;Tgl. Rencana Kontrol &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;input type="hidden" name="Pelayanan\[tanggal_mulai_dokter\]" id="tanggal_mulai_dokter"&gt;

&lt;div class="input-group date-next"&gt;

&lt;input type="text" class="form-control input-sm" id="input-tanggal-kontrol" name="Pelayanan\[tanggal_kontrol\]" value="" placeholder="dd-mm-yyyy" required=""&gt;

&lt;span class="input-group-addon btn-info"&gt;&lt;i class="fa fa-calendar"&gt;&lt;/i&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-sm-4"&gt; &lt;/div&gt;

&lt;div class="col-sm-8"&gt;

&lt;input class="col-sm-1" type="checkbox" id="check-kontrol" onchange="checkKontrol(this);" checked=""&gt;

&lt;label class="col-sm-11" for="check-kontrol" style="color: red"&gt;Uncheck jika tidak ada rencana kontrol&lt;/label&gt;&lt;br&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="pull-right"&gt;

&lt;button id="button_setcall" type="button" class="btn btn-sm btn-primary button_epus" data="mulai_dokter" onclick="antrianBaru();"&gt;Panggil&lt;/button&gt;

&lt;button id="button_edit" type="button" class="btn btn-sm btn-primary" data="mulai_dokter" onclick="updateData(this);"&gt;Mulai Dokter&lt;/button&gt;

&lt;div class="btn-group "&gt;

&lt;button id="button_mulai" type="button" class="btn btn-sm btn-warning mulai_button" data="mulai" onclick="updateData(this);"&gt;Mulai&lt;/button&gt;

&lt;button id="button_selesai_batal_berobat" type="button" class="btn btn-sm btn-success" style="display: none;" data="selesai" onclick="updateData(this);"&gt;Selesai&lt;/button&gt;

&lt;button type="button" class="btn btn-sm btn-danger dropdown-toggle" style="min-width:20px;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"&gt;

&lt;span class="caret"&gt;&lt;/span&gt;

&lt;span class="sr-only"&gt;Toggle Dropup&lt;/span&gt;

&lt;/button&gt;

&lt;div class="dropdown-menu" style="min-width:0; padding:0; margin:0;"&gt;

&lt;button id="button_destroy" type="button" class="btn btn-sm btn-danger" style="min-width:120px;" onclick="destroyData(this);"&gt;Hapus Permanen&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;input type="hidden" name="skip_validasi_antrol" id="skip_validasi_antrol" value="0"&gt;

&lt;/form&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal fade" id="modalRespPendaftaranAntrol" role="dialog"&gt;

&lt;div class="modal-dialog"&gt;

&lt;div class="modal-content"&gt;

&lt;div id="data-content" class="modal-body"&gt;

&lt;div class="row"&gt;

&lt;p class="text-center"&gt;

&lt;/p&gt;&lt;div class="text-center"&gt;

&lt;svg width="90" height="91" viewBox="0 0 90 91" fill="none" xmlns="<http://www.w3.org/2000/svg>"&gt;

&lt;circle cx="45" cy="45.5" r="45" fill="#FFF4DD"&gt;&lt;/circle&gt;

&lt;circle cx="44.9999" cy="45.5002" r="39.1936" fill="#FFD496"&gt;&lt;/circle&gt;

&lt;path d="M63.6999 56.3281L48.6694 30.2254C48.2938 29.5859 47.7576 29.0557 47.114 28.6872C46.4703 28.3188 45.7415 28.125 44.9999 28.125C44.2582 28.125 43.5295 28.3188 42.8858 28.6872C42.2422 29.0557 41.706 29.5859 41.3304 30.2254L26.2999 56.3281C25.9385 56.9466 25.748 57.6501 25.748 58.3665C25.748 59.0829 25.9385 59.7864 26.2999 60.405C26.6707 61.0483 27.206 61.5815 27.8508 61.9496C28.4957 62.3178 29.2269 62.5078 29.9694 62.5001H60.0304C60.7723 62.5072 61.5028 62.3169 62.147 61.9488C62.7912 61.5806 63.326 61.0478 63.6965 60.405C64.0584 59.7867 64.2494 59.0834 64.25 58.367C64.2506 57.6506 64.0608 56.9469 63.6999 56.3281ZM61.316 59.0282C61.185 59.2518 60.9968 59.4364 60.7709 59.5633C60.545 59.6901 60.2894 59.7546 60.0304 59.7501H29.9694C29.7104 59.7546 29.4548 59.6901 29.2289 59.5633C29.0029 59.4364 28.8148 59.2518 28.6838 59.0282C28.5651 58.8273 28.5025 58.5982 28.5025 58.3648C28.5025 58.1314 28.5651 57.9023 28.6838 57.7014L43.7143 31.5987C43.8479 31.3763 44.0369 31.1922 44.2628 31.0644C44.4887 30.9366 44.7438 30.8694 45.0033 30.8694C45.2629 30.8694 45.518 30.9366 45.7439 31.0644C45.9697 31.1922 46.1587 31.3763 46.2924 31.5987L61.3229 57.7014C61.4405 57.9029 61.5019 58.1324 61.5007 58.3657C61.4995 58.5991 61.4357 58.8279 61.316 59.0282ZM43.6249 48.7501V41.8751C43.6249 41.5104 43.7698 41.1607 44.0276 40.9028C44.2855 40.645 44.6352 40.5001 44.9999 40.5001C45.3646 40.5001 45.7143 40.645 45.9722 40.9028C46.23 41.1607 46.3749 41.5104 46.3749 41.8751V48.7501C46.3749 49.1148 46.23 49.4645 45.9722 49.7224C45.7143 49.9802 45.3646 50.1251 44.9999 50.1251C44.6352 50.1251 44.2855 49.9802 44.0276 49.7224C43.7698 49.4645 43.6249 49.1148 43.6249 48.7501ZM47.0624 54.9376C47.0624 55.3455 46.9414 55.7443 46.7148 56.0835C46.4882 56.4227 46.166 56.687 45.7892 56.8431C45.4123 56.9992 44.9976 57.0401 44.5975 56.9605C44.1974 56.8809 43.8299 56.6845 43.5415 56.396C43.253 56.1076 43.0566 55.7401 42.977 55.34C42.8974 54.9399 42.9383 54.5252 43.0944 54.1483C43.2505 53.7715 43.5149 53.4493 43.854 53.2227C44.1932 52.9961 44.592 52.8751 44.9999 52.8751C45.5469 52.8751 46.0715 53.0924 46.4583 53.4792C46.8451 53.866 47.0624 54.3906 47.0624 54.9376Z" fill="#FF9600"&gt;&lt;/path&gt;

&lt;/svg&gt;

&lt;/div&gt;

&lt;p&gt;&lt;/p&gt;

&lt;div class="text-center"&gt;

&lt;strong&gt;&lt;span&gt;Pengaturan Jadwal atau Dokter Tidak Sesuai HFIS&lt;/span&gt;&lt;/strong&gt;

&lt;br&gt;

&lt;span style="color:#6C757D;"&gt;Kirim antrean ke BPJS gagal, mohon pastikan pengaturan jadwal (dokter atau jam buka tutup) atau pengaturan mapping dokter sudah sesuai dengan jadwal HFIS BPJS&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;div class="col-md-12"&gt;

&lt;div class="col-md-6"&gt;

&lt;a href="<https://kotakediri.epuskesmas.id/mjadwal>" class="btn btn-default btn-lg btn-block"&gt;Perbaiki Jadwal&lt;/a&gt;

&lt;/div&gt;

&lt;div class="col-md-6"&gt;

&lt;button class="btn btn-warning btn-lg btn-block" id="pendaftaranAntrolKirimPcare"&gt;Tetap Kirim ke PCare&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;style&gt;

.btn-hafis {

font-size: 16px;

padding: 10px 15px;

border-radius: 4px;

\-webkit-box-shadow: none;

box-shadow: none;

\-webkit-transition: all 0.2s;

transition: all 0.2s;

}

.border-top {

border-top: 1px solid #e5e5e5;

}

.modal-alert {

border-radius: 24px;

}

.modal-alert .modal-dialog {

width: 480px;

margin: 72px auto;

}

@media (max-width: 575px) {

.modal-alert .modal-dialog {

width: calc(100% - 16px);

margin: 8px;

}

}

.modal-alert .modal-dialog .modal-content {

\-webkit-box-shadow: none;

box-shadow: none;

border-radius: 16px;

}

.modal-alert .modal-dialog .modal-content .modal-body {

padding: 30px;

color: #6C757D;

}

.modal-alert .modal-dialog .modal-content .modal-body .alert-img {

margin-bottom: 20px;

}

.modal-alert .modal-dialog .modal-content .modal-body .alert-title {

font-size: 18px;

color: #333;

font-weight: bold;

}

.modal-alert .modal-dialog .modal-content .modal-body .alert-content {

padding-top: 10px;

}

.modal-alert .modal-dialog .modal-content .modal-body .alert-action {

padding-top: 24px;

margin-top: 24px;

display: -webkit-box;

display: -ms-flexbox;

display: flex;

\-webkit-box-orient: vertical;

\-webkit-box-direction: normal;

\-ms-flex-direction: column;

flex-direction: column;

\-webkit-box-align: center;

\-ms-flex-align: center;

align-items: center;

gap: 10px;

}

.modal-alert .modal-dialog .modal-content .modal-footer {

padding: 20px;

background-color: #f7f7f7;

border-bottom-left-radius: 16px;

border-bottom-right-radius: 16px;

}

.modal-alert .modal-dialog .modal-content .modal-footer .btn+.btn {

margin-left: 0;

}

.modal-alert .modal-dialog .modal-content .modal-footer.two-action {

display: -webkit-box;

display: -ms-flexbox;

display: flex;

\-webkit-box-align: center;

\-ms-flex-align: center;

align-items: center;

gap: 20px;

padding: 20px 0;

}

.modal-alert .modal-dialog .modal-content .modal-footer.two-action .btn {

\-webkit-box-flex: 1;

\-ms-flex: 1;

flex: 1;

}

.ac-box {

padding: 16px;

border: 1px solid #e5e5e5;

margin-top: 16px;

border-radius: 8px;

color: #343A40;

}

.ac-box.acb-gray {

background-color: #f7f7f7;

border: none;

}

.radio-card {

display: flex;

gap: 8px;

border: 1px solid #e5e5e5;

margin-top: 12px;

border-radius: 8px;

padding: 8px 12px;

}

.radio-card input {

margin-top: -1px;

}

&lt;/style&gt;

&lt;form action="#" id="form_select_jadwal_antrol"&gt;

&lt;div id="modalRespAntrol" class="modal modal-alert fade" tabindex="-1" role="dialog" aria-labelledby="modal" data-backdrop="static" data-keyboard="false"&gt;

&lt;div class="modal-dialog" role="document"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-body"&gt;

&lt;div class="alert-img" style="margin-bottom: 16px;" id="close_jadwal_antrol"&gt;

&lt;button type="button" class="close" data-dismiss="modal" style="font-size:26px"&gt;×&lt;/button&gt;

&lt;/div&gt;

&lt;div class="alert-img text-center"&gt;

&lt;svg width="90" height="91" viewBox="0 0 90 91" fill="none" xmlns="<http://www.w3.org/2000/svg>"&gt;

&lt;circle cx="45" cy="45.5" r="45" fill="#FFF4DD"&gt;&lt;/circle&gt;

&lt;circle cx="44.9999" cy="45.5002" r="39.1936" fill="#FFD496"&gt;&lt;/circle&gt;

&lt;path d="M63.6999 56.3281L48.6694 30.2254C48.2938 29.5859 47.7576 29.0557 47.114 28.6872C46.4703 28.3188 45.7415 28.125 44.9999 28.125C44.2582 28.125 43.5295 28.3188 42.8858 28.6872C42.2422 29.0557 41.706 29.5859 41.3304 30.2254L26.2999 56.3281C25.9385 56.9466 25.748 57.6501 25.748 58.3665C25.748 59.0829 25.9385 59.7864 26.2999 60.405C26.6707 61.0483 27.206 61.5815 27.8508 61.9496C28.4957 62.3178 29.2269 62.5078 29.9694 62.5001H60.0304C60.7723 62.5072 61.5028 62.3169 62.147 61.9488C62.7912 61.5806 63.326 61.0478 63.6965 60.405C64.0584 59.7867 64.2494 59.0834 64.25 58.367C64.2506 57.6506 64.0608 56.9469 63.6999 56.3281ZM61.316 59.0282C61.185 59.2518 60.9968 59.4364 60.7709 59.5633C60.545 59.6901 60.2894 59.7546 60.0304 59.7501H29.9694C29.7104 59.7546 29.4548 59.6901 29.2289 59.5633C29.0029 59.4364 28.8148 59.2518 28.6838 59.0282C28.5651 58.8273 28.5025 58.5982 28.5025 58.3648C28.5025 58.1314 28.5651 57.9023 28.6838 57.7014L43.7143 31.5987C43.8479 31.3763 44.0369 31.1922 44.2628 31.0644C44.4887 30.9366 44.7438 30.8694 45.0033 30.8694C45.2629 30.8694 45.518 30.9366 45.7439 31.0644C45.9697 31.1922 46.1587 31.3763 46.2924 31.5987L61.3229 57.7014C61.4405 57.9029 61.5019 58.1324 61.5007 58.3657C61.4995 58.5991 61.4357 58.8279 61.316 59.0282ZM43.6249 48.7501V41.8751C43.6249 41.5104 43.7698 41.1607 44.0276 40.9028C44.2855 40.645 44.6352 40.5001 44.9999 40.5001C45.3646 40.5001 45.7143 40.645 45.9722 40.9028C46.23 41.1607 46.3749 41.5104 46.3749 41.8751V48.7501C46.3749 49.1148 46.23 49.4645 45.9722 49.7224C45.7143 49.9802 45.3646 50.1251 44.9999 50.1251C44.6352 50.1251 44.2855 49.9802 44.0276 49.7224C43.7698 49.4645 43.6249 49.1148 43.6249 48.7501ZM47.0624 54.9376C47.0624 55.3455 46.9414 55.7443 46.7148 56.0835C46.4882 56.4227 46.166 56.687 45.7892 56.8431C45.4123 56.9992 44.9976 57.0401 44.5975 56.9605C44.1974 56.8809 43.8299 56.6845 43.5415 56.396C43.253 56.1076 43.0566 55.7401 42.977 55.34C42.8974 54.9399 42.9383 54.5252 43.0944 54.1483C43.2505 53.7715 43.5149 53.4493 43.854 53.2227C44.1932 52.9961 44.592 52.8751 44.9999 52.8751C45.5469 52.8751 46.0715 53.0924 46.4583 53.4792C46.8451 53.866 47.0624 54.3906 47.0624 54.9376Z" fill="#FF9600"&gt;&lt;/path&gt;

&lt;/svg&gt;

&lt;/div&gt;

&lt;input type="hidden" id="jadwal_antrian_id" name="jadwal_antrian_id" value=""&gt;

&lt;input type="hidden" id="jadwal_antrian_jam" name="jadwal_antrian_jam" value=""&gt;

&lt;div class="alert-title text-center"&gt;Jadwal dokter tidak sesuai dengan HFIS&lt;/div&gt;

&lt;div class="alert-content text-center"&gt;

Jadwal &lt;strong id="antrol_nama_dokter"&gt;&lt;/strong&gt; di HFIS berbeda dengan jadwal yang tersedia di ePuskesmas. Silakan untuk melakukan penyesuaian jadwal.

&lt;/div&gt;

&lt;div class="ac-box acb-gray"&gt;

&lt;strong&gt;Jam Praktik di ePuskesmas&lt;/strong&gt;

&lt;div style="margin-top: 2px;" id="jadwal_antrian_jam_html"&gt;07:00 - 12.00&lt;/div&gt;

&lt;/div&gt;

&lt;div class="ac-box"&gt;

&lt;strong&gt;Pilih Jam Praktik di HFIS&lt;/strong&gt;

&lt;div id="content_modal_res_antrol"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;button class="btn btn-warning btn-block btn-hafis" style="font-size: 14px;font-weight: bold;" type="submit" id="btn_res_jadwal_antrol"&gt;Sesuaikan jadwal dengan HFIS

&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;script&gt;

\$("#form_select_jadwal_antrol").on('submit',function(event){

event.preventDefault();

let jadwal = \$('input\[name="hfis_jampraktek"\]:checked').val();

var jamUbah = \$('input\[name="hfis_jampraktek"\]:checked').val();

let jadwal_antrian_id = \$("#jadwal_antrian_id").val();

var jamAsal = \$("#jadwal_antrian_jam").val();

if(typeof jadwal == 'undefined' || jadwal == ''){

alert("Silahkan pilih jam praktek!","danger");

return;

}

\$("#btn_res_jadwal_antrol").addClass('loading');

\$("#btn_res_jadwal_antrol").prop('disabled',true);

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pendaftaran/update_jadwal_hfis>",

method: "POST",

dataType: "json",

data: \$(this).serialize()+ '&jadwal_antrian_id=' + jadwal_antrian_id+ '&\_token=' + "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP",

success: function(data) {

\$("#btn_res_jadwal_antrol").removeClass('loading');

\$("#btn_res_jadwal_antrol").prop('disabled',false);

if(data.status == 'success'){

\$('button\[name^="jadwal_id_"\]').html(function(\_, html) {

return html.replace(jamAsal, jamUbah);

});

\$("#modalRespAntrol").modal('hide');

\$("#modalCountDownAntrol").modal('hide');

\$("#jadwal_antrian_id").val("");

Swal.fire({

html: \`&lt;div style="padding-left:20px;padding-right:20px;margin-top:30px;"&gt;

&lt;svg width="90" height="91" viewBox="0 0 90 91" fill="none" xmlns="<http://www.w3.org/2000/svg>"&gt;

&lt;circle cx="45" cy="45.5" r="45" fill="#EAFFF8"/&gt;

&lt;circle cx="44.9999" cy="45.5002" r="39.1936" fill="#DAF7ED"/&gt;

&lt;circle cx="44.9999" cy="46.4999" r="17.871" fill="#EAFFF8" stroke="#18AF7C" stroke-width="2"/&gt;

&lt;path d="M55.4244 40.8057L41.7852 54.4448C41.5373 54.6928 41.2893 54.8168 40.9173 54.8168C40.5453 54.8168 40.2973 54.6928 40.0494 54.4448L33.8498 48.2452C33.3538 47.7492 33.3538 47.0053 33.8498 46.5093C34.3457 46.0133 35.0897 46.0133 35.5856 46.5093L40.9173 51.841L53.6885 39.0698C54.1844 38.5738 54.9284 38.5738 55.4244 39.0698C55.9203 39.5658 55.9203 40.3097 55.4244 40.8057Z" fill="#6C757D"/&gt;

&lt;mask id="mask0_18599_239" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="33" y="38" width="23" height="17"&gt;

&lt;path d="M55.4244 40.8057L41.7852 54.4448C41.5373 54.6928 41.2893 54.8168 40.9173 54.8168C40.5453 54.8168 40.2973 54.6928 40.0494 54.4448L33.8498 48.2452C33.3538 47.7492 33.3538 47.0053 33.8498 46.5093C34.3457 46.0133 35.0897 46.0133 35.5856 46.5093L40.9173 51.841L53.6885 39.0698C54.1844 38.5738 54.9284 38.5738 55.4244 39.0698C55.9203 39.5658 55.9203 40.3097 55.4244 40.8057Z" fill="white"/&gt;

&lt;/mask&gt;

&lt;g mask="url(#mask0_18599_239)"&gt;

&lt;path fill-rule="evenodd" clip-rule="evenodd" d="M29.7581 31.2583H59.5161V61.0164H29.7581V31.2583Z" fill="#18AF7C"/&gt;

&lt;/g&gt;

&lt;/svg&gt;

&lt;div style="padding-top:10px"&gt;

&lt;h4 style="color:black;font-weight:bold"&gt;Jadwal berhasil diubah sesuai dengan HFIS&lt;/h4&gt;

&lt;div&gt;Silakan klik "Kirim Ulang" untuk mengirim kembali Antrean Online BPJS&lt;/div&gt;

&lt;/div&gt;

&lt;div&gt;

\`,

customClass: 'swal-custom',

reverseButtons: true,

showCancelButton: false,

allowOutsideClick: false,

allowEscapeKey: false,

confirmButtonColor: '#28A745',

confirmButtonText: 'Kirim Ulang',

}).then((result) => {

actionConfirmAntrol();

swal.close();

return;

})

}else{

alert(data.message, data.status);

}

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$("#btn_res_jadwal_antrol").removeClass('loading');

\$("#btn_res_jadwal_antrol").prop('disabled',false);

console.log(xhr.status);

console.log(thrownError);

}

});

});

&lt;/script&gt;

&lt;style&gt;

.btn-hafis {

font-size: 16px;

padding: 10px 15px;

border-radius: 4px;

\-webkit-box-shadow: none;

box-shadow: none;

\-webkit-transition: all 0.2s;

transition: all 0.2s;

}

.border-top {

border-top: 1px solid #e5e5e5;

}

.modal-alert {

border-radius: 24px;

}

.modal-alert .modal-dialog {

width: 480px;

margin: 72px auto;

}

@media (max-width: 575px) {

.modal-alert .modal-dialog {

width: calc(100% - 16px);

margin: 8px;

}

}

.modal-alert .modal-dialog .modal-content {

\-webkit-box-shadow: none;

box-shadow: none;

border-radius: 16px;

}

.modal-alert .modal-dialog .modal-content .modal-body {

padding: 30px;

color: #6C757D;

}

.modal-alert .modal-dialog .modal-content .modal-body .alert-img {

margin-bottom: 20px;

}

.modal-alert .modal-dialog .modal-content .modal-body .alert-title {

font-size: 18px;

color: #333;

font-weight: bold;

}

.modal-alert .modal-dialog .modal-content .modal-body .alert-content {

padding-top: 10px;

}

.modal-alert .modal-dialog .modal-content .modal-body .alert-action {

padding-top: 24px;

margin-top: 24px;

display: -webkit-box;

display: -ms-flexbox;

display: flex;

\-webkit-box-orient: vertical;

\-webkit-box-direction: normal;

\-ms-flex-direction: column;

flex-direction: column;

\-webkit-box-align: center;

\-ms-flex-align: center;

align-items: center;

gap: 10px;

}

.modal-alert .modal-dialog .modal-content .modal-footer {

padding: 20px;

background-color: #f7f7f7;

border-bottom-left-radius: 16px;

border-bottom-right-radius: 16px;

}

.modal-alert .modal-dialog .modal-content .modal-footer .btn+.btn {

margin-left: 0;

}

.modal-alert .modal-dialog .modal-content .modal-footer.two-action {

display: -webkit-box;

display: -ms-flexbox;

display: flex;

\-webkit-box-align: center;

\-ms-flex-align: center;

align-items: center;

gap: 20px;

padding: 20px 0;

}

.modal-alert .modal-dialog .modal-content .modal-footer.two-action .btn {

\-webkit-box-flex: 1;

\-ms-flex: 1;

flex: 1;

}

.ac-box {

padding: 16px;

border: 1px solid #e5e5e5;

margin-top: 16px;

border-radius: 8px;

color: #343A40;

}

.ac-box.acb-gray {

background-color: #f7f7f7;

border: none;

}

.radio-card {

display: flex;

gap: 8px;

border: 1px solid #e5e5e5;

margin-top: 12px;

border-radius: 8px;

padding: 8px 12px;

}

.radio-card input {

margin-top: -1px;

}

&lt;/style&gt;

&lt;form action="#" id="form_countdown_jadwal_antrol"&gt;

&lt;div id="modalCountDownAntrol" class="modal modal-alert fade" tabindex="-1" role="dialog" aria-labelledby="modal" data-backdrop="static" data-keyboard="false"&gt;

&lt;div class="modal-dialog" role="document"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-body"&gt;

&lt;div class="alert-img text-center"&gt;

&lt;svg width="90" height="91" viewBox="0 0 90 91" fill="none" xmlns="<http://www.w3.org/2000/svg>"&gt;

&lt;circle cx="45" cy="45.5" r="45" fill="#FFF4DD"&gt;&lt;/circle&gt;

&lt;circle cx="45.0002" cy="45.5002" r="39.1936" fill="#FFD496"&gt;&lt;/circle&gt;

&lt;path d="M63.6999 56.3279L48.6694 30.2253C48.2938 29.5858 47.7576 29.0555 47.114 28.6871C46.4703 28.3187 45.7415 28.1249 44.9999 28.1249C44.2582 28.1249 43.5295 28.3187 42.8858 28.6871C42.2422 29.0555 41.706 29.5858 41.3304 30.2253L26.2999 56.3279C25.9385 56.9465 25.748 57.65 25.748 58.3664C25.748 59.0828 25.9385 59.7863 26.2999 60.4048C26.6707 61.0482 27.206 61.5813 27.8508 61.9495C28.4957 62.3177 29.2269 62.5077 29.9694 62.5H60.0304C60.7723 62.5071 61.5028 62.3168 62.147 61.9486C62.7912 61.5805 63.326 61.0477 63.6965 60.4048C64.0584 59.7866 64.2494 59.0832 64.25 58.3668C64.2506 57.6505 64.0608 56.9468 63.6999 56.3279ZM61.316 59.0281C61.185 59.2516 60.9968 59.4363 60.7709 59.5631C60.545 59.69 60.2894 59.7545 60.0304 59.75H29.9694C29.7104 59.7545 29.4548 59.69 29.2289 59.5631C29.0029 59.4363 28.8148 59.2516 28.6838 59.0281C28.5651 58.8272 28.5025 58.598 28.5025 58.3647C28.5025 58.1313 28.5651 57.9022 28.6838 57.7012L43.7143 31.5986C43.8479 31.3761 44.0369 31.192 44.2628 31.0642C44.4887 30.9365 44.7438 30.8693 45.0033 30.8693C45.2629 30.8693 45.518 30.9365 45.7439 31.0642C45.9697 31.192 46.1587 31.3761 46.2924 31.5986L61.3229 57.7012C61.4405 57.9028 61.5019 58.1322 61.5007 58.3656C61.4995 58.599 61.4357 58.8278 61.316 59.0281ZM43.6249 48.75V41.875C43.6249 41.5103 43.7698 41.1606 44.0276 40.9027C44.2855 40.6448 44.6352 40.5 44.9999 40.5C45.3646 40.5 45.7143 40.6448 45.9722 40.9027C46.23 41.1606 46.3749 41.5103 46.3749 41.875V48.75C46.3749 49.1146 46.23 49.4644 45.9722 49.7222C45.7143 49.9801 45.3646 50.125 44.9999 50.125C44.6352 50.125 44.2855 49.9801 44.0276 49.7222C43.7698 49.4644 43.6249 49.1146 43.6249 48.75ZM47.0624 54.9375C47.0624 55.3454 46.9414 55.7442 46.7148 56.0833C46.4882 56.4225 46.166 56.6869 45.7892 56.843C45.4123 56.9991 44.9976 57.0399 44.5975 56.9603C44.1974 56.8808 43.8299 56.6843 43.5415 56.3959C43.253 56.1074 43.0566 55.7399 42.977 55.3398C42.8974 54.9398 42.9383 54.5251 43.0944 54.1482C43.2505 53.7713 43.5149 53.4492 43.854 53.2226C44.1932 52.9959 44.592 52.875 44.9999 52.875C45.5469 52.875 46.0715 53.0923 46.4583 53.4791C46.8451 53.8659 47.0624 54.3905 47.0624 54.9375Z" fill="#FF9600"&gt;&lt;/path&gt;

&lt;/svg&gt;

&lt;/div&gt;

&lt;input type="hidden" name="antrol_countdown_send" id="antrol_countdown_send" value="0"&gt;

&lt;div class="alert-title text-center"&gt;Koneksi ke BPJS sedang mengalami gangguan&lt;/div&gt;

&lt;div class="alert-content text-center"&gt;

Mohon menunggu &lt;span id="countdowntimer"&gt;10 &lt;/span&gt; detik untuk mengirim ulang.

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;button disabled="" class="btn btn-block btn-hafis" style="font-size: 14px;font-weight: bold;background-color:#B6B6B6;color:white" type="submit" id="btn_countdown_jadwal_antrol"&gt;

Kirim Ulang

&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;script type="text/javascript"&gt;

\$("#form_countdown_jadwal_antrol").on('submit',function(event){

event.preventDefault();

\$("#countdowntimer").html(10);

\$("#modalRespAntrol").modal('hide');

\$("#modalCountDownAntrol").modal('hide');

setTimeout(function(){

actionConfirmAntrol();

},500)

});

&lt;/script&gt;&lt;style&gt;

# modalCountDownMulaiPelayananBpjs .btn-hafis {

font-size: 16px;

padding: 10px 15px;

border-radius: 4px;

\-webkit-box-shadow: none;

box-shadow: none;

\-webkit-transition: all 0.2s;

transition: all 0.2s;

}

# modalCountDownMulaiPelayananBpjs .border-top {

border-top: 1px solid #e5e5e5;

}

# modalCountDownMulaiPelayananBpjs.modal-alert {

border-radius: 24px;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog {

width: 480px;

margin: 72px auto;

}

@media (max-width: 575px) {

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog {

width: calc(100% - 16px);

margin: 8px;

}

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content {

\-webkit-box-shadow: none;

box-shadow: none;

border-radius: 16px;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-body {

padding: 30px;

color: #6C757D;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-body .alert-img {

margin-bottom: 20px;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-body .alert-title {

font-size: 18px;

color: #333;

font-weight: bold;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-body .alert-content {

padding-top: 10px;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-body .alert-action {

padding-top: 24px;

margin-top: 24px;

display: -webkit-box;

display: -ms-flexbox;

display: flex;

\-webkit-box-orient: vertical;

\-webkit-box-direction: normal;

\-ms-flex-direction: column;

flex-direction: column;

\-webkit-box-align: center;

\-ms-flex-align: center;

align-items: center;

gap: 10px;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-footer {

padding: 20px;

background-color: #f7f7f7;

border-bottom-left-radius: 16px;

border-bottom-right-radius: 16px;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-footer .btn+.btn {

margin-left: 0;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-footer.two-action {

display: -webkit-box;

display: -ms-flexbox;

display: flex;

\-webkit-box-align: center;

\-ms-flex-align: center;

align-items: center;

gap: 20px;

padding: 20px 0;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-footer.two-action .btn {

\-webkit-box-flex: 1;

\-ms-flex: 1;

flex: 1;

}

# modalCountDownMulaiPelayananBpjs .ac-box {

padding: 16px;

border: 1px solid #e5e5e5;

margin-top: 16px;

border-radius: 8px;

color: #343A40;

}

# modalCountDownMulaiPelayananBpjs .ac-box.acb-gray {

background-color: #f7f7f7;

border: none;

}

# modalCountDownMulaiPelayananBpjs .radio-card {

display: flex;

gap: 8px;

border: 1px solid #e5e5e5;

margin-top: 12px;

border-radius: 8px;

padding: 8px 12px;

}

# modalCountDownMulaiPelayananBpjs .radio-card input {

margin-top: -1px;

}

&lt;/style&gt;

&lt;form action="#" id="form_countdown_mulai_pelayanan"&gt;

&lt;div id="modalCountDownMulaiPelayananBpjs" class="modal modal-alert fade" tabindex="-1" role="dialog" aria-labelledby="modal" data-backdrop="true" data-keyboard="true"&gt;

&lt;div class="modal-dialog" role="document"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-body"&gt;

&lt;div class="alert-img text-center"&gt;

&lt;svg width="90" height="91" viewBox="0 0 90 91" fill="none" xmlns="<http://www.w3.org/2000/svg>"&gt;

&lt;circle cx="45" cy="45.5" r="45" fill="#FFF4DD"&gt;&lt;/circle&gt;

&lt;circle cx="45.0002" cy="45.5002" r="39.1936" fill="#FFD496"&gt;&lt;/circle&gt;

&lt;path d="M63.6999 56.3279L48.6694 30.2253C48.2938 29.5858 47.7576 29.0555 47.114 28.6871C46.4703 28.3187 45.7415 28.1249 44.9999 28.1249C44.2582 28.1249 43.5295 28.3187 42.8858 28.6871C42.2422 29.0555 41.706 29.5858 41.3304 30.2253L26.2999 56.3279C25.9385 56.9465 25.748 57.65 25.748 58.3664C25.748 59.0828 25.9385 59.7863 26.2999 60.4048C26.6707 61.0482 27.206 61.5813 27.8508 61.9495C28.4957 62.3177 29.2269 62.5077 29.9694 62.5H60.0304C60.7723 62.5071 61.5028 62.3168 62.147 61.9486C62.7912 61.5805 63.326 61.0477 63.6965 60.4048C64.0584 59.7866 64.2494 59.0832 64.25 58.3668C64.2506 57.6505 64.0608 56.9468 63.6999 56.3279ZM61.316 59.0281C61.185 59.2516 60.9968 59.4363 60.7709 59.5631C60.545 59.69 60.2894 59.7545 60.0304 59.75H29.9694C29.7104 59.7545 29.4548 59.69 29.2289 59.5631C29.0029 59.4363 28.8148 59.2516 28.6838 59.0281C28.5651 58.8272 28.5025 58.598 28.5025 58.3647C28.5025 58.1313 28.5651 57.9022 28.6838 57.7012L43.7143 31.5986C43.8479 31.3761 44.0369 31.192 44.2628 31.0642C44.4887 30.9365 44.7438 30.8693 45.0033 30.8693C45.2629 30.8693 45.518 30.9365 45.7439 31.0642C45.9697 31.192 46.1587 31.3761 46.2924 31.5986L61.3229 57.7012C61.4405 57.9028 61.5019 58.1322 61.5007 58.3656C61.4995 58.599 61.4357 58.8278 61.316 59.0281ZM43.6249 48.75V41.875C43.6249 41.5103 43.7698 41.1606 44.0276 40.9027C44.2855 40.6448 44.6352 40.5 44.9999 40.5C45.3646 40.5 45.7143 40.6448 45.9722 40.9027C46.23 41.1606 46.3749 41.5103 46.3749 41.875V48.75C46.3749 49.1146 46.23 49.4644 45.9722 49.7222C45.7143 49.9801 45.3646 50.125 44.9999 50.125C44.6352 50.125 44.2855 49.9801 44.0276 49.7222C43.7698 49.4644 43.6249 49.1146 43.6249 48.75ZM47.0624 54.9375C47.0624 55.3454 46.9414 55.7442 46.7148 56.0833C46.4882 56.4225 46.166 56.6869 45.7892 56.843C45.4123 56.9991 44.9976 57.0399 44.5975 56.9603C44.1974 56.8808 43.8299 56.6843 43.5415 56.3959C43.253 56.1074 43.0566 55.7399 42.977 55.3398C42.8974 54.9398 42.9383 54.5251 43.0944 54.1482C43.2505 53.7713 43.5149 53.4492 43.854 53.2226C44.1932 52.9959 44.592 52.875 44.9999 52.875C45.5469 52.875 46.0715 53.0923 46.4583 53.4791C46.8451 53.8659 47.0624 54.3905 47.0624 54.9375Z" fill="#FF9600"&gt;&lt;/path&gt;

&lt;/svg&gt;

&lt;/div&gt;

&lt;input type="hidden" name="check_countdown_send" id="check_countdown_send" value="0"&gt;

&lt;input type="hidden" name="total_resend_mulai" id="total_resend_mulai" value="0"&gt;

&lt;div class="alert-title text-center"&gt;Koneksi ke BPJS sedang mengalami perlambatan (1003)&lt;/div&gt;

&lt;div class="alert-content text-center"&gt;

Mohon menunggu &lt;span id="countdowntimer_mulai_pelayanan"&gt;10 &lt;/span&gt; detik untuk mengirim ulang.

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;button disabled="" class="btn btn-block btn-hafis" style="font-size: 14px;font-weight: bold;background-color:#B6B6B6;color:white" type="submit" id="btn_countdown_mulai_pelayanan"&gt;

Kirim Ulang

&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;script type="text/javascript"&gt;

\$("#form_countdown_mulai_pelayanan").on('submit',function(event){

event.preventDefault();

\$("#modalCountDownMulaiPelayananBpjs").modal('hide');

updateData(this, 'resendMulai');

});

function startCountdown() {

var timeleft = 10;

\$("#check_countdown_send").val(10);

\$("#countdowntimer_mulai_pelayanan").html(timeleft);

\$("#btn_countdown_mulai_pelayanan").prop("disabled", true);

\$("#btn_countdown_mulai_pelayanan").css({ 'background-color' : '#B6B6B6', 'color' : 'white' });

\$("#btn_countdown_mulai_pelayanan").removeClass("btn-warning");

var downloadTimer = setInterval(function(){

timeleft--;

document.getElementById("countdowntimer_mulai_pelayanan").textContent = timeleft;

if(timeleft <= 0){

clearInterval(downloadTimer);

\$("#btn_countdown_mulai_pelayanan").prop("disabled", false);

\$("#btn_countdown_mulai_pelayanan").css({ 'background-color' : '', 'color' : '' });

\$("#btn_countdown_mulai_pelayanan").addClass("btn-warning");

}

}, 1000);

}

\$("#modalCountDownMulaiPelayananBpjs").on('shown.bs.modal', function () {

startCountdown();

});

&lt;/script&gt;&lt;style&gt;

.modal-dialog {

display: flex;

align-items: center;

min-height: calc(100vh - 60px);

}

.modal-content {

width: 100%;

}

&lt;/style&gt;

&lt;div id="modalResumeRawatInap" class="modal custom-popup fade" tabindex="-1" role="dialog" aria-labelledby="modalResumeRawatInapLabel" data-backdrop="static"&gt;

&lt;div class="modal-dialog modal-lg" role="document"&gt;

&lt;div class="modal-content"&gt;

&lt;form id="formResumeMedisRawatInap"&gt;

&lt;div class="modal-header mdl-closable"&gt;

&lt;h4 class="modal-title"&gt;Resume Medis&lt;/h4&gt;

&lt;button type="button" class="close" data-dismiss="modal" aria-label="Close"&gt;

&lt;svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="<http://www.w3.org/2000/svg"&gt;&lt;g> clip-path="url(#clip0_19554_39777)"&gt;&lt;path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L12 10.5858L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.4142 12L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12 13.4142L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.5858 12L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#6C757D"&gt;&lt;/path&gt;&lt;/g&gt;&lt;defs&gt;&lt;clipPath id="clip0_19554_39777"&gt;&lt;rect width="24" height="24" fill="white"&gt;&lt;/rect&gt;&lt;/clipPath&gt;&lt;/defs&gt;&lt;/svg&gt;

&lt;/button&gt;

&lt;/div&gt;

&lt;div class="modal-body"&gt;

&lt;div class="gform"&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label"&gt;DPJP &lt;span class="text-red"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;input type="text" class="form-control ui-autocomplete-input" name="dpjp" placeholder="Nama dokter" autocomplete="off"&gt;

&lt;input type="hidden" name="dokter_id" data-for="dokter_id"&gt;

&lt;/div&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label"&gt;Tanggal Mulai&lt;/label&gt;

&lt;div class="input-group"&gt;

&lt;input type="text" class="form-control" name="tanggal_mulai" placeholder="dd/mm/yyyy" disabled=""&gt;

&lt;span class="input-group-addon btn-info"&gt;&lt;i class="fa fa-calendar"&gt;&lt;/i&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label"&gt;Tanggal Selesai&lt;/label&gt;

&lt;div class="input-group"&gt;

&lt;input type="text" class="form-control" name="tanggal_selesai" placeholder="dd/mm/yyyy" disabled=""&gt;

&lt;span class="input-group-addon btn-info"&gt;&lt;i class="fa fa-calendar"&gt;&lt;/i&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;!-- Bagian ini dicomment karena di takeout sementara, akan digunakan untuk enhance --&gt;

&lt;!-- <div class="epus-ig"&gt;

&lt;div class="input-label"&gt;Tanda Tangan Digital&lt;/div&gt;

&lt;label class="switch m-0"&gt;

<input

class="switch-input"

type="checkbox"

name="ttd_digital"

chedata-toggle="toggle"

value="1"

checked>

&lt;span class="switch-label" data-on="Aktif" data-off="Tidak Aktif"&gt;&lt;/span&gt;

&lt;span class="switch-handle"&gt;&lt;/span&gt;

&lt;/label&gt;

&lt;/div&gt; -->

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;button data-dismiss="modal" type="button" class="btn cta-default cta-reset"&gt;Tutup&lt;/button&gt;

&lt;button type="submit" class="btn cta-primary px-16 btn-loading" style="display: inline-flex;justify-content: center;gap: 6px; font-weight: 700;"&gt;

&lt;div class="spinner"&gt;&lt;/div&gt;

&lt;svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="<http://www.w3.org/2000/svg>" style="margin-top: 1px;"&gt;

&lt;g clip-path="url(#clip0_3555_9650)"&gt;

&lt;path d="M13.125 4.00313V0.5H2.875V4.00313C2.23466 4.03594 1.63134 4.31323 1.18944 4.77781C0.747536 5.24239 0.50076 5.85882 0.5 6.5V12.5H2.625V11.5H1.5V6.5C1.50045 6.10231 1.65863 5.72104 1.93983 5.43983C2.22104 5.15863 2.60231 5.00045 3 5H13C13.3977 5.00045 13.779 5.15863 14.0602 5.43983C14.3414 5.72104 14.4996 6.10231 14.5 6.5V11.5H13.125V12.5H15.5V6.5C15.4992 5.85882 15.2525 5.24239 14.8106 4.77781C14.3687 4.31323 13.7653 4.03594 13.125 4.00313V4.00313ZM12.125 4H3.875V1.5H12.125V4Z" fill="#ffffff"&gt;&lt;/path&gt;

&lt;path d="M12.375 6.25H13.375V7.25H12.375V6.25ZM3.625 8.25H2.375V9.25H3.625V15.5H12.125V9.25H13.375V8.25H3.625ZM11.125 14.5H4.625V9.25H11.125V14.5Z" fill="#ffffff"&gt;&lt;/path&gt;

&lt;/g&gt;

&lt;defs&gt;

&lt;clipPath id="clip0_3555_9650"&gt;

&lt;rect width="16" height="16" fill="white"&gt;&lt;/rect&gt;

&lt;/clipPath&gt;

&lt;/defs&gt;

&lt;/svg&gt;

Cetak Resume Medis Rawat Inap

&lt;/button&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;script&gt;

const modelForPelayanan = {"id":63860,"tanggal":"03-02-2026 08:51:24","pendaftaran_id":63887,"tanggal_selesai":null,"tanggal_mulai":null,"ruangan_id":"0001","statuspulang_id":null,"instalasi_id":"01","status_middleware":0,"antrean":"-0036","id_encounter_satset":null,"tanggal_pasien_pulang":"03-02-2026 21:22:36","tanggal_pasien_mulai":"03-02-2026 21:22:36","diagnosas":\[\],"pendaftaran":{"id":63887,"tanggal":"03-02-2026 08:51:24","pasien_id":"0000000000140458","umur_bulan":5,"umur_hari":7,"umur_tahun":23,"keluhan":null,"lama_sakit_hari":null,"lama_sakit_bulan":null,"lama_sakit_tahun":null,"asuransi_id":"0001","no_asuransi":"0002060612818","send_trigger":null,"pasien":{"id":"0000000000140458","no_rm_lama":null,"no_dok_rm":"","nik":"3571022708020002","nama":"IVANDER NAGATA","nama_ayah":"SULINDRA WIJAYA","jenis_kelamin":"Laki-laki","tanggal_lahir":"27-08-2002","tempat_lahir":"KEDIRI","alamat":"JL IMAM BONJOL NO 364","no_hp":"082221676079","asuransi_id":"0001","no_asuransi":"0002060612818","rt":"01","rw":"03","kelurahan_id":"3571020013","kecamatan_id":"3571020","umur_tahun":23,"umur_bulan":5,"umur_hari":7,"riwayat_pasien":\[\],"alergi_pasien":\[\],"penyakit_kronis":null},"asuransi":{"id":"0001","nama":"BPJS Kesehatan","is_bridgingbpjs":1}},"ruangan":{"id":"0001","nama":"DEWASA","code":"UMUM","is_antrean_pelayanan":1},"anamnesa_last":{"id":58570,"tanggal":"03-02-2026 08:51:24","pelayanan_id":63860,"dokter_id":null,"perawat_id":null,"keluhan_utama":null,"keluhan_tambahan":null,"lama_sakit_tahun":0,"lama_sakit_bulan":0,"lama_sakit_hari":0,"merokok":0,"konsumsi_alkohol":0,"kurang_sayur_buah":0,"terapi":null,"terapi_non_obat":null,"bmhp":null,"edukasi":null,"rencana_tindakan":null,"askep":null,"observasi":null,"biopsikososial":null,"foto":null,"keterangan":null,"rencana_tindakan_covid":null,"aksi_tindakan_covid":null,"tanggal_rencana_tindakan_covid":null,"hasil_tindakan_covid":null,"status_cloud":1,"anamnesa_id_cloud":58570,"tindakan_keperawatan":null,"created_at":"03-02-2026 08:51:24","updated_at":"03-02-2026 08:51:24","created_by":"aditama-balowerti","updated_by":"aditama-balowerti","cara_persalinan":null,"pb_lahir":null,"bb_lahir":null,"di_rs":null,"umur_kelahiran":null,"riwayat_vaksinasi_dasar":null,"riwayat_vaksinasi_dasar_lainnya":null,"kebiasaan_ibu_rokok":null,"kebiasaan_ibu_alkohol":null,"kebiasaan_ibu_obat_tidur":null,"kebiasaan_ibu_olahraga":null,"alat_bantu_aktrifitas":null,"alat_bantu_aktrifitas_jelaskan":null,"kendala_komunikasi":null,"kendala_komunikasi_jelaskan":null,"merawat_dirumah":null,"merawat_dirumah_jelaskan":null,"membutuhkan_bantuan":null,"membutuhkan_bantuan_jelaskan":null,"ekspresi_emosi":null,"bahasa_digunakan":null,"bahasa_digunakan_sebutkan":null,"tinggal_dengan":null,"tinggal_dengan_sebutkan":null,"sosial_ekonomi":null,"gangguan_jiwa_dimasa_lalu":null,"status_ekonomi":null,"hubungan_keluarga":null,"konseling":null,"konseling_menyusui":null,"tanda_bahaya_kehamilan":null,"tanda_bahaya_persalinan":null,"phbs":null,"konseling_gizi_ibu_hamil":null,"konseling_ibu_hamil":null,"konseling_lainnya":null,"kunjungan_ulang":null},"kunjungan_bpjs":null,"periksafisik_last":{"id":58696,"tanggal":"03-02-2026 08:51:24","pelayanan_id":63860,"dokter_id":null,"perawat_id":null,"sistole":0,"diastole":0,"detak_nadi":null,"nafas":null,"saturasi":null,"detak_jantung":null,"suhu":null,"kesadaran":null,"triage":null,"berat":54,"tinggi":160,"cara_ukur":null,"lingkar_perut":null,"imt":null,"hasil_imt":null,"aktifitas_fisik":null,"kulit":null,"kuku":null,"kepala":null,"wajah":null,"mata":null,"telinga":null,"hidung_sinus":null,"mulut_bibir":null,"leher":null,"dada_punggung":null,"kardiovaskuler":null,"dada_aksila":null,"abdomen_perut":null,"ekstermitas_atas":null,"ekstermitas_bawah":null,"genitalia_wanita":null,"genitalia_pria":null,"status_cloud":1,"periksafisik_id_cloud":58696,"created_at":"03-02-2026 08:51:24","updated_at":"03-02-2026 08:51:24","created_by":"aditama-balowerti","updated_by":"aditama-balowerti","status_hamil":0,"skala_nyeri":null,"skala_nyeri_slider":null,"membuka_mata":null,"respon_verbal":null,"respon_motorik":null,"map":null,"mobilisasi":null,"toileting":null,"makan_minum":null,"mandi":null,"berpakaian":null,"merasakan_nyeri":null,"pencetus":null,"kualitas":null,"lokasi":null,"waktu":null,"cara_berjalan":null,"penopang":null,"anamnesa_id":58570},"ruangan_is_antrean_pelayanan":{"id":"0001","instalasi_id":"01","is_antrean_pelayanan":1}};

const aksesRanap = true;

const instalasiIdRanap = "03";

const urlPelayanan = "https:\\/\\/kotakediri.epuskesmas.id\\/pelayanan";

const urlPelayananRanap = "https:\\/\\/kotakediri.epuskesmas.id\\/pelayananrawatinap";

function showModalResumeRawatInap(formData) {

if (formData) {

\$('input\[name="tanggal_mulai"\]').val(formData\['Pelayanan\[tanggal_mulai\]'\]);

\$('input\[name="tanggal_selesai"\]').val(formData\['Pelayanan\[tanggal_selesai\]'\]);

getDpjpAvailable();

}

\$('#modalResumeRawatInap').modal('show');

}

function getDpjpAvailable() {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/getresumeranap>",

method: 'POST',

dataType: "json",

data: {

pelayanan_id: "63860",

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"

},

success: function (data) {

if (data.status === 'success') {

if (!data.data.hasTtd || !data.data.hasTtd\[0\]?.\[0\]?.status_signature_pegawai) {

\$('input\[name="ttd_digital"\]')

.prop('checked', false)

.prop('disabled', true)

.closest('.switch')

.addClass('disabled');

}

\$('input\[name="dpjp"\]').val(data.data.dpjp_nama);

\$('input\[data-for="dokter_id"\]').val(data.data.dpjp_id);

} else {

console.error('Error fetching DPJP data:', data.message);

}

},

error: function (xhr, status, error) {

console.error('AJAX Error:', status, error);

console.log('Status Code:', xhr.status);

console.log('Response Text:', xhr.responseText);

}

});

}

\$('#modalResumeRawatInap').on('hidden.bs.modal', function () {

if (aksesRanap && modelForPelayanan.instalasi_id === instalasiIdRanap) {

window.location.replace(urlPelayananRanap);

} else {

window.location.replace(urlPelayanan);

}

});

\$("input\[name='dpjp'\]").autocomplete({

source: function (request, response) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/getresumeranap>",

method: 'POST',

dataType: "json",

data: {

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP",

autocomplete: 'dokter',

search: {

\['dokter_nama'\]: request.term

}

},

success: function (data) {

response(data)

},

error: function (xhr, status, error) {

console.error('AJAX Error:', status, error);

response(\[\]);

}

});

},

focus: function(event, ui) {

\$(this).parent().removeClass('has-success').addClass('has-error');

return false;

},

select: function(event, ui) {

\$(this).parent().removeClass('has-error').addClass('has-success');

\$(this).val(ui.item.label || ui.item.value);

\$('input\[data-for="dokter_id"\]').val(ui.item.id);

return false;

},

minLength: 2

})

\$('#formResumeMedisRawatInap').on('submit', function(e) {

e.preventDefault();

const submitBtn = \$(this).find('button\[type="submit"\]');

submitBtn.addClass('loading').prop('disabled', true);

const formData = {

dpjp: \$('input\[name="dpjp"\]').val(),

dokter_id: \$('input\[data-for="dokter_id"\]').val(),

tanggal_mulai: \$('input\[name="tanggal_mulai"\]').val(),

tanggal_selesai: \$('input\[name="tanggal_selesai"\]').val(),

// ttd_digital: \$('input\[name="ttd_digital"\]').is(':checked') ? true : false,

};

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/prosesresumeranap>",

method: 'POST',

dataType: "json",

data: {

pelayanan_id: "63860",

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP",

...formData

},

success: function (data) {

if (data.status === 'success') {

let url = '<https://kotakediri.epuskesmas.id/pelayanan/printresumeranap/63860>'

if (formData.ttd_digital) {

url += \`?templateprint=true&pelayanan=\` + '63860';

}

window.open(

url,

'\_blank',

'left=100,top=100,scrollbars=yes,resizable=yes,fullscreen=yes'

)

}

},

error: function (xhr, status, error) {

if (xhr.responseJSON && xhr.responseJSON.message) {

alert(xhr.responseJSON.message, xhr.responseJSON.status);

\$('input\[name="dpjp"\]').focus()

} else {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

}

},

complete: function () {

submitBtn.removeClass('loading').prop('disabled', false);

}

});

})

&lt;/script&gt;&lt;script src="<https://kotakediri.epuskesmas.id/js/socket.io.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/antrol.js?v=4.6"&gt;&lt;/script>&gt;

&lt;script type="text/javascript"&gt;

function sendTrigger(obj) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/sendtrigger/63887>",

method: 'POST',

dataType: "json",

data: {

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"

},

success: function(data) {

setTimeout(function() {

if (data.status == 'danger') {

alert(data.message, data.status,3000);

}

}, 1000);

},

error: function (xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

}

function checkKontrol(obj){

if (document.getElementById('check-kontrol').checked) {

\$('#label-tanggal-kontrol').html('Tgl. Rencana Kontrol &lt;span style="color:red;"&gt;\*&lt;/span&gt;');

\$('#input-tanggal-kontrol').attr('required', true);

} else {

\$('#label-tanggal-kontrol').html('Tgl. Rencana Kontrol');

\$('#input-tanggal-kontrol').attr('required', false);

}

}

function buttonSwitchBridging()

{

\$.ajax({

headers: { 'X-CSRF-TOKEN': 'r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP' },

type: "POST",

url: "/switchbridgingasuransi",

data : {

id : "00001033231",

switchto : 'nonactive',

jenis : 'bpjs',

},

dataType: "JSON",

success: function (data) {

alert("BPJS berhasil dinonaktifkan. Silahkan mulai pelayanan dengan klik tombol mulai!",'success')

},

error: function (data) {

alert(data.responseJSON.meta.message)

}

});

}

function actionConfirmAntrol(){

\$("#button_mulai").click();

}

function updateData(obj, resendMulai = null)

{

var action = \$(obj).attr('data');

var form = \$('#form_pasienpulang');

const anamnesaActions = \["save-anamnesa-and-askep", "save-anamnesa"\];

const isStartFromAnamnesa = action == "mulai" && \$("#button_save").length > 0 && anamnesaActions.includes(\$("#button_save").attr("data"));

let shouldProcessAnamnesa = true;

if(action == 'selesai'){

if(requiredCheck(form.find('input')) == false){

if(document.getElementById('check-kontrol').checked){

alert('Silahkan isi tanggal rencana kontrol terlebih dahulu, sebelum menyelesaikan pemeriksaan pasien.','danger')

}

return false;

}

}

if(action == 'mulai_dokter'){

\$('#tanggal_mulai_dokter').val('2026-02-03 09:22:36');

}

\$(obj).addClass('loading');

var kirim_tanpa_antrol = \$("#kirim_tanpa_antrol").val() || 0;

var antrol_countdown_send = \$("#antrol_countdown_send").val() || 0

var total_resend_mulai = \$("#total_resend_mulai").val() || 0

\$("#modalRespAntrol").modal('hide');

\$("#modalCountDownAntrol").modal('hide');

\$("#jadwal_antrian_id").val("");

\$("#jadwal_antrian_jam").val("");

\$("#bridging_non_active_on").val('false');

\$.ajax({

url: form.attr('action'),

method: 'POST',

dataType: "json",

data: form.serialize()+"&kirim_tanpa_antrol="+kirim_tanpa_antrol+ '&antrol_countdown_send=' + antrol_countdown_send + (resendMulai ? '&resend_mulai=1' : '') + '&total_resend_mulai=' + total_resend_mulai,

success: function(data) {

if(data?.antrol_status){

\$(obj).removeClass('loading');

getResonseAntrol(data,'anamnesa')

if(data.antrol_status != 'success' && data.antrol_code != 200 && data?.statusbelumskrining != "belum skrining pcare"){

shouldProcessAnamnesa = false

return;

}

}

alert(data.message, data.status);

\$("#kirim_tanpa_antrol").val("")

if (data?.statusbelumskrining == "belum skrining pcare") {

popUpBpjsBelumSkrining('anamnesa')

\$(obj).removeClass('loading');

}

alert(data.message, data.status);

if (data.badung_sehat_error) {

alert(data.badung_sehat_message, 'danger');

}

\$(obj).removeClass('loading');

if(data.status == 'success'){

\$('div\[name=tanggal_mulai\]').html(data.tanggal_mulai);

\$('div\[name=tanggal_selesai\]').html(data.tanggal_selesai);

if(action == 'mulai'){

\$('.form-pulang').removeClass('hidden');

}

if (action == 'selesai') {

syncPendaftaranKiosk();

}

if(data?.status_bpjs == "perlambatan") {

\$('#total_resend_mulai').val(parseInt(data?.total_resend_mulai));

\$("#bridging_non_active_on").val('true');

if(parseInt(data?.total_resend_mulai) > 3){

showAlertBridgingNonActive("1003")

} else {

\$('#modalCountDownMulaiPelayananBpjs').modal('hide');

\$('.modal-backdrop').remove();

\$('body').removeClass('modal-open');

setTimeout(function() {

\$('#modalCountDownMulaiPelayananBpjs').modal('show');

}, 300);

}

return;

} else if (data?.status_bpjs == "timeout") {

showAlertBridgingNonActive("1001")

\$("#bridging_non_active_on").val('true');

return;

} else if (data?.status_helper_pcare == "error_helper_pcare") {

showAlertBridgingNonActive("1002")

\$("#bridging_non_active_on").val('true');

return;

}

\$(obj).removeClass('btn-warning').addClass('btn-success').attr('data','selesai').html('Selesai');

if (data.statuspulang_id == '04') {

setTimeout(function() {

window.location = "<https://kotakediri.epuskesmas.id/pelayanan/createrujukaninternal/63860?from=\\'pelayanan\\>'";

}, 1500);

}else if (data.statuspulang_id == '05') {

setTimeout(function() {

window.location = "<https://kotakediri.epuskesmas.id/rujukanexternal/create/63860?from=\\'pelayanan\\>'";

}, 1500);

}else if (data.statuspulang_id == '06') {

setTimeout(function() {

window.location = "<https://kotakediri.epuskesmas.id/pasienmeninggal/create/63860?from=\\'pelayanan\\>'";

}, 1500);

}else if (!isStartFromAnamnesa && data?.statusbelumskrining != "belum skrining pcare"){

const instalasi_id = 01;

const rawatInap_id = 03;

const formData = form.serializeArray().reduce(function(obj, item) {

obj\[item.name\] = item.value;

return obj;

}, {});

setTimeout(function() {

if (instalasi_id == rawatInap_id && action !== 'mulai') {

showModalResumeRawatInap(formData)

} else {

window.location.reload()

}

}, 2000);

}

}

\$('#modalRespPendaftaranAntrol').modal('hide')

\$('#pendaftaranAntrolKirimPcare').removeClass('loading')

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$(obj).removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

\$('#modalRespPendaftaranAntrol').modal('hide')

\$('#pendaftaranAntrolKirimPcare').removeClass('loading')

},

complete: function() {

/\*

Support case when the action is 'mulai', and the trigger from 'anamnesa'.

Starting to process submit the 'anamnesa' after 'pelayanan' started or not.

Anamnesis is still submitted regardless of whether the 'pelayanan' update succeeds or fails.

\*/

if (isStartFromAnamnesa && shouldProcessAnamnesa){

const triggerButtonAction = \$("#button_save").attr("data") == "save-anamnesa-and-askep" ? \$("#buttonAskep") : \$("#button_save");

const button_submit = \$(this).find('button\[type=submit\]');

button_submit.removeClass('loading');

triggerButtonAction.trigger("click");

}

}

});

}

function destroyData(obj)

{

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/destroy>",

method: 'POST',

dataType: "json",

data: {

id: "63860",

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"

},

success: function(data) {

alert(data.message, data.status);

\$(obj).removeClass('loading');

window.location.replace(\$("#button_index").attr('href'));

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$(obj).removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

}

});

}

function setCallThis(obj)

{

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/setcall>",

method: 'POST',

dataType: "json",

data: {

id: "63860",

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"

},

success: function(data) {

callAntreanKiosk('-36', 'UMUM')

alert(data.message, data.status);

\$(obj).removeClass('loading');

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$(obj).removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

}

});

}

function showAlertBridgingNonActive(codeError)

{

Swal.fire({

html: \`&lt;div style="padding-left:20px;padding-right:20px;margin-top:30px;"&gt;

&lt;svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="<http://www.w3.org/2000/svg>"&gt;

&lt;circle cx="45" cy="45" r="45" fill="#FBDBDD"/&gt;

&lt;circle cx="45.0002" cy="45" r="39.1936" fill="#EFCFD1"/&gt;

&lt;circle cx="44.9999" cy="45" r="17.871" fill="#FBDBDD" stroke="#D3555C" stroke-width="2"/&gt;

&lt;g clip-path="url(#clip0_17308_186)"&gt;

&lt;path fill-rule="evenodd" clip-rule="evenodd" d="M38.7708 39.2708C39.1735 38.8681 39.8265 38.8681 40.2292 39.2708L45 44.0416L49.7708 39.2708C50.1735 38.8681 50.8265 38.8681 51.2292 39.2708C51.6319 39.6735 51.6319 40.3265 51.2292 40.7292L46.4584 45.5L51.2292 50.2708C51.6319 50.6735 51.6319 51.3265 51.2292 51.7292C50.8265 52.1319 50.1735 52.1319 49.7708 51.7292L45 46.9584L40.2292 51.7292C39.8265 52.1319 39.1735 52.1319 38.7708 51.7292C38.3681 51.3265 38.3681 50.6735 38.7708 50.2708L43.5416 45.5L38.7708 40.7292C38.3681 40.3265 38.3681 39.6735 38.7708 39.2708Z" fill="#D3555C"/&gt;

&lt;/g&gt;

&lt;defs&gt;

&lt;clipPath id="clip0_17308_186"&gt;

&lt;rect width="22" height="22" fill="white" transform="translate(34 34.5)"/&gt;

&lt;/clipPath&gt;

&lt;/defs&gt;

&lt;/svg&gt;

&lt;div style="padding-top:10px"&gt;

&lt;h4 style="color:black;font-weight:bold"&gt;Koneksi ke BPJS sedang mengalami gangguan&lt;/h4&gt;

&lt;div&gt;Silakan untuk merubah status bridging terlebih dahulu hingga koneksi ke BPJS normal kembali (\`+codeError+\`).&lt;/div&gt;

&lt;/div&gt;

&lt;div&gt;

\`,

customClass: 'swal-custom',

reverseButtons: true,

showCancelButton: true,

allowOutsideClick: false,

allowEscapeKey: false,

confirmButtonColor: '#D3555C',

confirmButtonText: 'Non-aktifkan Bridging',

cancelButtonText: 'Tutup',

}).then((result) => {

if(result.value){

buttonSwitchBridging();

}

swal.close();

return;

});

}

function sendToMiddleware(obj) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/sendtomiddleware/63860>",

method: 'POST',

dataType: "json",

data: {

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"

},

success: function(data) {

alert(data.message, data.status);

if (\$data.status == 'success') {

\$(obj).removeClass('loading');

\$('#button-middleware').remove()

\$('#send-to-middleware').append('&lt;label class="text-success pull-right"&gt;&lt;i class="fa fa-check-square-o" aria-hidden="true" style="margin-right: 5px;"&gt;&lt;/i&gt;Data sudah dikirim ke Middleware&lt;/label&gt;');

}

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$(obj).removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

}

});

}

function antrianBaru()

{

\$('.button_epus').prop( "disabled", true );

\$('.button_epus').addClass('loading');

setTimeout(function(){\$('.button_epus').prop( "disabled", false); \$('.button_epus').removeClass('loading');},2000);

let session = '00001033231';

let socket_port = '3231';

let url_socket = '' ? '' : '<https://panggilan.infokes.id>';

let socket = io.connect(url_socket + ':' + socket_port);

socket.on('connection');

socket.emit('room', session);

console.log('connected to room : '+session);

var antrian = '-0036';

const isAntrolEnable = '1';

const prefix=antrian.split('-')\[0\] ?? '';

const noAntrian=antrian.split('-')\[1\] ?? '';

const letterArray = prefix.split('') ?? \[\];

let poli ='0001';

let ruangan = '13 Klaster Dewasa' ? '13 Klaster Dewasa' : 'UMUM';

if(isAntrolEnable==1){

let data = \[ { 'antrian' : Number(noAntrian), 'ruangan' : ruangan , 'poli' : poli , 'prefix' : letterArray } \];

socket.emit('SendAntrianPoliServer', data);

}else{

let data = \[ { 'antrian' : Number(antrian), 'ruangan' : ruangan , 'poli' : poli } \];

socket.emit('SendAntrianPoliServer', data);

}

alert('Panggilan berhasil dikirim ke server, menunggu response...','success');

return false;

}

\$('select\[name="Pelayanan\[statuspulang_id\]"\]').change(function() {

\$('#button_mulai').show()

\$('#button_selesai_batal_berobat').hide()

if (\$('option:selected', this).val() == '07') {

\$('#button_mulai').css('display', 'none')

\$('#button_selesai_batal_berobat').css('display', 'block')

}

})

let regisDate = "2026-02-03 08:51:24"

\$('#finishDate').datetimepicker({

locale: 'id',

format: 'DD-MM-YYYY HH:mm:ss',

minDate: regisDate,

maxDate: new Date(),

defaultDate: null,

useCurrent: false

});

\$('#pendaftaranAntrolKirimPcare').click(function(){

\$('#pendaftaranAntrolKirimPcare').addClass('loading')

\$('#skip_validasi_antrol').val('1')

\$('#button_mulai').click()

})

\$(document).ready(function() {

var tgl_mulai = \$('#tgl_mulai').val();

var tgl_selesai = '03-02-2026 21:22:36';

\$('#tgl_selesai').val(tgl_selesai);

if((tgl_mulai!="") && (tgl_selesai!="")){

var tglmula1 = tgl_mulai.split('-');

var tglmula2 = tglmula1\[2\].split(' ');

var tanggal_awal = tglmula2\[0\]+"-"+tglmula1\[1\]+"-"+tglmula1\[0\]+" "+tglmula2\[1\];

//merubah format tanggal akhir waktu yyyy-mm-dd waktu

var tglselesai1 = tgl_selesai.split('-');

var tglselesai2 = tglselesai1\[2\].split(' ');

var tanggal_akhir = tglselesai2\[0\]+"-"+tglselesai1\[1\]+"-"+tglselesai1\[0\]+" "+tglselesai2\[1\];

var date1 = new Date(tanggal_awal.replace(' ', 'T')).getTime();

var date2 = new Date(tanggal_akhir.replace(' ', 'T')).getTime();

setDate(date1,date2);

}

});

function setTanggalSelesai(){

//merubah format tanggal awal waktu yyyy-mm-dd waktu

var tgl_mulai = \$('#tgl_mulai').val();

//merubah format tanggal akhir waktu yyyy-mm-dd waktu

var tgl_selesai = \$('#tgl_selesai').val();

if (tgl_selesai == "") {

tgl_selesai = '03-02-2026 21:22:36';

\$("#tgl_selesai").val(tgl_selesai);

}

var tglmula1 = tgl_mulai.split('-');

var tglmula2 = tglmula1\[2\].split(' ');

var tanggal_awal = tglmula2\[0\]+"-"+tglmula1\[1\]+"-"+tglmula1\[0\]+" "+tglmula2\[1\];

//merubah format tanggal akhir waktu yyyy-mm-dd waktu

var tglselesai1 = tgl_selesai.split('-');

var tglselesai2 = tglselesai1\[2\].split(' ');

var tanggal_akhir = tglselesai2\[0\]+"-"+tglselesai1\[1\]+"-"+tglselesai1\[0\]+" "+tglselesai2\[1\];

var date1 = new Date(tanggal_awal.replace(' ', 'T')).getTime();

var date2 = new Date(tanggal_akhir.replace(' ', 'T')).getTime();

setDate(date1,date2);

}

function setDate(date1,date2){

var delta = Math.abs(date2 - date1) / 1000;

// kalkulasi jumlah hari

var days = Math.floor(delta / 86400);

delta -= days \* 86400;

// kalkulasi jumlah jam

var hours = Math.floor(delta / 3600) % 24;

delta -= hours \* 3600;

// kalkulasi jumlah menit

var minutes = Math.floor(delta / 60) % 60;

delta -= minutes \* 60;

// kalkulasi jumlah detik

var seconds = delta % 60;

\$('#hari').val(days);

\$('#jam').val(hours);

\$('#menit').val(minutes);

}

&lt;/script&gt;

&lt;style&gt;

.badge-ksh {

padding: 8px;

width: 100%;

background: #FFF4DD;

border: 1px solid #FFC043;

border-radius: 8px;

font-size: 14px;

display: flex;

}

.flex-items {

margin: 0px 5px;

}

.end-flex {

margin-left: auto;

}

.end-flex>a {

color: #FFC043;

}

.btn-muted {

background: #B6B6B6;

border: 1px solid #B6B6B6;

color: white;

font-weight: bold;

}

# blurmenu {

height: 100vh;

width: 100%;

z-index: 999;

background: gray;

opacity: 0.8;

position: fixed;

top: 0;

left: 0;

}

.badge-pemberitahuan {

color: white;

background: black;

border: 1px solid black;

border-radius: 8px;

font-size: 14px;

display: flex;

padding: 10px;

justify-content: center;

align-items: center;

}

@media only screen and (min-width: 768px) {

.badge-pemberitahuan:before {

content: "";

position: absolute;

width: 0;

height: 0;

border-top: 15px solid transparent;

border-bottom: 15px solid transparent;

border-right: 15px solid black;

top: 10px;

left: -15px;

}

.badge-pemberitahuan {

position: absolute;

top: 50%;

right: -380px;

}

}

&lt;/style&gt;

&lt;div class="box box-bordered" id="box-KlasterSiklusHidup"&gt;

&lt;div class="box-header with-border accordion-toggle" data-toggle="collapse" data-target="#collapseKlasterSiklusHidup" aria-expanded="true" aria-controls="collapseIdentitas"&gt;

&lt;label&gt;&lt;b&gt;Klaster & Siklus Hidup&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered collapse in" id="collapseKlasterSiklusHidup" aria-labelledby="headingTwo" data-parent="#KlasterSiklusHidup"&gt;

&lt;form class="form-horizontal"&gt;

&lt;div class="notice ntc-warning mb-16"&gt;

&lt;div class="ntc-desc"&gt;

&lt;svg xmlns="<http://www.w3.org/2000/svg>" width="20" height="20" viewBox="0 0 20 20" fill="none"&gt;

&lt;path d="M12.5001 1.6665H7.50008C7.03984 1.6665 6.66675 2.0396 6.66675 2.49984V4.1665C6.66675 4.62674 7.03984 4.99984 7.50008 4.99984H12.5001C12.9603 4.99984 13.3334 4.62674 13.3334 4.1665V2.49984C13.3334 2.0396 12.9603 1.6665 12.5001 1.6665Z" stroke="#FF9600" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"&gt;&lt;/path&gt;

&lt;path d="M13.3334 3.33301H15C15.4421 3.33301 15.866 3.5086 16.1786 3.82116C16.4911 4.13372 16.6667 4.55765 16.6667 4.99967V16.6663C16.6667 17.1084 16.4911 17.5323 16.1786 17.8449C15.866 18.1574 15.4421 18.333 15 18.333H5.00004C4.55801 18.333 4.13409 18.1574 3.82153 17.8449C3.50897 17.5323 3.33337 17.1084 3.33337 16.6663V4.99967C3.33337 4.55765 3.50897 4.13372 3.82153 3.82116C4.13409 3.5086 4.55801 3.33301 5.00004 3.33301H6.66671M10 9.16634H13.3334M10 13.333H13.3334M6.66671 9.16634H6.67504M6.66671 13.333H6.67504" stroke="#FF9600" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"&gt;&lt;/path&gt;

&lt;/svg&gt;

&lt;div id="user_skriningklastersiklushidup"&gt;&lt;b&gt;0&lt;/b&gt; dari &lt;b&gt;23 skrining&lt;/b&gt; sudah dilakukan&lt;/div&gt;

&lt;/div&gt;

&lt;div id="lihat_skriningklastersiklushidup"&gt;&lt;a href="<https://kotakediri.epuskesmas.id/klaster_siklushidup/63860>" target="\_blank"&gt;&lt;b&gt;Lihat&lt;/b&gt;&lt;/a&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label" style="text-align: left"&gt;Klaster&lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;select name="" class="form-control input-sm" id="chooseKlaster" onchange="checkSubDropdownSiklusHidup()"&gt;

&lt;option value="Klaster 2"&gt;Klaster 2 (Ibu

dan Anak)&lt;/option&gt;

&lt;option value="Klaster 3" selected=""&gt;Klaster 3 (Usia

Dewasa dan Lansia)&lt;/option&gt;

&lt;option value="Klaster 4"&gt;Klaster 4

(Penanggulangan Penyakit Menular)&lt;/option&gt;

&lt;/select&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label" style="text-align: left" id="wordingsiklusklaster"&gt; Siklus

hidup &lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;select name="" class="form-control input-sm" id="subDropdownKlaster" onchange="checkButtonSiklusHidup()"&gt;

&lt;option value="Usia Dewasa" selected=""&gt;Usia

Dewasa&lt;/option&gt;

&lt;option value="Lanjut Usia"&gt;Lanjut

Usia&lt;/option&gt;

&lt;/select&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="pull-right"&gt;

&lt;button type="button" class="btn btn-muted btn-sm" onclick="saveKlasterSiklusHidup()" id="tombolTerapkanKlasterSiklusHidup" disabled=""&gt;Terapkan&lt;/button&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;script&gt;

var mapping_klaster = 'Klaster 3'

var siklus_hidup = 'Usia Dewasa'

\$(document).ready(function() {

if ('') {

checkDropdownKlaster()

setTimeout(function() {

\$('html, body').scrollTop(\$("#collapseKlasterSiklusHidup").offset().top - 100)

}, 500);

saveKlasterSiklusHidup()

}

getSkriningKlasterSkriningHidup();

})

function okPemberitahuanKlaster() {

\$('#blurmenu').remove()

\$('.badge-pemberitahuan').remove()

\$('#box-KlasterSiklusHidup').css('z-index', '0')

\$('#box-KlasterSiklusHidup').css('outline', 'none')

}

function checkDropdownKlaster() {

if (('' == '1' && 'Laki-laki' == 'Perempuan') || ('23' <=

17)) {

\$('#chooseKlaster').val('Klaster 2');

} else {

\$('#chooseKlaster').val('Klaster 3');

}

checkSubDropdownSiklusHidup()

checkSubValueSiklusHidup()

}

function checkSubDropdownSiklusHidup() {

var value = \$('#chooseKlaster').val();

var dropdowns = '';

if (value == 'Klaster 2') {

dropdowns = \`&lt;option value="Ibu Hamil, Bersalin & Nifas"&gt;Ibu Hamil, Bersalin & Nifas&lt;/option&gt;

&lt;option value="Balita dan Anak Pra-sekolah"&gt;Balita dan Anak Pra-sekolah&lt;/option&gt;

&lt;option value="Anak Usia Sekolah dan Remaja"&gt;Anak Usia Sekolah dan Remaja&lt;/option&gt;\`

\$('#wordingsiklusklaster').text('Siklus hidup');

} else if (value == 'Klaster 3') {

dropdowns = \`&lt;option value="Usia Dewasa"&gt;Usia Dewasa&lt;/option&gt;

&lt;option value="Lanjut Usia"&gt;Lanjut Usia&lt;/option&gt;\`

\$('#wordingsiklusklaster').text('Siklus hidup');

} else {

dropdowns = \`&lt;option value="Kesehatan Lingkungan"&gt;Kesehatan Lingkungan&lt;/option&gt;

&lt;option value="Surveilans"&gt;Surveilans&lt;/option&gt;\`

\$('#wordingsiklusklaster').text('Kategori');

}

\$('#subDropdownKlaster').html(dropdowns)

checkButtonSiklusHidup()

}

function checkSubValueSiklusHidup() {

if (('' == '1' && 'Laki-laki' == 'Perempuan')) {

\$('#subDropdownKlaster').val('Ibu Hamil, Bersalin & Nifas');

} else if ('23' <= 6) {

\$('#subDropdownKlaster').val('Balita dan Anak Pra-sekolah');

} else if ('23' <= 17) {

\$('#subDropdownKlaster').val('Anak Usia Sekolah dan Remaja');

} else if ('23' <= 59) {

\$('#subDropdownKlaster').val('Usia Dewasa');

} else {

\$('#subDropdownKlaster').val('Lanjut Usia');

}

}

function saveKlasterSiklusHidup() {

\$('#tombolTerapkanKlasterSiklusHidup').addClass('loading');

\$.ajax({

method: "POST",

url: "<https://kotakediri.epuskesmas.id/pelayanan/klastersiklushidup>",

dataType: "json",

data: {

\_token: 'r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP',

id: \`63860\`,

ilp: {

'mapping_klaster': \$('#chooseKlaster').val(),

'siklus_hidup': \$('#subDropdownKlaster').val()

}

},

beforeSend: function() {},

success: function(data) {

alert(data.message, data.status);

if (data.status == 'success') {

mapping_klaster = \$('#chooseKlaster').val()

siklus_hidup = \$('#subDropdownKlaster').val()

checkButtonSiklusHidup()

getSkriningKlasterSkriningHidup();

}

\$('#tombolTerapkanKlasterSiklusHidup').removeClass('loading');

},

complete: function(xhr) {

\$('#tombolTerapkanKlasterSiklusHidup').removeClass('loading');

}

});

}

function checkButtonSiklusHidup() {

if (mapping_klaster == \$('#chooseKlaster').val() && siklus_hidup == \$('#subDropdownKlaster').val()) {

\$('#tombolTerapkanKlasterSiklusHidup').prop('disabled', true);

\$('#tombolTerapkanKlasterSiklusHidup').removeClass('btn-success');

} else {

\$('#tombolTerapkanKlasterSiklusHidup').prop('disabled', false);

\$('#tombolTerapkanKlasterSiklusHidup').addClass('btn-success');

}

}

function getSkriningKlasterSkriningHidup(){

let chooseKlaster = \$("#chooseKlaster").val()

let subDropdownKlaster = \$("#subDropdownKlaster").val()

\$.post(\`/klaster_siklushidup/63860\`,{'chooseKlaster': chooseKlaster, 'subDropdownKlaster': subDropdownKlaster,'\_token': 'r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP'},function (result) {

if(result?.total || result?.done){

\$("#lihat_skriningklastersiklushidup").parent().removeClass('ntc-column');

\$("#user_skriningklastersiklushidup").html(\`&lt;b&gt;\${result?.done || 0}&lt;/b&gt; dari &lt;b&gt;\${result?.total || 0} skrining&lt;/b&gt; sudah dilakukan\`);

\$("#lihat_skriningklastersiklushidup").html(\`&lt;a href="<https://kotakediri.epuskesmas.id/klaster_siklushidup/63860>" target="\_blank"&gt;&lt;b&gt;Lihat&lt;/b&gt;&lt;/a&gt;\`);

}else{

\$("#lihat_skriningklastersiklushidup").parent().addClass('ntc-column');

\$("#user_skriningklastersiklushidup").html(\`Skrining Belum Tersedia. Silakan lakukan konfigurasi terlebih dahulu.\`);

\$("#lihat_skriningklastersiklushidup").html(\`&lt;a href="<https://kotakediri.epuskesmas.id/configilp>" target="\_blank"&gt;&lt;b&gt;Lakukan Konfigurasi&lt;/b&gt;&lt;/a&gt;\`);

}

},'json')

}

&lt;/script&gt;

&lt;style&gt;

.keteranganTombolCppt{

color: var(--text-secondary-text, #6C757D);

font-size: 12px;

font-family: Helvetica Neue;

font-style: italic;

font-weight: 400;

line-height: 20px;

}

&lt;/style&gt;

&lt;div class="box box-bordered" id="content_pelayanan_pkg"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;CKG (Cek Kesehatan Gratis)&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="row"&gt;

&lt;div class="col-sm-12" id="content_data_pkg"&gt;&lt;a type="button" class="btn btn-sm btn-success" style="width:100%;box-shadow:none !important" onclick="addPelayananPkg()"&gt;

&lt;div class="row"&gt;

&lt;div class="col-sm-12 text-left"&gt;

&lt;h5 style="color:white;text-align:center"&gt;&lt;b&gt;Tandai sudah CKG (2026)&lt;/b&gt;&lt;/h5&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/a&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;script&gt;

getPelayananPkg();

function getPelayananPkg(){

let id, type, tanggal, data;

var limit = 5;

id = "0000000000140458"

type = "pasien"

tanggal = "2026-02-03";

data = {

\_token: 'r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP',

'id' : id,

'type' : type,

'tanggal' : tanggal,

};

\$.post(\`/pelayanan/getdatapkg\`,data,function(res){

var html = '';

let display = res?.display || false;

let data = res?.message || \[\];

let year = "2026";

if(display){

\$("#content_pelayanan_pkg").removeClass('hide');

}else{

\$("#content_pelayanan_pkg").addClass('hide');

}

if(data.length > 0) {

\$("#content_pelayanan_pkg").removeClass('hide');

html += \`&lt;table class="table table-bordered table-hover table-condensed table-sortable" style="border-radius:16px;"&gt;\`;

html += \`&lt;thead&gt;\`;

html += \`&lt;tr class="btn-primary"&gt;

&lt;th&gt;No&lt;/th&gt;

&lt;th width="70%"&gt;Tanggal CKG&lt;/th&gt;

&lt;th&gt;Aksi&lt;/th&gt;

&lt;/tr&gt;\`

html += \`&lt;/thead&gt;\`;

html += \`&lt;tbody&gt;\`;

data.forEach(function(val, i){

if(val.year == year){

display = false;

}

html += \`&lt;tr id="pkg_table_\${i+1}" class="\${(i+1) &gt; limit ? 'hide' : '' }">

&lt;td style="padding:12px"&gt;\${i+1}&lt;/td&gt;

&lt;td style="padding:12px"&gt;\${convertDate(val.tanggal,'d m Y')}&lt;/td&gt;

&lt;td style="padding:12px" class="center"&gt;&lt;a style="color:#fb483a;cursor:pointer" onclick="deletePelayananPkg(\${val.id},'\${val.tanggal}')"&gt;&lt;i class="fa fa-trash"&gt;&lt;/i&gt; Hapus&lt;/a&gt;&lt;/td&gt;

&lt;/tr&gt;\`

})

html += \`&lt;/tbody&gt;\`;

html += \`&lt;/table&gt;\`;

html += \`&lt;input type='hidden' id='page_active_pkg' value='1'&gt;\`;

html += paginationPkg(data);

}

if(display){

html = \`&lt;a type="button" class="btn btn-sm btn-success" style="width:100%;box-shadow:none !important" onclick="addPelayananPkg()"&gt;

&lt;div class="row"&gt;

&lt;div class="col-sm-12 text-left"&gt;

&lt;h5 style="color:white;text-align:center"&gt;&lt;b&gt;Tandai sudah CKG (\${year})&lt;/b&gt;&lt;/h5&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/a&gt;\`

}

\$("#content_data_pkg").html(html)

})

}

function addPelayananPkg(){

let id, type, tanggal, data;

id = "0000000000140458"

type = "pasien"

tanggal = "2026-02-03";

data = {

\_token: 'r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP',

'id' : id,

'type' : type,

'tanggal' : tanggal,

};

\$.post(\`/pelayanan/add_pkg\`,data,function(res){

alert(res?.message, res?.status);

getPelayananPkg();

})

}

function deletePelayananPkg(id,tanggal){

Swal.fire({

html: \`&lt;div style="padding-left:20px;padding-right:20px;margin-top:30px;"&gt;

\${svgDanger}

&lt;div style="padding-top:10px"&gt;

&lt;h4 style="color:black;font-weight:bold"&gt;Hapus Pendaftaran CKG "\${convertDate(tanggal,'d m Y')}" ?&lt;/h4&gt;

&lt;/div&gt;

&lt;div&gt;

\`,

customClass: 'swal-custom',

reverseButtons: true,

showCancelButton: true,

allowOutsideClick: false,

allowEscapeKey: false,

confirmButtonColor: '#D3555C',

confirmButtonText: 'Hapus',

cancelButtonText: 'Batal',

}).then((result) => {

let data = {

\_token: 'r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP',

'id' : id,

};

if(result.value){

\$.post("/pelayanan/delete_pkg",data,function(res){

alert(res?.message, res?.status);

getPelayananPkg();

})

}

swal.close();

return;

})

}

function paginationPkg(data){

var html = '';

html += \` &lt;nav class="wrapper"&gt;

&lt;ul class="pagination" style="margin:0px"&gt;

&lt;li onclick='previous_page_pkg()'&gt;&lt;a href="javascript:void(0)" aria-label=Previous&gt;<span

aria-hidden=true>«&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;\`

var limit = 5;

var total = data.length;

var total_page = Math.ceil(total / limit);

for (var i = 1; i <= total_page; i++) {

html += \`&lt;li class='current-page \${i==1 ? 'active' : ''}' id="current_page_\${i}" onclick="changePagePkg(\${i})"&gt;&lt;a href='javascript:void(0)'&gt;\${i}&lt;/a&gt;&lt;/li&gt;\`

}

html += \`&lt;li onclick='next_page_pkg()'&gt;&lt;a href='javascript:void(0)' aria-label=Next&gt;&lt;span aria-hidden=true&gt;»&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;

&lt;/ul&gt;&lt;/nav&gt;\`

return html;

}

function changePagePkg(page){

var limit = 5;

\$("#page_active_pkg").val(page);

var start = page == 1 ? 1 : (((page - 1) \* limit) + 1)

var end = start + (limit-1)

\$('\[id^="current_page_"\]').removeClass('active');

\$(\`#current_page_\${page}\`).addClass('active');

\$('\[id^="pkg_table_"\]').addClass('hide');

for (var i = start; i <= end; i++) {

\$(\`#pkg_table_\${i}\`).removeClass('hide')

}

}

function previous_page_pkg(){

var page = parseInt(\$("#page_active_pkg").val());

if(page > 1){

changePagePkg(page - 1);

}

}

function next_page_pkg(){

var page = parseInt(\$("#page_active_pkg").val());

var total_page = parseInt(\$('\[id^="current_page_"\]').length);

if(page < total_page){

changePagePkg(page + 1);

}

}

&lt;/script&gt;

&lt;style&gt;

.keteranganTombolCppt{

color: var(--text-secondary-text, #6C757D);

font-size: 12px;

font-family: Helvetica Neue;

font-style: italic;

font-weight: 400;

line-height: 20px;

}

&lt;/style&gt;

&lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;Catatan Perkembangan Pasien Terintegrasi (CPPT)&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="row"&gt;

&lt;div class="col-sm-12"&gt;

&lt;a id="button_redirect_cppt" type="button" class="btn btn-sm btn-primary" style="width:100%" href="<https://kotakediri.epuskesmas.id/cppt/63860>"&gt;

&lt;div class="row"&gt;

&lt;div class="col-sm-9 text-left"&gt;

&lt;h5 style="color:white"&gt;&lt;b&gt;Lihat CPPT&lt;/b&gt;&lt;/h5&gt;

&lt;/div&gt;

&lt;div class="col-sm-3 text-right"&gt;

&lt;i class="fa fa-arrow-right" style="top:6px!important;color:white"&gt;&lt;/i&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/a&gt;

&lt;/div&gt;

&lt;div class="col-sm-12"&gt;

&lt;i class="keteranganTombolCppt"&gt;Klik "Simpan" terlebih dahulu agar data terupdate&lt;/i&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt; &lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;Cetak Surat&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;form class="form-horizontal" id="formCetak"&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label"&gt;Cetak &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;select class="form-control input-sm" required="" name="CetakSuratSurat" onchange="checkValueCetakSurat()"&gt;

&lt;option value=""&gt;- PILIH -&lt;/option&gt;

&lt;/select&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-12"&gt;

&lt;input type="checkbox" id="is_signature" value="true" name="CetakSuratElektronik" v-model="isSignature"&gt;&lt;label for="is_signature" style="color: #808080;"&gt; Menggunakan tanda tangan elektronik&lt;/label&gt;

&lt;/label&gt;

&lt;/div&gt;

&lt;div class="pull-right"&gt;

&lt;button id="button_cetak_signature" type="button" class="btn btn-sm btn-primary"&gt;Cetak&lt;/button&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;/div&gt;

&lt;style&gt;

# informationModalForm2 .custom-stepper li.done:before {

padding-top: 5px!important;

}

&lt;/style&gt;

&lt;div id="informationModalForm2" class="modal fade" role="dialog" aria-labelledby="modal"&gt;

&lt;div class="modal-dialog modal-xl" role="document"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-header"&gt;

&lt;button type="button" class="close" data-dismiss="modal" aria-label="Close"&gt;&lt;span aria-hidden="true"&gt;×&lt;/span&gt;&lt;/button&gt;

&lt;h5 class="modal-title"&gt;Informed Consent&lt;/h5&gt;

&lt;/div&gt;

&lt;form action="#" id="formDetailInformationTindakanPPSignature"&gt;

&lt;input type="hidden" name="\_token" value="r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"&gt;

&lt;input type="hidden" name="tindakanCheckSignature" value="true"&gt;

&lt;div class="modal-form point1"&gt;

&lt;div class="modal-body stepper-modal"&gt;

&lt;div class="sm-header"&gt;

&lt;ol class="custom-stepper"&gt;

&lt;li class="current"&gt;Tindakan&lt;/li&gt;

&lt;li&gt;Persetujuan&lt;/li&gt;

&lt;/ol&gt;

&lt;/div&gt;

&lt;div id="point1"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-form point2"&gt;

&lt;div class="modal-body stepper-modal"&gt;

&lt;div class="sm-header"&gt;

&lt;ol class="custom-stepper"&gt;

&lt;li class="done"&gt;Tindakan&lt;/li&gt;

&lt;li class="current"&gt;Persetujuan&lt;/li&gt;

&lt;/ol&gt;

&lt;/div&gt;

&lt;div class="sm-content" id="persetujuanpenolakanpenanggungjawab"&gt;

&lt;div class="group-border"&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label w-220"&gt;Yang Bertanda tangan di bawah ini&lt;/label&gt;

&lt;div class="radio-group"&gt;

&lt;label class="custom-radio"&gt;

Pasien

&lt;input type="radio" name="tindakanPayload\[0\]\[penanggung_jawab\]" onchange="changePenanggungJawab()" value="Pasien" checked=""&gt;

&lt;span class="checkmark"&gt;&lt;/span&gt;

&lt;/label&gt;

&lt;label class="custom-radio"&gt;

Pendamping

&lt;input type="radio" name="tindakanPayload\[0\]\[penanggung_jawab\]" onchange="changePenanggungJawab()" value="Pendamping"&gt;

&lt;span class="checkmark"&gt;&lt;/span&gt;

&lt;/label&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label w-220"&gt;Nama Lengkap &lt;span class="text-danger"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;input type="text" class="form-control" name="tindakanPayload\[0\]\[nama_penanggung_jawab\]" id="nama_pasien_persetujanpenolakantindakan" value="" readonly=""&gt;

&lt;/div&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label w-220"&gt;Alamat &lt;span class="text-danger"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;textarea rows="2" class="form-control" name="tindakanPayload\[0\]\[alamat\]" id="alamat_pasien_persetujanpenolakantindakan"&gt;Bandung&lt;/textarea&gt;

&lt;/div&gt;

&lt;div class="epus-ig" style="display: none;"&gt;

&lt;label class="input-label w-220"&gt;Jenis Kelamin &lt;span class="text-danger"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="radio-group"&gt;

&lt;label class="custom-radio"&gt;

Laki-laki

&lt;input type="radio" name="tindakanPayload\[0\]\[jenis_kelamin\]" value="laki-laki"&gt;

&lt;span class="checkmark"&gt;&lt;/span&gt;

&lt;/label&gt;

&lt;label class="custom-radio"&gt;

Perempuan

&lt;input type="radio" name="tindakanPayload\[0\]\[jenis_kelamin\]" value="perempuan"&gt;

&lt;span class="checkmark"&gt;&lt;/span&gt;

&lt;/label&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label w-220"&gt;Usia &lt;span class="text-danger"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;input type="number" class="form-control" name="tindakanPayload\[0\]\[usia\]" value="" id="usia_pasien_persetujanpenolakantindakan"&gt;

&lt;/div&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label w-220"&gt;Nomor Handphone &lt;span class="text-danger"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;input type="number" class="form-control" name="tindakanPayload\[0\]\[no_hp\]" value="" id="hp_pasien_persetujanpenolakantindakan"&gt;

&lt;/div&gt;

&lt;div class="epus-ig" style="display: none;"&gt;

&lt;label class="input-label w-220"&gt;Hubungan dengan Pasien&lt;span class="text-danger"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;input type="text" class="form-control" name="tindakanPayload\[0\]\[hubungan_dengan_pasien\]" placeholder="Hubungan dengan pasien" id="hubungan_persetujanpenolakantindakan"&gt;

&lt;/div&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label w-220"&gt;Nama Saksi &lt;span class="text-danger"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;input type="text" class="form-control" name="tindakanPayload\[0\]\[nama_saksi\]" placeholder="Nama saksi" value="" id="nama_saksi_persetujanpenolakantindakan"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="group-border"&gt;

&lt;div class="fw-700"&gt;Menyetujui atau menolak tindakan:&lt;/div&gt;

&lt;div id="menyetujui-menolak"&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;div class="point2"&gt;

&lt;button type="button" class="btn cta-outline" onclick="\$('.point1').show();\$('.point2').hide();"&gt;Kembali&lt;/button&gt;

&lt;button type="button" class="btn cta-primary px-24" id="submitDetailInformationTindakanPPSignature"&gt;Tanda tangani dan Cetak&lt;/button&gt;

&lt;/div&gt;

&lt;button type="button" class="btn cta-primary px-24 point1" onclick="\$('.point1').hide();\$('.point2').show();"&gt;Lanjutkan&lt;/button&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;script&gt;

var informationModalForm2Pasien = null;

var informationModalForm2PenanggungJawab = null;

var id_persetujuan_penolakan = ''

var totalDataInformasiTindakanPPSignature = 0;

function printPersetujuanV2(id = \[\]) {

\$('#formDetailInformationTindakanPPSignature').trigger('reset')

\$('.point1').show()

\$('.point2').hide()

\$('#informationModalForm2names').html('')

id_persetujuan_penolakan = getIds(id)

\$.ajax({

url: \`<https://kotakediri.epuskesmas.id/tindakan/detail-information\${id_persetujuan_penolakan}\`>,

method: 'GET',

success: (res) => {

let MenyetujuiMenolak = ''

let htmlAppend = ''

const {data} = res

data.map((item, i) => {

htmlAppend += \`

&lt;div class="sm-content" style="margin-bottom: 20px;"&gt;

&lt;div class="panel-group custom-panel" id="accordion-\${i}" role="tablist" aria-multiselectable="true" data-index="\${i}"&gt;

&lt;div class="panel panel-default"&gt;

&lt;div class="panel-heading" role="tab" id="headingForm-\${i}"&gt;

&lt;a role="button" class="panel-accordion_\_header" data-toggle="collapse" data-parent="#accordion-\${i}" href="#tindakan-\${i}" aria-expanded="true" aria-controls="tindakan-\${i}"&gt;\${item.tindakan.value}&lt;/a&gt;

&lt;ul class="box-controls pull-right"&gt;

&lt;li&gt;

&lt;a class="box-btn-slide-custome collapsed rotate-180" href="#tindakan-\${i}" role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="tindakan-\${i}"&gt;&lt;span class="fa fa-chevron-down"&gt;&lt;/span&gt;&lt;/a&gt;

&lt;/li&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div id="tindakan-\${i}" class="panel-collapse panel-accordion_\_content collapse in" role="tabpanel" aria-labelledby="headingForm-\${i}"&gt;

&lt;input type='hidden' name="tindakanPayload\[\${i}\]\[tindakan_id\]" value="\${item.id}"&gt;

&lt;input type='hidden' name="tindakanPayload\[\${i}\]\[nama_tindakan\]" value="\${item.tindakan.value}"&gt;

&lt;div class="row"&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="diagnosa"&gt;Diagnosa (WD & DD)&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[diagnosa\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.diagnosa !== 'undefined' && item.informasies.diagnosa !== null ? item.informasies.diagnosa : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="dasar_diagnosa"&gt;Dasar Diagnosa&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[dasar_diagnosa\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.dasar_diagnosa !== 'undefined' && item.informasies.dasar_diagnosa !== null ? item.informasies.dasar_diagnosa : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="tindakan_kedokteran"&gt;Tindakan Kedokteran&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[tindakan_kedokteran\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.tindakan_kedokteran !== 'undefined' && item.informasies.tindakan_kedokteran !== null ? item.informasies.tindakan_kedokteran : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="indikasi_tindakan"&gt;Indikasi Tindakan&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[indikasi_tindakan\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.indikasi_tindakan !== 'undefined' && item.informasies.indikasi_tindakan !== null ? item.informasies.indikasi_tindakan : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="tata_cara"&gt;Tata Cara&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[tata_cara\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.tata_cara !== 'undefined' && item.informasies.tata_cara !== null ? item.informasies.tata_cara : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="tujuan"&gt;Tujuan&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[tujuan\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.tujuan !== 'undefined' && item.informasies.tujuan !== null ? item.informasies.tujuan : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="resiko"&gt;Risiko&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[resiko\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.resiko !== 'undefined' && item.informasies.resiko !== null ? item.informasies.resiko : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="komplikasi"&gt;Komplikasi&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[komplikasi\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.komplikasi !== 'undefined' && item.informasies.komplikasi !== null ? item.informasies.komplikasi : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="prognosa"&gt;Prognosa&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[prognosa\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.prognosa !== 'undefined' && item.informasies.prognosa !== null ? item.informasies.prognosa : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="alternatif_resiko"&gt;Alternatif & Risiko&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[alternatif_resiko\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.alternatif_resiko !== 'undefined' && item.informasies.alternatif_resiko !== null ? item.informasies.alternatif_resiko : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="lain_lain"&gt;Lain-lain&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[lain_lain\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.lain_lain !== 'undefined' && item.informasies.lain_lain !== null ? item.informasies.lain_lain : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

\${i > 0 ? \`

&lt;div class="col-sm-12" style="display: none;"&gt;

&lt;div class="form-group"&gt;

&lt;input type="checkbox" name="tindakanPayload\[\${i}\]\[isSameWithFirstRecord\]" class="sameCheckbox" data-index="\${i}" checked&gt;

&lt;/div&gt;

&lt;/div&gt;

\`: ''}

&lt;/div&gt;\`

\$('#nama_pasien_persetujanpenolakantindakan').val(item.pelayanan.pendaftaran.pasien.nama)

\$('#alamat_pasien_persetujanpenolakantindakan').val(item.pelayanan.pendaftaran.pasien.alamat)

\$('#hp_pasien_persetujanpenolakantindakan').val(item.pelayanan.pendaftaran.pasien.no_hp)

\$('#usia_pasien_persetujanpenolakantindakan').val(item.pelayanan.pendaftaran.umur_tahun)

\$('#hubungan_persetujanpenolakantindakan').val(item.penanggung_jawab?.hubungan_dengan_pasien)

\$('#nama_saksi_persetujanpenolakantindakan').val(item.penanggung_jawab?.nama_saksi)

\$('input\[name="tindakanPayload\[0\]\[jenis_kelamin\]"\]\[value="' + item.pelayanan.pendaftaran.pasien.jenis_kelamin.toLowerCase() + '"\]').prop('checked', true)

\$('input\[name="tindakanPayload\[0\]\[penanggung_jawab\]"\]\[value="' + item.penanggung_jawab?.penanggung_jawab + '"\]').prop('checked', true)

informationModalForm2Pasien = item.pelayanan.pendaftaran

informationModalForm2PenanggungJawab = item.penanggung_jawab

if(i > 0) {

MenyetujuiMenolak += \`&lt;div class="line-light vp-8"&gt;&lt;/div&gt;\`

}

MenyetujuiMenolak += \`&lt;div class="epus-ig"&gt;

&lt;label class="input-label w-220"&gt;Tindakan&lt;/label&gt;

&lt;input type="text" class="form-control" value="\${item.tindakan.value}" disabled&gt;

&lt;/div&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label w-220"&gt;Persetujuan Tindakan&lt;/label&gt;

&lt;div class="radio-group"&gt;

&lt;label class="custom-radio"&gt;

Tidak Perlu Persetujuan

&lt;input type="radio" name="aggrement\[\${i}\]" value="tidak"&gt;

&lt;span class="checkmark"&gt;&lt;/span&gt;

&lt;/label&gt;

&lt;label class="custom-radio"&gt;

Setujui

&lt;input type="radio" name="aggrement\[\${i}\]" value="persetujuan" checked="checked"&gt;

&lt;span class="checkmark"&gt;&lt;/span&gt;

&lt;/label&gt;

&lt;label class="custom-radio"&gt;

Tolak

&lt;input type="radio" name="aggrement\[\${i}\]" value="penolakan"&gt;

&lt;span class="checkmark"&gt;&lt;/span&gt;

&lt;/label&gt;

&lt;/div&gt;

&lt;/div&gt;\`

totalDataInformasiTindakanPPSignature = i

})

\$('#informationModalForm2').find('#point1').html(htmlAppend)

\$('#informationModalForm2').find('#menyetujui-menolak').html(MenyetujuiMenolak)

\$("#informationModalForm2").modal({

backdrop: 'static',

keyboard: false

})

changePenanggungJawab()

}

})

\$("#submitDetailInformationTindakanPPSignature").unbind()

\$("#submitDetailInformationTindakanPPSignature").bind('click', () => {

if(\$('input\[name="tindakanPayload\[0\]\[nama_saksi\]"\]').val() == '') {

alert("Silakan lengkapi data saksi terlebih dahulu!", "warning");

return

}

let countTidakPerluPersetujuan = 0

for (x = 0; x <= totalDataInformasiTindakanPPSignature; x++) {

if(\$('input\[name="aggrement\[' + x + '\]"\]:checked').val() == 'tidak') {

countTidakPerluPersetujuan++;

}

}

if (countTidakPerluPersetujuan == (totalDataInformasiTindakanPPSignature + 1)) {

alert("Silakan pilih minimal 1 data setujui/tolak untuk di print!", "warning");

return

} else {

\$.ajax({

url: '<https://kotakediri.epuskesmas.id/tindakan/detail-information>',

method: 'POST',

data: \$("#formDetailInformationTindakanPPSignature").serialize(),

success: (res) => {

if (res.status == 'danger') {

alert(res.message, res.status)

} else {

printPersetujuanPenolakan()

}

}

})

}

})

changePenanggungJawab()

}

function getIds(parameter = \[\])

{

let queryUrl = ''

parameter.forEach(function(index, item){

queryUrl += \`\${(item === 0) ? '?' : '&'}id\[\]=\${index}\`

});

return queryUrl;

}

function changePenanggungJawab()

{

var Penanggung = \$('input\[name="tindakanPayload\[0\]\[penanggung_jawab\]"\]:checked').val();

if (Penanggung === 'Pendamping') {

\$('input\[name="tindakanPayload\[0\]\[nama_penanggung_jawab\]"\]').prop('readonly', false);

\$('input\[name="tindakanPayload\[0\]\[nama_penanggung_jawab\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pendamping' ? informationModalForm2PenanggungJawab.nama : '');

\$('textarea\[name="tindakanPayload\[0\]\[alamat\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pendamping' ? informationModalForm2PenanggungJawab.alamat : '');

\$('input\[name="tindakanPayload\[0\]\[jenis_kelamin\]"\]').parent().parent().parent().show()

if (informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pendamping') {

\$('input\[name="tindakanPayload\[0\]\[jenis_kelamin\]"\]\[value="' + informationModalForm2PenanggungJawab?.jenis_kelamin.toLowerCase() + '"\]').prop('checked', true)

}

\$('input\[name="tindakanPayload\[0\]\[usia\]"\]').parent().show()

\$('input\[name="tindakanPayload\[0\]\[usia\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pendamping' ? informationModalForm2PenanggungJawab.usia : '');

\$('input\[name="tindakanPayload\[0\]\[no_hp\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pendamping' ? informationModalForm2PenanggungJawab.no_hp : '');

\$('input\[name="tindakanPayload\[0\]\[hubungan_dengan_pasien\]"\]').parent().show()

\$('input\[name="tindakanPayload\[0\]\[hubungan_dengan_pasien\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pendamping' ? informationModalForm2PenanggungJawab.hubungan_dengan_pasien : '');

\$('input\[name="tindakanPayload\[0\]\[nama_saksi\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pendamping' ? informationModalForm2PenanggungJawab.nama_saksi : '');

} else {

\$('input\[name="tindakanPayload\[0\]\[nama_penanggung_jawab\]"\]').prop('readonly', true);

\$('input\[name="tindakanPayload\[0\]\[nama_penanggung_jawab\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pasien' ? informationModalForm2PenanggungJawab.nama : informationModalForm2Pasien?.pasien?.nama);

\$('textarea\[name="tindakanPayload\[0\]\[alamat\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pasien' ? informationModalForm2PenanggungJawab.alamat : informationModalForm2Pasien?.pasien?.alamat);

\$('input\[name="tindakanPayload\[0\]\[jenis_kelamin\]"\]').parent().parent().parent().hide()

\$('input\[name="tindakanPayload\[0\]\[jenis_kelamin\]"\]\[value="laki-laki"\]').prop('checked', true)

\$('input\[name="tindakanPayload\[0\]\[usia\]"').parent().hide()

\$('input\[name="tindakanPayload\[0\]\[usia\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pasien' ? informationModalForm2PenanggungJawab.usia : informationModalForm2Pasien?.umur_tahun);

\$('input\[name="tindakanPayload\[0\]\[no_hp\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pasien' ? informationModalForm2PenanggungJawab.no_hp : informationModalForm2Pasien?.pasien?.no_hp);

\$('input\[name="tindakanPayload\[0\]\[nama_saksi\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pasien' ? informationModalForm2PenanggungJawab.nama_saksi : '')

\$('input\[name="tindakanPayload\[0\]\[hubungan_dengan_pasien\]"\]').parent().hide()

\$('input\[name="tindakanPayload\[0\]\[hubungan_dengan_pasien\]"\]').val('');

}

}

function printPersetujuanPenolakan()

{

window.open(\`<https://kotakediri.epuskesmas.id/tindakan/show-persetujuan-penolakan\${id_persetujuan_penolakan}&\${\$('#menyetujui-menolak> :input').serialize()}&\${\$('#persetujuanpenolakanpenanggungjawab :input').serialize()}\`, '\_blank');

}

&lt;/script&gt;&lt;/div&gt;

&lt;script type="text/javascript"&gt;

\$('#button_cetak_signature').on('click', function(ev) {

ev.preventDefault()

var url = \$('select\[name=CetakSuratSurat\]').val()

var statusElektronik = \$('#is_signature').prop("checked") ? 1 : 0

if (statusElektronik == 1) {

url += (url.includes('?') ? '' : '?' ) + 'templateprint=true&pelayanan=' + btoa('63860')

}

if (\$('select\[name=CetakSuratSurat\] option:selected').html() == 'Persetujuan/Penolakan Tindakan' && statusElektronik == 1 && '1') {

var url_string = \$('select\[name=CetakSuratSurat\] option:selected').val()

var url_parse = new URL(url_string)

var ids = url_parse.searchParams.getAll("checked\[\]")

printPersetujuanV2(ids)

} else if (url != '') {

window.open(url, '\_blank').focus()

} else {

alert('Silahkan untuk memilih Cetak Surat terlebih dahulu', 'danger')

}

})

function checkValueCetakSurat() {

\$('#is_signature').parent().parent().show()

console.log(\$('select\[name="CetakSuratSurat"\] option:selected').text());

if (\$('select\[name="CetakSuratSurat"\] option:selected').text() == 'Resume Medis Rawat Inap'){

\$('#is_signature').parent().parent().hide()

\$('#is_signature').prop('checked', false)

}

}

&lt;/script&gt;

&lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;strong&gt;Data Pasien&lt;/strong&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="form-group"&gt;

&lt;div class="table-responsive"&gt;

&lt;table id="table_pasien" class="table table-hover table-condensed table-sortable"&gt;

&lt;tbody&gt;&lt;tr&gt;

&lt;td&gt;ID Pelayanan&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;&lt;em class=""&gt;&lt;/em&gt; 63860&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;ID Encounter Satu Sehat&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Tanggal&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;03-02-2026 08:51:24&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Poli/Ruangan&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;DEWASA&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;No. eRM&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;00140458&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;No. RM Lama&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt; &lt;input type="hidden" value="" id="no_rm_lama"&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;No. Dokumen RM&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;NIK&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;3571022708020002&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Nama KK&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;SULINDRA WIJAYA&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Nama&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;IVANDER NAGATA&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Jenis Kelamin&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;Laki-laki&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Tempat & Tgl Lahir&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;KEDIRI, 27-08-2002&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Umur&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;23 Thn 5 Bln 7 Hr&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Alamat&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt; JL IMAM BONJOL NO 364

, RT. 01

, RW. 03

, KEL. NGADIREJO

, KEC. KOTA KEDIRI

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;No. HP&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;082221676079&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Asuransi&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;BPJS Kesehatan / 0002060612818&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Jenis Kepesertaan BPJS&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;PBPU DAN BP PEMERINTAH DAERAH&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Nama Faskes&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;BALOWERTI&lt;/td&gt;

&lt;/tr&gt;

&lt;/tbody&gt;&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;div class="table-responsive"&gt;

&lt;label align="center" colspan="3" style="text-align: left;"&gt;&lt;b&gt; Penyakit Khusus&lt;/b&gt;&lt;/label&gt;

&lt;table id="table_warna_penyakit" class="table table-bordered table-hover table-condensed table-sortable"&gt;

&lt;thead&gt;

&lt;tr class="btn-primary"&gt;

&lt;td width="10%"&gt;Warna&lt;/td&gt;

&lt;td align="center"&gt;icdx&lt;/td&gt;

&lt;td align="center"&gt;Penyakit&lt;/td&gt;

&lt;/tr&gt;

&lt;/thead&gt;

&lt;tbody id="tabel_detail_warna_penyakit"&gt;

&lt;/tbody&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;div class="table-responsive"&gt;

&lt;label align="center" colspan="3" style="text-align: left;"&gt;&lt;b&gt; Risiko Kehamilan&lt;/b&gt;&lt;/label&gt;

&lt;table id="table_risiko_kehamilan" class="table table-bordered table-hover table-condensed table-sortable"&gt;

&lt;thead&gt;

&lt;tr class="btn-primary"&gt;

&lt;td width="10%"&gt;Warna&lt;/td&gt;

&lt;td align="center"&gt;Skor Ibu (KSPR)&lt;/td&gt;

&lt;td align="center"&gt;Status&lt;/td&gt;

&lt;/tr&gt;

&lt;/thead&gt;

&lt;tbody id="tabel_detail_risiko_kehamilan"&gt;

&lt;/tbody&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;div class="table-responsive"&gt;

&lt;table id="table_riwayat" class="table table-bordered table-hover table-condensed table-sortable"&gt;

&lt;thead&gt;

&lt;tr class="btn-primary"&gt;

&lt;td align="center" colspan="3"&gt;Riwayat Pasien&lt;/td&gt;

&lt;/tr&gt;

&lt;tr class="btn-primary"&gt;

&lt;td align="center"&gt;Jenis Riwayat&lt;/td&gt;

&lt;td align="center"&gt;Nama Riwayat&lt;/td&gt;

&lt;td align="center" width="20%"&gt;Tanggal&lt;/td&gt;

&lt;/tr&gt;

&lt;/thead&gt;

&lt;tbody&gt;

&lt;/tbody&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;div class="table-responsive"&gt;

&lt;table id="table_alergi" class="table table-bordered table-hover table-condensed table-sortable"&gt;

&lt;thead&gt;

&lt;tr class="btn-primary"&gt;

&lt;td align="center" colspan="4"&gt;Alergi Pasien&lt;/td&gt;

&lt;/tr&gt;

&lt;tr class="btn-primary"&gt;

&lt;td align="center"&gt;Jenis Alergi&lt;/td&gt;

&lt;td align="center"&gt;Nama Alergi&lt;/td&gt;

&lt;td align="center" width="20%"&gt;Tanggal&lt;/td&gt;

&lt;td&gt;&lt;input type="checkbox" value="1" id="check_all"&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;/thead&gt;

&lt;tbody&gt;

&lt;tr&gt;&lt;td class="text-muted" colspan="4"&gt;Data tidak ditemukan&lt;/td&gt;&lt;/tr&gt;

&lt;/tbody&gt;

&lt;tfoot&gt;

&lt;tr&gt;

&lt;td colspan="4"&gt;

&lt;div class="pull-right"&gt;

&lt;button id="button_delete" type="button" class="btn btn-sm btn-danger" onclick="deleteCheckedAlergi(this);"&gt;Hapus&lt;/button&gt;

&lt;/div&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;/tfoot&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;script&gt;

\$("#check_all").change(function () {

\$('#table_alergi tbody tr td input\[type="checkbox"\]').prop('checked', \$(this).prop('checked'));

});

function deleteCheckedAlergi(obj)

{

var arrayData=\[\];

\$('#table_alergi input\[name\*="check"\]:checked').each(function(){

arrayData.push(\$(this).val());

});

if(arrayData.length>0){

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/anamnesa/destroycheckedalergi>",

method: 'POST',

dataType: "json",

data: {

ids : arrayData,

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"

},

success: function(data) {

alert(data.message, data.status);

\$(obj).removeClass('loading');

location.reload();

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$(obj).removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

}

});

}

}

&lt;/script&gt;

&lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;Data Skrining&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="form-group"&gt;

&lt;table id="table_skrining" class="table table-bordered table-hover table-condensed table-sortable"&gt;

&lt;thead&gt;

&lt;tr class="btn-primary"&gt;

&lt;td width="50%"&gt;Skrining&lt;/td&gt;

&lt;td width="50%"&gt;Tanggal&lt;/td&gt;

&lt;td width="50%"&gt;Keterangan&lt;/td&gt;

&lt;td&gt;Detail&lt;/td&gt;

&lt;td align="center" style="display: none;"&gt;&lt;input type="checkbox" value="1" id="check_all_skrining"&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;/thead&gt;

&lt;tbody id="tabel_detail_skrining"&gt;

&lt;tr id="tr_skrining_1" hidden="" class=""&gt;

&lt;td&gt;

&lt;input type="text" class="hidden form-control input-sm" readonly="" name="id" value=""&gt;

&lt;input type="text" class="hidden form-control input-sm" readonly="" name="tr_id_skrining" value=""&gt;

&lt;select class="form-control input-sm" name="skrining"&gt;

&lt;option value=""&gt;- PILIH -&lt;/option&gt;

&lt;option value="Gizi" data-model=""&gt;Gizi&lt;/option&gt;

&lt;option value="Lansia" data-model="SkriningLansia"&gt;Lansia&lt;/option&gt;

&lt;option value="PTM" data-model="SkriningPtm"&gt;PTM&lt;/option&gt;

&lt;option value="UKGS" data-model=""&gt;UKGS&lt;/option&gt;

&lt;option value="UKS" data-model=""&gt;UKS&lt;/option&gt;

&lt;option value="Caten" data-model=""&gt;Caten&lt;/option&gt;

&lt;option value="Ibu Hamil" data-model=""&gt;Ibu Hamil&lt;/option&gt;

&lt;option value="COVID-19" data-model="TCovid19"&gt;COVID-19&lt;/option&gt;

&lt;option value="Hepatitis C" data-model="SkriningHepatitisC"&gt;Hepatitis C&lt;/option&gt;

&lt;option value="TB" data-model="SkriningTb"&gt;TB&lt;/option&gt;

&lt;option value="Hepatitis B" data-model="SkriningHepatitisB"&gt;Hepatitis B&lt;/option&gt;

&lt;option value="SRQ" data-model="SkriningSQR"&gt;SRQ&lt;/option&gt;

&lt;option value="Kanker-Anak" data-model="SkriningKankerAnak"&gt;Kanker-Anak&lt;/option&gt;

&lt;/select&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;div class="input-group date-free"&gt;

&lt;input type="text" class="form-control input-sm" name="tanggal" placeholder="dd-mm-yyyy"&gt;

&lt;span class="input-group-addon btn-info"&gt;&lt;i class="fa fa-calendar"&gt;&lt;/i&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/td&gt;

&lt;td&gt;&lt;/td&gt;

&lt;td&gt;&lt;/td&gt;

&lt;td align="center" style="display: none;"&gt;&lt;input type="checkbox" value="" name="checkSkrining\[1\]" disabled=""&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;tr id="tr_skrining_2" data-id="" data-pel-ibu="" style="cursor: not-allowed;" class=""&gt;

&lt;td&gt;

&lt;input name="Skrining\[2\]\[id\]" type="text" class="hidden form-control input-sm" value=""&gt;

&lt;input name="Skrining\[2\]\[skrining\]" type="text" class="hidden form-control input-sm" value=""&gt;

&lt;br&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;input name="Skrining\[2\]\[tanggal\]" type="text" class="hidden form-control input-sm" value=""&gt;

&lt;/td&gt;

&lt;td&gt; &lt;/td&gt;

&lt;td align="center"&gt;

&lt;i class="" style="color: "&gt;&lt;/i&gt;

&lt;/td&gt;

&lt;td hidden=""&gt;

&lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/skrining/create/?from='pelayanan'"&gt;show> link&lt;/a&gt;

&lt;/td&gt;

&lt;td align="center" style="display: none;"&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;/tbody&gt;

&lt;tfoot hidden=""&gt;

&lt;tr&gt;

&lt;td colspan="10" style="display: none;"&gt;

&lt;div class="pull-right"&gt;

&lt;button id="button_add_skrining" type="button" formnovalidate="" class="btn btn-sm btn-primary"&gt;Tambah&lt;/button&gt;

&lt;button id="button_delete_skrining" type="button" formnovalidate="" class="btn btn-sm btn-danger" onclick="destroyDetailCheckedSkrining(this);"&gt;Hapus&lt;/button&gt;

&lt;/div&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;/tfoot&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;script type="text/javascript"&gt;

\$(function() {

if ('hidden' == 'hidden') {

\$('#table_skrining').find('td:last-child').hide();

\$('#tabel_detail_skrining').find('td:last-child').hide();

}

reArange();

resetFormSkrining();

bindElementDoubleClick(\$("tr\[detail-ptm-row\]"), (element) => {

window.location.replace("<https://kotakediri.epuskesmas.id/ptm/create/pelayananId?findSkrining=skriningId".replace('skriningId>', \$(element).data('id')).replace('pelayananId', "63860"))

})

bindElementDoubleClick(\$("tr\[detail-lansia-row\]"), (element) => {

window.location.replace("<https://kotakediri.epuskesmas.id/skrining/showlansia/skriningId/pelayananId".replace('skriningId>', \$(element).data('id')).replace('pelayananId', "63860"))

})

bindElementDoubleClick(\$("tr\[detail-kanker-anak-row\]"), (element) => {

window.location.replace("<https://kotakediri.epuskesmas.id/skrining/showkankeranak/skriningId/pelayananId".replace('skriningId>', \$(element).data('id')).replace('pelayananId', "63860"))

})

bindElementDoubleClick(\$("tr\[detail-tb-row\]"), (element) => {

window.location.replace("<https://kotakediri.epuskesmas.id/skrining/showtb/skriningId/pelayananId".replace('skriningId>', \$(element).data('id')).replace('pelayananId', "63860"))

})

bindElementDoubleClick(\$("tr\[detail-covid19-row\]"), (element) => {

window.location.replace("<https://kotakediri.epuskesmas.id/covid19/show/pelayananId?findSkrining=skriningId".replace('skriningId>', \$(element).data('id')).replace('pelayananId', "63860"))

})

bindElementDoubleClick(\$("tr\[detail-hepatitisc-row\]"), (element) => {

window.location.replace("<https://kotakediri.epuskesmas.id/skrining/showhepatitisc/skriningId/pelayananId".replace('skriningId>', \$(element).data('id')).replace('pelayananId', "63860"))

})

bindElementDoubleClick(\$("tr\[detail-hepatitisb-row\]"), (element) => {

window.location.replace("<https://kotakediri.epuskesmas.id/skrining/showhepatitisb/skriningId/pelayananId/pelayananIbu".replace('skriningId>', \$(element).data('id')).replace('pelayananId', "63860").replace('pelayananIbu', (\$(element).data('pel-ibu') == '' ? '' : \$(element).data('pel-ibu'))))

})

bindElementDoubleClick(\$("tr\[detail-sqr-row\]"), (element) => {

window.location.replace("<https://kotakediri.epuskesmas.id/skrining/showSQR/skriningId/pelayananId".replace('skriningId>', \$(element).data('id')).replace('pelayananId', "63860"))

})

})

\$("#check_all_skrining").change(function() {

\$('#tabel_detail_skrining tr td input\[type="checkbox"\]:not(:disabled)').prop('checked', \$(this).prop('checked'));

});

\$("#button_add_skrining").click(function() {

var tr_id_skrining = \$('input\[name="tr_id_skrining"\]').val();

var id = \$('input\[name="id"\]').val();

var skrining = \$('select\[name="skrining"\]').find(":selected").text();

var skrining_val = \$('select\[name="skrining"\]').find(":selected").val();

var model_name_val = \$('select\[name="skrining"\]').find(":selected").data('model');

var tanggal = \$('input\[name="tanggal"\]').val();

if (skrining_val == '') {

alert('Silahkan pilih jenis skrining.', 'warning');

return false;

}

if (tanggal == '') {

alert('Tanggal skrining tidak boleh kosong', 'warning');

return false;

}

var count = \$("#tabel_detail_skrining").children("tr").length;

var x = 0;

if (count == 0) {

x = 1;

} else if (tr_id_skrining != '') {

x = tr_id_skrining;

} else {

x = count + 1;

}

\$(this).addClass('loading');

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/skrining/store>",

method: 'POST',

dataType: "json",

data: {

'Skrining': {

id: id,

pelayanan_id: '63860',

pasien_id: '0000000000140458',

skrining: skrining_val,

tanggal: tanggal,

},

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"

},

success: function(data) {

if (data.status == 'success') {

if (model_name_val == '') {

var table = "";

table += "&lt;tr id='tr_skrining_" + x + "'&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='Skrining\[" + x + "\]\[id\]' type='text' class='hidden form-control input-sm' value='" + data.data.id + "'&gt;";

table += "&lt;input name='Skrining\[" + x + "\]\[skrining\]' type='text' class='hidden form-control input-sm' value='" + data.data.skrining + "'&gt;";

table += data.data.skrining;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='Skrining\[" + x + "\]\[tanggal\]' type='text' class='hidden form-control input-sm' value='" + data.data.tanggal + "'&gt;";

table += data.data.tanggal;

table += "&lt;/td&gt;";

table += "&lt;td&gt;&lt;/td&gt;";

table += "&lt;td&gt;&lt;/td&gt;";

table += "&lt;td hidden&gt;&lt;a pjax-content href=\\"<https://kotakediri.epuskesmas.id/skrining/create/>" + data.data.id + "?from='pelayanan'\\"&gt;show link&lt;/a&gt;&lt;/td&gt;";

table += "&lt;td align='center'&gt;&lt;input type='checkbox' value='' name='checkSkrining\[" + x + "\]' onclick=''&gt;&lt;/td&gt;";

table += "&lt;/tr&gt;";

if (tr_id_skrining == '') {

\$("#tabel_detail_skrining tr:first").after(table);

} else {

\$("#tr_skrining_" + x).replaceWith(table);

}

} else {

window.location = data.url;

}

} else {

alert(data.message, data.status);

}

},

error: function(xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

resetFormSkrining();

\$(this).removeClass('loading');

});

function destroyDetailCheckedSkrining(obj) {

var x = 1;

var arrayData = \[\];

\$("#tabel_detail_skrining").children("tr").each(function() {

if (\$('input\[name="checkSkrining\[' + x + '\]"\]').prop('checked')) {

var value = \$('input\[name="Skrining\[' + x + '\]\[id\]"\]').val();

if (value == '') {

\$(this).has('input\[name="checkSkrining\[' + x + '\]"\]:checked').remove();

} else {

arrayData.push(value);

}

}

x++;

});

if (arrayData.length > 0) {

\$(obj).addClass('loading');

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/skrining/destroychecked>",

method: 'POST',

dataType: "json",

data: {

ids: arrayData,

pelayanan: '63860',

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"

},

success: function(data) {

\$("input\[name\*=checkSkrining\]:checked").parent().parent().remove();

\$(obj).removeClass('loading');

setTimeout(() => {

document.location.href = "/pelayanan/show/63860";

}, 1500);

},

error: function(xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$(obj).removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

}

});

reArange();

}

}

function resetFormSkrining() {

\$('input\[name="tr_id_skrining"\]').val("");

\$('input\[name="id"\]').val("");

\$('select\[name="skrining"\]').val("");

\$('input\[name="tanggal"\]').val("");

\$("#button_add_skrining").text('Tambah');

\$('#tabel_detail_skrining').children().removeClass();

\$('#tabel_detail_skrining tr\[pjax-content\]').each(function() {

\$(this).on('click', 'td:last-child', function(e) {

e.stopPropagation();

});

\$(this).click(function(event) {

alert('Silahkan klik/tap 2x pada baris data untuk merubah data.', 'info');

});

\$(this).dblclick(function(event) {

event.preventDefault();

\$('button\[data-notify=dismiss\]').click();

});

\$(this).bind('touchstart', function preventZoom(e) {

var t2 = e.timeStamp,

t1 = \$(this).data('lastTouch') || t2,

dt = t2 - t1,

fingers = e.originalEvent.touches.length;

\$(this).data('lastTouch', t2);

if (!dt || dt > 500 || fingers > 1) return;

e.preventDefault();

\$(this).trigger('dblclick');

});

});

}

\$('#tabel_detail_skrining tr\[pjax-content\]').each(function() {

\$(this).on('click', 'td:last-child', function(e) {

e.stopPropagation();

});

\$(this).click(function(event) {

alert('Silahkan klik/tap 2x pada baris data untuk merubah data.', 'info');

});

\$(this).dblclick(function(event) {

event.preventDefault();

\$('button\[data-notify=dismiss\]').click();

\$(this).find('a\[pjax-content\]').click();

});

\$(this).bind('touchstart', function preventZoom(e) {

var t2 = e.timeStamp,

t1 = \$(this).data('lastTouch') || t2,

dt = t2 - t1,

fingers = e.originalEvent.touches.length;

\$(this).data('lastTouch', t2);

if (!dt || dt > 500 || fingers > 1) return;

e.preventDefault();

\$(this).trigger('dblclick');

});

});

function reArange() {

\$("#tabel_detail_skrining").children("tr").each(function(a) {

var numx = parseInt(a) + 1;

if (numx == -1) idnya = '';

else idnya = 'tr_skrining_' + numx;

this.id = idnya;

\$('#tr_skrining_' + numx + ' input').each(function(z) {

var angka = this.name.toString();

var thenum = parseInt(angka.replace(/\[^0-9\\.\]/g, ''), 10);

this.name = angka.replace(thenum, numx);

thenum = '';

});

});

}

&lt;/script&gt;

&lt;style type="text/css"&gt;

.heading-default {

color: #333;

background-color: #f5f5f5;

border-color: #ddd;

}

.riwayat {

width: 100%;

}

.scrollStyle {

max-width: 100%;

max-height: 200px;

overflow-x: hidden;

overflow-y: scroll;

}

.wrapper {

text-align: center;

}

.box .nav>li>a {

position: relative;

display: block;

padding: 5px 10px;

}

.box a:hover {

font-weight: normal !important;

}

.btn-riwayat {

width: 135px;

}

.tab-riwayat .content-panel {

height: 440px;

overflow-y: visible;

}

.top-content {

width: 100%;

height: 50px;

}

.center-dr {

text-align: center;

margin: 20px 0 0 0 !important;

font-size: 13px;

}

&lt;/style&gt;

&lt;div class="box tab-riwayat"&gt;

&lt;div class="box-header"&gt;

&lt;div role="tabpanel"&gt;

&lt;ul class="nav nav-pills" role="tablist"&gt;

&lt;li role="presentation" class="active"&gt;

&lt;a href="#data_riwayat" id="tab_diagnosa" class="btn btn-sm btn-riwayat btn-default" aria-controls="data_riwayat" role="tab" data-toggle="tab"&gt; Data Riwayat

&lt;/a&gt;

&lt;/li&gt;

&lt;li role="presentation"&gt;

&lt;a href="#riwayat_kunjungan_bpjs" id="tab_anamnesa" class="btn btn-sm btn-riwayat btn-default" aria-controls="riwayat_kunjungan_bpjs" role="tab" data-toggle="tab"&gt; Data Riwayat BPJS

&lt;/a&gt;

&lt;/li&gt;

&lt;/ul&gt;

&lt;hr&gt;

&lt;div class="tab-content"&gt;

&lt;div role="tabpanel" class="tab-pane active" id="data_riwayat"&gt;

&lt;div class="content-panel"&gt;

&lt;div id="page"&gt;

&lt;div class="clearfix top-content"&gt;

&lt;p class="center-dr"&gt;&lt;strong&gt;Kunjungan 25 Tahun Terakhir&lt;/strong&gt;&lt;/p&gt;

&lt;/div&gt;

&lt;li class="list-group-item highlight-active" style=""&gt;

&lt;a style="background-color: ;color:;white-space:normal;" class="heading-default riwayat btn btn-default" data-id="63860" data-puskesmas="00001033231" onclick="showRiwayatPelayanan(this);"&gt; &lt;span class="fa fa-book"&gt;&lt;/span&gt; BALOWERTI &lt;br&gt; 03-02-2026 08:51:24 /

DEWASA -

&lt;/a&gt;

&lt;/li&gt;

&lt;nav class="wrapper"&gt;

&lt;ul class="pagination pagination-riwayat"&gt;&lt;li id="previous-page"&gt;&lt;a href="javascript:void(0)" aria-label="Previous"&gt;&lt;span aria-hidden="true"&gt;«&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;&lt;li class="current-page active"&gt;&lt;a href="javascript:void(0)"&gt;1&lt;/a&gt;&lt;/li&gt;&lt;li id="next-page"&gt;&lt;a href="javascript:void(0)" aria-label="Next"&gt;&lt;span aria-hidden="true"&gt;»&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;

&lt;/nav&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div role="tabpanel" class="tab-pane" id="riwayat_kunjungan_bpjs"&gt;

&lt;div class="content-panel"&gt;

&lt;div class="clearfix top-content"&gt;

&lt;div class="col-sm-1 col-xs-6"&gt;

&lt;button id="button_bpjs_get" type="button" class="btn btn-sm btn-success" data-noasuransi="0002060612818" onclick="getRiwayatKunjunganBpjs(this);"&gt;&lt;i class="icon-bpjs"&gt;&lt;/i&gt; Ambil Data Riwayat Dari Pcare&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div id="page-2"&gt;

&lt;nav class="wrapper "&gt;

&lt;ul class="pagination pagination-2"&gt;

&lt;li id="previous-page"&gt;&lt;a href="javascript:void(0)" aria-label="Previous"&gt;&lt;span aria-hidden="true"&gt;«&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;

&lt;li class="current-page active"&gt;&lt;a href="javascript:void(0)"&gt;1&lt;/a&gt;&lt;/li&gt;&lt;li id="next-page"&gt;&lt;a href="javascript:void(0)" aria-label="Next"&gt;&lt;span aria-hidden="true"&gt;»&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;

&lt;/nav&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;Galeri Foto&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div id="galleryApp" class="row text-center text-lg-start"&gt;&lt;div class="col-lg-4 col-md-4 col-6 padBotom"&gt;&lt;a href="javascript:;" class="d-block mb-4 h-100"&gt;&lt;i aria-hidden="true" class="fa fa-plus-square-o fa-8x"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/div&gt; &lt;div role="dialog" class="modal fade"&gt;&lt;div class="modal-dialog modal-dialog-centered modal-lg"&gt;&lt;div class="modal-content"&gt;&lt;div class="modal-header"&gt;&lt;button type="button" data-dismiss="modal" aria-label="Close" class="close"&gt;×&lt;/button&gt; &lt;h4 class="modal-title pull-left"&gt;Tambah Foto Baru&lt;/h4&gt;&lt;/div&gt; &lt;div class="modal-body"&gt;&lt;div class="row"&gt;&lt;div class="main-form-container"&gt;&lt;form role="form" class="form-horizontal"&gt;&lt;div class="form-wrapper"&gt;&lt;!----&gt; &lt;div class="form-group" style="margin-bottom: 0px;"&gt;&lt;label class="col-sm-3 control-label"&gt;Foto/Dokumen &lt;span style="color: red;"&gt;\*&lt;/span&gt;&lt;/label&gt; &lt;div class="col-sm-9"&gt;&lt;div class="fileUpload btn btn-info btn-block bordered"&gt;&lt;span&gt;&lt;i aria-hidden="true" class="fa fa-plus"&gt;&lt;/i&gt; Unggah / ambil foto&lt;/span&gt; &lt;input type="file" accept="image/jpg,image/jpeg,image/png,application/pdf" class="upload"&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class="form-group"&gt;&lt;label class="col-sm-3 control-label"&gt; &lt;/label&gt; &lt;div class="col-sm-9"&gt;&lt;span id="helpBlock" class="help-block pull-left"&gt;Format jpg, jpeg, png, & pdf. Ukuran file maksimal 2 MB.&lt;/span&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class="form-group" style="margin-bottom: 0px;"&gt;&lt;label class="col-sm-3 control-label"&gt;Buka Kamera &lt;span style="color: red;"&gt;\*&lt;/span&gt;&lt;/label&gt; &lt;div class="col-sm-9"&gt;&lt;div class="web-camera-container"&gt;&lt;div class="camera-button"&gt;&lt;button type="button" class="btn bordered btn-success"&gt;&lt;span&gt;Buka Kamera&lt;/span&gt;&lt;/button&gt;&lt;/div&gt; &lt;div class="camera-loading" style="display: none;"&gt;&lt;ul class="loader-circle"&gt;&lt;li&gt;&lt;/li&gt; &lt;li&gt;&lt;/li&gt; &lt;li&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt; &lt;!----&gt; &lt;!----&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class="form-group"&gt;&lt;label class="col-sm-3 control-label"&gt;Judul &lt;span style="color: red;"&gt;\*&lt;/span&gt;&lt;/label&gt; &lt;div class="col-sm-9"&gt;&lt;input type="text" placeholder="Judul foto/dokumen" maxlength="32" class="form-control input-sm"&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class="form-group"&gt;&lt;label class="col-sm-3 control-label"&gt;Deskripsi&lt;/label&gt; &lt;div class="col-sm-9"&gt;&lt;textarea rows="5" placeholder="Deskripsi foto/dokumen" class="form-control"&gt;&lt;/textarea&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/form&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class="modal-footer"&gt;&lt;button type="button" class="btn btn-warning"&gt;Reset&lt;/button&gt; &lt;button type="button" class="btn btn-primary"&gt;Simpan Foto&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div role="dialog" class="modal fade"&gt;&lt;div class="modal-dialog modal-dialog-centered modal-lg"&gt;&lt;div class="modal-content"&gt;&lt;div class="modal-header"&gt;&lt;button type="button" data-dismiss="modal" aria-label="Close" class="close"&gt;×&lt;/button&gt; &lt;h4 class="modal-title pull-left"&gt;Gallery Foto&lt;/h4&gt;&lt;/div&gt; &lt;div class="modal-body"&gt;&lt;div class="row"&gt;&lt;div class="main-form-container"&gt;&lt;div class="col-md-8"&gt;&lt;div class="form-group"&gt;&lt;div class="panel"&gt;&lt;div class="panel-body"&gt;&lt;!----&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class="form-group"&gt;&lt;div class="panel"&gt;&lt;div class="panel-body"&gt;&lt;ul class="images"&gt;&lt;/ul&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class="col-md-4"&gt;&lt;div class="form-group"&gt;&lt;div class="panel"&gt;&lt;div class="panel-body panel-fixed"&gt;&lt;div class="border-box"&gt;&lt;p class="left"&gt;&lt;strong&gt;Tanggal Diambil&lt;/strong&gt;&lt;br&gt;Invalid Date&lt;/p&gt; &lt;hr&gt; &lt;p class="left"&gt;&lt;strong&gt;Judul&lt;/strong&gt;&lt;br&gt;&lt;i aria-hidden="true" class="fa fa-file"&gt;&lt;/i&gt; &lt;/p&gt; &lt;hr&gt; &lt;p class="left"&gt;&lt;strong&gt;Deskripsi&lt;/strong&gt;&lt;br&gt;&lt;/p&gt; &lt;br&gt; &lt;a href="javascript:;" class="center" style="color: rgb(211, 85, 92);"&gt;&lt;i aria-hidden="true" class="fa fa-trash"&gt;&lt;/i&gt; Hapus Foto

&lt;/a&gt;

&lt;!----&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class="modal-footer"&gt;&lt;button type="button" class="btn btn-primary"&gt;Tambah Foto Baru&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-sm-8"&gt;

&lt;div class="alert alert-success" role="alert" style="padding: 15px 20px 20px; "&gt;

&lt;div&gt;

&lt;i class="fa fa-exclamation-circle" aria-hidden="true"&gt;&lt;/i&gt; Silakan klik tombol "Lihat i-Care"

terlebih dahulu untuk menampilkan halaman i-Care

&lt;button type="button" class="btn btn-success btn-sm pull-right btn-mulai-resep" onclick="postICare()"&gt; Lihat i-Care &lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;form form-ajax-self="" id="form_create" method="POST" action="<https://kotakediri.epuskesmas.id/diagnosa/store>" class="form-horizontal"&gt;

&lt;input type="hidden" name="\_token" value="r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"&gt;

&lt;input type="text" class="hidden form-control input-sm" required="" readonly="" name="Diagnosa\[pelayanan_id\]" value="63860"&gt;

&lt;button type="button" id="btn-rwt-pnykt" class="btn btn-sm btn-success" disabled="" onclick="window.open('<https://kotakediri.epuskesmas.id/diagnosa/riwayat/0000000000140458>', '', 'left=100,top=100')"&gt;Cetak

Riwayat Penyakit&lt;/button&gt;

&lt;div class="box box-bordered" id="Diagnosas"&gt;

&lt;div class="box-header with-border accordion-toggle" data-toggle="collapse" data-target="#collapseDiagnosas" aria-expanded="true" aria-controls="collapseIdentitas"&gt;

&lt;strong&gt;RIWAYAT PENYAKIT (IVANDER NAGATA)&lt;/strong&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered collapse" id="collapseDiagnosas" aria-labelledby="headingTwo" data-parent="#Diagnosas"&gt;

&lt;div class="panel-body"&gt;

&lt;div class="table-responsive" style=" max-height: 250px;overflow-y: scroll;"&gt;

&lt;table class="table table-bordered table-hover table-condensed table-sortable"&gt;

&lt;thead&gt;

&lt;tr class="btn-primary"&gt;

&lt;td width="20%"&gt;Tanggal&lt;/td&gt;

&lt;td&gt;(ICD-X) Diagnosa&lt;/td&gt;

&lt;td&gt;Kasus Diagnosa&lt;/td&gt;

&lt;td&gt;Jenis Diagnosa&lt;/td&gt;

&lt;td&gt;Warna&lt;/td&gt;

&lt;/tr&gt;

&lt;/thead&gt;

&lt;tbody id="tbriwayat"&gt;&lt;tr&gt;&lt;td colspan="5"&gt;Belum ada Data&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;strong&gt;DIAGNOSA&lt;/strong&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="table-responsive"&gt;

&lt;table class="table table-bordered table-hover table-condensed table-sortable"&gt;

&lt;thead&gt;

&lt;tr class="btn-primary"&gt;

&lt;td width="18%"&gt;Dokter / Tenaga Medis&lt;/td&gt;

&lt;td width="18%"&gt;Perawat / Bidan / Nutrisionist / Sanitarian&lt;/td&gt;

&lt;td width="8%"&gt;ICD-X&lt;/td&gt;

&lt;td&gt;Diagnosa&lt;/td&gt;

&lt;td width="12%"&gt;Jenis&lt;/td&gt;

&lt;td width="10%"&gt;Kasus&lt;/td&gt;

&lt;td width="3%"&gt;Status&lt;/td&gt;

&lt;td align="center"&gt;

&lt;input type="checkbox" id="check_all" onchange="checkAll(this)"&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;/thead&gt;

&lt;tbody id="tabel_detail"&gt;

&lt;tr id="tr_1"&gt;

&lt;td&gt;

&lt;input type="text" style="display: none" readonly="" class="form-control input-sm" data-for="dokter_id" name="Diagnosa\[1\]\[dokter_id\]" value="" placeholder="Dokter ID"&gt;

&lt;input type="text" data-for="dokter_nama" onkeyup="autocompleteDokter(this);" class="form-control input-sm" value="" name="dokter_nama" placeholder="🔍 Nama Dokter / Bidan / Perawat" maxlength="128" data-bpjs="true"&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;input type="text" style="display: none" readonly="" class="form-control input-sm" data-for="perawat_id" name="Diagnosa\[1\]\[perawat_id\]" value="" placeholder="Perawat ID"&gt;

&lt;input type="text" data-for="perawat_nama" onkeyup="autocompletePerawat(this);" class="form-control input-sm" name="perawat_nama" value="" placeholder="🔍 Nama Asisten Dokter / Bidan / Perawat" maxlength="128"&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;input type="text" style="display: none" readonly="" class="form-control input-sm" data-for="diagnosa_id" name="Diagnosa\[1\]\[diagnosa_id\]" placeholder="ICD-X"&gt;

&lt;input type="text" data-for="diagnosa_id" onkeyup="autocompleteDiagnosa(this); toggleOptionsVisibility();" class="form-control input-sm" name="diagnosa_id" placeholder="🔍 Cari ICD-X" maxlength="191" data-bpjs="true"&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;input type="text" data-for="diagnosa_nama" onkeyup="autocompleteDiagnosa(this); toggleOptionsVisibility();" class="form-control input-sm" name="diagnosa_nama" placeholder="🔍 Cari Diagnosa" maxlength="191" data-bpjs="true"&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;select data-for="diagnosa_jenis" class="form-control input-sm" name="Diagnosa\[1\]\[diagnosa_jenis\]"&gt;

&lt;option value="PRIMER"&gt;

PRIMER&lt;/option&gt;

&lt;option value="SEKUNDER"&gt;

SEKUNDER&lt;/option&gt;

&lt;option value="KOMPLIKASI"&gt;

KOMPLIKASI&lt;/option&gt;

&lt;/select&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;select data-for="diagnosa_kasus" class="form-control input-sm" name="Diagnosa\[1\]\[diagnosa_kasus\]"&gt;

&lt;option value="BARU"&gt;

BARU&lt;/option&gt;

&lt;option value="LAMA"&gt;

LAMA&lt;/option&gt;

&lt;/select&gt;

&lt;/td&gt;

&lt;td align="center"&gt;

&lt;i data-for="icon_status"&gt;&lt;/i&gt;

&lt;/td&gt;

&lt;td align="center"&gt;

&lt;input type="text" style="display: none" readonly="" class="form-control input-sm" data-for="id" name="Diagnosa\[1\]\[id\]" placeholder="ID"&gt;

&lt;input type="checkbox" name="check\[1\]"&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;/tbody&gt;

&lt;tfoot&gt;

&lt;tr&gt;

&lt;td colspan="8" style="vertical-align:top"&gt;

&lt;div class="pull-left"&gt;

&lt;div class="box box-bordered" style="margin-bottom: 0px;" id="form_ambil_diagnosa_bpjs"&gt;

&lt;div class="box-header"&gt;Ambil data Diagnosa BPJS&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;div class="col-sm-3 control-label"&gt;ICD-X&lt;/div&gt;

&lt;div class="col-sm-4"&gt;

&lt;input type="text" placeholder="ICD-X" class="form-control input-sm" name="ambil_diagnosa_bpjs"&gt;

&lt;/div&gt;

&lt;div class="col-sm-4"&gt;

&lt;button id="button_ambil_diagnosa_bpjs" maxlength="5" onclick="ambilDiagnosaBpjs();" type="button" class="btn btn-sm btn-primary"&gt;Ambil&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="pull-right"&gt;

&lt;button type="button" class="btn btn-sm btn-primary button_add_data_swal"&gt;Tambah&lt;/button&gt;

&lt;button id="button_delete_data" type="button" class="btn btn-sm btn-danger" onclick="destroyChecked(this);"&gt;Hapus&lt;/button&gt;

&lt;/div&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;/tfoot&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label" style="text-align: left; font-weight: bold"&gt;Prognosa &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;select name="prognosa" required="" class="form-control input-sm" id="prognosa"&gt;

&lt;option value="" style="display: block" id="pilih"&gt;Pilih Prognosa

&lt;/option&gt;

&lt;option value="01"&gt;

Sanam (Sembuh)&lt;/option&gt;

&lt;option value="02"&gt;

Bonam (Baik)&lt;/option&gt;

&lt;option value="03"&gt;

Malam (Buruk/Jelek)&lt;/option&gt;

&lt;option value="04"&gt;

Dubia Ad Sanam/Bonam (Tidak tentu/Ragu-ragu, Cenderung Sembuh/Baik)&lt;/option&gt;

&lt;option value="05"&gt;

Dubia Ad Malam (Tidak Tentu/Ragu-Ragu, Cenderung Memburuk)&lt;/option&gt;

&lt;/select&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;div class="col-sm-3"&gt;

&lt;label class="control-label" style="text-align: left; font-weight: bold"&gt;Tandai

Penyakit Kronis &lt;/label&gt;&lt;br&gt;

&lt;badge class="kronis-badge" style="margin-top: 6px;"&gt;

&lt;svg style="width: 15%;" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="<http://www.w3.org/2000/svg>"&gt;

&lt;path d="M7.99967 2.66663C9.41416 2.66663 10.7707 3.22853 11.7709 4.22872C12.7711 5.22892 13.333 6.58547 13.333 7.99996C13.333 9.41445 12.7711 10.771 11.7709 11.7712C10.7707 12.7714 9.41416 13.3333 7.99967 13.3333C6.58519 13.3333 5.22863 12.7714 4.22844 11.7712C3.22824 10.771 2.66634 9.41445 2.66634 7.99996C2.66634 6.58547 3.22824 5.22892 4.22844 4.22872C5.22863 3.22853 6.58519 2.66663 7.99967 2.66663ZM7.99967 1.33329C4.31767 1.33329 1.33301 4.31796 1.33301 7.99996C1.33301 11.682 4.31767 14.6666 7.99967 14.6666C11.6817 14.6666 14.6663 11.682 14.6663 7.99996C14.6663 4.31796 11.6817 1.33329 7.99967 1.33329ZM7.33301 5.33329H8.66634V3.99996H7.33301V5.33329ZM7.33301 12H8.66634V6.66663H7.33301V12Z" fill="#B6B6B6"&gt;&lt;/path&gt;

&lt;/svg&gt;

&lt;span&gt;Penyakit yang dipilih akan tampil di data pasien&lt;/span&gt;

&lt;/badge&gt;

&lt;/div&gt;

&lt;div class="col-sm-9"&gt;

&lt;div class="PenyakitKronisLists"&gt;

&lt;input type="hidden" name="PenyakitKroinis\[pasien_id\]" value="0000000000140458"&gt;

&lt;label class="fieldListKronis"&gt;

&lt;input type="checkbox" name="PenyakitKroinis\[value\]\[\]" value="Diabetes Mellitus" onchange="checkCurrentDataKronis(this)"&gt;

Diabetes Mellitus

&lt;/label&gt;

&lt;label class="fieldListKronis"&gt;

&lt;input type="checkbox" name="PenyakitKroinis\[value\]\[\]" value="Dislipidemia" onchange="checkCurrentDataKronis(this)"&gt;

Dislipidemia

&lt;/label&gt;

&lt;label class="fieldListKronis"&gt;

&lt;input type="checkbox" name="PenyakitKroinis\[value\]\[\]" value="Epilepsi" onchange="checkCurrentDataKronis(this)"&gt;

Epilepsi

&lt;/label&gt;

&lt;label class="fieldListKronis"&gt;

&lt;input type="checkbox" name="PenyakitKroinis\[value\]\[\]" value="Gangguan Jiwa Kronis" onchange="checkCurrentDataKronis(this)"&gt;

Gangguan Jiwa Kronis

&lt;/label&gt;

&lt;label class="fieldListKronis"&gt;

&lt;input type="checkbox" name="PenyakitKroinis\[value\]\[\]" value="Hipertensi" onchange="checkCurrentDataKronis(this)"&gt;

Hipertensi

&lt;/label&gt;

&lt;label class="fieldListKronis"&gt;

&lt;input type="checkbox" name="PenyakitKroinis\[value\]\[\]" value="Kanker" onchange="checkCurrentDataKronis(this)"&gt;

Kanker

&lt;/label&gt;

&lt;label class="fieldListKronis"&gt;

&lt;input type="checkbox" name="PenyakitKroinis\[value\]\[\]" value="Penyakit Autoimun" onchange="checkCurrentDataKronis(this)"&gt;

Penyakit Autoimun

&lt;/label&gt;

&lt;label class="fieldListKronis"&gt;

&lt;input type="checkbox" name="PenyakitKroinis\[value\]\[\]" value="Penyakit Ginjal Kronis" onchange="checkCurrentDataKronis(this)"&gt;

Penyakit Ginjal Kronis

&lt;/label&gt;

&lt;label class="fieldListKronis"&gt;

&lt;input type="checkbox" name="PenyakitKroinis\[value\]\[\]" value="Penyakit Jantung Kronis" onchange="checkCurrentDataKronis(this)"&gt;

Penyakit Jantung Kronis

&lt;/label&gt;

&lt;label class="fieldListKronis"&gt;

&lt;input type="checkbox" name="PenyakitKroinis\[value\]\[\]" value="Penyakit Paru Kronis" onchange="checkCurrentDataKronis(this)"&gt;

Penyakit Paru Kronis

&lt;/label&gt;

&lt;label class="fieldListKronis"&gt;

&lt;input type="checkbox" name="PenyakitKroinis\[value\]\[\]" value="Stroke" onchange="checkCurrentDataKronis(this)"&gt;

Stroke

&lt;/label&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div style="padding:8px;"&gt;

&lt;button id="button_save" type="button" class="btn btn-sm btn-success pull-right button_add_data_swal"&gt;Simpan&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;&lt;/form&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;script type="text/javascript"&gt;

\$(document).ready(function() {

reArange();

\$(document).on('focus', ':input', function() {

\$(this).attr('autocomplete', 'off');

});

loadRiwayat();

setDataCurrentRisiko()

})

let currentSavedRisiko = \[\];

function setDataCurrentRisiko() {

\$('input\[name\*="PenyakitKroinis\[value\]"\]:checked').each(function(a) {

currentSavedRisiko.push(\$(this).val())

})

}

function checkCurrentDataKronis(obj) {

if (!obj.checked && currentSavedRisiko.includes(\$(obj).val())) {

\$(obj).prop('checked', true)

Swal.fire({

type: 'warning',

title: 'Apakah anda yakin ingin menghapus risiko ini?',

showCancelButton: true,

confirmButtonColor: '#3085d6',

cancelButtonColor: '#d33',

confirmButtonText: 'Ya',

cancelButtonText: 'Tutup'

}).then((result) => {

if (result.value) {

\$(obj).prop('checked', false)

}

});

}

}

function toggleOptionsVisibility() {

let inputNama = document.querySelector('input\[name="diagnosa_nama"\]');

let inputId = document.querySelector('input\[name="diagnosa_id"\]');

let inputICDX = document.querySelector('input\[name="ambil_diagnosa_bpjs"\]');

let options = document.querySelectorAll('#prognosa option');

if (inputNama.value !== '' || inputId.value !== '' || inputICDX.value !== '') {

options.forEach(function(option) {

option.style.display = 'block';

});

} else {

options.forEach(function(option) {

option.style.display = 'block';

});

}

}

\$('#button_add_data').click(function() {

if (\$('#tabel_detail tr').length > 0) {

var table = \$('#tabel_detail').find('tr:last').clone();

table.find('input\[data-for="id"\], input\[data-for="diagnosa_id"\], input\[data-for="diagnosa_nama"\]')

.val(

"");

table.find('select\[data-for="diagnosa_jenis"\] option, select\[data-for="diagnosa_kasus"\] option')

.removeAttr("selected");

table.find('i\[data-for=icon_status\]').html('&lt;i data-for="icon_status"&gt;&lt;/i&gt;');

\$('#tabel_detail').append(table);

reArange();

} else {

var table = '&lt;tr&gt;';

table += '&lt;td&gt;';

table +=

'&lt;input type="text" style="display: none" readonly="" class="form-control input-sm" data-for="dokter_id" name="Diagnosa\[1\]\[dokter_id\]" value="0000000000000002" placeholder="Dokter ID"&gt;';

table +=

'&lt;input type="text" data-for="dokter_nama" onkeyup="autocompleteDokter(this);" class="form-control input-sm" value="br. Rahman" name="dokter_nama" placeholder="🔍 Nama Dokter / Bidan / Perawat" maxlength="128" data-bpjs="false" autocomplete="off"&gt;';

table += '&lt;/td&gt;';

table += '&lt;td&gt;';

table +=

'&lt;input type="text" style="display: none" readonly="" class="form-control input-sm" data-for="perawat_id" name="Diagnosa\[1\]\[perawat_id\]" value="" placeholder="Perawat ID"&gt;';

table +=

'&lt;input type="text" data-for="perawat_nama" onkeyup="autocompletePerawat(this);" class="form-control input-sm" name="perawat_nama" value="" placeholder="🔍 Nama Asisten Dokter / Bidan / Perawat" maxlength="128"&gt;';

table += '&lt;/td&gt;';

table += '&lt;td&gt;';

table +=

'&lt;input type="text" style="display: none" readonly="" class="form-control input-sm" data-for="diagnosa_id" name="Diagnosa\[1\]\[diagnosa_id\]" placeholder="ICD-X"&gt;';

table +=

'&lt;input type="text" data-for="diagnosa_id" onkeyup="autocompleteDiagnosa(this);" class="form-control input-sm" name="diagnosa_id" placeholder="🔍 Cari ICD-X" maxlength="191" data-bpjs="false"&gt;';

table += '&lt;/td&gt;';

table += '&lt;td&gt;';

table +=

'&lt;input type="text" data-for="diagnosa_nama" onkeyup="autocompleteDiagnosa(this);" class="form-control input-sm" name="diagnosa_nama" placeholder="🔍 Cari Diagnoaasa" maxlength="191" data-bpjs="false"&gt;';

table += '&lt;/td&gt;';

table += '&lt;td&gt;';

table +=

'&lt;select data-for="diagnosa_jenis" class="form-control input-sm" name="Diagnosa\[1\]\[diagnosa_jenis\]"&gt;';

table += '&lt;option value="PRIMER"&gt;PRIMER&lt;/option&gt;';

table += '&lt;option value="SEKUNDER"&gt;SEKUNDER&lt;/option&gt;';

table += '&lt;option value="KOMPLIKASI"&gt;KOMPLIKASI&lt;/option&gt;';

table += '&lt;/select&gt;';

table += '&lt;/td&gt;';

table += '&lt;td&gt;';

table +=

'&lt;select data-for="diagnosa_kasus" class="form-control input-sm" name="Diagnosa\[1\]\[diagnosa_kasus\]"&gt;';

table += '&lt;option value="BARU"&gt;BARU&lt;/option&gt;';

table += '&lt;option value="LAMA"&gt;LAMA&lt;/option&gt;';

table += '&lt;/select&gt;';

table += '&lt;/td&gt;';

table += '&lt;td align="center"&gt;&lt;i data-for="icon_status"&gt;&lt;/i&gt;&lt;/td&gt;';

table += '&lt;td align="center"&gt;';

table +=

'&lt;input type="text" style="display: none" readonly="" class="form-control input-sm" data-for="id" name="Diagnosa\[1\]\[id\]" placeholder="ID"&gt;';

table += '&lt;input type="checkbox" name="check\[1\]"&gt;';

table += '&lt;/td&gt;';

table += '&lt;/tr&gt;';

\$('#tabel_detail').append(table);

}

});

\$('.button_add_data_swal').click(function() {

Swal.fire({

text: " Silahkan Lengkapi form Anamnesa yang bertanda bintang (mandatory), khusus pasien BPJS (keluhan, sistole, diastole, berat badan, tinggi badan, nafas, detak nadi, dan lingkar perut) tidak diperbolehkan kosong.",

type: 'warning',

title: 'Tidak bisa menambahkan Diagnosa!',

showCancelButton: true,

confirmButtonColor: '#3085d6',

cancelButtonColor: '#d33',

confirmButtonText: 'Ya, input Anamnesa',

cancelButtonText: 'Tutup'

}).then((result) => {

if (result.value) {

var pelayanan_id = \$(

'input\[name="Diagnosa\[pelayanan_id\]"\]').val()

window.location.replace("/anamnesa/create/" + pelayanan_id +

"?from=pelayanan&action=edit")

}

});

});

function reArange() {

\$('#tabel_detail').children('tr').each(function(a) {

var numx = parseInt(a) + 1;

if (numx == -1) idnya = '';

else idnya = 'tr_' + numx;

this.id = idnya;

\$('#tr_' + numx + ' input, #tr_' + numx + ' select').each(function(z) {

var angka = this.name.toString();

var thenum = parseInt(angka.replace(/\[^0-9\\.\]/g, ''), 10);

this.name = angka.replace(thenum, numx);

thenum = '';

});

});

}

function ambilDiagnosaBpjs() {

var ambil_diagnosa_bpjs = \$('#form_ambil_diagnosa_bpjs').find('input\[name="ambil_diagnosa_bpjs"\]').val();

if (ambil_diagnosa_bpjs.length >= 3) {

\$("#form_ambil_diagnosa_bpjs").find('button\[id="button_ambil_diagnosa_bpjs"\]').addClass('loading');

\$('#form_ambil_diagnosa_bpjs').find('input\[name="ambil_diagnosa_bpjs"\]').attr('readonly', true);

\$.ajax({

url: '<https://kotakediri.epuskesmas.id/diagnosa/create/63860>',

method: 'GET',

dataType: 'json',

data: {

api: 'diagnosa_bpjs',

search: {

'diagnosa_bpjs': ambil_diagnosa_bpjs

}

},

success: function(result) {

var message = "Data Diagnosa BPJS tidak ditemukan!";

var status = "warning";

if (result.total > 0) {

var count = 0;

\$("#tabel_detail tr").each(function() {

if (\$(this).find('input\[name="diagnosa_id"\]').val().toLowerCase() ==

ambil_diagnosa_bpjs.toLowerCase()) {

count++;

}

});

\$.each(result.data, function(index, value) {

if (count == 0) {

if (value.kdDiag.toLowerCase() == ambil_diagnosa_bpjs

.toLowerCase()) {

status = "success";

message = "Data Diagnosa BPJS berhasil diambil!";

var tabel_tr = \$('#tabel_detail').find('tr:last');

if (tabel_tr.find('input\[name="diagnosa_id"\]').val() != "" ||

tabel_tr.find('input\[name="diagnosa_nama"\]').val() != "") {

var tabel_tr = \$('#tabel_detail').find('tr:last').clone();

tabel_tr.find('input\[data-for="diagnosa_id"\]').attr('value',

value.kdDiag);

tabel_tr.find('input\[name="diagnosa_nama"\]').attr('value',

value.nmDiag);

\$('#tabel_detail').append(tabel_tr\[0\].outerHTML);

} else {

tabel_tr.find('input\[data-for="diagnosa_id"\]').attr('value',

value.kdDiag);

tabel_tr.find('input\[name="diagnosa_nama"\]').attr('value',

value.nmDiag);

}

}

} else {

\$("#tabel_detail tr").each(function() {

if (\$(this).find('input\[name="diagnosa_id"\]').val()

.toLowerCase() == value.kdDiag.toLowerCase()) {

status = "success";

message = "Data Diagnosa BPJS berhasil diambil!";

\$(this).find('input\[data-for="diagnosa_id"\]').val(

value.kdDiag);

\$(this).find('input\[name="diagnosa_nama"\]').val(

value.nmDiag);

}

});

}

reArange();

})

}

alert(message, status)

\$("#form_ambil_diagnosa_bpjs").find('button\[id="button_ambil_diagnosa_bpjs"\]')

.removeClass('loading');

\$('#form_ambil_diagnosa_bpjs').find('input\[name="ambil_diagnosa_bpjs"\]').removeAttr(

'readonly');

let options = document.querySelectorAll('#prognosa option');

options.forEach(function(option) {

option.style.display = 'block';

});

},

error: function(xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$("#form_ambil_diagnosa_bpjs").find('button\[id="button_ambil_diagnosa_bpjs"\]')

.removeClass('loading');

\$('#form_ambil_diagnosa_bpjs').find('input\[name="ambil_diagnosa_bpjs"\]').removeAttr(

'readonly');

console.log(xhr.status);

console.log(thrownError);

}

});

} else {

alert("Masukkan minimal 3 digit ICD-X", "warning");

}

}

function loadRiwayat() {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/diagnosa/riwayat>",

method: "POST",

data: {

pid: "0000000000140458",

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"

},

success: function(result) {

var html = '';

var rekap = \[\];

if (result.riwayat.length > 0) {

\$("#btn-rwt-pnykt").attr('disabled', false);

result.riwayat.forEach(function(entry) {

entry.pelayanan.diagnosas.forEach(function(entry, i) {

if (!rekap\[entry.diagnosa_id\]) {

rekap\[entry.diagnosa_id\] = entry;

html += \`&lt;tr&gt;

&lt;td id='\${entry.id}'&gt;\${entry.diagnosa ? entry.tanggal : ''}&lt;/td&gt;

&lt;td&gt;\${entry.diagnosa ? '(' + entry.diagnosa.id + ') ' + entry.diagnosa.value : ''}&lt;/td&gt;

&lt;td&gt;\${entry.diagnosa ? entry.diagnosa_kasus : ''}&lt;/td&gt;

&lt;td&gt;\${entry.diagnosa ? entry.diagnosa_jenis : ''}&lt;/td&gt;

&lt;td style="background:\${entry.diagnosa.kode_warna ? entry.diagnosa.kode_warna : ''};"&gt;&lt;/td&gt;

&lt;/tr&gt;\`;

}

})

});

\$("#tbriwayat").html(html);

} else {

\$("#tbriwayat").html("&lt;tr&gt;&lt;td colspan='5'&gt;Belum ada Data&lt;/td&gt;&lt;/tr&gt;");

}

}

});

}

function autocompleteDiagnosa(obj) {

var diagnosa = 'diagnosa';

if (\$(obj).closest('tr').find('input\[data-for="diagnosa_nama"\]').attr('data-bpjs') == 'true') {

diagnosa = 'diagnosa_bpjs';

}

\$(obj).autocomplete({

delay: 1000,

source: function(request, response) {

\$.ajax({

url: '<https://kotakediri.epuskesmas.id/diagnosa/create/63860>',

method: 'GET',

dataType: 'json',

data: {

autocomplete: diagnosa,

search: {

\[diagnosa\]: request.term

}

},

success: function(data) {

response(\$.map(data, function(item) {

if (\$(obj).attr('name') == 'diagnosa_id') {

item.label = item.id + " - " + item.diagnosa;

item.value = item.id;

} else {

item.label = item.id + " - " + item.diagnosa;

item.value = item.diagnosa;

}

return item;

}));

},

error: function(xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

},

focus: function(event, ui) {

\$(obj).closest('tr').find('input\[data-for="diagnosa_id"\], input\[data-for="diagnosa_nama"\]')

.parent().removeClass('has-success').addClass('has-error');

\$(obj).closest('tr').find('input\[name="diagnosa_id"\]').val(ui.item.id);

\$(obj).closest('tr').find('input\[data-for="diagnosa_nama"\]').val(ui.item.diagnosa);

return false;

},

select: function(event, ui) {

\$(obj).closest('tr').find('input\[data-for="diagnosa_id"\], input\[data-for="diagnosa_nama"\]')

.parent().removeClass('has-error').addClass('has-success');

\$(obj).closest('tr').find('input\[data-for="diagnosa_id"\]').val(ui.item.id);

\$(obj).closest('tr').find('input\[data-for="diagnosa_nama"\]').val(ui.item.diagnosa);

\$.ajax({

url: \`<https://kotakediri.epuskesmas.id/diagnosa/config/rujukanlab/check/\${ui.item.id}\`>,

method: "GET",

success: function(data) {

if (data\[0\].status == 'aktif') {

alert(data\[0\].message, 'info');

}

}

});

},

minLength: 1

});

}

function autocompleteDokter(obj) {

\$(obj).autocomplete({

delay: 1000,

source: function(request, response) {

var dokter = 'dokter';

var dokter_nama = 'dokter_nama';

if (\$(obj).closest('tr').find('input\[data-for="dokter_nama"\]').attr('data-bpjs') ==

'true') {

dokter = 'dokter_bpjs';

dokter_nama = 'dokter_nama_bpjs';

}

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/diagnosa/create/63860>",

method: "GET",

dataType: "json",

data: {

autocomplete: dokter,

search: {

\[dokter_nama\]: request.term

}

},

success: function(data) {

response(data);

},

error: function(xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

},

focus: function(event, ui) {

\$(obj).parent().removeClass('has-success').addClass('has-error');

return false;

},

select: function(event, ui) {

\$(obj).parent().removeClass('has-error').addClass('has-success');

\$(obj).closest('tr').find('input\[data-for="dokter_id"\]').val(ui.item.id);

},

minLength: 1

});

}

function autocompletePerawat(obj) {

\$(obj).autocomplete({

delay: 1000,

source: function(request, response) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/diagnosa/create/63860>",

method: "GET",

dataType: "json",

data: {

autocomplete: 'perawat',

search: {

'perawat_nama': request.term

}

},

success: function(data) {

response(data);

},

error: function(xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

},

focus: function(event, ui) {

\$(obj).parent().removeClass('has-success').addClass('has-error');

return false;

},

select: function(event, ui) {

\$(obj).parent().removeClass('has-error').addClass('has-success');

\$(obj).closest('tr').find('input\[data-for="perawat_id"\]').val(ui.item.id);

},

minLength: 1

});

}

function setDataPelayanan(item) {

var html = "";

var d = new Date(),

tanggal = \[d.getDate().padLeft(), (d.getMonth() + 1).padLeft(), d.getFullYear()\].join('-') + ' ' + \[d

.getHours().padLeft(), d.getMinutes().padLeft(), d.getSeconds().padLeft()

\].join(':');

if (item.id != '') {

if (item.asuransi == 'BPJS') {

var text_asuransi = "&lt;b&gt;&lt;span class='text-success'&gt;" + item.asuransi_nama + "&lt;/span&gt;&lt;/b&gt;";

} else {

var text_asuransi = "&lt;b&gt;&lt;span class='text'&gt;" + item.asuransi_nama + "&lt;/span&gt;&lt;/b&gt;";

}

html = "ID Pelayanan: " + "&lt;i class='" + item.reg_type + "'&gt;&lt;/i&gt; " + item.id + "&lt;br&gt;" +

"Tanggal: " + item.tanggal + "&lt;br&gt;" +

"Poli/Ruangan: " + item.ruangan_nama + "&lt;br&gt;" +

"No. eRM: " + item.pasien_id.substr(8) + "&lt;br&gt;" +

"No. RM Lama: " + (item.no_rm_lama == null ? "-" : item.no_rm_lama) + "&lt;br&gt;" +

"No. Dokumen RM: " + (item.no_dok_rm == null ? "-" : item.no_dok_rm) + "&lt;br&gt;" +

"NIK: " + (item.nik == null ? "-" : item.nik) + "&lt;br&gt;" +

"Nama: " + item.pasien_nama + "&lt;br&gt;" +

"JK: " + item.jenis_kelamin + "&lt;br&gt;" +

"Tempat & Tgl Lahir: " + (item.tempat_lahir == null ? "-" : item.tempat_lahir) + "," +

(item.tanggal_lahir == null ? "" : item.tanggal_lahir) + "&lt;br&gt;" +

"Umur: " + item.umur_pasien + "&lt;br&gt;" +

"Asuransi: " + text_asuransi + "&lt;br&gt;";

var bpjs = 'false';

if (item.is_bridgingbpjs == 1) {

bpjs = 'true';

}

\$('input\[data-for="diagnosa_id"\], input\[data-for="diagnosa_nama"\], input\[data-for="dokter_nama"\], input\[data-for="perawat_nama"\]')

.attr('data-bpjs', bpjs);

tanggal = item.tanggal;

}

\$('#data_pelayanan').html(html);

\$('#tanggal').html(tanggal);

setTableDiagnosa(item.diagnosa);

}

function setTableDiagnosa(diagnosas) {

var tabel_tr = \$('#tabel_detail').find('tr:last').clone();

\$('#tabel_detail tr').remove();

var no = 1;

var tr = "";

if (diagnosas != null) {

\$('#prognosa option').each(function() {

\$(this).css('display', 'block');

});

\$.each(diagnosas, function(index, diagnosa) {

var table = tabel_tr;

table.attr('id', 'tr_' + (no + 1));

table.find('input\[data-for="id"\]').attr('value', diagnosa.id);

table.find('input\[data-for="dokter_id"\]').attr('value', diagnosa.dokter_id);

table.find('input\[data-for="dokter_nama"\]').attr('value', diagnosa.dokter_nama);

table.find('input\[data-for="perawat_id"\]').attr('value', diagnosa.perawat_id);

table.find('input\[data-for="perawat_nama"\]').attr('value', diagnosa.perawat_nama);

table.find('input\[data-for="diagnosa_id"\]').attr('value', diagnosa.diagnosa_id);

table.find('input\[data-for="diagnosa_nama"\]').attr('value', diagnosa.value);

table.find('select option').removeAttr('selected');

table.find('select\[data-for="diagnosa_jenis"\] option\[value="' + diagnosa.diagnosa_jenis + '"\]')

.attr('selected', true);

table.find('select\[data-for="diagnosa_kasus"\] option\[value="' + diagnosa.diagnosa_kasus + '"\]')

.attr('selected', true);

table.find('input\[data-for="posisi_gigi"\]').attr('value', diagnosa.posisi_gigi);

table.find('i\[data-for=icon_status\]').html('<i data-for="icon_status" class="' + diagnosa.bpjs +

'">&lt;/i&gt;');

tr += table\[0\].outerHTML;

no++;

});

}

\$('#tabel_detail').append(tr);

tabel_tr.find('input\[type=text\]').attr("value", "");

tabel_tr.find('select option').removeAttr('selected');

tabel_tr.find('i\[data-for=icon_status\]').html('&lt;i data-for="icon_status"&gt;&lt;/i&gt;');

\$("#tabel_detail").append(tabel_tr);

reArange();

}

function destroyChecked(obj) {

\$(obj).addClass('loading');

var x = 1;

var arrayData = \[\];

var name = \[\];

var diagnosaId = \[\];

\$("#tabel_detail").children("tr").each(function() {

if (\$('input\[name="check\[' + x + '\]"\]').prop('checked')) {

var value = \$('input\[name="Diagnosa\[' + x + '\]\[id\]"\]').val();

if (value == '') {

\$(this).has('input\[name="check\[' + x + '\]"\]:checked').remove();

} else {

arrayData.push(value);

name.push(x);

}

var diagnosaIdValue = \$('input\[name="Diagnosa\[' + x +

'\]\[diagnosa_id\]"\]').val();

if (diagnosaIdValue != '') {

diagnosaId.push(diagnosaIdValue);

}

}

x++;

});

if (arrayData.length > 0) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/diagnosa/destroy>",

method: 'POST',

dataType: "json",

data: {

ids: arrayData,

pelayanan_id: \$('input\[name="Diagnosa\[pelayanan_id\]"\]').val(),

\_token: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"

},

success: function(data) {

alert(data.message, data.status);

\$(obj).removeClass('loading');

if (data.status == 'success') {

\$('#form_create').removeClass('changed-input');

name.map((item, key) => {

\$('input\[name="check\[' + item + '\]"\]').parents('tr').remove();

});

setLansia('update');

}

},

error: function(xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$(obj).removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

}

});

} else {

let options = document.querySelectorAll('#prognosa option');

options.forEach(function(option) {

if (option.id !== 'pilih') {

option.style.display = 'block';

}

});

\$(obj).removeClass('loading');

}

}

\$("#check_all").change(function() {

\$('#tabel_detail tr td input\[type="checkbox"\]').prop('checked', \$(this).prop('checked'));

});

function checkAll(obj) {

\$('#tabel_detail tr td input\[type="checkbox"\]').prop('checked', \$(obj).prop('checked'));

}

\$("input\[name='cari_pelayanan'\]").autocomplete({

delay: 1000,

source: function(request, response) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/diagnosa/create/63860>",

method: "GET",

dataType: "json",

data: {

autocomplete: 'pelayanan',

search: {

'cari_pelayanan': request.term

}

},

success: function(data) {

response(data);

},

error: function(xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

},

focus: function(event, ui) {

\$(this).parent().removeClass('has-success').addClass('has-error');

return false;

},

select: function(event, ui) {

\$(this).parent().removeClass('has-error').addClass('has-success');

\$('input\[name="Diagnosa\[pelayanan_id\]"\]').val(ui.item.id);

setDataPelayanan(ui.item);

},

minLength: 1

});

\$("form\[form-ajax-self\]").each(function() {

\$(this).on('submit', function(event) {

event.preventDefault();

var button_submit = \$(this).find('button\[type=submit\]');

button_submit.addClass('loading');

\$.ajax({

url: \$(this).attr('action'),

method: \$(this).attr('method'),

dataType: "json",

data: \$(this).serialize(),

success: function(data) {

alert(data.message, data.status);

button_submit.removeClass('loading');

if (data?.statusbelumskrining == "belum skrining pcare") {

popUpBpjsBelumSkrining()

return false

}

if (data.updateSkriningPtm) {

setPtm();

}

if (data.updateSkriningLansia) {

setLansia();

}

if (data.status == 'success') {

\$('#form_create').removeClass('changed-input');

\$('#button_add_data').addClass('hidden');

button_submit.addClass('hidden');

}

},

error: function(xhr, ajaxOptions, thrownError) {

if (xhr.status != 400) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

}

button_submit.removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

}

});

});

});

function setPtm() {

Swal.fire({

type: 'info',

title: 'Perbaharui Data Skrining Penyakit Tidak Menular',

text: 'Data Diagnosa Skrining PTM akan diperbaharui oleh diagnosa yang sudah diiput.',

}).then((result) => {

if (result.value) {

\$.ajax({

url: \$('#form_create').attr('action'),

method: \$('#form_create').attr('method'),

dataType: "json",

data: {

pelayanan_id: \$(

'input\[name="Diagnosa\[pelayanan_id\]"\]')

.val(),

updatePtm: 1,

\_token: 'r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP'

},

success: function(data) {

Swal.fire(

'Berhasil!',

data.message,

'success'

)

},

error: function(xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

button_submit.removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

}

});

}

})

}

function setLansia(type = '') {

if (type == 'update') {

\$.ajax({

url: \$('#form_create').attr('action'),

method: \$('#form_create').attr('method'),

dataType: "json",

data: {

pelayanan_id: \$('input\[name="Diagnosa\[pelayanan_id\]"\]').val(),

updateLansia: 1,

\_token: 'r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP'

},

success: function(data) {

if (typeof data.id !== 'undefined' && data.id !== null) {

Swal.fire({

type: data.status,

title: 'Perbaharui Data Skrining Lansia',

text: data.message,

});

}

},

error: function(xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

} else {

Swal.fire({

type: 'info',

title: 'Perbaharui Data Skrining Lansia',

text: 'Data Diagnosa Skrining Lansia sudah diperbaharui sesuai dengan diagnosa yang sudah diinput.',

});

}

}

function postICare() {

let dokter = ""

if (!dokter) {

alert('Silahkan isi halaman Anamnesa terlebih dahulu!', 'danger')

return

}

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/getriwayaticare>",

method: \$('#form_create').attr('method'),

dataType: "json",

data: {

dokter_id: dokter,

no_asuransi: "0002060612818",

\_token: 'r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP'

},

success: function(data) {

if (data.status == 'success') {

window.open(data.url);

} else {

alert(data.message, data.status)

}

},

error: function(xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

}

&lt;/script&gt;

&lt;/div&gt;&lt;/section&gt;&lt;ul id="ui-id-1" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style="display: none;"&gt;&lt;/ul&gt;&lt;div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"&gt;&lt;/div&gt;

&lt;span id="top-link-block" class=""&gt;

&lt;a href="#top" onclick="\$('html,body').animate({scrollTop:0},'slow');return false;" data-toggle="tooltip" title="" data-original-title="Kembali Ke Atas!"&gt;

&lt;i id="icon_back" class="affix btn-lg btn-circle btn-info glyphicon glyphicon-chevron-up" style="margin-top:1116px;margin-left:1225px;z-index:1000;"&gt;&lt;/i&gt;

&lt;/a&gt;

&lt;/span&gt;

&lt;!-- Posisi belum baik &gt;> &lt;footer class="footer"&gt;&lt;br&gt;

&lt;div class="container-fluid"&gt;

&lt;p&gt;

Infokes Indonesia © 2026 - &lt;b&gt;ePuskesmas&lt;/b&gt; &lt;sup&gt;2.0&lt;/sup&gt;

&lt;/p&gt;

&lt;/div&gt;

&lt;/footer&gt;

\-->

&lt;!-- primary modal --&gt;

&lt;div id="modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal"&gt;

&lt;div class="modal-dialog" role="document"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-header"&gt;

&lt;button type="button" class="close" data-dismiss="modal" aria-label="Close"&gt;&lt;span aria-hidden="true"&gt;×&lt;/span&gt;&lt;/button&gt;

&lt;h5 class="modal-title"&gt;Memuat... &lt;!-- content replaced by AJAX --&gt;&lt;/h5&gt;

&lt;/div&gt;

&lt;div class="modal-form"&gt;

&lt;!-- content replaced by AJAX --&gt;

&lt;div class="modal-body loading-lg"&gt;&lt;/div&gt;

&lt;div class="modal-footer"&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div id="modal_notif" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal"&gt;

&lt;div class="modal-dialog" role="document"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-header"&gt;

&lt;button id="btn_close_suspend" type="button" class="close" data-dismiss="modal" aria-label="Close"&gt;&lt;span aria-hidden="true"&gt;×&lt;/span&gt;&lt;/button&gt;

&lt;h5 class="modal-title"&gt;Memuat... &lt;!-- content replaced by AJAX --&gt;&lt;/h5&gt;

&lt;/div&gt;

&lt;div class="modal-form"&gt;

&lt;!-- content replaced by AJAX --&gt;

&lt;br&gt;&lt;br&gt;

&lt;div class="modal-body loading-lg"&gt;&lt;/div&gt;

&lt;div class="modal-footer"&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div id="modal_notif_bridging" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal"&gt;

&lt;div class="modal-dialog" role="document"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-header btn-warning"&gt;

&lt;button id="btn_close_bridging" type="button" class="close" data-dismiss="modal" aria-label="Close"&gt;&lt;span aria-hidden="true"&gt;×&lt;/span&gt;&lt;/button&gt;

&lt;h5 class="modal-title"&gt;Memuat... &lt;!-- content replaced by AJAX --&gt;&lt;/h5&gt;

&lt;/div&gt;

&lt;div class="modal-form"&gt;

&lt;!-- content replaced by AJAX --&gt;

&lt;div class="modal-body loading-lg"&gt;&lt;/div&gt;

&lt;div class="modal-footer"&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div id="modal_notif_broadcast_notifikasi" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal"&gt;

&lt;div class="modal-dialog" role="document"&gt;

&lt;div class="modal-content" style="border-radius: 25px!important"&gt;

&lt;div class="modal-header btn-warning" style="border-radius: 25px 25px 0px 0px"&gt;

&lt;button type="button" class="close" data-dismiss="modal" aria-label="Close"&gt;&lt;span aria-hidden="true"&gt;×&lt;/span&gt;&lt;/button&gt;

&lt;h5&gt;&lt;i class="fa fa-info" style="font-size: 28px;color: black"&gt; &lt;/i&gt; &lt;span class="modal-title" style="font-size: 18px;color: black"&gt;Notifikasi&lt;/span&gt;&lt;/h5&gt;

&lt;/div&gt;

&lt;div class="modal-form"&gt;

&lt;div class="modal-body loading-lg"&gt;&lt;/div&gt;

&lt;div class="modal-footer"&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div id="modal_loading" class="modal custom-popup" tabindex="-1" role="dialog" aria-labelledby="modal" data-backdrop="static" style="display: none;"&gt;

&lt;div class="modal-dialog mdl-556" role="document" style="min-height: 100%;display:flex;align-items: center;justify-content: center;"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-form"&gt;

&lt;!-- content replaced by AJAX --&gt;

&lt;div class="modal-body modal-form text-center"&gt;

&lt;img src="<https://kotakediri.epuskesmas.id/images/spinner.svg>" alt=""&gt;

&lt;div class="body-text"&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;style type="text/css"&gt;

# modalBantuan {

position: fixed;

z-index: 99998;

height: 52px;

width: 52px;

background-color: #25d366;

text-align: center;

bottom: 5%;

left: 2%;

border-radius: 50%;

font-size: 40px;

}

# modalBantuan > i {

color: white;

padding-top: 5px;

}

&lt;/style&gt;

&lt;div id="modalBantuan" data-toggle="tooltip" title="" data-original-title="Bantuan"&gt;&lt;i class="fa fa-whatsapp"&gt;&lt;/i&gt;&lt;/div&gt;

&lt;script type="text/javascript"&gt;

function openBantuan(){

Swal.fire({

title: 'Apakah anda membutuhkan bantuan dari Team Customer Support?',

type: 'info',

showCancelButton: true,

confirmButtonColor: '#3085d6',

cancelButtonColor: '#d33',

confirmButtonText: 'Ya',

cancelButtonText: 'Tidak'

}).then((result) => {

if (result.value) {

let notif_wa = "<https://api.whatsapp.com/send/?phone=6281234422237&text=Hi,%20Saya%20pengguna%20ePuskesmas:%20dr.%20FERDI%20ANDRISKA%20SH.%20MKN.%20C.LM,%20Dokter%20Umum%20(ferdi-balowerti)%20-%2000001033231%20BALOWERTI%20-%20KOTA%20KEDIRI%20memerlukan%20bantuan%20anda!&app_absent=0>"

window.open(notif_wa);

}

});

}

\$("#modalBantuan").mousedown(function() {

isDragging = false;

}).mousemove(function() {

isDragging = true;

}).mouseup(function() {

var wasDragging = isDragging;

isDragging = false;

if (!wasDragging) {

openBantuan();

}

});

dragElement(document.getElementById("modalBantuan"));

function dragElement(elmnt) {

var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

if (document.getElementById(elmnt.id + "header")) {

document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;

} else {

elmnt.onmousedown = dragMouseDown;

}

function dragMouseDown(e) {

e = e || window.event;

e.preventDefault();

pos3 = e.clientX;

pos4 = e.clientY;

document.onmouseup = closeDragElement;

document.onmousemove = elementDrag;

}

function elementDrag(e) {

e = e || window.event;

e.preventDefault();

pos1 = pos3 - e.clientX;

pos2 = pos4 - e.clientY;

pos3 = e.clientX;

pos4 = e.clientY;

elmnt.style.top = (elmnt.offsetTop - pos2) + "px";

elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

}

function closeDragElement() {

document.onmouseup = null;

document.onmousemove = null;

}

}

var modalBantuanDrag = document.getElementById('modalBantuan');

modalBantuanDrag.addEventListener('touchmove', function(event) {

event.preventDefault();

if (event.targetTouches.length == 1) {

var touch = event.targetTouches\[0\];

modalBantuanDrag.style.left = touch.pageX + 'px';

modalBantuanDrag.style.top = touch.pageY + 'px';

}

}, {passive: true});

&lt;/script&gt;

&lt;script type="text/javascript"&gt;

&lt;/script&gt;

&lt;script type="text/javascript"&gt;

var date = new Date();

var tanggal = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 59);

var bulan = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0);

var tahun = new Date(date.getFullYear(), 1, 0, 0, 0);

var tanggal_min = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 00, 00, 00, 00);

var sistole_diastole_anamnesa = "";

var default_sistole = "";

var default_diastole = "";

&lt;/script&gt;

&lt;!-- Custom JS --&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/scrollspy.min.js>" type="text/javascript"&gt;&lt;/script&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/custom.min.js?v=2.4.0"&gt;&lt;/script>&gt;

&lt;!-- App Layout JS --&gt;

&lt;script type="text/javascript"&gt;

// Configure AppLayoutConfig for app-layout.js

window.AppLayoutConfig = {

csrfToken: "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP",

hasNewMenu: false,

isKioskEnabled: false,

isInkoppolOnly: false,

conversationId: typeof conversation_id !== 'undefined' ? conversation_id : '',

kioskConfigs: {

pendaftaran: "1",

panggilan: "1",

monitor: "1"

},

showBridgingNotif: true,

message_skrining: 'null',

text_message: 'null',

text_status: 'null',

routes: {

changeSessionMenu: "<https://kotakediri.epuskesmas.id/home/changesessionmenu>",

sinkronPendaftaranBpjs: "<https://kotakediri.epuskesmas.id/pendaftaran/sinkronPendaftaranBpjs>"

},

urls: {

showUpdateLog: "<https://kotakediri.epuskesmas.id/updatelog/showupdatelog>",

showNotif: "<https://kotakediri.epuskesmas.id/mpuskesmas/shownotif>",

showNotifBridging: "<https://kotakediri.epuskesmas.id/home/shownotifbridging>",

gagalBridgingCount: "<https://kotakediri.epuskesmas.id/home/gagalbridgingcount>",

showRiwayatPelayanan: "<https://kotakediri.epuskesmas.id/pelayanan/showriwayatpelayanan>",

showRiwayatKunjunganBpjs: "<https://kotakediri.epuskesmas.id/pelayanan/showriwayatkunjunganbpjs>",

getRiwayatKunjunganBpjs: "<https://kotakediri.epuskesmas.id/pelayanan/getriwayatkunjunganbpjs>",

setSessionWebSocket: "<https://kotakediri.epuskesmas.id/home/setsessionwebsocket>",

skriningBpjs: "<https://webskrining.bpjs-kesehatan.go.id/skrining>"

},

messages: {

prosesGagal: "Terjadi kesalahan sistem, silahkan hubungi team support kami!",

belumSkriningBpjs: "Peserta belum mengisi skrining riwayat kesehatan"

},

webSocket: {

enabled: false,

configNotif: false,

connection: 'wss://:',

session: "started",

puskesmasId: "00001033231_home",

maxChar: 20

}

};

&lt;/script&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/app-layout.min.js?v=1.0"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/pagination.min.js?v=1.1"&gt;&lt;/script>&gt;

&lt;script&gt;

\$(\`#checkEnvConfig\`).html('&lt;center&gt;Dashboard antrian realtime belum di setting&lt;/center&gt;');

\$(\`#checkEnvConfigRanap\`).html('&lt;center&gt;Dashboard rawat inap realtime belum di setting&lt;/center&gt;');

&lt;/script&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/vue.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/axios.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/axios.min.map>" type="application/json"&gt;&lt;/script&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/lodash.min.js"&gt;&lt;/script>&gt;

&lt;script type="text/x-template" id="modal-add-file"&gt;

&lt;div class="modal fade" role="dialog"&gt;

&lt;div class="modal-dialog modal-dialog-centered modal-lg"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-header"&gt;

&lt;button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="clearField"&gt;×&lt;/button&gt;

&lt;h4 class="modal-title pull-left"&gt;Tambah Foto Baru&lt;/h4&gt;

&lt;/div&gt;

&lt;div class="modal-body"&gt;

&lt;div class="row"&gt;

&lt;div class="main-form-container"&gt;

&lt;form class="form-horizontal" role="form"&gt;

&lt;div class="form-wrapper"&gt;

&lt;div class="alert alert-danger" role="alert" v-if="error.status"&gt;

&lt;i class="fa fa-exclamation-circle" aria-hidden="true"&gt;&lt;/i&gt; &lt;font style="color:black;"&gt;\${error.message}&lt;/font&gt;

&lt;/div&gt;

&lt;div class="form-group" style="margin-bottom: 0px;" v-if="isTakeFile"&gt;

&lt;label class="col-sm-3 control-label"&gt;Foto/Dokumen &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;img class="img-fluid img-thumbnail pull-left" :src="url" width="45%" v-if="url"&gt;

&lt;template v-else-if="pdf" class="pull-left"&gt; \${pdf}&lt;/template&gt;

&lt;div class="fileUpload btn btn-info btn-block bordered" v-else&gt;

&lt;span&gt;&lt;i class="fa fa-plus" aria-hidden="true"&gt;&lt;/i&gt; Unggah / ambil foto&lt;/span&gt;

&lt;input type="file" ref="fileUpload" class="upload" Accept="image/jpg,image/jpeg,image/png,application/pdf" @change="onFileChange"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group" v-if="isTakeFile"&gt;

&lt;label class="col-sm-3 control-label"&gt; &lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;span id="helpBlock" class="help-block pull-left"&gt;Format jpg, jpeg, png, & pdf. Ukuran file maksimal 2 MB.&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group" style="margin-bottom: 0px;" v-if="isTakePhoto"&gt;

&lt;label class="col-sm-3 control-label"&gt;Buka Kamera &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;div class="web-camera-container"&gt;

&lt;div class="camera-button"&gt;

&lt;button type="button" class="btn bordered" :class="{ 'btn-success' : !isCameraOpen, 'btn-danger' : isCameraOpen}" @click="toggleCamera"&gt;

&lt;span v-if="!isCameraOpen"&gt;Buka Kamera&lt;/span&gt;

&lt;span v-else&gt;Tutup Kamera&lt;/span&gt;

&lt;/button&gt;

&lt;/div&gt;

&lt;div v-show="isCameraOpen && isLoading" class="camera-loading"&gt;

&lt;ul class="loader-circle"&gt;

&lt;li&gt;&lt;/li&gt;

&lt;li&gt;&lt;/li&gt;

&lt;li&gt;&lt;/li&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash' : isShotPhoto }"&gt;

&lt;div class="camera-shutter" :class="{'flash' : isShotPhoto}"&gt;&lt;/div&gt;

&lt;video v-show="!isPhotoTaken" ref="camera" :width="450" :height="337.5" autoplay&gt;&lt;/video&gt;

&lt;canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"&gt;&lt;/canvas&gt;

&lt;/div&gt;

&lt;div v-if="isCameraOpen && !isLoading" class="camera-shoot"&gt;

&lt;button type="button" class="button" @click="takePhoto"&gt;

&lt;i class="fa fa-camera" aria-hidden="true"&gt;&lt;/i&gt;

&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label"&gt;Judul &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;input type="text" class="form-control input-sm" placeholder="Judul foto/dokumen" maxlength="32" v-model="form.title"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label"&gt;Deskripsi&lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;textarea rows="5" class="form-control" v-model="form.description" placeholder="Deskripsi foto/dokumen"&gt;&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;button type="button" class="btn btn-warning" :class="{'loading': isLoading}" @click="clearField()"&gt;Reset&lt;/button&gt;

&lt;button type="button" class="btn btn-primary" :class="{'loading': isLoading}" @click="submitFile"&gt;Simpan Foto&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/script&gt;

&lt;script&gt;

Vue.component('modal-add-file', {

delimiters: \['\${', '}'\],

template: '#modal-add-file',

props: \['pelayanan'\],

data() {

return {

url: null,

pdf: null,

error: {

status: false,

message: null

},

form: {},

isTakeFile: true,

isTakePhoto: true,

isCameraOpen: false,

isPhotoTaken: false,

isShotPhoto: false,

isLoading: false,

link: '#'

}

},

created() {

this.clearField()

},

methods: {

clearField() {

this.error.status = false

this.error.message = null

this.url = null

this.pdf = null

this.form = {}

this.isTakeFile = true

this.isTakePhoto = true

if (this.isCameraOpen) {

this.isCameraOpen = false

this.isPhotoTaken = false

this.isShotPhoto = false

this.stopCameraStream()

}

},

onFileChange(e) {

this.error.status = false

this.error.message = null

const mimes = \['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'\]

let type = ''

let name = ''

if (e.target.files.length > 0) {

for (let i = 0; i <= e.target.files.length - 1; i++) {

const fsize = e.target.files.item(i).size

const file = Math.round((fsize / 1024))

type = e.target.files.item(i).type

name = e.target.files.item(i).name

if (file > 2048) {

this.error.status = true

this.error.message = 'Ukuran file tidak boleh lebih dari 2 MB'

}

if (!mimes.includes(type)) {

this.error.status = true

this.error.message = 'File yang diijinkan adalah jpeg, jpg, png, pdf'

}

}

}

if (this.error.status == true) {

this.\$refs.fileUpload.value = null

return false

}

this.form.file = e.target.files\[0\]

if (type == 'application/pdf') {

this.pdf = name

} else {

this.url = URL.createObjectURL(this.form.file)

}

this.isTakePhoto = false

},

submitFile() {

this.isLoading = true

this.error.status = false

if (!this.form.file) {

this.error.status = true

this.error.message = 'File harus diisi'

} else if (!this.form.title) {

this.error.status = true

this.error.message = 'Judul foto harus diisi'

} else if (!this.pelayanan) {

this.error.status = true

this.error.message = 'Pelayanan ID harus diisi'

}

if (this.error.status == true) {

this.isLoading = false

return false

}

let formData = new FormData()

formData.append('file', this.form.file)

formData.append('pelayanan_id', this.pelayanan)

formData.append('title', this.form.title)

formData.append('description', this.form.description ?? '')

axios.post("<https://kotakediri.epuskesmas.id/attachment/store>", formData, {

headers: {

'X-CSRF-Token': "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP",

'Content-Type': 'multipart/form-data'

},

})

.then((response) => {

let message = ''

let status = 'success'

if (response.data?.data?.id || response.data?.attachment?.id) {

message = 'Upload file berhasil.'

}

alert(message, status)

this.clearField()

this.\$emit('imagehasadded', {status: 'close'})

})

.catch((err) => {

let message = ''

let status = 'danger'

if (err.response?.data?.errorCode) {

message = err.response.data.message

status = 'danger'

}

else if (err.response?.data?.meta?.message) {

message = err.response.data.meta.message

if (err.response.data.meta.status) {

status = err.response.data.meta.status

}

}

alert(message, status)

})

.finally(() => {this.isLoading = false})

},

toggleCamera() {

if (this.isCameraOpen) {

this.isTakeFile = true

this.isCameraOpen = false

this.isPhotoTaken = false

this.isShotPhoto = false

this.stopCameraStream()

} else {

this.isTakeFile = false

this.isCameraOpen = true

this.createCameraElement()

}

},

createCameraElement() {

this.isLoading = true

const constraints = (window.constraints = {

audio: false,

video: true

})

navigator.mediaDevices.getUserMedia(constraints).then(stream => {

this.isLoading = false

this.\$refs.camera.srcObject = stream

}).catch(error => {

this.isLoading = false

alert("May the browser didn't support or there is some errors.")

})

},

stopCameraStream() {

let tracks = this.\$refs.camera.srcObject.getTracks()

tracks.forEach(track => {

track.stop()

})

},

takePhoto() {

if (!this.isPhotoTaken) {

this.isShotPhoto = true

const FLASH_TIMEOUT = 50

setTimeout(() => {

this.isShotPhoto = false

}, FLASH_TIMEOUT)

}

this.isPhotoTaken = !this.isPhotoTaken

const context = this.\$refs.canvas.getContext('2d')

context.drawImage(this.\$refs.camera, 0, 0, 450, 337.5)

const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")

fetch(canvas)

.then(response => response.blob())

.then((res) => {

this.form.file = res

this.url = URL.createObjectURL(res)

})

}

}

})

&lt;/script&gt;

&lt;script type="text/x-template" id="modal-upload-file"&gt;

&lt;div class="modal fade" role="dialog"&gt;

&lt;div class="modal-dialog modal-dialog-centered modal-lg"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-header"&gt;

&lt;button type="button" class="close" data-dismiss="modal" aria-label="Close"&gt;×&lt;/button&gt;

&lt;h4 class="modal-title pull-left"&gt;Gallery Foto&lt;/h4&gt;

&lt;/div&gt;

&lt;div class="modal-body"&gt;

&lt;div class="row"&gt;

&lt;div class="main-form-container"&gt;

&lt;div class="col-md-8"&gt;

&lt;div class="form-group"&gt;

&lt;div class="panel"&gt;

&lt;div class="panel-body"&gt;

&lt;template v-if="imageSelected.mime != 'application/pdf' && imageSelected.file_path"&gt;

&lt;img :src="'data:image/jpg/png/jpeg;base64,' + imageSelected.file_path" class="img-box" alt=""/&gt;

&lt;/template&gt;

&lt;template v-else-if="imageSelected.mime == 'application/pdf'"&gt;

&lt;img class="img-fluid img-thumbnail thumbnail" src="<https://kotakediri.epuskesmas.id/images/pdf.png>" alt=""&gt;

&lt;/template&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;div class="panel"&gt;

&lt;div class="panel-body"&gt;

&lt;ul class="images"&gt;

&lt;li v-for="(image, index) in images"&gt;

&lt;a href="javascript:;" v-if="image.id && image.mime.includes('image')"&gt;

&lt;img :src="'data:image/jpg/png/jpeg;base64,' + image.file_path" width="100" height="100" @click="showImage(image.id)"/&gt;

&lt;/a&gt;

&lt;a href="javascript:;" v-else-if="image.id && image.mime.includes('application')"&gt;

&lt;img src="<https://kotakediri.epuskesmas.id/images/pdf.png>" width="100" height="100" @click="showImage(image.id)"&gt;

&lt;/a&gt;

&lt;/li&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4"&gt;

&lt;div class="form-group"&gt;

&lt;div class="panel"&gt;

&lt;div class="panel-body panel-fixed"&gt;

&lt;div class="border-box"&gt;

&lt;p class="left"&gt;&lt;strong&gt;Tanggal Diambil&lt;/strong&gt;&lt;br&gt;\${imageSelected.created_at | dateLong}&lt;/p&gt;

&lt;hr/&gt;

&lt;p class="left"&gt;&lt;strong&gt;Judul&lt;/strong&gt;&lt;br&gt;&lt;i class="fa fa-file" aria-hidden="true"&gt;&lt;/i&gt; \${imageSelected.title}&lt;/p&gt;

&lt;hr/&gt;

&lt;p class="left"&gt;&lt;strong&gt;Deskripsi&lt;/strong&gt;&lt;br&gt;\${imageSelected.description}&lt;/p&gt;

&lt;br&gt;

&lt;a href="javascript:;" class="center" :class="{'loading': isLoading}" style="color: #D3555C" @click="destroyFile(imageSelected.id)"&gt;

&lt;i class="fa fa-trash" aria-hidden="true"&gt;&lt;/i&gt; Hapus Foto

&lt;/a&gt;

&lt;a href="javascript:;" class="left" :class="{'loading': isLoading}" style="color: #1f91f3" @click="downloadFile(imageSelected.id)" v-if="imageSelected.mime == 'application/pdf'"&gt;

&lt;i class="fa fa-download" aria-hidden="true"&gt;&lt;/i&gt; Unduh File

&lt;/a&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;button type="button" class="btn btn-primary" @click="addNewPhoto"&gt;Tambah Foto Baru&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/script&gt;

&lt;script&gt;

Vue.component('modal-upload-file', {

delimiters: \['\${', '}'\],

template: '#modal-upload-file',

data() {

return {

form: {},

imageSelected: {},

images: \[\],

isLoading: false,

}

},

created() {

busGallery.\$on('dataImages', (image, images) => {

this.imageSelected = image

this.images = images

})

},

filters: {

dateLong: function (date) {

return new Date(date).toLocaleDateString('id-ID', {

year: 'numeric',

month: 'long',

day: 'numeric',

})

},

decrypt: function (data) {

// console.log('data1')

// console.log(data)

// if (data) {

// return atob(data)

// }

}

},

methods: {

addNewPhoto() {

this.\$emit('imagehasdeleted', {action: 'addPhoto' })

},

uploadFile() {

const file = this.\$refs.fileInput.files\[0\]

},

showImage(id) {

this.imageSelected = this.images.find(image => image.id == id)

},

destroyFile(id) {

Swal.fire({

type: 'warning',

customClass: 'swal-wide-gallery',

showCancelButton: true,

cancelButtonColor: '#d33',

confirmButtonColor: '#3085d6',

confirmButtonText: 'Ya',

cancelButtonText: 'Batal',

html: \`&lt;br&gt;&lt;span style='font-size:15px;'&gt;apakah anda yakin akan menghapus file ini?&lt;/span&gt;\`,

}).then((result) => {

if(result.value){

this.isLoading = true

let url = '<https://kotakediri.epuskesmas.id/attachment/:attachment/destroy>'

url = url.replace(':attachment', id)

axios.post(url, {}, {

headers: {'X-CSRF-Token': "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"},

})

.then(response => {

let message = ''

let action = 'success'

if (response.data.message) {

message = response.data.message

}

if (response.data.status) {

status = response.data.status

}

alert(message, status)

})

.catch((err) => {

let message = ''

let status = 'danger'

if (err.response.data.meta.message) {

message = err.response.data.meta.message

}

if (err.response.data.meta.status) {

status = err.response.data.meta.status

}

alert(message, status)

})

.finally(() => {

this.isLoading = false

this.\$emit('imagehasdeleted', {status: 'close'}

)})

}

})

},

downloadFile(id) {

this.isLoading = true

let url = '<https://kotakediri.epuskesmas.id/attachment/:attachment/download>'

url = url.replace(':attachment', id)

axios.post(url, {}, {

responseType: 'blob',

})

.then(response => {

let link = document.createElement('a')

link.href = window.URL.createObjectURL(new Blob(\[response.data\], { type: 'application/pdf' }))

link.download = response.headers\['content-disposition'\].split('filename=')\[1\].replace(/\['"\]/g, '')

link.click()

})

.catch((err) => {

let message = 'Unduh file gagal '+err

let status = 'danger'

if (err.response?.status == '401') {

status = 'danger'

message = 'Anda tidak berhak mengakses aksi ini'

}

alert(message, status)

})

.finally(() => {this.isLoading = false})

}

}

})

&lt;/script&gt;

&lt;script&gt;

window.\$ = jQuery

window.\$jQuery = jQuery

axios.defaults.headers = {

'Content-Type': 'application/json',

'Accept': 'application/json',

'X-Requested-With': 'XMLHttpRequest'

}

const busGallery = new Vue()

const gallery = new Vue({

delimiters: \['\${', '}'\],

data() {

return {

images: \[\],

pelayanan: 63860,

}

},

created() {

this.getImages()

},

filters: {

decrypt: function (data) {

// console.log('data')

// console.log(data)

// return atob(data)

}

},

methods: {

async getImages(fromAddPage = false) {

await axios.post("<https://kotakediri.epuskesmas.id/attachment/index>", {

pelayanan_id: this.pelayanan,

}, {

headers: {'X-CSRF-Token': "r23hRPVYfbNBtOovoPp8z57QmR9BB8z41GZPDgNP"},

})

.then(response => {

this.images = response.data

this.images.push({

id: ''

})

if (fromAddPage) {

this.showGallery(this.images\[0\], this.images)

}

})

.catch((err) => {console.error(err)})

.finally(() => {})

},

addFileForm() {

let element = this.\$refs.modal_add_foto.\$el

\$(element).modal({backdrop: 'static', keyboard: false})

},

showGallery(image, images) {

busGallery.\$emit('dataImages', image, images)

let element = this.\$refs.modal_upload_foto.\$el

\$(element).modal({backdrop: 'static', keyboard: false})

},

eventImageAdded(e) {

let element = this.\$refs.modal_add_foto.\$el

\$(element).modal('hide')

this.getImages(true)

},

eventImageDeleted(e) {

let element = this.\$refs.modal_upload_foto.\$el

\$(element).modal('hide')

if (e.action == 'addPhoto') {

this.addFileForm()

} else {

this.getImages()

}

},

}

})

\$(document).ready(function(){

gallery.\$mount('#galleryApp')

})

\$(document).on('ready pjax:success', function(){

setTimeout(function() {

window.location.reload()

}, 1000)

})

&lt;/script&gt;

&lt;script&gt;(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.\__CF\$cv\$params={r:'9c8294d6a9f45dd2',t:'MTc3MDEyODU1Ny4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')\[0\].appendChild(a);";b.getElementsByTagName('head')\[0\].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();&lt;/script&gt;&lt;iframe height="1" width="1" style="position: absolute; top: 0px; left: 0px; border: none; visibility: hidden;"&gt;&lt;/iframe&gt;

&lt;/body&gt;

**RESEP**

&lt;html lang="id"&gt;&lt;head&gt;

&lt;meta charset="utf-8"&gt;

&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;

&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;

&lt;meta name="robots" content="noindex, follow"&gt;

&lt;link rel="shortcut icon" type="image/png" href="<https://kotakediri.epuskesmas.id/images/favicon.png>"&gt;

&lt;title&gt;e-Puskesmas - Resep - Buat Baru&lt;/title&gt;

&lt;!-- Bootstrap core CSS --&gt;

&lt;link href="<https://kotakediri.epuskesmas.id/lib/bootstrap/css/bootstrap.min.css>" type="text/css" rel="stylesheet"&gt;

&lt;!-- Font Awesome --&gt;

&lt;link href="<https://kotakediri.epuskesmas.id/lib/font-awesome/css/font-awesome.min.css>" type="text/css" rel="stylesheet"&gt;

&lt;link href="<https://kotakediri.epuskesmas.id/lib/infokes-font/css/infokes_font.css>" type="text/css" rel="stylesheet"&gt;

&lt;!-- Datetime picker --&gt;

&lt;link href="<https://kotakediri.epuskesmas.id/lib/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css>" type="text/css" rel="stylesheet"&gt;

&lt;!-- Custom CSS --&gt;

&lt;link href="<https://kotakediri.epuskesmas.id/css/custom.min.css?v=1>" type="text/css" rel="stylesheet"&gt;

&lt;link rel="stylesheet" type="text/css" href="<https://kotakediri.epuskesmas.id/css/epusv3-style.css?v=3.9>"&gt;

&lt;link href="<https://kotakediri.epuskesmas.id/lib/jquery-ui/css/jquery-ui-autocomplete.min.css>" type="text/css" rel="stylesheet"&gt;

&lt;link href="<https://kotakediri.epuskesmas.id/lib/laporan/master_style.css>" type="text/css" rel="stylesheet"&gt;

&lt;style type="text/css"&gt;

# notif-connection-bpjs{

z-index: 999999;

background-color: #fde2a5;

display: initial;

position: fixed;

left: 3%;

bottom: 30px;

padding: 10px;

width: 18%;

}

# x-close {

position: absolute;

border-radius: 22px;

background: red;

color: white;

top: -10px;

right: -10px;

}

@media only screen and (max-width: 450px) {

# notif-connection-bpjs{

width: 92%;

}

}

.hidden {

display: none !important;

}

div.phpdebugbar-widgets-sqlqueries li.phpdebugbar-widgets-list-item.phpdebugbar-widgets-sql-duplicate {

background-color: yellow !important;

}

.validatecurrency {

text-align: right;

}

.modal-new-menu-card {

margin: 20px 20px;

}

.img-modal-new-menu {

width: 359px;

height: 216px;filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.05));

padding-bottom: 10px;

}

.card-newMenu {

text-align: left;

box-sizing: border-box;

border: 1px solid #DDDDDD;

box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);

border-radius: 10px;

}

.newMenu-warning {

position: absolute;

top: -5px;

left: 5px;

width: 24px;

height: 24px;

border-radius: 100%;

font-size: 17px;

background: orange;

}

.badge-new-menu {

background: red;

margin-left: 3px;

font-size: 10px;

position: absolute;

}

.btn:not(.btn-link):not(.btn-circle).btn-primary.bordered {

background-color: #fff !important;

color: #007BFF;

border: 1px solid #007BFF;

}

.btn-gray {

background-color: #B6B6B6;

color: #fff;

border: 1px solid #B6B6B6;

}

.swal2-styled.swal2-confirm {

border: 1px solid #007BFF;

color: #FFF;

background-color: #007BFF;

width: 300px;

}

&lt;/style&gt;

&lt;link href="<https://kotakediri.epuskesmas.id/lib/select2/css/select2.min.css>" type="text/css" rel="stylesheet"&gt;

&lt;link href="<https://kotakediri.epuskesmas.id/css/upload-foto.css>" type="text/css" rel="stylesheet"&gt;

&lt;script&gt;

const isEpuskesmas = () => "1";

&lt;/script&gt;&lt;style&gt;@charset "UTF-8";@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon::before{display:flex;align-items:center;font-size:2em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon::before{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error \[class^=swal2-x-mark-line\]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error \[class^=swal2-x-mark-line\]\[class\$=left\]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error \[class^=swal2-x-mark-line\]\[class\$=right\]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success \[class^=swal2-success-circular-line\]{position:absolute;width:1.6em;height:3em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success \[class^=swal2-success-circular-line\]\[class\$=left\]{top:-.8em;left:-.5em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success \[class^=swal2-success-circular-line\]\[class\$=right\]{top:-.25em;left:.9375em;-webkit-transform-origin:0 1.5em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success \[class^=swal2-success-line\]{height:.3125em}.swal2-popup.swal2-toast .swal2-success \[class^=swal2-success-line\]\[class\$=tip\]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success \[class^=swal2-success-line\]\[class\$=long\]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}@-webkit-keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em \* 2);background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;background-color:transparent;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled\[disabled\]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:"";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not(\[disabled\]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{-webkit-transform:none;transform:none;background:0 0;color:#f27474}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;word-wrap:break-word}#swal2-content{text-align:center}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:inherit}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input\[type=number\]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:inherit;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;zoom:normal;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;zoom:normal;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon::before{display:flex;align-items:center;height:92%;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error \[class^=swal2-x-mark-line\]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error \[class^=swal2-x-mark-line\]\[class\$=left\]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error \[class^=swal2-x-mark-line\]\[class\$=right\]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning::before{content:"!"}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info::before{content:"i"}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question::before{content:"?"}.swal2-icon.swal2-question.swal2-arabic-question-mark::before{content:"؟"}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success \[class^=swal2-success-circular-line\]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success \[class^=swal2-success-circular-line\]\[class\$=left\]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success \[class^=swal2-success-circular-line\]\[class\$=right\]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success \[class^=swal2-success-line\]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success \[class^=swal2-success-line\]\[class\$=tip\]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success \[class^=swal2-success-line\]\[class\$=long\]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}\[class^=swal2\]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>\[aria-hidden=true\]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}&lt;/style&gt;&lt;style&gt;

.loader {

display: flex;

align-items: center;

}

.bar {

display: inline-block;

width: 1px;

height: 5px;

background-color: rgba(255, 255, 255, .5);

border-radius: 10px;

animation: scale-up4 1s linear infinite;

}

.bar:nth-child(2) {

height: 10px;

margin: 0 3px;

animation-delay: .25s;

}

.bar:nth-child(3) {

animation-delay: .5s;

}

@keyframes scale-up4 {

20% {

background-color: #ffff;

transform: scaleY(1.5);

}

40% {

transform: scaleY(1);

}

}

&lt;/style&gt;&lt;style&gt;.\__detectfont_elem.\__detectfont_button{height:25px!important;min-height:25px!important;padding:0 10px!important;border-radius:8px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;cursor:pointer!important}.\__detectfont_elem.\__detectfont_button>span{cursor:pointer!important}.\__detectfont_elem.\__detectfont_button>svg{cursor:pointer!important}.\__detectfont_elem.\__detectfont_button svg{height:20px!important;width:20px!important}.\__detectfont_elem.\__detectfont_button.capture.active{border:1px solid rgba(110,164,255,.6)!important;box-shadow:0 0 0 2px rgba(110,164,255,.25),0 6px 16px rgba(0,0,0,.25)!important;background:rgba(110,164,255,.1)!important}&lt;/style&gt;&lt;style&gt;.\__detectfont_elem.\__detectfont_button.settings{display:none!important}&lt;/style&gt;&lt;/head&gt;

&lt;body class="v2-body"&gt;

&lt;script type="text/javascript"&gt;

var cloud_host = "";

localStorage.setItem("epuskesmas-cloud-server", cloud_host);

&lt;/script&gt;

&lt;script type="text/javascript"&gt;

if('serviceWorker' in navigator){

localStorage.removeItem('epuskesmas-cloud-server');

localStorage.removeItem('epuskesmas-connection-status');

navigator.serviceWorker.getRegistrations().then(function(registrations) {

for(let registration of registrations) {

registration.unregister()

}

})

}

&lt;/script&gt;

&lt;div class="bg-loading"&gt;&lt;/div&gt;

&lt;nav class="navbar navbar-default navbar-static-top"&gt;

&lt;div class="container-fluid"&gt;

&lt;a class="navbar-brand" href="<https://kotakediri.epuskesmas.id"&gt;&lt;/a>&gt;

&lt;div class="navbar-header"&gt;

&lt;button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"&gt;

&lt;span class="sr-only"&gt;Toggle navigation&lt;/span&gt;

&lt;span class="fa fa-caret-square-o-down"&gt;&lt;/span&gt;

&lt;/button&gt;

&lt;/div&gt;

&lt;div id="navbar" class="navbar-collapse collapse"&gt;

&lt;ul class="nav navbar-nav "&gt;

&lt;li class="dropdown"&gt;

&lt;a id="menu_pendaftaran" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"&gt;Pendaftaran &lt;span class="caret"&gt;&lt;/span&gt;&lt;/a&gt;

&lt;ul class="dropdown-menu"&gt;

&lt;li&gt;&lt;a id="menu_pendaftaran_pasien" pjax-content="" href="<https://kotakediri.epuskesmas.id/pasien?broadcastNotif=1"&gt;Pasien> & KK&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pendaftaran_pendaftaran" href="<https://kotakediri.epuskesmas.id/pendaftaran?broadcastNotif=1"&gt;Pendaftaran> Pasien&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pendaftaran_rekammedis" href="<https://kotakediri.epuskesmas.id/rekammedis"&gt;Rekam> Medis&lt;/a&gt;&lt;/li&gt;

&lt;li id="kiosk_pendaftaran_feature"&gt;

<a href="javascript:void(0)" onclick="window.open(

'<https://kotakediri.epuskesmas.id/antreanpendaftaran?fullscreen=antrian>',

'Antrian',

'menubar=no,location=no,fullscreen=yes,scrollbars=auto'

);">

Antrean

&lt;/a&gt;

&lt;/li&gt;

&lt;li id="kiosk_panggilan_feature"&gt;

&lt;a id="menu_pendaftaran_rekammedis" href="<https://kotakediri.epuskesmas.id/loket/index>"&gt;

Panggil Antrean

&lt;/a&gt;

&lt;/li&gt;

&lt;/ul&gt;

&lt;/li&gt;

&lt;li class="dropdown"&gt;

&lt;a id="menu_pelayanan" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"&gt;Pelayanan &lt;span class="caret"&gt;&lt;/span&gt;&lt;/a&gt;

&lt;ul class="dropdown-menu"&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Pelayanan&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_medis" href="<https://kotakediri.epuskesmas.id/pelayanan?broadcastNotif=1"&gt;Medis&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_medis_inap" href="<https://kotakediri.epuskesmas.id/pelayananrawatinap?broadcastNotif=1"&gt;Rawat> Inap&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_resep" pjax-content="" href="<https://kotakediri.epuskesmas.id/resep?broadcastNotif=1"&gt;Resep&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_obat_pasien" pjax-content="" href="<https://kotakediri.epuskesmas.id/obatpasien?broadcastNotif=1"&gt;Obat> Pasien&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_penimbangan_balita" pjax-content="" href="<https://kotakediri.epuskesmas.id/penimbanganbalita"&gt;Penimbangan> Balita&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_diare_advokasi" pjax-content="" href="<https://kotakediri.epuskesmas.id/diareadvokasi"&gt;Diare> Advokasi&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Pelayanan Luar Gedung&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_skrininganaksekolah" href="<https://kotakediri.epuskesmas.id/siswa"&gt;Skrining> Anak Sekolah&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_skriningptm" href="<https://kotakediri.epuskesmas.id/skrining/ptm"&gt;Skrining> PTM&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_skrininglansia" href="<https://kotakediri.epuskesmas.id/skrining/lansia"&gt;Skrining> Lansia&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_sinkronisasidatasihepi" href="<https://kotakediri.epuskesmas.id/sinkronisasidatasihepi?type=hepc"&gt;Sinkronisasi> Data Sihepi&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_kegiatankelompok" href="<https://kotakediri.epuskesmas.id/kegiatankelompok"&gt;Kegiatan> Kelompok&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_penyuluhan_bpjs" href="<https://kotakediri.epuskesmas.id/penyuluhan_bpjs"&gt;Sinkronisasi> BPJS - Penyuluhan Kesehatan&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Pemeriksaan&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_laboratorium" pjax-content="" href="<https://kotakediri.epuskesmas.id/laboratorium?broadcastNotif=1"&gt;Laboratorium&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_pemeriksaan_air" pjax-content="" href="<https://kotakediri.epuskesmas.id/pemeriksaanair"&gt;Pemeriksaan> Air&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Pasien Pulang&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_rujukan_external" pjax-content="" href="<https://kotakediri.epuskesmas.id/rujukanexternal"&gt;Rujukan> External&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_pasienmeninggal" pjax-content="" href="<https://kotakediri.epuskesmas.id/pasienmeninggal"&gt;Pasien> Meninggal&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_bayar_tindakan" pjax-content="" href="<https://kotakediri.epuskesmas.id/pembayaran"&gt;Pembayaran&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_daftar_shift" pjax-content="" href="<https://kotakediri.epuskesmas.id/daftarshift"&gt;Daftar> Shift&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_bayar_tindakan" pjax-content="" href="<https://kotakediri.epuskesmas.id/pembayarandetail"&gt;Detail> Transaksi&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Survey Kepuasan/Testimoni Pasien&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_survey" pjax-content="" href="<https://kotakediri.epuskesmas.id/surveytestimoni"&gt;Survey> Kepuasan & Testimoni Pasien&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_survey" pjax-content="" href="<https://kotakediri.epuskesmas.id/surveytestimoni/data"&gt;Pengelolaan> Survey Kepuasan & Testimoni Pasien&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Lroa&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_lroa" pjax-content="" href="<https://kotakediri.epuskesmas.id/lroa"&gt;Lroa&lt;/a&gt;&lt;/li>&gt;

&lt;/ul&gt;

&lt;/li&gt;

&lt;li class="dropdown"&gt;

&lt;a id="menu_pengelolaan" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"&gt;Pengelolaan &lt;span class="caret"&gt;&lt;/span&gt;&lt;/a&gt;

&lt;ul class="dropdown-menu"&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Gudang Farmasi&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_pemesanan_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/pemesananobat"&gt;Pemesanan> Obat&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_penerimaan_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/penerimaanobat"&gt;Penerimaan> Obat&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_stok_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/stokobat"&gt;Stok> Obat&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_stok_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/stokobat/new"&gt;Stok> Obat \*&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_stok_opname" pjax-content="" href="<https://kotakediri.epuskesmas.id/stokopname"&gt;Stok> Opname&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_distribusi_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/distribusiobat"&gt;Distribusi> Obat&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Data Master&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_pegawai" pjax-content="" href="<https://kotakediri.epuskesmas.id/mpegawai"&gt;Pegawai&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_pengguna" pjax-content="" href="<https://kotakediri.epuskesmas.id/user"&gt;Pengguna&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_mruangan" pjax-content="" href="<https://kotakediri.epuskesmas.id/mruangan"&gt;Ruangan&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_mruanganakses" pjax-content="" href="<https://kotakediri.epuskesmas.id/mruanganakses"&gt;Ruangan> Akses&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_puskesmas" pjax-content="" href="<https://kotakediri.epuskesmas.id/mpuskesmas"&gt;Puskesmas&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_master_pbf" pjax-content="" href="<https://kotakediri.epuskesmas.id/mperlengkapan"&gt;Perlengkapan&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_sasaran_program" pjax-content="" href="<https://kotakediri.epuskesmas.id/sasaranprogram"&gt;Sasaran> Program&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_sasaran_proyeksi" pjax-content="" href="<https://kotakediri.epuskesmas.id/sasaranproyeksi"&gt;Sasaran> Proyeksi&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_jadwal" pjax-content="" href="<https://kotakediri.epuskesmas.id/mjadwal"&gt;Jadwal> Pelayanan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pelayanan_bayar_tindakan" pjax-content="" href="<https://kotakediri.epuskesmas.id/shift"&gt;Jadwal> Shift&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_libur" pjax-content="" href="<https://kotakediri.epuskesmas.id/mlibur"&gt;Libur&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_master_tindakan" pjax-content="" href="<https://kotakediri.epuskesmas.id/master/tindakan"&gt;Data> Tindakan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_master_imunisasi" pjax-content="" href="<https://kotakediri.epuskesmas.id/master/imunisasi"&gt;Data> Imunisasi&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_kamar" pjax-content="" href="<https://kotakediri.epuskesmas.id/mkamar"&gt;Kamar> & Bed&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_msekolah" pjax-content="" href="<https://kotakediri.epuskesmas.id/msekolah"&gt;Sekolah&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_asuransi" pjax-content="" href="<https://kotakediri.epuskesmas.id/masuransi"&gt;Asuransi&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_master_laboratorium" pjax-content="" href="<https://kotakediri.epuskesmas.id/mjenislaboratorium"&gt;Laboratorium&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_master_paket_laboratorium" href="<https://kotakediri.epuskesmas.id/mpaketlaboratorium"&gt;Paket> Laboratorium&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_master_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/mobat"&gt;Obat&lt;/a&gt;&lt;/li>&gt;

&lt;li id="kiosk_monitor_feature"&gt;

&lt;a id="menu_config_antrian" pjax-content="" href="<https://kotakediri.epuskesmas.id/antrian>"&gt;

Konfigurasi Dashboard Antrian

&lt;/a&gt;

&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_config_konfigurasiform" pjax-content="" href="<https://kotakediri.epuskesmas.id/konfigurasiform"&gt;Konfigurasi> Form&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_config_konfigurasilaboratorium" pjax-content="" href="<https://kotakediri.epuskesmas.id/konfigurasilaboratorium"&gt;Konfigurasi> Laboratorium&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_config_smsnotifikasi" pjax-content="" href="<https://kotakediri.epuskesmas.id/smskonfigurasi"&gt;SMS> Konfigurasi&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_konfigurasi_ilp" pjax-content="" href="<https://kotakediri.epuskesmas.id/configilp"&gt;Konfigurasi> Skrining ILP&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_master_asupan_makanan" pjax-content="" href="<https://kotakediri.epuskesmas.id/masupanmakanan"&gt;Asupan> Makanan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_master_industri" pjax-content="" href="<https://kotakediri.epuskesmas.id/mindustri"&gt;Industri&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_master_pbf" pjax-content="" href="<https://kotakediri.epuskesmas.id/mpbf"&gt;PBF&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_master_mkomponentarif" pjax-content="" href="<https://kotakediri.epuskesmas.id/mkomponentarif"&gt;Komponen> Tarif&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_master_metode_pembayaran" pjax-content="" href="<https://kotakediri.epuskesmas.id/metode_pembayaran"&gt;Metode> Pembayaran&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_master_diagnosa" pjax-content="" href="<https://kotakediri.epuskesmas.id/mdiagnosa"&gt;Diagnosa&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_master_template_print" pjax-content="" href="<https://kotakediri.epuskesmas.id/templateprint"&gt;Template> Print&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_signature_pegawai" pjax-content="" href="<https://kotakediri.epuskesmas.id/signaturepegawai"&gt;Signature> Pegawai&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengaturan_signature" pjax-content="" href="<https://kotakediri.epuskesmas.id/pengaturansignature"&gt;Pengaturan> Signature&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_management_file_signature" pjax-content="" href="<https://kotakediri.epuskesmas.id/managementfilesignature"&gt;Management> File Signature&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_master_kegiatan" pjax-content="" href="<https://kotakediri.epuskesmas.id/mkegiatan"&gt;Kegiatan&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_data_dasar_puskesmas" pjax-content="" href="<https://kotakediri.epuskesmas.id/datadasarpuskesmas"&gt;Data> Dasar Puskesmas&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;BPJS&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_pengaturan_bpjs" pjax-content="" href="<https://kotakediri.epuskesmas.id/cbpjs"&gt;Pengaturan> BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_provider" pjax-content="" href="<https://kotakediri.epuskesmas.id/mproviderbpjs"&gt;RS> Provider BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_poli_fktl" pjax-content="" href="<https://kotakediri.epuskesmas.id/mpolifktlbpjs"&gt;Poli> FKTL BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_dokter" pjax-content="" href="<https://kotakediri.epuskesmas.id/mdokterbpjs"&gt;Dokter> BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_tindakan" pjax-content="" href="<https://kotakediri.epuskesmas.id/mtindakanbpjs"&gt;Tindakan> BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_laboratorium" pjax-content="" href="<https://kotakediri.epuskesmas.id/mlaboratoriumbpjs"&gt;Laboratorium> BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/mobatbpjs"&gt;Obat> BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_ruangan" pjax-content="" href="<https://kotakediri.epuskesmas.id/mruanganbpjs"&gt;Ruangan> BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_sinkron" pjax-content="" href="<https://kotakediri.epuskesmas.id/switchbridgingasuransi"&gt;Pengaturan> Bridging BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_sinkron" pjax-content="" href="<https://kotakediri.epuskesmas.id/sinkronbpjs"&gt;Sinkron> BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_pengelolaan_bpjs_sinkron_jejaring" pjax-content="" href="<https://kotakediri.epuskesmas.id/sinkronbpjsjejaring"&gt;Sinkron> BPJS Jejaring&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;SISRUTE&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_konfigurasi_sisrute" href="<https://kotakediri.epuskesmas.id/sisrute-configuration/credential"&gt;Konfigurasi&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_tujuan_rujukan_sisrute" href="<https://kotakediri.epuskesmas.id/sisrute-configuration/faskes"&gt;Tujuan> Rujukan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_sisrute_kriteria_khusus" href="<https://kotakediri.epuskesmas.id/msisrutekriteriakhusus"&gt;Kriteria> Khusus&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_sisrute_sdm" href="<https://kotakediri.epuskesmas.id/msisrutesdm"&gt;SDM&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_sisrute_ruang_perawatan" href="<https://kotakediri.epuskesmas.id/msisruteruangperawatan"&gt;Ruang> Perawatan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_sisrute_pelayanan" href="<https://kotakediri.epuskesmas.id/msisrutepelayanan"&gt;Pelayanan&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_sisrute_sarana" href="<https://kotakediri.epuskesmas.id/msisrutesarana"&gt;Sarana&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_sisrute_kelas_perawatan" href="<https://kotakediri.epuskesmas.id/msisrutekelasperawatan"&gt;Kelas> Perawatan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_sisrute_alkes" href="<https://kotakediri.epuskesmas.id/msisrutealkes"&gt;Alkes&lt;/a&gt;&lt;/li>&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Master Wilayah&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_wilayah_kerja" href="<https://kotakediri.epuskesmas.id/wilayah-kerja"&gt;Wilayah> Kerja&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Antrian&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_data_retention" href="<https://kotakediri.epuskesmas.id/antrian"&gt;Antrian&lt;/a&gt;&lt;/li>&gt;

&lt;li id="kiosk_speaker_feature" class="dropdown-header"&gt;

&lt;span class="label label-default"&gt;Speaker&lt;/span&gt;

&lt;/li&gt;

&lt;li id="kiosk_speaker_head_feature"&gt;

&lt;a id="menu_data_speaker" href="<https://kotakediri.epuskesmas.id/speaker>"&gt;

Speaker

&lt;/a&gt;

&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Klinisia&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_data_api_rekam_medis" href="<https://kotakediri.epuskesmas.id/konfigurasiklinisiaapps"&gt;Konfigurasi> Klinisia Apps &lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Satu Sehat&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_data_api_rekam_medis" href="<https://kotakediri.epuskesmas.id/konfigurasisatusehat/v2"&gt;Konfigurasi> Satu Sehat &lt;span style="color: red;"&gt;\*&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;

&lt;/ul&gt;

&lt;/li&gt;

&lt;li class="dropdown"&gt;

&lt;a id="menu_gis" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"&gt;GIS &lt;span class="caret"&gt;&lt;/span&gt;&lt;/a&gt;

&lt;ul class="dropdown-menu"&gt;

&lt;li&gt;&lt;a id="menu_gis_pasien" href="<https://kotakediri.epuskesmas.id/gis/patient"&gt;Pasien&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_gis_penyakit" href="<https://kotakediri.epuskesmas.id/gis/penyakit"&gt;Penyakit&lt;/a&gt;&lt;/li>&gt;

&lt;/ul&gt;

&lt;/li&gt;

&lt;li class="dropdown"&gt;

&lt;a id="menu_laporan" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"&gt;Laporan &lt;span class="caret"&gt;&lt;/span&gt;&lt;/a&gt;

&lt;ul class="dropdown-menu"&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Grafik&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="grafik" pjax-content="" href="<https://kotakediri.epuskesmas.id/grafik"&gt;Grafik&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="dashboardsip" pjax-content="" href="<https://kotakediri.epuskesmas.id/dashboardsip"&gt;Dashboard> SIP&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="dashboardskringilp" pjax-content="" href="<https://kotakediri.epuskesmas.id/dashboardilp"&gt;Dashboard> Skrining ILP&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Monitoring&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_updatelog" pjax-content="" href="<https://kotakediri.epuskesmas.id/updatelog"&gt;Update> Log&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_monitoring_satusehat" pjax-content="" href="<https://kotakediri.epuskesmas.id/monitoring-satusehat"&gt;Satu> Sehat&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Laporan Harian&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pemeriksaan_Air" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpemeriksaanair"&gt;Laporan> Pemeriksaan Air&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_capaian_kbk" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporan_capaian_kbk"&gt;Laporan> Prakiraan Capaian KBK&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pendapatan_tindakan" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpendapatantindakan"&gt;Pendapatan> Tindakan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_kunjungan_pasien" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporankunjunganpasien"&gt;Kunjungan> Pasien&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_kunjungan_pasien_bpjs" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporankunjunganpasienbpjs"&gt;Kunjungan> Pasien BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pelayanan_pasien" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpelayananpasien"&gt;Pelayanan> Pasien&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pemeriksaan_medis" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpemeriksaanmedis"&gt;Pemeriksaan> Medis&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_laporan_pelayanan_resep" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpelayananresep"&gt;Pelayanan> Resep&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pengeluaran_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpengeluaranobat"&gt;Pengeluaran> Obat Pasien&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pengeluaran_alkes" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanharianpengeluaranalkes"&gt;Pengeluaran> Alat Kesehatan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pelayanan_lab" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpelayananlab"&gt;Pelayanan> Laboratorium&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_rujukan_internal" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanrujukaninternal"&gt;Rujukan> Internal&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_rujukan_external" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanrujukanexternal"&gt;Rujukan> External&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_laporan_tindakan_dokter" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporantindakandokter>"&gt;

Tindakan Dokter/Perawat

&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pemeriksaan_laboratorium" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpemeriksaanlaboratorium"&gt;Pemeriksaan> Laboratorium&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_kinerja_puskesmas" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporankinerjapuskesmas"&gt;Kinerja> Puskesmas&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pelayanan_ruangan" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpelayananruangan"&gt;Pelayanan> Ruangan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_penyakit" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpenyakit"&gt;Penyakit&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_laporan_askep" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanaskep"&gt;Asuhan> Keperawatan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_kunjungan_ptm" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporankunjunganptm"&gt;Kunjungan> PTM&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_harian_pkpr" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanharianpkpr"&gt;PKPR&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_laporan_harian_alkes_terbanyak" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanharianalkesterbanyak"&gt;Alat> Kesehatan Terbanyak&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pendapatan" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpendapatan"&gt;Laporan> Pendapatan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pendapatan_pendaftaran" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpendapatanpendaftaran"&gt;Laporan> Pendapatan Pendaftaran &lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pendapatan" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpendapatankasir"&gt;Laporan> Pendapatan Kasir&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pendapatan_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpendapatanobat"&gt;Laporan> Pendapatan Obat&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_covid19" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporancovid19"&gt;Laporan> Skrining COVID-19&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pengeluaran_obat_per_pasien" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpengeluaranobatperpasien"&gt;Laporan> Pengeluaran Obat&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_stok_opname" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanstokopname"&gt;Laporan> Stok Opname&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_hepatitis_b" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanhepatitisb"&gt;Laporan> Hepatitis B&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_skrining_tb" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanskriningtb"&gt;Laporan> Skrining TB&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_barang_persediaan" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanbarangpersediaan"&gt;Laporan> Barang Persediaan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_register_mtbs" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanmtbsv2"&gt;Laporan> Register MTBS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_kunjungan_bpjs" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporan_kunjungan_bpjs"&gt;Laporan> Kunjungan BPJS&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Laporan Mingguan&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pws_penyakit" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpwspenyakit"&gt;Laporan> PWS Penyakit&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Laporan Bulanan&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_all" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporan"&gt;Laporan&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_laporan_data_dasar" pjax-content="" href="<https://kotakediri.epuskesmas.id/datadasar"&gt;Data> Dasar&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_kirim_report" pjax-content="" href="<https://kotakediri.epuskesmas.id/kirimreport"&gt;Kirim> Report&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pkg" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpkg"&gt;Laporan> PKG&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sp3_lb1" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansp3lb1"&gt;SP3> LB1&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sp3_lb2" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansp3lb2/lplpo"&gt;SP3> LB2 (LPLPO)&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sp3_lb3" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansp3lb3"&gt;SP3> LB3&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sp3_lb4" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansp3lb4"&gt;SP3> LB4&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sip_ukp1" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansipukp1/0"&gt;UKP-1>. Pelayanan Puskesmas&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sip_ukp2" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansipukp2"&gt;UKP-2>. Kesakitan Umum&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sip_ukp3" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansipukp3"&gt;UKP-3>. Kesakitan Gigi dan Mulut&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sip_ukp4" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansipukp4"&gt;UKP-4>. Data Kesakitan Terbanyak&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sip_ukp5" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansipukp5"&gt;UKP-5>. Data Kematian di Puskesmas&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sip_ukp6" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansipukp6"&gt;UKP-6>. LPLPO&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_ukme1" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-promkes/0"&gt;UKME-1>. Promosi Kesehatan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_ukme2" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-kesling/0"&gt;UKME-2>. Kesehatan Lingkungan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_ukme3" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-gizi/0"&gt;UKME-3>. Gizi, Kesehatan Ibu dan Kesehatan Anak&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_ukme4" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-imunisasi/0"&gt;UKME-4>. Imunisasi&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_ukme5" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-menular/0"&gt;UKME-5>. Pengendalian Penyakit Menular&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_ukme6" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-tidakmenular/0"&gt;UKME-6>. Pengendalian Penyakit Tidak Menular&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_ukme7" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-perkesmas/0"&gt;UKME-7>. Perawatan Kesehatan Masyarakat&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_potensi_klb" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-regklb/0"&gt;Penyakit> Menular Potensi KLB&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_potensi_klb_des" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-pwsklb/0"&gt;Penyakit> Potensi KLB Menurut Desa/Kel&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_promosi_kesmit" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukme-promkesmitra/0"&gt;Promosi> Kesehatan Data Kemitraan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_promosi_kesker" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-ukmp-kesehatankerja/0"&gt;UKMP>. Kesehatan Kerja&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_program" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram"&gt;Program&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_laporan_pemeriksaan_ims" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpemeriksaanims"&gt;Pemeriksaan> IMS&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_kohort" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporankohort"&gt;Laporan> Kunjungan Ibu Hamil&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_deteksi_dini_kanker" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanbulanandeteksidinikanker"&gt;Laporan> Rekapitulasi Penemuan Dini Kanker pada Anak FKTP (PDKA FKTP)

&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_kohort_kia" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporankohortkia"&gt;Kohort> KIA&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_pkpr" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpkpr"&gt;PKPR&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_laporan_konseling_hiv" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporankonselinghiv"&gt;Konseling> HIV&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_rekapitulasi_mtbs_mtbm" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporan/view/2"&gt;Rekapitulasi> MTBS MTBM&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_laporan_ptm" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanptm"&gt;PTM&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_kirim_laporan" pjax-content="" href="<https://kotakediri.epuskesmas.id/kirimlaporan"&gt;Kirim> Laporan&lt;/a&gt;&lt;/li&gt;

&lt;li class="dropdown-header"&gt;&lt;span class="label label-default"&gt;Laporan Tahunan&lt;/span&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laopran_interpretasi_skrining" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporaninterpretasiskrining"&gt;Laporan> Interpretasi Skrining ILP&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laopran_pengendalian_ptm" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanpengendalianptm"&gt;Laporan> Pengendalian PTM&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_ht_dm_terkontrol" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanhtdmterkontrol"&gt;Laporan> HT dan DM Terkontrol&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laopran_ketersediaan_obat" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanketersediaanobat"&gt;Laporan> Ketersediaan Obat&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_tahunan_siplt" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sip-lt-thnprogram/0"&gt;Laporan> Tahunan&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_tahunan_lsd1" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sp3-lsd1/0"&gt;Laporan> Tahunan LSD 1&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_sp3_lsd2" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporansp3lsd2"&gt;Laporan> Tahunan LSD 2&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_laporan_tahunan_lsd3" pjax-content="" href="<https://kotakediri.epuskesmas.id/laporanprogram/input/sp3-lsd3/0"&gt;Laporan> Tahunan LSD 3&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_center_view" pjax-content="" href="<https://kotakediri.epuskesmas.id/centerviewjawatimur"&gt;Sinkron> Center View Jawa Timur (Cron)&lt;/a&gt;&lt;/li&gt;

&lt;/ul&gt;

&lt;/li&gt;

&lt;/ul&gt;

&lt;ul class="nav navbar-nav navbar-right"&gt;

&lt;li class=""&gt;

&lt;style type="text/css"&gt;

.broadcastBox::-webkit-scrollbar-track

{

\-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);

background-color: #F5F5F5;

border-radius: 5px

}

.broadcastBox::-webkit-scrollbar

{

width: 10px;

background-color: #F5F5F5;

border-radius: 5px

}

.broadcastBox::-webkit-scrollbar-thumb

{

background-color: black;

border: 2px solid black;

border-radius: 5px

}

.fasBroadcast{

font-size: 25pt;

padding-bottom: 10px;

color: black;

margin-right: 40px;

margin-left: 40px;

}

.broadcastBox{

width: 350px;

height: 0px;

border-radius: 10px;

transition: 0.5s;

position: absolute;

overflow-y: scroll;

padding: 0px;

left: 0px;

margin-top: 5px;

background-color: #F4F4F4;

\-webkit-box-shadow: 10px 10px 23px 0px rgba(0,0,0,0.2);

\-moz-box-shadow: 10px 10px 23px 0px rgba(0,0,0,0.1);

box-shadow: 10px 10px 23px 0px rgba(0,0,0,0.1);

}

.fasBroadcast:hover {

color: #d63031;

}

.displayBroadcast{

position: relative;

}

.contBroadcast{

position: absolute;

top: 0;

width: 100%;

height: 100%;

background-color: #F4F4F4;

}

.contBroadcast:empty{

display: none;

}

.stickBroadcast{

text-align: center;

display: block;

font-size: 50pt;

padding-top: 70px;

padding-left: 80px

}

.stickBroadcast:hover{

color: black;

}

.centBroadcast{

text-align: center;

display: block;

}

.secBroadcast{

padding: 25px 10px;

background-color: #F4F4F4;

transition: 0.5s;

}

.profContBroadcast{

padding-left: 15px;

}

.profileBroadcast{

\-webkit-clip-path: circle(50% at 50% 50%);

clip-path: circle(50% at 50% 50%);

width: 75px;

float: left;

}

.txtBroadcast{

vertical-align: top;

font-size: 1.25rem;

padding: 5px 10px 0px 115px;

}

.subBroadcast{

font-size: 1rem;

color: grey;

}

.newBroadcast{

border-style: none none solid none;

border-color: red;

}

.secBroadcast:hover{

background-color: #BFBFBF;

}

.headerBroadcast{

padding: 5px;

}

.isiContentBroadcast{

padding: 10px;

}

.judulBroadcast{

padding-bottom: 10px;

}

.dotBroadcast {

height: 9px;

width: 9px;

background-color: #9D2D15;

border-radius: 50%;

display: inline-block;

}

.containerNotifBroadcast img {

transition: transform 0.25s ease;

cursor: zoom-in;

}

.zoomCheckNotif:checked ~ label > img {

transform: scale(2);

cursor: zoom-out;

}

&lt;/style&gt;

&lt;a class="fa fa-bell" style="font-size: 20px;" onclick="showHideBroadcast();"&gt;

&lt;/a&gt;

&lt;div id="isiNotifBroadcast"&gt;&lt;/div&gt;

&lt;script type="text/javascript"&gt;

var openBroadcast = "true"

let numClicks = 0;

function showHideBroadcast() {

if (openBroadcast == "false") {

\$('.broadcastBox').removeAttr("style");

openBroadcast = "true";

return false

}

numClicks++;

if (numClicks === 1) {

singleClickTimer = setTimeout(() => {

numClicks = 0;

}, 400);

} else if (numClicks === 2) {

clearTimeout(singleClickTimer);

numClicks = 0;

return false

}

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/notifikasi/getform>",

method: 'GET',

dataType: "json",

data: {

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

\$("#isiNotifBroadcast").html(data.data)

setTimeout(function (){

if(openBroadcast == "true") {

\$('.broadcastBox').css({

height: "60vh"

});

openBroadcast = "false";

}

}, 100);

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

}

function setPilihanBroadcast() {

var broadcastPilih = \$('select\[name="broadcastPilihan"\]').val()

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/notifikasi/getform>",

method: 'GET',

dataType: "json",

data: {

pilihanBroadcast: broadcastPilih,

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

\$('#contBroadcast').html("")

\$('#contBroadcast').html('&lt;br/&gt;&lt;br/&gt;&lt;span class="loading" style="background-color:#F4F4F4!important;padding-top: 30px;padding-left: 90%;"&gt; &lt;/span&gt;')

setTimeout(function (){

\$('#contBroadcast').html(data.data)

}, 300);

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

}

function bacaSelengkapnyaBroadcast(ids) {

\$('.broadcastBox').removeAttr("style");

openBroadcast = "true";

\$.blockUI({

css: {

border: 'none',

padding: '15px',

backgroundColor: '#000',

'-webkit-border-radius': '10px',

'-moz-border-radius': '10px',

opacity: .5,

fontSize: '8px',

color: '#fff'

},

message: '&lt;h3&gt;Memuat....&lt;/h3&gt;'

});

\$.unblockUI()

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/notifikasi/show>",

method: 'GET',

dataType: "json",

data: {

ids: ids,

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

\$("#modal_notif_broadcast_notifikasi").modal({ backdrop: 'static'});

\$("#modal_notif_broadcast_notifikasi .modal-dialog").addClass("modal-lg");

\$('#modal_notif_broadcast_notifikasi .modal-title').html(data.tipe);

\$('#modal_notif_broadcast_notifikasi .modal-form').html(data.data);

console.log(data.ressRead)

if (data.ressRead == false) {

\$("#dotBroadcast").addClass('hidden')

}

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

}

function skemaAction() {

let skema = \$("#skema").val()

\$("#skemaAction").addClass('loading')

var broadcastPilih = \$('select\[name="broadcastPilihan"\]').val()

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/notifikasi/getformother>",

method: 'GET',

dataType: "json",

data: {

skema: skema,

pilihanBroadcast: broadcastPilih,

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

setTimeout(function (){

\$("#skemaAction").removeClass('loading')

let totalSkema = Number(skema) + 1

\$("#skema").val(totalSkema)

\$("#isiDetailNotif").append(data.data)

if(data.nextAction != "true") {

\$("#skemaAction").addClass("hidden")

}

}, 300);

},

error: function (xhr, ajaxOptions, thrownError) {

\$("#skemaAction").removeClass('loading')

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

}

&lt;/script&gt; &lt;/li&gt;

&lt;li class=""&gt;

&lt;a href="javascript:showNotifBridging();" class="notification" id="button_gagal_bridging"&gt;

&lt;span class="icon-bpjs"&gt; Belum Bridging&lt;/span&gt;

&lt;span class="badge" id="kolom_gagal_bridging"&gt;41&lt;/span&gt;

&lt;/a&gt;

&lt;/li&gt;

&lt;li class="dropdown"&gt;

&lt;a id="menu_user" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"&gt;

dr Ferdi Andriska &lt;span class="label label-default"&gt;PUSKESMAS BALOWERTI&lt;/span&gt; &lt;span class="caret"&gt;&lt;/span&gt;

&lt;/a&gt;

&lt;ul class="dropdown-menu" role="menu"&gt;

&lt;li&gt;&lt;a id="menu_user_profil" href="<https://kotakediri.epuskesmas.id/user/editbysession"&gt;Profil&lt;/a&gt;&lt;/li>&gt;

&lt;li&gt;&lt;a id="menu_user_userguide" href="<https://kotakediri.epuskesmas.id/userguide"&gt;User> Guide&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_user_update" href="#" onclick="showUpdateLog(true);"&gt;Update&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_user_umpanbalik" href="<https://kotakediri.epuskesmas.id/umpanbalik"&gt;Umpan> Balik&lt;/a&gt;&lt;/li&gt;

&lt;li&gt;&lt;a id="menu_user_bantuan" href="#" onclick="openBantuan();"&gt;Bantuan&lt;/a&gt;&lt;/li&gt;

&lt;li role="separator" class="divider"&gt;&lt;/li&gt;

&lt;li&gt;

<a id="menu_user_logout" href="<https://kotakediri.epuskesmas.id/logout>" onclick="event.preventDefault();

document.getElementById('logout-form').submit();">

Keluar

&lt;/a&gt;

&lt;form id="logout-form" action="<https://kotakediri.epuskesmas.id/logout>" method="POST" style="display: none;"&gt;

&lt;input type="hidden" name="\_token" value="Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"&gt;

&lt;/form&gt;

&lt;/li&gt;

&lt;/ul&gt;

&lt;/li&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/nav&gt;

<!-- Bootstrap core JavaScript

\================================================== -->

&lt;!-- Placed at the end of the document so the pages load faster --&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/jquery/jquery-3.2.1.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/bootstrap/js/bootstrap.min.js"&gt;&lt;/script>&gt;

&lt;!-- Alert & Notification --&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/bootstrap-notify/bootstrap-notify.min.js"&gt;&lt;/script>&gt;

&lt;!-- Pjax --&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/pjax/jquery.pjax.min.js"&gt;&lt;/script>&gt;

&lt;!-- Datetime picker --&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/momentjs/moment-with-locales-id.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/jquery-blockui/jquery-blockui.min.js"&gt;&lt;/script>&gt;

&lt;!-- Swal alert package --&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/swal2.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/js-url/url.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/bootstrap-maxlength/bootstrap-maxlength.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/jquery-ui/js/jquery-ui-autocomplete.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/jquery-masknumber/jquery.masknumber.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/datatable.js?v=1.2"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/jquery.form.min.js"&gt;&lt;/script>&gt;

&lt;!-- Custom Chart Generator --&gt;

&lt;script&gt;backgroundChart = "images/gis/bg-grafik.png";&lt;/script&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/mychart.js"&gt;&lt;/script>&gt;

&lt;div id="loader" class="loading-lg hidden" style="height: 32px"&gt;&lt;/div&gt;

&lt;section id="content" class="container-fluid noprint"&gt;

&lt;div class="panel panel-default container-fluid"&gt;

&lt;div class="panel-heading row"&gt;

&lt;span class="panel-title"&gt;Buat Baru Resep&lt;/span&gt;

&lt;span class="pull-right"&gt;

&lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/pelayanan>" type="button" class="btn btn-sm btn-primary"&gt;

Lihat Semua

&lt;/a&gt;

&lt;/span&gt;

&lt;/div&gt;

&lt;div class="panel-body row"&gt;

&lt;div class="col-md-4"&gt;

&lt;a class="btn btn-sm btn-primary" onclick="\$('#button_lihatriwayat').click();"&gt;Lihat Riwayat&lt;/a&gt;

&lt;a class="btn btn-sm btn-primary" onclick="\$('#button_index').click();"&gt;Lihat Pelayanan&lt;/a&gt;

&lt;/div&gt;

&lt;div class="col-md-8"&gt;

&lt;div class="wrapped"&gt;&lt;a href="<https://kotakediri.epuskesmas.id/pelayanan/show/63569>" id="button_index" class="btn btn-sm btn-primary hidden"&gt;Lihat Semua&lt;/a&gt;&lt;a onclick="showRiwayat()" id="button_lihatriwayat" class="btn btn-sm btn-primary hidden"&gt;Lihat Riwayat&lt;/a&gt;&lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/anamnesa/create/63569?from='pelayanan'&action='edit>'" id="button_anamnesa" class="btn btn-sm btn-primary"&gt;Anamnesa&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/diagnosa/create/63569?from='pelayanan'&action='edit>'" id="button_diagnosa" class="btn btn-sm btn-primary"&gt;Diagnosa&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/resep/create/63569?from='pelayanan'&action='edit>'" id="button_resep" class="btn btn-sm btn-primary"&gt;Resep&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/alkes/create/63569?from='pelayanan'&action='edit>'" id="button_alkes" class="btn btn-sm btn-primary"&gt;Alkes&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/obatpasien/create/63569?from='pelayanan'&action='edit>'" id="button_obat" class="btn btn-sm btn-primary"&gt;Pemakaian Obat&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/odontogram/create/63569?from='pelayanan'&action='edit>'" id="button_odontogram" class="btn btn-sm btn-primary"&gt;Odontogram&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/laboratorium/create/63569?from='pelayanan'&action='edit>'" id="button_laboratorium" class="btn btn-sm btn-primary"&gt;Laboratorium&lt;/a&gt; &lt;a href="<https://kotakediri.epuskesmas.id/tindakan/create/63569?from='pelayanan'&action='edit>'" id="button_tindakan" class="btn btn-sm btn-primary"&gt;Tindakan&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/mtbsv2/create/63569?from='pelayanan'&action='edit>'" id="button_mtbs" class="btn btn-sm btn-primary"&gt;MTBS&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/imunisasi/create/63569?from='pelayanan'&action='edit>'" id="button_imunisasi" class="btn btn-sm btn-primary"&gt;Imunisasi&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/kartubayi/create/63569?from='pelayanan'&action='edit>'" id="button_kartubayi" class="btn btn-sm btn-primary"&gt;Kartu Bayi&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/keur/create/63569?from='pelayanan'&action='edit>'" id="button_keur" class="btn btn-sm btn-primary"&gt;Keur&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/kb/create/63569?from='pelayanan'&action='edit>'" id="button_kb" class="btn btn-sm btn-primary"&gt;KB&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/pkpr/create/63569?from='pelayanan'&action='edit>'" id="button_pkpr" class="btn btn-sm btn-primary"&gt;PKPR&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/kohort/create/63569?from='pelayanan'&action='edit>'" id="button_kohort" class="btn btn-sm btn-primary"&gt;KIA&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/periksagizi/create/63569?from='pelayanan'&action='edit>'" id="button_periksagizi" class="btn btn-sm btn-primary"&gt;Periksa Gizi&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/tbparu/create/63569?from='pelayanan'&action='edit>'" id="button_tbparu" class="btn btn-sm btn-primary"&gt;TB Paru&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/periksaims/create/63569?from='pelayanan'&action='edit>'" id="button_periksaims" class="btn btn-sm btn-primary"&gt;Periksa IMS&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/konselinghiv/create/63569?from='pelayanan'&action='edit>'" id="button_konselinghiv" class="btn btn-sm btn-primary"&gt;Konseling HIV&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/askep/create_pengkajian/63569?from='pelayanan>'" id="button_askep" class="btn btn-sm btn-primary"&gt;Asuhan Keperawatan&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/periksaiva/create/63569?from='pelayanan'&action='edit>'" id="button_periksaiva" class="btn btn-sm btn-primary"&gt;Tes IVA&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/kpsp/create/63569?from='pelayanan'&action='edit>'" id="button_tumbuhkembanganak" class="btn btn-sm btn-primary"&gt;Tumbuh Kembang Anak&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/caten/create/63569?from='pelayanan>'" id="button_caten" class="btn btn-sm btn-primary"&gt;Caten&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/ptm/create/63569?from='pelayanan'&action='edit>'" id="button_ptm" class="btn btn-sm btn-primary"&gt;PTM&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/mata/create/63569?from='pelayanan'&action='edit>'" id="button_mata" class="btn btn-sm btn-primary"&gt;Mata&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/pengkajianresikojatuh/create/63569?from='pelayanan'&action='edit>'" id="button_pengkajian_resiko_jatuh" class="btn btn-sm btn-primary"&gt;Pengkajian Resiko Jatuh&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/prima/create/63569?from='pelayanan'&action='edit>'" id="button_prima" class="btn btn-sm btn-primary"&gt;Prima&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/psikologi/create/63569?from='pelayanan'&action='edit>'" id="button_psikologi" class="btn btn-sm btn-primary"&gt;Psikologi&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/pal/63569?from='pelayanan'&action='edit>'" id="button_psikologi" class="btn btn-sm btn-primary"&gt;PAL&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/haji/63569?from='pelayanan'&action='edit>'" id="button_psikologi" class="btn btn-sm btn-primary"&gt;Haji&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/covid19/create/63569?from=pelayanan&action=edit>" id="button_covid19" class="btn btn-sm btn-primary"&gt;COVID-19&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/diare/create/63569?from=pelayanan&action=edit>" id="button_diare" class="btn btn-sm btn-primary"&gt;Diare&lt;/a&gt; &lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/anestesibedah/create/63569?from=pelayanan&action=edit>" id="button_anestesibedah" class="btn btn-sm btn-primary"&gt;Pemantauan Anestesi & Bedah&lt;/a&gt; &lt;/div&gt;&lt;label style="color: red;"&gt;&lt;/label&gt; &lt;script type="text/javascript"&gt;function showRiwayat()

{

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/showriwayat/0000000000140163>",

method: "GET",

dataType: "json",

data: {

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h",

page: "1"

},

success: function(data) {

\$("#modal .modal-title").html(data.title);

\$("#modal .modal-form").html(data.form);

openmodal("modal-lg");

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

}

\$(() => {

\$("#button_index").bind("click", ({ delegateTarget }) => {

window.location.replace(\$(delegateTarget).attr("href"))

})

})&lt;/script&gt; &lt;/div&gt;

&lt;div class="col-md-4"&gt;

&lt;style&gt;

.swal-custom .swal2-actions .swal2-cancel{

border: 1px solid #bdbdbd

}

.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{

width:500px;

}

&lt;/style&gt;

&lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;Pasien Pulang&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;form id="form_pasienpulang" method="POST" action="<https://kotakediri.epuskesmas.id/pelayanan/update/63569>" class="form-horizontal"&gt;

&lt;input type="hidden" name="\_token" value="Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Status Pulang &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;select class="form-control input-sm" required="" name="Pelayanan\[statuspulang_id\]"&gt;

&lt;option value=""&gt;- PILIH -&lt;/option&gt;

&lt;option value="01"&gt;Berobat Jalan&lt;/option&gt;

&lt;option value="04"&gt;Rujuk Internal&lt;/option&gt;

&lt;option value="05" selected=""&gt;Rujuk Lanjut&lt;/option&gt;

&lt;option value="06"&gt;Meninggal&lt;/option&gt;

&lt;option value="07"&gt;Batal Berobat&lt;/option&gt;

&lt;/select&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Tgl. Mulai&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;div class="input-group datetime-free"&gt;

&lt;input type="text" class="form-control input-sm " id="tgl_mulai" name="Pelayanan\[tanggal_mulai\]" value="03-02-2026 07:52:00" placeholder="dd-mm-yyyy 00:00:00" readonly=""&gt;

&lt;span class="input-group-addon btn-info" readonly=""&gt;&lt;i class="fa fa-calendar"&gt;&lt;/i&gt; &lt;i class="fa fa-clock-o"&gt;&lt;/i&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Tgl. Selesai&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;div class="input-group" id="finishDate"&gt;

&lt;input type="text" class="form-control input-sm " id="tgl_selesai" onblur="setTanggalSelesai()" name="Pelayanan\[tanggal_selesai\]" value="03-02-2026 07:52:00" placeholder="dd-mm-yyyy 00:00:00"&gt;

&lt;span class="input-group-addon btn-info"&gt;&lt;i class="fa fa-calendar"&gt;&lt;/i&gt; &lt;i class="fa fa-clock-o"&gt;&lt;/i&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label"&gt;Lama Pelayanan &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;div class="input-group"&gt;

&lt;input type="number" pattern="\[0-9\]\*" inputmode="numeric" min="0" required="" class="form-control input-sm" id="hari" name="Pelayanan\[lama_hari\]" value="0" placeholder="0"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;Hr&lt;/label&gt;&lt;/span&gt;

&lt;input type="number" pattern="\[0-9\]\*" inputmode="numeric" min="0" required="" class="form-control input-sm" id="jam" name="Pelayanan\[lama_jam\]" value="0" placeholder="0"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;Jm&lt;/label&gt;&lt;/span&gt;

&lt;input type="number" pattern="\[0-9\]\*" inputmode="numeric" min="0" required="" class="form-control input-sm" id="menit" name="Pelayanan\[lama_menit\]" value="0" placeholder="0"&gt;

&lt;span class="input-group-addon"&gt;&lt;label&gt;Mnt&lt;/label&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-4 control-label" id="label-tanggal-kontrol"&gt;Tgl. Rencana Kontrol &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;input type="hidden" name="Pelayanan\[tanggal_mulai_dokter\]" id="tanggal_mulai_dokter"&gt;

&lt;div class="input-group date-next"&gt;

&lt;input type="text" class="form-control input-sm" id="input-tanggal-kontrol" name="Pelayanan\[tanggal_kontrol\]" value="" placeholder="dd-mm-yyyy" required=""&gt;

&lt;span class="input-group-addon btn-info"&gt;&lt;i class="fa fa-calendar"&gt;&lt;/i&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-sm-4"&gt; &lt;/div&gt;

&lt;div class="col-sm-8"&gt;

&lt;input class="col-sm-1" type="checkbox" id="check-kontrol" onchange="checkKontrol(this);" checked=""&gt;

&lt;label class="col-sm-11" for="check-kontrol" style="color: red"&gt;Uncheck jika tidak ada rencana kontrol&lt;/label&gt;&lt;br&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="pull-right"&gt;

&lt;button id="button_setcall" type="button" class="btn btn-sm btn-primary button_epus" data="mulai_dokter" onclick="antrianBaru();"&gt;Panggil&lt;/button&gt;

&lt;button id="button_edit" type="button" class="btn btn-sm btn-primary" data="mulai_dokter" onclick="updateData(this);"&gt;Mulai Dokter&lt;/button&gt;

&lt;div class="btn-group "&gt;

&lt;button id="button_selesai" type="button" class="btn btn-sm btn-success" data="selesai" onclick="updateData(this);"&gt;Selesai&lt;/button&gt;

&lt;button type="button" class="btn btn-sm btn-danger dropdown-toggle" style="min-width:20px;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"&gt;

&lt;span class="caret"&gt;&lt;/span&gt;

&lt;span class="sr-only"&gt;Toggle Dropup&lt;/span&gt;

&lt;/button&gt;

&lt;div class="dropdown-menu" style="min-width:0; padding:0; margin:0;"&gt;

&lt;button id="button_destroy" type="button" class="btn btn-sm btn-danger" style="min-width:120px;" onclick="destroyData(this);"&gt;Hapus Permanen&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;input type="hidden" name="skip_validasi_antrol" id="skip_validasi_antrol" value="0"&gt;

&lt;/form&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal fade" id="modalRespPendaftaranAntrol" role="dialog"&gt;

&lt;div class="modal-dialog"&gt;

&lt;div class="modal-content"&gt;

&lt;div id="data-content" class="modal-body"&gt;

&lt;div class="row"&gt;

&lt;p class="text-center"&gt;

&lt;/p&gt;&lt;div class="text-center"&gt;

&lt;svg width="90" height="91" viewBox="0 0 90 91" fill="none" xmlns="<http://www.w3.org/2000/svg>"&gt;

&lt;circle cx="45" cy="45.5" r="45" fill="#FFF4DD"&gt;&lt;/circle&gt;

&lt;circle cx="44.9999" cy="45.5002" r="39.1936" fill="#FFD496"&gt;&lt;/circle&gt;

&lt;path d="M63.6999 56.3281L48.6694 30.2254C48.2938 29.5859 47.7576 29.0557 47.114 28.6872C46.4703 28.3188 45.7415 28.125 44.9999 28.125C44.2582 28.125 43.5295 28.3188 42.8858 28.6872C42.2422 29.0557 41.706 29.5859 41.3304 30.2254L26.2999 56.3281C25.9385 56.9466 25.748 57.6501 25.748 58.3665C25.748 59.0829 25.9385 59.7864 26.2999 60.405C26.6707 61.0483 27.206 61.5815 27.8508 61.9496C28.4957 62.3178 29.2269 62.5078 29.9694 62.5001H60.0304C60.7723 62.5072 61.5028 62.3169 62.147 61.9488C62.7912 61.5806 63.326 61.0478 63.6965 60.405C64.0584 59.7867 64.2494 59.0834 64.25 58.367C64.2506 57.6506 64.0608 56.9469 63.6999 56.3281ZM61.316 59.0282C61.185 59.2518 60.9968 59.4364 60.7709 59.5633C60.545 59.6901 60.2894 59.7546 60.0304 59.7501H29.9694C29.7104 59.7546 29.4548 59.6901 29.2289 59.5633C29.0029 59.4364 28.8148 59.2518 28.6838 59.0282C28.5651 58.8273 28.5025 58.5982 28.5025 58.3648C28.5025 58.1314 28.5651 57.9023 28.6838 57.7014L43.7143 31.5987C43.8479 31.3763 44.0369 31.1922 44.2628 31.0644C44.4887 30.9366 44.7438 30.8694 45.0033 30.8694C45.2629 30.8694 45.518 30.9366 45.7439 31.0644C45.9697 31.1922 46.1587 31.3763 46.2924 31.5987L61.3229 57.7014C61.4405 57.9029 61.5019 58.1324 61.5007 58.3657C61.4995 58.5991 61.4357 58.8279 61.316 59.0282ZM43.6249 48.7501V41.8751C43.6249 41.5104 43.7698 41.1607 44.0276 40.9028C44.2855 40.645 44.6352 40.5001 44.9999 40.5001C45.3646 40.5001 45.7143 40.645 45.9722 40.9028C46.23 41.1607 46.3749 41.5104 46.3749 41.8751V48.7501C46.3749 49.1148 46.23 49.4645 45.9722 49.7224C45.7143 49.9802 45.3646 50.1251 44.9999 50.1251C44.6352 50.1251 44.2855 49.9802 44.0276 49.7224C43.7698 49.4645 43.6249 49.1148 43.6249 48.7501ZM47.0624 54.9376C47.0624 55.3455 46.9414 55.7443 46.7148 56.0835C46.4882 56.4227 46.166 56.687 45.7892 56.8431C45.4123 56.9992 44.9976 57.0401 44.5975 56.9605C44.1974 56.8809 43.8299 56.6845 43.5415 56.396C43.253 56.1076 43.0566 55.7401 42.977 55.34C42.8974 54.9399 42.9383 54.5252 43.0944 54.1483C43.2505 53.7715 43.5149 53.4493 43.854 53.2227C44.1932 52.9961 44.592 52.8751 44.9999 52.8751C45.5469 52.8751 46.0715 53.0924 46.4583 53.4792C46.8451 53.866 47.0624 54.3906 47.0624 54.9376Z" fill="#FF9600"&gt;&lt;/path&gt;

&lt;/svg&gt;

&lt;/div&gt;

&lt;p&gt;&lt;/p&gt;

&lt;div class="text-center"&gt;

&lt;strong&gt;&lt;span&gt;Pengaturan Jadwal atau Dokter Tidak Sesuai HFIS&lt;/span&gt;&lt;/strong&gt;

&lt;br&gt;

&lt;span style="color:#6C757D;"&gt;Kirim antrean ke BPJS gagal, mohon pastikan pengaturan jadwal (dokter atau jam buka tutup) atau pengaturan mapping dokter sudah sesuai dengan jadwal HFIS BPJS&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;div class="col-md-12"&gt;

&lt;div class="col-md-6"&gt;

&lt;a href="<https://kotakediri.epuskesmas.id/mjadwal>" class="btn btn-default btn-lg btn-block"&gt;Perbaiki Jadwal&lt;/a&gt;

&lt;/div&gt;

&lt;div class="col-md-6"&gt;

&lt;button class="btn btn-warning btn-lg btn-block" id="pendaftaranAntrolKirimPcare"&gt;Tetap Kirim ke PCare&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;style&gt;

.btn-hafis {

font-size: 16px;

padding: 10px 15px;

border-radius: 4px;

\-webkit-box-shadow: none;

box-shadow: none;

\-webkit-transition: all 0.2s;

transition: all 0.2s;

}

.border-top {

border-top: 1px solid #e5e5e5;

}

.modal-alert {

border-radius: 24px;

}

.modal-alert .modal-dialog {

width: 480px;

margin: 72px auto;

}

@media (max-width: 575px) {

.modal-alert .modal-dialog {

width: calc(100% - 16px);

margin: 8px;

}

}

.modal-alert .modal-dialog .modal-content {

\-webkit-box-shadow: none;

box-shadow: none;

border-radius: 16px;

}

.modal-alert .modal-dialog .modal-content .modal-body {

padding: 30px;

color: #6C757D;

}

.modal-alert .modal-dialog .modal-content .modal-body .alert-img {

margin-bottom: 20px;

}

.modal-alert .modal-dialog .modal-content .modal-body .alert-title {

font-size: 18px;

color: #333;

font-weight: bold;

}

.modal-alert .modal-dialog .modal-content .modal-body .alert-content {

padding-top: 10px;

}

.modal-alert .modal-dialog .modal-content .modal-body .alert-action {

padding-top: 24px;

margin-top: 24px;

display: -webkit-box;

display: -ms-flexbox;

display: flex;

\-webkit-box-orient: vertical;

\-webkit-box-direction: normal;

\-ms-flex-direction: column;

flex-direction: column;

\-webkit-box-align: center;

\-ms-flex-align: center;

align-items: center;

gap: 10px;

}

.modal-alert .modal-dialog .modal-content .modal-footer {

padding: 20px;

background-color: #f7f7f7;

border-bottom-left-radius: 16px;

border-bottom-right-radius: 16px;

}

.modal-alert .modal-dialog .modal-content .modal-footer .btn+.btn {

margin-left: 0;

}

.modal-alert .modal-dialog .modal-content .modal-footer.two-action {

display: -webkit-box;

display: -ms-flexbox;

display: flex;

\-webkit-box-align: center;

\-ms-flex-align: center;

align-items: center;

gap: 20px;

padding: 20px 0;

}

.modal-alert .modal-dialog .modal-content .modal-footer.two-action .btn {

\-webkit-box-flex: 1;

\-ms-flex: 1;

flex: 1;

}

.ac-box {

padding: 16px;

border: 1px solid #e5e5e5;

margin-top: 16px;

border-radius: 8px;

color: #343A40;

}

.ac-box.acb-gray {

background-color: #f7f7f7;

border: none;

}

.radio-card {

display: flex;

gap: 8px;

border: 1px solid #e5e5e5;

margin-top: 12px;

border-radius: 8px;

padding: 8px 12px;

}

.radio-card input {

margin-top: -1px;

}

&lt;/style&gt;

&lt;form action="#" id="form_select_jadwal_antrol"&gt;

&lt;div id="modalRespAntrol" class="modal modal-alert fade" tabindex="-1" role="dialog" aria-labelledby="modal" data-backdrop="static" data-keyboard="false"&gt;

&lt;div class="modal-dialog" role="document"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-body"&gt;

&lt;div class="alert-img" style="margin-bottom: 16px;" id="close_jadwal_antrol"&gt;

&lt;button type="button" class="close" data-dismiss="modal" style="font-size:26px"&gt;×&lt;/button&gt;

&lt;/div&gt;

&lt;div class="alert-img text-center"&gt;

&lt;svg width="90" height="91" viewBox="0 0 90 91" fill="none" xmlns="<http://www.w3.org/2000/svg>"&gt;

&lt;circle cx="45" cy="45.5" r="45" fill="#FFF4DD"&gt;&lt;/circle&gt;

&lt;circle cx="44.9999" cy="45.5002" r="39.1936" fill="#FFD496"&gt;&lt;/circle&gt;

&lt;path d="M63.6999 56.3281L48.6694 30.2254C48.2938 29.5859 47.7576 29.0557 47.114 28.6872C46.4703 28.3188 45.7415 28.125 44.9999 28.125C44.2582 28.125 43.5295 28.3188 42.8858 28.6872C42.2422 29.0557 41.706 29.5859 41.3304 30.2254L26.2999 56.3281C25.9385 56.9466 25.748 57.6501 25.748 58.3665C25.748 59.0829 25.9385 59.7864 26.2999 60.405C26.6707 61.0483 27.206 61.5815 27.8508 61.9496C28.4957 62.3178 29.2269 62.5078 29.9694 62.5001H60.0304C60.7723 62.5072 61.5028 62.3169 62.147 61.9488C62.7912 61.5806 63.326 61.0478 63.6965 60.405C64.0584 59.7867 64.2494 59.0834 64.25 58.367C64.2506 57.6506 64.0608 56.9469 63.6999 56.3281ZM61.316 59.0282C61.185 59.2518 60.9968 59.4364 60.7709 59.5633C60.545 59.6901 60.2894 59.7546 60.0304 59.7501H29.9694C29.7104 59.7546 29.4548 59.6901 29.2289 59.5633C29.0029 59.4364 28.8148 59.2518 28.6838 59.0282C28.5651 58.8273 28.5025 58.5982 28.5025 58.3648C28.5025 58.1314 28.5651 57.9023 28.6838 57.7014L43.7143 31.5987C43.8479 31.3763 44.0369 31.1922 44.2628 31.0644C44.4887 30.9366 44.7438 30.8694 45.0033 30.8694C45.2629 30.8694 45.518 30.9366 45.7439 31.0644C45.9697 31.1922 46.1587 31.3763 46.2924 31.5987L61.3229 57.7014C61.4405 57.9029 61.5019 58.1324 61.5007 58.3657C61.4995 58.5991 61.4357 58.8279 61.316 59.0282ZM43.6249 48.7501V41.8751C43.6249 41.5104 43.7698 41.1607 44.0276 40.9028C44.2855 40.645 44.6352 40.5001 44.9999 40.5001C45.3646 40.5001 45.7143 40.645 45.9722 40.9028C46.23 41.1607 46.3749 41.5104 46.3749 41.8751V48.7501C46.3749 49.1148 46.23 49.4645 45.9722 49.7224C45.7143 49.9802 45.3646 50.1251 44.9999 50.1251C44.6352 50.1251 44.2855 49.9802 44.0276 49.7224C43.7698 49.4645 43.6249 49.1148 43.6249 48.7501ZM47.0624 54.9376C47.0624 55.3455 46.9414 55.7443 46.7148 56.0835C46.4882 56.4227 46.166 56.687 45.7892 56.8431C45.4123 56.9992 44.9976 57.0401 44.5975 56.9605C44.1974 56.8809 43.8299 56.6845 43.5415 56.396C43.253 56.1076 43.0566 55.7401 42.977 55.34C42.8974 54.9399 42.9383 54.5252 43.0944 54.1483C43.2505 53.7715 43.5149 53.4493 43.854 53.2227C44.1932 52.9961 44.592 52.8751 44.9999 52.8751C45.5469 52.8751 46.0715 53.0924 46.4583 53.4792C46.8451 53.866 47.0624 54.3906 47.0624 54.9376Z" fill="#FF9600"&gt;&lt;/path&gt;

&lt;/svg&gt;

&lt;/div&gt;

&lt;input type="hidden" id="jadwal_antrian_id" name="jadwal_antrian_id" value=""&gt;

&lt;input type="hidden" id="jadwal_antrian_jam" name="jadwal_antrian_jam" value=""&gt;

&lt;div class="alert-title text-center"&gt;Jadwal dokter tidak sesuai dengan HFIS&lt;/div&gt;

&lt;div class="alert-content text-center"&gt;

Jadwal &lt;strong id="antrol_nama_dokter"&gt;&lt;/strong&gt; di HFIS berbeda dengan jadwal yang tersedia di ePuskesmas. Silakan untuk melakukan penyesuaian jadwal.

&lt;/div&gt;

&lt;div class="ac-box acb-gray"&gt;

&lt;strong&gt;Jam Praktik di ePuskesmas&lt;/strong&gt;

&lt;div style="margin-top: 2px;" id="jadwal_antrian_jam_html"&gt;07:00 - 12.00&lt;/div&gt;

&lt;/div&gt;

&lt;div class="ac-box"&gt;

&lt;strong&gt;Pilih Jam Praktik di HFIS&lt;/strong&gt;

&lt;div id="content_modal_res_antrol"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;button class="btn btn-warning btn-block btn-hafis" style="font-size: 14px;font-weight: bold;" type="submit" id="btn_res_jadwal_antrol"&gt;Sesuaikan jadwal dengan HFIS

&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;script&gt;

\$("#form_select_jadwal_antrol").on('submit',function(event){

event.preventDefault();

let jadwal = \$('input\[name="hfis_jampraktek"\]:checked').val();

var jamUbah = \$('input\[name="hfis_jampraktek"\]:checked').val();

let jadwal_antrian_id = \$("#jadwal_antrian_id").val();

var jamAsal = \$("#jadwal_antrian_jam").val();

if(typeof jadwal == 'undefined' || jadwal == ''){

alert("Silahkan pilih jam praktek!","danger");

return;

}

\$("#btn_res_jadwal_antrol").addClass('loading');

\$("#btn_res_jadwal_antrol").prop('disabled',true);

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pendaftaran/update_jadwal_hfis>",

method: "POST",

dataType: "json",

data: \$(this).serialize()+ '&jadwal_antrian_id=' + jadwal_antrian_id+ '&\_token=' + "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h",

success: function(data) {

\$("#btn_res_jadwal_antrol").removeClass('loading');

\$("#btn_res_jadwal_antrol").prop('disabled',false);

if(data.status == 'success'){

\$('button\[name^="jadwal_id_"\]').html(function(\_, html) {

return html.replace(jamAsal, jamUbah);

});

\$("#modalRespAntrol").modal('hide');

\$("#modalCountDownAntrol").modal('hide');

\$("#jadwal_antrian_id").val("");

Swal.fire({

html: \`&lt;div style="padding-left:20px;padding-right:20px;margin-top:30px;"&gt;

&lt;svg width="90" height="91" viewBox="0 0 90 91" fill="none" xmlns="<http://www.w3.org/2000/svg>"&gt;

&lt;circle cx="45" cy="45.5" r="45" fill="#EAFFF8"/&gt;

&lt;circle cx="44.9999" cy="45.5002" r="39.1936" fill="#DAF7ED"/&gt;

&lt;circle cx="44.9999" cy="46.4999" r="17.871" fill="#EAFFF8" stroke="#18AF7C" stroke-width="2"/&gt;

&lt;path d="M55.4244 40.8057L41.7852 54.4448C41.5373 54.6928 41.2893 54.8168 40.9173 54.8168C40.5453 54.8168 40.2973 54.6928 40.0494 54.4448L33.8498 48.2452C33.3538 47.7492 33.3538 47.0053 33.8498 46.5093C34.3457 46.0133 35.0897 46.0133 35.5856 46.5093L40.9173 51.841L53.6885 39.0698C54.1844 38.5738 54.9284 38.5738 55.4244 39.0698C55.9203 39.5658 55.9203 40.3097 55.4244 40.8057Z" fill="#6C757D"/&gt;

&lt;mask id="mask0_18599_239" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="33" y="38" width="23" height="17"&gt;

&lt;path d="M55.4244 40.8057L41.7852 54.4448C41.5373 54.6928 41.2893 54.8168 40.9173 54.8168C40.5453 54.8168 40.2973 54.6928 40.0494 54.4448L33.8498 48.2452C33.3538 47.7492 33.3538 47.0053 33.8498 46.5093C34.3457 46.0133 35.0897 46.0133 35.5856 46.5093L40.9173 51.841L53.6885 39.0698C54.1844 38.5738 54.9284 38.5738 55.4244 39.0698C55.9203 39.5658 55.9203 40.3097 55.4244 40.8057Z" fill="white"/&gt;

&lt;/mask&gt;

&lt;g mask="url(#mask0_18599_239)"&gt;

&lt;path fill-rule="evenodd" clip-rule="evenodd" d="M29.7581 31.2583H59.5161V61.0164H29.7581V31.2583Z" fill="#18AF7C"/&gt;

&lt;/g&gt;

&lt;/svg&gt;

&lt;div style="padding-top:10px"&gt;

&lt;h4 style="color:black;font-weight:bold"&gt;Jadwal berhasil diubah sesuai dengan HFIS&lt;/h4&gt;

&lt;div&gt;Silakan klik "Kirim Ulang" untuk mengirim kembali Antrean Online BPJS&lt;/div&gt;

&lt;/div&gt;

&lt;div&gt;

\`,

customClass: 'swal-custom',

reverseButtons: true,

showCancelButton: false,

allowOutsideClick: false,

allowEscapeKey: false,

confirmButtonColor: '#28A745',

confirmButtonText: 'Kirim Ulang',

}).then((result) => {

actionConfirmAntrol();

swal.close();

return;

})

}else{

alert(data.message, data.status);

}

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$("#btn_res_jadwal_antrol").removeClass('loading');

\$("#btn_res_jadwal_antrol").prop('disabled',false);

console.log(xhr.status);

console.log(thrownError);

}

});

});

&lt;/script&gt;

&lt;style&gt;

.btn-hafis {

font-size: 16px;

padding: 10px 15px;

border-radius: 4px;

\-webkit-box-shadow: none;

box-shadow: none;

\-webkit-transition: all 0.2s;

transition: all 0.2s;

}

.border-top {

border-top: 1px solid #e5e5e5;

}

.modal-alert {

border-radius: 24px;

}

.modal-alert .modal-dialog {

width: 480px;

margin: 72px auto;

}

@media (max-width: 575px) {

.modal-alert .modal-dialog {

width: calc(100% - 16px);

margin: 8px;

}

}

.modal-alert .modal-dialog .modal-content {

\-webkit-box-shadow: none;

box-shadow: none;

border-radius: 16px;

}

.modal-alert .modal-dialog .modal-content .modal-body {

padding: 30px;

color: #6C757D;

}

.modal-alert .modal-dialog .modal-content .modal-body .alert-img {

margin-bottom: 20px;

}

.modal-alert .modal-dialog .modal-content .modal-body .alert-title {

font-size: 18px;

color: #333;

font-weight: bold;

}

.modal-alert .modal-dialog .modal-content .modal-body .alert-content {

padding-top: 10px;

}

.modal-alert .modal-dialog .modal-content .modal-body .alert-action {

padding-top: 24px;

margin-top: 24px;

display: -webkit-box;

display: -ms-flexbox;

display: flex;

\-webkit-box-orient: vertical;

\-webkit-box-direction: normal;

\-ms-flex-direction: column;

flex-direction: column;

\-webkit-box-align: center;

\-ms-flex-align: center;

align-items: center;

gap: 10px;

}

.modal-alert .modal-dialog .modal-content .modal-footer {

padding: 20px;

background-color: #f7f7f7;

border-bottom-left-radius: 16px;

border-bottom-right-radius: 16px;

}

.modal-alert .modal-dialog .modal-content .modal-footer .btn+.btn {

margin-left: 0;

}

.modal-alert .modal-dialog .modal-content .modal-footer.two-action {

display: -webkit-box;

display: -ms-flexbox;

display: flex;

\-webkit-box-align: center;

\-ms-flex-align: center;

align-items: center;

gap: 20px;

padding: 20px 0;

}

.modal-alert .modal-dialog .modal-content .modal-footer.two-action .btn {

\-webkit-box-flex: 1;

\-ms-flex: 1;

flex: 1;

}

.ac-box {

padding: 16px;

border: 1px solid #e5e5e5;

margin-top: 16px;

border-radius: 8px;

color: #343A40;

}

.ac-box.acb-gray {

background-color: #f7f7f7;

border: none;

}

.radio-card {

display: flex;

gap: 8px;

border: 1px solid #e5e5e5;

margin-top: 12px;

border-radius: 8px;

padding: 8px 12px;

}

.radio-card input {

margin-top: -1px;

}

&lt;/style&gt;

&lt;form action="#" id="form_countdown_jadwal_antrol"&gt;

&lt;div id="modalCountDownAntrol" class="modal modal-alert fade" tabindex="-1" role="dialog" aria-labelledby="modal" data-backdrop="static" data-keyboard="false"&gt;

&lt;div class="modal-dialog" role="document"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-body"&gt;

&lt;div class="alert-img text-center"&gt;

&lt;svg width="90" height="91" viewBox="0 0 90 91" fill="none" xmlns="<http://www.w3.org/2000/svg>"&gt;

&lt;circle cx="45" cy="45.5" r="45" fill="#FFF4DD"&gt;&lt;/circle&gt;

&lt;circle cx="45.0002" cy="45.5002" r="39.1936" fill="#FFD496"&gt;&lt;/circle&gt;

&lt;path d="M63.6999 56.3279L48.6694 30.2253C48.2938 29.5858 47.7576 29.0555 47.114 28.6871C46.4703 28.3187 45.7415 28.1249 44.9999 28.1249C44.2582 28.1249 43.5295 28.3187 42.8858 28.6871C42.2422 29.0555 41.706 29.5858 41.3304 30.2253L26.2999 56.3279C25.9385 56.9465 25.748 57.65 25.748 58.3664C25.748 59.0828 25.9385 59.7863 26.2999 60.4048C26.6707 61.0482 27.206 61.5813 27.8508 61.9495C28.4957 62.3177 29.2269 62.5077 29.9694 62.5H60.0304C60.7723 62.5071 61.5028 62.3168 62.147 61.9486C62.7912 61.5805 63.326 61.0477 63.6965 60.4048C64.0584 59.7866 64.2494 59.0832 64.25 58.3668C64.2506 57.6505 64.0608 56.9468 63.6999 56.3279ZM61.316 59.0281C61.185 59.2516 60.9968 59.4363 60.7709 59.5631C60.545 59.69 60.2894 59.7545 60.0304 59.75H29.9694C29.7104 59.7545 29.4548 59.69 29.2289 59.5631C29.0029 59.4363 28.8148 59.2516 28.6838 59.0281C28.5651 58.8272 28.5025 58.598 28.5025 58.3647C28.5025 58.1313 28.5651 57.9022 28.6838 57.7012L43.7143 31.5986C43.8479 31.3761 44.0369 31.192 44.2628 31.0642C44.4887 30.9365 44.7438 30.8693 45.0033 30.8693C45.2629 30.8693 45.518 30.9365 45.7439 31.0642C45.9697 31.192 46.1587 31.3761 46.2924 31.5986L61.3229 57.7012C61.4405 57.9028 61.5019 58.1322 61.5007 58.3656C61.4995 58.599 61.4357 58.8278 61.316 59.0281ZM43.6249 48.75V41.875C43.6249 41.5103 43.7698 41.1606 44.0276 40.9027C44.2855 40.6448 44.6352 40.5 44.9999 40.5C45.3646 40.5 45.7143 40.6448 45.9722 40.9027C46.23 41.1606 46.3749 41.5103 46.3749 41.875V48.75C46.3749 49.1146 46.23 49.4644 45.9722 49.7222C45.7143 49.9801 45.3646 50.125 44.9999 50.125C44.6352 50.125 44.2855 49.9801 44.0276 49.7222C43.7698 49.4644 43.6249 49.1146 43.6249 48.75ZM47.0624 54.9375C47.0624 55.3454 46.9414 55.7442 46.7148 56.0833C46.4882 56.4225 46.166 56.6869 45.7892 56.843C45.4123 56.9991 44.9976 57.0399 44.5975 56.9603C44.1974 56.8808 43.8299 56.6843 43.5415 56.3959C43.253 56.1074 43.0566 55.7399 42.977 55.3398C42.8974 54.9398 42.9383 54.5251 43.0944 54.1482C43.2505 53.7713 43.5149 53.4492 43.854 53.2226C44.1932 52.9959 44.592 52.875 44.9999 52.875C45.5469 52.875 46.0715 53.0923 46.4583 53.4791C46.8451 53.8659 47.0624 54.3905 47.0624 54.9375Z" fill="#FF9600"&gt;&lt;/path&gt;

&lt;/svg&gt;

&lt;/div&gt;

&lt;input type="hidden" name="antrol_countdown_send" id="antrol_countdown_send" value="0"&gt;

&lt;div class="alert-title text-center"&gt;Koneksi ke BPJS sedang mengalami gangguan&lt;/div&gt;

&lt;div class="alert-content text-center"&gt;

Mohon menunggu &lt;span id="countdowntimer"&gt;10 &lt;/span&gt; detik untuk mengirim ulang.

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;button disabled="" class="btn btn-block btn-hafis" style="font-size: 14px;font-weight: bold;background-color:#B6B6B6;color:white" type="submit" id="btn_countdown_jadwal_antrol"&gt;

Kirim Ulang

&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;script type="text/javascript"&gt;

\$("#form_countdown_jadwal_antrol").on('submit',function(event){

event.preventDefault();

\$("#countdowntimer").html(10);

\$("#modalRespAntrol").modal('hide');

\$("#modalCountDownAntrol").modal('hide');

setTimeout(function(){

actionConfirmAntrol();

},500)

});

&lt;/script&gt;&lt;style&gt;

# modalCountDownMulaiPelayananBpjs .btn-hafis {

font-size: 16px;

padding: 10px 15px;

border-radius: 4px;

\-webkit-box-shadow: none;

box-shadow: none;

\-webkit-transition: all 0.2s;

transition: all 0.2s;

}

# modalCountDownMulaiPelayananBpjs .border-top {

border-top: 1px solid #e5e5e5;

}

# modalCountDownMulaiPelayananBpjs.modal-alert {

border-radius: 24px;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog {

width: 480px;

margin: 72px auto;

}

@media (max-width: 575px) {

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog {

width: calc(100% - 16px);

margin: 8px;

}

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content {

\-webkit-box-shadow: none;

box-shadow: none;

border-radius: 16px;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-body {

padding: 30px;

color: #6C757D;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-body .alert-img {

margin-bottom: 20px;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-body .alert-title {

font-size: 18px;

color: #333;

font-weight: bold;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-body .alert-content {

padding-top: 10px;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-body .alert-action {

padding-top: 24px;

margin-top: 24px;

display: -webkit-box;

display: -ms-flexbox;

display: flex;

\-webkit-box-orient: vertical;

\-webkit-box-direction: normal;

\-ms-flex-direction: column;

flex-direction: column;

\-webkit-box-align: center;

\-ms-flex-align: center;

align-items: center;

gap: 10px;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-footer {

padding: 20px;

background-color: #f7f7f7;

border-bottom-left-radius: 16px;

border-bottom-right-radius: 16px;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-footer .btn+.btn {

margin-left: 0;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-footer.two-action {

display: -webkit-box;

display: -ms-flexbox;

display: flex;

\-webkit-box-align: center;

\-ms-flex-align: center;

align-items: center;

gap: 20px;

padding: 20px 0;

}

# modalCountDownMulaiPelayananBpjs.modal-alert .modal-dialog .modal-content .modal-footer.two-action .btn {

\-webkit-box-flex: 1;

\-ms-flex: 1;

flex: 1;

}

# modalCountDownMulaiPelayananBpjs .ac-box {

padding: 16px;

border: 1px solid #e5e5e5;

margin-top: 16px;

border-radius: 8px;

color: #343A40;

}

# modalCountDownMulaiPelayananBpjs .ac-box.acb-gray {

background-color: #f7f7f7;

border: none;

}

# modalCountDownMulaiPelayananBpjs .radio-card {

display: flex;

gap: 8px;

border: 1px solid #e5e5e5;

margin-top: 12px;

border-radius: 8px;

padding: 8px 12px;

}

# modalCountDownMulaiPelayananBpjs .radio-card input {

margin-top: -1px;

}

&lt;/style&gt;

&lt;form action="#" id="form_countdown_mulai_pelayanan"&gt;

&lt;div id="modalCountDownMulaiPelayananBpjs" class="modal modal-alert fade" tabindex="-1" role="dialog" aria-labelledby="modal" data-backdrop="true" data-keyboard="true"&gt;

&lt;div class="modal-dialog" role="document"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-body"&gt;

&lt;div class="alert-img text-center"&gt;

&lt;svg width="90" height="91" viewBox="0 0 90 91" fill="none" xmlns="<http://www.w3.org/2000/svg>"&gt;

&lt;circle cx="45" cy="45.5" r="45" fill="#FFF4DD"&gt;&lt;/circle&gt;

&lt;circle cx="45.0002" cy="45.5002" r="39.1936" fill="#FFD496"&gt;&lt;/circle&gt;

&lt;path d="M63.6999 56.3279L48.6694 30.2253C48.2938 29.5858 47.7576 29.0555 47.114 28.6871C46.4703 28.3187 45.7415 28.1249 44.9999 28.1249C44.2582 28.1249 43.5295 28.3187 42.8858 28.6871C42.2422 29.0555 41.706 29.5858 41.3304 30.2253L26.2999 56.3279C25.9385 56.9465 25.748 57.65 25.748 58.3664C25.748 59.0828 25.9385 59.7863 26.2999 60.4048C26.6707 61.0482 27.206 61.5813 27.8508 61.9495C28.4957 62.3177 29.2269 62.5077 29.9694 62.5H60.0304C60.7723 62.5071 61.5028 62.3168 62.147 61.9486C62.7912 61.5805 63.326 61.0477 63.6965 60.4048C64.0584 59.7866 64.2494 59.0832 64.25 58.3668C64.2506 57.6505 64.0608 56.9468 63.6999 56.3279ZM61.316 59.0281C61.185 59.2516 60.9968 59.4363 60.7709 59.5631C60.545 59.69 60.2894 59.7545 60.0304 59.75H29.9694C29.7104 59.7545 29.4548 59.69 29.2289 59.5631C29.0029 59.4363 28.8148 59.2516 28.6838 59.0281C28.5651 58.8272 28.5025 58.598 28.5025 58.3647C28.5025 58.1313 28.5651 57.9022 28.6838 57.7012L43.7143 31.5986C43.8479 31.3761 44.0369 31.192 44.2628 31.0642C44.4887 30.9365 44.7438 30.8693 45.0033 30.8693C45.2629 30.8693 45.518 30.9365 45.7439 31.0642C45.9697 31.192 46.1587 31.3761 46.2924 31.5986L61.3229 57.7012C61.4405 57.9028 61.5019 58.1322 61.5007 58.3656C61.4995 58.599 61.4357 58.8278 61.316 59.0281ZM43.6249 48.75V41.875C43.6249 41.5103 43.7698 41.1606 44.0276 40.9027C44.2855 40.6448 44.6352 40.5 44.9999 40.5C45.3646 40.5 45.7143 40.6448 45.9722 40.9027C46.23 41.1606 46.3749 41.5103 46.3749 41.875V48.75C46.3749 49.1146 46.23 49.4644 45.9722 49.7222C45.7143 49.9801 45.3646 50.125 44.9999 50.125C44.6352 50.125 44.2855 49.9801 44.0276 49.7222C43.7698 49.4644 43.6249 49.1146 43.6249 48.75ZM47.0624 54.9375C47.0624 55.3454 46.9414 55.7442 46.7148 56.0833C46.4882 56.4225 46.166 56.6869 45.7892 56.843C45.4123 56.9991 44.9976 57.0399 44.5975 56.9603C44.1974 56.8808 43.8299 56.6843 43.5415 56.3959C43.253 56.1074 43.0566 55.7399 42.977 55.3398C42.8974 54.9398 42.9383 54.5251 43.0944 54.1482C43.2505 53.7713 43.5149 53.4492 43.854 53.2226C44.1932 52.9959 44.592 52.875 44.9999 52.875C45.5469 52.875 46.0715 53.0923 46.4583 53.4791C46.8451 53.8659 47.0624 54.3905 47.0624 54.9375Z" fill="#FF9600"&gt;&lt;/path&gt;

&lt;/svg&gt;

&lt;/div&gt;

&lt;input type="hidden" name="check_countdown_send" id="check_countdown_send" value="0"&gt;

&lt;input type="hidden" name="total_resend_mulai" id="total_resend_mulai" value="0"&gt;

&lt;div class="alert-title text-center"&gt;Koneksi ke BPJS sedang mengalami perlambatan (1003)&lt;/div&gt;

&lt;div class="alert-content text-center"&gt;

Mohon menunggu &lt;span id="countdowntimer_mulai_pelayanan"&gt;10 &lt;/span&gt; detik untuk mengirim ulang.

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;button disabled="" class="btn btn-block btn-hafis" style="font-size: 14px;font-weight: bold;background-color:#B6B6B6;color:white" type="submit" id="btn_countdown_mulai_pelayanan"&gt;

Kirim Ulang

&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;script type="text/javascript"&gt;

\$("#form_countdown_mulai_pelayanan").on('submit',function(event){

event.preventDefault();

\$("#modalCountDownMulaiPelayananBpjs").modal('hide');

updateData(this, 'resendMulai');

});

function startCountdown() {

var timeleft = 10;

\$("#check_countdown_send").val(10);

\$("#countdowntimer_mulai_pelayanan").html(timeleft);

\$("#btn_countdown_mulai_pelayanan").prop("disabled", true);

\$("#btn_countdown_mulai_pelayanan").css({ 'background-color' : '#B6B6B6', 'color' : 'white' });

\$("#btn_countdown_mulai_pelayanan").removeClass("btn-warning");

var downloadTimer = setInterval(function(){

timeleft--;

document.getElementById("countdowntimer_mulai_pelayanan").textContent = timeleft;

if(timeleft <= 0){

clearInterval(downloadTimer);

\$("#btn_countdown_mulai_pelayanan").prop("disabled", false);

\$("#btn_countdown_mulai_pelayanan").css({ 'background-color' : '', 'color' : '' });

\$("#btn_countdown_mulai_pelayanan").addClass("btn-warning");

}

}, 1000);

}

\$("#modalCountDownMulaiPelayananBpjs").on('shown.bs.modal', function () {

startCountdown();

});

&lt;/script&gt;&lt;style&gt;

.modal-dialog {

display: flex;

align-items: center;

min-height: calc(100vh - 60px);

}

.modal-content {

width: 100%;

}

&lt;/style&gt;

&lt;div id="modalResumeRawatInap" class="modal custom-popup fade" tabindex="-1" role="dialog" aria-labelledby="modalResumeRawatInapLabel" data-backdrop="static"&gt;

&lt;div class="modal-dialog modal-lg" role="document"&gt;

&lt;div class="modal-content"&gt;

&lt;form id="formResumeMedisRawatInap"&gt;

&lt;div class="modal-header mdl-closable"&gt;

&lt;h4 class="modal-title"&gt;Resume Medis&lt;/h4&gt;

&lt;button type="button" class="close" data-dismiss="modal" aria-label="Close"&gt;

&lt;svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="<http://www.w3.org/2000/svg"&gt;&lt;g> clip-path="url(#clip0_19554_39777)"&gt;&lt;path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L12 10.5858L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.4142 12L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12 13.4142L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.5858 12L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#6C757D"&gt;&lt;/path&gt;&lt;/g&gt;&lt;defs&gt;&lt;clipPath id="clip0_19554_39777"&gt;&lt;rect width="24" height="24" fill="white"&gt;&lt;/rect&gt;&lt;/clipPath&gt;&lt;/defs&gt;&lt;/svg&gt;

&lt;/button&gt;

&lt;/div&gt;

&lt;div class="modal-body"&gt;

&lt;div class="gform"&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label"&gt;DPJP &lt;span class="text-red"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;input type="text" class="form-control ui-autocomplete-input" name="dpjp" placeholder="Nama dokter" autocomplete="off"&gt;

&lt;input type="hidden" name="dokter_id" data-for="dokter_id"&gt;

&lt;/div&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label"&gt;Tanggal Mulai&lt;/label&gt;

&lt;div class="input-group"&gt;

&lt;input type="text" class="form-control" name="tanggal_mulai" placeholder="dd/mm/yyyy" disabled=""&gt;

&lt;span class="input-group-addon btn-info"&gt;&lt;i class="fa fa-calendar"&gt;&lt;/i&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label"&gt;Tanggal Selesai&lt;/label&gt;

&lt;div class="input-group"&gt;

&lt;input type="text" class="form-control" name="tanggal_selesai" placeholder="dd/mm/yyyy" disabled=""&gt;

&lt;span class="input-group-addon btn-info"&gt;&lt;i class="fa fa-calendar"&gt;&lt;/i&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;!-- Bagian ini dicomment karena di takeout sementara, akan digunakan untuk enhance --&gt;

&lt;!-- <div class="epus-ig"&gt;

&lt;div class="input-label"&gt;Tanda Tangan Digital&lt;/div&gt;

&lt;label class="switch m-0"&gt;

<input

class="switch-input"

type="checkbox"

name="ttd_digital"

chedata-toggle="toggle"

value="1"

checked>

&lt;span class="switch-label" data-on="Aktif" data-off="Tidak Aktif"&gt;&lt;/span&gt;

&lt;span class="switch-handle"&gt;&lt;/span&gt;

&lt;/label&gt;

&lt;/div&gt; -->

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;button data-dismiss="modal" type="button" class="btn cta-default cta-reset"&gt;Tutup&lt;/button&gt;

&lt;button type="submit" class="btn cta-primary px-16 btn-loading" style="display: inline-flex;justify-content: center;gap: 6px; font-weight: 700;"&gt;

&lt;div class="spinner"&gt;&lt;/div&gt;

&lt;svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="<http://www.w3.org/2000/svg>" style="margin-top: 1px;"&gt;

&lt;g clip-path="url(#clip0_3555_9650)"&gt;

&lt;path d="M13.125 4.00313V0.5H2.875V4.00313C2.23466 4.03594 1.63134 4.31323 1.18944 4.77781C0.747536 5.24239 0.50076 5.85882 0.5 6.5V12.5H2.625V11.5H1.5V6.5C1.50045 6.10231 1.65863 5.72104 1.93983 5.43983C2.22104 5.15863 2.60231 5.00045 3 5H13C13.3977 5.00045 13.779 5.15863 14.0602 5.43983C14.3414 5.72104 14.4996 6.10231 14.5 6.5V11.5H13.125V12.5H15.5V6.5C15.4992 5.85882 15.2525 5.24239 14.8106 4.77781C14.3687 4.31323 13.7653 4.03594 13.125 4.00313V4.00313ZM12.125 4H3.875V1.5H12.125V4Z" fill="#ffffff"&gt;&lt;/path&gt;

&lt;path d="M12.375 6.25H13.375V7.25H12.375V6.25ZM3.625 8.25H2.375V9.25H3.625V15.5H12.125V9.25H13.375V8.25H3.625ZM11.125 14.5H4.625V9.25H11.125V14.5Z" fill="#ffffff"&gt;&lt;/path&gt;

&lt;/g&gt;

&lt;defs&gt;

&lt;clipPath id="clip0_3555_9650"&gt;

&lt;rect width="16" height="16" fill="white"&gt;&lt;/rect&gt;

&lt;/clipPath&gt;

&lt;/defs&gt;

&lt;/svg&gt;

Cetak Resume Medis Rawat Inap

&lt;/button&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;script&gt;

const modelForPelayanan = {"id":63569,"tanggal":"03-02-2026 00:00:00","ruangan_id":"0001","pendaftaran_id":63596,"tanggal_selesai":"03-02-2026 07:52:00","tanggal_mulai":"03-02-2026 07:52:00","instalasi_id":"01","statuspulang_id":"05","status_middleware":0,"antrean":"-0001","id_encounter_satset":null,"tanggal_pasien_pulang":"03-02-2026 07:52:00","tanggal_pasien_mulai":"03-02-2026 07:52:00","instalasi":{"id":"01","singkatan":"RJ"},"pendaftaran":{"id":63596,"tanggal":"03-02-2026 00:00:00","pasien_id":"0000000000140163","asuransi_id":"0001","umur_tahun":69,"umur_bulan":4,"umur_hari":17,"no_asuransi":"0000783815883","send_trigger":null,"pasien":{"id":"0000000000140163","no_rm_lama":"28635","no_dok_rm":"","nik":"3571021609560003","nama":"TAKAT","nama_ayah":null,"jenis_kelamin":"Laki-laki","tanggal_lahir":"16-09-1956","tempat_lahir":"KEDIRI","alamat":"JL. SEMANGKA NO. 74","no_hp":"085745536599","asuransi_id":"0001","no_asuransi":"0000783815883","rt":"1","rw":"5","kelurahan_id":"3571020004","kecamatan_id":"3571020","umur_tahun":69,"umur_bulan":4,"umur_hari":18,"alergi_pasien":\[{"anamnesa_id":58517,"pasien_id":"0000000000140163","jenis_alergi":"Obat","value":null},{"anamnesa_id":58517,"pasien_id":"0000000000140163","jenis_alergi":"Makanan","value":null},{"anamnesa_id":58517,"pasien_id":"0000000000140163","jenis_alergi":"Udara","value":null},{"anamnesa_id":58517,"pasien_id":"0000000000140163","jenis_alergi":"Umum","value":null}\]}},"ruangan":{"id":"0001","instalasi_id":"01","urutan":62,"nama":"DEWASA","poli_sakit":1,"kdPoli":"001","code":"UMUM","code_sound":"13 Klaster Dewasa","lokasi_id_satusehat":"5f48d5ac-bd28-456f-8a5f-d05723023cd3","is_antrean_pelayanan":1,"is_antrean_resep":1,"is_antrean_lab":1,"is_lplpo":0,"is_promotif":"0","is_anamnesa_kebidanan":"0","is_mcu":"1","is_klaster":1,"notif_lansia":"0","default_resep":null,"default_alkes":null,"status_resep":1,"kode_poli_mandiri_inhealth":null,"permission_roles":{"permission_roles":\["AnamnesaController@create","PeriksaFisikController@create","DiagnosaController@create","ResepController@create","OdontogramController@create","LaboratoriumController@create","TindakanController@create","MtbsController@create","MtbmController@create","ImunisasiController@create","KeurController@createSehat","KbController@create","PkprController@create","KohortController@create","PeriksaGiziController@create","TBParuController@create","PeriksaImsController@create","KonselingHivController@create","PengkajianKeperawatanController@create","PeriksaIvaController@create","TumbuhKembangAnakController@create","CatenController@create","PtmController@create","MataController@create","PengkajianResikoJatuhController@create","PrimaController@create","PsikologiController@create","KpspController@create","PalController@create","HajiController@create","Covid19Controller@create","ObatPasienController@create","KartuBayiController@create","AlkesController@create","DiareController@create","McuController@create","AnestesiBedahController@create","MtbmTahun2022Controller@create","MtbsV2Controller@create","PengkajianResikoJatuhMfsController@create","RaporKesehatanController@create"\]},"keterangan":"","batas_hari_booking":1,"prefix":"A","created_at":"20-03-2024 10:55:00","updated_at":"19-01-2026 09:33:56","deleted_at":null,"created_by":"ts_kyla_citra","updated_by":"aditama-balowerti","deleted_by":null,"icon":"images\\/Icon-Antrian\\/Poli-Umum.png"}};

const aksesRanap = true;

const instalasiIdRanap = "03";

const urlPelayanan = "https:\\/\\/kotakediri.epuskesmas.id\\/pelayanan";

const urlPelayananRanap = "https:\\/\\/kotakediri.epuskesmas.id\\/pelayananrawatinap";

function showModalResumeRawatInap(formData) {

if (formData) {

\$('input\[name="tanggal_mulai"\]').val(formData\['Pelayanan\[tanggal_mulai\]'\]);

\$('input\[name="tanggal_selesai"\]').val(formData\['Pelayanan\[tanggal_selesai\]'\]);

getDpjpAvailable();

}

\$('#modalResumeRawatInap').modal('show');

}

function getDpjpAvailable() {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/getresumeranap>",

method: 'POST',

dataType: "json",

data: {

pelayanan_id: "63569",

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function (data) {

if (data.status === 'success') {

if (!data.data.hasTtd || !data.data.hasTtd\[0\]?.\[0\]?.status_signature_pegawai) {

\$('input\[name="ttd_digital"\]')

.prop('checked', false)

.prop('disabled', true)

.closest('.switch')

.addClass('disabled');

}

\$('input\[name="dpjp"\]').val(data.data.dpjp_nama);

\$('input\[data-for="dokter_id"\]').val(data.data.dpjp_id);

} else {

console.error('Error fetching DPJP data:', data.message);

}

},

error: function (xhr, status, error) {

console.error('AJAX Error:', status, error);

console.log('Status Code:', xhr.status);

console.log('Response Text:', xhr.responseText);

}

});

}

\$('#modalResumeRawatInap').on('hidden.bs.modal', function () {

if (aksesRanap && modelForPelayanan.instalasi_id === instalasiIdRanap) {

window.location.replace(urlPelayananRanap);

} else {

window.location.replace(urlPelayanan);

}

});

\$("input\[name='dpjp'\]").autocomplete({

source: function (request, response) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/getresumeranap>",

method: 'POST',

dataType: "json",

data: {

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h",

autocomplete: 'dokter',

search: {

\['dokter_nama'\]: request.term

}

},

success: function (data) {

response(data)

},

error: function (xhr, status, error) {

console.error('AJAX Error:', status, error);

response(\[\]);

}

});

},

focus: function(event, ui) {

\$(this).parent().removeClass('has-success').addClass('has-error');

return false;

},

select: function(event, ui) {

\$(this).parent().removeClass('has-error').addClass('has-success');

\$(this).val(ui.item.label || ui.item.value);

\$('input\[data-for="dokter_id"\]').val(ui.item.id);

return false;

},

minLength: 2

})

\$('#formResumeMedisRawatInap').on('submit', function(e) {

e.preventDefault();

const submitBtn = \$(this).find('button\[type="submit"\]');

submitBtn.addClass('loading').prop('disabled', true);

const formData = {

dpjp: \$('input\[name="dpjp"\]').val(),

dokter_id: \$('input\[data-for="dokter_id"\]').val(),

tanggal_mulai: \$('input\[name="tanggal_mulai"\]').val(),

tanggal_selesai: \$('input\[name="tanggal_selesai"\]').val(),

// ttd_digital: \$('input\[name="ttd_digital"\]').is(':checked') ? true : false,

};

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/prosesresumeranap>",

method: 'POST',

dataType: "json",

data: {

pelayanan_id: "63569",

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h",

...formData

},

success: function (data) {

if (data.status === 'success') {

let url = '<https://kotakediri.epuskesmas.id/pelayanan/printresumeranap/63569>'

if (formData.ttd_digital) {

url += \`?templateprint=true&pelayanan=\` + '63569';

}

window.open(

url,

'\_blank',

'left=100,top=100,scrollbars=yes,resizable=yes,fullscreen=yes'

)

}

},

error: function (xhr, status, error) {

if (xhr.responseJSON && xhr.responseJSON.message) {

alert(xhr.responseJSON.message, xhr.responseJSON.status);

\$('input\[name="dpjp"\]').focus()

} else {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

}

},

complete: function () {

submitBtn.removeClass('loading').prop('disabled', false);

}

});

})

&lt;/script&gt;&lt;script src="<https://kotakediri.epuskesmas.id/js/socket.io.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/antrol.js?v=4.6"&gt;&lt;/script>&gt;

&lt;script type="text/javascript"&gt;

function sendTrigger(obj) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/sendtrigger/63596>",

method: 'POST',

dataType: "json",

data: {

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

setTimeout(function() {

if (data.status == 'danger') {

alert(data.message, data.status,3000);

}

}, 1000);

},

error: function (xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

}

function checkKontrol(obj){

if (document.getElementById('check-kontrol').checked) {

\$('#label-tanggal-kontrol').html('Tgl. Rencana Kontrol &lt;span style="color:red;"&gt;\*&lt;/span&gt;');

\$('#input-tanggal-kontrol').attr('required', true);

} else {

\$('#label-tanggal-kontrol').html('Tgl. Rencana Kontrol');

\$('#input-tanggal-kontrol').attr('required', false);

}

}

function buttonSwitchBridging()

{

\$.ajax({

headers: { 'X-CSRF-TOKEN': 'Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h' },

type: "POST",

url: "/switchbridgingasuransi",

data : {

id : "00001033231",

switchto : 'nonactive',

jenis : 'bpjs',

},

dataType: "JSON",

success: function (data) {

alert("BPJS berhasil dinonaktifkan. Silahkan mulai pelayanan dengan klik tombol mulai!",'success')

},

error: function (data) {

alert(data.responseJSON.meta.message)

}

});

}

function actionConfirmAntrol(){

\$("#button_mulai").click();

}

function updateData(obj, resendMulai = null)

{

var action = \$(obj).attr('data');

var form = \$('#form_pasienpulang');

const anamnesaActions = \["save-anamnesa-and-askep", "save-anamnesa"\];

const isStartFromAnamnesa = action == "mulai" && \$("#button_save").length > 0 && anamnesaActions.includes(\$("#button_save").attr("data"));

let shouldProcessAnamnesa = true;

if(action == 'selesai'){

if(requiredCheck(form.find('input')) == false){

if(document.getElementById('check-kontrol').checked){

alert('Silahkan isi tanggal rencana kontrol terlebih dahulu, sebelum menyelesaikan pemeriksaan pasien.','danger')

}

return false;

}

}

if(action == 'mulai_dokter'){

\$('#tanggal_mulai_dokter').val('2026-02-03 09:24:03');

}

\$(obj).addClass('loading');

var kirim_tanpa_antrol = \$("#kirim_tanpa_antrol").val() || 0;

var antrol_countdown_send = \$("#antrol_countdown_send").val() || 0

var total_resend_mulai = \$("#total_resend_mulai").val() || 0

\$("#modalRespAntrol").modal('hide');

\$("#modalCountDownAntrol").modal('hide');

\$("#jadwal_antrian_id").val("");

\$("#jadwal_antrian_jam").val("");

\$("#bridging_non_active_on").val('false');

\$.ajax({

url: form.attr('action'),

method: 'POST',

dataType: "json",

data: form.serialize()+"&kirim_tanpa_antrol="+kirim_tanpa_antrol+ '&antrol_countdown_send=' + antrol_countdown_send + (resendMulai ? '&resend_mulai=1' : '') + '&total_resend_mulai=' + total_resend_mulai,

success: function(data) {

if(data?.antrol_status){

\$(obj).removeClass('loading');

getResonseAntrol(data,'anamnesa')

if(data.antrol_status != 'success' && data.antrol_code != 200 && data?.statusbelumskrining != "belum skrining pcare"){

shouldProcessAnamnesa = false

return;

}

}

alert(data.message, data.status);

\$("#kirim_tanpa_antrol").val("")

if (data?.statusbelumskrining == "belum skrining pcare") {

popUpBpjsBelumSkrining('anamnesa')

\$(obj).removeClass('loading');

}

alert(data.message, data.status);

if (data.badung_sehat_error) {

alert(data.badung_sehat_message, 'danger');

}

\$(obj).removeClass('loading');

if(data.status == 'success'){

sendTrigger(this);

\$('div\[name=tanggal_mulai\]').html(data.tanggal_mulai);

\$('div\[name=tanggal_selesai\]').html(data.tanggal_selesai);

if(action == 'mulai'){

\$('.form-pulang').removeClass('hidden');

}

if (action == 'selesai') {

syncPendaftaranKiosk();

}

if(data?.status_bpjs == "perlambatan") {

\$('#total_resend_mulai').val(parseInt(data?.total_resend_mulai));

\$("#bridging_non_active_on").val('true');

if(parseInt(data?.total_resend_mulai) > 3){

showAlertBridgingNonActive("1003")

} else {

\$('#modalCountDownMulaiPelayananBpjs').modal('hide');

\$('.modal-backdrop').remove();

\$('body').removeClass('modal-open');

setTimeout(function() {

\$('#modalCountDownMulaiPelayananBpjs').modal('show');

}, 300);

}

return;

} else if (data?.status_bpjs == "timeout") {

showAlertBridgingNonActive("1001")

\$("#bridging_non_active_on").val('true');

return;

} else if (data?.status_helper_pcare == "error_helper_pcare") {

showAlertBridgingNonActive("1002")

\$("#bridging_non_active_on").val('true');

return;

}

\$(obj).removeClass('btn-warning').addClass('btn-success').attr('data','selesai').html('Selesai');

if (data.statuspulang_id == '04') {

setTimeout(function() {

window.location = "<https://kotakediri.epuskesmas.id/pelayanan/createrujukaninternal/63569?from=\\'pelayanan\\>'";

}, 1500);

}else if (data.statuspulang_id == '05') {

setTimeout(function() {

window.location = "<https://kotakediri.epuskesmas.id/rujukanexternal/create/63569?from=\\'pelayanan\\>'";

}, 1500);

}else if (data.statuspulang_id == '06') {

setTimeout(function() {

window.location = "<https://kotakediri.epuskesmas.id/pasienmeninggal/create/63569?from=\\'pelayanan\\>'";

}, 1500);

}else if (!isStartFromAnamnesa && data?.statusbelumskrining != "belum skrining pcare"){

const instalasi_id = 01;

const rawatInap_id = 03;

const formData = form.serializeArray().reduce(function(obj, item) {

obj\[item.name\] = item.value;

return obj;

}, {});

setTimeout(function() {

if (instalasi_id == rawatInap_id && action !== 'mulai') {

showModalResumeRawatInap(formData)

} else {

window.location.reload()

}

}, 2000);

}

}

\$('#modalRespPendaftaranAntrol').modal('hide')

\$('#pendaftaranAntrolKirimPcare').removeClass('loading')

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$(obj).removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

\$('#modalRespPendaftaranAntrol').modal('hide')

\$('#pendaftaranAntrolKirimPcare').removeClass('loading')

},

complete: function() {

/\*

Support case when the action is 'mulai', and the trigger from 'anamnesa'.

Starting to process submit the 'anamnesa' after 'pelayanan' started or not.

Anamnesis is still submitted regardless of whether the 'pelayanan' update succeeds or fails.

\*/

if (isStartFromAnamnesa && shouldProcessAnamnesa){

const triggerButtonAction = \$("#button_save").attr("data") == "save-anamnesa-and-askep" ? \$("#buttonAskep") : \$("#button_save");

const button_submit = \$(this).find('button\[type=submit\]');

button_submit.removeClass('loading');

triggerButtonAction.trigger("click");

}

}

});

}

function destroyData(obj)

{

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/destroy>",

method: 'POST',

dataType: "json",

data: {

id: "63569",

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

alert(data.message, data.status);

\$(obj).removeClass('loading');

window.location.replace(\$("#button_index").attr('href'));

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$(obj).removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

}

});

}

function setCallThis(obj)

{

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/setcall>",

method: 'POST',

dataType: "json",

data: {

id: "63569",

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

callAntreanKiosk('-1', 'UMUM')

alert(data.message, data.status);

\$(obj).removeClass('loading');

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$(obj).removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

}

});

}

function showAlertBridgingNonActive(codeError)

{

Swal.fire({

html: \`&lt;div style="padding-left:20px;padding-right:20px;margin-top:30px;"&gt;

&lt;svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="<http://www.w3.org/2000/svg>"&gt;

&lt;circle cx="45" cy="45" r="45" fill="#FBDBDD"/&gt;

&lt;circle cx="45.0002" cy="45" r="39.1936" fill="#EFCFD1"/&gt;

&lt;circle cx="44.9999" cy="45" r="17.871" fill="#FBDBDD" stroke="#D3555C" stroke-width="2"/&gt;

&lt;g clip-path="url(#clip0_17308_186)"&gt;

&lt;path fill-rule="evenodd" clip-rule="evenodd" d="M38.7708 39.2708C39.1735 38.8681 39.8265 38.8681 40.2292 39.2708L45 44.0416L49.7708 39.2708C50.1735 38.8681 50.8265 38.8681 51.2292 39.2708C51.6319 39.6735 51.6319 40.3265 51.2292 40.7292L46.4584 45.5L51.2292 50.2708C51.6319 50.6735 51.6319 51.3265 51.2292 51.7292C50.8265 52.1319 50.1735 52.1319 49.7708 51.7292L45 46.9584L40.2292 51.7292C39.8265 52.1319 39.1735 52.1319 38.7708 51.7292C38.3681 51.3265 38.3681 50.6735 38.7708 50.2708L43.5416 45.5L38.7708 40.7292C38.3681 40.3265 38.3681 39.6735 38.7708 39.2708Z" fill="#D3555C"/&gt;

&lt;/g&gt;

&lt;defs&gt;

&lt;clipPath id="clip0_17308_186"&gt;

&lt;rect width="22" height="22" fill="white" transform="translate(34 34.5)"/&gt;

&lt;/clipPath&gt;

&lt;/defs&gt;

&lt;/svg&gt;

&lt;div style="padding-top:10px"&gt;

&lt;h4 style="color:black;font-weight:bold"&gt;Koneksi ke BPJS sedang mengalami gangguan&lt;/h4&gt;

&lt;div&gt;Silakan untuk merubah status bridging terlebih dahulu hingga koneksi ke BPJS normal kembali (\`+codeError+\`).&lt;/div&gt;

&lt;/div&gt;

&lt;div&gt;

\`,

customClass: 'swal-custom',

reverseButtons: true,

showCancelButton: true,

allowOutsideClick: false,

allowEscapeKey: false,

confirmButtonColor: '#D3555C',

confirmButtonText: 'Non-aktifkan Bridging',

cancelButtonText: 'Tutup',

}).then((result) => {

if(result.value){

buttonSwitchBridging();

}

swal.close();

return;

});

}

function sendToMiddleware(obj) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/sendtomiddleware/63569>",

method: 'POST',

dataType: "json",

data: {

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

alert(data.message, data.status);

if (\$data.status == 'success') {

\$(obj).removeClass('loading');

\$('#button-middleware').remove()

\$('#send-to-middleware').append('&lt;label class="text-success pull-right"&gt;&lt;i class="fa fa-check-square-o" aria-hidden="true" style="margin-right: 5px;"&gt;&lt;/i&gt;Data sudah dikirim ke Middleware&lt;/label&gt;');

}

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$(obj).removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

}

});

}

function antrianBaru()

{

\$('.button_epus').prop( "disabled", true );

\$('.button_epus').addClass('loading');

setTimeout(function(){\$('.button_epus').prop( "disabled", false); \$('.button_epus').removeClass('loading');},2000);

let session = '00001033231';

let socket_port = '3231';

let url_socket = '' ? '' : '<https://panggilan.infokes.id>';

let socket = io.connect(url_socket + ':' + socket_port);

socket.on('connection');

socket.emit('room', session);

console.log('connected to room : '+session);

var antrian = '-0001';

const isAntrolEnable = '1';

const prefix=antrian.split('-')\[0\] ?? '';

const noAntrian=antrian.split('-')\[1\] ?? '';

const letterArray = prefix.split('') ?? \[\];

let poli ='0001';

let ruangan = '13 Klaster Dewasa' ? '13 Klaster Dewasa' : 'UMUM';

if(isAntrolEnable==1){

let data = \[ { 'antrian' : Number(noAntrian), 'ruangan' : ruangan , 'poli' : poli , 'prefix' : letterArray } \];

socket.emit('SendAntrianPoliServer', data);

}else{

let data = \[ { 'antrian' : Number(antrian), 'ruangan' : ruangan , 'poli' : poli } \];

socket.emit('SendAntrianPoliServer', data);

}

alert('Panggilan berhasil dikirim ke server, menunggu response...','success');

return false;

}

let regisDate = "2026-02-03 00:00:00"

\$('#finishDate').datetimepicker({

locale: 'id',

format: 'DD-MM-YYYY HH:mm:ss',

minDate: regisDate,

maxDate: new Date(),

defaultDate: null,

useCurrent: false

});

\$('#pendaftaranAntrolKirimPcare').click(function(){

\$('#pendaftaranAntrolKirimPcare').addClass('loading')

\$('#skip_validasi_antrol').val('1')

\$('#button_mulai').click()

})

\$(document).ready(function() {

var tgl_mulai = \$('#tgl_mulai').val();

var tgl_selesai = '03-02-2026 07:52:00';

\$('#tgl_selesai').val(tgl_selesai);

if((tgl_mulai!="") && (tgl_selesai!="")){

var tglmula1 = tgl_mulai.split('-');

var tglmula2 = tglmula1\[2\].split(' ');

var tanggal_awal = tglmula2\[0\]+"-"+tglmula1\[1\]+"-"+tglmula1\[0\]+" "+tglmula2\[1\];

//merubah format tanggal akhir waktu yyyy-mm-dd waktu

var tglselesai1 = tgl_selesai.split('-');

var tglselesai2 = tglselesai1\[2\].split(' ');

var tanggal_akhir = tglselesai2\[0\]+"-"+tglselesai1\[1\]+"-"+tglselesai1\[0\]+" "+tglselesai2\[1\];

var date1 = new Date(tanggal_awal.replace(' ', 'T')).getTime();

var date2 = new Date(tanggal_akhir.replace(' ', 'T')).getTime();

setDate(date1,date2);

}

});

function setTanggalSelesai(){

//merubah format tanggal awal waktu yyyy-mm-dd waktu

var tgl_mulai = \$('#tgl_mulai').val();

//merubah format tanggal akhir waktu yyyy-mm-dd waktu

var tgl_selesai = \$('#tgl_selesai').val();

if (tgl_selesai == "") {

tgl_selesai = '03-02-2026 07:52:00';

\$("#tgl_selesai").val(tgl_selesai);

}

var tglmula1 = tgl_mulai.split('-');

var tglmula2 = tglmula1\[2\].split(' ');

var tanggal_awal = tglmula2\[0\]+"-"+tglmula1\[1\]+"-"+tglmula1\[0\]+" "+tglmula2\[1\];

//merubah format tanggal akhir waktu yyyy-mm-dd waktu

var tglselesai1 = tgl_selesai.split('-');

var tglselesai2 = tglselesai1\[2\].split(' ');

var tanggal_akhir = tglselesai2\[0\]+"-"+tglselesai1\[1\]+"-"+tglselesai1\[0\]+" "+tglselesai2\[1\];

var date1 = new Date(tanggal_awal.replace(' ', 'T')).getTime();

var date2 = new Date(tanggal_akhir.replace(' ', 'T')).getTime();

setDate(date1,date2);

}

function setDate(date1,date2){

var delta = Math.abs(date2 - date1) / 1000;

// kalkulasi jumlah hari

var days = Math.floor(delta / 86400);

delta -= days \* 86400;

// kalkulasi jumlah jam

var hours = Math.floor(delta / 3600) % 24;

delta -= hours \* 3600;

// kalkulasi jumlah menit

var minutes = Math.floor(delta / 60) % 60;

delta -= minutes \* 60;

// kalkulasi jumlah detik

var seconds = delta % 60;

\$('#hari').val(days);

\$('#jam').val(hours);

\$('#menit').val(minutes);

}

&lt;/script&gt;

&lt;style&gt;

.badge-ksh {

padding: 8px;

width: 100%;

background: #FFF4DD;

border: 1px solid #FFC043;

border-radius: 8px;

font-size: 14px;

display: flex;

}

.flex-items {

margin: 0px 5px;

}

.end-flex {

margin-left: auto;

}

.end-flex>a {

color: #FFC043;

}

.btn-muted {

background: #B6B6B6;

border: 1px solid #B6B6B6;

color: white;

font-weight: bold;

}

# blurmenu {

height: 100vh;

width: 100%;

z-index: 999;

background: gray;

opacity: 0.8;

position: fixed;

top: 0;

left: 0;

}

.badge-pemberitahuan {

color: white;

background: black;

border: 1px solid black;

border-radius: 8px;

font-size: 14px;

display: flex;

padding: 10px;

justify-content: center;

align-items: center;

}

@media only screen and (min-width: 768px) {

.badge-pemberitahuan:before {

content: "";

position: absolute;

width: 0;

height: 0;

border-top: 15px solid transparent;

border-bottom: 15px solid transparent;

border-right: 15px solid black;

top: 10px;

left: -15px;

}

.badge-pemberitahuan {

position: absolute;

top: 50%;

right: -380px;

}

}

&lt;/style&gt;

&lt;div class="box box-bordered" id="box-KlasterSiklusHidup"&gt;

&lt;div class="box-header with-border accordion-toggle" data-toggle="collapse" data-target="#collapseKlasterSiklusHidup" aria-expanded="true" aria-controls="collapseIdentitas"&gt;

&lt;label&gt;&lt;b&gt;Klaster & Siklus Hidup&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered collapse in" id="collapseKlasterSiklusHidup" aria-labelledby="headingTwo" data-parent="#KlasterSiklusHidup"&gt;

&lt;form class="form-horizontal"&gt;

&lt;div class="notice ntc-warning mb-16"&gt;

&lt;div class="ntc-desc"&gt;

&lt;svg xmlns="<http://www.w3.org/2000/svg>" width="20" height="20" viewBox="0 0 20 20" fill="none"&gt;

&lt;path d="M12.5001 1.6665H7.50008C7.03984 1.6665 6.66675 2.0396 6.66675 2.49984V4.1665C6.66675 4.62674 7.03984 4.99984 7.50008 4.99984H12.5001C12.9603 4.99984 13.3334 4.62674 13.3334 4.1665V2.49984C13.3334 2.0396 12.9603 1.6665 12.5001 1.6665Z" stroke="#FF9600" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"&gt;&lt;/path&gt;

&lt;path d="M13.3334 3.33301H15C15.4421 3.33301 15.866 3.5086 16.1786 3.82116C16.4911 4.13372 16.6667 4.55765 16.6667 4.99967V16.6663C16.6667 17.1084 16.4911 17.5323 16.1786 17.8449C15.866 18.1574 15.4421 18.333 15 18.333H5.00004C4.55801 18.333 4.13409 18.1574 3.82153 17.8449C3.50897 17.5323 3.33337 17.1084 3.33337 16.6663V4.99967C3.33337 4.55765 3.50897 4.13372 3.82153 3.82116C4.13409 3.5086 4.55801 3.33301 5.00004 3.33301H6.66671M10 9.16634H13.3334M10 13.333H13.3334M6.66671 9.16634H6.67504M6.66671 13.333H6.67504" stroke="#FF9600" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"&gt;&lt;/path&gt;

&lt;/svg&gt;

&lt;div id="user_skriningklastersiklushidup"&gt;&lt;b&gt;0&lt;/b&gt; dari &lt;b&gt;24 skrining&lt;/b&gt; sudah dilakukan&lt;/div&gt;

&lt;/div&gt;

&lt;div id="lihat_skriningklastersiklushidup"&gt;&lt;a href="<https://kotakediri.epuskesmas.id/klaster_siklushidup/63569>" target="\_blank"&gt;&lt;b&gt;Lihat&lt;/b&gt;&lt;/a&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label" style="text-align: left"&gt;Klaster&lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;select name="" class="form-control input-sm" id="chooseKlaster" onchange="checkSubDropdownSiklusHidup()"&gt;

&lt;option value="Klaster 2"&gt;Klaster 2 (Ibu

dan Anak)&lt;/option&gt;

&lt;option value="Klaster 3" selected=""&gt;Klaster 3 (Usia

Dewasa dan Lansia)&lt;/option&gt;

&lt;option value="Klaster 4"&gt;Klaster 4

(Penanggulangan Penyakit Menular)&lt;/option&gt;

&lt;/select&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label" style="text-align: left" id="wordingsiklusklaster"&gt; Siklus

hidup &lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;select name="" class="form-control input-sm" id="subDropdownKlaster" onchange="checkButtonSiklusHidup()"&gt;

&lt;option value="Usia Dewasa"&gt;Usia

Dewasa&lt;/option&gt;

&lt;option value="Lanjut Usia" selected=""&gt;Lanjut

Usia&lt;/option&gt;

&lt;/select&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="pull-right"&gt;

&lt;button type="button" class="btn btn-muted btn-sm" onclick="saveKlasterSiklusHidup()" id="tombolTerapkanKlasterSiklusHidup" disabled=""&gt;Terapkan&lt;/button&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;script&gt;

var mapping_klaster = 'Klaster 3'

var siklus_hidup = 'Lanjut Usia'

\$(document).ready(function() {

if ('') {

checkDropdownKlaster()

setTimeout(function() {

\$('html, body').scrollTop(\$("#collapseKlasterSiklusHidup").offset().top - 100)

}, 500);

saveKlasterSiklusHidup()

}

getSkriningKlasterSkriningHidup();

})

function okPemberitahuanKlaster() {

\$('#blurmenu').remove()

\$('.badge-pemberitahuan').remove()

\$('#box-KlasterSiklusHidup').css('z-index', '0')

\$('#box-KlasterSiklusHidup').css('outline', 'none')

}

function checkDropdownKlaster() {

if (('' == '1' && 'Laki-laki' == 'Perempuan') || ('69' <=

17)) {

\$('#chooseKlaster').val('Klaster 2');

} else {

\$('#chooseKlaster').val('Klaster 3');

}

checkSubDropdownSiklusHidup()

checkSubValueSiklusHidup()

}

function checkSubDropdownSiklusHidup() {

var value = \$('#chooseKlaster').val();

var dropdowns = '';

if (value == 'Klaster 2') {

dropdowns = \`&lt;option value="Ibu Hamil, Bersalin & Nifas"&gt;Ibu Hamil, Bersalin & Nifas&lt;/option&gt;

&lt;option value="Balita dan Anak Pra-sekolah"&gt;Balita dan Anak Pra-sekolah&lt;/option&gt;

&lt;option value="Anak Usia Sekolah dan Remaja"&gt;Anak Usia Sekolah dan Remaja&lt;/option&gt;\`

\$('#wordingsiklusklaster').text('Siklus hidup');

} else if (value == 'Klaster 3') {

dropdowns = \`&lt;option value="Usia Dewasa"&gt;Usia Dewasa&lt;/option&gt;

&lt;option value="Lanjut Usia"&gt;Lanjut Usia&lt;/option&gt;\`

\$('#wordingsiklusklaster').text('Siklus hidup');

} else {

dropdowns = \`&lt;option value="Kesehatan Lingkungan"&gt;Kesehatan Lingkungan&lt;/option&gt;

&lt;option value="Surveilans"&gt;Surveilans&lt;/option&gt;\`

\$('#wordingsiklusklaster').text('Kategori');

}

\$('#subDropdownKlaster').html(dropdowns)

checkButtonSiklusHidup()

}

function checkSubValueSiklusHidup() {

if (('' == '1' && 'Laki-laki' == 'Perempuan')) {

\$('#subDropdownKlaster').val('Ibu Hamil, Bersalin & Nifas');

} else if ('69' <= 6) {

\$('#subDropdownKlaster').val('Balita dan Anak Pra-sekolah');

} else if ('69' <= 17) {

\$('#subDropdownKlaster').val('Anak Usia Sekolah dan Remaja');

} else if ('69' <= 59) {

\$('#subDropdownKlaster').val('Usia Dewasa');

} else {

\$('#subDropdownKlaster').val('Lanjut Usia');

}

}

function saveKlasterSiklusHidup() {

\$('#tombolTerapkanKlasterSiklusHidup').addClass('loading');

\$.ajax({

method: "POST",

url: "<https://kotakediri.epuskesmas.id/pelayanan/klastersiklushidup>",

dataType: "json",

data: {

\_token: 'Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h',

id: \`63569\`,

ilp: {

'mapping_klaster': \$('#chooseKlaster').val(),

'siklus_hidup': \$('#subDropdownKlaster').val()

}

},

beforeSend: function() {},

success: function(data) {

alert(data.message, data.status);

if (data.status == 'success') {

mapping_klaster = \$('#chooseKlaster').val()

siklus_hidup = \$('#subDropdownKlaster').val()

checkButtonSiklusHidup()

getSkriningKlasterSkriningHidup();

}

\$('#tombolTerapkanKlasterSiklusHidup').removeClass('loading');

},

complete: function(xhr) {

\$('#tombolTerapkanKlasterSiklusHidup').removeClass('loading');

}

});

}

function checkButtonSiklusHidup() {

if (mapping_klaster == \$('#chooseKlaster').val() && siklus_hidup == \$('#subDropdownKlaster').val()) {

\$('#tombolTerapkanKlasterSiklusHidup').prop('disabled', true);

\$('#tombolTerapkanKlasterSiklusHidup').removeClass('btn-success');

} else {

\$('#tombolTerapkanKlasterSiklusHidup').prop('disabled', false);

\$('#tombolTerapkanKlasterSiklusHidup').addClass('btn-success');

}

}

function getSkriningKlasterSkriningHidup(){

let chooseKlaster = \$("#chooseKlaster").val()

let subDropdownKlaster = \$("#subDropdownKlaster").val()

\$.post(\`/klaster_siklushidup/63569\`,{'chooseKlaster': chooseKlaster, 'subDropdownKlaster': subDropdownKlaster,'\_token': 'Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h'},function (result) {

if(result?.total || result?.done){

\$("#lihat_skriningklastersiklushidup").parent().removeClass('ntc-column');

\$("#user_skriningklastersiklushidup").html(\`&lt;b&gt;\${result?.done || 0}&lt;/b&gt; dari &lt;b&gt;\${result?.total || 0} skrining&lt;/b&gt; sudah dilakukan\`);

\$("#lihat_skriningklastersiklushidup").html(\`&lt;a href="<https://kotakediri.epuskesmas.id/klaster_siklushidup/63569>" target="\_blank"&gt;&lt;b&gt;Lihat&lt;/b&gt;&lt;/a&gt;\`);

}else{

\$("#lihat_skriningklastersiklushidup").parent().addClass('ntc-column');

\$("#user_skriningklastersiklushidup").html(\`Skrining Belum Tersedia. Silakan lakukan konfigurasi terlebih dahulu.\`);

\$("#lihat_skriningklastersiklushidup").html(\`&lt;a href="<https://kotakediri.epuskesmas.id/configilp>" target="\_blank"&gt;&lt;b&gt;Lakukan Konfigurasi&lt;/b&gt;&lt;/a&gt;\`);

}

},'json')

}

&lt;/script&gt;

&lt;style&gt;

.keteranganTombolCppt{

color: var(--text-secondary-text, #6C757D);

font-size: 12px;

font-family: Helvetica Neue;

font-style: italic;

font-weight: 400;

line-height: 20px;

}

&lt;/style&gt;

&lt;div class="box box-bordered" id="content_pelayanan_pkg"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;CKG (Cek Kesehatan Gratis)&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="row"&gt;

&lt;div class="col-sm-12" id="content_data_pkg"&gt;&lt;a type="button" class="btn btn-sm btn-success" style="width:100%;box-shadow:none !important" onclick="addPelayananPkg()"&gt;

&lt;div class="row"&gt;

&lt;div class="col-sm-12 text-left"&gt;

&lt;h5 style="color:white;text-align:center"&gt;&lt;b&gt;Tandai sudah CKG (2026)&lt;/b&gt;&lt;/h5&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/a&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;script&gt;

getPelayananPkg();

function getPelayananPkg(){

let id, type, tanggal, data;

var limit = 5;

id = "0000000000140163"

type = "pasien"

tanggal = "2026-02-03";

data = {

\_token: 'Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h',

'id' : id,

'type' : type,

'tanggal' : tanggal,

};

\$.post(\`/pelayanan/getdatapkg\`,data,function(res){

var html = '';

let display = res?.display || false;

let data = res?.message || \[\];

let year = "2026";

if(display){

\$("#content_pelayanan_pkg").removeClass('hide');

}else{

\$("#content_pelayanan_pkg").addClass('hide');

}

if(data.length > 0) {

\$("#content_pelayanan_pkg").removeClass('hide');

html += \`&lt;table class="table table-bordered table-hover table-condensed table-sortable" style="border-radius:16px;"&gt;\`;

html += \`&lt;thead&gt;\`;

html += \`&lt;tr class="btn-primary"&gt;

&lt;th&gt;No&lt;/th&gt;

&lt;th width="70%"&gt;Tanggal CKG&lt;/th&gt;

&lt;th&gt;Aksi&lt;/th&gt;

&lt;/tr&gt;\`

html += \`&lt;/thead&gt;\`;

html += \`&lt;tbody&gt;\`;

data.forEach(function(val, i){

if(val.year == year){

display = false;

}

html += \`&lt;tr id="pkg_table_\${i+1}" class="\${(i+1) &gt; limit ? 'hide' : '' }">

&lt;td style="padding:12px"&gt;\${i+1}&lt;/td&gt;

&lt;td style="padding:12px"&gt;\${convertDate(val.tanggal,'d m Y')}&lt;/td&gt;

&lt;td style="padding:12px" class="center"&gt;&lt;a style="color:#fb483a;cursor:pointer" onclick="deletePelayananPkg(\${val.id},'\${val.tanggal}')"&gt;&lt;i class="fa fa-trash"&gt;&lt;/i&gt; Hapus&lt;/a&gt;&lt;/td&gt;

&lt;/tr&gt;\`

})

html += \`&lt;/tbody&gt;\`;

html += \`&lt;/table&gt;\`;

html += \`&lt;input type='hidden' id='page_active_pkg' value='1'&gt;\`;

html += paginationPkg(data);

}

if(display){

html = \`&lt;a type="button" class="btn btn-sm btn-success" style="width:100%;box-shadow:none !important" onclick="addPelayananPkg()"&gt;

&lt;div class="row"&gt;

&lt;div class="col-sm-12 text-left"&gt;

&lt;h5 style="color:white;text-align:center"&gt;&lt;b&gt;Tandai sudah CKG (\${year})&lt;/b&gt;&lt;/h5&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/a&gt;\`

}

\$("#content_data_pkg").html(html)

})

}

function addPelayananPkg(){

let id, type, tanggal, data;

id = "0000000000140163"

type = "pasien"

tanggal = "2026-02-03";

data = {

\_token: 'Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h',

'id' : id,

'type' : type,

'tanggal' : tanggal,

};

\$.post(\`/pelayanan/add_pkg\`,data,function(res){

alert(res?.message, res?.status);

getPelayananPkg();

})

}

function deletePelayananPkg(id,tanggal){

Swal.fire({

html: \`&lt;div style="padding-left:20px;padding-right:20px;margin-top:30px;"&gt;

\${svgDanger}

&lt;div style="padding-top:10px"&gt;

&lt;h4 style="color:black;font-weight:bold"&gt;Hapus Pendaftaran CKG "\${convertDate(tanggal,'d m Y')}" ?&lt;/h4&gt;

&lt;/div&gt;

&lt;div&gt;

\`,

customClass: 'swal-custom',

reverseButtons: true,

showCancelButton: true,

allowOutsideClick: false,

allowEscapeKey: false,

confirmButtonColor: '#D3555C',

confirmButtonText: 'Hapus',

cancelButtonText: 'Batal',

}).then((result) => {

let data = {

\_token: 'Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h',

'id' : id,

};

if(result.value){

\$.post("/pelayanan/delete_pkg",data,function(res){

alert(res?.message, res?.status);

getPelayananPkg();

})

}

swal.close();

return;

})

}

function paginationPkg(data){

var html = '';

html += \` &lt;nav class="wrapper"&gt;

&lt;ul class="pagination" style="margin:0px"&gt;

&lt;li onclick='previous_page_pkg()'&gt;&lt;a href="javascript:void(0)" aria-label=Previous&gt;<span

aria-hidden=true>«&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;\`

var limit = 5;

var total = data.length;

var total_page = Math.ceil(total / limit);

for (var i = 1; i <= total_page; i++) {

html += \`&lt;li class='current-page \${i==1 ? 'active' : ''}' id="current_page_\${i}" onclick="changePagePkg(\${i})"&gt;&lt;a href='javascript:void(0)'&gt;\${i}&lt;/a&gt;&lt;/li&gt;\`

}

html += \`&lt;li onclick='next_page_pkg()'&gt;&lt;a href='javascript:void(0)' aria-label=Next&gt;&lt;span aria-hidden=true&gt;»&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;

&lt;/ul&gt;&lt;/nav&gt;\`

return html;

}

function changePagePkg(page){

var limit = 5;

\$("#page_active_pkg").val(page);

var start = page == 1 ? 1 : (((page - 1) \* limit) + 1)

var end = start + (limit-1)

\$('\[id^="current_page_"\]').removeClass('active');

\$(\`#current_page_\${page}\`).addClass('active');

\$('\[id^="pkg_table_"\]').addClass('hide');

for (var i = start; i <= end; i++) {

\$(\`#pkg_table_\${i}\`).removeClass('hide')

}

}

function previous_page_pkg(){

var page = parseInt(\$("#page_active_pkg").val());

if(page > 1){

changePagePkg(page - 1);

}

}

function next_page_pkg(){

var page = parseInt(\$("#page_active_pkg").val());

var total_page = parseInt(\$('\[id^="current_page_"\]').length);

if(page < total_page){

changePagePkg(page + 1);

}

}

&lt;/script&gt;

&lt;style&gt;

.keteranganTombolCppt{

color: var(--text-secondary-text, #6C757D);

font-size: 12px;

font-family: Helvetica Neue;

font-style: italic;

font-weight: 400;

line-height: 20px;

}

&lt;/style&gt;

&lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;Catatan Perkembangan Pasien Terintegrasi (CPPT)&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="row"&gt;

&lt;div class="col-sm-12"&gt;

&lt;a id="button_redirect_cppt" type="button" class="btn btn-sm btn-primary" style="width:100%" href="<https://kotakediri.epuskesmas.id/cppt/63569>"&gt;

&lt;div class="row"&gt;

&lt;div class="col-sm-9 text-left"&gt;

&lt;h5 style="color:white"&gt;&lt;b&gt;Lihat CPPT&lt;/b&gt;&lt;/h5&gt;

&lt;/div&gt;

&lt;div class="col-sm-3 text-right"&gt;

&lt;i class="fa fa-arrow-right" style="top:6px!important;color:white"&gt;&lt;/i&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/a&gt;

&lt;/div&gt;

&lt;div class="col-sm-12"&gt;

&lt;i class="keteranganTombolCppt"&gt;Klik "Simpan" terlebih dahulu agar data terupdate&lt;/i&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt; &lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;Cetak Surat&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;form class="form-horizontal" id="formCetak"&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label"&gt;Cetak &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;select class="form-control input-sm" required="" name="CetakSuratSurat" onchange="checkValueCetakSurat()"&gt;

&lt;option value=""&gt;- PILIH -&lt;/option&gt;

&lt;/select&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-12"&gt;

&lt;input type="checkbox" id="is_signature" value="true" name="CetakSuratElektronik" v-model="isSignature"&gt;&lt;label for="is_signature" style="color: #808080;"&gt; Menggunakan tanda tangan elektronik&lt;/label&gt;

&lt;/label&gt;

&lt;/div&gt;

&lt;div class="pull-right"&gt;

&lt;button id="button_cetak_signature" type="button" class="btn btn-sm btn-primary"&gt;Cetak&lt;/button&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;/div&gt;

&lt;style&gt;

# informationModalForm2 .custom-stepper li.done:before {

padding-top: 5px!important;

}

&lt;/style&gt;

&lt;div id="informationModalForm2" class="modal fade" role="dialog" aria-labelledby="modal"&gt;

&lt;div class="modal-dialog modal-xl" role="document"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-header"&gt;

&lt;button type="button" class="close" data-dismiss="modal" aria-label="Close"&gt;&lt;span aria-hidden="true"&gt;×&lt;/span&gt;&lt;/button&gt;

&lt;h5 class="modal-title"&gt;Informed Consent&lt;/h5&gt;

&lt;/div&gt;

&lt;form action="#" id="formDetailInformationTindakanPPSignature"&gt;

&lt;input type="hidden" name="\_token" value="Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"&gt;

&lt;input type="hidden" name="tindakanCheckSignature" value="true"&gt;

&lt;div class="modal-form point1"&gt;

&lt;div class="modal-body stepper-modal"&gt;

&lt;div class="sm-header"&gt;

&lt;ol class="custom-stepper"&gt;

&lt;li class="current"&gt;Tindakan&lt;/li&gt;

&lt;li&gt;Persetujuan&lt;/li&gt;

&lt;/ol&gt;

&lt;/div&gt;

&lt;div id="point1"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-form point2"&gt;

&lt;div class="modal-body stepper-modal"&gt;

&lt;div class="sm-header"&gt;

&lt;ol class="custom-stepper"&gt;

&lt;li class="done"&gt;Tindakan&lt;/li&gt;

&lt;li class="current"&gt;Persetujuan&lt;/li&gt;

&lt;/ol&gt;

&lt;/div&gt;

&lt;div class="sm-content" id="persetujuanpenolakanpenanggungjawab"&gt;

&lt;div class="group-border"&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label w-220"&gt;Yang Bertanda tangan di bawah ini&lt;/label&gt;

&lt;div class="radio-group"&gt;

&lt;label class="custom-radio"&gt;

Pasien

&lt;input type="radio" name="tindakanPayload\[0\]\[penanggung_jawab\]" onchange="changePenanggungJawab()" value="Pasien" checked=""&gt;

&lt;span class="checkmark"&gt;&lt;/span&gt;

&lt;/label&gt;

&lt;label class="custom-radio"&gt;

Pendamping

&lt;input type="radio" name="tindakanPayload\[0\]\[penanggung_jawab\]" onchange="changePenanggungJawab()" value="Pendamping"&gt;

&lt;span class="checkmark"&gt;&lt;/span&gt;

&lt;/label&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label w-220"&gt;Nama Lengkap &lt;span class="text-danger"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;input type="text" class="form-control" name="tindakanPayload\[0\]\[nama_penanggung_jawab\]" id="nama_pasien_persetujanpenolakantindakan" value="" readonly=""&gt;

&lt;/div&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label w-220"&gt;Alamat &lt;span class="text-danger"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;textarea rows="2" class="form-control" name="tindakanPayload\[0\]\[alamat\]" id="alamat_pasien_persetujanpenolakantindakan"&gt;Bandung&lt;/textarea&gt;

&lt;/div&gt;

&lt;div class="epus-ig" style="display: none;"&gt;

&lt;label class="input-label w-220"&gt;Jenis Kelamin &lt;span class="text-danger"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="radio-group"&gt;

&lt;label class="custom-radio"&gt;

Laki-laki

&lt;input type="radio" name="tindakanPayload\[0\]\[jenis_kelamin\]" value="laki-laki"&gt;

&lt;span class="checkmark"&gt;&lt;/span&gt;

&lt;/label&gt;

&lt;label class="custom-radio"&gt;

Perempuan

&lt;input type="radio" name="tindakanPayload\[0\]\[jenis_kelamin\]" value="perempuan"&gt;

&lt;span class="checkmark"&gt;&lt;/span&gt;

&lt;/label&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label w-220"&gt;Usia &lt;span class="text-danger"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;input type="number" class="form-control" name="tindakanPayload\[0\]\[usia\]" value="" id="usia_pasien_persetujanpenolakantindakan"&gt;

&lt;/div&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label w-220"&gt;Nomor Handphone &lt;span class="text-danger"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;input type="number" class="form-control" name="tindakanPayload\[0\]\[no_hp\]" value="" id="hp_pasien_persetujanpenolakantindakan"&gt;

&lt;/div&gt;

&lt;div class="epus-ig" style="display: none;"&gt;

&lt;label class="input-label w-220"&gt;Hubungan dengan Pasien&lt;span class="text-danger"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;input type="text" class="form-control" name="tindakanPayload\[0\]\[hubungan_dengan_pasien\]" placeholder="Hubungan dengan pasien" id="hubungan_persetujanpenolakantindakan"&gt;

&lt;/div&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label w-220"&gt;Nama Saksi &lt;span class="text-danger"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;input type="text" class="form-control" name="tindakanPayload\[0\]\[nama_saksi\]" placeholder="Nama saksi" value="" id="nama_saksi_persetujanpenolakantindakan"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="group-border"&gt;

&lt;div class="fw-700"&gt;Menyetujui atau menolak tindakan:&lt;/div&gt;

&lt;div id="menyetujui-menolak"&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;div class="point2"&gt;

&lt;button type="button" class="btn cta-outline" onclick="\$('.point1').show();\$('.point2').hide();"&gt;Kembali&lt;/button&gt;

&lt;button type="button" class="btn cta-primary px-24" id="submitDetailInformationTindakanPPSignature"&gt;Tanda tangani dan Cetak&lt;/button&gt;

&lt;/div&gt;

&lt;button type="button" class="btn cta-primary px-24 point1" onclick="\$('.point1').hide();\$('.point2').show();"&gt;Lanjutkan&lt;/button&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;script&gt;

var informationModalForm2Pasien = null;

var informationModalForm2PenanggungJawab = null;

var id_persetujuan_penolakan = ''

var totalDataInformasiTindakanPPSignature = 0;

function printPersetujuanV2(id = \[\]) {

\$('#formDetailInformationTindakanPPSignature').trigger('reset')

\$('.point1').show()

\$('.point2').hide()

\$('#informationModalForm2names').html('')

id_persetujuan_penolakan = getIds(id)

\$.ajax({

url: \`<https://kotakediri.epuskesmas.id/tindakan/detail-information\${id_persetujuan_penolakan}\`>,

method: 'GET',

success: (res) => {

let MenyetujuiMenolak = ''

let htmlAppend = ''

const {data} = res

data.map((item, i) => {

htmlAppend += \`

&lt;div class="sm-content" style="margin-bottom: 20px;"&gt;

&lt;div class="panel-group custom-panel" id="accordion-\${i}" role="tablist" aria-multiselectable="true" data-index="\${i}"&gt;

&lt;div class="panel panel-default"&gt;

&lt;div class="panel-heading" role="tab" id="headingForm-\${i}"&gt;

&lt;a role="button" class="panel-accordion_\_header" data-toggle="collapse" data-parent="#accordion-\${i}" href="#tindakan-\${i}" aria-expanded="true" aria-controls="tindakan-\${i}"&gt;\${item.tindakan.value}&lt;/a&gt;

&lt;ul class="box-controls pull-right"&gt;

&lt;li&gt;

&lt;a class="box-btn-slide-custome collapsed rotate-180" href="#tindakan-\${i}" role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="tindakan-\${i}"&gt;&lt;span class="fa fa-chevron-down"&gt;&lt;/span&gt;&lt;/a&gt;

&lt;/li&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div id="tindakan-\${i}" class="panel-collapse panel-accordion_\_content collapse in" role="tabpanel" aria-labelledby="headingForm-\${i}"&gt;

&lt;input type='hidden' name="tindakanPayload\[\${i}\]\[tindakan_id\]" value="\${item.id}"&gt;

&lt;input type='hidden' name="tindakanPayload\[\${i}\]\[nama_tindakan\]" value="\${item.tindakan.value}"&gt;

&lt;div class="row"&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="diagnosa"&gt;Diagnosa (WD & DD)&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[diagnosa\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.diagnosa !== 'undefined' && item.informasies.diagnosa !== null ? item.informasies.diagnosa : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="dasar_diagnosa"&gt;Dasar Diagnosa&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[dasar_diagnosa\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.dasar_diagnosa !== 'undefined' && item.informasies.dasar_diagnosa !== null ? item.informasies.dasar_diagnosa : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="tindakan_kedokteran"&gt;Tindakan Kedokteran&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[tindakan_kedokteran\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.tindakan_kedokteran !== 'undefined' && item.informasies.tindakan_kedokteran !== null ? item.informasies.tindakan_kedokteran : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="indikasi_tindakan"&gt;Indikasi Tindakan&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[indikasi_tindakan\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.indikasi_tindakan !== 'undefined' && item.informasies.indikasi_tindakan !== null ? item.informasies.indikasi_tindakan : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="tata_cara"&gt;Tata Cara&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[tata_cara\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.tata_cara !== 'undefined' && item.informasies.tata_cara !== null ? item.informasies.tata_cara : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="tujuan"&gt;Tujuan&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[tujuan\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.tujuan !== 'undefined' && item.informasies.tujuan !== null ? item.informasies.tujuan : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="resiko"&gt;Risiko&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[resiko\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.resiko !== 'undefined' && item.informasies.resiko !== null ? item.informasies.resiko : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="komplikasi"&gt;Komplikasi&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[komplikasi\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.komplikasi !== 'undefined' && item.informasies.komplikasi !== null ? item.informasies.komplikasi : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="prognosa"&gt;Prognosa&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[prognosa\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.prognosa !== 'undefined' && item.informasies.prognosa !== null ? item.informasies.prognosa : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="alternatif_resiko"&gt;Alternatif & Risiko&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[alternatif_resiko\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.alternatif_resiko !== 'undefined' && item.informasies.alternatif_resiko !== null ? item.informasies.alternatif_resiko : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4 col-sm-12"&gt;

&lt;div class="form-group"&gt;

&lt;label for="lain_lain"&gt;Lain-lain&lt;/label&gt;

&lt;textarea name="tindakanPayload\[\${i}\]\[informasiTindakan\]\[lain_lain\]" class="form-control input-sm"&gt;\${item.informasies !== null && typeof item.informasies.lain_lain !== 'undefined' && item.informasies.lain_lain !== null ? item.informasies.lain_lain : ''}&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

\${i > 0 ? \`

&lt;div class="col-sm-12" style="display: none;"&gt;

&lt;div class="form-group"&gt;

&lt;input type="checkbox" name="tindakanPayload\[\${i}\]\[isSameWithFirstRecord\]" class="sameCheckbox" data-index="\${i}" checked&gt;

&lt;/div&gt;

&lt;/div&gt;

\`: ''}

&lt;/div&gt;\`

\$('#nama_pasien_persetujanpenolakantindakan').val(item.pelayanan.pendaftaran.pasien.nama)

\$('#alamat_pasien_persetujanpenolakantindakan').val(item.pelayanan.pendaftaran.pasien.alamat)

\$('#hp_pasien_persetujanpenolakantindakan').val(item.pelayanan.pendaftaran.pasien.no_hp)

\$('#usia_pasien_persetujanpenolakantindakan').val(item.pelayanan.pendaftaran.umur_tahun)

\$('#hubungan_persetujanpenolakantindakan').val(item.penanggung_jawab?.hubungan_dengan_pasien)

\$('#nama_saksi_persetujanpenolakantindakan').val(item.penanggung_jawab?.nama_saksi)

\$('input\[name="tindakanPayload\[0\]\[jenis_kelamin\]"\]\[value="' + item.pelayanan.pendaftaran.pasien.jenis_kelamin.toLowerCase() + '"\]').prop('checked', true)

\$('input\[name="tindakanPayload\[0\]\[penanggung_jawab\]"\]\[value="' + item.penanggung_jawab?.penanggung_jawab + '"\]').prop('checked', true)

informationModalForm2Pasien = item.pelayanan.pendaftaran

informationModalForm2PenanggungJawab = item.penanggung_jawab

if(i > 0) {

MenyetujuiMenolak += \`&lt;div class="line-light vp-8"&gt;&lt;/div&gt;\`

}

MenyetujuiMenolak += \`&lt;div class="epus-ig"&gt;

&lt;label class="input-label w-220"&gt;Tindakan&lt;/label&gt;

&lt;input type="text" class="form-control" value="\${item.tindakan.value}" disabled&gt;

&lt;/div&gt;

&lt;div class="epus-ig"&gt;

&lt;label class="input-label w-220"&gt;Persetujuan Tindakan&lt;/label&gt;

&lt;div class="radio-group"&gt;

&lt;label class="custom-radio"&gt;

Tidak Perlu Persetujuan

&lt;input type="radio" name="aggrement\[\${i}\]" value="tidak"&gt;

&lt;span class="checkmark"&gt;&lt;/span&gt;

&lt;/label&gt;

&lt;label class="custom-radio"&gt;

Setujui

&lt;input type="radio" name="aggrement\[\${i}\]" value="persetujuan" checked="checked"&gt;

&lt;span class="checkmark"&gt;&lt;/span&gt;

&lt;/label&gt;

&lt;label class="custom-radio"&gt;

Tolak

&lt;input type="radio" name="aggrement\[\${i}\]" value="penolakan"&gt;

&lt;span class="checkmark"&gt;&lt;/span&gt;

&lt;/label&gt;

&lt;/div&gt;

&lt;/div&gt;\`

totalDataInformasiTindakanPPSignature = i

})

\$('#informationModalForm2').find('#point1').html(htmlAppend)

\$('#informationModalForm2').find('#menyetujui-menolak').html(MenyetujuiMenolak)

\$("#informationModalForm2").modal({

backdrop: 'static',

keyboard: false

})

changePenanggungJawab()

}

})

\$("#submitDetailInformationTindakanPPSignature").unbind()

\$("#submitDetailInformationTindakanPPSignature").bind('click', () => {

if(\$('input\[name="tindakanPayload\[0\]\[nama_saksi\]"\]').val() == '') {

alert("Silakan lengkapi data saksi terlebih dahulu!", "warning");

return

}

let countTidakPerluPersetujuan = 0

for (x = 0; x <= totalDataInformasiTindakanPPSignature; x++) {

if(\$('input\[name="aggrement\[' + x + '\]"\]:checked').val() == 'tidak') {

countTidakPerluPersetujuan++;

}

}

if (countTidakPerluPersetujuan == (totalDataInformasiTindakanPPSignature + 1)) {

alert("Silakan pilih minimal 1 data setujui/tolak untuk di print!", "warning");

return

} else {

\$.ajax({

url: '<https://kotakediri.epuskesmas.id/tindakan/detail-information>',

method: 'POST',

data: \$("#formDetailInformationTindakanPPSignature").serialize(),

success: (res) => {

if (res.status == 'danger') {

alert(res.message, res.status)

} else {

printPersetujuanPenolakan()

}

}

})

}

})

changePenanggungJawab()

}

function getIds(parameter = \[\])

{

let queryUrl = ''

parameter.forEach(function(index, item){

queryUrl += \`\${(item === 0) ? '?' : '&'}id\[\]=\${index}\`

});

return queryUrl;

}

function changePenanggungJawab()

{

var Penanggung = \$('input\[name="tindakanPayload\[0\]\[penanggung_jawab\]"\]:checked').val();

if (Penanggung === 'Pendamping') {

\$('input\[name="tindakanPayload\[0\]\[nama_penanggung_jawab\]"\]').prop('readonly', false);

\$('input\[name="tindakanPayload\[0\]\[nama_penanggung_jawab\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pendamping' ? informationModalForm2PenanggungJawab.nama : '');

\$('textarea\[name="tindakanPayload\[0\]\[alamat\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pendamping' ? informationModalForm2PenanggungJawab.alamat : '');

\$('input\[name="tindakanPayload\[0\]\[jenis_kelamin\]"\]').parent().parent().parent().show()

if (informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pendamping') {

\$('input\[name="tindakanPayload\[0\]\[jenis_kelamin\]"\]\[value="' + informationModalForm2PenanggungJawab?.jenis_kelamin.toLowerCase() + '"\]').prop('checked', true)

}

\$('input\[name="tindakanPayload\[0\]\[usia\]"\]').parent().show()

\$('input\[name="tindakanPayload\[0\]\[usia\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pendamping' ? informationModalForm2PenanggungJawab.usia : '');

\$('input\[name="tindakanPayload\[0\]\[no_hp\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pendamping' ? informationModalForm2PenanggungJawab.no_hp : '');

\$('input\[name="tindakanPayload\[0\]\[hubungan_dengan_pasien\]"\]').parent().show()

\$('input\[name="tindakanPayload\[0\]\[hubungan_dengan_pasien\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pendamping' ? informationModalForm2PenanggungJawab.hubungan_dengan_pasien : '');

\$('input\[name="tindakanPayload\[0\]\[nama_saksi\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pendamping' ? informationModalForm2PenanggungJawab.nama_saksi : '');

} else {

\$('input\[name="tindakanPayload\[0\]\[nama_penanggung_jawab\]"\]').prop('readonly', true);

\$('input\[name="tindakanPayload\[0\]\[nama_penanggung_jawab\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pasien' ? informationModalForm2PenanggungJawab.nama : informationModalForm2Pasien?.pasien?.nama);

\$('textarea\[name="tindakanPayload\[0\]\[alamat\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pasien' ? informationModalForm2PenanggungJawab.alamat : informationModalForm2Pasien?.pasien?.alamat);

\$('input\[name="tindakanPayload\[0\]\[jenis_kelamin\]"\]').parent().parent().parent().hide()

\$('input\[name="tindakanPayload\[0\]\[jenis_kelamin\]"\]\[value="laki-laki"\]').prop('checked', true)

\$('input\[name="tindakanPayload\[0\]\[usia\]"').parent().hide()

\$('input\[name="tindakanPayload\[0\]\[usia\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pasien' ? informationModalForm2PenanggungJawab.usia : informationModalForm2Pasien?.umur_tahun);

\$('input\[name="tindakanPayload\[0\]\[no_hp\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pasien' ? informationModalForm2PenanggungJawab.no_hp : informationModalForm2Pasien?.pasien?.no_hp);

\$('input\[name="tindakanPayload\[0\]\[nama_saksi\]"\]').val(informationModalForm2PenanggungJawab?.penanggung_jawab == 'Pasien' ? informationModalForm2PenanggungJawab.nama_saksi : '')

\$('input\[name="tindakanPayload\[0\]\[hubungan_dengan_pasien\]"\]').parent().hide()

\$('input\[name="tindakanPayload\[0\]\[hubungan_dengan_pasien\]"\]').val('');

}

}

function printPersetujuanPenolakan()

{

window.open(\`<https://kotakediri.epuskesmas.id/tindakan/show-persetujuan-penolakan\${id_persetujuan_penolakan}&\${\$('#menyetujui-menolak> :input').serialize()}&\${\$('#persetujuanpenolakanpenanggungjawab :input').serialize()}\`, '\_blank');

}

&lt;/script&gt;&lt;/div&gt;

&lt;script type="text/javascript"&gt;

\$('#button_cetak_signature').on('click', function(ev) {

ev.preventDefault()

var url = \$('select\[name=CetakSuratSurat\]').val()

var statusElektronik = \$('#is_signature').prop("checked") ? 1 : 0

if (statusElektronik == 1) {

url += (url.includes('?') ? '' : '?' ) + 'templateprint=true&pelayanan=' + btoa('63569')

}

if (\$('select\[name=CetakSuratSurat\] option:selected').html() == 'Persetujuan/Penolakan Tindakan' && statusElektronik == 1 && '1') {

var url_string = \$('select\[name=CetakSuratSurat\] option:selected').val()

var url_parse = new URL(url_string)

var ids = url_parse.searchParams.getAll("checked\[\]")

printPersetujuanV2(ids)

} else if (url != '') {

window.open(url, '\_blank').focus()

} else {

alert('Silahkan untuk memilih Cetak Surat terlebih dahulu', 'danger')

}

})

function checkValueCetakSurat() {

\$('#is_signature').parent().parent().show()

console.log(\$('select\[name="CetakSuratSurat"\] option:selected').text());

if (\$('select\[name="CetakSuratSurat"\] option:selected').text() == 'Resume Medis Rawat Inap'){

\$('#is_signature').parent().parent().hide()

\$('#is_signature').prop('checked', false)

}

}

&lt;/script&gt;

&lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;strong&gt;Data Pasien&lt;/strong&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="form-group"&gt;

&lt;div class="table-responsive"&gt;

&lt;table id="table_pasien" class="table table-hover table-condensed table-sortable"&gt;

&lt;tbody&gt;&lt;tr&gt;

&lt;td&gt;ID Pelayanan&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;&lt;em class=""&gt;&lt;/em&gt; 63569&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;ID Encounter Satu Sehat&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Tanggal&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;03-02-2026 00:00:00&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Poli/Ruangan&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;DEWASA&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;No. eRM&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;00140163&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;No. RM Lama&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;28635 &lt;input type="hidden" value="28635" id="no_rm_lama"&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;No. Dokumen RM&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;NIK&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;3571021609560003&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Nama KK&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Nama&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;TAKAT&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Jenis Kelamin&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;Laki-laki&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Tempat & Tgl Lahir&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;KEDIRI, 16-09-1956&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Umur&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;69 Thn 4 Bln 17 Hr&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Alamat&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt; JL. SEMANGKA NO. 74

, RT. 1

, RW. 5

, KEL. KALIOMBO

, KEC. KOTA KEDIRI

&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;No. HP&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;085745536599&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Asuransi&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;BPJS Kesehatan / 0000783815883&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Jenis Kepesertaan BPJS&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;PBI JAMINAN KESEHATAN&lt;/td&gt;

&lt;/tr&gt;

&lt;tr&gt;

&lt;td&gt;Nama Faskes&lt;/td&gt;

&lt;td&gt;:&lt;/td&gt;

&lt;td&gt;BALOWERTI&lt;/td&gt;

&lt;/tr&gt;

&lt;/tbody&gt;&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;div class="table-responsive"&gt;

&lt;label align="center" colspan="3" style="text-align: left;"&gt;&lt;b&gt; Penyakit Khusus&lt;/b&gt;&lt;/label&gt;

&lt;table id="table_warna_penyakit" class="table table-bordered table-hover table-condensed table-sortable"&gt;

&lt;thead&gt;

&lt;tr class="btn-primary"&gt;

&lt;td width="10%"&gt;Warna&lt;/td&gt;

&lt;td align="center"&gt;icdx&lt;/td&gt;

&lt;td align="center"&gt;Penyakit&lt;/td&gt;

&lt;/tr&gt;

&lt;/thead&gt;

&lt;tbody id="tabel_detail_warna_penyakit"&gt;

&lt;tr&gt;

&lt;td style="background-color: #808080;"&gt; &lt;/td&gt;

&lt;td&gt;E10.7&lt;/td&gt;

&lt;td&gt;Insulin-dependent diabetes mellitus with multiple complications&lt;/td&gt;

&lt;/tr&gt;

&lt;/tbody&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;div class="table-responsive"&gt;

&lt;label align="center" colspan="3" style="text-align: left;"&gt;&lt;b&gt; Risiko Kehamilan&lt;/b&gt;&lt;/label&gt;

&lt;table id="table_risiko_kehamilan" class="table table-bordered table-hover table-condensed table-sortable"&gt;

&lt;thead&gt;

&lt;tr class="btn-primary"&gt;

&lt;td width="10%"&gt;Warna&lt;/td&gt;

&lt;td align="center"&gt;Skor Ibu (KSPR)&lt;/td&gt;

&lt;td align="center"&gt;Status&lt;/td&gt;

&lt;/tr&gt;

&lt;/thead&gt;

&lt;tbody id="tabel_detail_risiko_kehamilan"&gt;

&lt;/tbody&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;div class="table-responsive"&gt;

&lt;table id="table_riwayat" class="table table-bordered table-hover table-condensed table-sortable"&gt;

&lt;thead&gt;

&lt;tr class="btn-primary"&gt;

&lt;td align="center" colspan="3"&gt;Riwayat Pasien&lt;/td&gt;

&lt;/tr&gt;

&lt;tr class="btn-primary"&gt;

&lt;td align="center"&gt;Jenis Riwayat&lt;/td&gt;

&lt;td align="center"&gt;Nama Riwayat&lt;/td&gt;

&lt;td align="center" width="20%"&gt;Tanggal&lt;/td&gt;

&lt;/tr&gt;

&lt;/thead&gt;

&lt;tbody&gt;

&lt;/tbody&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;div class="table-responsive"&gt;

&lt;table id="table_alergi" class="table table-bordered table-hover table-condensed table-sortable"&gt;

&lt;thead&gt;

&lt;tr class="btn-primary"&gt;

&lt;td align="center" colspan="4"&gt;Alergi Pasien&lt;/td&gt;

&lt;/tr&gt;

&lt;tr class="btn-primary"&gt;

&lt;td align="center"&gt;Jenis Alergi&lt;/td&gt;

&lt;td align="center"&gt;Nama Alergi&lt;/td&gt;

&lt;td align="center" width="20%"&gt;Tanggal&lt;/td&gt;

&lt;td&gt;&lt;input type="checkbox" value="1" id="check_all"&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;/thead&gt;

&lt;tbody&gt;

&lt;tr&gt;&lt;td class="text-muted" colspan="4"&gt;Data tidak ditemukan&lt;/td&gt;&lt;/tr&gt;

&lt;/tbody&gt;

&lt;tfoot&gt;

&lt;tr&gt;

&lt;td colspan="4"&gt;

&lt;div class="pull-right"&gt;

&lt;button id="button_delete" type="button" class="btn btn-sm btn-danger" onclick="deleteCheckedAlergi(this);"&gt;Hapus&lt;/button&gt;

&lt;/div&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;/tfoot&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;script&gt;

\$("#check_all").change(function () {

\$('#table_alergi tbody tr td input\[type="checkbox"\]').prop('checked', \$(this).prop('checked'));

});

function deleteCheckedAlergi(obj)

{

var arrayData=\[\];

\$('#table_alergi input\[name\*="check"\]:checked').each(function(){

arrayData.push(\$(this).val());

});

if(arrayData.length>0){

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/anamnesa/destroycheckedalergi>",

method: 'POST',

dataType: "json",

data: {

ids : arrayData,

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

alert(data.message, data.status);

\$(obj).removeClass('loading');

location.reload();

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$(obj).removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

}

});

}

}

&lt;/script&gt;

&lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;Data Skrining&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="form-group"&gt;

&lt;table id="table_skrining" class="table table-bordered table-hover table-condensed table-sortable"&gt;

&lt;thead&gt;

&lt;tr class="btn-primary"&gt;

&lt;td width="50%"&gt;Skrining&lt;/td&gt;

&lt;td width="50%"&gt;Tanggal&lt;/td&gt;

&lt;td width="50%"&gt;Keterangan&lt;/td&gt;

&lt;td&gt;Detail&lt;/td&gt;

&lt;td align="center"&gt;&lt;input type="checkbox" value="1" id="check_all_skrining"&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;/thead&gt;

&lt;tbody id="tabel_detail_skrining"&gt;

&lt;tr id="tr_skrining_1" class=""&gt;

&lt;td&gt;

&lt;input type="text" class="hidden form-control input-sm" readonly="" name="id" value=""&gt;

&lt;input type="text" class="hidden form-control input-sm" readonly="" name="tr_id_skrining" value=""&gt;

&lt;select class="form-control input-sm" name="skrining"&gt;

&lt;option value=""&gt;- PILIH -&lt;/option&gt;

&lt;option value="Gizi" data-model=""&gt;Gizi&lt;/option&gt;

&lt;option value="Lansia" data-model="SkriningLansia"&gt;Lansia&lt;/option&gt;

&lt;option value="PTM" data-model="SkriningPtm"&gt;PTM&lt;/option&gt;

&lt;option value="UKGS" data-model=""&gt;UKGS&lt;/option&gt;

&lt;option value="UKS" data-model=""&gt;UKS&lt;/option&gt;

&lt;option value="Caten" data-model=""&gt;Caten&lt;/option&gt;

&lt;option value="Ibu Hamil" data-model=""&gt;Ibu Hamil&lt;/option&gt;

&lt;option value="COVID-19" data-model="TCovid19"&gt;COVID-19&lt;/option&gt;

&lt;option value="Hepatitis C" data-model="SkriningHepatitisC"&gt;Hepatitis C&lt;/option&gt;

&lt;option value="TB" data-model="SkriningTb"&gt;TB&lt;/option&gt;

&lt;option value="Hepatitis B" data-model="SkriningHepatitisB"&gt;Hepatitis B&lt;/option&gt;

&lt;option value="SRQ" data-model="SkriningSQR"&gt;SRQ&lt;/option&gt;

&lt;option value="Kanker-Anak" data-model="SkriningKankerAnak"&gt;Kanker-Anak&lt;/option&gt;

&lt;/select&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;div class="input-group date-free"&gt;

&lt;input type="text" class="form-control input-sm" name="tanggal" placeholder="dd-mm-yyyy"&gt;

&lt;span class="input-group-addon btn-info"&gt;&lt;i class="fa fa-calendar"&gt;&lt;/i&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/td&gt;

&lt;td&gt;&lt;/td&gt;

&lt;td&gt;&lt;/td&gt;

&lt;td align="center"&gt;&lt;input type="checkbox" value="" name="checkSkrining\[1\]" disabled=""&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;tr id="tr_skrining_2" data-id="" data-pel-ibu="" style="cursor: not-allowed;" class=""&gt;

&lt;td&gt;

&lt;input name="Skrining\[2\]\[id\]" type="text" class="hidden form-control input-sm" value=""&gt;

&lt;input name="Skrining\[2\]\[skrining\]" type="text" class="hidden form-control input-sm" value=""&gt;

&lt;br&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;input name="Skrining\[2\]\[tanggal\]" type="text" class="hidden form-control input-sm" value=""&gt;

&lt;/td&gt;

&lt;td&gt; &lt;/td&gt;

&lt;td align="center"&gt;

&lt;i class="" style="color: "&gt;&lt;/i&gt;

&lt;/td&gt;

&lt;td hidden=""&gt;

&lt;a pjax-content="" href="<https://kotakediri.epuskesmas.id/skrining/create/?from='pelayanan'"&gt;show> link&lt;/a&gt;

&lt;/td&gt;

&lt;td align="center"&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;/tbody&gt;

&lt;tfoot&gt;

&lt;tr&gt;

&lt;td colspan="10"&gt;

&lt;div class="pull-right"&gt;

&lt;button id="button_add_skrining" type="button" formnovalidate="" class="btn btn-sm btn-primary"&gt;Tambah&lt;/button&gt;

&lt;button id="button_delete_skrining" type="button" formnovalidate="" class="btn btn-sm btn-danger" onclick="destroyDetailCheckedSkrining(this);"&gt;Hapus&lt;/button&gt;

&lt;/div&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;/tfoot&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;script type="text/javascript"&gt;

\$(function() {

if ('' == 'hidden') {

\$('#table_skrining').find('td:last-child').hide();

\$('#tabel_detail_skrining').find('td:last-child').hide();

}

reArange();

resetFormSkrining();

bindElementDoubleClick(\$("tr\[detail-ptm-row\]"), (element) => {

window.location.replace("<https://kotakediri.epuskesmas.id/ptm/create/pelayananId?findSkrining=skriningId".replace('skriningId>', \$(element).data('id')).replace('pelayananId', "63569"))

})

bindElementDoubleClick(\$("tr\[detail-lansia-row\]"), (element) => {

window.location.replace("<https://kotakediri.epuskesmas.id/skrining/showlansia/skriningId/pelayananId".replace('skriningId>', \$(element).data('id')).replace('pelayananId', "63569"))

})

bindElementDoubleClick(\$("tr\[detail-kanker-anak-row\]"), (element) => {

window.location.replace("<https://kotakediri.epuskesmas.id/skrining/showkankeranak/skriningId/pelayananId".replace('skriningId>', \$(element).data('id')).replace('pelayananId', "63569"))

})

bindElementDoubleClick(\$("tr\[detail-tb-row\]"), (element) => {

window.location.replace("<https://kotakediri.epuskesmas.id/skrining/showtb/skriningId/pelayananId".replace('skriningId>', \$(element).data('id')).replace('pelayananId', "63569"))

})

bindElementDoubleClick(\$("tr\[detail-covid19-row\]"), (element) => {

window.location.replace("<https://kotakediri.epuskesmas.id/covid19/show/pelayananId?findSkrining=skriningId".replace('skriningId>', \$(element).data('id')).replace('pelayananId', "63569"))

})

bindElementDoubleClick(\$("tr\[detail-hepatitisc-row\]"), (element) => {

window.location.replace("<https://kotakediri.epuskesmas.id/skrining/showhepatitisc/skriningId/pelayananId".replace('skriningId>', \$(element).data('id')).replace('pelayananId', "63569"))

})

bindElementDoubleClick(\$("tr\[detail-hepatitisb-row\]"), (element) => {

window.location.replace("<https://kotakediri.epuskesmas.id/skrining/showhepatitisb/skriningId/pelayananId/pelayananIbu".replace('skriningId>', \$(element).data('id')).replace('pelayananId', "63569").replace('pelayananIbu', (\$(element).data('pel-ibu') == '' ? '' : \$(element).data('pel-ibu'))))

})

bindElementDoubleClick(\$("tr\[detail-sqr-row\]"), (element) => {

window.location.replace("<https://kotakediri.epuskesmas.id/skrining/showSQR/skriningId/pelayananId".replace('skriningId>', \$(element).data('id')).replace('pelayananId', "63569"))

})

})

\$("#check_all_skrining").change(function() {

\$('#tabel_detail_skrining tr td input\[type="checkbox"\]:not(:disabled)').prop('checked', \$(this).prop('checked'));

});

\$("#button_add_skrining").click(function() {

var tr_id_skrining = \$('input\[name="tr_id_skrining"\]').val();

var id = \$('input\[name="id"\]').val();

var skrining = \$('select\[name="skrining"\]').find(":selected").text();

var skrining_val = \$('select\[name="skrining"\]').find(":selected").val();

var model_name_val = \$('select\[name="skrining"\]').find(":selected").data('model');

var tanggal = \$('input\[name="tanggal"\]').val();

if (skrining_val == '') {

alert('Silahkan pilih jenis skrining.', 'warning');

return false;

}

if (tanggal == '') {

alert('Tanggal skrining tidak boleh kosong', 'warning');

return false;

}

var count = \$("#tabel_detail_skrining").children("tr").length;

var x = 0;

if (count == 0) {

x = 1;

} else if (tr_id_skrining != '') {

x = tr_id_skrining;

} else {

x = count + 1;

}

\$(this).addClass('loading');

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/skrining/store>",

method: 'POST',

dataType: "json",

data: {

'Skrining': {

id: id,

pelayanan_id: '63569',

pasien_id: '0000000000140163',

skrining: skrining_val,

tanggal: tanggal,

},

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

if (data.status == 'success') {

if (model_name_val == '') {

var table = "";

table += "&lt;tr id='tr_skrining_" + x + "'&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='Skrining\[" + x + "\]\[id\]' type='text' class='hidden form-control input-sm' value='" + data.data.id + "'&gt;";

table += "&lt;input name='Skrining\[" + x + "\]\[skrining\]' type='text' class='hidden form-control input-sm' value='" + data.data.skrining + "'&gt;";

table += data.data.skrining;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='Skrining\[" + x + "\]\[tanggal\]' type='text' class='hidden form-control input-sm' value='" + data.data.tanggal + "'&gt;";

table += data.data.tanggal;

table += "&lt;/td&gt;";

table += "&lt;td&gt;&lt;/td&gt;";

table += "&lt;td&gt;&lt;/td&gt;";

table += "&lt;td hidden&gt;&lt;a pjax-content href=\\"<https://kotakediri.epuskesmas.id/skrining/create/>" + data.data.id + "?from='pelayanan'\\"&gt;show link&lt;/a&gt;&lt;/td&gt;";

table += "&lt;td align='center'&gt;&lt;input type='checkbox' value='' name='checkSkrining\[" + x + "\]' onclick=''&gt;&lt;/td&gt;";

table += "&lt;/tr&gt;";

if (tr_id_skrining == '') {

\$("#tabel_detail_skrining tr:first").after(table);

} else {

\$("#tr_skrining_" + x).replaceWith(table);

}

} else {

window.location = data.url;

}

} else {

alert(data.message, data.status);

}

},

error: function(xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

resetFormSkrining();

\$(this).removeClass('loading');

});

function destroyDetailCheckedSkrining(obj) {

var x = 1;

var arrayData = \[\];

\$("#tabel_detail_skrining").children("tr").each(function() {

if (\$('input\[name="checkSkrining\[' + x + '\]"\]').prop('checked')) {

var value = \$('input\[name="Skrining\[' + x + '\]\[id\]"\]').val();

if (value == '') {

\$(this).has('input\[name="checkSkrining\[' + x + '\]"\]:checked').remove();

} else {

arrayData.push(value);

}

}

x++;

});

if (arrayData.length > 0) {

\$(obj).addClass('loading');

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/skrining/destroychecked>",

method: 'POST',

dataType: "json",

data: {

ids: arrayData,

pelayanan: '63569',

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

\$("input\[name\*=checkSkrining\]:checked").parent().parent().remove();

\$(obj).removeClass('loading');

setTimeout(() => {

document.location.href = "/pelayanan/show/63569";

}, 1500);

},

error: function(xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$(obj).removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

}

});

reArange();

}

}

function resetFormSkrining() {

\$('input\[name="tr_id_skrining"\]').val("");

\$('input\[name="id"\]').val("");

\$('select\[name="skrining"\]').val("");

\$('input\[name="tanggal"\]').val("");

\$("#button_add_skrining").text('Tambah');

\$('#tabel_detail_skrining').children().removeClass();

\$('#tabel_detail_skrining tr\[pjax-content\]').each(function() {

\$(this).on('click', 'td:last-child', function(e) {

e.stopPropagation();

});

\$(this).click(function(event) {

alert('Silahkan klik/tap 2x pada baris data untuk merubah data.', 'info');

});

\$(this).dblclick(function(event) {

event.preventDefault();

\$('button\[data-notify=dismiss\]').click();

});

\$(this).bind('touchstart', function preventZoom(e) {

var t2 = e.timeStamp,

t1 = \$(this).data('lastTouch') || t2,

dt = t2 - t1,

fingers = e.originalEvent.touches.length;

\$(this).data('lastTouch', t2);

if (!dt || dt > 500 || fingers > 1) return;

e.preventDefault();

\$(this).trigger('dblclick');

});

});

}

\$('#tabel_detail_skrining tr\[pjax-content\]').each(function() {

\$(this).on('click', 'td:last-child', function(e) {

e.stopPropagation();

});

\$(this).click(function(event) {

alert('Silahkan klik/tap 2x pada baris data untuk merubah data.', 'info');

});

\$(this).dblclick(function(event) {

event.preventDefault();

\$('button\[data-notify=dismiss\]').click();

\$(this).find('a\[pjax-content\]').click();

});

\$(this).bind('touchstart', function preventZoom(e) {

var t2 = e.timeStamp,

t1 = \$(this).data('lastTouch') || t2,

dt = t2 - t1,

fingers = e.originalEvent.touches.length;

\$(this).data('lastTouch', t2);

if (!dt || dt > 500 || fingers > 1) return;

e.preventDefault();

\$(this).trigger('dblclick');

});

});

function reArange() {

\$("#tabel_detail_skrining").children("tr").each(function(a) {

var numx = parseInt(a) + 1;

if (numx == -1) idnya = '';

else idnya = 'tr_skrining_' + numx;

this.id = idnya;

\$('#tr_skrining_' + numx + ' input').each(function(z) {

var angka = this.name.toString();

var thenum = parseInt(angka.replace(/\[^0-9\\.\]/g, ''), 10);

this.name = angka.replace(thenum, numx);

thenum = '';

});

});

}

&lt;/script&gt;

&lt;style type="text/css"&gt;

.heading-default {

color: #333;

background-color: #f5f5f5;

border-color: #ddd;

}

.riwayat {

width: 100%;

}

.scrollStyle {

max-width: 100%;

max-height: 200px;

overflow-x: hidden;

overflow-y: scroll;

}

.wrapper {

text-align: center;

}

.box .nav>li>a {

position: relative;

display: block;

padding: 5px 10px;

}

.box a:hover {

font-weight: normal !important;

}

.btn-riwayat {

width: 135px;

}

.tab-riwayat .content-panel {

height: 440px;

overflow-y: visible;

}

.top-content {

width: 100%;

height: 50px;

}

.center-dr {

text-align: center;

margin: 20px 0 0 0 !important;

font-size: 13px;

}

&lt;/style&gt;

&lt;div class="box tab-riwayat"&gt;

&lt;div class="box-header"&gt;

&lt;div role="tabpanel"&gt;

&lt;ul class="nav nav-pills" role="tablist"&gt;

&lt;li role="presentation" class="active"&gt;

&lt;a href="#data_riwayat" id="tab_diagnosa" class="btn btn-sm btn-riwayat btn-default" aria-controls="data_riwayat" role="tab" data-toggle="tab"&gt; Data Riwayat

&lt;/a&gt;

&lt;/li&gt;

&lt;li role="presentation"&gt;

&lt;a href="#riwayat_kunjungan_bpjs" id="tab_anamnesa" class="btn btn-sm btn-riwayat btn-default" aria-controls="riwayat_kunjungan_bpjs" role="tab" data-toggle="tab"&gt; Data Riwayat BPJS

&lt;/a&gt;

&lt;/li&gt;

&lt;/ul&gt;

&lt;hr&gt;

&lt;div class="tab-content"&gt;

&lt;div role="tabpanel" class="tab-pane active" id="data_riwayat"&gt;

&lt;div class="content-panel"&gt;

&lt;div id="page"&gt;

&lt;div class="clearfix top-content"&gt;

&lt;p class="center-dr"&gt;&lt;strong&gt;Kunjungan 25 Tahun Terakhir&lt;/strong&gt;&lt;/p&gt;

&lt;/div&gt;

&lt;li class="list-group-item highlight-active" style=""&gt;

&lt;a style="background-color: ;color:;white-space:normal;" class="heading-default riwayat btn btn-default" data-id="63569" data-puskesmas="00001033231" onclick="showRiwayatPelayanan(this);"&gt; &lt;span class="fa fa-book"&gt;&lt;/span&gt; BALOWERTI &lt;br&gt; 03-02-2026 00:00:00 /

DEWASA -

&lt;/a&gt;

&lt;/li&gt;

&lt;nav class="wrapper"&gt;

&lt;ul class="pagination pagination-riwayat"&gt;&lt;li id="previous-page"&gt;&lt;a href="javascript:void(0)" aria-label="Previous"&gt;&lt;span aria-hidden="true"&gt;«&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;&lt;li class="current-page active"&gt;&lt;a href="javascript:void(0)"&gt;1&lt;/a&gt;&lt;/li&gt;&lt;li id="next-page"&gt;&lt;a href="javascript:void(0)" aria-label="Next"&gt;&lt;span aria-hidden="true"&gt;»&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;

&lt;/nav&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div role="tabpanel" class="tab-pane" id="riwayat_kunjungan_bpjs"&gt;

&lt;div class="content-panel"&gt;

&lt;div class="clearfix top-content"&gt;

&lt;div class="col-sm-1 col-xs-6"&gt;

&lt;button id="button_bpjs_get" type="button" class="btn btn-sm btn-success" data-noasuransi="0000783815883" onclick="getRiwayatKunjunganBpjs(this);"&gt;&lt;i class="icon-bpjs"&gt;&lt;/i&gt; Ambil Data Riwayat Dari Pcare&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div id="page-2"&gt;

&lt;nav class="wrapper "&gt;

&lt;ul class="pagination pagination-2"&gt;

&lt;li id="previous-page"&gt;&lt;a href="javascript:void(0)" aria-label="Previous"&gt;&lt;span aria-hidden="true"&gt;«&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;

&lt;li class="current-page active"&gt;&lt;a href="javascript:void(0)"&gt;1&lt;/a&gt;&lt;/li&gt;&lt;li id="next-page"&gt;&lt;a href="javascript:void(0)" aria-label="Next"&gt;&lt;span aria-hidden="true"&gt;»&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;

&lt;/nav&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="box box-bordered"&gt;

&lt;div class="box-header with-border"&gt;

&lt;label&gt;&lt;b&gt;Galeri Foto&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div id="galleryApp" class="row text-center text-lg-start"&gt;&lt;div class="col-lg-4 col-md-4 col-6 padBotom"&gt;&lt;a href="javascript:;" class="d-block mb-4 h-100"&gt;&lt;i aria-hidden="true" class="fa fa-plus-square-o fa-8x"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/div&gt; &lt;div role="dialog" class="modal fade"&gt;&lt;div class="modal-dialog modal-dialog-centered modal-lg"&gt;&lt;div class="modal-content"&gt;&lt;div class="modal-header"&gt;&lt;button type="button" data-dismiss="modal" aria-label="Close" class="close"&gt;×&lt;/button&gt; &lt;h4 class="modal-title pull-left"&gt;Tambah Foto Baru&lt;/h4&gt;&lt;/div&gt; &lt;div class="modal-body"&gt;&lt;div class="row"&gt;&lt;div class="main-form-container"&gt;&lt;form role="form" class="form-horizontal"&gt;&lt;div class="form-wrapper"&gt;&lt;!----&gt; &lt;div class="form-group" style="margin-bottom: 0px;"&gt;&lt;label class="col-sm-3 control-label"&gt;Foto/Dokumen &lt;span style="color: red;"&gt;\*&lt;/span&gt;&lt;/label&gt; &lt;div class="col-sm-9"&gt;&lt;div class="fileUpload btn btn-info btn-block bordered"&gt;&lt;span&gt;&lt;i aria-hidden="true" class="fa fa-plus"&gt;&lt;/i&gt; Unggah / ambil foto&lt;/span&gt; &lt;input type="file" accept="image/jpg,image/jpeg,image/png,application/pdf" class="upload"&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class="form-group"&gt;&lt;label class="col-sm-3 control-label"&gt; &lt;/label&gt; &lt;div class="col-sm-9"&gt;&lt;span id="helpBlock" class="help-block pull-left"&gt;Format jpg, jpeg, png, & pdf. Ukuran file maksimal 2 MB.&lt;/span&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class="form-group" style="margin-bottom: 0px;"&gt;&lt;label class="col-sm-3 control-label"&gt;Buka Kamera &lt;span style="color: red;"&gt;\*&lt;/span&gt;&lt;/label&gt; &lt;div class="col-sm-9"&gt;&lt;div class="web-camera-container"&gt;&lt;div class="camera-button"&gt;&lt;button type="button" class="btn bordered btn-success"&gt;&lt;span&gt;Buka Kamera&lt;/span&gt;&lt;/button&gt;&lt;/div&gt; &lt;div class="camera-loading" style="display: none;"&gt;&lt;ul class="loader-circle"&gt;&lt;li&gt;&lt;/li&gt; &lt;li&gt;&lt;/li&gt; &lt;li&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt; &lt;!----&gt; &lt;!----&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class="form-group"&gt;&lt;label class="col-sm-3 control-label"&gt;Judul &lt;span style="color: red;"&gt;\*&lt;/span&gt;&lt;/label&gt; &lt;div class="col-sm-9"&gt;&lt;input type="text" placeholder="Judul foto/dokumen" maxlength="32" class="form-control input-sm"&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class="form-group"&gt;&lt;label class="col-sm-3 control-label"&gt;Deskripsi&lt;/label&gt; &lt;div class="col-sm-9"&gt;&lt;textarea rows="5" placeholder="Deskripsi foto/dokumen" class="form-control"&gt;&lt;/textarea&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/form&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class="modal-footer"&gt;&lt;button type="button" class="btn btn-warning"&gt;Reset&lt;/button&gt; &lt;button type="button" class="btn btn-primary"&gt;Simpan Foto&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div role="dialog" class="modal fade"&gt;&lt;div class="modal-dialog modal-dialog-centered modal-lg"&gt;&lt;div class="modal-content"&gt;&lt;div class="modal-header"&gt;&lt;button type="button" data-dismiss="modal" aria-label="Close" class="close"&gt;×&lt;/button&gt; &lt;h4 class="modal-title pull-left"&gt;Gallery Foto&lt;/h4&gt;&lt;/div&gt; &lt;div class="modal-body"&gt;&lt;div class="row"&gt;&lt;div class="main-form-container"&gt;&lt;div class="col-md-8"&gt;&lt;div class="form-group"&gt;&lt;div class="panel"&gt;&lt;div class="panel-body"&gt;&lt;!----&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class="form-group"&gt;&lt;div class="panel"&gt;&lt;div class="panel-body"&gt;&lt;ul class="images"&gt;&lt;/ul&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class="col-md-4"&gt;&lt;div class="form-group"&gt;&lt;div class="panel"&gt;&lt;div class="panel-body panel-fixed"&gt;&lt;div class="border-box"&gt;&lt;p class="left"&gt;&lt;strong&gt;Tanggal Diambil&lt;/strong&gt;&lt;br&gt;Invalid Date&lt;/p&gt; &lt;hr&gt; &lt;p class="left"&gt;&lt;strong&gt;Judul&lt;/strong&gt;&lt;br&gt;&lt;i aria-hidden="true" class="fa fa-file"&gt;&lt;/i&gt; &lt;/p&gt; &lt;hr&gt; &lt;p class="left"&gt;&lt;strong&gt;Deskripsi&lt;/strong&gt;&lt;br&gt;&lt;/p&gt; &lt;br&gt; &lt;a href="javascript:;" class="center" style="color: rgb(211, 85, 92);"&gt;&lt;i aria-hidden="true" class="fa fa-trash"&gt;&lt;/i&gt; Hapus Foto

&lt;/a&gt;

&lt;!----&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt; &lt;div class="modal-footer"&gt;&lt;button type="button" class="btn btn-primary"&gt;Tambah Foto Baru&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-8"&gt;

&lt;form form-ajax-print="" id="form_create" method="POST" action="<https://kotakediri.epuskesmas.id/resep/store>" class="form-horizontal"&gt;

&lt;input type="hidden" name="\_token" value="Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"&gt;

&lt;input type="text" class="hidden form-control input-sm" required="" readonly="" name="Resep\[pelayanan_id\]" value="63569"&gt;

&lt;input type="text" class="hidden form-control input-sm" required="" readonly="" name="pasien_id" value="0000000000140163"&gt;

&lt;input type="hidden" class="form-control" name="resep" value="" required=""&gt;

&lt;div class="box"&gt;

&lt;div class="box-header with-borders"&gt;

&lt;label&gt;&lt;b&gt;Data Kunjungan&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-md-4 control-label"&gt;No Resep &lt;/label&gt;

&lt;div class="col-md-4 has-success"&gt;

&lt;input type="text" class="form-control input-sm" name="Resep\[no_resep\]" value="" placeholder="No Resep" maxlength="16"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-md-4 control-label"&gt;Ruangan Tujuan &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-md-8 has-success"&gt;

&lt;input type="text" class="hidden form-control input-sm" required="" readonly="" name="ruangan_asal_id" value="0001"&gt;

&lt;input type="text" class="hidden form-control input-sm" required="" readonly="" name="Resep\[ruangantujuan_id\]" value=""&gt;

&lt;input type="text" class="form-control input-sm ui-autocomplete-input" name="ruangan" placeholder="🔍 Ruangan" value="" maxlength="128" autocomplete="off"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-md-4 control-label"&gt;Dokter / Tenaga Medis &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-md-8 has-success"&gt;

&lt;input type="text" class="hidden form-control input-sm" readonly="" required="" name="Resep\[dokter_id\]" value="0000000000000771"&gt;

&lt;input type="text" class="form-control input-sm ui-autocomplete-input" name="dokter_nama_bpjs" value="dr. CHICHA LUSIANA" placeholder="🔍 Nama Dokter / Bidan / Perawat Bpjs" maxlength="128" autocomplete="off"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-md-4 control-label"&gt;Perawat / Bidan / Nutrisionist / Sanitarian&lt;/label&gt;

&lt;div class="col-md-8 has-success"&gt;

&lt;input type="text" class="hidden form-control input-sm" readonly="" name="Resep\[perawat_id\]" value="0000000000000802"&gt;

&lt;input type="text" class="form-control input-sm ui-autocomplete-input" name="perawat_nama" value="EKO RATNANINGSIH. A.Md Kep" placeholder="🔍 Nama Asisten Dokter / Bidan / Perawat" maxlength="128" autocomplete="off"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="box"&gt;

&lt;div class="box-header with-borders"&gt;

&lt;label&gt;&lt;b&gt;Alergi Obat &lt;span style="color:red;"&gt;&lt;/span&gt;&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="form-group"&gt;

&lt;div class="col-lg-6 col-md-8 col-sm-12"&gt;

&lt;input id="id_alergiobat" class="hidden" name="MAlergiPasien\[Obat\]\[id\]" value="185826"&gt;

&lt;textarea id="text_alergiobat" class="hidden form-control input-sm" rows="2" name="MAlergiPasien\[Obat\]\[value\]" maxlength="256" placeholder="Alergi Obat"&gt;&lt;/textarea&gt;

&lt;select class="js-select2 select2-hidden-accessible" multiple="" style="max-width:100%;" data-select2-id="3" tabindex="-1" aria-hidden="true"&gt;&lt;/select&gt;&lt;span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="4" style="width: auto;"&gt;&lt;span class="selection"&gt;&lt;span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1"&gt;&lt;ul class="select2-selection_\_rendered"&gt;&lt;li class="select2-search select2-search--inline"&gt;&lt;input class="select2-search_\_field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="Cari obat" style="width: 100px;"&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class="dropdown-wrapper" aria-hidden="true"&gt;&lt;/span&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="box"&gt;

&lt;div class="box-header with-borders"&gt;

&lt;label&gt;&lt;b&gt;Rekonsiliasi Obat&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="table-responsive"&gt;

&lt;table class="table table-bordered"&gt;

&lt;caption&gt;&lt;/caption&gt;

&lt;thead&gt;

&lt;tr class="btn-primary"&gt;

&lt;th&gt;No&lt;/th&gt;

&lt;th width="80%"&gt;Informasi Obat&lt;/th&gt;

&lt;th&gt;&lt;/th&gt;

&lt;/tr&gt;

&lt;/thead&gt;

&lt;tbody id="tabel_detail_rekon"&gt;

&lt;/tbody&gt;

&lt;tfoot&gt;

&lt;tr&gt;

&lt;td&gt;&lt;/td&gt;

&lt;td&gt;

&lt;div class="text-center"&gt;

&lt;a id="button_tambah_obat" class="pointer" data-toggle="modal" data-target="#modalObatRekon" onclick="showModalRekonsiliasi()"&gt;&lt;b&gt;+ Tambah Rekonsiliasi Obat&lt;b&gt;&lt;/b&gt;&lt;/b&gt;&lt;/a&gt;&lt;b&gt;&lt;b&gt;

&lt;/b&gt;&lt;/b&gt;&lt;/div&gt;&lt;b&gt;&lt;b&gt;

&lt;/b&gt;&lt;/b&gt;&lt;/td&gt;

&lt;td&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;/tfoot&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="box"&gt;

&lt;div class="box-header with-borders"&gt;

&lt;label&gt;&lt;b&gt;Resep&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="table-responsive"&gt;

&lt;table class="table table-bordered table-hover table-condensed table-sortable"&gt;

&lt;thead&gt;

&lt;tr class="btn-primary"&gt;

&lt;td&gt;Racikan&lt;/td&gt;

&lt;td width="10%"&gt;Jumlah Permintaan&lt;/td&gt;

&lt;td&gt;Jenis Racikan&lt;/td&gt;

&lt;td&gt;Nama Obat&lt;/td&gt;

&lt;td width="10%"&gt;Jumlah&lt;/td&gt;

&lt;td&gt;Signa&lt;/td&gt;

&lt;td&gt;Aturan Pakai&lt;/td&gt;

&lt;td&gt;Keterangan&lt;/td&gt;

&lt;td align="center"&gt;&lt;input type="checkbox" value="1" id="check_all" onchange="checkAll(this);"&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;/thead&gt;

&lt;tbody id="tabel_detail"&gt;

&lt;tr id="tr_1"&gt;

&lt;td&gt;

&lt;select class="form-control input-sm" data-for="obat_racikan" name="ResepDetail\[1\]\[obat_racikan\]" onchange="racikan(\$(this));"&gt;

&lt;option value=""&gt;- PILIH -&lt;/option&gt;

&lt;option value="R1"&gt;R1&lt;/option&gt;

&lt;option value="R2"&gt;R2&lt;/option&gt;

&lt;option value="R3"&gt;R3&lt;/option&gt;

&lt;option value="R4"&gt;R4&lt;/option&gt;

&lt;option value="R5"&gt;R5&lt;/option&gt;

&lt;/select&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;input type="number" inputmode="numeric" min="0" class="form-control input-sm" data-for="obat_jumlah_permintaan" name="ResepDetail\[1\]\[obat_jumlah_permintaan\]" value="" placeholder="Qty" maxlength="128" disabled="disabled"&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;input type="text" class="hidden form-control input-sm" data-for="jenis_racikan_id" readonly="" name="ResepDetail\[1\]\[jenis_racikan_id\]" value=""&gt;

&lt;input type="text" class="form-control input-sm ui-autocomplete-input" data-for="jenis_racikan_nama" name="jenis_racikan_nama" value="" placeholder="🔍 Jenis Racikan" maxlength="128" disabled="" autocomplete="off"&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;input type="text" class="hidden form-control input-sm" data-for="obat_id" readonly="" name="ResepDetail\[1\]\[obat_id\]" value=""&gt;

&lt;input type="text" class="hidden form-control input-sm" data-for="id" readonly="" name="ResepDetail\[1\]\[id\]" value=""&gt;

&lt;input type="text" class="hidden form-control input-sm" data-for="tr_id" readonly="" name="tr_id" value=""&gt;

&lt;input type="text" class="hidden form-control input-sm" data-for="stok_obat" readonly="" name="stok_obat" value=""&gt;

&lt;input type="text" class="form-control input-sm ui-autocomplete-input" data-for="obat_nama" name="obat_nama" value="" placeholder="🔍 Nama Obat" maxlength="128" autocomplete="off"&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;input type="number" inputmode="numeric" min="0" class="form-control input-sm" data-for="obat_jumlah" name="ResepDetail\[1\]\[obat_jumlah\]" value="" placeholder="Qty" maxlength="128"&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;input type="text" class="hidden form-control input-sm" data-for="obat_signa" name="ResepDetail\[1\]\[obat_signa\]" value="" placeholder="🔍 Cari Resep Signa" maxlength="128"&gt;

&lt;input type="text" class="form-control input-sm ui-autocomplete-input" data-for="signa_nama" name="signa_nama" value="" placeholder="🔍 Cari Resep Signa" maxlength="128" autocomplete="off"&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;select class="form-control input-sm" data-for="aturan_pakai" name="ResepDetail\[1\]\[aturan_pakai\]"&gt;

&lt;option value=""&gt;- PILIH -&lt;/option&gt;

&lt;option value="1"&gt;Sebelum Makan&lt;/option&gt;

&lt;option value="2"&gt;Sesudah Makan&lt;/option&gt;

&lt;option value="3"&gt;Pemakaian Luar&lt;/option&gt;

&lt;option value="4"&gt;Jika Diperlukan&lt;/option&gt;

&lt;option value="5"&gt;Saat Makan&lt;/option&gt;

&lt;/select&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;input type="text" class="form-control input-sm" data-for="obat_keterangan" name="ResepDetail\[1\]\[obat_keterangan\]" value="" placeholder="Keterangan" maxlength="128"&gt;

&lt;/td&gt;

&lt;td align="center"&gt;&lt;input type="checkbox" value="" name="check\[1\]" onclick="" disabled=""&gt;&lt;/td&gt;

&lt;/tr&gt;

&lt;/tbody&gt;

&lt;tfoot&gt;

&lt;tr&gt;

&lt;td colspan="11"&gt;

&lt;/td&gt;

&lt;/tr&gt;

&lt;/tfoot&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;hr&gt;

&lt;div class="pull-right"&gt;

&lt;button id="button_add_obat" type="button" formnovalidate="" class="btn btn-sm btn-primary"&gt;Tambah&lt;/button&gt;

&lt;button id="button_delete_obat" type="button" formnovalidate="" class="btn btn-sm btn-danger" onclick="destroyDetailChecked(this);"&gt;Hapus&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="box"&gt;

&lt;div class="box-header with-borders"&gt;

&lt;label&gt;&lt;b&gt;Status Prioritas&lt;/b&gt;&lt;/label&gt;

&lt;/div&gt;

&lt;div class="panel-body box-bordered"&gt;

&lt;div class="form-group"&gt;

&lt;div class="col-lg-4 col-md-6"&gt;

&lt;select name="Resep\[prioritas\]" class="form-control"&gt;

&lt;option value="0" selected=""&gt;Tidak&lt;/option&gt;

&lt;option value="1"&gt;Prioritas&lt;/option&gt;

&lt;/select&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="panel panel-button"&gt;

&lt;button id="button_save" type="submit" class="btn btn-sm btn-success" onclick="return requiredCheck(this)"&gt;Simpan&lt;/button&gt;

&lt;button id="button_print_0" type="button" disabled="" class="btn btn-sm btn-info"&gt; Cetak&lt;/button&gt;

&lt;button id="button_print_1" type="button" disabled="" class="btn btn-sm btn-info"&gt; Cetak Roll&lt;/button&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal fade" id="modalObatRekon" tabindex="-1" role="dialog" aria-labelledby="modalObatRekonTitle" aria-hidden="true"&gt;

&lt;div class="modal-dialog modal-dialog-centered" role="document"&gt;

&lt;div class="modal-content" style="border-radius:12px;"&gt;

&lt;div class="modal-header" style="display: flex;"&gt;

&lt;h5 class="modal-title text-left" style="width:80%" id="modalObatRekonTitle"&gt;Tambah Rekonsiliasi Obat&lt;/h5&gt;

&lt;button type="button" style="width:20%" class="close text-right" data-dismiss="modal" aria-label="Close"&gt;

&lt;span aria-hidden="true"&gt;×&lt;/span&gt;

&lt;/button&gt;

&lt;/div&gt;

&lt;div class="modal-body" style="padding:15px 30px;"&gt;

&lt;input type="text" class="hidden form-control input-sm" readonly="" name="tr_ids" value=""&gt;

&lt;input type="text" class="hidden form-control input-sm" readonly="" name="tr_id_rekon" value=""&gt;

&lt;div class="form-group text-left row" style="margin-bottom: 10px;"&gt;

&lt;label class="col-sm-4 control-label"&gt;Nama Obat &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;input type="text" class="form-control input-sm ui-autocomplete-input" name="nama_obat_modal" value="" placeholder="🔍 Contoh Amoxicilin" id="inputObatModal" autocomplete="off"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group text-left row" style="margin-bottom: 10px;"&gt;

&lt;label class="col-sm-4 control-label"&gt;Dosis/Signa&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;input type="text" class="form-control input-sm ui-autocomplete-input" name="signa_nama_modal" value="" placeholder="🔍 Contoh 3x1" maxlength="64" autocomplete="off"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group text-left row" style="margin-bottom: 10px;"&gt;

&lt;label class="col-sm-4 control-label"&gt;Frekuensi&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;select class="form-control input-sm select2-hidden-accessible" name="frekuensi_modal" id="dropdownFrekuensi" data-select2-id="dropdownFrekuensi" tabindex="-1" aria-hidden="true"&gt;

&lt;option value="" data-select2-id="2"&gt; Pilih Frekuensi &lt;/option&gt;

&lt;option value="1"&gt;Tiap 1 Jam&lt;/option&gt;

&lt;option value="2"&gt;Tiap 2 Jam&lt;/option&gt;

&lt;option value="3"&gt;Tiap 3 Jam&lt;/option&gt;

&lt;option value="4"&gt;Tiap 4 Jam&lt;/option&gt;

&lt;option value="5"&gt;Tiap 5 Jam&lt;/option&gt;

&lt;option value="6"&gt;Tiap 6 Jam&lt;/option&gt;

&lt;option value="7"&gt;Tiap 7 Jam&lt;/option&gt;

&lt;option value="8"&gt;Tiap 8 Jam&lt;/option&gt;

&lt;option value="9"&gt;Tiap 9 Jam&lt;/option&gt;

&lt;option value="10"&gt;Tiap 10 Jam&lt;/option&gt;

&lt;option value="11"&gt;Tiap 11 Jam&lt;/option&gt;

&lt;option value="12"&gt;Tiap 12 Jam&lt;/option&gt;

&lt;option value="13"&gt;Tiap 13 Jam&lt;/option&gt;

&lt;option value="14"&gt;Tiap 14 Jam&lt;/option&gt;

&lt;option value="15"&gt;Tiap 15 Jam&lt;/option&gt;

&lt;option value="16"&gt;Tiap 16 Jam&lt;/option&gt;

&lt;option value="17"&gt;Tiap 17 Jam&lt;/option&gt;

&lt;option value="18"&gt;Tiap 18 Jam&lt;/option&gt;

&lt;option value="19"&gt;Tiap 19 Jam&lt;/option&gt;

&lt;option value="20"&gt;Tiap 20 Jam&lt;/option&gt;

&lt;option value="21"&gt;Tiap 21 Jam&lt;/option&gt;

&lt;option value="22"&gt;Tiap 22 Jam&lt;/option&gt;

&lt;option value="23"&gt;Tiap 23 Jam&lt;/option&gt;

&lt;option value="24"&gt;Tiap 24 Jam&lt;/option&gt;

&lt;/select&gt;&lt;span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style="width: 100px;"&gt;&lt;span class="selection"&gt;&lt;span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-dropdownFrekuensi-container"&gt;&lt;span class="select2-selection_\_rendered" id="select2-dropdownFrekuensi-container" role="textbox" aria-readonly="true"&gt;&lt;span class="select2-selection_\_placeholder"&gt;Pilih Frekuensi&lt;/span&gt;&lt;/span&gt;&lt;span class="select2-selection_\_arrow" role="presentation"&gt;&lt;b role="presentation"&gt;&lt;/b&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;span class="dropdown-wrapper" aria-hidden="true"&gt;&lt;/span&gt;&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group text-left row" style="margin-bottom: 10px;"&gt;

&lt;label class="col-sm-4 control-label"&gt;Cara Pemberian&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;input type="text" class="form-control input-sm" name="cara_pembelian_modal" value=""&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group text-left row" style="margin-bottom: 10px;"&gt;

&lt;label class="col-sm-4 control-label"&gt;Status Pemberian Obat &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;input type="radio" id="status_pemberian_modal_3" name="status_pemberian_modal" value="Lanjut aturan pakai sama" onchange="checkStatusPemberian()"&gt;

&lt;label for="status_pemberian_modal_3"&gt;Lanjut aturan pakai sama&lt;/label&gt;

&lt;br&gt;

&lt;input type="radio" id="status_pemberian_modal_2" name="status_pemberian_modal" value="Lanjut aturan pakai berubah" onchange="checkStatusPemberian()"&gt;

&lt;label for="status_pemberian_modal_2"&gt;Lanjut aturan pakai berubah&lt;/label&gt;

&lt;br&gt;

&lt;input type="radio" id="status_pemberian_modal_1" name="status_pemberian_modal" value="Stop" onchange="checkStatusPemberian()"&gt;

&lt;label for="status_pemberian_modal_1"&gt;Stop&lt;/label&gt;

&lt;br&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group text-left row peratpa" style="margin-bottom: 10px;display: none"&gt;

&lt;label class="col-sm-4 control-label"&gt;Perubahan Aturan Pakai &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;input type="text" class="form-control input-sm" name="perubahan_aturan_pakai_modal" value=""&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group text-left row" style="margin-bottom: 10px;"&gt;

&lt;label class="col-sm-4 control-label"&gt;Keterangan&lt;/label&gt;

&lt;div class="col-sm-8"&gt;

&lt;textarea type="text" class="form-control input-sm" name="keterangan_modal" value="" placeholder="Keterangan"&gt;&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;button type="button" class="btn btn-nambah" style="font-weight: bold;color: green; border: 1px solid green;display: none" onclick="storeRekon(true, 'add')"&gt;Simpan & Tutup&lt;/button&gt;

&lt;button type="button" class="btn btn-success btn-nambah" style="font-weight: bold;display: none" onclick="storeRekon(false, 'add')"&gt;Simpan & Tambah Rekonsiliasi&lt;/button&gt;

&lt;button type="button" class="btn btn-success btn-ngedit" style="font-weight: bold;display: none" onclick="storeRekon(true, 'edit')"&gt;Simpan&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;style&gt;

.cursor {

cursor: pointer;

}

.swal2-popup.swal2-modal.swal2-show {

border-radius: 12px;

}

button.swal2-cancel.swal2-styled {

color: black;

border: 1px solid black;

border-left-color: black!important;

border-right-color: black!important;

}

.tombol-hapus{

color: red;

text-align: center;

cursor: pointer;

}

.thRekon{

color: gray;

background: whitesmoke;

}

# modalObatRekon {

text-align: center;

padding: 0!important;

}

# modalObatRekon:before {

content: '';

display: inline-block;

height: 100%;

vertical-align: middle;

margin-right: -4px;

}

.modal-dialog-centered {

display: inline-block;

text-align: left;

vertical-align: middle;

}

# button_tambah_obat{

cursor: pointer;

color:blue;

}

# modalObatRekon > .select2-container > .select2-dropdown {

text-align: left!important;

}

.select2-container {

min-width: 100%;

}

.select2-container--default .select2-selection--multiple .select2-selection_\_rendered li {

font-size:12px;

}

.select2-results_\_option {

padding-right: 20px;

vertical-align: middle;

font-size:12px;

}

.select2-results_\_option:before {

content: "";

display: inline-block;

position: relative;

height: 20px;

width: 20px;

border: 2px solid #e9e9e9;

border-radius: 4px;

background-color: #fff;

margin-right: 20px;

vertical-align: middle;

font-size:12px;

}

.select2-results_\_option\[aria-selected=true\]:before {

font-family:fontAwesome;

content: "\\f00c";

color: #fff;

background-color: #2b982b;

border: 0;

display: inline-block;

padding-left: 3px;

font-size:12px;

}

.select2-container--default .select2-results_\_option\[aria-selected=true\] {

background-color: #fff;

font-size:12px;

}

.select2-container--default .select2-results_\_option--highlighted\[aria-selected\] {

background-color: #eaeaeb;

color: #272727;

font-size:12px;

}

.select2-container--default .select2-selection--multiple {

margin-bottom: 10px;

border-width: 1px;

border-color: #3c763d;

border-radius: 0px;

padding: 0px 5px;

}

.select2-container--default.select2-container--open.select2-container--below .select2-selection--multiple {

border-radius: 4px;

}

.select2-container--default.select2-container--focus .select2-selection--multiple {

border-color: #2b982b;

border-width: 1px;

}

.select2-container--open .select2-dropdown--below {

border-radius: 6px;

box-shadow: 0 0 10px rgba(0,0,0,0.5);

}

.select2-selection .select2-selection--multiple:after {

content: 'hhghgh';

}

&lt;/style&gt;

&lt;script type="text/javascript"&gt;

let session = '00001033231';

let socket_port = '3231';

let url_socket = '<https://panggilan.infokes.id>';

let socket_resep = io(url_socket + ':' + socket_port);

socket_resep.on('connection');

socket_resep.on("connect_error", (err) => {

console.log(\`connect_error due to \${err.message}\`);

});

socket_resep.emit('room', session);

console.log('connected to room : ' + session);

function emitPrintRoll(id)

{

if(typeof socket_resep !== 'undefined' && typeof id !== 'undefined'){

socket_resep.emit('SendNewResepServer',{'id':id})

}

}

&lt;/script&gt;&lt;script src="<https://kotakediri.epuskesmas.id/lib/select2/js/select2.min.js"&gt;&lt;/script>&gt;

&lt;script type="text/javascript"&gt;

const NOTICE_KEY = 'notice_satu_sehat_resep_jenis_racikan';

function appendDropdownJam(){

let text = '&lt;option value=""&gt; Pilih Frekuensi &lt;/option&gt;';

for (let i = 1; i < 25; i++) {

text += "&lt;option value="+i+"&gt;Tiap "+i+" Jam&lt;/option&gt;";

}

\$('#dropdownFrekuensi').html(text);

}

function showModalRekonsiliasi(){

\$('input\[name="nama_obat_modal"\]').val('');

\$('input\[name="signa_nama_modal"\]').val('');

\$('#dropdownFrekuensi').val(null).trigger('change');

\$('input\[name="cara_pembelian_modal"\]').val('');

\$('input\[name="status_pemberian_modal"\]').prop('checked', false);

\$('input\[name="perubahan_aturan_pakai_modal"\]').val('');

\$('textarea\[name="keterangan_modal"\]').val('');

\$('input\[name="tr_id_rekon"\]').val('');

\$('input\[name="tr_ids"\]').val('');

checkStatusPemberian()

appendDropdownJam()

\$('.btn-nambah').show();

\$('.btn-ngedit').hide();

\$('#modalObatRekonTitle').html('Tambah Rekonsiliasi Obat');

}

function storeRekon(obj, act){

let tr_id = \$('input\[name="tr_ids"\]').val();

let id = \$('input\[name="tr_id_rekon"\]').val();

let nama = \$('input\[name="nama_obat_modal"\]').val() ?? '';

let signa = \$('input\[name="signa_nama_modal"\]').val() ?? '';

let frekuensi = \$('select\[name="frekuensi_modal"\] option:selected').val() ?? '';

let carapembelian = \$('input\[name="cara_pembelian_modal"\]').val() ?? '-';

let statuspemberian = \$('input\[name="status_pemberian_modal"\]:checked').val() ?? '';

let perubahanaturan = \$('input\[name="perubahan_aturan_pakai_modal"\]').val() ?? '';

let keterangan = \$('textarea\[name="keterangan_modal"\]').val() ?? '';

if ( nama == '' || nama.match(/^\\s+\$/) ){

alert('Silahkan isi nama obat', 'danger');

return;

}

if ( statuspemberian == '' ){

alert('Silahkan isi status pemberian obat', 'danger');

return;

}

if ( statuspemberian == 'Lanjut aturan pakai berubah' && perubahanaturan == ''){

alert('Silahkan isi perubahan aturan pakai', 'danger');

return;

}

if ( statuspemberian != 'Lanjut aturan pakai berubah'){

perubahanaturan = '';

}

id = sentData(id, act, nama, signa, frekuensi, carapembelian, statuspemberian, perubahanaturan, keterangan);

var count = \$("#tabel_detail_rekon").children("tr").length;

var x = 0;

if(count == 0){

x = 0;

}else if(tr_id != ''){

x = tr_id;

}else{

x = count;

}

let table = '';

if (id != '') {

table += \`&lt;tr id='trrek_\`+x+\`' ondblclick='editRekon(this)' onclick="alert('klik 2 kali untuk melakukan perubahan', 'info')" class="cursor"&gt;

&lt;td class="text-center"&gt;

&lt;/td&gt;

&lt;td class="row"&gt;

&lt;div class="col-sm-12"&gt;

&lt;h5&gt;&lt;b&gt;\`+nama+\`&lt;/b&gt;&lt;/h5&gt;

&lt;/div&gt;

&lt;div class="col-sm-12"&gt;

&lt;table class="table table-bordered table-hover table-condensed"&gt;

&lt;thead class="thRekon"&gt;

&lt;th&gt;Dosis/Signa&lt;/th&gt;

&lt;th&gt;Frekuensi&lt;/th&gt;

&lt;th&gt;Cara Pemberian&lt;/th&gt;

&lt;th&gt;Status Pemberian Obat&lt;/th&gt;

&lt;th&gt;Perubahan Aturan Pakai&lt;/th&gt;

&lt;/thead&gt;

&lt;tbody&gt;

&lt;td&gt;\`+(signa ? signa : "-")+\`&lt;/td&gt;

&lt;td&gt;\`+(frekuensi ? 'Tiap '+frekuensi+' Jam' : "-" )+\`&lt;/td&gt;

&lt;td&gt;\`+(carapembelian ? carapembelian : "-")+\`&lt;/td&gt;

&lt;td&gt;\`+statuspemberian+\`&lt;/td&gt;

&lt;td&gt;\`+(perubahanaturan ? perubahanaturan : "-")+\`&lt;/td&gt;

&lt;/tbody&gt;

&lt;/table&gt;

&lt;/div&gt;

&lt;div class="col-sm-12"&gt;

&lt;span&gt;Keterangan: \`+(keterangan ? keterangan : "-")+\`&lt;/span&gt;

&lt;/div&gt;

&lt;/td&gt;

&lt;td&gt;

&lt;div class="tombol-hapus" onclick="removeRekonItem(this, '\`+id+\`')"&gt;

&lt;i class="fa fa-trash" aria-hidden="true" style="font-size:16px;"&gt;&lt;/i&gt;

&lt;br&gt;

&lt;h5&gt;Hapus&lt;/h5&gt;

&lt;/div&gt;

&lt;input name='RekonsiliasiObat\[\`+x+\`\]\[id\]' type='text' class='hidden form-control input-sm' value="\`+id+\`"&gt;

&lt;input name='RekonsiliasiObat\[\`+x+\`\]\[nama_obat\]' type='text' class='hidden form-control input-sm' value="\`+nama+\`"&gt;

&lt;input name='RekonsiliasiObat\[\`+x+\`\]\[signa\]' type='text' class='hidden form-control input-sm' value="\`+signa+\`"&gt;

&lt;input name='RekonsiliasiObat\[\`+x+\`\]\[frekuensi\]' type='text' class='hidden form-control input-sm' value="\`+frekuensi+\`"&gt;

&lt;input name='RekonsiliasiObat\[\`+x+\`\]\[cara_pembelian\]' type='text' class='hidden form-control input-sm' value="\`+carapembelian+\`"&gt;

&lt;input name='RekonsiliasiObat\[\`+x+\`\]\[status_pemberian\]' type='text' class='hidden form-control input-sm' value="\`+statuspemberian+\`"&gt;

&lt;input name='RekonsiliasiObat\[\`+x+\`\]\[perubahan_aturan\]' type='text' class='hidden form-control input-sm' value="\`+perubahanaturan+\`"&gt;

&lt;input name='RekonsiliasiObat\[\`+x+\`\]\[keterangan\]' type='text' class='hidden form-control input-sm' value="\`+keterangan+\`"&gt;

&lt;/td&gt;

&lt;/tr&gt;\`;

}

if(tr_id == ''){

\$("#tabel_detail_rekon").append(table);

}else{

\$("#trrek_"+x).replaceWith(table);

}

urutNomor();

\$('input\[name="nama_obat_modal"\]').val('');

\$('input\[name="signa_nama_modal"\]').val('');

\$('#dropdownFrekuensi').val(null).trigger('change');

appendDropdownJam()

\$('input\[name="cara_pembelian_modal"\]').val('');

\$('input\[name="status_pemberian_modal"\]').prop('checked', false);

\$('input\[name="perubahan_aturan_pakai_modal"\]').val('');

\$('textarea\[name="keterangan_modal"\]').val('');

\$('input\[name="tr_id_rekon"\]').val();

if(obj == true){

\$('#modalObatRekon').modal('hide');

}

checkStatusPemberian()

}

function editRekon(object){

\$('.btn-nambah').hide();

\$('.btn-ngedit').show();

\$('#modalObatRekonTitle').html('Ubah Rekonsiliasi Obat');

let obj = \$(object).attr('id').replace('trrek_','');

\$('input\[name="tr_ids"\]').val(obj);

\$('input\[name="tr_id_rekon"\]').val(\$('input\[name="RekonsiliasiObat\['+obj+'\]\[id\]"\]').val());

\$('input\[name="nama_obat_modal"\]').val(\$('input\[name="RekonsiliasiObat\['+obj+'\]\[nama_obat\]"\]').val());

\$('input\[name="signa_nama_modal"\]').val(\$('input\[name="RekonsiliasiObat\['+obj+'\]\[signa\]"\]').val());

\$('#dropdownFrekuensi').val(\$('input\[name="RekonsiliasiObat\['+obj+'\]\[frekuensi\]"\]').val()).trigger('change');

\$('input\[name="cara_pembelian_modal"\]').val(\$('input\[name="RekonsiliasiObat\['+obj+'\]\[cara_pembelian\]"\]').val());

\$('input\[name="status_pemberian_modal"\]\[value="' + \$('input\[name="RekonsiliasiObat\['+obj+'\]\[status_pemberian\]"\]').val() + '"\]').prop('checked',true);

\$('input\[name="perubahan_aturan_pakai_modal"\]').val(\$('input\[name="RekonsiliasiObat\['+obj+'\]\[perubahan_aturan\]"\]').val());

\$('textarea\[name="keterangan_modal"\]').val(\$('input\[name="RekonsiliasiObat\['+obj+'\]\[keterangan\]"\]').val());

checkStatusPemberian()

\$('#modalObatRekon').modal('show')

}

function removeRekonItem(obj, id){

Swal.fire({

title: 'Apakah Anda Yakin ?',

text: "Setelah menghapus, data tidak bisa dikembalikan.",

type: 'error',

showCancelButton: true,

reverseButtons: true,

confirmButtonColor: '#d33',

cancelButtonColor: 'white',

confirmButtonText: '✔ Hapus',

cancelButtonText: '✖.Batalkan'

}).then((result) => {

if (result.value) {

sentData(id, 'hapus');

\$(obj).parent().parent().remove();

urutNomor();

}

})

}

function urutNomor(){

let nomor = 1;

\$('#tabel_detail_rekon').children('tr').each(function () {

\$(this).children().first().html(nomor++)

});

}

function checkStatusPemberian(){

let check = \$('input\[name="status_pemberian_modal"\]:checked').val();

if (check == 'Lanjut aturan pakai berubah') {

\$('.peratpa').show()

} else {

\$('.peratpa').hide()

}

}

\$("#dropdownFrekuensi").select2({

placeholder: "Pilih Frekuensi",

allowClear: true,

dropdownParent: \$("#modalObatRekon")

});

\$("#inputObatModal").autocomplete({

delay: 1000,

source: function( request, response ) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/create/63569>",

method: "GET",

dataType: "json",

data: {

autocomplete: 'obatRekon',

search: {'cari_obat':request.term}

},

success: function(data) {

response(data);

},

error: function (xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

},

onSelect: function (suggestion) {

}

});

\$(function(){

\$("#check_all").prop('checked',false);

\$(window).scroll(function() {

sessionStorage.scrollTop = \$(this).scrollTop();

});

\$(document).ready(function() {

\$('html, body').animate({

scrollTop: sessionStorage.scrollTop

});

});

reArange();

reArange('copy');

if(\$("select\[data-for=obat_racikan\]").val()!=""){

\$('input\[data-for="obat_jumlah_permintaan"\]').removeAttr('disabled');

}else{

\$('input\[data-for="obat_jumlah_permintaan"\]').attr('disabled','disabled');

}

\$('input\[name="Resep\[ruangantujuan_id\]"\]').val('0007');

\$('input\[name=ruangan\]').val('APOTEK');

var ruangan_asal_id = \$('input\[name="ruangan_asal_id"\]').val();

var ruangan_tujuan_id = \$('input\[name="Resep\[ruangantujuan_id\]"\]').val();

setAutocompleteObat(ruangan_tujuan_id);

if (0 == '1') {

totalAll();

setEmbalase(\$('select\[data-for="obat_racikan"\]'));

}

});

var arrObat = \[\];

var groupBy = \[\];

var items = \[\];

if(arrObat != '' && arrObat != null && arrObat != undefined) {

\$.each(arrObat\[0\].dataAlergi, function(index, value) {

var key = value.id !== null ? value.id : value.text;

if (key in groupBy) {

groupBy\[key\].push(value.text);

} else {

groupBy\[key\] = \[value.text\];

}

});

var tempId = '';

const entries = Object.entries(groupBy);

for (const \[key, label\] of entries) {

if (label != ''){

if(label == 'Tidak Ada'){

value = 'tidak';

}else{

value = key;

}

if(tempId == ''){

tempId = value;

}else{

tempId = tempId+','+value;

}

\$('.js-select2').append('&lt;option value="'+value+'" selected&gt;'+label+'&lt;/option&gt;');

}

}

\$('#text_alergiobat').text(tempId);

}

\$('.js-select2').select2({

language: {

searching:function(){ return "Mencari obat..." },

errorLoading:function(){ return "Data tidak ditemukan..." },

inputTooShort: function() { return 'Silahkan masukan nama obat.' },

noResults: function () { return "Obat tidak ditemukan." }

},

closeOnSelect : false,

placeholder: "Cari obat",

minimumInputLength: 1,

multiple: true,

width: 'resolve',

delay: 1000,

tags: true,

tokenSeparators: \[','\],

ajax: {

url: "<https://kotakediri.epuskesmas.id/resep/create/63569>",

method: "GET",

dataType: "json",

data: function (params) {

var query = {

autocomplete: 'obatAlergi',

search: {'obat':params.term}

}

return query;

},

processResults: function (data) {

return {

results: data

};

}

}

});

\$('.js-select2').on('change', function (e) {

var selections = \$(this).select2('val');

\$('textarea\[name="MAlergiPasien\[Obat\]\[value\]"\]').val(selections);

});

function returnScroll(){

\$('html, body').animate({

scrollTop: sessionStorage.scrollTop

});

}

\$("form\[form-ajax-print\]").each(function(){

\$(this).on('submit',function(event){

event.preventDefault();

var button_submit = \$(this).find('button\[type=submit\]');

var button_reset = \$(this).find('button\[type=reset\]');

button_submit.addClass('loading');

var hasEmptyJenisRacikan = false;

\$("#tabel_detail tr").each(function() {

var obatRacikanSelect = \$(this).find('select\[name\*="\[obat_racikan\]"\]').val();

var obatRacikanInput = \$(this).find('input\[name\*="\[obat_racikan\]"\]').val();

var obatRacikan = obatRacikanSelect || obatRacikanInput;

var jenisRacikanId = \$(this).find('input\[name\*="\[jenis_racikan_id\]"\]').val();

if (obatRacikan && obatRacikan !== "" && obatRacikan !== "- PILIH -" && (!jenisRacikanId || jenisRacikanId === "")) {

hasEmptyJenisRacikan = true;

return false;

}

});

if (hasEmptyJenisRacikan && localStorage.getItem(NOTICE_KEY) !== 'true') {

button_submit.removeClass('loading');

showPopupJenisRacikanWarning(\$(this), button_submit);

return false;

}

submitResepForm(\$(this), button_submit);

});

});

function submitResepForm(form, button_submit) {

button_submit.addClass('loading');

\$.ajax({

url: form.attr('action'),

method: form.attr('method'),

dataType: "json",

data: form.serialize()+ "&lastscroll=" + sessionStorage.scrollTop,

success: function(data){

button_submit.removeClass('loading');

\$('#form_create').removeClass('changed-input');

if(data.status == 'success'){

syncPendaftaranKiosk();

if(typeof emitPrintRoll ==='function') {

emitPrintRoll(data.id);

}

button_submit.hide();

\$.each(data.print_url,function(key,val){

\$('#button_print_'+key).attr('disabled',false).attr('onclick','window.open("'+val+'", "", "left=100,top=100");');

});

}

alert(data.message,data.status);

\$('#button_add_obat, #button_delete_obat').prop('disabled', true);

if (!data.message.match(/Obat yang sama tidak boleh ada di dalam satu proses!/) ||

!data.message.match(/terdapat obat yang sudah digunakan pada resep berbeda dengan pelayanan yang sama/)) {

\$('#form_create input').attr('disabled', false);

}

\$('#form_create input').attr('disabled', true);

},

error: function (xhr, ajaxOptions, thrownError) {

const message = (xhr.responseJSON && xhr.responseJSON.meta && xhr.responseJSON.meta.message) ? xhr.responseJSON.meta.message : "Terjadi kesalahan sistem, silahkan hubungi team support kami!";

const messageWithoutModelIndex = message.replace(/&lt;\[^&gt;\]\*>?/g, '').replace(/ResepDetail\\.\\d+\\./g, '');

const messageWithValidColumn = messageWithoutModelIndex.replace(/obat_jumlah/g, 'Jumlah Obat').replace(/obat_jumlah/g, 'Jumlah');

alert(messageWithValidColumn, "danger");

button_submit.removeClass('loading');

\$('#button_save').removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

},

complete: function(xhr) {

\$.unblockUI();

}

});

}

function showPopupJenisRacikanWarning(form, button_submit) {

let title = 'Jenis racikan belum diisi';

let logo = '&lt;svg width="90" height="91" viewBox="0 0 90 91" fill="none" xmlns="<http://www.w3.org/2000/svg"&gt;&lt;circle> cx="45" cy="45.5" r="45" fill="#FFF4DD"/&gt;&lt;circle cx="45" cy="45.5002" r="39.1936" fill="#FFD496"/&gt;&lt;path d="M63.7 56.328L48.6695 30.2253C48.2939 29.5858 47.7577 29.0556 47.1141 28.6871C46.4704 28.3187 45.7417 28.1249 45 28.1249C44.2584 28.1249 43.5296 28.3187 42.8859 28.6871C42.2423 29.0556 41.7061 29.5858 41.3305 30.2253L26.3 56.328C25.9386 56.9465 25.7482 57.65 25.7482 58.3664C25.7482 59.0828 25.9386 59.7863 26.3 60.4048C26.6708 61.0482 27.2061 61.5813 27.8509 61.9495C28.4958 62.3177 29.227 62.5077 29.9695 62.5H60.0305C60.7724 62.5071 61.5029 62.3168 62.1471 61.9487C62.7913 61.5805 63.3261 61.0477 63.6966 60.4048C64.0585 59.7866 64.2495 59.0832 64.2501 58.3669C64.2507 57.6505 64.0609 56.9468 63.7 56.328ZM61.3161 59.0281C61.1851 59.2516 60.997 59.4363 60.771 59.5631C60.5451 59.69 60.2895 59.7545 60.0305 59.75H29.9695C29.7105 59.7545 29.4549 59.69 29.229 59.5631C29.0031 59.4363 28.815 59.2516 28.6839 59.0281C28.5652 58.8272 28.5026 58.5981 28.5026 58.3647C28.5026 58.1313 28.5652 57.9022 28.6839 57.7012L43.7144 31.5986C43.8481 31.3761 44.037 31.1921 44.2629 31.0643C44.4888 30.9365 44.7439 30.8693 45.0035 30.8693C45.263 30.8693 45.5181 30.9365 45.744 31.0643C45.9699 31.1921 46.1588 31.3761 46.2925 31.5986L61.323 57.7012C61.4406 57.9028 61.5021 58.1322 61.5008 58.3656C61.4996 58.599 61.4358 58.8278 61.3161 59.0281ZM43.625 48.75V41.875C43.625 41.5103 43.7699 41.1606 44.0277 40.9027C44.2856 40.6449 44.6353 40.5 45 40.5C45.3647 40.5 45.7144 40.6449 45.9723 40.9027C46.2301 41.1606 46.375 41.5103 46.375 41.875V48.75C46.375 49.1147 46.2301 49.4644 45.9723 49.7223C45.7144 49.9801 45.3647 50.125 45 50.125C44.6353 50.125 44.2856 49.9801 44.0277 49.7223C43.7699 49.4644 43.625 49.1147 43.625 48.75ZM47.0625 54.9375C47.0625 55.3454 46.9415 55.7442 46.7149 56.0834C46.4883 56.4225 46.1662 56.6869 45.7893 56.843C45.4124 56.9991 44.9977 57.0399 44.5976 56.9604C44.1976 56.8808 43.83 56.6843 43.5416 56.3959C43.2532 56.1075 43.0567 55.74 42.9771 55.3399C42.8976 54.9398 42.9384 54.5251 43.0945 54.1482C43.2506 53.7713 43.515 53.4492 43.8541 53.2226C44.1933 52.996 44.5921 52.875 45 52.875C45.547 52.875 46.0716 53.0923 46.4584 53.4791C46.8452 53.8659 47.0625 54.3905 47.0625 54.9375Z" fill="#FF9600"/&gt;&lt;/svg&gt;';

let html = '&lt;div class="popup-skrining-warning" style="padding: 0;"&gt;' +

'&lt;div style="text-align: center; margin-bottom: 24px;"&gt;' + logo + '&lt;/div&gt;' +

'&lt;h4 style="margin: 0 0 16px 0; font-size: 18px; line-height: 1.4; color: #333; font-weight: bold; text-align: center;"&gt;' + title + '&lt;/h4&gt;' +

'&lt;div style="text-align: center; margin: 0 0 24px 0; color: #333; font-size: 14px; line-height: 1.5;"&gt;Jenis racikan diperlukan untuk dikirim ke &lt;strong&gt;"SatuSehat"&lt;/strong&gt;. Silakan ubah data obat racik dengan mengklik dua kali pada baris tabel.&lt;/div&gt;' +

'&lt;div style="display: flex; align-items: center; justify-content: center; margin: 24px 0;"&gt;' +

'&lt;input type="checkbox" id="jangan-tampilkan" style="width: 18px; height: 18px; margin-right: 8px; cursor: pointer;" /&gt;' +

'&lt;label for="jangan-tampilkan" style="cursor: pointer; font-size: 14px; color: #333; margin: 0;"&gt;Jangan tampilkan lagi informasi ini&lt;/label&gt;' +

'&lt;/div&gt;' +

'&lt;/div&gt;'+

'&lt;div style="display: flex; gap: 12px; margin-left: -12px; margin-right: -12px; margin-bottom: -12px; padding: 16px 20px; background: #F7F7F7; border-radius: 0 0 6px 6px;"&gt;' +

'&lt;button class="btn-kembali" id="btn-kembali" style="flex: 1; padding: 12px; background: white; border: 1px solid #000; border-radius: 3px; cursor: pointer; font-size: 14px; font-weight: bold; color: #000;"&gt;Kembali&lt;/button&gt;' +

'&lt;button class="btn-simpan" id="btn-simpan-tanpa-isi" style="flex: 1; padding: 12px; background: #FF9600; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 14px; font-weight: bold;"&gt;Simpan tanpa jenis racikan&lt;/button&gt;' +

'&lt;/div&gt;';

Swal.fire({

html: html,

customClass: {

popup: 'swal-style'

},

allowOutsideClick: false,

allowEscapeKey: false,

allowEnterKey: false,

showCancelButton: false,

showConfirmButton: false,

width: '500px'

});

// Remove previous event handlers to avoid duplicates

\$(document).off('click', '#btn-kembali');

\$(document).off('click', '#btn-simpan-tanpa-isi');

\$(document).off('change', '#jangan-tampilkan');

// Set localStorage on checkbox change

\$(document).on('change', '#jangan-tampilkan', function() {

let jangan_tampilkan = \$(this).is(':checked');

if (jangan_tampilkan) {

localStorage.setItem(NOTICE_KEY, 'true');

} else {

localStorage.setItem(NOTICE_KEY, 'false');

}

});

\$(document).on('click', '#btn-kembali', function() {

Swal.close();

});

\$(document).on('click', '#btn-simpan-tanpa-isi', function() {

Swal.close();

// Continue with form submission

setTimeout(function() {

submitResepForm(form, button_submit);

}, 300);

});

}

function setDataPelayanan(item)

{

var html = "";

var d = new Date(), tanggal = \[d.getDate().padLeft(), (d.getMonth()+1).padLeft(), d.getFullYear()\].join('-')+' '+ \[d.getHours().padLeft(), d.getMinutes().padLeft(), d.getSeconds().padLeft()\].join(':');

if(item.id != ''){

if(item.asuransi == 'BPJS'){

var text_asuransi= "&lt;b&gt;&lt;span class='text-success'&gt;"+item.asuransi_nama+"&lt;/span&gt;&lt;/b&gt;";

}else{

var text_asuransi= "&lt;b&gt;&lt;span class='text'&gt;"+item.asuransi_nama+"&lt;/span&gt;&lt;/b&gt;";

}

html = "ID Pelayanan: "+ "&lt;i class='"+item.reg_type+"'&gt;&lt;/i&gt; " + item.id+"&lt;br&gt;"

+"Tanggal: "+item.tanggal+"&lt;br&gt;"

+"Poli/Ruangan: "+item.ruangan_nama+"&lt;br&gt;"

+"No. eRM: "+item.pasien_id.substr(8)+"&lt;br&gt;"

+"No. RM Lama: "+(item.no_rm_lama == null ? "-":item.no_rm_lama)+"&lt;br&gt;"

+"No. Dokumen RM: "+(item.no_dok_rm == null ? "-":item.no_dok_rm)+"&lt;br&gt;"

+"NIK: "+(item.nik == null ? "-":item.nik)+"&lt;br&gt;"

+"Nama: "+item.pasien_nama+"&lt;br&gt;"

+"JK: "+item.jenis_kelamin+"&lt;br&gt;"

+"Tempat & Tgl Lahir: "+(item.tempat_lahir == null ?"-":item.tempat_lahir)+","

+(item.tanggal_lahir == null ?"":item.tanggal_lahir)+"&lt;br&gt;"

+"Umur: "+item.umur_pasien+"&lt;br&gt;"

+"Asuransi: "+text_asuransi+"&lt;br&gt;";

if(item.perawat_id != null){

\$('input\[name="Resep\[perawat_id\]"\]').val(item.perawat_id);

\$('input\[name="perawat_nama"\]').val(item.perawat_nama);

}else{

\$('input\[name="Resep\[perawat_id\]"\]').val('');

\$('input\[name="perawat_nama"\]').val('');

}

if(item.is_bridgingbpjs == 1){

\$('input\[name="dokter_nama"\]').hide();

\$('input\[name="dokter_nama"\]').attr('required',false);

\$('input\[name="dokter_nama_bpjs"\]').show();

\$('input\[name="dokter_nama_bpjs"\]').attr('required',true);

if(item.dokter_id != null){

\$('input\[name="Resep\[dokter_id\]"\]').val(item.dokter_id);

\$('input\[name="dokter_nama_bpjs"\]').val(item.dokter_nama);

}else{

\$('input\[name="Resep\[dokter_id\]"\]').val('');

\$('input\[name="dokter_nama_bpjs"\]').val('');

}

}else{

\$('input\[name="dokter_nama"\]').show();

\$('input\[name="dokter_nama"\]').attr('required',true);

\$('input\[name="dokter_nama_bpjs"\]').hide();

\$('input\[name="dokter_nama_bpjs"\]').attr('required',false);

if(item.dokter_id != null){

\$('input\[name="Resep\[dokter_id\]"\]').val(item.dokter_id);

\$('input\[name="dokter_nama"\]').val(item.dokter_nama);

}else{

\$('input\[name="Resep\[dokter_id\]"\]').val('');

\$('input\[name="dokter_nama"\]').val('');

}

}

if(item.alergi_pasien != null){

var list = '';

jQuery.each(item.alergi_pasien,function(i,val){

list +="&lt;li&gt;"+val.jenis_alergi+" : "+val.value+"&lt;/li&gt;";

});

\$('#alergi_pasien').html(list);

}

tanggal = item.tanggal;

}

\$('#data_pelayanan').html(html);

\$('#tanggal').html(tanggal);

\$('.date-next').datetimepicker({

locale:'id',

format:'DD-MM-YYYY',

minDate: tanggal_min,

defaultDate: null,

useCurrent: false

});

}

function updateJumlahPermintaan(racikanValue, obat_jumlah_permintaan) {

if (racikanValue) {

const elements = Array.from(document.querySelectorAll(\`#tabel_detail tr td input\`));

elements.forEach(element => {

const findRacikan = \$(element).attr('name').includes('obat_racikan') && \$(element).val() === racikanValue;

if(findRacikan) {

const getIndex = \$(element).attr('name').match(/\\d+/)\[0\] ?? null;

if(getIndex) {

const jumlahPermintaanInput = document.createElement('input');

jumlahPermintaanInput.setAttribute('type', 'hidden');

jumlahPermintaanInput.setAttribute('name', \`ResepDetail\[\${getIndex}\]\[obat_jumlah_permintaan\]\`);

jumlahPermintaanInput.setAttribute('value', obat_jumlah_permintaan);

const parentContainer = \$(\`input\[name="ResepDetail\[\${getIndex}\]\[obat_jumlah_permintaan\]"\]\`).parent()

parentContainer.empty().append(jumlahPermintaanInput).append(obat_jumlah_permintaan);

}

}

})

}

}

function racikan(obj) {

const racikanValue = obj.val();

const jumlahPermintaanInput = \$('input\[data-for="obat_jumlah_permintaan"\]');

const jenisRacikanInput = \$('input\[data-for="jenis_racikan_nama"\]');

const jenisRacikanIdInput = \$('input\[data-for="jenis_racikan_id"\]');

jenisRacikanInput.val("");

jenisRacikanIdInput.val("");

if (racikanValue) {

const elements = Array.from(document.querySelectorAll(\`#tabel_detail tr td input\`));

const findRacikan = elements.find(item => \$(item).attr('name').includes('obat_racikan') && \$(item).val() === racikanValue);

if (findRacikan) {

const getIndex = \$(findRacikan).attr('name').match(/\\d+/)\[0\] ?? null;

if (getIndex) {

const getJumlahObatRacikan = \$(\`input\[name="ResepDetail\\\\\[\${getIndex}\\\\\]\\\\\[obat_jumlah_permintaan\\\\\]"\]\`).val();

jumlahPermintaanInput.val(getJumlahObatRacikan);

const getJenisRacikanId = \$(\`input\[name="ResepDetail\\\\\[\${getIndex}\\\\\]\\\\\[jenis_racikan_id\\\\\]"\]\`).val();

const racikanRow = \$(findRacikan).closest('tr');

const jenisRacikanNamaText = racikanRow.find('td').eq(2).text().trim();

if (getJenisRacikanId && jenisRacikanNamaText) {

jenisRacikanIdInput.val(getJenisRacikanId);

jenisRacikanInput.val(jenisRacikanNamaText);

}

jenisRacikanInput.prop('disabled', true);

}

jumlahPermintaanInput.prop('disabled', \$(findRacikan).val() === racikanValue);

} else {

jumlahPermintaanInput.prop('disabled', false).val("");

jenisRacikanInput.prop('disabled', false);

}

} else {

jumlahPermintaanInput.prop('disabled', true).val("");

jenisRacikanInput.prop('disabled', true).val("");

jenisRacikanIdInput.val("");

}

if (0 == '1') {

setEmbalase(obj);

}

}

function setEmbalase(obj)

{

var embalase = {};

if(embalase == '{}') {

} else {

if (\$(obj).val() !== "") {

\$('input\[data-for="embalase"\]').val(embalase.biaya_racik);

} else {

\$('input\[data-for="embalase"\]').val(embalase.biaya_per_obat);

}

}

totalAwal();

}

function totalAwal()

{

var jumlah = parseFloat((\$('input\[data-for="obat_jumlah"\]').val() == '') ? 0 : \$('input\[data-for="obat_jumlah"\]').val());

var harga = parseFloat((\$('input\[data-for="harga"\]').val() == '') ? 0 : \$('input\[data-for="harga"\]').val());

var embalase = parseFloat((\$('input\[data-for="embalase"\]').val() == '') ? 0 : \$('input\[data-for="embalase"\]').val());

var total = (jumlah \* harga) + embalase;

\$('#total').text(adjustments(total));

}

function adjustment(value) {

let firstString = value.toString().split(".");

if (firstString\[1\]) {

let secondString = firstString\[1\].split("9999999");

if (secondString\[1\]) {

value = parseFloat(value);

value = value.toFixed(secondString\[0\].length);

}

}

return parseFloat(value);

}

function changeJumlah()

{

totalAwal();

}

function totalAll()

{

var totals = 0;

\$.each(\$('#tabel_detail tr'), function(key, value){

if (key > 0) {

var tr_id = \$(value).attr('id');

var total = parseFloat(\$('tr#'+tr_id+' span#total').text());

if(total >= 0){

totals += total;

}

}

});

\$('#totalAll').text('Rp ' + labelCurrencyDigit(adjustments(totals)));

}

function resetForm(type=null){

if(type=='copy'){

\$('input\[data-for="tr_id_copy"\]').val("");

\$('input\[data-for="id_copy"\]').val("");

\$('input\[data-for="obat_nama_copy"\]').val("");

\$('input\[data-for="obat_nama_copy"\]').attr('readonly',false);

\$('input\[data-for="obat_id_copy"\]').val("");

\$('select\[data-for="aturan_pakai_copy"\]').val("");

\$('input\[data-for="obat_jumlah_copy"\]').val("");

\$('input\[data-for="obat_tipe_copy"\]').val("");

\$('input\[data-for="obat_keterangan_copy"\]').val("");

\$('#tabel_detail_copy').children().removeClass();

}else{

\$('input\[data-for="tr_id"\]').val("");

\$('input\[data-for="id"\]').val("");

\$('input\[data-for="obat_nama"\]').val("");

\$('input\[data-for="obat_nama"\]').attr('readonly',false);

\$('input\[data-for="obat_id"\]').val("");

\$('input\[data-for="obat_jumlah"\]').val("");

\$('input\[data-for="obat_keterangan"\]').val("");

\$('input\[data-for="jenis_racikan_id"\]').val("");

\$('input\[data-for="jenis_racikan_nama"\]').val("");

\$('input\[data-for="jenis_racikan_nama"\]').prop('disabled', true);

\$('select\[data-for="obat_racikan"\]').val("");

\$('input\[data-for="obat_jumlah_permintaan"\]').val("");

\$('input\[data-for="obat_jumlah_permintaan"\]').prop('disabled', true);

\$('#tabel_detail').children().removeClass();

}

}

function cekObatSemua(obat_id){

var arrObat = \[\];

if(arrObat.indexOf(obat_id) != -1){

alert('obat yang sama tidak boleh di input dihari yang sama!');

return false;

}

}

function cekObat(obat_id){

var x = 2;

var err = 0;

\$("#tabel_detail").children("tr").each(function(){

var exist = \$('input\[name="ResepDetail\['+x+'\]\[obat_id\]"\]').val();

if(obat_id == exist){

err = 1;

}

x++;

});

if(err==1){

alert('Obat yang sama tidak boleh dalam satu proses!');

return false;

}

}

function reArange(type=null){

let id = type=='copy' ? 'tabel_detail_copy' : 'tabel_detail'

\$("#"+id+"").children("tr").each(function(a){

var numx=parseInt(a)+1;

if (numx==-1) idnya=''; else idnya='tr_'+numx;

this.id=idnya;

\$('#tr_'+numx+' input, #tr_' + numx + ' select').each(function(z){

var angka = this.name.toString();

var thenum = parseInt(angka.replace(/\[^0-9\\.\]/g, ''), 10);

this.name=angka.replace(thenum, numx);

thenum='';

});

});

}

function resetTable(){

\$("#tabel_detail tr").remove();

\$("#check_all").prop('checked',false);

}

function addEdit(data){

var id = data.id.split('\_');

var val_id = \$('input\[name="ResepDetail\['+id\[1\]+'\]\[id\]"\]').val();

var val_obat_id = \$('input\[name="ResepDetail\['+id\[1\]+'\]\[obat_id\]"\]').val();

var val_obat_nama = data.children\[3\].innerText;

var val_obat_jumlah = \$('input\[name="ResepDetail\['+id\[1\]+'\]\[obat_jumlah\]"\]').val();

var val_obat_signa = \$('input\[name="ResepDetail\['+id\[1\]+'\]\[obat_signa\]"\]').val();

var val_obat_racikan = \$('input\[name="ResepDetail\['+id\[1\]+'\]\[obat_racikan\]"\]').val();

var val_obat_jumlah_permintaan = \$('input\[name="ResepDetail\['+id\[1\]+'\]\[obat_jumlah_permintaan\]"\]').val();

var val_obat_jenis_racikan_id = \$('input\[name="ResepDetail\['+id\[1\]+'\]\[jenis_racikan_id\]"\]').val();

var val_jenis_racikan_nama = data.children\[2\] ? data.children\[2\].innerText.trim() : '';

var val_obat_keterangan = \$('input\[name="ResepDetail\['+id\[1\]+'\]\[obat_keterangan\]"\]').val();

if (0 == '1') {

var harga = \$('input\[name="ResepDetail\['+id\[1\]+'\]\[harga\]"\]').val();

var embalase = \$('input\[name="ResepDetail\['+id\[1\]+'\]\[embalase\]"\]').val();

}

\$('input\[data-for="tr_id"\]').val(id\[1\]);

\$('input\[data-for="id"\]').val(val_id);

\$('input\[data-for="obat_id"\]').val(val_obat_id);

\$('input\[data-for="obat_nama"\]').val(val_obat_nama);

\$('input\[data-for="obat_nama"\]').attr('readonly',true);

\$('input\[data-for="obat_jumlah"\]').val(val_obat_jumlah);

\$('input\[data-for="obat_signa"\]').val(val_obat_signa);

\$('select\[data-for="obat_racikan"\]').val(val_obat_racikan)

if(val_obat_racikan!=""){

\$('input\[data-for="obat_jumlah_permintaan"\]').removeAttr("disabled");

\$('input\[data-for="jenis_racikan_nama"\]').prop('disabled', false);

} else {

\$('input\[data-for="jenis_racikan_nama"\]').prop('disabled', true);

}

\$('input\[data-for="obat_jumlah_permintaan"\]').val(val_obat_jumlah_permintaan)

\$('input\[data-for="jenis_racikan_id"\]').val(val_obat_jenis_racikan_id);

\$('input\[data-for="jenis_racikan_nama"\]').val(val_jenis_racikan_nama);

\$('input\[data-for="obat_keterangan"\]').val(val_obat_keterangan);

if (0 == '1') {

\$('input\[data-for="harga"\]').val(harga);

\$('input\[data-for="embalase"\]').val(embalase);

}

\$(data).addClass('warning');

\$("#button_add_obat").text('Ubah');

}

\$('tr\[pjax-content\]').each(function(){

\$(this).on('click', 'td:last-child', function(e) {

e.stopPropagation();

});

\$(this).click(function(event){

alert('Silahkan klik/tap 2x pada baris data untuk merubah data 333.','info');

});

\$(this).dblclick(function(event){

event.preventDefault();

resetForm();

addEdit(this);

\$('button\[data-notify=dismiss\]').click();

});

\$(this).bind('touchstart', function preventZoom(e) {

var t2 = e.timeStamp

, t1 = \$(this).data('lastTouch') || t2

, dt = t2 - t1

, fingers = e.originalEvent.touches.length;

\$(this).data('lastTouch', t2);

if (!dt || dt > 500 || fingers > 1) return;

e.preventDefault();

\$(this).trigger('dblclick');

});

});

\$('tr\[pjax-content-copy\]').each(function(){

\$(this).on('click', 'td:last-child', function(e) {

e.stopPropagation();

});

\$(this).click(function(event){

alert('Silahkan klik/tap 2x pada baris data untuk merubah data 333.','info');

});

\$(this).dblclick(function(event){

event.preventDefault();

resetForm('copy');

addEditCopy(this);

\$('button\[data-notify=dismiss\]').click();

});

\$(this).bind('touchstart', function preventZoom(e) {

var t2 = e.timeStamp

, t1 = \$(this).data('lastTouch') || t2

, dt = t2 - t1

, fingers = e.originalEvent.touches.length;

\$(this).data('lastTouch', t2);

if (!dt || dt > 500 || fingers > 1) return;

e.preventDefault();

\$(this).trigger('dblclick');

});

});

function addEditCopy(data){

var id = data.id.split('\_');

var val_id = \$('input\[name="ResepDetailCopy\['+id\[1\]+'\]\[id_copy\]"\]').val();

var val_obat_tipe = \$('input\[name="ResepDetailCopy\['+id\[1\]+'\]\[obat_tipe\]"\]').val();

var val_obat_id = \$('input\[name="ResepDetailCopy\['+id\[1\]+'\]\[obat_id_copy\]"\]').val();

var val_obat_nama = data.children\[1\].innerText;

var val_obat_jumlah = \$('input\[name="ResepDetailCopy\['+id\[1\]+'\]\[obat_jumlah_copy\]"\]').val();

var val_obat_signa = \$('input\[name="ResepDetailCopy\['+id\[1\]+'\]\[obat_signa_copy\]"\]').val();

var val_aturan_pakai = \$('input\[name="ResepDetailCopy\['+id\[1\]+'\]\[aturan_pakai_copy\]"\]').val();

var val_obat_racikan = \$('input\[name="ResepDetailCopy\['+id\[1\]+'\]\[obat_racikan_copy\]"\]').val();

var val_obat_keterangan = \$('input\[name="ResepDetailCopy\['+id\[1\]+'\]\[obat_keterangan_copy\]"\]').val();

\$('input\[data-for="tr_id_copy"\]').val(id\[1\]);

\$('input\[data-for="id_copy"\]').val(val_id);

\$('input\[data-for="obat_tipe_copy"\]').val(val_obat_tipe);

\$('input\[data-for="obat_id_copy"\]').val(val_obat_id);

\$('input\[data-for="obat_nama_copy"\]').val(val_obat_nama);

\$('input\[data-for="obat_nama_copy"\]').attr('readonly',true);

\$('input\[data-for="obat_jumlah_copy"\]').val(val_obat_jumlah);

\$('input\[data-for="obat_signa_copy"\]').val(val_obat_signa);

\$('input\[data-for="signa_nama_copy"\]').val(val_obat_signa);

\$('select\[data-for="aturan_pakai_copy"\]').val(val_aturan_pakai);

\$('select\[data-for="obat_racikan_copy"\]').val(val_obat_racikan)

\$('input\[data-for="obat_keterangan_copy"\]').val(val_obat_keterangan);

\$(data).addClass('warning');

\$("#button_add_obat_copy").text('Ubah');

}

\$("#check_all").change(function () {

\$('tbody tr td input\[type="checkbox"\]').not("input\[name='check\[1\]'\]").prop('checked', \$(this).prop('checked'));

});

function checkAll(obj)

{

\$('tbody tr td input\[type="checkbox"\]:not(:disabled)').not("input\[name='check\[1\]'\]").prop('checked', \$(obj).prop('checked'));

}

function checkAllCopy(obj)

{

\$('#tabel_detail_copy tr td input\[type="checkbox"\]:not(:disabled)').not("input\[name='check_copy\[1\]'\]").prop('checked', \$(obj).prop('checked'));

disabledButtonDeleteCopy();

}

\$("\[name^=check_copy\]").click(function() {

disabledButtonDeleteCopy();

})

function disabledButtonDeleteCopy(){

let cek = false;

\$("\[name^=check_copy\]").each(function(){

if(\$(this).is(':checked')){

console.log(\$(this).attr('name'))

cek = true;

}

})

let disabled = ""

if(cek && disabled != "disabled"){

\$("#button_delete_obat_copy").prop('disabled',false)

}else{

\$("#button_delete_obat_copy").prop('disabled',true)

}

}

\$("#button_delete_obats").click(function(){

var x = 1;

\$("#tabel_detail").children("tr").each(function(){

\$(this).has('input\[name="check\[\]"\]:checked').remove();

x++;

});

reArange();

});

\$("#button_add_obat_copy").click(function(){

var obat_id = \$('input\[data-for="obat_id_copy"\]').val();

var arrObat = \$('.js-select2').select2('val');

if(arrObat != null && arrObat.includes(obat_id)){

alert("Obat termasuk ke dalam daftar alergi pasien");

}else{

setTambahObatCopy(obat_id,'copy');

}

});

function setTambahObatCopy(obat_id,type='')

{

var obat_jumlah = \$('input\[data-for="obat_jumlah_copy"\]').val();

var signa = \$('input\[data-for="obat_signa_copy"\]').val();

var id = \$('input\[data-for="id_copy"\]').val();

var tr_id = \$('input\[data-for="tr_id_copy"\]').val();

var ruangan = \$('input\[name="ruangan_copy"\]').val();

var obat_nama = \$('input\[data-for="obat_nama_copy"\]').val();

var obat_keterangan = \$('input\[data-for="obat_keterangan_copy"\]').val() || "";

let namesResep = \[\];

\$('#tabel_detail tr').each(function(e){

let idTr = \$(this).attr('id');

idResep = idTr.split('\_');

let idObatResep = \$(this).children('td:nth-child(3)').text().toLowerCase().replace(/\\s/g, '');

if(idObatResep!="" && idObatResep){

namesResep.push(idObatResep);

}

});

if(namesResep.includes(obat_nama.toLowerCase().replace(/\\s/g, ''))){

alert(\`Obat sudah diinputkan di Resep\`);

return;

}

if(tr_id==''){

let namesResepCopy = \[\];

\$('#tabel_detail_copy tr').each(function(){

let idTr = \$(this).attr('id');

idResep = idTr.split('\_');

if(parseInt(idResep\[1\]) > 1){

let idObatResep = \$("input\[name='ResepDetailCopy\["+idResep\[1\]+"\]\[obat_nama_copy\]'\]").val();

if(idObatResep!="" && idObatResep){

namesResepCopy.push(idObatResep.toLowerCase().replace(/\\s/g, ''));

}

}

});

if(namesResepCopy.includes(obat_nama.toLowerCase().replace(/\\s/g, ''))){

alert(\`Tidak bisa input obat yang sama\`);

return;

}

}

if(obat_jumlah=='' || obat_jumlah <= 0){

alert('Jumlah obat tidak boleh kosong atau minus');

return false;

}

if(obat_jumlah.length > 4){

alert('Jumlah obat maksimal 4 digit');

return false;

}

if(obat_keterangan.length > 100){

alert('Jumlah obat maksimal 100 digit');

return false;

}

if(signa==''){

alert('Signa tidak boleh kosong');

return false;

}

var count = \$("#tabel_detail_copy").children("tr").length;

var x = 0;

x = count+1;

if(tr_id!=''){

x = tr_id;

}

if (x > 40) {

alert('Tidak bisa menambahkan obat lagi. Jumlah obat yang diperbolehkan hanya 40. Silakan tambah diresep baru!');

return false;

}

var obat_signa = \$('input\[data-for="obat_signa_copy"\]').val();

var obat_tipe = \$('input\[data-for="obat_tipe_copy"\]').val();

var obat_signa_val = \$('input\[data-for="obat_signa_copy"\]').val();

var obat_racikan = \$('select\[data-for="obat_racikan_copy"\]').find(":selected").text();

var obat_racikan_val = \$('select\[data-for="obat_racikan_copy"\]').find(":selected").val();

var aturan_pakai = \$('select\[data-for="aturan_pakai_copy"\]').find(":selected").text();

var aturan_pakai_val = \$('select\[data-for="aturan_pakai_copy"\]').find(":selected").val();

var table = "";

table += "&lt;tr id='tr_"+x+"' pjax-content-copy&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetailCopy\["+x+"\]\[obat_racikan_copy\]' type='text' class='hidden form-control input-sm' value='"+obat_racikan_val+"'&gt;";

table += (obat_racikan=="- PILIH -"?"":obat_racikan);

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetailCopy\["+x+"\]\[id_copy\]' type='text' class='hidden form-control input-sm' value='"+id+"'&gt;";

table += "&lt;input name='ResepDetailCopy\["+x+"\]\[obat_tipe\]' type='text' class='hidden form-control input-sm' value='"+obat_tipe+"'&gt;";

table += "&lt;input name='ResepDetailCopy\["+x+"\]\[obat_id_copy\]' type='text' class='hidden form-control input-sm' value='"+obat_id+"'&gt;";

table += "&lt;input name='ResepDetailCopy\["+x+"\]\[obat_nama_copy\]' type='text' class='hidden form-control input-sm' value='"+obat_nama+"'&gt;";

table += obat_nama;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetailCopy\["+x+"\]\[obat_jumlah_copy\]' type='text' class='hidden form-control input-sm' value='"+obat_jumlah+"'&gt;";

table += obat_jumlah;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetailCopy\["+x+"\]\[obat_signa_copy\]' type='text' class='hidden form-control input-sm' required value='"+obat_signa_val+"'&gt;";

table += obat_signa;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetailCopy\["+x+"\]\[aturan_pakai_copy\]' type='text' class='hidden form-control input-sm' value='"+aturan_pakai_val+"'&gt;";

table += (aturan_pakai=="- PILIH -"?"":aturan_pakai);

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetailCopy\["+x+"\]\[obat_keterangan_copy\]' type='text' class='hidden form-control input-sm' value='"+obat_keterangan+"'&gt;";

table += obat_keterangan;

table += "&lt;/td&gt;";

table += "&lt;td align='center'&gt;&lt;input type='checkbox' value='' name='check_copy\["+x+"\]' onclick=''&gt;&lt;/td&gt;";

table += "&lt;/tr&gt;";

if(tr_id == ''){

// var idTr = \$("#tabel_detail_copy > tr:contains("+obat_racikan+")").last().attr('id');

// console.log(idTr)

// var indexTable = \$('#'+idTr).index();

// console.log(indexTable)

// \$('#tabel_detail_copy > tr').eq(indexTable).after(table);

\$("#tabel_detail_copy").append(table);

}else{

\$('#tabel_detail_copy tr#tr_'+x).remove();

\$("#tabel_detail_copy").append(table);

}

var rowCount = \$('#tabel_detail_copy tr').length;

if(rowCount>1){

\$('input\[name="resep"\]').val("filled");

}else{

\$('input\[name="resep"\]').val("");

}

\$("\[name^=check_copy\]").click(function() {

disabledButtonDeleteCopy();

})

\$('tr\[pjax-content-copy\]').each(function(){

\$(this).on('click', 'td:last-child', function(e) {

e.stopPropagation();

});

\$(this).click(function(event){

alert('Silahkan klik/tap 2x pada baris data untuk merubah data.','info');

});

\$(this).dblclick(function(event){

event.preventDefault();

resetForm('copy');

addEditCopy(this);

\$('button\[data-notify=dismiss\]').click();

});

});

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/updateSigna>",

method: 'POST',

dataType: "json",

data: {

signa : obat_signa,

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

\$('form_create').removeClass('changed-input');

if(data.kondisi == 1){

alert(data.message, data.status);

}

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

\$('input\[data-for="obat_nama_copy"\]').focus();

resetForm('copy');

reArange('copy')

\$('input\[data-for="obat_signa_copy"\]').val("");

\$('input\[data-for="signa_nama_copy"\]').val("");

\$("#button_add_obat_copy").text('Tambah');

}

\$("#button_add_obat").click(function(){

var obat_id = \$('input\[data-for="obat_id"\]').val();

var arrObat = \$('.js-select2').select2('val');

if(arrObat != null){

if(arrObat.includes(obat_id)){

alert("Obat termasuk ke dalam daftar alergi pasien");

return false;

} else {

setTambahObat(obat_id);

}

}else{

setTambahObat(obat_id);

}

});

function setTambahObat(obat_id)

{

var obat_jumlah = \$('input\[data-for="obat_jumlah"\]').val();

var stok_obat = \$('input\[data-for="stok_obat"\]').val();

var signa = \$('input\[data-for="obat_signa"\]').val();

var id = \$('input\[data-for="id"\]').val();

var tr_id = \$('input\[data-for="tr_id"\]').val();

var ruangan = \$('input\[name="ruangan"\]').val();

var obat_nama = \$('input\[data-for="obat_nama"\]').val();

var stok_obat_realtime = "1" ;

if(cekObatSemua(obat_id) == false){

return false;

}

if(stok_obat_realtime == 1) {

if(parseFloat(stok_obat) < parseFloat(obat_jumlah)) {

alert('Stok Obat &lt;b&gt;'+obat_nama+'&lt;\\/b&gt; di Ruangan &lt;b&gt;'+ruangan+'&lt;\\/b&gt; tidak mencukupi! Silahkan pilih obat lain atau ruangan / apotek tujuan lain!');

return false;

}

}

if(tr_id == ''){

if(id == ''){

if(cekObat(obat_id) == false){

return false;

}

}

}

if(obat_id==''){

alert('Nama obat tidak boleh kosong');

return false;

}

if(obat_jumlah=='' || obat_jumlah <= 0){

alert('Jumlah obat tidak boleh kosong atau minus');

return false;

}

if(signa==''){

alert('Signa tidak boleh kosong');

return false;

}

var count = \$("#tabel_detail").children("tr").length;

var x = 0;

if (0 == '1') {

x = count+1;

}else {

if(count == 0){

x = 1;

}else if(tr_id != ''){

x = tr_id;

}else{

x = count+1;

}

}

if (x > 40) {

alert('Tidak bisa menambahkan obat lagi. Jumlah obat yang diperbolehkan hanya 40. Silakan tambah diresep baru!');

return false;

}

var obat_signa = \$('input\[data-for="obat_signa"\]').val();

var obat_signa_val = \$('input\[data-for="obat_signa"\]').val();

var obat_racikan = \$('select\[data-for="obat_racikan"\]').find(":selected").text();

var obat_racikan_val = \$('select\[data-for="obat_racikan"\]').find(":selected").val();

var aturan_pakai = \$('select\[data-for="aturan_pakai"\]').find(":selected").text();

var aturan_pakai_val = \$('select\[data-for="aturan_pakai"\]').find(":selected").val();

var obat_jumlah_permintaan_val = \$('input\[data-for="obat_jumlah_permintaan"\]').val();

var jenis_racikan_nama = \$('input\[data-for="jenis_racikan_nama"\]').val();

var jenis_racikan_id = \$('input\[data-for="jenis_racikan_id"\]').val();

var obat_keterangan = \$('input\[data-for="obat_keterangan"\]').val();

if (0 == '1') {

var harga = (\$('input\[data-for="harga"\]').val()) ? \$('input\[data-for="harga"\]').val() : 0;

var embalase = (\$('input\[data-for="embalase"\]').val()) ? \$('input\[data-for="embalase"\]').val() : 0;

var total = (parseFloat(obat_jumlah) \* parseFloat(harga)) + parseInt(embalase);

}

\$('input\[data-for="obat_jumlah_permintaan"\]').attr('disabled','disabled');

var table = "";

table += "&lt;tr id='tr_"+x+"' pjax-content&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+x+"\]\[obat_racikan\]' type='text' class='hidden form-control input-sm' value='"+obat_racikan_val+"'&gt;";

table += (obat_racikan=="- PILIH -"?"":obat_racikan);

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+x+"\]\[obat_jumlah_permintaan\]' type='text' class='hidden form-control input-sm' value='"+obat_jumlah_permintaan_val+"'&gt;";

table += obat_jumlah_permintaan_val;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+x+"\]\[jenis_racikan_id\]' type='text' class='hidden form-control input-sm' value='"+jenis_racikan_id+"'&gt;";

table += (jenis_racikan_nama ? jenis_racikan_nama : "");

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+x+"\]\[id\]' type='text' class='hidden form-control input-sm' value='"+id+"'&gt;";

table += "&lt;input name='ResepDetail\["+x+"\]\[obat_id\]' type='text' class='hidden form-control input-sm' value='"+obat_id+"'&gt;";

table += obat_nama;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+x+"\]\[obat_jumlah\]' type='text' class='hidden form-control input-sm' value='"+obat_jumlah+"'&gt;";

table += obat_jumlah;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+x+"\]\[obat_signa\]' type='text' class='hidden form-control input-sm' required value='"+obat_signa_val+"'&gt;";

table += obat_signa;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+x+"\]\[aturan_pakai\]' type='text' class='hidden form-control input-sm' value='"+aturan_pakai_val+"'&gt;";

table += (aturan_pakai=="- PILIH -"?"":aturan_pakai);

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+x+"\]\[obat_keterangan\]' type='text' class='hidden form-control input-sm' value='"+obat_keterangan+"'&gt;";

table += obat_keterangan;

table += "&lt;/td&gt;";

if (0 == '1') {

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+x+"\]\[harga\]' type='text' class='hidden form-control input-sm' value='"+harga+"'&gt;";

table += harga;

table += "&lt;/td&gt;";

var countRow = \$("#tabel_detail > tr:contains('"+obat_racikan+"')").length;

if (obat_racikan_val != '' && countRow < 2){

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+x+"\]\[embalase\]' type='text' class='hidden form-control input-sm' value='"+embalase+"'&gt;";

table += embalase;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='total\["+x+"\]' type='text' class='hidden form-control input-sm' value='"+adjustments(total)+"'&gt;";

table += "&lt;span id='total'&gt;"+adjustments(total)+"&lt;/span&gt;";

table += "&lt;/td&gt;";

}

if (obat_racikan_val == '') {

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+x+"\]\[embalase\]' type='text' class='hidden form-control input-sm' value='"+embalase+"'&gt;";

table += embalase;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='total\["+x+"\]' type='text' class='hidden form-control input-sm' value'"+adjustments(total)+"'&gt;";

table += "&lt;span id='total'&gt;"+adjustments(total)+"&lt;/span&gt;";

table += "&lt;/td&gt;";

}

}

table += "&lt;td align='center'&gt;&lt;input type='checkbox' value='' name='check\["+x+"\]' onclick=''&gt;&lt;/td&gt;";

table += "&lt;/tr&gt;";

if(tr_id == ''){

if (0 == '1' && obat_racikan !== '- PILIH -') {

var idTr = \$("#tabel_detail > tr:contains("+obat_racikan+")").last().attr('id');

var indexTable = \$('#'+idTr).index();

\$('#tabel_detail > tr').eq(indexTable).after(table);

setRacikClinic(obat_racikan);

}else {

\$("#tabel_detail").append(table);

}

}else{

if (0 == '1') {

var data_exist = getDataExisting(obat_jumlah, stok_obat, signa, id, tr_id, ruangan, obat_nama, obat_signa, obat_signa_val, obat_racikan, obat_racikan_val, aturan_pakai, aturan_pakai_val, obat_jumlah_permintaan_val, obat_keterangan, harga, embalase, obat_id);

editResepClinic(data_exist);

} else {

\$("#tr_"+x).replaceWith(table);

}

updateJumlahPermintaan(obat_racikan_val, obat_jumlah_permintaan_val);

}

var rowCount = \$('#tabel_detail tr').length;

if(rowCount>1){

\$('input\[name="resep"\]').val("filled");

}else{

\$('input\[name="resep"\]').val("");

}

\$('tr\[pjax-content\]').each(function(){

\$(this).on('click', 'td:last-child', function(e) {

e.stopPropagation();

});

\$(this).click(function(event){

alert('Silahkan klik/tap 2x pada baris data untuk merubah data.','info');

});

\$(this).dblclick(function(event){

event.preventDefault();

resetForm();

addEdit(this);

\$('button\[data-notify=dismiss\]').click();

});

});

\$('input\[data-for="obat_nama"\]').focus();

resetForm();

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/updateSigna>",

method: 'POST',

dataType: "json",

data: {

signa : obat_signa,

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

\$('form_create').removeClass('changed-input');

if(data.kondisi == 1){

alert(data.message, data.status);

}

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

reArange()

if (0 == '1') {

totalAll();

}

\$('input\[data-for="obat_signa"\]').val("");

\$('input\[data-for="signa_nama"\]').val("");

\$("#button_add_obat").text('Tambah');

}

function setRacikClinic(valRacik)

{

var countTd = \$("#tabel_detail > tr:contains('"+valRacik+"')").length;

var forRows = parseInt(countTd) - 1;

var total = 0;

var elmTotal;

var elmEmbalase;

\$.each(\$("#tabel_detail > tr:contains('"+valRacik+"')"),function(key, value){

var idTd = \$(value).attr('id');

var getNumId = idTd.substring(3);

if(key == 1){

\$('input\[name="ResepDetail\['+getNumId+'\]\[embalase\]"\]').parent().attr('rowspan', forRows);

\$('#'+idTd+' span#total').parent().attr('rowspan', forRows);

elmTotal = \$('#'+idTd+' span#total');

elmEmbalase = \$('input\[name="ResepDetail\['+getNumId+'\]\[embalase\]"\]').val();

}

if(key > 0) {

var qty = \$('input\[name="ResepDetail\['+getNumId+'\]\[obat_jumlah\]"\]').val();

var harga = \$('input\[name="ResepDetail\['+getNumId+'\]\[harga\]"\]').val();

total += (parseInt(qty)\*parseInt(harga));

}

});

total += parseInt(elmEmbalase);

\$(elmTotal).text(total);

}

function getDataExisting(obat_jumlah, stok_obat, signa, id, tr_id, ruangan, obat_nama, obat_signa, obat_signa_val, obat_racikan, obat_racikan_val, aturan_pakai, aturan_pakai_val, obat_jumlah_permintaan_val, obat_keterangan, harga, embalase, obat_id)

{

return {"obat_jumlah":obat_jumlah, "stok_obat":stok_obat, "signa":signa, "id":id, "tr_id":tr_id, "ruangan":ruangan, "obat_nama":obat_nama, "obat_signa":obat_signa, "obat_signa_val":obat_signa_val, "obat_racikan":obat_racikan, "obat_racikan_val":obat_racikan_val, "aturan_pakai": aturan_pakai, "aturan_pakai_val":aturan_pakai_val, "obat_jumlah_permintaan_val":obat_jumlah_permintaan_val, "obat_keterangan":obat_keterangan, "harga":harga, "embalase":embalase, "obat_id":obat_id};

}

function editResepClinic(data)

{

var getRacik = data.obat_racikan;

var masterTd = '';

var valEmbalase = 0;

\$.each(\$("#tabel_detail > tr:contains('"+getRacik+"')"),function(key, value){

if(key == 1){

var getTrId = \$(value).attr('id');

if(getTrId == "tr_"+data.tr_id){

valEmbalase = \$('input\[name="ResepDetail\['+getTrId.substring(3)+'\]\[embalase\]"\]').val();

masterTd = getTrId;

}

}

});

\$('#tr_'+data.tr_id).remove();

if (getRacik != "") {

setDestroyChecked(data.obat_racikan, data.tr_id, masterTd, data.embalase);

var table = "";

table += "&lt;tr id='tr_"+data.tr_id+"' pjax-content&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+data.tr_id+"\]\[obat_racikan\]' type='text' class='hidden form-control input-sm' value='"+data.obat_racikan_val+"'&gt;";

table += (data.obat_racikan=="- PILIH -"?"":data.obat_racikan);

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+data.tr_id+"\]\[obat_jumlah_permintaan\]' type='text' class='hidden form-control input-sm' value='"+data.obat_jumlah_permintaan_val+"'&gt;";

table += data.obat_jumlah_permintaan_val;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+data.tr_id+"\]\[id\]' type='text' class='hidden form-control input-sm' value='"+data.id+"'&gt;";

table += "&lt;input name='ResepDetail\["+data.tr_id+"\]\[obat_id\]' type='text' class='hidden form-control input-sm' value='"+data.obat_id+"'&gt;";

table += data.obat_nama;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+data.tr_id+"\]\[obat_jumlah\]' type='text' class='hidden form-control input-sm' value='"+data.obat_jumlah+"'&gt;";

table += data.obat_jumlah;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+data.tr_id+"\]\[obat_signa\]' type='text' class='hidden form-control input-sm' required value='"+data.obat_signa_val+"'&gt;";

table += data.obat_signa;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+data.tr_id+"\]\[aturan_pakai\]' type='text' class='hidden form-control input-sm' value='"+data.aturan_pakai_val+"'&gt;";

table += (data.aturan_pakai=="- PILIH -"?"":data.aturan_pakai);

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+data.tr_id+"\]\[obat_keterangan\]' type='text' class='hidden form-control input-sm' value='"+data.obat_keterangan+"'&gt;";

table += data.obat_keterangan;

table += "&lt;/td&gt;";

if (0 == '1') {

var total = (parseFloat(data.obat_jumlah) \* parseFloat(data.harga)) + parseInt(data.embalase);

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+data.tr_id+"\]\[harga\]' type='text' class='hidden form-control input-sm' value='"+data.harga+"'&gt;";

table += data.harga;

table += "&lt;/td&gt;";

var countRow = \$("#tabel_detail > tr:contains('"+data.obat_racikan+"')").length;

if (data.obat_racikan_val != '' && countRow < 2){

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+data.tr_id+"\]\[embalase\]' type='text' class='hidden form-control input-sm' value='"+data.embalase+"'&gt;";

table += data.embalase;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='total\["+data.tr_id+"\]' type='text' class='hidden form-control input-sm' value='"+total+"'&gt;";

table += "&lt;span id='total'&gt;"+total+"&lt;/span&gt;";

table += "&lt;/td&gt;";

}

if (data.obat_racikan_val == '') {

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+data.tr_id+"\]\[embalase\]' type='text' class='hidden form-control input-sm' value='"+data.embalase+"'&gt;";

table += data.embalase;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='total\["+data.tr_id+"\]' type='text' class='hidden form-control input-sm' value'"+total+"'&gt;";

table += "&lt;span id='total'&gt;"+total+"&lt;/span&gt;";

table += "&lt;/td&gt;";

}

}

table += "&lt;td align='center'&gt;&lt;input type='checkbox' value='' name='check\["+data.tr_id+"\]' onclick=''&gt;&lt;/td&gt;";

table += "&lt;/tr&gt;";

var idTr = \$("#tabel_detail > tr:contains("+data.obat_racikan+")").last().attr('id');

var indexTable = \$('#'+idTr).index();

\$('#tabel_detail > tr').eq(indexTable).after(table);

if (data.obat_racikan_val == '') {

var total = (parseFloat(data.obat_jumlah)\*parseFloat(data.harga))+parseFloat(data.embalase);

\$("input\[name='total\["+data.tr_id+"\]'\]").val(total);

\$("tr#tr_"+data.tr_id+" span#total").text(total);

} else {

setRacikClinic(data.obat_racikan);

}

}

}

\$("#button_reset").click(function(){

\$("#tabel_detail").empty();

});

\$("input\[name='cari_pelayanan'\]").autocomplete({

delay: 1000,

source: function( request, response ) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/create/63569>",

method: "GET",

dataType: "json",

data: {

autocomplete: 'pelayanan',

search: {'cari_pelayanan':request.term}

},

success: function(data) {

response(data);

},

error: function (xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

},

focus: function(event,ui){

\$(this).parent().removeClass('has-success').addClass('has-error');

return false;

},

select: function(event,ui){

\$(this).parent().removeClass('has-error').addClass('has-success');

\$('input\[name="Resep\[pelayanan_id\]"\]').val(ui.item.id);

\$('input\[name="pasien_id"\]').val(ui.item.pasien_id);

setDataPelayanan(ui.item);

\$('input\[name="ruangan_asal_id"\]').val(ui.item.ruangan_id);

addDefaultRuanganTujuan(ui.item.ruangan_id);

\$('#button_modal').removeAttr('disabled');

},

minLength: 1

});

\$("input\[name='dokter_nama'\]").autocomplete({

delay: 1000,

source: function( request, response ) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/create/63569>",

method: "GET",

dataType: "json",

data: {

autocomplete: 'dokter',

search: {'dokter_nama':request.term}

},

success: function(data) {

response(data);

},

error: function (xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

},

focus: function(event,ui){

\$(this).parent().removeClass('has-success').addClass('has-error');

return false;

},

select: function(event,ui){

\$(this).parent().removeClass('has-error').addClass('has-success');

\$('input\[name="Resep\[dokter_id\]"\]').val(ui.item.id);

},

minLength: 1

});

\$("input\[name='dokter_nama_bpjs'\]").autocomplete({

delay: 1000,

source: function( request, response ) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/create/63569>",

method: "GET",

dataType: "json",

data: {

autocomplete: 'dokter_bpjs',

search: {'dokter_nama_bpjs':request.term}

},

success: function(data) {

response(data);

},

error: function (xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

},

focus: function(event,ui){

\$(this).parent().removeClass('has-success').addClass('has-error');

return false;

},

select: function(event,ui){

\$(this).parent().removeClass('has-error').addClass('has-success');

\$('input\[name="Resep\[dokter_id\]"\]').val(ui.item.id);

},

minLength: 1

});

\$("input\[name='perawat_nama'\]").autocomplete({

delay: 1000,

source: function( request, response ) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/create/63569>",

method: "GET",

dataType: "json",

data: {

autocomplete: 'perawat',

search: {'perawat_nama':request.term}

},

success: function(data) {

response(data);

},

error: function (xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

},

focus: function(event,ui){

\$(this).parent().removeClass('has-success').addClass('has-error');

return false;

},

select: function(event,ui){

\$(this).parent().removeClass('has-error').addClass('has-success');

\$('input\[name="Resep\[perawat_id\]"\]').val(ui.item.id);

},

minLength: 1

});

let asuransiPasien = "0001";

function setAutocompleteObat(ruangan_id) {

\$("input\[name='obat_nama'\]").autocomplete({

delay: 1000,

source: function( request, response ) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/create/63569>",

method: "GET",

dataType: "json",

data: {

autocomplete: 'obat',

search: {

'obat_nama':request.term,

'ruangan_id':ruangan_id,

'asuransi_id' : asuransiPasien

}

},

success: function(data) {

response(data);

},

error: function (xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

},

focus: function(event,ui){

\$(this).parent().removeClass('has-success').addClass('has-error');

return false;

},

select: function(event,ui){

\$(this).parent().removeClass('has-error').addClass('has-success');

\$('input\[data-for="obat_id"\]').val(ui.item.id);

\$('input\[data-for="stok_obat"\]').val(ui.item.stok);

\$('input\[data-for="harga"\]').val(adjustments(ui.item.harga || 0));

},

});

\$("input\[name='obat_nama_copy'\]").autocomplete({

delay: 1000,

source: function( request, response ) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/create/63569>",

method: "GET",

dataType: "json",

data: {

autocomplete: 'obat_copy',

search: {

'obat_nama':request.term,

}

},

success: function(data) {

\$('input\[data-for="obat_id_copy"\]').val('');

\$('input\[data-for="obat_tipe_copy"\]').val('');

response(data);

},

error: function (xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

},

focus: function(event,ui){

\$(this).parent().removeClass('has-success').addClass('has-error');

return false;

},

select: function(event,ui){

console.log(ui,ui.item.id)

\$(this).parent().removeClass('has-error').addClass('has-success');

\$('input\[data-for="obat_id_copy"\]').val(ui.item.id);

\$('input\[data-for="obat_tipe_copy"\]').val(ui.item.table_obat);

},

});

}

\$("input\[name='ruangan'\]").autocomplete({

delay: 1000,

source: function( request, response ) {

var jmlTr = \$("#tabel_detail").children("tr").length;

if (jmlTr <= 1) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/create/63569>",

method: "GET",

dataType: "json",

data: {

autocomplete: 'ruangan',

search: {'ruangan':request.term}

},

success: function(data) {

response(data);

},

error: function (xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

} else {

alert('Hapus dahulu list resep obat dari ruangan tujuan sebelumnya!');

\$('input\[name="ruangan"\]').removeClass('ui-autocomplete-loading');

}

},

focus: function(event,ui){

\$(this).parent().removeClass('has-success').addClass('has-error');

return false;

},

select: function(event,ui){

\$(this).parent().removeClass('has-error').addClass('has-success');

\$('input\[name="Resep\[ruangantujuan_id\]"\]').val(ui.item.id);

setAutocompleteObat(ui.item.id);

},

minLength: 1

});

function addDefaultRuanganTujuan(ruangan_id){

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/create/63569>",

method: 'GET',

dataType: "json",

data: {

autocomplete: 'ruanganDefault',

search: { 'ruangan_default': ruangan_id },

},

success: function(data) {

\$('input\[name="Resep\[ruangantujuan_id\]"\]').val(data.id);

\$('input\[name="ruangan"\]').val(data.nama);

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

}

function destroyDetailCheckedCopy(obj)

{

var x = 1;

var tab;

var arrayData = \[\];

idModel = \[\];

\$("#tabel_detail_copy").children("tr").each(function(){

if(\$('input\[name="check_copy\['+x+'\]"\]').prop('checked')){

var value = \$('input\[name="ResepDetailCopy\['+x+'\]\[id_copy\]"\]').val();

if(value){

arrayData.push(value);

console.log(value)

}

}

x++;

});

var rowCount = \$('#tabel_detail_copy tr').length;

if(rowCount>1){

\$('input\[name="resep"\]').val("filled");

}else{

\$('input\[name="resep"\]').val("");

}

idModel ="63569";

if(arrayData.length > 0){

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resepluar/destroydetailchecked>",

method: 'POST',

dataType: "json",

data: {

ids: arrayData,

idData: idModel,

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h",

resep_id: idModel,

},

success: function(data) {

alert(data.message, data.status);

if (!checkReturnData(data.update_data)) {

\$(obj).removeClass('loading');

if(tab==2){

\$.pjax({

timeout: 2000,

type: 'GET',

url: \$("#button_resep").attr("href"),

container: '#content'

});

}

}

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$(obj).removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

}

});

}

\$("input\[name\*=check_copy\]:checked").parent().parent().remove();

disabledButtonDeleteCopy();

reArange('copy');

}

function destroyDetailChecked(obj)

{

var x = 1;

var tab;

var arrayData = \[\];

idModel = \[\];

\$("#tabel_detail").children("tr").each(function(){

if(\$('input\[name="check\['+x+'\]"\]').prop('checked')){

var value = \$('input\[name="ResepDetail\['+x+'\]\[id\]"\]').val();

if(value ==''){

if (0 == "1"){

var getRacik = \$('input\[name="ResepDetail\['+x+'\]\[obat_racikan\]"\]').val();

var masterTd = '';

var valEmbalase = 0;

\$.each(\$("#tabel_detail > tr:contains('"+getRacik+"')"),function(key, value){

if(key == 1){

var getTrId = \$(value).attr('id');

if(getTrId == "tr_"+x){

valEmbalase = \$('input\[name="ResepDetail\['+getTrId.substring(3)+'\]\[embalase\]"\]').val();

masterTd = getTrId;

}

}

});

}

\$(this).has('input\[name="check\['+x+'\]"\]:checked').remove();

if (0 == "1"){

if (getRacik != "") {

setDestroyChecked(getRacik, x, masterTd, valEmbalase);

}

}

}else{

arrayData.push(value);

}

}

x++;

});

var rowCount = \$('#tabel_detail tr').length;

if(rowCount>1){

\$('input\[name="resep"\]').val("filled");

}else{

\$('input\[name="resep"\]').val("");

}

if(arrayData.length > 0){

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/destroydetailchecked>",

method: 'POST',

dataType: "json",

data: {

ids: arrayData,

idData: idModel,

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h",

resep_id: idModel,

},

success: function(data) {

alert(data.message, data.status);

if (!checkReturnData(data.update_data)) {

if (0 == '1'){

var x = 1;

\$("#tabel_detail").children("tr").each(function(){

if(\$('input\[name="check\['+x+'\]"\]').prop('checked')){

var value = \$('input\[name="ResepDetail\['+x+'\]\[id\]"\]').val();

var getRacik = \$('input\[name="ResepDetail\['+x+'\]\[obat_racikan\]"\]').val();

var masterTd = '';

var valEmbalase = 0;

\$.each(\$("#tabel_detail > tr:contains('"+getRacik+"')"),function(key, value){

if(key == 1){

var getTrId = \$(value).attr('id');

if(getTrId == "tr_"+x){

valEmbalase = \$('input\[name="ResepDetail\['+getTrId.substring(3)+'\]\[embalase\]"\]').val();

masterTd = getTrId;

}

}

});

\$(this).has('input\[name="check\['+x+'\]"\]:checked').remove();

if (getRacik != "") {

setDestroyChecked(getRacik, x, masterTd, valEmbalase);

}

}

x++;

});

} else {

\$("input\[name\*=check\]:checked").parent().parent().remove();

}

\$(obj).removeClass('loading');

if(tab==2){

setTimeout(function() {

window.onbeforeunload = null;

\$('#form_create').removeClass('changed-input');

window.location.href = \$("#button_resep").attr("href");

}, 2000);

}

if (0 == '1') {

totalAll();

}

}

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

\$(obj).removeClass('loading');

console.log(xhr.status);

console.log(thrownError);

}

});

}

reArange();

if (0 == '1') {

totalAll();

}

}

function setDestroyChecked(valRacik, getNumId, masterTd="", valEmbalase)

{

var countTd = \$("#tabel_detail > tr:contains('"+valRacik+"')").length;

var total = 0;

var elmTotal;

var elmEmbalase;

if (countTd > 1) {

if (masterTd != ""){

\$.each(\$("#tabel_detail > tr:contains('"+valRacik+"')"),function(key, value){

var idTd = \$(value).attr('id');

var numId = idTd.substring(3);

if(key == 1){

var table = '';

table += "&lt;td&gt;";

table += "&lt;input name='ResepDetail\["+numId+"\]\[embalase\]' type='text' class='hidden form-control input-sm' value='"+valEmbalase+"'&gt;";

table += valEmbalase;

table += "&lt;/td&gt;";

table += "&lt;td&gt;";

table += "&lt;input name='total\["+numId+"\]' type='text' class='hidden form-control input-sm' value='"+total+"'&gt;";

table += "&lt;span id='total'&gt;"+total+"&lt;/span&gt;";

table += "&lt;/td&gt;";

\$("#"+idTd+" >td").eq(7).after(table);

var forRows = parseInt(countTd) - 1;

\$('input\[name="ResepDetail\['+numId+'\]\[embalase\]"\]').parent().attr('rowspan', forRows);

// \$('input\[name="total\['+numId+'\]"\]').parent().attr('rowspan', forRows);

// \$('td\[id="embalaseTd\['+numId+'\]"\]').attr('rowspan', forRows);

\$('#'+idTd+' span#total').parent().attr('rowspan', forRows);

elmTotal = \$('#'+idTd+' span#total');

// elmTotal = \$('input\[name="total\['+numId+'\]"\]');

elmEmbalase = \$('input\[name="ResepDetail\['+numId+'\]\[embalase\]"\]').val();

}

if(key > 0) {

var qty = \$('input\[name="ResepDetail\['+numId+'\]\[obat_jumlah\]"\]').val();

var harga = \$('input\[name="ResepDetail\['+numId+'\]\[harga\]"\]').val();

total += (parseInt(qty)\*parseInt(harga));

}

});

total += parseInt(elmEmbalase);

\$(elmTotal).text(total);

} else {

\$.each(\$("#tabel_detail > tr:contains('"+valRacik+"')"),function(key, value){

var idTd = \$(value).attr('id');

var getNumId = idTd.substring(3);

if(key == 1){

var rowspan = \$('#embalaseTd\['+getNumId+'\]').attr('rowspan');

var forRows = parseInt(countTd) - 1;

\$('input\[name="ResepDetail\['+getNumId+'\]\[embalase\]"\]').parent().attr('rowspan', forRows);

// \$('input\[name="total\['+getNumId+'\]"\]').parent().attr('rowspan', forRows);

// elmTotal = \$('input\[name="total\['+getNumId+'\]"\]');

\$('#'+idTd+' span#total').parent().attr('rowspan', forRows);

elmTotal = \$('#'+idTd+' span#total');

elmEmbalase = \$('input\[name="ResepDetail\['+getNumId+'\]\[embalase\]"\]').val();

}

if(key > 0) {

var qty = \$('input\[name="ResepDetail\['+getNumId+'\]\[obat_jumlah\]"\]').val();

var harga = \$('input\[name="ResepDetail\['+getNumId+'\]\[harga\]"\]').val();

total += (parseInt(qty)\*parseInt(harga));

}

});

total += parseInt(elmEmbalase);

\$(elmTotal).text(total);

}

}

}

function showRiwayat()

{

var id_pasien = \$('input\[name="pasien_id"\]').val();

if(id_pasien ==''){

return false;

}

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/pelayanan/showriwayat/"+id_pasien>,

method: 'GET',

dataType: "json",

data: {

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

\$('#modal .modal-title').html(data.title);

\$('#modal .modal-form').html(data.form);

openmodal('modal-lg');

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

}

\$("input\[name='signa_nama'\]").on('blur', function (e) {

e.preventDefault()

var obat_signa = \$(this).val()

if (obat_signa != '') {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/updateSigna>",

method: 'POST',

dataType: "json",

data: {

signa : obat_signa,

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

\$('input\[data-for="obat_signa"\]').val(obat_signa);

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

}

});

\$("input\[name='signa_nama'\]").autocomplete({

delay: 1000,

source: function( request, response ) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/create/63569>",

method: "GET",

dataType: "json",

data: {

autocomplete: 'signa',

search: {'signa_nama':request.term}

},

success: function(data) {

response(data);

},

error: function (xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

},

focus: function(event,ui){

\$(this).parent().removeClass('has-success').addClass('has-error');

return false;

},

select: function(event,ui){

\$(this).parent().removeClass('has-error').addClass('has-success');

\$('input\[data-for="obat_signa"\]').val(ui.item.value);

},

minLength: 1

});

\$("input\[name='jenis_racikan_nama'\]").autocomplete({

delay: 1000,

source: function( request, response ) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/create/63569>",

method: "GET",

dataType: "json",

data: {

autocomplete: 'jenis_racikan',

search: {'jenis_racikan_nama':request.term}

},

success: function(data) {

response(data);

},

error: function (xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

},

focus: function(event,ui){

\$(this).parent().removeClass('has-success').addClass('has-error');

return false;

},

select: function(event,ui){

\$(this).parent().removeClass('has-error').addClass('has-success');

\$('input\[data-for="jenis_racikan_id"\]').val(ui.item.id);

\$(this).val(ui.item.display);

},

minLength: 1

});

\$("input\[name='signa_nama_copy'\]").autocomplete({

delay: 1000,

source: function( request, response ) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/create/63569>",

method: "GET",

dataType: "json",

data: {

autocomplete: 'signa',

search: {'signa_nama':request.term}

},

success: function(data) {

response(data);

},

error: function (xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

},

focus: function(event,ui){

\$(this).parent().removeClass('has-success').addClass('has-error');

return false;

},

select: function(event,ui){

\$(this).parent().removeClass('has-error').addClass('has-success');

\$('input\[data-for="obat_signa_copy"\]').val(ui.item.value);

},

minLength: 1

});

\$("input\[name='signa_nama_copy'\]").on('blur', function (e) {

e.preventDefault()

var obat_signa = \$(this).val()

if (obat_signa != '') {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/updateSigna>",

method: 'POST',

dataType: "json",

data: {

signa : obat_signa,

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

\$('input\[data-for="obat_signa_copy"\]').val(obat_signa);

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

}

})

\$("input\[name='signa_nama_modal'\]").autocomplete({

delay: 1000,

source: function( request, response ) {

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/create/63569>",

method: "GET",

dataType: "json",

data: {

autocomplete: 'signa',

search: {'signa_nama':request.term}

},

success: function(data) {

response(data);

},

error: function (xhr, ajaxOptions, thrownError) {

console.log(xhr.status);

console.log(thrownError);

}

});

},

focus: function(event,ui){

\$(this).parent().removeClass('has-success').addClass('has-error');

return false;

},

select: function(event,ui){

\$(this).parent().removeClass('has-error').addClass('has-success');

\$('input\[data-for="obat_signa"\]').val(ui.item.value);

},

minLength: 1

});

function sentData(id, act, nama="", signa="", frekuensi="", pembelian="", pemberian="", perubahan="", keterangan="") {

let hasil_id = '';

\$.ajax({

url: "<https://kotakediri.epuskesmas.id/resep/storeRekonsiliasi>",

method: 'POST',

dataType: "json",

async: false,

data: {

id : id,

act : act,

pelayanan_id : 63569,

nama_obat : nama,

signa : signa,

frekuensi : frekuensi,

pembelian : pembelian,

pemberian : pemberian,

perubahan : perubahan,

keterangan : keterangan,

\_token: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"

},

success: function(data) {

hasil_id = data.id

},

error: function (xhr, ajaxOptions, thrownError) {

alert("Terjadi kesalahan sistem, silahkan hubungi team support kami!", "danger");

console.log(xhr.status);

console.log(thrownError);

}

});

return hasil_id;

}

&lt;/script&gt;

&lt;/section&gt;&lt;ul id="ui-id-1" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style="display: none;"&gt;&lt;/ul&gt;&lt;div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"&gt;&lt;/div&gt;&lt;ul id="ui-id-2" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style="display: none;"&gt;&lt;/ul&gt;&lt;div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"&gt;&lt;/div&gt;&lt;ul id="ui-id-3" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style="display: none;"&gt;&lt;/ul&gt;&lt;div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"&gt;&lt;/div&gt;&lt;ul id="ui-id-4" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style="display: none;"&gt;&lt;/ul&gt;&lt;div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"&gt;&lt;/div&gt;&lt;ul id="ui-id-5" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style="display: none;"&gt;&lt;/ul&gt;&lt;div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"&gt;&lt;/div&gt;&lt;ul id="ui-id-6" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style="display: none;"&gt;&lt;/ul&gt;&lt;div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"&gt;&lt;/div&gt;&lt;ul id="ui-id-7" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style="display: none;"&gt;&lt;/ul&gt;&lt;div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"&gt;&lt;/div&gt;&lt;ul id="ui-id-8" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style="display: none;"&gt;&lt;/ul&gt;&lt;div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"&gt;&lt;/div&gt;

&lt;span id="top-link-block" class="" style="display: none;"&gt;

&lt;a href="#top" onclick="\$('html,body').animate({scrollTop:0},'slow');return false;" data-toggle="tooltip" title="" data-original-title="Kembali Ke Atas!"&gt;

&lt;i id="icon_back" class="affix btn-lg btn-circle btn-info glyphicon glyphicon-chevron-up" style="margin-top:1121px;margin-left:2039px;z-index:1000;"&gt;&lt;/i&gt;

&lt;/a&gt;

&lt;/span&gt;

&lt;!-- Posisi belum baik &gt;> &lt;footer class="footer"&gt;&lt;br&gt;

&lt;div class="container-fluid"&gt;

&lt;p&gt;

Infokes Indonesia © 2026 - &lt;b&gt;ePuskesmas&lt;/b&gt; &lt;sup&gt;2.0&lt;/sup&gt;

&lt;/p&gt;

&lt;/div&gt;

&lt;/footer&gt;

\-->

&lt;!-- primary modal --&gt;

&lt;div id="modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal"&gt;

&lt;div class="modal-dialog" role="document"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-header"&gt;

&lt;button type="button" class="close" data-dismiss="modal" aria-label="Close"&gt;&lt;span aria-hidden="true"&gt;×&lt;/span&gt;&lt;/button&gt;

&lt;h5 class="modal-title"&gt;Memuat... &lt;!-- content replaced by AJAX --&gt;&lt;/h5&gt;

&lt;/div&gt;

&lt;div class="modal-form"&gt;

&lt;!-- content replaced by AJAX --&gt;

&lt;div class="modal-body loading-lg"&gt;&lt;/div&gt;

&lt;div class="modal-footer"&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div id="modal_notif" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal"&gt;

&lt;div class="modal-dialog" role="document"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-header"&gt;

&lt;button id="btn_close_suspend" type="button" class="close" data-dismiss="modal" aria-label="Close"&gt;&lt;span aria-hidden="true"&gt;×&lt;/span&gt;&lt;/button&gt;

&lt;h5 class="modal-title"&gt;Memuat... &lt;!-- content replaced by AJAX --&gt;&lt;/h5&gt;

&lt;/div&gt;

&lt;div class="modal-form"&gt;

&lt;!-- content replaced by AJAX --&gt;

&lt;br&gt;&lt;br&gt;

&lt;div class="modal-body loading-lg"&gt;&lt;/div&gt;

&lt;div class="modal-footer"&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div id="modal_notif_bridging" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal"&gt;

&lt;div class="modal-dialog" role="document"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-header btn-warning"&gt;

&lt;button id="btn_close_bridging" type="button" class="close" data-dismiss="modal" aria-label="Close"&gt;&lt;span aria-hidden="true"&gt;×&lt;/span&gt;&lt;/button&gt;

&lt;h5 class="modal-title"&gt;Memuat... &lt;!-- content replaced by AJAX --&gt;&lt;/h5&gt;

&lt;/div&gt;

&lt;div class="modal-form"&gt;

&lt;!-- content replaced by AJAX --&gt;

&lt;div class="modal-body loading-lg"&gt;&lt;/div&gt;

&lt;div class="modal-footer"&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div id="modal_notif_broadcast_notifikasi" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal"&gt;

&lt;div class="modal-dialog" role="document"&gt;

&lt;div class="modal-content" style="border-radius: 25px!important"&gt;

&lt;div class="modal-header btn-warning" style="border-radius: 25px 25px 0px 0px"&gt;

&lt;button type="button" class="close" data-dismiss="modal" aria-label="Close"&gt;&lt;span aria-hidden="true"&gt;×&lt;/span&gt;&lt;/button&gt;

&lt;h5&gt;&lt;i class="fa fa-info" style="font-size: 28px;color: black"&gt; &lt;/i&gt; &lt;span class="modal-title" style="font-size: 18px;color: black"&gt;Notifikasi&lt;/span&gt;&lt;/h5&gt;

&lt;/div&gt;

&lt;div class="modal-form"&gt;

&lt;div class="modal-body loading-lg"&gt;&lt;/div&gt;

&lt;div class="modal-footer"&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div id="modal_loading" class="modal custom-popup" tabindex="-1" role="dialog" aria-labelledby="modal" data-backdrop="static" style="display: none;"&gt;

&lt;div class="modal-dialog mdl-556" role="document" style="min-height: 100%;display:flex;align-items: center;justify-content: center;"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-form"&gt;

&lt;!-- content replaced by AJAX --&gt;

&lt;div class="modal-body modal-form text-center"&gt;

&lt;img src="<https://kotakediri.epuskesmas.id/images/spinner.svg>" alt=""&gt;

&lt;div class="body-text"&gt;&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;style type="text/css"&gt;

# modalBantuan {

position: fixed;

z-index: 99998;

height: 52px;

width: 52px;

background-color: #25d366;

text-align: center;

bottom: 5%;

left: 2%;

border-radius: 50%;

font-size: 40px;

}

# modalBantuan > i {

color: white;

padding-top: 5px;

}

&lt;/style&gt;

&lt;div id="modalBantuan" data-toggle="tooltip" title="" data-original-title="Bantuan"&gt;&lt;i class="fa fa-whatsapp"&gt;&lt;/i&gt;&lt;/div&gt;

&lt;script type="text/javascript"&gt;

function openBantuan(){

Swal.fire({

title: 'Apakah anda membutuhkan bantuan dari Team Customer Support?',

type: 'info',

showCancelButton: true,

confirmButtonColor: '#3085d6',

cancelButtonColor: '#d33',

confirmButtonText: 'Ya',

cancelButtonText: 'Tidak'

}).then((result) => {

if (result.value) {

let notif_wa = "<https://api.whatsapp.com/send/?phone=6281234422237&text=Hi,%20Saya%20pengguna%20ePuskesmas:%20dr.%20FERDI%20ANDRISKA%20SH.%20MKN.%20C.LM,%20Dokter%20Umum%20(ferdi-balowerti)%20-%2000001033231%20BALOWERTI%20-%20KOTA%20KEDIRI%20memerlukan%20bantuan%20anda!&app_absent=0>"

window.open(notif_wa);

}

});

}

\$("#modalBantuan").mousedown(function() {

isDragging = false;

}).mousemove(function() {

isDragging = true;

}).mouseup(function() {

var wasDragging = isDragging;

isDragging = false;

if (!wasDragging) {

openBantuan();

}

});

dragElement(document.getElementById("modalBantuan"));

function dragElement(elmnt) {

var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

if (document.getElementById(elmnt.id + "header")) {

document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;

} else {

elmnt.onmousedown = dragMouseDown;

}

function dragMouseDown(e) {

e = e || window.event;

e.preventDefault();

pos3 = e.clientX;

pos4 = e.clientY;

document.onmouseup = closeDragElement;

document.onmousemove = elementDrag;

}

function elementDrag(e) {

e = e || window.event;

e.preventDefault();

pos1 = pos3 - e.clientX;

pos2 = pos4 - e.clientY;

pos3 = e.clientX;

pos4 = e.clientY;

elmnt.style.top = (elmnt.offsetTop - pos2) + "px";

elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

}

function closeDragElement() {

document.onmouseup = null;

document.onmousemove = null;

}

}

var modalBantuanDrag = document.getElementById('modalBantuan');

modalBantuanDrag.addEventListener('touchmove', function(event) {

event.preventDefault();

if (event.targetTouches.length == 1) {

var touch = event.targetTouches\[0\];

modalBantuanDrag.style.left = touch.pageX + 'px';

modalBantuanDrag.style.top = touch.pageY + 'px';

}

}, {passive: true});

&lt;/script&gt;

&lt;script type="text/javascript"&gt;

&lt;/script&gt;

&lt;script type="text/javascript"&gt;

var date = new Date();

var tanggal = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 59);

var bulan = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0);

var tahun = new Date(date.getFullYear(), 1, 0, 0, 0);

var tanggal_min = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 00, 00, 00, 00);

var sistole_diastole_anamnesa = "";

var default_sistole = "";

var default_diastole = "";

&lt;/script&gt;

&lt;!-- Custom JS --&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/scrollspy.min.js>" type="text/javascript"&gt;&lt;/script&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/custom.min.js?v=2.4.0"&gt;&lt;/script>&gt;

&lt;!-- App Layout JS --&gt;

&lt;script type="text/javascript"&gt;

// Configure AppLayoutConfig for app-layout.js

window.AppLayoutConfig = {

csrfToken: "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h",

hasNewMenu: false,

isKioskEnabled: false,

isInkoppolOnly: false,

conversationId: typeof conversation_id !== 'undefined' ? conversation_id : '',

kioskConfigs: {

pendaftaran: "1",

panggilan: "1",

monitor: "1"

},

showBridgingNotif: true,

message_skrining: 'null',

text_message: 'null',

text_status: 'null',

routes: {

changeSessionMenu: "<https://kotakediri.epuskesmas.id/home/changesessionmenu>",

sinkronPendaftaranBpjs: "<https://kotakediri.epuskesmas.id/pendaftaran/sinkronPendaftaranBpjs>"

},

urls: {

showUpdateLog: "<https://kotakediri.epuskesmas.id/updatelog/showupdatelog>",

showNotif: "<https://kotakediri.epuskesmas.id/mpuskesmas/shownotif>",

showNotifBridging: "<https://kotakediri.epuskesmas.id/home/shownotifbridging>",

gagalBridgingCount: "<https://kotakediri.epuskesmas.id/home/gagalbridgingcount>",

showRiwayatPelayanan: "<https://kotakediri.epuskesmas.id/pelayanan/showriwayatpelayanan>",

showRiwayatKunjunganBpjs: "<https://kotakediri.epuskesmas.id/pelayanan/showriwayatkunjunganbpjs>",

getRiwayatKunjunganBpjs: "<https://kotakediri.epuskesmas.id/pelayanan/getriwayatkunjunganbpjs>",

setSessionWebSocket: "<https://kotakediri.epuskesmas.id/home/setsessionwebsocket>",

skriningBpjs: "<https://webskrining.bpjs-kesehatan.go.id/skrining>"

},

messages: {

prosesGagal: "Terjadi kesalahan sistem, silahkan hubungi team support kami!",

belumSkriningBpjs: "Peserta belum mengisi skrining riwayat kesehatan"

},

webSocket: {

enabled: false,

configNotif: false,

connection: 'wss://:',

session: "started",

puskesmasId: "00001033231_home",

maxChar: 20

}

};

&lt;/script&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/app-layout.min.js?v=1.0"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/pagination.min.js?v=1.1"&gt;&lt;/script>&gt;

&lt;script&gt;

\$(\`#checkEnvConfig\`).html('&lt;center&gt;Dashboard antrian realtime belum di setting&lt;/center&gt;');

\$(\`#checkEnvConfigRanap\`).html('&lt;center&gt;Dashboard rawat inap realtime belum di setting&lt;/center&gt;');

&lt;/script&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/vue.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/axios.min.js"&gt;&lt;/script>&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/axios.min.map>" type="application/json"&gt;&lt;/script&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/js/lodash.min.js"&gt;&lt;/script>&gt;

&lt;script type="text/x-template" id="modal-add-file"&gt;

&lt;div class="modal fade" role="dialog"&gt;

&lt;div class="modal-dialog modal-dialog-centered modal-lg"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-header"&gt;

&lt;button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="clearField"&gt;×&lt;/button&gt;

&lt;h4 class="modal-title pull-left"&gt;Tambah Foto Baru&lt;/h4&gt;

&lt;/div&gt;

&lt;div class="modal-body"&gt;

&lt;div class="row"&gt;

&lt;div class="main-form-container"&gt;

&lt;form class="form-horizontal" role="form"&gt;

&lt;div class="form-wrapper"&gt;

&lt;div class="alert alert-danger" role="alert" v-if="error.status"&gt;

&lt;i class="fa fa-exclamation-circle" aria-hidden="true"&gt;&lt;/i&gt; &lt;font style="color:black;"&gt;\${error.message}&lt;/font&gt;

&lt;/div&gt;

&lt;div class="form-group" style="margin-bottom: 0px;" v-if="isTakeFile"&gt;

&lt;label class="col-sm-3 control-label"&gt;Foto/Dokumen &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;img class="img-fluid img-thumbnail pull-left" :src="url" width="45%" v-if="url"&gt;

&lt;template v-else-if="pdf" class="pull-left"&gt; \${pdf}&lt;/template&gt;

&lt;div class="fileUpload btn btn-info btn-block bordered" v-else&gt;

&lt;span&gt;&lt;i class="fa fa-plus" aria-hidden="true"&gt;&lt;/i&gt; Unggah / ambil foto&lt;/span&gt;

&lt;input type="file" ref="fileUpload" class="upload" Accept="image/jpg,image/jpeg,image/png,application/pdf" @change="onFileChange"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group" v-if="isTakeFile"&gt;

&lt;label class="col-sm-3 control-label"&gt; &lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;span id="helpBlock" class="help-block pull-left"&gt;Format jpg, jpeg, png, & pdf. Ukuran file maksimal 2 MB.&lt;/span&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group" style="margin-bottom: 0px;" v-if="isTakePhoto"&gt;

&lt;label class="col-sm-3 control-label"&gt;Buka Kamera &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;div class="web-camera-container"&gt;

&lt;div class="camera-button"&gt;

&lt;button type="button" class="btn bordered" :class="{ 'btn-success' : !isCameraOpen, 'btn-danger' : isCameraOpen}" @click="toggleCamera"&gt;

&lt;span v-if="!isCameraOpen"&gt;Buka Kamera&lt;/span&gt;

&lt;span v-else&gt;Tutup Kamera&lt;/span&gt;

&lt;/button&gt;

&lt;/div&gt;

&lt;div v-show="isCameraOpen && isLoading" class="camera-loading"&gt;

&lt;ul class="loader-circle"&gt;

&lt;li&gt;&lt;/li&gt;

&lt;li&gt;&lt;/li&gt;

&lt;li&gt;&lt;/li&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash' : isShotPhoto }"&gt;

&lt;div class="camera-shutter" :class="{'flash' : isShotPhoto}"&gt;&lt;/div&gt;

&lt;video v-show="!isPhotoTaken" ref="camera" :width="450" :height="337.5" autoplay&gt;&lt;/video&gt;

&lt;canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"&gt;&lt;/canvas&gt;

&lt;/div&gt;

&lt;div v-if="isCameraOpen && !isLoading" class="camera-shoot"&gt;

&lt;button type="button" class="button" @click="takePhoto"&gt;

&lt;i class="fa fa-camera" aria-hidden="true"&gt;&lt;/i&gt;

&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label"&gt;Judul &lt;span style="color:red;"&gt;\*&lt;/span&gt;&lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;input type="text" class="form-control input-sm" placeholder="Judul foto/dokumen" maxlength="32" v-model="form.title"&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;label class="col-sm-3 control-label"&gt;Deskripsi&lt;/label&gt;

&lt;div class="col-sm-9"&gt;

&lt;textarea rows="5" class="form-control" v-model="form.description" placeholder="Deskripsi foto/dokumen"&gt;&lt;/textarea&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/form&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;button type="button" class="btn btn-warning" :class="{'loading': isLoading}" @click="clearField()"&gt;Reset&lt;/button&gt;

&lt;button type="button" class="btn btn-primary" :class="{'loading': isLoading}" @click="submitFile"&gt;Simpan Foto&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/script&gt;

&lt;script&gt;

Vue.component('modal-add-file', {

delimiters: \['\${', '}'\],

template: '#modal-add-file',

props: \['pelayanan'\],

data() {

return {

url: null,

pdf: null,

error: {

status: false,

message: null

},

form: {},

isTakeFile: true,

isTakePhoto: true,

isCameraOpen: false,

isPhotoTaken: false,

isShotPhoto: false,

isLoading: false,

link: '#'

}

},

created() {

this.clearField()

},

methods: {

clearField() {

this.error.status = false

this.error.message = null

this.url = null

this.pdf = null

this.form = {}

this.isTakeFile = true

this.isTakePhoto = true

if (this.isCameraOpen) {

this.isCameraOpen = false

this.isPhotoTaken = false

this.isShotPhoto = false

this.stopCameraStream()

}

},

onFileChange(e) {

this.error.status = false

this.error.message = null

const mimes = \['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'\]

let type = ''

let name = ''

if (e.target.files.length > 0) {

for (let i = 0; i <= e.target.files.length - 1; i++) {

const fsize = e.target.files.item(i).size

const file = Math.round((fsize / 1024))

type = e.target.files.item(i).type

name = e.target.files.item(i).name

if (file > 2048) {

this.error.status = true

this.error.message = 'Ukuran file tidak boleh lebih dari 2 MB'

}

if (!mimes.includes(type)) {

this.error.status = true

this.error.message = 'File yang diijinkan adalah jpeg, jpg, png, pdf'

}

}

}

if (this.error.status == true) {

this.\$refs.fileUpload.value = null

return false

}

this.form.file = e.target.files\[0\]

if (type == 'application/pdf') {

this.pdf = name

} else {

this.url = URL.createObjectURL(this.form.file)

}

this.isTakePhoto = false

},

submitFile() {

this.isLoading = true

this.error.status = false

if (!this.form.file) {

this.error.status = true

this.error.message = 'File harus diisi'

} else if (!this.form.title) {

this.error.status = true

this.error.message = 'Judul foto harus diisi'

} else if (!this.pelayanan) {

this.error.status = true

this.error.message = 'Pelayanan ID harus diisi'

}

if (this.error.status == true) {

this.isLoading = false

return false

}

let formData = new FormData()

formData.append('file', this.form.file)

formData.append('pelayanan_id', this.pelayanan)

formData.append('title', this.form.title)

formData.append('description', this.form.description ?? '')

axios.post("<https://kotakediri.epuskesmas.id/attachment/store>", formData, {

headers: {

'X-CSRF-Token': "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h",

'Content-Type': 'multipart/form-data'

},

})

.then((response) => {

let message = ''

let status = 'success'

if (response.data?.data?.id || response.data?.attachment?.id) {

message = 'Upload file berhasil.'

}

alert(message, status)

this.clearField()

this.\$emit('imagehasadded', {status: 'close'})

})

.catch((err) => {

let message = ''

let status = 'danger'

if (err.response?.data?.errorCode) {

message = err.response.data.message

status = 'danger'

}

else if (err.response?.data?.meta?.message) {

message = err.response.data.meta.message

if (err.response.data.meta.status) {

status = err.response.data.meta.status

}

}

alert(message, status)

})

.finally(() => {this.isLoading = false})

},

toggleCamera() {

if (this.isCameraOpen) {

this.isTakeFile = true

this.isCameraOpen = false

this.isPhotoTaken = false

this.isShotPhoto = false

this.stopCameraStream()

} else {

this.isTakeFile = false

this.isCameraOpen = true

this.createCameraElement()

}

},

createCameraElement() {

this.isLoading = true

const constraints = (window.constraints = {

audio: false,

video: true

})

navigator.mediaDevices.getUserMedia(constraints).then(stream => {

this.isLoading = false

this.\$refs.camera.srcObject = stream

}).catch(error => {

this.isLoading = false

alert("May the browser didn't support or there is some errors.")

})

},

stopCameraStream() {

let tracks = this.\$refs.camera.srcObject.getTracks()

tracks.forEach(track => {

track.stop()

})

},

takePhoto() {

if (!this.isPhotoTaken) {

this.isShotPhoto = true

const FLASH_TIMEOUT = 50

setTimeout(() => {

this.isShotPhoto = false

}, FLASH_TIMEOUT)

}

this.isPhotoTaken = !this.isPhotoTaken

const context = this.\$refs.canvas.getContext('2d')

context.drawImage(this.\$refs.camera, 0, 0, 450, 337.5)

const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")

fetch(canvas)

.then(response => response.blob())

.then((res) => {

this.form.file = res

this.url = URL.createObjectURL(res)

})

}

}

})

&lt;/script&gt;

&lt;script type="text/x-template" id="modal-upload-file"&gt;

&lt;div class="modal fade" role="dialog"&gt;

&lt;div class="modal-dialog modal-dialog-centered modal-lg"&gt;

&lt;div class="modal-content"&gt;

&lt;div class="modal-header"&gt;

&lt;button type="button" class="close" data-dismiss="modal" aria-label="Close"&gt;×&lt;/button&gt;

&lt;h4 class="modal-title pull-left"&gt;Gallery Foto&lt;/h4&gt;

&lt;/div&gt;

&lt;div class="modal-body"&gt;

&lt;div class="row"&gt;

&lt;div class="main-form-container"&gt;

&lt;div class="col-md-8"&gt;

&lt;div class="form-group"&gt;

&lt;div class="panel"&gt;

&lt;div class="panel-body"&gt;

&lt;template v-if="imageSelected.mime != 'application/pdf' && imageSelected.file_path"&gt;

&lt;img :src="'data:image/jpg/png/jpeg;base64,' + imageSelected.file_path" class="img-box" alt=""/&gt;

&lt;/template&gt;

&lt;template v-else-if="imageSelected.mime == 'application/pdf'"&gt;

&lt;img class="img-fluid img-thumbnail thumbnail" src="<https://kotakediri.epuskesmas.id/images/pdf.png>" alt=""&gt;

&lt;/template&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="form-group"&gt;

&lt;div class="panel"&gt;

&lt;div class="panel-body"&gt;

&lt;ul class="images"&gt;

&lt;li v-for="(image, index) in images"&gt;

&lt;a href="javascript:;" v-if="image.id && image.mime.includes('image')"&gt;

&lt;img :src="'data:image/jpg/png/jpeg;base64,' + image.file_path" width="100" height="100" @click="showImage(image.id)"/&gt;

&lt;/a&gt;

&lt;a href="javascript:;" v-else-if="image.id && image.mime.includes('application')"&gt;

&lt;img src="<https://kotakediri.epuskesmas.id/images/pdf.png>" width="100" height="100" @click="showImage(image.id)"&gt;

&lt;/a&gt;

&lt;/li&gt;

&lt;/ul&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="col-md-4"&gt;

&lt;div class="form-group"&gt;

&lt;div class="panel"&gt;

&lt;div class="panel-body panel-fixed"&gt;

&lt;div class="border-box"&gt;

&lt;p class="left"&gt;&lt;strong&gt;Tanggal Diambil&lt;/strong&gt;&lt;br&gt;\${imageSelected.created_at | dateLong}&lt;/p&gt;

&lt;hr/&gt;

&lt;p class="left"&gt;&lt;strong&gt;Judul&lt;/strong&gt;&lt;br&gt;&lt;i class="fa fa-file" aria-hidden="true"&gt;&lt;/i&gt; \${imageSelected.title}&lt;/p&gt;

&lt;hr/&gt;

&lt;p class="left"&gt;&lt;strong&gt;Deskripsi&lt;/strong&gt;&lt;br&gt;\${imageSelected.description}&lt;/p&gt;

&lt;br&gt;

&lt;a href="javascript:;" class="center" :class="{'loading': isLoading}" style="color: #D3555C" @click="destroyFile(imageSelected.id)"&gt;

&lt;i class="fa fa-trash" aria-hidden="true"&gt;&lt;/i&gt; Hapus Foto

&lt;/a&gt;

&lt;a href="javascript:;" class="left" :class="{'loading': isLoading}" style="color: #1f91f3" @click="downloadFile(imageSelected.id)" v-if="imageSelected.mime == 'application/pdf'"&gt;

&lt;i class="fa fa-download" aria-hidden="true"&gt;&lt;/i&gt; Unduh File

&lt;/a&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;div class="modal-footer"&gt;

&lt;button type="button" class="btn btn-primary" @click="addNewPhoto"&gt;Tambah Foto Baru&lt;/button&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/div&gt;

&lt;/script&gt;

&lt;script&gt;

Vue.component('modal-upload-file', {

delimiters: \['\${', '}'\],

template: '#modal-upload-file',

data() {

return {

form: {},

imageSelected: {},

images: \[\],

isLoading: false,

}

},

created() {

busGallery.\$on('dataImages', (image, images) => {

this.imageSelected = image

this.images = images

})

},

filters: {

dateLong: function (date) {

return new Date(date).toLocaleDateString('id-ID', {

year: 'numeric',

month: 'long',

day: 'numeric',

})

},

decrypt: function (data) {

// console.log('data1')

// console.log(data)

// if (data) {

// return atob(data)

// }

}

},

methods: {

addNewPhoto() {

this.\$emit('imagehasdeleted', {action: 'addPhoto' })

},

uploadFile() {

const file = this.\$refs.fileInput.files\[0\]

},

showImage(id) {

this.imageSelected = this.images.find(image => image.id == id)

},

destroyFile(id) {

Swal.fire({

type: 'warning',

customClass: 'swal-wide-gallery',

showCancelButton: true,

cancelButtonColor: '#d33',

confirmButtonColor: '#3085d6',

confirmButtonText: 'Ya',

cancelButtonText: 'Batal',

html: \`&lt;br&gt;&lt;span style='font-size:15px;'&gt;apakah anda yakin akan menghapus file ini?&lt;/span&gt;\`,

}).then((result) => {

if(result.value){

this.isLoading = true

let url = '<https://kotakediri.epuskesmas.id/attachment/:attachment/destroy>'

url = url.replace(':attachment', id)

axios.post(url, {}, {

headers: {'X-CSRF-Token': "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"},

})

.then(response => {

let message = ''

let action = 'success'

if (response.data.message) {

message = response.data.message

}

if (response.data.status) {

status = response.data.status

}

alert(message, status)

})

.catch((err) => {

let message = ''

let status = 'danger'

if (err.response.data.meta.message) {

message = err.response.data.meta.message

}

if (err.response.data.meta.status) {

status = err.response.data.meta.status

}

alert(message, status)

})

.finally(() => {

this.isLoading = false

this.\$emit('imagehasdeleted', {status: 'close'}

)})

}

})

},

downloadFile(id) {

this.isLoading = true

let url = '<https://kotakediri.epuskesmas.id/attachment/:attachment/download>'

url = url.replace(':attachment', id)

axios.post(url, {}, {

responseType: 'blob',

})

.then(response => {

let link = document.createElement('a')

link.href = window.URL.createObjectURL(new Blob(\[response.data\], { type: 'application/pdf' }))

link.download = response.headers\['content-disposition'\].split('filename=')\[1\].replace(/\['"\]/g, '')

link.click()

})

.catch((err) => {

let message = 'Unduh file gagal '+err

let status = 'danger'

if (err.response?.status == '401') {

status = 'danger'

message = 'Anda tidak berhak mengakses aksi ini'

}

alert(message, status)

})

.finally(() => {this.isLoading = false})

}

}

})

&lt;/script&gt;

&lt;script&gt;

window.\$ = jQuery

window.\$jQuery = jQuery

axios.defaults.headers = {

'Content-Type': 'application/json',

'Accept': 'application/json',

'X-Requested-With': 'XMLHttpRequest'

}

const busGallery = new Vue()

const gallery = new Vue({

delimiters: \['\${', '}'\],

data() {

return {

images: \[\],

pelayanan: 63569,

}

},

created() {

this.getImages()

},

filters: {

decrypt: function (data) {

// console.log('data')

// console.log(data)

// return atob(data)

}

},

methods: {

async getImages(fromAddPage = false) {

await axios.post("<https://kotakediri.epuskesmas.id/attachment/index>", {

pelayanan_id: this.pelayanan,

}, {

headers: {'X-CSRF-Token': "Q30Zy8h0sxZFO9OuXwHtHDiJut4QLmif6KV1WA8h"},

})

.then(response => {

this.images = response.data

this.images.push({

id: ''

})

if (fromAddPage) {

this.showGallery(this.images\[0\], this.images)

}

})

.catch((err) => {console.error(err)})

.finally(() => {})

},

addFileForm() {

let element = this.\$refs.modal_add_foto.\$el

\$(element).modal({backdrop: 'static', keyboard: false})

},

showGallery(image, images) {

busGallery.\$emit('dataImages', image, images)

let element = this.\$refs.modal_upload_foto.\$el

\$(element).modal({backdrop: 'static', keyboard: false})

},

eventImageAdded(e) {

let element = this.\$refs.modal_add_foto.\$el

\$(element).modal('hide')

this.getImages(true)

},

eventImageDeleted(e) {

let element = this.\$refs.modal_upload_foto.\$el

\$(element).modal('hide')

if (e.action == 'addPhoto') {

this.addFileForm()

} else {

this.getImages()

}

},

}

})

\$(document).ready(function(){

gallery.\$mount('#galleryApp')

})

\$(document).on('ready pjax:success', function(){

setTimeout(function() {

window.location.reload()

}, 1000)

})

&lt;/script&gt;

&lt;script src="<https://kotakediri.epuskesmas.id/lib/input-mask/jquery-input-mask.min.js"&gt;&lt;/script>&gt;

&lt;ul id="ui-id-9" tabindex="0" class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style="display: none;"&gt;&lt;/ul&gt;&lt;div role="status" aria-live="assertive" aria-relevant="additions" class="ui-helper-hidden-accessible"&gt;&lt;/div&gt;&lt;div id="shadow-root-simple_sticky_notes_content_script_root" style="position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 2147483646; pointer-events: none; user-select: none;"&gt;&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;