<script setup>

</script>

<template>
<form method="post">
  <div class="logintext">
    <h1>Login to your Account</h1>
  </div>

  <div class="container">
    <label for="uname" class="email"><b>Email Address</b></label>
    <input type="text" placeholder="Email Address" name="uname" required>

    <label for="psw" class="pw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button type="button">Login</button>

  </div>

  <!-- <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Register</button>
  </div> -->
</form>
<b>
</b>
 <div class="registertext">
    <p>Don't have an account?  <a href="">Register</a></p> 

<b>
</b>
  
    <p>Forgotten your password?  <a href="">Recover Password</a></p> 
  </div>

</template>

<style scoped>
a{
  color: #f1f1f1;
}
.registertext{
  padding-top: 30px;
  text-align: center;
}
/* Bordered form */
form {
  background-color: #f1f1f1;
  border-radius: 3px;
  width: fit-content;
  height: fit-content;
}

/* Full-width inputs */
input[type=text], input[type=password] {
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
