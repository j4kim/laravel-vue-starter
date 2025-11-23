import { defineStore } from "pinia";

export const useMainStore = defineStore("main", () => {
    return {
        appVersion: document.body.dataset.appVersion,
        appName: document.body.dataset.appName,
        csrfToken: document.body.dataset.csrfToken,
        user: JSON.parse(document.body.dataset.user),
    };
});
