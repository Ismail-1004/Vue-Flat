<template>
  <div class="book">
    <Form />
    <Response />
  </div>
</template>

<script>
import Vue from "vue";
import Form from "../Book/Form.vue"; 
import Response from '../Book/Response.vue'

export default Vue.extend({
  components: {
    Form,
    Response
  }
});
</script>

<style lang="scss" scoped>
.book {
  min-width: 28% !important;
}
</style>