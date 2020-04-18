<template>
  <div data-w-tab="Update Facility Details" class="w-tab-pane w--tab-active">
    <div class="section-4 profile">
      <div data-duration-in="300" data-duration-out="100" class="tabs w-tabs">
        <div class="tabs-menu-3 w-tab-menu">
          <a
            data-w-tab="Hospital Assets"
            class="profile-tab-link w-inline-block w-tab-link w--current"
          >
            <div>1. Facility Assets</div>
          </a>
          <a
            data-w-tab="Staff Details"
            class="profile-tab-link w-inline-block w-tab-link"
          >
            <div>2. Staff Details</div>
          </a>
          <a
            data-w-tab="Inventory"
            class="profile-tab-link w-inline-block w-tab-link"
          >
            <div>3. Inventory</div>
          </a>
          <a
            data-w-tab="Checklist"
            class="profile-tab-link w-inline-block w-tab-link"
          >
            <div>4. Checklist</div>
          </a>
        </div>
        <div class="tabs-content-3 w-tab-content">
          <div data-w-tab="Hospital Assets" class="w-tab-pane w--tab-active">
            <form>
              <div class="div-block-6 profile">
                <div class="w-row">
                  <div class="w-col">
                    <div class="form-block-3 w-form">
                      <div class="profile-page-status-update-div">
                        <div class="subheading">A1. Beds</div>
                        <div class="div-block-8">
                          <div class="status-form-2-col-div">
                            <label for="name-8" class="field-label"
                              >Total Beds</label
                            >
                            <input
                              type="number"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="name-7"
                              data-name="Name 7"
                              placeholder=""
                              id="total_beds"
                            />
                          </div>
                          <div class="status-form-2-col-div">
                            <label for="name-8" class="field-label"
                              >Total ICU Beds</label
                            >
                            <input
                              type="number"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="name-2"
                              data-name="Name 2"
                              placeholder=""
                              id="total_icu_beds"
                            />
                          </div>
                          <div class="status-form-2-col-div">
                            <label for="name-8" class="field-label"
                              >COVID ICU Beds</label
                            >
                            <input
                              type="number"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="name-2"
                              data-name="Name 2"
                              placeholder=""
                              id="covid_icu_beds"
                            />
                          </div>
                          <div class="status-form-2-col-div">
                            <label for="non_covid_occupancy" class="field-label"
                              >Total Non COVID Occupancy</label
                            ><input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="non_covid_occupancy"
                              data-name="non_covid_occupancy"
                              id="non_covid_occupancy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-row">
                  <div class="w-col w-col-6">
                    <div class="form-block-3 w-form">
                      <div class="profile-page-status-update-div">
                        <div class="subheading">
                          <strong>A2. VENTILATORS</strong><br />
                        </div>
                        <div class="div-block-8">
                          <div class="status-form-2-col-div">
                            <label for="total_ventilators" class="field-label"
                              >Total Ventilators</label
                            ><input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="total_ventilators"
                              data-name="total_ventilators"
                              id="total_ventilators"
                            />
                          </div>

                          <div class="status-form-2-col-div">
                            <label
                              for="ventilators_allocated_covid"
                              class="field-label"
                              >Allocated for Covid-19</label
                            ><input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="ventilators_allocated_covid"
                              data-name="ventilators_allocated_covid"
                              id="ventilators_allocated_covid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-row">
                  <div class="w-col w-col-6">
                    <div class="div-block-57">
                      <input
                        type="reset"
                        value="Cancel "
                        data-wait="Please wait..."
                        class="signup-button status-form clear-form w-button"
                      />
                    </div>
                  </div>
                  <div class="w-col w-col-6">
                    <div class="div-block-57">
                      <input
                        type="submit"
                        value="update"
                        data-wait="Please wait..."
                        class="signup-button status-form profile-pahe w-button"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div data-w-tab="Staff Details" class="w-tab-pane">
            <form id="medical_staff_details_form">
              <div class="div-block-6 profile">
                <div class="w-row">
                  <div class="w-col">
                    <div class="form-block-3 w-form">
                      <div class="profile-page-status-update-div">
                        <div class="subheading">
                          <strong>B1. DOCTORS</strong>
                        </div>
                        <div class="div-block-8">
                          <div class="status-form-2-col-div">
                            <label for="total_doctors" class="field-label"
                              >Total Doctors</label
                            >
                            <input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="total_doctors"
                              data-name="total_doctors"
                              id="total_doctors"
                            />
                          </div>
                          <div class="status-form-2-col-div">
                            <label for="ayush_doctors" class="field-label"
                              >AYUSH Doctors</label
                            >
                            <input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="ayush_doctors"
                              data-name="ayush_doctors"
                              id="ayush_doctors"
                            />
                          </div>
                          <div class="status-form-2-col-div">
                            <label for="check_physicians" class="field-label"
                              >Chest Physicians</label
                            ><input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="check_physicians"
                              data-name="check_physicians"
                              id="check_physicians"
                            />
                          </div>

                          <div class="status-form-2-col-div">
                            <label for="pulmonary" class="field-label"
                              >Pulmonary</label
                            >
                            <input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="pulmonary"
                              data-name="pulmonary"
                              id="pulmonary"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-row">
                  <div class="w-col w-col-6">
                    <div class="form-block-3 w-form">
                      <div class="profile-page-status-update-div">
                        <div class="subheading">.</div>
                        <div class="div-block-8">
                          <div class="status-form-2-col-div">
                            <label for="anesthesiologists" class="field-label"
                              >Anesthesiologists</label
                            ><input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="anesthesiologists"
                              data-name="anesthesiologists"
                              id="anesthesiologists"
                            />
                          </div>

                          <div class="div-block-31"></div>
                          <div class="status-form-2-col-div">
                            <label for="nurses" class="field-label"
                              >Nurses</label
                            ><input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="nurses"
                              data-name="nurses"
                              id="nurses"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-row">
                  <div class="w-col w-col-6">
                    <div class="div-block-57">
                      <input
                        type="reset"
                        id="cancel_medical_staff_details"
                        value="Cancel "
                        data-wait="Please wait..."
                        class="signup-button status-form clear-form w-button"
                      />
                    </div>
                  </div>
                  <div class="w-col w-col-6">
                    <div class="div-block-57">
                      <input
                        type="submit"
                        value="update"
                        data-wait="Please wait..."
                        class="signup-button status-form profile-pahe w-button"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div data-w-tab="Inventory" class="w-tab-pane">
            <form id="inventory_details_form">
              <div class="div-block-6 profile">
                <div class="w-row">
                  <div class="w-col">
                    <div class="form-block-3 w-form">
                      <div class="profile-page-status-update-div">
                        <div class="subheading">C1. Masks</div>
                        <div class="div-block-8">
                          <div class="status-form-2-col-div">
                            <label for="n_95_masks" class="field-label"
                              >N-95 Masks</label
                            ><input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="n_95_masks"
                              data-name="n_95_masks"
                              id="n_95_masks"
                            />
                          </div>

                          <div class="status-form-2-col-div">
                            <label for="surgical_mask" class="field-label"
                              >Surgical Masks</label
                            ><input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="surgical_mask"
                              data-name="surgical_mask"
                              id="surgical_mask"
                            />
                          </div>

                          <div class="status-form-2-col-div">
                            <label for="tpe_masks" class="field-label"
                              >TPE Masks</label
                            ><input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="tpe_masks"
                              data-name="tpe_masks"
                              id="tpe_masks"
                            />
                          </div>

                          <div class="status-form-2-col-div">
                            <label for="other_masks" class="field-label"
                              >Other Masks</label
                            ><input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="other_masks"
                              data-name="other_masks"
                              id="other_masks"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-row">
                  <div class="w-col">
                    <div class="form-block-3 w-form">
                      <div class="profile-page-status-update-div">
                        <div class="subheading">
                          C2. <strong>Protective equipments</strong><br />
                        </div>
                        <div class="div-block-8">
                          <div class="status-form-2-col-div">
                            <label for="face_shield" class="field-label"
                              >Face Shield</label
                            ><input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="face_shield"
                              data-name="face_shield"
                              id="face_shield"
                            />
                          </div>

                          <div class="status-form-2-col-div">
                            <label for="hazmat_suits" class="field-label"
                              >Hazmat Suits</label
                            ><input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="hazmat_suits"
                              data-name="hazmat_suits"
                              id="hazmat_suits"
                            />
                          </div>

                          <div class="status-form-2-col-div">
                            <label for="ppe_kits" class="field-label"
                              >PPE Kits</label
                            ><input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="ppe_kits"
                              data-name="ppe_kits"
                              id="ppe_kits"
                            />
                          </div>

                          <div class="status-form-2-col-div">
                            <label for="gloves" class="field-label"
                              >Gloves</label
                            >
                            <input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="gloves"
                              data-name="gloves"
                              id="gloves"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-row">
                  <div class="w-col w-col-6">
                    <div class="form-block-3 w-form">
                      <div class="profile-page-status-update-div">
                        <div class="subheading">
                          C3. <strong>Medicines</strong><br />
                        </div>
                        <div class="div-block-8">
                          <div class="status-form-2-col-div">
                            <label for="hydroxychloroquine" class="field-label"
                              >Hydroxycholroquine</label
                            ><input
                              type="number"
                              min="0"
                              placeholder="0"
                              class="text-field-design w-input"
                              maxlength="256"
                              name="hydroxychloroquine"
                              data-name="hydroxychloroquine"
                              id="hydroxychloroquine"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-row">
                  <div class="w-col w-col-6">
                    <div class="div-block-57">
                      <input
                        type="reset"
                        id="cancel_inventory_details"
                        value="Cancel "
                        data-wait="Please wait..."
                        class="signup-button status-form clear-form w-button"
                      />
                    </div>
                  </div>
                  <div class="w-col w-col-6">
                    <div class="div-block-57">
                      <input
                        type="submit"
                        value="update"
                        data-wait="Please wait..."
                        class="signup-button status-form profile-pahe w-button"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div data-w-tab="Checklist" class="w-tab-pane">
            <form id="compliance_checklist_form">
              <div class="w-row">
                <div class="w-form">
                  <div class="form-section-div">
                    <div class="div-block-41">
                      <div class="subheading _1">
                        1. Food and drinking water facility availability
                      </div>
                      <select
                        name="food_and_drinking_water_availability"
                        data-name="food_and_drinking_water_availability"
                        id="food_and_drinking_water_availability"
                        class="text-field-design dropdown w-select"
                      >
                        <option value="available">Available</option>
                        <option value="unavailable">Not available</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-section-div">
                    <div class="div-block-41">
                      <div class="subheading _1">
                        2. Sanitation and disinfection services availability
                      </div>
                      <select
                        name="sanitation_and_disinfection_services_availability"
                        data-name="sanitation_and_disinfection_services_availability"
                        id="sanitation_and_disinfection_services_availability"
                        class="text-field-design dropdown w-select"
                      >
                        <option value="available">Available</option>
                        <option value="unavailable">Not available</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-section-div">
                    <div class="div-block-41">
                      <div class="subheading _1">
                        3. Health screening protocol availability
                      </div>
                      <select
                        name="health_screening_protocol_availability"
                        data-name="health_screening_protocol_availability"
                        id="health_screening_protocol_availability"
                        class="text-field-design dropdown w-select"
                      >
                        <option value="available">Available</option>
                        <option value="unavailable">Not available</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-section-div">
                    <div class="div-block-41">
                      <div class="subheading _1">4. Ambulance availability</div>
                      <select
                        name="ambulance_availability"
                        data-name="ambulance_availability"
                        id="ambulance_availability"
                        class="text-field-design dropdown w-select"
                      >
                        <option value="available">Available</option>
                        <option value="unavailable">Not available</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-section-div">
                    <div class="div-block-41">
                      <div class="subheading _1">
                        5. Are sufficient number of washrooms / toilets
                        available?
                      </div>
                      <select
                        name="washrooms_availability"
                        data-name="washrooms_availability"
                        id="washrooms_availability"
                        class="text-field-design dropdown w-select"
                        ><option value="available">Available</option>
                        <option value="unavailable">Not available</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-section-div">
                    <div class="div-block-41">
                      <div class="subheading _1">
                        6. Are beds, mattresses, covers available?
                      </div>
                      <select
                        name="beds_mattresses_covers_availability"
                        data-name="beds_mattresses_covers_availability"
                        id="beds_mattresses_covers_availability"
                        class="text-field-design dropdown w-select"
                      >
                        <option value="available">Available</option>
                        <option value="unavailable">Not available</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-row">
                <div class="w-col w-col-6">
                  <div class="div-block-57">
                    <input
                      type="reset"
                      id="cancel_compliance_checklist"
                      value="Cancel "
                      data-wait="Please wait..."
                      class="signup-button status-form clear-form w-button"
                    />
                  </div>
                </div>
                <div class="w-col w-col-6">
                  <div class="div-block-57">
                    <input
                      type="submit"
                      value="update"
                      data-wait="Please wait..."
                      class="signup-button status-form profile-pahe w-button"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
