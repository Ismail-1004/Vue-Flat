<template>
  <div class="response pa-6 mt-6">
   <div class="response__header d-flex justify-space-between">

    <div class="response__header-rate">
      <h4 class="response__header-title"> Оценка гостей </h4>
      <button class="response__header-btn"> Посмотреть </button>
    </div>

    <div class="response__header-rateInfo">
      <ul class="response__header-list d-flex">
        <li class="response__header-item"> 16 отзывов </li>
        <li class="response__header-item mx-2"> <v-icon color="#FFC850"> mdi-star-outline </v-icon> </li>
        <li class="response__header-item"> <strong> 4.2 </strong> </li>
      </ul>
    </div>

   </div>

   <div class="response__main mt-8">
    <div class="response__main-range d-flex align-center justify-center" v-for="(range, i) in ranges" :key="i">
      <span class="response__main-rangeTitle"> {{ range.title }} </span>
      <div class="response__main-rangeProgress mx-3">
        <div class="response__main-rangeProgress-line" :style="{ width: range.width + '%' }"></div>
      </div>
      <span class="response__main-rangeRate"> {{ range.rate }} </span>
    </div>
   </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    ranges: [
      {title: 'Цена качества', width: 50, rate: '4.5'},
      {title: 'Современность заселения', width: 100, rate: '5.0'},
      {title: 'Чистота', width: 40, rate: '4.0'},
      {title: 'Соответствие фото', width: 50, rate: '4.5'},
      {title: 'Удобство расположения', width: 15, rate: '1.0'},
    ]
  })
})
</script>

<style lang="scss">
.response {
  border: 1px solid #e1e1e1;
  border-radius: 10px;

  &__header {
    &-title {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 800;
    }

    &-btn {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 700;
      color: #16697A;
      font-size: 10px;
    }

    &-item {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;

      & strong {
        font-weight: 700;
      }
    }

    &-list {
      padding: 0 !important;
    }
  }

  &__main {
    &-range {
      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }

    &-rangeTitle {
      font-size: 10px;
      width: 100px;
      text-align: right;
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 400;
    }
      
    &-rangeProgress {
      background: #D9D9D9;
      width: 80%;
      height: 5px;
      border-radius: 30px;
      position: relative;

      &-line {
        position: absolute;
        height: 5px;
        top: 0;
        left: 0;
        background: #16697A;
        border-radius: 30px;
      }
    }

    &-rangeRate {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
    }
  }
}



</style>