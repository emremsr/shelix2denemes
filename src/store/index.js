import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
  },
  mutations: {
    addImage(state, { name, url }) {
      state.images.push({ name, url, liked: false });
    },
    likeImage(state, index) {
      state.images[index].liked = !state.images[index].liked;
    },
    deleteImage(state, index) {
      state.images.splice(index, 1);
    },
  },
  actions: {
    addImageToDirectory({ commit }, { name, url }) {
      commit("addImage", { name, url });
    },
    likeImage({ commit }, index) {
      commit("likeImage", index);
    },
    deleteImage({ commit }, index) {
      commit("deleteImage", index);
    },
  },
});
