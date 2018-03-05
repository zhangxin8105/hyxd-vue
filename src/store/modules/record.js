const state = {
    name: '战绩图',
};

const getters = {
    getName: state => {
        console.log(state);
        // return state.name;
    }
};

const actions = {
    getRecordData({ commit }){
        commit('showRecord', {data: res.data});
    }
};

const mutations = {
    showRecord(state, {data}){

    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}