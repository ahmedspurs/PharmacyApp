<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="end">
        <ion-button color="medium" @click="cancel">الغاء</ion-button>
      </ion-buttons>
      <ion-title>بحث عبر اسم الدواء</ion-title>

    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div class="flex flex-col justify-between min-h-full">
        <div class="search">
              <ion-searchbar show-cancel-button="always" placeholder="ادخل اسم الدواء"></ion-searchbar>

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
            <ion-button expand="block">
                بحث
            </ion-button>
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
    IonSearchbar,
    IonSelect,
    IonSelectOption,
    IonItem,
   
    modalController,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'RegularSearch',
    components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton,    IonSearchbar,
    IonSelect,
    IonSelectOption,
    IonItem },
    methods: {
      cancel() {
        return modalController.dismiss(null, 'cancel');
      },

    },
  });
</script>