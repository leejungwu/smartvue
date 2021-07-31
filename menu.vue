<template>
  <div>
    <v-app>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="3">
          <v-row>
            <v-col cols="6">
              <h4>{{ contents.id? contents.id[7]: 1}}번 문제</h4>
            </v-col>
            <v-col cols="6">
              <div class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      D
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, index) in posts"
                      :key="index"
                    >
                      <v-list-item-title><button @click="onClickMenu(item.id)" :style="[item.id === contents.id ? {backgroundColor: '#FFFF00'}: {backgroundColor: '#FFFFFF'}]">
                        {{ item.id[7] }}번</button>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-col>
          </v-row>
          <br/>
          <div v-for="post in posts" v-bind:key="post.id">
            <button @click="onClickMenu(post.id)" :style="[post.id === contents.id ? {backgroundColor: '#FFFF00'}: {backgroundColor: '#FFFFFF'}]">
              {{ post.title[3] }}번 문제
            </button>
          </div>
        </v-col>
        <v-col cols="9">
          <div id="app" :style="{ backgroundColor: '#F5F5F5'}">
            <p v-html="contents.content"></p> 
          </div>
        </v-col>
      </v-row>
    </v-container>
    </v-app>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  import { mapState } from 'vuex';
  import store from './store';
  export default {
    store,
    components: {

    },
    computed: {
      ...mapState(['posts','contents']),
    },
    methods: {
      onClickMenu(id) {
        this.$store.dispatch('loadContent',{id:id});
      }
    },
    mounted() {
      this.$store.dispatch('loadData');
    }
  };
</script>

<style>

</style>