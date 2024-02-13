<script setup lang="ts">
import MealItem from '@/components/MealItem.vue';
import store from '@/store';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredients);
onMounted(() => {
    store.dispatch('searchMealsByIngredients', route.params.ingredient);
})
</script>

<template>
    <div class="p-8">
        <div v-if="meals.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
       <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    </div>
</template>