<script setup>
import { useMainStore } from "../stores/main";

const mainStore = useMainStore();
</script>

<template>
    <div>Bienvenue {{ mainStore.user.name }}</div>
</template>
