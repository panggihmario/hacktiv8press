<template>
      <v-app id="inspire">
      <v-container>
          <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                  <v-card>
                    <v-container >
                        <form>
                                   <v-layout row>
                            <v-flex xs12>
                              <v-text-field name ="name" label="title" id="name" type="name" v-model="inputTitle">
                              </v-text-field>
                            </v-flex>
                          </v-layout>
                          <v-layout row>
                            <v-flex xs12>
                              <v-text-field name ="category" label="category" id="category" type="category" v-model="inputCategory" >
                              </v-text-field>
                            </v-flex>
                          </v-layout>
                      
                               <v-layout row>
                            <v-flex xs12>
                                 <v-container fluid grid-list-md>
                                    <v-textarea
                                        name="input-7-1"
                                        box
                                        label="Your Article"
                                        auto-grow
                                        v-model ="inputContent"
                                    ></v-textarea>
                                </v-container>
                             
                            </v-flex>
                          </v-layout>
                          
                                <v-layout row>
                                  <v-flex xs 6>
                                    <div>
                                   <v-btn round color="primary" @click="addArticle">Submit </v-btn>
                                </div>
                                  </v-flex>
                               
                                </v-layout>      
                        </form>
                    </v-container>
                  </v-card>
              </v-flex>
          </v-layout>
      </v-container>
   
 </v-app>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
    data(){
      return {
          
      }
    },
    methods :{
        ...mapActions([
            "addArticle"
        ]),
      
    },
    computed :{
        ...mapState([
            'title','content','category'
        ]),
           inputTitle: {
                get () {
                    return this.$store.state.title
                },
                set (value) {
                    this.$store.commit('setTitle', value)
                }
            },
            inputCategory :{
                get(){
                    return this.$store.state.category
                },
                set(value){
                    this.$store.commit('setCategory',value)
                }
            },
            inputContent : {
                get(){
                    return this.$store.state.content
                },
                set(value){
                    this.$store.commit('setContent',value)
                }
            }
    }
}
</script>