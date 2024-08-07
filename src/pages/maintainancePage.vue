<template>
  <div>
    <div class="grid grid-cols-3 gap-3 max-w-[950px] px-5 py-5">
      <div>
        <span class="px-5 py-3">Reference</span>
        <v-text-field label="Enter Order Reference" type="input"></v-text-field>
      </div>
      <div>
        <span class="px-5 py-3">Status</span>
        <v-select label="Select status"></v-select>
      </div>
      <div>
        <span class="px-5 py-3">Date Generated</span>
        <v-text-field clearable label="15/12/2021" append-icon="mdi-calendar" type="text"></v-text-field>
      </div>
      <div>
        <span class="px-5 py-3">Quantity</span>
        <v-text-field label="Enter Quantity" type="input"></v-text-field>
      </div>
    </div>

    <v-card class="pa-4">
      <div class="mb-5 flex justify-between items-center">
        <v-card-title class="text-3xl text-blue-500">Manufacturing Orders</v-card-title>
        <v-btn variant="outlined" height="35" class="hover:bg-blue-100 hover:text-white border-none">
          <router-link class="text-blue-400" to="/newMaintainance">New Manufacturing Order</router-link>
        </v-btn>
      </div>
      <v-data-table hide-default-footer :headers="headers" :items="plants" density="compact"
        item-key="name"></v-data-table>
    </v-card>
  </div>
</template>

<script setup>
import "../assets/tailwind.css";

const headers = [
  { text: "Plant", align: "start", sortable: false, value: "name" },
  { text: "Light", align: "end", value: "light" },
  { text: "Height", align: "end", value: "height" },
  { text: "Pet Friendly", align: "end", value: "petFriendly" },
  { text: "Price ($)", align: "end", value: "price" },
];

const plants = [
  { name: "Fern", light: "Low", height: "20cm", petFriendly: "Yes", price: 20 },
  { name: "Snake Plant", light: "Low", height: "50cm", petFriendly: "No", price: 35 },
  { name: "Monstera", light: "Medium", height: "60cm", petFriendly: "No", price: 50 },
  { name: "Pothos", light: "Low to medium", height: "40cm", petFriendly: "Yes", price: 25 },
  { name: "ZZ Plant", light: "Low to medium", height: "90cm", petFriendly: "Yes", price: 30 },
  { name: "Spider Plant", light: "Bright, indirect", height: "30cm", petFriendly: "Yes", price: 15 },
  { name: "Air Plant", light: "Bright, indirect", height: "15cm", petFriendly: "Yes", price: 10 },
  { name: "Peperomia", light: "Bright, indirect", height: "25cm", petFriendly: "Yes", price: 20 },
  { name: "Aloe Vera", light: "Bright, direct", height: "30cm", petFriendly: "Yes", price: 15 },
  { name: "Jade Plant", light: "Bright, direct", height: "40cm", petFriendly: "Yes", price: 25 },
];
</script>

<style scoped></style>
