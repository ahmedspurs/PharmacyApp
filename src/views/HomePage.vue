<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title  slot="start">مرحبا , احمد</ion-title>
        <ion-title  slot="end" class="relative">
          <router-link to="/tabs/NotificationPage">
            <div
              class="absolute bg-green-600 p-1 top-0 left-4 rounded-full"
            ></div>
            <ion-icon size="large" :icon="notificationsOutline" />
          </router-link>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
 
      <div class="px-4 text-center">
        <h2 class="text-green-600  text-xl my-2">
          تطبيق روشته
        </h2>
        <p>
هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو  كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى         </p>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <div class="card shadow p-4 flex flex-col justify-center items-center" @click="openModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 my-2 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <h2 class="text-center">بحث عن طريق اسم الدواء</h2>
        </div>

        <div class="card shadow p-4 flex flex-col justify-center items-center" @click="openModal2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 my-2 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <h2 class="text-center">بحث عن طريق صورة الروشته</h2>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-2 px-4 my-8 shadow">
        <div>
          <img
            src="
            https://rqeeqa.com/wp-content/uploads/2020/01/%D8%B4%D8%A7%D9%85%D8%A8%D9%88-%D8%B5%D8%A7%D9%86%D8%B3%D9%8A%D9%84%D9%83.jpg
        "
            alt=""
            class="w-full h-40"
          />
        </div>
        <div class="text-center">
          <h2 class="text-xl text-green-600 font-semibold">
            تخفيض 50% للشامبو
          </h2>
          <p>
            احصل علي تخفيض 50% عند الشراء من صيليد قصي
          </p>
          <button class="p-2 bg-green-600 text-white rounded my-2">
            شراء الان
          </button>
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
  modalController,
  IonIcon
} from "@ionic/vue";
import { notificationsOutline } from "ionicons/icons";
import RegularSearch from "@/components/RegularSearch.vue";
import ImageSearch from "@/components/ImageSearch.vue";

export default defineComponent({
  name: "HomePage",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage,IonIcon},
  setup() {
    return {
      notificationsOutline,
    };
  },
  methods:{
    async openModal() {
        const regularSearch = await modalController.create({
          component: RegularSearch,
        });
        regularSearch.present();


      },
       async openModal2() {
        const regularSearch = await modalController.create({
          component: ImageSearch,
        });
        regularSearch.present();


      },
  }
    
});
</script>
