<template>
    <v-toolbar dark color="orange darken-2">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title >
          <router-link class="black--text" to="/lobby">Lobby</router-link>
      </v-toolbar-title>
       <v-toolbar-title class="black--text">
           <router-link class="black--text" to="/upload">Add Article</router-link>
       </v-toolbar-title>
      <v-spacer> </v-spacer>
      <v-toolbar-items class="hidden-sm-and-down ">
        <v-btn flat class="black--text">  </v-btn>

      <v-btn @click="openModal"><v-icon>shopping_cart</v-icon></v-btn>
        <v-btn flat class="black--text" v-on:click="logout">Log Out</v-btn>
      </v-toolbar-items>
    </v-toolbar>

</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    methods :{
        ...mapActions([
            "logout"
        ])
    }
}
</script>
