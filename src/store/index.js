import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isDarkTheme: JSON.parse(localStorage.getItem("darkmodel"))
    },

    mutations: {
        toggleTheme(state, params) {
            state.isDarkTheme = params.isDarkTheme
            params.VM.$vuetify.theme.dark = params.isDarkTheme;

            if (params.isDarkTheme) {
                localStorage.setItem("darkmodel", true);
            } else {
                localStorage.setItem("darkmodel", false);
            }
        }
    },
    actions: {
    },
    modules: {
    }
})
