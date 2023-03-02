<template>
  <div class="comfort">
    <div class="comfort__content d-flex justify-space-between">
      <div class="comfort__content-kitchen">
        <div>
          <h4 class="flat__title"> Кухонные приборы </h4>
          <div class="comfort__content-items d-flex">
            <div class="comfort__content-item d-flex align-center mr-10">
              <img src="@/assets/images/FlatKitchen/dishWash.png" class="img-width" alt="">
              <span class="flat__img-text"> Посудомоечная <br> машина </span>
            </div>
            <div class="comfort__content-item d-flex align-center">
              <img src="@/assets/images/FlatKitchen/microwave.png" class="img-width" alt="">
              <span class="flat__img-text"> Микроволновая печь </span>
            </div>
          </div>
          <div class="comfort__content-item d-flex align-center mt-5">
            <img src="@/assets/images/FlatKitchen/fridge.png" class="img-width" alt="">
            <span class="flat__img-text"> Холодильник </span>
          </div>
          <div class="comfort__content-item d-flex align-center mt-5">
            <div style="height: 20px;"></div>
          </div>
        </div>

        <div class="more mt-10">
          <div class="comfort__content-kitchen">
            <h4 class="flat__title"> Общее </h4>
            <div class="comfort__content-items d-flex">
              <div>
                <div class="comfort__content-item d-flex align-center">
                  <img src="@/assets/images/Generals/Elevator.png" class="img-width" alt="">
                  <span class="flat__img-text"> Лифт </span>
                </div>
                <div class="comfort__content-item d-flex align-center mt-5">
                  <img src="@/assets/images/FlatRulesIcons/noSmok.png" class="img-width" alt="">
                  <span class="flat__img-text"> Курить запрещено </span>
                </div>
                <div class="comfort__content-item d-flex align-center mt-5">
                  
                  <span class="flat__img-text"></span>
                </div>
              </div>
              <div class="d-flex flex-column ml-4">
                <div class="comfort__content-item d-flex align-center">
                  <img src="@/assets/images/FlatRulesIcons/pet.png" class="img-width" alt="">
                  <span class="flat__img-text"> Можно с животными </span>
                </div>
                <div class="comfort__content-item d-flex align-center mt-5">
                  <img src="@/assets/images/Generals/wi-fi.png" class="img-width" alt="">
                  <span class="flat__img-text"> Wi-fi </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="comfort__content-comfort">
        <h4 class="flat__title"> Удобства </h4>

        <div>
          <div class="comfort__content-items d-flex">
            <div>
              <div class="comfort__content-item d-flex align-center">
                <img src="@/assets/images/FlatComfort/hairDrayer.png" class="img-width" alt="">
                <span class="flat__img-text"> Фен </span>
              </div>
              <div class="comfort__content-item d-flex align-center mt-5">
                <img src="@/assets/images/FlatComfort/boiler.png" class="img-width" alt="">
                <span class="flat__img-text"> Нагревательный <br> котел </span>
              </div>
              <div class="comfort__content-item d-flex align-center mt-5">
                <img src="@/assets/images/FlatComfort/Towels.png" class="img-width" alt="">
                <span class="flat__img-text"> Полотенца </span>
              </div>
            </div>
            <div class="d-flex flex-column ml-4">
              <div class="comfort__content-item d-flex align-center">
                <img src="@/assets/images/FlatComfort/bathroom.png" class="img-width" alt="">
                <span class="flat__img-text"> Раздельный санузел </span>
              </div>
              <div class="comfort__content-item d-flex align-center mt-5">
                <img src="@/assets/images/FlatComfort/WashingMachine.png" class="img-width" alt="">
                <span class="flat__img-text"> Стиральная машина </span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10">
          <div class="comfort__content-comfort room">
            <h4 class="flat__title"> Комната </h4>

            <div class="comfort__content-items d-flex">
              <div>
                <div class="comfort__content-item d-flex align-center">
                  <img src="@/assets/images/Generals/conditioner.png" class="img-width" alt="">
                  <span class="flat__img-text"> Кондиционер </span>
                </div>
                <div class="comfort__content-item d-flex align-center mt-5">
                  <img src="@/assets/images/Generals/Safe.png" class="img-width" alt="">
                  <span class="flat__img-text"> Сейф </span>
                </div>
                <div class="comfort__content-item d-flex align-center mt-5">
                  <img src="@/assets/images/Generals/BedSheets.png" class="img-width" alt="">
                  <span class="flat__img-text"> Постельное белье </span>
                </div>
              </div>
              <div class="d-flex flex-column ml-4">
                <div class="comfort__content-item d-flex align-center">
                  <img src="@/assets/images/Generals/Table.png" class="img-width" alt="">
                  <span class="flat__img-text"> Стол </span>
                </div>
                <div class="comfort__content-item d-flex align-center mt-5">
                  <img src="@/assets/images/Generals/tv.png" class="img-width" alt="">
                  <span class="flat__img-text"> TV </span>
                </div>
                <div class="comfort__content-item d-flex align-center mt-5">
                  <img src="@/assets/images/Generals/Phone.png" class="img-width" alt="">
                  <span class="flat__img-text"> Телефон </span>
                </div>
              </div>
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