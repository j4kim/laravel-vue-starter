<script setup>
import { useMainStore } from "../stores/main";

const mainStore = useMainStore();

mainStore.fetchUser();
</script>

<template>
    <div class="p-2">
        <p v-if="mainStore.user">Bienvenue {{ mainStore.user.name }}</p>
        <p v-else>Vous n'êtes pas authentifié</p>
        <small class="text-sm opacity-50">v{{ mainStore.appVersion }}</small>
    </div>
</template>
