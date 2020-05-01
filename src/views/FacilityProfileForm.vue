<template>
  <div class="columns-4 w-row">
    <div class="w-col w-col-2">
      <sidelogo></sidelogo>
      <sidebar></sidebar>
    </div>
    <div class="column w-col w-col-10">
      <div class="form-div">
        <div class="section-2">
          <div>
            <div class="columns-2 w-row">
              <div class="w-col w-col-4">
                <div class="heading">Profile form</div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-3">
          <form
            id="profile-form"
            name="profile-form"
            data-name="Profile Form"
            class="signup-form-column"
            v-on:submit.prevent="submitProfile()"
          >
            <div class="columns w-row">
              <div class="column-2 w-col w-col-6 w-col-stack">
                <div class="div-block-25">
                  <div class="form-block w-form">
                    <div class="form-title-div">
                      <div class="form-title">1. General Information</div>
                    </div>
                    <div class="login-formfield-div">
                      <div class="div-block-22">
                        <div class="login-formfield-div big">
                          <label for="type_of_institution" class="field-label">
                              Institution Type</label>
                          <select
                            id="type_of_institution"
                            name="type_of_institution"
                            data-name="type_of_institution"
                            class="login-text-field plain w-select"
                            v-model="facility.institutionType"
                            required
                          >
                            <option value>Select one...</option>
                            <option value="Hospital">Hospital</option>
                            <option value="Medical College Hospital">
                                Medical College Hospital</option>
                            <option value="Hostel - Educational">Hostel - Educational</option>
                            <option value="Hostel - Other">Hostel - Other</option>
                            <option value="Hotel">Hotel</option>
                            <option value="Lodge">Lodge</option>
                            <option value="Community Hall">Community Hall</option>
                            <option value="Marriage Hall">Marriage Hall</option>
                            <option value="School">School</option>
                            <option value="Temporary Structure / Tent">
                            Temporary Structure / Tent</option>
                            <option value="Sports Complex / Stadium">
                            Sports Complex / Stadium</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class>
                      <div class="div-block-22">
                        <div class="login-formfield-div big">
                          <label for="facility_name" class="field-label">
                              Name of your Facility</label>
                          <input
                            type="text"
                            class="login-text-field plain w-input"
                            maxlength="256"
                            name="facility_name"
                            data-name="facility_name"
                            placeholder="Name of Facility "
                            id="facility_name"
                            v-model="facility.name"
                            required
                          />
                        </div>
                        <div class="login-formfield-div">
                          <label for="area" class="field-label">Your Area</label>
                          <input
                            type="text"
                            class="login-text-field plain w-input"
                            maxlength="256"
                            name="area"
                            data-name="area"
                            placeholder="Area"
                            id="area"
                            v-model="facility.area"
                            required
                          />
                        </div>
                      </div>
                      <div class="div-block-22">
                        <div class="login-formfield-div big">
                          <label for="jurisdiction" class="field-label">Jurisdiction</label>
                          <select
                            id="jurisdiction"
                            name="jurisdiction"
                            data-name="jurisdiction"
                            class="login-text-field plain w-select"
                            v-model="facility.jurisdiction"
                            required
                          >
                            <option value>Select one...</option>
                            <option value="PMC">PMC</option>
                            <option value="PCMC">PCMC</option>
                            <option value="CS">Civil Surgeon</option>
                            <option value="DHO">DHO</option>
                          </select>
                        </div>
                        <div class="login-formfield-div">
                          <label
                            for="is_government_facility"
                            class="field-label"
                          >Are you a Government Facility?</label>
                          <select
                            id="is_government_facility"
                            name="is_government_facility"
                            data-name="is_government_facility"
                            class="login-text-field plain w-select"
                            v-model="facility.governmentHospital"
                            required
                          >
                            <option value>Select one...</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                          </select>
                        </div>
                      </div>
                      <div class="div-block-22">
                        <div class="login-formfield-div big">
                          <label
                            for="organisation_telephone"
                            class="field-label"
                          >Organisation&#x27;s Telephone</label>
                          <input
                            type="number"
                            pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                            max="9999999999"
                            min="999999999"
                            class="login-text-field plain w-input"
                            maxlength="256"
                            name="organisation_telephone"
                            data-name="organisation_telephone"
                            placeholder="Telephone"
                            id="organisation_telephone"
                            v-model="facility.telephone"
                            required
                          />
                        </div>
                        <div class="login-formfield-div">
                          <label
                            for="organisation_email"
                            class="field-label"
                          >Organisation&#x27;s Email</label>
                          <input
                            type="email"
                            class="login-text-field plain w-input"
                            maxlength="256"
                            name="organisation_email"
                            data-name="organisation_email"
                            placeholder="Email"
                            id="organisation_email"
                            v-model="facility.email"
                            required
                          />
                        </div>
                      </div>
                      <div class="div-block-22">
                        <div class="login-formfield-div big">
                          <label
                            for="is_seperate_entry_exit_available"
                            class="field-label"
                          >Separate entry/exit to the facility</label>
                          <select
                            id="is_seperate_entry_exit_available"
                            name="is_seperate_entry_exit_available"
                            data-name="is_seperate_entry_exit_available"
                            class="login-text-field plain w-select"
                            v-model="facility.isSeperateEntryExitAvailable"
                            required
                          >
                            <option value>Select one...</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                          </select>
                        </div>
                        <div class="login-formfield-div">
                          <label
                            for="is_fever_clinic_available"
                            class="field-label"
                          >Is Fever Clinic Available?</label>
                          <select
                            id="is_fever_clinic_available"
                            name="is_fever_clinic_available"
                            data-name="is_fever_clinic_available"
                            class="login-text-field plain w-select"
                            v-model="facility.isFeverClinicAvailable"
                            required
                          >
                            <option value>Select one...</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div class="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column-3 w-col w-col-6 w-col-stack">
                <div class="div-block-25 rhs">
                  <div class="form-block w-form">
                    <div class="form-title-div">
                      <div class="form-title">2. Primary Contact Person Details</div>
                    </div>
                    <div class="div-block-22">
                      <div class="login-formfield-div big">
                        <label for="primary_contact_person_name" class="field-label">Name</label>
                        <input
                          type="text"
                          class="login-text-field plain w-input"
                          maxlength="256"
                          name="primary_contact_person_name"
                          data-name="primary_contact_person_name"
                          placeholder="First Name"
                          id="primary_contact_person_name"
                          v-model="facility.facilityContact.data.primary_contact_person_name"
                          required
                        />
                      </div>
                      <div class="login-formfield-div">
                        <label for="primary_contact_person_mobile"
                        class="field-label">Mobile</label>
                        <input
                          type="number"
                          pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                          maxlength="256"
                          minlength="10"
                          class="login-text-field plain w-input"
                          name="primary_contact_person_mobile"
                          data-name="primary_contact_person_mobile"
                          placeholder="+91"
                          id="primary_contact_person_mobile"
                          v-model="facility.facilityContact.data.primary_contact_person_mobile"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-title-div">
                      <div class="form-title">3. Ambulance Incharge Details</div>
                    </div>
                    <div class>
                      <div class="div-block-22">
                        <div class="login-formfield-div big">
                          <label for="ambulance_incharge_name" class="field-label">Name</label>
                          <input
                            type="text"
                            class="login-text-field plain w-input"
                            maxlength="256"
                            name="ambulance_incharge_name"
                            data-name="ambulance_incharge_name"
                            placeholder="First Name"
                            id="ambulance_incharge_name"
                            v-model="facility.facilityContact.data.ambulance_incharge_name"
                          />
                        </div>
                        <div class="login-formfield-div">
                          <label for="ambulance_incharge_mobile" class="field-label">Mobile</label>
                          <input
                            type="number"
                            pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                            maxlength="256"
                            minlength="10"
                            class="login-text-field plain w-input"
                            name="ambulance_incharge_mobile"
                            data-name="ambulance_incharge_mobile"
                            placeholder="+91"
                            id="ambulance_incharge_mobile"
                            v-model="facility.facilityContact.data.ambulance_incharge_mobile"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-title-div">
                      <div class="form-title">4. Health Checkup Incharge</div>
                    </div>
                    <div class>
                      <div class="div-block-22">
                        <div class="login-formfield-div big">
                          <label for="health_checkup_incharge_name" class="field-label">Name</label>
                          <input
                            type="text"
                            class="login-text-field plain w-input"
                            maxlength="256"
                            name="health_checkup_incharge_name"
                            data-name="health_checkup_incharge_name"
                            placeholder="First Name"
                            id="health_checkup_incharge_name"
                            v-model="facility.facilityContact.data.health_checkup_incharge_name"
                          />
                        </div>
                        <div class="login-formfield-div">
                          <label for="health_checkup_incharge_mobile"
                          class="field-label">Mobile</label>
                          <input
                            type="number"
                            pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                            maxlength="256"
                            minlength="10"
                            class="login-text-field plain w-input"
                            name="health_checkup_incharge_mobile"
                            data-name="health_checkup_incharge_mobile"
                            placeholder="+91"
                            id="health_checkup_incharge_mobile"
                            v-model="facility.facilityContact.data.health_checkup_incharge_mobile"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-title-div">
                      <div class="form-title">5. Premise Disinfection &amp; Cleaning Incharge</div>
                    </div>
                    <div>
                      <div class="div-block-22">
                        <div class="login-formfield-div big">
                          <label for="cleaning_incharge_name" class="field-label">Name</label>
                          <input
                            type="text"
                            class="login-text-field plain w-input"
                            maxlength="256"
                            name="cleaning_incharge_name"
                            data-name="cleaning_incharge_name"
                            placeholder="First Name"
                            id="cleaning_incharge_name"
                            v-model="facility.facilityContact.data.cleaning_incharge_name"
                          />
                        </div>
                        <div class="login-formfield-div">
                          <label for="cleaning_incharge_mobile" class="field-label">Mobile</label>
                          <input
                            type="number"
                            pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                            maxlength="256"
                            minlength="10"
                            class="login-text-field plain w-input"
                            name="cleaning_incharge_mobile"
                            data-name="cleaning_incharge_mobile"
                            placeholder="+91"
                            id="cleaning_incharge_mobile"
                            v-model="facility.facilityContact.data.cleaning_incharge_mobile"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-block w-form">
              <div class="div">
                <label class="w-checkbox checkbox-field">
                  <input
                    type="checkbox"
                    id="consent-checkbox"
                    name="consent-checkbox"
                    data-name="consent-checkbox"
                    class="w-checkbox-input checkbox"
                    checked
                    required
                  />
                  <span
                    class="checkbox-label w-form-label"
                  >Consent statement &amp; Disclaimer for data sharing</span>
                </label>
                <input
                  type="submit"
                  value="Submit"
                  data-wait="Please wait..."
                  class="signup-button w-button"
                />
              </div>
              <div class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState, mapGetters } from 'vuex';

