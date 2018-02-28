const state = {
    name: '周报',
};

const getters = {
    getStatus: state => {return state.name;}
};

const actions = {
    getWeekData({ commit }){
        commit('setWeekData', {data: res.data});
    }
};

const mutations = {
    setWeekData(state, {data}){

    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};