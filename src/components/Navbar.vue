<template>
    <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
         <router-link class="px-5 inline-flex items-center h-full" :to="{name: 'home'}">Home</router-link>
         <div class="flex items-center gap-4">
            <router-link :to="{name: 'byName'}" class="inline-flex items-center h-full hover:bg-purple-200">Search meals</router-link>
            <router-link :to="{name: 'byLetter'}" class="inline-flex items-center h-full hover:bg-purple-200">Meals By Letters</router-link>
            <router-link :to="{name: 'ingredients'}" class="inline-flex items-center h-full hover:bg-purple-200">Meals By incredients</router-link>
         </div>
      </header>
</template>