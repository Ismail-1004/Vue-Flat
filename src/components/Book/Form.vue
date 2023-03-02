<template>
  <v-form class="book__form pa-6" @submit.prevent="">
    <div class="book__form-date d-flex justify-space-between">
      <v-text-field
        label="Заселение"
        class="mr-4 book__form-input"
        outlined
      ></v-text-field>
      <v-text-field
        label="Выезд"
        class="book__form-input"
        outlined
      ></v-text-field>
    </div>
    <v-select
      class="book__form-input"
      :items="items"
      outlined
      offset-y
    ></v-select>

    <v-btn color="#16697A" type="submit" class="book__form-btn">
      Забронировать
    </v-btn>

    <ul class="book__form-list mt-4">
      <li class="book__form-item d-flex justify-space-between align-center">
        <span>Цена за сутки</span>
        <span>3 000 руб </span>
      </li>
      <li class="book__form-item d-flex justify-space-between align-center">
        <span>Работа сервиса</span>
        <span>400 руб </span>
      </li>
      <li class="book__form-item d-flex justify-space-between align-center">
        <span>Итого за 8 суток:</span>
        <strong> 24 400 руб </strong>
      </li>
    </ul>
  </v-form>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    items: ["2 взр + 1 реб"],
  }),
});
</script>

<style lang="scss" scoped>
.book__form {
  border: 1px solid #e1e1e1;
  border-radius: 10px;

  &-btn {
    width: 100%;
    color: white;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 800;
  }

  &-list {
    padding: 0;
  }

  &-input {
    font-family: "VelaSans-Medium";
    font-style: normal;
    font-weight: 500;
  }

  &-item {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &:last-child {
      margin-top: 20px;
      font-family: "Raleway";

      strong {
        font-style: normal;
        font-weight: 700;
      }
    }
  }
}
</style>