<template>
  <div class="roomInfo my-10">
    <ul class="roomInfo__list d-flex">
      <li class="roomInfo__list-item">2 гостя</li>
      <li class="roomInfo__list-item"> 2 двухспальные кровати </li>
      <li class="roomInfo__list-item"> 2 двухспальные кровати </li>
    </ul>

    <div class="roomInfo__more">
      <p class="roomInfo__more-text">
        Классический двухместный номер - наиболее популярный вариант размещения среди наших гостей. В номере полностью оборудованная кухня со всеми принадлежностями.
      </p>

      <button class="roomInfo__more-btn"> Подробнее </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.roomInfo {
  &__list {
    background: none !important;
    padding: 0;

    &-item {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
  
      &:not(:last-child) {
        margin-right: 24px;
      }
    }
  }

  &__more {
    &::before {
      margin: 40px 0;
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: #D9D9D9;
    }

    &-text {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
    }

    &-btn {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 700;
      font-size: 10px;
      line-height: 12px;

      color: #16697A;
    }
  }

}
</style>