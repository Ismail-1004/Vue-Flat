<template>
  <div class="flat">
    <FlatImages />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FlatImages from './FlatImages.vue';

export default Vue.extend({
  components: {
    FlatImages
  }
})
</script>