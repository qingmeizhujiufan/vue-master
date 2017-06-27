// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import Mint from './mintUi';
import VueResource from 'vue-resource';

// Inject Global Css And Themes Css
import './sass/index.scss';

//开启debug模式
Vue.config.debug = true;

Vue.use(VueResource);

Vue.config.productionTip = false;

Vue.component('Search', require("@/components/Search"));

Vue.http.interceptors.push((request, next) => {
  request.headers.set('authority', "tenantid=ppo2wx9x;userId=94a9c3a1-0833-4464-ae04-0b6ac3f7ff9a;userType=3;u_logints=1498544804703;u_usercode=94a9c3a1-0833-4464-ae04-0b6ac3f7ff9a;token=d2ViLDM2MDAsZzhMVFFwQzBaMTlBdDVhMGtyajJ4amV6M0hWeG9udVVoOEE1aHl6R3FsQ0djaWxsY2ZsQ3BrMTZBaEQ3RHJWQUo3N25MVExsNW9KT0pmYVpNUFJ0REE9PQ")
  console.log(request.headers)
  next(response => {
    console.log(response.status)
    return response
  })
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
