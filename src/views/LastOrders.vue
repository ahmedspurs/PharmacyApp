<template>
  <ion-page>
    <ion-header >
      <ion-toolbar>
        <div class="flex items-center justify-between px-4">
          <div class="p-4">
            <router-link to="/tabs/ProfilePage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </router-link>
          </div>
          <h2>الطلبات السابقه</h2>
          <div class="flex items-center">
            <div class="p-3 hidden"></div>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="last-order p-4" >
        <!-- <router-link to="/tabs/LastOrder"> -->
        <div
          class="bg-white shadow p-4 rounded-xl mt-2"
          :key="item"
          v-for="item in 4"
        >
          <div class="text-center flex justify-center px-4">
            <div class="grid grid-cols-2 rounded-xl w-3/4">
              <span class="text-gray-700 text-right">طلب رقم </span>
              <span class="text-green-600 text-right">#5</span>
            </div>
          </div>

          <div class="text-center flex justify-center px-4">
            <div class="grid grid-cols-2 rounded-xl w-3/4">
              <span class="text-gray-700 text-right w-full">  الردود </span>
              <span class="text-green-600 text-right">
                16
              </span
              >
            </div>
          </div>

          <div class="text-center flex justify-center px-4">
            <div class="grid grid-cols-2 rounded-xl w-3/4">
              <span class="text-gray-700 text-right"> الحاله </span>
           
              <span
                class="text-green-600 text-right"
              >
                مكتمل
              </span>
           
            </div>
          </div>
        </div>
        <!-- </router-link> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, IonToolbar } from "@ionic/vue";

export default {
  name: "LastOrders",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
  },
 
};
</script>

<style>
</style>