<script setup>
import { useMainStore } from "./stores/main";

const mainStore = useMainStore();
</script>

<template>
    <h1 class="p-2 text-2xl">{{ mainStore.appName }}</h1>
    <RouterView></RouterView>
</template>
