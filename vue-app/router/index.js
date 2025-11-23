import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Private from "../views/Private.vue";
import { useMainStore } from "../stores/main";
import { route } from "../../vendor/tightenco/ziggy";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/private",
        name: "private",
        component: Private,
        meta: {
            requireAuth: true,
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to) => {
    if (to.meta?.requireAuth && !useMainStore().user) {
        location = route("filament.admin.auth.login", {
            intended: "/" + to.href,
        });
        return false;
    }
});

export default router;
