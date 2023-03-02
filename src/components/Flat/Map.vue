<template>
  <div class="map">
    <div class="map__content">
      <h3 class="map__content-title">Где вы будите</h3>

      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aafeb8970e183ab17c5e3f9564c438f5e786490c052a71dfc42990973f19988ce&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.map {
  &__content {
    &-title {
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;

      color: #000000;

      margin-bottom: 25px;
    }

    & iframe {
      width: 100%;
    }
  }
}
</style>