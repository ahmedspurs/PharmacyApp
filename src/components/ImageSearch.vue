<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="end">
        <ion-button color="medium" @click="cancel">الغاء</ion-button>
      </ion-buttons>
      <ion-title>بحث عبر صورة الروشته</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div class="flex flex-col justify-between min-h-full">
      <div class="search">
        <div class="flex justify-center items-center w-full">
          <label
            for="dropzone-file"
            class="
              flex flex-col
              justify-center
              items-center
              w-full
              h-64
              bg-gray-50
              rounded-lg
              border-2 border-gray-300 border-dashed
              cursor-pointer
              dark:hover:bg-bray-800 dark:bg-gray-700
              hover:bg-gray-100
              dark:border-gray-600
              dark:hover:border-gray-500
              dark:hover:bg-gray-600
            "
          >
            <div class="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
        <ion-item>
          <ion-select placeholder="اختر المدينه">
            <ion-select-option value="apples">الخرطوم</ion-select-option>
            <ion-select-option value="oranges">بحري</ion-select-option>
            <ion-select-option value="bananas">امدرمان</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-select placeholder="اختر المنطقه">
            <ion-select-option value="apples">الكلاكله</ion-select-option>
            <ion-select-option value="oranges">السوق العربي</ion-select-option>
            <ion-select-option value="bananas">السجانه</ion-select-option>
          </ion-select>
        </ion-item>
      </div>
      <div class="button">
        <ion-button expand="block"> بحث </ion-button>
      </div>
    </div>
  </ion-content>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  modalController,
      IonSelect,
    IonSelectOption,
    IonItem
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegularSearch",
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonItem
  },
  methods: {
    cancel() {
      return modalController.dismiss(null, "cancel");
    },
  },
});
</script>