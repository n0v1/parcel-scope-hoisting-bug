'use strict';

import Vue from 'vue';
import TestApp from '../components/TestApp.vue';

// eslint-disable-next-line vue/no-v-html
new Vue({
  el: '#app',
  render: h => h(TestApp),
});
