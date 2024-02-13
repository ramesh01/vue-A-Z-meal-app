<script setup lang="ts">
import { useRoute } from 'vue-router';
import store from '../store';
import { computed, onMounted, ref } from 'vue';
import MealItem from '@/components/MealItem.vue';
const route = useRoute();
const keyword = ref('');

onMounted(() => {
    if (!Array.isArray(route.params.name)) {
        keyword.value = route.params.name;
        searchMeals();
    }
})
const meals = computed(() => store.state.searchedMeals);
console.log(meals);

function searchMeals() {
    store.dispatch('searchedMeal', keyword.value);
}

</script>

<template>
    <div class="p-8 pd-0">
    <input type="text" 
       class="rounded border-2 border-gray-200 w-full" 
       placeholder="search for meals"
       @change="searchMeals" 
       v-model="keyword"/>
    </div>
    <div v-if="meals.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
       <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-else class="grid p-8">
        <p class="text-center">No results found!!</p>
    </div>
</template>