<template>
<transition name="modal">

  <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
<form id="email-form" name="email-form" data-name="Email Form">
        <div class="patient-db-form status">
          <div class="text-block-13">Remove Patient from Facility</div>
          <div class="div-block-70"><label for="name" class="field-label patient white">Data Point 1:</label><input type="text" class="patient-db-text-field w-input" maxlength="256" name="field-5" data-name="Field 5" placeholder="Example Text" id="field-5" required=""></div>
          <div class="div-block-70"><label for="name" class="field-label patient white">Patient Status:</label><select id="field-4" name="field-4" data-name="Field 4" class="patient-db-text-field w-select"><option value="">Select one...</option><option value="Discharged">Discharged</option><option value="Deceased ">Decessed </option></select></div>
          <div class="div-block-70"><label for="name" class="field-label patient white">Patient Status:</label><select id="field-4" name="field-4" data-name="Field 4" class="patient-db-text-field w-select"><option value="">Select one...</option><option value="Transferred ">Transferred </option><option value="Discharged">Discharged</option><option value="Deceased ">Decessed </option></select></div>
          <div class="div-block-71"><a  @click="$emit('close')" class="signup-button status-form _2 cancel w-button">CANCEL</a><a href="#" class="button-5 w-button">Remove Patient</a></div>
        </div>
      </form>
            </div>
          </div>
        </div>
</transition>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class RemovePatinet extends Vue {

}

</script>
