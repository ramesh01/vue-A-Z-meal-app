<script setup lang="ts">
const {meal}: any = defineProps({
    meal: {
        required: true,
    }
})
</script>
<template>
     <div class="bg-white shadow rounded-xl">
           <div class="p-3">
               <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
                <img loading="lazy" :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover" /></router-link>
               <h3 class="pt-2 pb-3 font-semibold">{{ meal.strMeal }}</h3>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
           </div>
        </div>
    <!-- <div class="flex flex-col p-8">
    <div class="flex justify-center gap-2 mt-2">
      <router-link :to="{name: 'byLetter', params: {letter: alphabet}}" v-for="alphabet of alphabets">{{ alphabet }}</router-link>
    </div>
  </div> -->
</template>