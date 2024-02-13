<script setup lang="ts">
import store from '@/store';
import { computed, onMounted } from 'vue';

const ingredients = computed(() => store.state.ingredientsList);
onMounted(() => {
    store.dispatch('getIngredientsList');
})
</script>

<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        <router-link :to="{name: 'byIngredient', params: {ingredient: ing.strIngredient}}" class="block bg-white rounded shadow p-3 mb-3" 
        v-for="ing of ingredients" :key="ing.idIngredient">
        <h3 class="text-2xl font-bold mb-2">{{ ing.strIngredient }} </h3>
        <p>{{ ing.strDescription || "No Description found" }}</p>
    </router-link>
    </div>
</template>