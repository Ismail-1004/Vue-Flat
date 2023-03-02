<template>
  <div class="reviews">
    <div class="reviews__content">
      <div class="reviews__content-title">Отзывы</div>
      <div class="reviews__content-content mt-10">
        <img src="@/assets/images/Users/man.png" alt="">
        <div class="reviews__content-review ml-6">
          <div class="reviews__content-header">
            <div class="reviews__content-user d-flex align-center">
              <h4 class="reviews__content-name"> Константин </h4>
              <span class="ml-2"> май 2022 </span>
            </div>

            <div class="reviews__content-rate">
              <v-icon color="#FFC850" class="mr-3"> mdi-star-outline </v-icon>
              <span> 4,5 </span>
            </div>
          </div>

          <div class="reviews__content-main mt-2">
            <p class="reviews__content-text">
              Супер жилье. Я в восторге! Константин очень гостеприимный, решили с ним все проблемы. Дом очень уютный. Настолько, что не хотелось уезжать
            </p>
          </div>
        </div>
      </div>
      <div class="reviews__content-content mt-10">
        <img src="@/assets/images/Users/women.png" alt="">
        <div class="reviews__content-review ml-6">
          <div class="reviews__content-header">
            <div class="reviews__content-user d-flex align-center">
              <h4 class="reviews__content-name"> Екатерина </h4>
              <span class="ml-2"> май 2022 </span>
            </div>

            <div class="reviews__content-rate">
              <v-icon color="#FFC850" class="mr-3"> mdi-star-outline </v-icon>
              <span> 4,5 </span>
            </div>
          </div>

          <div class="reviews__content-main mt-2">
            <p class="reviews__content-text">
              Супер жилье. Я в восторге! Константин очень гостеприимный, решили с ним все проблемы. Дом очень уютный. Настолько, что не хотелось уезжать. Мы с Константином всегда поддерживали связь, он помогал мне, направлял, подсказывал. Кстати, когда я приехала, Костя меня угостил чаем, дал полотенца, все рассказал  и показал. Ночью в квартире было холодно, но Костя мне помог – созвонились с ним и он принес мне еще одно теплое одеяло.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reviews {
  &__content {
    &-title {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;

      color: #000000;
    }

    &-content {
      display: flex;
      align-items: center;
    }

    &-user {
      & span {
        font-family: 'VelaSans-Regular';
        font-weight: 400;
        font-size: 14px;

        color: #8C8C8C;
      }
    }

    &-rate {
     & span {
      font-family: 'VelaSans-Regular';
        font-weight: 400;
        font-size: 14px;

        color: #8C8C8C;
     }
    }

    &-text {
      font-family: 'VelaSans-Medium';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;

      color: #4A4A4A;

    }

    &-name {
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      color: #39393A;
    }

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>