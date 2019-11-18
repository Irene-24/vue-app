<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form One - Contact Us</h3>
        <p>Fill in this form to contact us</p>
      </div>
      <div slot="form-fields">
        <label for="username">
          Username
          <br />
          <input type="text" placeholder="username" name="username" id="username" required />
        </label>
        <label>
          Your Message:          
          <br />
          <textarea rows="5"></textarea>
        </label>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Send</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
// Imports
import formHelper from "./formHelper.vue";
export default {
  components: {
    "form-helper": formHelper
  },
  data() {
    return {};
  },
  methods: {
    handleSubmit: function() {
      alert("thanks for submitting form one & contacting us");
    }
  }
};
</script>

<style>
</style>