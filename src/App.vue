<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <div class="bg-gray-100 h-full">
      <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
         <router-link class="px-5 inline-flex items-center h-full" :to="{name: 'home'}">Home</router-link>
         <div class="flex items-center gap-1">
            <router-link :to="{}" class="inline-flex items-center h-full hover:bg-purple-200">Search meals</router-link>
            <router-link :to="{}" class="inline-flex items-center h-full hover:bg-purple-200">Meals by Letters</router-link>
            <router-link :to="{}" class="inline-flex items-center h-full hover:bg-purple-200">Meals by incredients</router-link>
         </div>
      </header>
      <main>
         <RouterView />
      </main>
   </div>
</template>

<style scoped>

</style>
