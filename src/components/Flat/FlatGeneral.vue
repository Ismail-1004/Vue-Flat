<template>
  <div class="comfort">
    <div class="comfort__content d-flex justify-space-between">
      <div class="comfort__content-kitchen">
        <h4 class="flat__title"> Оборудование для безопасности </h4>
        <div class="comfort__content-items d-flex">
          <div>
            <div class="comfort__content-item d-flex align-center">
              <img src="@/assets/images/FlatInfo/fire.png" class="img-width" alt="">
              <span class="flat__img-text"> Детектор дыма </span>
            </div>
            <div class="comfort__content-item d-flex align-center mt-5">
              <img src="@/assets/images/FlatInfo/medic.png" class="img-width" alt="">
              <span class="flat__img-text"> Аптечка первой помощи </span>
            </div>
          </div>
          <div class="d-flex flex-column ml-4">
            <div class="comfort__content-item d-flex align-center">
              <img src="@/assets/images/FlatInfo/book.png" class="img-width" alt="">
              <span class="flat__img-text"> Памятка безопасности </span>
            </div>
          </div>
        </div>
      </div>

    </div>  
  </div>
</template>

<style lang="scss" scoped>
.comfort {
  margin: 40px 0 63px 0;

  &__content {
    &-items {
      margin-top: 40px;
    }
  }
}
</style>