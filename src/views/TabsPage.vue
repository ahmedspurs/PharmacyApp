<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/HomePage">
          <ion-icon :icon="homeOutline" />
          <ion-label> الرئيسيه</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/NotificationPage">
          <ion-icon :icon="notificationsOutline" />
          <ion-label>الاشعارات</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/ProfilePage">
          <ion-icon :icon="personOutline" />
          <ion-label>البروفايل</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { homeOutline, notificationsOutline, personOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      homeOutline, 
      notificationsOutline, 
      personOutline,
    }
  }
});
</script>
