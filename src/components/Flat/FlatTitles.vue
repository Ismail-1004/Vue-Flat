<template>
  <div class="home__content">
    <h1 class="home__content-title">Двухкомнатная квартира 45 кв.м.</h1>
    <div class="home__content-info d-flex justify-space-between">
      <ul class="home__content-list d-flex align-center pa-0">
        <li class="home__content-item">16 отзывов</li>
        <li class="home__content-item">
          <v-icon color="#FFC850"> mdi-star-outline </v-icon>
        </li>
        <li class="home__content-item"> <strong>4,2</strong> </li>
        <li class="home__content-item home__content-item-adress">
          {{ getFlat.name }}
        </li>
      </ul>

      <button class="home__content-btn">Показать на карте</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters(['getFlat'])
  },
  methods: {
    ...mapActions(['getFlatAction']),
    ...mapMutations(['fillFlatList'])
  },  

  async mounted () {
    await this.getFlatAction()
  }  
})
</script>

<style lang="scss">
.home {
  &__content {
    margin-top: 32px;

    &-title {
      font-family: 'Raleway';
      font-weight: 800;
      font-size: 32px;
    }
  
    &-info {
      margin-top: 13px;
    }
  
    &-item {
      font-family: 'Raleway';
      font-weight: 400;

      & strong {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
      }

      &-adress {
        font-family: 'Raleway';
        font-weight: 500;
      }

      &:not(:last-child) {
        margin-right: 12px;
      }
  
      &:last-child {
        margin-left: 30px;
        color: #afafaf;
      }

    }
  
    &-btn {
      color: #16697a;
      line-height: 19px;
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 700;
    }
  }
}
</style>