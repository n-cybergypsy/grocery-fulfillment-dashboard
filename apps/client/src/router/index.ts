import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/supervisor",
        },
        {path: "/supervisor",
            component: () =>
                import("../views/supervisor/DashboardView.vue"),
        },
        {
            path: "/shopper",
            component: () =>
                import("../views/shopper/MyOrdersView.vue"),
        },
    ],
});

export default router;