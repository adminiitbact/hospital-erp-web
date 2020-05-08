<template>
  <div class="div-block">
    <div class="columns-3 w-row">
      <div class="w-col w-col-6 w-col-stack">
        <div class="div-block-2">
          <div class="section">
            <div class="div-block-27">
              <div class="logo-div"></div>
              <div class="heading-white side-panel">Welcome to</div>
              <div class="heading-white side-panel bold">cov2 web portal</div>
            </div>
          </div>
        </div>
      </div>
      <div class="column w-col w-col-6 w-col-stack">
        <div class="form-div login">
          <div class="section-3">
            <div class="login-div">
              <div class="form-block-2 w-form">
                <form
                  v-on:submit.prevent="submit"
                  class="form"
                >
                  <div class="form-section-div">
                    <div class="title-div">
                      <div class="heading">Login</div>
                    </div>
                    <div class="login-formfield-div">
                      <label for="Username" class="field-label">Username</label
                      ><input
                        type="email"
                        class="login-text-field w-input"
                        maxlength="256"
                        v-model="username"
                        placeholder="Username"
                        required
                      />
                    </div>
                    <div class="login-formfield-div">
                      <label for="Password" class="field-label">Password</label
                      ><input
                        type="password"
                        class="login-text-field password w-input"
                        maxlength="256"
                        v-model="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    value="Login"
                    class="login-button w-button"
                  >Login</button>
                  <!-- <div class="div-block-9">
                      <a href="#" class="field-label links">Forgot Password?</a>
                      <div class="field-label centered">
                        Not a member?
                        <a href="profile-form.html"><strong>Signup</strong></a>
                        </div>
                    </div>-->
                </form>
              </div>
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
import firebase from 'firebase/app';
import auth from '../firebaseConfig';
import utils from '../utils/utils';

@Component
export default class Login extends Vue {
  username = '';

  password = '';

  submit() {
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(
        () => {
          auth.signInWithEmailAndPassword(
            this.username, this.password,
          ).then(
            () => {
              auth.onAuthStateChanged((user) => {
                if (user) {
                  user.getIdToken(true).then(
                    (authToken) => {
                    // Send token to your backend via HTTPS
                      utils.setAuthTokenOnLocalStorage(authToken);
                      this.$router.push({ name: 'status-form' });
                    },
                  );
                }
              });
            },
            (error) => {
              console.log(error.message);
              alert(`Error in login: ${error.message}`); // disable-no-alert
            },
          );
        },
      )
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>
