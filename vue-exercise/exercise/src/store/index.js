import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { contact } from "./modules/contact";

export default createStore({
  plugins: [createPersistedState()],
  modules: {
    contact
  },
});
