<script setup lang="ts">
import MealItem from '@/components/MealItem.vue';
import store from '@/store';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const meals = computed(() => store.state.mealsByLetter);
const route = useRoute();

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter);
});

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter);
})

</script>

<template>
    <div class="flex justify-center gap-2 mt-2">
      <router-link :to="{name: 'byLetter', params: {letter: alphabet}}" v-for="alphabet of alphabets">{{ alphabet }}</router-link>
    </div>
    <div v-if="meals.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
       <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>