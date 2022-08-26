<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title >الاشعارات </ion-title>
      
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="bg-gray-100 p-4 my-2" v-for="item in 5" :key="item">
        <div class="flex items-center">
         
            <ion-icon size="large" :icon="notificationsOutline" />
          <div class="text px-4">
            <p class="text-gray-600 ">
              لديك رد جديد لطلبك
            </p>
                  <p class="text-black font-semibold">
                    قبل 25 دقيقه
            </p>

          </div>
        </div>
      </div>
       <div class="border-t border-gray-300 p-4 my-2" v-for="item in 5" :key="item">
        <div class="flex items-center">
         
            <ion-icon size="large" :icon="notificationsOutline" />
          <div class="text px-4">
            <p class="text-gray-600 ">
              لديك رد جديد لطلبك
            </p>
                  <p class="text-black font-semibold">
                    قبل 25 دقيقه
            </p>

          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon
} from "@ionic/vue";
import { notificationsOutline } from "ionicons/icons";

export default defineComponent({
  name: "HomePage",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage,IonIcon },
  setup() {
    return {
      notificationsOutline,
    };
  },
});
</script>
