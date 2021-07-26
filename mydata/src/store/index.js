import Vuex from 'vuex';
import Vue from 'vue';

import module1 from './module1';
import module2 from './module2';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    module1,
    module2
  }
});

export default store;