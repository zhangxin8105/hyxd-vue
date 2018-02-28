import Vue from 'vue';
import Vuex from 'vuex';

import Record from './modules/record';
import Week from './modules/week';

Vue.use(Vuex);

export default {
    modules: {
        Record,
        Week
    }
};