import { createWebHistory, createRouter } from 'vue-router'

// import dashBoard from '@/pages/master/dashBoard.vue';
import staffPage from '@/pages/staffPage.vue';
import maintainancePage from '@/pages/maintainancePage.vue';
import newMaintainance from '@/pages/newMaintainance.vue';
import secondMaintainance from '@/pages/secondMaintainance.vue'
import thirdMaintainance from '@/pages/thirdMaintainance.vue'

const routes = [
    // {
    //     path: '/',
    //     name: 'dashBoard',
    //     component: dashBoard
    // },
    {
        path: '/staff',
        name: 'staff',
        component: staffPage
    },
    {
        path: '/maintainance',
        name: 'maintainance',
        component: maintainancePage
    },
    {
        path: '/newMaintainance',
        name: 'newMaintainance',
        component: newMaintainance
    }, {
        path: '/secondMaintainance'
        , name: 'secondMaintainance',
        component: secondMaintainance
    },
    {
        path: '/thirdMaintainance'
        , name: 'thirdMaintainance',
        component: thirdMaintainance
    }

]

const router = createRouter({
    routes,
    history: createWebHistory()

})
export default router;