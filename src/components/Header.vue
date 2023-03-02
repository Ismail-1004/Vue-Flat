<template>
  <v-container fluid class="pa-0">
    <v-app-bar color="#39393A" dark>
      <img src="@/assets/images/logo.png" alt="logo">
      <v-list class="pa-0 ml-15" color="#39393A" flat>
        <v-list-item-group
          color="indigo"
          class="d-flex"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >

            <v-list-item-content>
              <router-link :to="item.url" class="v-router-link"> {{ item.title }} </router-link>
            </v-list-item-content>

          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-spacer />

      <v-list class="pa-0" color="#39393A" flat>
        <v-list-item-group
          color="indigo"
          class="d-flex"
        >
          <v-list-item class="d-flex align-center">

            <v-list-item-content class="balance">
              <v-list-item-title class="balance__title"> Баланс: <span class="balance__title-span ml-2"> 0.00р. </span> </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="d-flex align-center">
            <v-list-item-content class="pa-0">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#4A4A4A"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    class="v-btn-vue"
                  >
                    <img src="@/assets/images/user.png" alt="user" left>
                    <span class="mx-5 dropTitle"> Личный кабинет  </span>
                    <v-icon right class="v-icon"> mdi-chevron-down </v-icon>
                  </v-btn>
                </template>

                <v-list color="#4A4A4A">
                  <v-list-item >
                    <v-list-item-title class="text-center">
                      <span class="mx-5 exit-title dropTitle"> Выход  </span>
                      <v-icon right class="v-icon-exit"> mdi-exit-to-app </v-icon>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
                
              </v-menu>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-app-bar>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    items: [
      {title: 'Поиск', url: '/'},
      {title: 'Заказы', url: '/'},
      {title: 'Подборка', url: '/'}
    ]
  })
})
</script>
