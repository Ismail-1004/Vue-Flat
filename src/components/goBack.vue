<template>
  <div>
    <router-link :to="url" class="goBack"> 
      <v-icon class="mr-0"> mdi-chevron-left </v-icon>
      <span class="goBack__span"> Назад </span>
    </router-link>
  </div>
</template>

<style lang="scss">
.goBack {
  color: #AFAFAF !important;

  &__span {
    font-family: 'Raleway';
  font-weight: 700;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['url']
})
</script>