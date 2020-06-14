import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        features: [
            { id: 1, name: "类型", version: "1.0" },
            { id: 2, name: "编译型语言", version: "1.0" },
        ],
    },
    mutations: {
        addFeatureMutation(state, featureName) {
            state.features.push({ id: state.features.length + 1, name: featureName });
        },
    },
    actions: {
        addFeatureAction({ commit }, featureName) {
            commit("addFeatureMutation", featureName);
        },
    },
    modules: {},
});
//# sourceMappingURL=index.js.map