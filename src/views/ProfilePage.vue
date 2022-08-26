<template>
  <ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title>الملف الشخصي</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="">
      <div
        class="profile flex flex-col justify-between itmes-center h-full py-8"
      >
        <div class="p-header">
       
          <div class="px-2 py-20">
            
            <router-link to="/tabs/LastOrders" class="block text-center px-4">
              <div class="flex shadow rounded-xl p-4 my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                <span class="px-4 text-black"> الطلبات السابقه </span>
              </div>
            </router-link>

            <router-link to="/tabs/ContactPage" class="block text-center px-4">
              <div class="flex shadow rounded-xl p-4 my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span class="px-4 text-black"> تواصل معنا </span>
              </div>
            </router-link>
          </div>
        </div>

        <div class="px-4 py-4">
          <div
            class="flex bg-gray-100 rounded-xl justify-center p-4 mt-2"
          >
            <span class="text-black font-semibold"> تسجيل الخروج </span>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent,IonHeader, IonToolbar, IonTitle, } from "@ionic/vue";


export default {
  name: "ProfilePage",
  components: {
    IonPage,
    IonContent,IonHeader, IonToolbar, IonTitle,
  },
 
};
</script>

<style>
</style>