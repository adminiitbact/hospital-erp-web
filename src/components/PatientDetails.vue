<template>
  <div class="w-row">
    <form v-on:submit.prevent="submitChanges">
      <div class="w-row">
        <div v-for="(patientField, index) in patientForm" class="w-col w-col-6" :key="index">
          <div class="div-block-74">
          <label for="First-Name" class="field-label patient">{{ patientField[0] }}:</label>
          <div class="new-db-form-div">
            <template v-if="patientField[2] == 'text' || patientField[2] == 'number'">
                <input
                  :type="patientField[2]"
                  class="patient-db-field w-input"
                  v-model="patientField[3]"
                  required
                  min="0"
                  maxlength="256"
                />
              </template>
              <template v-else-if="patientField[2] == 'option'">
                <select class="patient-db-field w-select" v-model="patientField[4]">
                  <option
                    v-for="(val, index) in patientField[3]"
                    :value="val"
                    :key="index"
                  >{{ val }}</option>
                </select>
              </template>
          </div>
          </div>
        </div>
      </div>
      <div class="w-row" style="margin-top: 20px;">
        <div class="form-fail" v-show="error != ''">
          <div>
            <strong>{{ error }}</strong>
          </div>
        </div>
        <div class="w-col w-col-6">
          <input
            type="button"
            class="signup-button status-form clear-form w-button"
            value="GO BACK"
            v-on:click="$emit('edit-done', 0);"
          />
        </div>
        <div class="w-col w-col-6">
          <input
            type="submit"
            class="signup-button status-form profile-pahe w-button"
            value="Save changes"
          />
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import Utils from '../utils/utils';
@Component
export default class PatientDetails extends Vue {
  locality = ['Akurdi',
    'Alandi',
    'Ambegaon',
    'Ambi',
    'Ambil Odha',
    'Anand Nagar',
    'Aundh',
    'Balaji Nagar',
    'Balewadi',
    'Baner',
    'Baramati',
    'Bavdhan Budruk',
    'Bavdhan Khurd',
    'Bhandarkar Road',
    'Bhawani Peth',
    'Bhor',
    'Bhosari',
    'Bhugaon',
    'Bhukum',
    'Bibvewadi',
    'Bijali Nagar',
    'Bopkhel',
    'Bopodi',
    'Camp Pune',
    'Chakan',
    'Chandan Nagar',
    'Chandoli',
    'Charholi Budruk',
    'Chikhali',
    'Chimbali',
    'Chinchwad',
    'Chinchwad Station',
    'Dapodi',
    'Deccan Gymkhana',
    'Dehu Road',
    'Dhankawadi',
    'Dhanori',
    'Dhayari',
    'Dighi',
    'Dudulgaon',
    'Duttawadi',
    'Erandwane',
    'Fursungi',
    'Ghorpadi',
    'Guruwar Peth',
    'Hadapsar',
    'Hingne Khurd',
    'Hinjawadi',
    'Kalas',
    'Kalewadi',
    'Kalyani Nagar',
    'Karve Nagar',
    'Kasarwadi',
    'Katraj',
    'Khadki',
    'Kharadi',
    'Kondhwa',
    'Koregaon Park',
    'Kothrud',
    'Lavale',
    'Maan',
    'Mangalwar Peth',
    'Manjri',
    'Markal',
    'Mohammed Wadi',
    'Moshi',
    'Mundhwa',
    'Nanded',
    'Nehrunagar',
    'New Sangvi',
    'Nigdi',
    'Panmala',
    'Parandwadi',
    'Parvati',
    'Pashan',
    'Paud Road',
    'Phugewadi',
    'Pimple Gurav',
    'Pimple Nilakh',
    'Pimple Saudagar',
    'Pimpri',
    'Pimpri Camp',
    'Pirangut',
    'Rahatani',
    'Rasta Peth',
    'Ravet',
    'Sadashiv Peth',
    'Sangvi',
    'Shivajinagar',
    'Shivane',
    'Shukrawar Peth',
    'Somatne',
    'Sus',
    'Swargate',
    'Talawade',
    'Talegaon',
    'Tathawade',
    'Thergaon',
    'Undri',
    'Urse',
    'Vadgaon Budruk',
    'Vadgaon Khurd',
    'Vadgaon Maval',
    'Varale',
    'Vishrantwadi',
    'Vitthalwadi',
    'Wadgaon Sheri',
    'Wagholi',
    'Wakad',
    'Wanowrie',
    'Warje',
    'Yerwada']

  patientForm = [
    ['First Name', 'first_name', 'text'],
    ['Last Name', 'last_name', 'text'],
    ['Age', 'age', 'number'],
    ['Gender', 'gender', 'option', ['MALE', 'FEMALE', 'OTHERS']],
    ['Address', 'address', 'text'],
    ['Area (Locality)', 'locality', 'option', this.locality],
    ['District', 'district', 'text'],
    ['State', 'state', 'text'],
    ['Occupation', 'occupation', 'text'],
    ['Contact', 'contact_number', 'text'],
    ['District Case Number', 'district_case_id', 'text'],
    ['Hospital Patient ID', 'hospital_patient_id', 'text'],
    ['GOI COVID ID', 'goi_covid_id', 'text'],
    ['COVID Uniue ID', 'covid_uid', 'text'],
  ];

  error = '';

  submitChanges() {
    const data = Utils.getFormValues(this.patientForm);
    console.log(data);
  }
}
</script>
