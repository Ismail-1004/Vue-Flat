<template>
  <div class="flat">
    <div class="flat__content">
      <div class="flat__content-images d-flex align-center">
        <div class="flat__content-image mr-5 d-flex align-center">
          <img
            src="@/assets/images/f1.png"
            class="flat__content-mainImg"
            alt=""
          />
        </div>
        <div class="flat__content-imgs">
          <img src="@/assets/images/f2.png" class="flat__content-img" alt="" />
          <img src="@/assets/images/f3.png" class="flat__content-img" alt="" />
          <img src="@/assets/images/f4.png" class="flat__content-img" alt="" />
          <img src="@/assets/images/f5.png" class="flat__content-img" alt="" />
        </div>
      </div>
      <div class="flat__content-repost mt-10">
        <v-btn class="mr-5 flat__content-btn">
          <v-icon class="flat__content-icon"> mdi-heart-outline </v-icon>
          В подборку
        </v-btn>
        <v-btn class="flat__content-btn">
          <v-icon class="flat__content-icon"> mdi-share-outline </v-icon>
          Поделиться
        </v-btn>
      </div>

      <FlatInfoVue />
      <FlatConditions />
      <FlatComforts />
      <FlatGeneral />
      <Reviews />
      <Map />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FlatInfoVue from './FlatInfo.vue';
import FlatConditions from './FlatConditions.vue';
import FlatComforts from './FlatComforts.vue';
import FlatGeneral from './FlatGeneral.vue'
import Reviews from './Reviews.vue';
import Map from './Map.vue'

export default Vue.extend({
  components: { FlatInfoVue, FlatConditions, FlatComforts, FlatGeneral, Reviews, Map }
})
</script>

<style lang="scss" scoped>
.flat {
  &__content {
    &-mainImg {
      width: 360px;
    }

    &-img {
      width: 210px;
    }

    &-imgs {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    &-btn {
      color: #56B4D1;
      font-family: 'Raleway';
      font-weight: 600;
    }

    &-icon {
      margin-right: 10px;
    }
  }
}
</style>