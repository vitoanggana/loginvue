<script setup>
import useVuelidate from '@vuelidate/core';
import { required, email, helpers, minLength } from '@vuelidate/validators';
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

const form = ref({
  firstname: '',
  lastname: '',
  email: '',
  psw: '',
})

const rules = computed(() => ({
  firstname: { required: helpers.withMessage('First Name tidak boleh kosong', required) },
  lastname: { required: helpers.withMessage('Last Name tidak boleh kosong', required) },
  psw: { required: helpers.withMessage('Password tidak boleh kosong', required), minLength: helpers.withMessage('Password minimal 8 karakter', minLength(8)) },

  email: { required: helpers.withMessage('Email tidak boleh kosong', required), email: helpers.withMessage('Format email tidak valid', email) },
}))

const v$ = useVuelidate(rules, form);

const submitRegister = async () => {
  const formIsCorrect = await (v$.value.$validate());
  if (!formIsCorrect) return;
  console.log(form.value);
}

</script>

<template>
  <form @submit.prevent="submitRegister">
    <div class="logintext">
      <h1>Create your Account</h1>
    </div>

    <div class="container">

      <div class="tono">
        <label for="firstname" class="email"><b>First Name</b></label>
        <input :class="{ 'border-danger': v$.firstname.$error }" type="text" placeholder="First Name"
          v-model="form.firstname">
        <span v-if="v$.firstname.$error" class="text-danger error-message">
          {{ v$.firstname.$errors[0].$message }}
        </span>
      </div>

      <div class="tono">
        <label for="lastname" class="email"><b>Last Name</b></label>
        <input :class="{ 'border-danger': v$.lastname.$error }" type="text" placeholder="Second Name"
          v-model="form.lastname">
        <span v-if="v$.lastname.$error" class="text-danger error-message">
          {{ v$.lastname.$errors[0].$message }}
        </span>
      </div>

      <div class="tono">
        <label for="email" class="email"><b>Email Address</b></label>
        <input :class="{ 'border-danger': v$.email.$error }" type="text" placeholder="Email Address"
          v-model="form.email">
        <span v-if="v$.email.$error" class="text-danger error-message">
          {{ v$.email.$errors[0].$message }}
        </span>
      </div>

      <div class="tono">
        <label for="psw" class="pw"><b>Password</b></label>
        <input :class="{ 'border-danger': v$.psw.$error }" type="password" placeholder="Enter Password"
          v-model="form.psw" minlength="8">
        <span v-if="v$.psw.$error" class="text-danger error-message">
          {{ v$.psw.$errors[0].$message }}
        </span>
      </div>


      <div class="text">
        <label>
          <input type="checkbox" checked="checked" v-model="agree"> To register with us please tick to agree to our
          <a class="bluetext">Terms and Condition</a>
        </label>
      </div>


      <button type="submit">Register</button>



    </div>

  </form>
  <b>
  </b>
  <div class="registertext">
    <p>Already have account? <router-link to="/">Sign In</router-link>
    </p>
  </div>

</template>

<style scoped>

.border-danger{
  border: 7px solid red !important;
}
.text-danger {
  color: red;
}

.text {
  margin: 25px 0 25px 0;
  color: black;
}

.bluetext {
  color: #478CCC;
}

h1 {
  padding-top: 25px;
}

a {
  color: #f1f1f1;
}

.registertext {
  padding-top: 30px;
  text-align: center;
}

form {
  background-color: #f1f1f1;
  border-radius: 3px;
  width: 500px;
  height: 770px;
}

input[type=text],
input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}

.email {
  color: #3D4954;
  font-weight: bold;
}

.pw {
  color: #3D4954;
}

/* Set a style for all buttons */
button {
  background-color: #478CCC;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 3px;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #478CCC;
}

/* Center the avatar image inside this container */
.logintext {
  color: #3D4954;
  text-align: left;
  margin: 35px 0 12px 33px;
}

/* Add padding to containers */
.container {
  padding: 32px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }

  .cancelbtn {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
