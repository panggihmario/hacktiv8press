<template>

    <div id="app">
  <v-app id="inspire">
    <navbar/>
    <v-container>

    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card v-for="(article,index) in articles" :key=index>
          <v-card-media
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            height="200px"
          ></v-card-media>
  
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{article.title}}</h3>
              <div>{{article.author.name}} <br>{{article.content}}</div>
            </div>
            <v-card-actions>
            <v-btn flat color="orange">Edit</v-btn>
            <v-btn flat color="orange" @click="deleteArticle">Delete</v-btn>
          </v-card-actions>
          </v-card-title>
        
          
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
  </v-app>
</div>

</template>

<script>
import {mapActions,mapState} from 'vuex'
import navbar from '@/components/navbar.vue'
export default {
    components:{
        navbar
    },
    methods :{
        ...mapActions([
            "allArticle","deleteArticle"
        ])
    },
    computed :{
        ...mapState([
            "articles"
        ])
    },
    mounted(){
        this.allArticle()
    }
}
</script>
