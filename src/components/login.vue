<script setup>
import useVuelidate from '@vuelidate/core';
import { required, email, helpers, minLength } from '@vuelidate/validators';
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

const form = ref({
    email: '',
    psw: '',
})

const rules = computed(() => ({
    email: { required: helpers.withMessage('Email tidak boleh kosong', required), email: helpers.withMessage('Format email tidak valid', email) },
    psw: { required: helpers.withMessage('Password tidak boleh kosong', required), minLength: helpers.withMessage('Password minimal 8 karakter', minLength(8)) },
}))

const v$ = useVuelidate(rules, form);

const submitLogin = async () => {
    const formIsCorrect = await (v$.value.$validate());
    if (!formIsCorrect) return;
    console.log(form.value);
}

</script>

<template>
    <form @submit.prevent="submitLogin">
        <div class="logintext">
            <h1>Login to your Account</h1>
        </div>

        <div class="container">
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

            <button type="submit">Login</button>

        </div>

        <!-- <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Register</button>
  </div> -->
    </form>
    <b>
    </b>
    <div class="registertext">
        <p>Don't have an account? <router-link to="/register">Register</router-link>
        </p>

        <b>
        </b>

        <p>Forgotten your password? <a href="">Recover Password</a></p>
    </div>

</template>

<style scoped>
.border-danger{
  border: 7px solid red !important;
}
.text-danger {
  color: red;
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

/* Bordered form */
form {
    background-color: #f1f1f1;
    border-radius: 3px;
    width: 500px;
    height: 450px;
}

/* Full-width inputs */
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
    margin: 24px 0 12px 33px;
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
