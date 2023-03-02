<template>
  <v-app>
    <HeaderVue />

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
import Vue from 'vue';
import HeaderVue from './components/Header.vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    HeaderVue
  }
});
</script>
