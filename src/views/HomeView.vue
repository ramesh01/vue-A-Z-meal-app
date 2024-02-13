<script setup lang="ts">
import store from '../store';
import { computed } from 'vue';

const meals = computed(() => store.state.meals);

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

</script>

<template>
  <div class="flex flex-col p-8">
    <input type="text" 
    class="rounded border-2 border-gray-200 w-full" 
    placeholder="search for meals" />
  </div>
</template>
