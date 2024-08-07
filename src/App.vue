<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer">
      <v-list-item class="pa-3 text-4xl text-blue-600">
        A<span class="text-2xl">SAWER</span>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item link>
          <router-link @click="updateTitle('Dashboard')" to="/">
            <v-list-item-title>Dashboard</v-list-item-title>
          </router-link>
        </v-list-item>
        <v-list-item link>
          <router-link @click="updateTitle('Staff')" to="/staff">
            <v-list-item-title>Staff</v-list-item-title>
          </router-link>
        </v-list-item>
        <v-list-item link>
          <router-link @click="updateTitle('Maintainance')" to="/maintainance">
            <v-list-item-title> Maintainance </v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import "./assets/tailwind.css";

const drawer = ref(true);
const title = ref("Dashboard");
const route = useRoute();

const updateTitle = (newTitle) => {
  title.value = newTitle;
};

const routeTitles = {
  "/": "Dashboard",
  "/staff": "Staff",
  "/maintainance": "Maintainance",
  "/newMaintainance": "Maintainance",
  "/secondMaintainance": "Maintainance",
  "/thirdMaintainance": "Maintainance",
};

watch(
  route,
  (newRoute) => {
    if (newRoute && newRoute.path) {
      title.value = routeTitles[newRoute.path] || "Dashboard";
    }
  },
  { immediate: true }
);

// Set initial title based on current route
if (route && route.path) {
  title.value = routeTitles[route.path] || "Dashboard";
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
