import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios' ;

Vue.use(Vuex); // this.$store
Vue.use(VueAxios,axios); // this.$axios

export const SET_ITEMS = 'SET_ITEMS'; 
export const SET_CONTENT = 'SET_CONTENT'; 

export default new Vuex.Store({ // import store from './store';
  state: {
    posts: [],
    contents: [],
  }, // vue의 data와 비슷
  getters: {
    posts: state => {
      return state.posts;
    }
  }, // vue의 computed와 비슷
  mutations: {
    [SET_ITEMS](state, data) {
      state.posts = data.menuList;
      console.log(1,state.posts);
    },
    [SET_CONTENT](state, data) {
      state.contents = data;
      console.log(2,state.contents)
    },
  }, // state를 수정할 때 사용해요. 동기적으로
  actions: {
    loadData({
      commit
    }) {
      axios.get('http://recruit.web.smartjackwp.co.kr/menu').then((response) => {
        commit('SET_ITEMS', response.data)
      }).catch(function(err){
        console.log(err);
      });
    },
    loadContent({
      commit
    },{id}) {
      console.log(id)
      axios.get(`http://recruit.web.smartjackwp.co.kr/menu/${id}`).then((response) => {
        commit('SET_CONTENT', response.data)
      }).catch(function(err){
        commit('SET_CONTENT', {id:id, content:'Non-data', title: id})
        console.log(err);
      });
    }
  }, // 비동기를 사용할때, 또는 여러 뮤테이션을 연달아 실행할 때
});