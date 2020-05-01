
<template>
  <div class="columns-4 w-row">
    <div class="w-col w-col-2">
      <sidelogo></sidelogo>
      <sidebar></sidebar>
    </div>
    <div class="column w-col w-col-10">
      <div class="div-block-44">
        <div class="hospital-profile-header-div _1">
          <h1 class="heading-2 _1">Patient Details (A)</h1>
          <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
          <removepatient v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite
      default content
    -->
        <h3 slot="header">custom header</h3>
      </removepatient>
          <a href="discharge-popup-forn.html" class="button-3 ward remove w-button">- Remove Patient</a>
        </div>
        <div class="div-block-76"></div>
        <div class="div-block-36 _1">
          <div class="accordion__item js-accordion-item active">
            <div
              data-delay="0"
              data-w-id="1082e313-78b3-fcdc-4d02-77f0d1343eb0"
              style="height:60PX"
              class="faq-p w-dropdown"
            >
              <div class="faq-2 w-dropdown-toggle">
                <img src="images/iconfinder_SEO-15_2588776.png" alt class="accordion_item-image" />
                <div class="toggle-text">
                <strong>Personal Details</strong>
                </div>
                <div
                  data-w-id="1082e313-78b3-fcdc-4d02-77f0d1343eb5"
                  data-animation-type="lottie"
                  data-src="https://uploads-ssl.webflow.com/5ea86616b0e64d2500b5ea7e/5ea8661600d26f5cead7575d_plus-to-x-white.json"
                  data-loop="0"
                  data-direction="1"
                  data-autoplay="0"
                  data-is-ix2-target="1"
                  data-renderer="svg"
                  data-default-duration="1"
                  data-duration="0"
                  data-ix2-initial-state="0"
                  class="faq-icon-2"
                ></div>
              </div>
              <nav class="faq-body-2 w-dropdown-list">
                <div class="faq-body-cont-2">
                  <div class="patient-db-section">
                    <div class="w-form">
                      <form id="email-form-2" name="email-form-2" data-name="Email Form 2">
                        <div class="columns-8 w-row">
                          <div class="w-col w-col-6">
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">FIrst Name:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="First-Name-6"
                                  data-name="First Name 6"
                                  placeholder="First Name"
                                  id="First-Name"
                                />
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">Age:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Age"
                                  data-name="Age"
                                  placeholder="Age"
                                  id="Age"
                                />
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">Address:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Address"
                                  data-name="Address"
                                  placeholder="Address"
                                  id="Address"
                                />
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">District:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Occupation-2"
                                  data-name="Occupation 2"
                                  placeholder="Pune"
                                  id="Occupation-2"
                                />
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">Occupation:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Occupation"
                                  data-name="Occupation"
                                  placeholder="Occupation"
                                  id="Occupation"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="w-col w-col-6">
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">Last Name:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Last-Name"
                                  data-name="Last Name"
                                  placeholder="Last Name"
                                  id="Last-Name"
                                />
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">Gender:</label>
                              <div class="new-db-form-div">
                                <select
                                  id="field-5"
                                  name="field-6"
                                  class="patient-db-field w-select"
                                >
                                  <option value>Select one...</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Others">Others</option>
                                </select>
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">Area (Locality):</label>
                              <div class="new-db-form-div">
                                <select
                                  id="field-6"
                                  name="field-6"
                                  class="patient-db-field w-select"
                                >
                                  <option value>Select one...</option>
                                  <option value="Locality from DB">Locality from DB</option>
                                </select>
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">State:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Occupation-3"
                                  data-name="Occupation 3"
                                  placeholder="Maharashtra"
                                  id="Occupation-3"
                                />
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">Contact:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="tel"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Contact"
                                  data-name="Contact"
                                  placeholder="+91"
                                  id="Mobile-No"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="div-block-75"></div>
                        <div class="columns-9 w-row">
                          <div class="w-col w-col-6">
                            <div class="div-block-74">
                              <label
                                for="First-Name"
                                class="field-label patient"
                              >District Case Number:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="First-Name-6"
                                  data-name="First Name 6"
                                  placeholder="First Name"
                                  id="First-Name"
                                />
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">GOI COVID ID:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Age-2"
                                  data-name="Age 2"
                                  placeholder="Age"
                                  id="Age-2"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="w-col w-col-6">
                            <div class="div-block-74">
                              <label
                                for="First-Name"
                                class="field-label patient"
                              >Hospital Patient ID:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Last-Name-3"
                                  data-name="Last Name 3"
                                  placeholder="Last Name"
                                  id="Last-Name-3"
                                />
                              </div>
                            </div>
                            <div class="div-block-74">
                              <label for="First-Name" class="field-label patient">COVID Unique ID:</label>
                              <div class="new-db-form-div">
                                <input
                                  type="text"
                                  class="patient-db-field w-input"
                                  maxlength="256"
                                  name="Occupation-3"
                                  data-name="Occupation 3"
                                  placeholder="Maharashtra"
                                  id="Occupation-3"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-form-submit-page-1">
                          <a
                            href="#"
                            class="signup-button status-form _2 cancel w-button"
                          >CLear form</a>
                          <a href="#" class="signup-button status-form _2 _1 w-button">Next</a>
                        </div>
                      </form>
                      <div class="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div class="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div class="accordion__item js-accordion-item active">
            <div
              data-delay="0"
              data-w-id="5cdb72b9-e6a3-8be0-4237-6ebcdeddaddd"
              style="height:60PX"
              class="faq-p w-dropdown"
            >
              <div class="faq-2 w-dropdown-toggle">
                <img src="images/iconfinder_lungs_5997835.png" alt class="accordion_item-image" />
                <div class="toggle-text">
                  <strong>Clinical History at Admission</strong>
                </div>
                <div
                  data-w-id="5cdb72b9-e6a3-8be0-4237-6ebcdeddade2"
                  data-animation-type="lottie"
                  data-src="https://uploads-ssl.webflow.com/5ea86616b0e64d2500b5ea7e/5ea8661600d26f5cead7575d_plus-to-x-white.json"
                  data-loop="0"
                  data-direction="1"
                  data-autoplay="0"
                  data-is-ix2-target="1"
                  data-renderer="svg"
                  data-default-duration="1"
                  data-duration="0"
                  data-ix2-initial-state="0"
                  class="faq-icon-2"
                ></div>
              </div>
              <nav class="faq-body-2 w-dropdown-list">
                <div class="faq-body-cont-2">
                  <div class="patient-db-section">
                    <div class="w-form">
                      <form id="email-form-2" name="email-form-2" data-name="Email Form 2">
                        <div class="w-row">
                          <div class="w-col w-col-4">
                            <div class="new-db-form-div full">
                              <label for="First-Name-2" class="field-label patient">
                                Symptoms
                                <strong></strong>at time of Admission:
                              </label>
                            </div>
                            <div class="new-db-form-div full">
                              <label
                                for="First-Name-2"
                                class="field-label patient"
                              >Date of onset of Symptoms:</label>
                            </div>
                            <div class="new-db-form-div full">
                              <label
                                for="First-Name-2"
                                class="field-label patient"
                              >Primary Symptoms:</label>
                            </div>
                            <div class="new-db-form-div full">
                              <label
                                for="First-Name-2"
                                class="field-label patient"
                              >Secondary Symptoms:</label>
                            </div>
                            <div class="div-block-75 llhs rrhs"></div>
                            <div class="new-db-form-div full">
                              <label
                                for="First-Name-2"
                                class="field-label patient"
                              >Pre-existing Medical Conditions:</label>
                            </div>
                          </div>
                          <div class="w-col w-col-8">
                            <div class="new-db-form-div full">
                              <label class="radio-button-field-2 w-radio">
                                <input
                                  type="radio"
                                  data-name="Radio 9"
                                  id="radio-9"
                                  name="radio"
                                  value="Radio"
                                  class="w-form-formradioinput radio-button-2 w-radio-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Yes</span>
                              </label>
                              <label class="radio-button-field-2 w-radio">
                                <input
                                  type="radio"
                                  data-name="Radio 10"
                                  id="radio-10"
                                  name="radio"
                                  value="Radio"
                                  class="w-form-formradioinput radio-button-3 w-radio-input"
                                />
                                <span class="checkbox-label-2 w-form-label">No</span>
                              </label>
                            </div>
                            <div class="new-db-form-div">
                              <input
                                type="text"
                                class="patient-db-field w-input"
                                maxlength="256"
                                name="Date-3"
                                data-name="Date 3"
                                placeholder="Date"
                                id="Date-3"
                              />
                            </div>
                            <div class="new-db-form-div full">
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-8"
                                  name="checkbox-8"
                                  data-name="Checkbox 8"
                                  class="w-checkbox-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Fever</span>
                              </label>
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-2"
                                  name="checkbox-2"
                                  data-name="Checkbox 2"
                                  class="w-checkbox-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Tiredness</span>
                              </label>
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-3"
                                  name="checkbox-3"
                                  data-name="Checkbox 3"
                                  class="w-checkbox-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Difficulty Breathing</span>
                              </label>
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-4"
                                  name="checkbox-4"
                                  data-name="Checkbox 4"
                                  class="w-checkbox-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Dry Cough</span>
                              </label>
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-5"
                                  name="checkbox-5"
                                  data-name="Checkbox 5"
                                  class="w-checkbox-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Chest Pain</span>
                              </label>
                            </div>
                            <div class="new-db-form-div full">
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-6"
                                  name="checkbox-6"
                                  data-name="Checkbox 6"
                                  class="w-checkbox-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Cold</span>
                              </label>
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-6"
                                  name="checkbox-6"
                                  data-name="Checkbox 6"
                                  class="w-checkbox-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Sore throat</span>
                              </label>
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-6"
                                  name="checkbox-6"
                                  data-name="Checkbox 6"
                                  class="w-checkbox-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Diarrhoea</span>
                              </label>
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-6"
                                  name="checkbox-6"
                                  data-name="Checkbox 6"
                                  class="w-checkbox-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Body Ache</span>
                              </label>
                              <div class="div-block-75"></div>
                              <div class="div-block-75"></div>
                            </div>
                            <div class="div-block-75 llhs"></div>
                            <div class="new-db-form-div full">
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-6"
                                  name="checkbox-6"
                                  data-name="Checkbox 6"
                                  class="w-checkbox-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Diabetes</span>
                              </label>
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-6"
                                  name="checkbox-6"
                                  data-name="Checkbox 6"
                                  class="w-checkbox-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Chronic Lung Disease</span>
                              </label>
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-6"
                                  name="checkbox-6"
                                  data-name="Checkbox 6"
                                  class="w-checkbox-input"
                                />
                                <span
                                  class="checkbox-label-2 w-form-label"
                                >Moderate or Severe Asthma</span>
                              </label>
                            </div>
                            <div class="new-db-form-div full">
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-6"
                                  name="checkbox-6"
                                  data-name="Checkbox 6"
                                  class="w-checkbox-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Immunocompromised</span>
                              </label>
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-6"
                                  name="checkbox-6"
                                  data-name="Checkbox 6"
                                  class="w-checkbox-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Hypertension</span>
                              </label>
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-6"
                                  name="checkbox-6"
                                  data-name="Checkbox 6"
                                  class="w-checkbox-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Chronic Liver Disease</span>
                              </label>
                            </div>
                            <div class="new-db-form-div full">
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-6"
                                  name="checkbox-6"
                                  data-name="Checkbox 6"
                                  class="w-checkbox-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Kidney Disease</span>
                              </label>
                              <label class="w-checkbox checkbox-field-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-6"
                                  name="checkbox-6"
                                  data-name="Checkbox 6"
                                  class="w-checkbox-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Severe Obesity</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div class="patient-form-submit-page-1">
                        <a href="#" class="signup-button status-form _2 cancel w-button">CLear form</a>
                        <a href="#" class="signup-button status-form _2 _1 w-button">Next</a>
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
              </nav>
            </div>
          </div>
          <div class="accordion__item js-accordion-item active">
            <div
              data-delay="0"
              data-w-id="8459d5e2-9276-4a44-18ad-9fbe5069c215"
              style="height:60PX"
              class="faq-p w-dropdown"
            >
              <div class="faq-2 w-dropdown-toggle">
                <img
                  src="images/iconfinder_Corona_covid19_virus_disease_5973093.png"
                  alt
                  class="accordion_item-image"
                />
                <div class="toggle-text">
                  <strong>COVID-19 Test Details</strong>
                </div>
                <div
                  data-w-id="8459d5e2-9276-4a44-18ad-9fbe5069c21a"
                  data-animation-type="lottie"
                  data-src="https://uploads-ssl.webflow.com/5ea86616b0e64d2500b5ea7e/5ea8661600d26f5cead7575d_plus-to-x-white.json"
                  data-loop="0"
                  data-direction="1"
                  data-autoplay="0"
                  data-is-ix2-target="1"
                  data-renderer="svg"
                  data-default-duration="1"
                  data-duration="0"
                  data-ix2-initial-state="0"
                  class="faq-icon-2"
                ></div>
              </div>
              <nav class="faq-body-2 w-dropdown-list">
                <div class="faq-body-cont-2">
                  <div class="patient-db-section">
                    <div class="w-form">
                      <form id="email-form-2" name="email-form-2" data-name="Email Form 2">
                        <div class="w-row">
                          <div class="w-col w-col-4">
                            <div class="new-db-form-div full">
                              <label for="First-Name-2" class="field-label patient">
                                <strong>Has sample been collected?</strong>
                              </label>
                            </div>
                            <div class="new-db-form-div full">
                              <label
                                for="First-Name-2"
                                class="field-label patient"
                              >Date of Sample Collection:</label>
                            </div>
                            <div class="new-db-form-div full">
                              <label
                                for="First-Name-2"
                                class="field-label patient"
                              >Sample Collection Center:</label>
                            </div>
                            <div class="new-db-form-div full">
                              <label
                                for="First-Name-2"
                                class="field-label patient"
                              >Sample Tested at:</label>
                            </div>
                            <div class="new-db-form-div full">
                              <label
                                for="First-Name-2"
                                class="field-label patient"
                              >Is Sample Result Available?</label>
                            </div>
                            <div class="div-block-75 llhs rrhs"></div>
                            <div class="new-db-form-div full">
                              <label
                                for="First-Name-2"
                                class="field-label patient"
                              >Name of Lab that confirmed the result:</label>
                            </div>
                            <div class="new-db-form-div full">
                              <label
                                for="First-Name-2"
                                class="field-label patient"
                              >Result of the Sample:</label>
                            </div>
                          </div>
                          <div class="w-col w-col-8">
                            <div class="new-db-form-div full">
                              <label class="radio-button-field-2 w-radio">
                                <input
                                  type="radio"
                                  data-name="Radio 11"
                                  id="radio-11"
                                  name="radio"
                                  value="Radio"
                                  class="w-form-formradioinput radio-button-2 w-radio-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Yes</span>
                              </label>
                              <label class="radio-button-field-2 w-radio">
                                <input
                                  type="radio"
                                  data-name="Radio 12"
                                  id="radio-12"
                                  name="radio"
                                  value="Radio"
                                  class="w-form-formradioinput radio-button-3 w-radio-input"
                                />
                                <span class="checkbox-label-2 w-form-label">No</span>
                              </label>
                            </div>
                            <div class="new-db-form-div">
                              <input
                                type="text"
                                class="patient-db-field w-input"
                                maxlength="256"
                                name="Date-3"
                                data-name="Date 3"
                                placeholder="Date"
                                id="Date-3"
                              />
                            </div>
                            <div class="new-db-form-div full">
                              <select id="field-5" name="field-6" class="patient-db-field w-select">
                                <option value>Select one...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                              </select>
                            </div>
                            <div class="new-db-form-div full">
                              <select id="field-5" name="field-6" class="patient-db-field w-select">
                                <option value>Select one...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                              </select>
                            </div>
                            <div class="new-db-form-div full">
                              <label class="radio-button-field-2 w-radio">
                                <input
                                  type="radio"
                                  data-name="Radio 13"
                                  id="radio-13"
                                  name="radio"
                                  value="Radio"
                                  class="w-form-formradioinput radio-button-2 w-radio-input"
                                />
                                <span class="checkbox-label-2 w-form-label">Yes</span>
                              </label>
                              <label class="radio-button-field-2 w-radio">
                                <input
                                  type="radio"
                                  data-name="Radio 14"
                                  id="radio-14"
                                  name="radio"
                                  value="Radio"
                                  class="w-form-formradioinput radio-button-3 w-radio-input"
                                />
                                <span class="checkbox-label-2 w-form-label">No</span>
                              </label>
                            </div>
                            <div class="div-block-75 llhs"></div>
                            <div class="new-db-form-div full">
                              <select id="field-5" name="field-6" class="patient-db-field w-select">
                                <option value>Select one...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                              </select>
                            </div>
                            <div class="new-db-form-div full">
                              <select id="field-5" name="field-6" class="patient-db-field w-select">
                                <option value>Select one...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div class="patient-form-submit-page-1">
                        <a href="#" class="signup-button status-form _2 cancel w-button">CLear form</a>
                        <a href="#" class="signup-button status-form _2 _1 w-button">Next</a>
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
              </nav>
            </div>
          </div>
          <div class="accordion__item js-accordion-item active">
            <div
              data-delay="0"
              data-hover
              data-w-id="9d26139f-f913-f182-b1d4-b51571a4aaab"
              style="height:60PX"
              class="faq-p w-dropdown"
            >
              <div class="faq-2 w-dropdown-toggle">
                <img src="images/iconfinder_SEO-15_2588776.png" alt class="accordion_item-image" />
                <div class="toggle-text">
                  <strong>Allocate a Ward / Transfer Patient</strong>
                </div>
                <div
                  data-w-id="9d26139f-f913-f182-b1d4-b51571a4aab0"
                  data-animation-type="lottie"
                  data-src="https://uploads-ssl.webflow.com/5ea86616b0e64d2500b5ea7e/5ea8661600d26f5cead7575d_plus-to-x-white.json"
                  data-loop="0"
                  data-direction="1"
                  data-autoplay="0"
                  data-is-ix2-target="1"
                  data-renderer="svg"
                  data-default-duration="1"
                  data-duration="0"
                  data-ix2-initial-state="0"
                  class="faq-icon-2"
                ></div>
              </div>
              <nav class="faq-body-2 w-dropdown-list">
                <div class="faq-body-cont-2">
                  <div class="patient-db-section">
                    <div class="w-form">
                      <form id="email-form-2" name="email-form-2" data-name="Email Form 2">
                        <div class="w-row">
                          <div class="w-col w-col-4">
                            <div class="new-db-form-div full">
                              <label for="First-Name-2" class="field-label patient">Severity:</label>
                            </div>
                            <div class="new-db-form-div full">
                              <label for="First-Name-2" class="field-label patient">COVID 19 Status:</label>
                            </div>
                            <div class="div-block-75 llhs rrhs"></div>
                          </div>
                          <div class="w-col w-col-8">
                            <div class="new-db-form-div full">
                              <select id="field-5" name="field-6" class="patient-db-field w-select">
                                <option value>Select one...</option>
                                <option value="Asymptomatic">Asymptomatic</option>
                                <option value="Mild or Very Mild">Mild or Very Mild</option>
                                <option value="Moderate">Moderate</option>
                                <option value="Severe">Severe</option>
                              </select>
                            </div>
                            <div class="new-db-form-div full">
                              <select id="field-5" name="field-6" class="patient-db-field w-select">
                                <option value>Select one...</option>
                                <option value="Male">Test Pending</option>
                                <option value="Result Awaited">Result Awaited</option>
                                <option value="Positive">Positive</option>
                                <option value="Negative">Negative</option>
                              </select>
                            </div>
                            <div class="div-block-75 llhs"></div>
                          </div>
                        </div>
                        <div class="w-row">
                          <div class="w-col w-col-6">
                            <div class="new-db-form-div full">
                              <label
                                for="First-Name-2"
                                class="field-label patient"
                              >On Oxygen Support:</label>
                              <div class="div-2">
                                <label class="radio-button-field-2 w-radio">
                                  <input
                                    type="radio"
                                    data-name="Radio 23"
                                    id="radio-23"
                                    name="radio"
                                    value="Radio"
                                    class="w-form-formradioinput radio-button-2 w-radio-input"
                                  />
                                  <span class="checkbox-label-2 w-form-label">Yes</span>
                                </label>
                                <label class="radio-button-field-2 w-radio">
                                  <input
                                    type="radio"
                                    data-name="Radio 24"
                                    id="radio-24"
                                    name="radio"
                                    value="Radio"
                                    class="w-form-formradioinput radio-button-3 w-radio-input"
                                  />
                                  <span class="checkbox-label-2 w-form-label">No</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="column-9 w-col w-col-6">
                            <div class="new-db-form-div">
                              <label for="First-Name-2" class="field-label patient">On Ventilator:</label>
                              <div class="div-2">
                                <label class="radio-button-field-2 w-radio">
                                  <input
                                    type="radio"
                                    data-name="Radio 25"
                                    id="radio-25"
                                    name="radio"
                                    value="Radio"
                                    class="w-form-formradioinput radio-button-2 w-radio-input"
                                  />
                                  <span class="checkbox-label-2 w-form-label">Yes</span>
                                </label>
                                <label class="radio-button-field-2 w-radio">
                                  <input
                                    type="radio"
                                    data-name="Radio 25"
                                    id="radio-25"
                                    name="radio"
                                    value="Radio"
                                    class="w-form-formradioinput radio-button-3 w-radio-input"
                                  />
                                  <span class="checkbox-label-2 w-form-label">No</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="div-block-75"></div>
                        <label for="First-Name-2" class="field-label patient center">
                          (Click below to
                          <strong>View available Wards</strong> in your facility OR to
                          <strong>transfer the patient</strong> to new facility)
                        </label>
                        <div class="div-block-77">
                          <div
                            data-duration-in="500"
                            data-duration-out="200"
                            data-easing="ease-in"
                            class="tabs-2 w-tabs"
                          >
                            <div class="tabs-menu-4 w-tab-menu">
                              <a
                                data-w-tab="Tab 1"
                                class="patient-transfer-tab w-inline-block w-tab-link"
                              >
                                <div class="text-block-17">1. Click to Allocate a Ward</div>
                              </a>
                              <a
                                data-w-tab="Tab 2"
                                class="patient-transfer-tab w-inline-block w-tab-link"
                              >
                                <div class="text-block-17">2. click to Transfer Patient</div>
                              </a>
                            </div>
                            <div class="tabs-content-4 w-tab-content">
                              <div data-w-tab="Tab 1" class="w-tab-pane">
                                <div class="div-block-45 new">
                                  <div class="div-block-64">
                                    <div class="ward-facility-column-header w-row">
                                      <div class="w-col w-col-3">
                                        <a href="#" class="link-block-3 _1 w-inline-block">
                                          <div class="legends">Ward</div>
                                        </a>
                                      </div>
                                      <div class="w-col w-col-3">
                                        <a href="#" class="link-block-3 w-inline-block">
                                          <div class="legends">severity</div>
                                        </a>
                                      </div>
                                      <div class="w-col w-col-3">
                                        <a href="#" class="link-block-3 w-inline-block">
                                          <div class="legends">covid ward type</div>
                                        </a>
                                      </div>
                                      <div class="w-col w-col-2">
                                        <a href="#" class="link-block-3 w-inline-block">
                                          <div class="legends">available beds</div>
                                        </a>
                                      </div>
                                      <div class="w-col w-col-1">
                                        <a href="#" class="link-block-3 _1 w-inline-block">
                                          <div class="legends">ACtion</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div class="div-block-42 ward">
                                      <div class="columns-7 recomended w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">20</div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">20</div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">20</div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">20</div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">20</div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">20</div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">20</div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">20</div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">20</div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">20</div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div data-w-tab="Tab 2" class="w-tab-pane">
                                <div class="div-block-45 facilities new-form">
                                  <div class="div-block-64">
                                    <div class="ward-facility-column-header w-row">
                                      <div class="w-col w-col-3">
                                        <a href="#" class="link-block-3 _1 w-inline-block">
                                          <div class="legends">facility name</div>
                                        </a>
                                      </div>
                                      <div class="w-col w-col-3">
                                        <a href="#" class="link-block-3 w-inline-block">
                                          <div class="legends">area</div>
                                        </a>
                                      </div>
                                      <div class="w-col w-col-2">
                                        <a href="#" class="link-block-3 w-inline-block">
                                          <div class="legends">facility type</div>
                                        </a>
                                      </div>
                                      <div class="w-col w-col-3">
                                        <div class="w-row">
                                          <div class="w-col w-col-6">
                                            <a href="#" class="link-block-3 w-inline-block">
                                              <div class="legends">covid status</div>
                                            </a>
                                          </div>
                                          <div class="w-col w-col-6">
                                            <a href="#" class="link-block-3 w-inline-block">
                                              <div class="legends">availability</div>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="w-col w-col-1">
                                        <a href="#" class="link-block-3 _1 w-inline-block">
                                          <div class="legends">ACtion</div>
                                        </a>
                                      </div>
                                    </div>
                                    <div class="div-block-42 ward">
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="w-row">
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">CCC</div>
                                            </div>
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">20</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="w-row">
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">CCC</div>
                                            </div>
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">20</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="w-row">
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">CCC</div>
                                            </div>
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">20</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="w-row">
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">CCC</div>
                                            </div>
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">20</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="w-row">
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">CCC</div>
                                            </div>
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">20</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="w-row">
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">CCC</div>
                                            </div>
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">20</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="w-row">
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">CCC</div>
                                            </div>
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">20</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="w-row">
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">CCC</div>
                                            </div>
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">20</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="w-row">
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">CCC</div>
                                            </div>
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">20</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="w-row">
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">CCC</div>
                                            </div>
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">20</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                      <div class="columns-7 w-row">
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">1</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="pd-list">Facility</div>
                                        </div>
                                        <div class="w-col w-col-2">
                                          <div class="pd-list">Moderate</div>
                                        </div>
                                        <div class="w-col w-col-3">
                                          <div class="w-row">
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">CCC</div>
                                            </div>
                                            <div class="w-col w-col-6">
                                              <div class="pd-list">20</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="w-col w-col-1">
                                          <a href="#" class="button-2 w-button">select</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="patient-form-submit-page-1">
                          <a
                            href="#"
                            class="signup-button status-form _2 cancel w-button"
                          >CLear form</a>
                          <a href="#" class="signup-button status-form _2 _1 w-button">Next</a>
                        </div>
                      </form>
                      <div class="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div class="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
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
import RemovePatient from '../components/RemovePatient.vue';


@Component({
  components: {
    sidebar: Sidebar,
    sidelogo: Sidelogo,
    removepatient: RemovePatient,
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['referredPatients', 'facility']),
  },
})
export default class AddPatient extends Vue {
  showModal = false;
}
</script>
