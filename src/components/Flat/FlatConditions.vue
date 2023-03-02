<template>
  <div class="conditions">
    <div class="conditions__content d-flex justify-space-between">

      <div class="conditions__content-rules">
        <h4 class="conditions__content-title">
          Условия Бронирования
        </h4>

        <div class="conditions__content-exit d-flex align-center my-7">
          <div class="conditions__content-exitInfo">
            <strong>Заезд</strong>
            <span>после 14:00</span>
          </div>

          <div class="conditions__content-exitInfo">
            <strong>Отъезд</strong>
            <span>до 12:00</span>
          </div>

          <div class="conditions__content-exitInfo">
            <strong>Мин. срок проживания</strong>
            <span>от 1 суток</span>
          </div>
        </div>

        <div class="conditions__content-additionRules">
          <div class="conditions__content-additionRule">
            <img src="@/assets/images/FlatRulesIcons/child.png" class="img-width" alt="">
            <span> Можно с детьми любого возраста </span>
          </div>
          <div class="conditions__content-additionRule">
            <img src="@/assets/images/FlatRulesIcons/noSmok.png" class="img-width" alt="">
            <span> Курение запрещено </span>
          </div>
          <div class="conditions__content-additionRule">
            <img src="@/assets/images/FlatRulesIcons/pet.png" class="img-width" alt="">
            <span> Можно с питомцами по согласованию с хозяином жилья </span>
          </div>
          <div class="conditions__content-additionRule">
            <img src="@/assets/images/FlatRulesIcons/congrat.png" class="img-width" alt="">
            <span> Вечеринки и мероприятия по согласованию с хозяином <br> жилья </span>
          </div>
        </div>

      </div>

      <div class="conditions__content-cancel">
        <h4 class="conditions__content-title">
          Правила отмены 
        </h4>
        <p class="conditions__content-text">
          При отмене до прибытия, назначенного на 16 февр, вы получите частичный возврат. После этого сумма возврата будет зависеть от времени отмены
        </p>

        <button class="conditions__content-btn">
          Подробнее
        </button>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.conditions {
  &__content {
    &-rules {
      margin-right: 30px;
    }

    &-title {
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
    }

    &-exitInfo {
      border: 1px solid #e1e1e1;
      border-radius: 10px;
      padding: 10px 15px;
      display: flex;
      flex-direction: column;

      & strong {
        font-family: 'Raleway';
        font-weight: 800;
        font-size: 14px;
      }

      & span {
        font-family: 'Raleway';
        font-weight: 600;
        font-size: 14px;
      }

      &:not(:last-child) {
        margin-right: 30px;
      }
    }

    &-text {
      font-family: 'Raleway';
      font-weight: 600;
      font-size: 12px;

      color: #39393A; 
      margin: 28px 0 21px 0;

      max-width: 330px;
    }

    &-btn {
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      color: #16697A;
    }

    &-additionRule {
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-bottom: 21px;
      }

      & span {
        font-family: 'Raleway';
        font-weight: 600;
        font-size: 14px;

        color: #39393A;
      }
    }
  }
}
</style>