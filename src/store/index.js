import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
Vue.use(Vuex);

const state = {
    api: {
        getName: '/hyxd/roles',
        getRecords: '/hyxd/achievements',
    },
    test: '战绩图',
    nameList: [],
    message: '',
    record: {},
};

const getters = {
    getName: state => {
        return state.test;
    }
};

const actions = {
    getRoleName({ commit, state }, p){
        axios.get(state.api.getName, {
            params: p,
        })
        .then((res) => {
            if (res.status == 200 && res.data.data.length) {
                commit('showRecord', {data: res.data.data});
            } else{
                state.message = res.data.message;
            };
        })
        .catch((err) =>{
            console.log(err);
        })
    },
    getRoleRecords({ commit, state}, p){
        axios.get(state.api.getRecords, {
            params: p
        })
        .then((res) =>{
            if (res.status == 200) {
                commit('setRecord', {data: res.data})
            } else{
                state.message = res.data.message;
            };
        })
    }
};

const mutations = {
    showRecord(state, {data}){
        state.nameList = data;
    },
    setRecord(state, {data}){
        state.record = data;
    }
};

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});
export default store;