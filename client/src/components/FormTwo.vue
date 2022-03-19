<template>
  <div>
    <form-helper>
      <div slot="form-header">
          <h3>{{ formTitle }}</h3>
          <p>Enter your login details</p>
      </div>
      <div slot="form-content">
        <input type="text" placeholder="username" required />&nbsp;
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-buttons">
        <br />
        <button type="submit">Login</button>
      </div>
    </form-helper>
  </div>
</template>
<script>
import FormHelper from '../components/FormHelper.vue'
export default {
  name: "form-two",
  components: {
      'form-helper': FormHelper
  },
  data() {
    return {
      formTitle: "Login Form 2",
    };
  },
};
</script>
