<template>
  <ion-page>
    <ion-header >
      <ion-toolbar>
        <div class="flex items-center justify-between px-4">
          <div class="py-4">
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
          <h2>تواصل معنا</h2>
          <div>
            <span class="hidden"> profile edit </span>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="contact" >
        <div class="contact py-4">
          <ion-card class="shadow-none">
            <ion-card-content>
              <form class="w-full">
                <div class="floating-input mb-5 relative">
                  <input
                    type="text"
                    id="nameContact"
                    class="
                      border border-gray-200
                      focus:outline-none
                      rounded-md
                      focus:border-gray-500 focus:shadow-sm
                      w-full
                      p-3
                      h-16
                    "
                    placeholder=" "
                    autocomplete="off"
                    v-model="name"
                  />
                  <label
                    for="email"
                    class="
                      absolute
                      top-0
                      right-0
                      px-3
                      py-5
                      h-full
                      pointer-events-none
                      transform
                      origin-left
                      transition-all
                      duration-100
                      ease-in-out
                    "
                    >الاسم</label
                  >
                </div>
                <div class="floating-input mb-5 relative">
                  <input
                    type="email"
                    id="emailContact"
                    class="
                      border border-gray-200
                      focus:outline-none
                      rounded-md
                      focus:border-gray-500 focus:shadow-sm
                      w-full
                      p-3
                      h-16
                    "
                    placeholder=" "
                    autocomplete="off"
                    v-model="email"
                  />
                  <label
                    for="email"
                    class="
                      absolute
                      top-0
                      right-0
                      px-3
                      py-5
                      h-full
                      pointer-events-none
                      transform
                      origin-left
                      transition-all
                      duration-100
                      ease-in-out
                    "
                    >الايميل</label
                  >
                </div>
                <div class="floating-input relative">
                  <textarea
                    id="messageContact"
                    class="
                      border border-gray-200
                      focus:outline-none
                      rounded-md
                      focus:border-gray-500 focus:shadow-sm
                      w-full
                      p-3
                    "
                    rows="6"
                    placeholder=" "
                    autocomplete="off"
                    v-model="message"
                  ></textarea>
                  <label
                    for="message"
                    class="
                      absolute
                      top-0
                      right-0
                      px-3
                      py-5
                      h-full
                      pointer-events-none
                      transform
                      origin-left
                      transition-all
                      duration-100
                      ease-in-out
                    "
                    >رسالتك</label
                  >
                </div>

                <div class="checkout">
                  <ion-button @click="send()">ارسال الرساله</ion-button>
                </div>
              </form>
            </ion-card-content>
          </ion-card>
        </div>

        <!-- fab -->
        <div class="fab">
          <ion-fab horizontal="end" vertical="bottom" slot="fixed">
            <ion-fab-button color="primary">
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </ion-fab-button>
            <ion-fab-list side="start">

                <ion-fab-button color="primary">
                  <ion-icon :icon="logoInstagram" />
                </ion-fab-button>

                <ion-fab-button color="primary">
                  <ion-icon :icon="logoWhatsapp" />
                </ion-fab-button>
            </ion-fab-list>
          </ion-fab>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonContent,

  IonCard,
  IonCardContent,
  IonFab,
  IonButton,
  IonIcon,
  IonFabButton,
  IonFabList,
  IonToolbar,
} from "@ionic/vue";
import {
  chatbubblesOutline,
  logoInstagram,
  logoWhatsapp,
} from "ionicons/icons";

export default {
  name: "ContactPage",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonIcon,
    IonCard,
    IonCardContent,
    IonButton,
    IonFab,
    IonFabButton,
    IonFabList,
    IonToolbar,
  },
 
  setup() {
    return {
      chatbubblesOutline,
      logoInstagram,
      logoWhatsapp,
    };
  },
};
</script>
<style scoped>
.floating-input > input::placeholder,
.floating-input > textarea::placeholder {
  color: transparent;
}

.floating-input > input:focus,
.floating-input > textarea:focus,
.floating-input > input:not(:placeholder-shown) {
  @apply pt-8;
}

.floating-input > input:focus ~ label,
.floating-input > textarea:focus ~ label,
.floating-input > input:not(:placeholder-shown) ~ label {
  @apply opacity-75 scale-75 -translate-y-3 translate-x-1;
}
</style>