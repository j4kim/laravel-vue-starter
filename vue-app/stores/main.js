import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { route } from "../../vendor/tightenco/ziggy";

export const useMainStore = defineStore("main", () => {
    const user = ref(JSON.parse(document.body.dataset.user));

    async function updateUser(form) {
        const response = await axios.put(
            route("users.update", user.value.id),
            form,
        );
        console.log(response);
    }

    async function flushSession() {
        const response = await axios.post(route("flush-session"));
        console.log(response);
    }

    async function inspire() {
        const response = await axios.get(route("inspire"));
        alert(response.data.message);
    }

    return {
        appVersion: document.body.dataset.appVersion,
        appName: document.body.dataset.appName,
        csrfToken: document.body.dataset.csrfToken,
        user,
        updateUser,
        flushSession,
        inspire,
    };
});
