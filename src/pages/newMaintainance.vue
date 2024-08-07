<template>
  <v-app id="app">
    <v-app-bar>
      <v-container class="d-flex align-center justify-center">
        <v-btn link to="/maintainance" class="text-blue-400 text-sm hover:bg-blue-400 hover:text-white">
          <v-icon size="x-large">mdi-chevron-left</v-icon>
          <span class="mx-1">Back</span>
        </v-btn>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-2">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg" class="pa-2">
              <v-toolbar class="bg-white">
                <v-toolbar-title>
                  <v-icon class="mb-2" size="x-large">mdi-star-outline</v-icon>
                  <span class="ml-2">New</span>
                </v-toolbar-title>
              </v-toolbar>

              <div class="grid grid-cols-3 gap-3 max-w-[950px] px-5 py-5">
                <div>
                  <span class="px-5 py-3">Reference</span>
                  <v-text-field rounded="lg" variant="outlined" label="Enter Order Reference"></v-text-field>
                </div>
                <div>
                  <span class="px-5 py-3">Status</span>
                  <v-text-field rounded="lg" variant="outlined" label="Select status"></v-text-field>
                </div>
                <div>
                  <span class="px-5 py-3">Quantity</span>
                  <v-text-field variant="outlined" label="Enter Quantity" rounded="lg"></v-text-field>
                </div>
                <div>
                  <span class="px-5 py-3">Quantity</span>
                  <v-select variant="outlined" label="Enter Quantity" rounded="lg"></v-select>
                </div>
                <div>
                  <span class="px-5 py-3">Date Generated</span>
                  <v-text-field clearable label="15/12/2021" append-icon="mdi-calendar" variant="outlined"
                    rounded="lg"></v-text-field>
                </div>
              </div>

              <!-- Add your v-table here -->
              <v-data-table class="pa-0 ma-0" hide-default-footer hide-default-header :headers="headers" :items="items">
                <template v-slot:top>
                  <v-toolbar class="bg-white" flat>
                    <v-toolbar-title>Orders</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                </template>
              </v-data-table>
              <!-- End of v-table -->

              <!-- Add v-row and v-col for the Create button -->
              <v-row>
                <v-spacer></v-spacer>
                <v-col class="d-flex justify-end">
                  <v-btn color="primary" class="" to='/secondMaintainance'>
                    Create
                  </v-btn>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>

// import { ref } from "vue";
import "../assets/tailwind.css";
// // import { useRouter } from "vue-router";

// // const router = useRouter();
// // const goBack = () => {
// //   router.go(-1);
// // }

const headers = [
  { text: "Reference", value: "reference" },
  { text: "Status", value: "status" },
  { text: "Date Generated", value: "date_generated" },
  { text: "Quantity", value: "quantity" },
];
const items = [
  {
    reference: "ORD123",
    status: "Pending",
    date_generated: "2023-07-01",
    quantity: 10,
  },
  {
    reference: "ORD124",
    status: "Completed",
    date_generated: "2023-07-02",
    quantity: 5,
  },
];
</script>

<style scoped></style>
