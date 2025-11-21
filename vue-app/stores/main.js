import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("main", () => {
    const user = ref(null);

    async function fetchUser() {
        const response = await axios.get(route("users.me"));
        user.value = response.data;
    }

    return {
        fetchUser,
        user,
        appVersion: document.body.dataset.appVersion,
        appName: document.body.dataset.appName,
        csrfToken: document.body.dataset.csrfToken,
    };
});
