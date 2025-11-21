<script setup>
import { useMainStore } from "../stores/main";

const mainStore = useMainStore();
</script>

<template>
    <div class="p-2 text-sm opacity-50">v{{ mainStore.appVersion }}</div>
</template>