import Sidebar from '../components/Sidebar.vue';
import Sidelogo from '../components/Sidelogo.vue';

const API = require('../utils/apis.js');

@Component({
  components: {
    sidebar: Sidebar,
    sidelogo: Sidelogo,
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['facility']),
  },
})
export default class FacilityProfileForm extends Vue {
  submitProfile() {
    const data = {
      contact_data: {
        primary_contact_person_name:
        this.facility.facilityContact.data.primary_contact_person_name,
        primary_contact_person_mobile:
        this.facility.facilityContact.data.primary_contact_person_mobile,
        ambulance_incharge_name:
        this.facility.facilityContact.data.ambulance_incharge_name,
        ambulance_incharge_mobile:
        this.facility.facilityContact.data.ambulance_incharge_mobile,
        health_checkup_incharge_name:
        this.facility.facilityContact.data.health_checkup_incharge_name,
        health_checkup_incharge_mobile:
        this.facility.facilityContact.data.health_checkup_incharge_mobile,
        cleaning_incharge_name:
        this.facility.facilityContact.data.cleaning_incharge_name,
        cleaning_incharge_mobile:
        this.facility.facilityContact.data.cleaning_incharge_mobile,
      },
      facility_data: {
        type_of_institution: this.facility.institutionType,
        facility_name: this.facility.name,
        area: this.facility.area,
        jurisdiction: this.facility.jurisdiction,
        is_government_facility: this.facility.governmentHospital,
        is_seperate_entry_exit_available: this.facility.isSeperateEntryExitAvailable,
        is_fever_clinic_available: this.facility.isFeverClinicAvailable,
        organisation_telephone: this.facility.telephone,
        organisation_email: this.facility.email,
      },
    };
    API.updateFacilityProfile(this.facility.facilityId, data).then(
      () => {
        this.$store.dispatch('fetchOnlyFacility');
        alert('Update Successfull.'); //eslint-disable-line
      }, (error) => {
        alert(`Error in update: ${error.message}`); //eslint-disable-line
      },
    );
  }
}
</script>
