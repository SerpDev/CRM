import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import messagePlugin from "@/utils/message.plugin";
import Loader from '@/components/app/loader/Loader';
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component('Loader', Loader);

firebase.initializeApp({
  apiKey: "AIzaSyC-Clqqqs0BslK-qOXlbMVaXNZaCUPAaus",
  authDomain: "vue-crm-minin-4aee4.firebaseapp.com",
  databaseURL: "https://vue-crm-minin-4aee4.firebaseio.com",
  projectId: "vue-crm-minin-4aee4",
  storageBucket: "vue-crm-minin-4aee4.appspot.com",
  messagingSenderId: "477815854464",
  appId: "1:477815854464:web:5ce65389d6b767819bdd65",
  measurementId: "G-HK2NP95W4C",
});

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
