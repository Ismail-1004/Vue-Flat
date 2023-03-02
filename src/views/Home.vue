<template>
  <div class="home">
     <v-container>
       <goBack 
         url="/"
       />
 
       <div class="home__content">
         <FlatTitles />
         <div class="home__content-content d-flex justify-space-between mt-7">
           <Flat class="mr-2"/>
           <Book/>
         </div>
       </div>
 
     </v-container>
  </div>
 </template>
 
 <script>
 import Vue from 'vue';
 import goBack from '@/components/goBack.vue';
 import Flat from '@/components/Flat/Flat.vue'
 import FlatTitles from '@/components/Flat/FlatTitles.vue'
 import Book from '@/components/Book/Book.vue'
 
 export default Vue.extend({
   name: 'Home',
   components: {
     goBack,
     Flat,
     FlatTitles,
     Book
   },
 });
 </script>
 
 <style lang="scss">
 .home {
   padding: 73px 0;
 }
 </style>
 