<script setup lang="ts">
import httpClient from '@/httpClient';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const meal: any = ref({});
const route = useRoute();

onMounted(async () => {
    const response: any = await httpClient.get((`lookup.php?i=${route.params.id}`));
    console.log(response);
    meal.value = response.data.meals[0] || {};
})
</script>
<template>
    <div class="max-w-[800px] mx-auto p-8" v-if="meal">
        <h1 class="text-5xl font-bold mb-5 mt-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">
        <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
           <div><strong class="font-bold">Category:</strong>{{ meal.strCategory }}</div> 
           <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div> 
           <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div> 
        </div>
        <div class="my-3">{{ meal.strInstructions }}</div>
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                <ul>
                    <template v-for="(el, index) of new Array(20)">
                        <li v-if="meal[`strIngredient${index+1}`]">
                        {{index+1}}. {{ meal[`strIngredient${index+1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div
            ><h2 class="text-2xl font-semibold mb-3">Measures</h2>
                <ul>
                    <template v-for="(el, index) of new Array(20)">
                        <li v-if="meal[`strMeasure${index+1}`]">
                        {{index+1}}. {{ meal[`strMeasure${index+1}`] }}
                        </li>
                    </template>
                </ul>
             </div>
        </div>
        
    </div>
</template>