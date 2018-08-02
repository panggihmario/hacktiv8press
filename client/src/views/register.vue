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
                              <v-text-field name ="name" label="name" id="name" type="name" v-model="inputName">
                              </v-text-field>
                            </v-flex>
                          </v-layout>
                          <v-layout row>
                            <v-flex xs12>
                              <v-text-field name ="email" label="email" id="email" type="email" v-model="inputEmail" >
                              </v-text-field>
                            </v-flex>
                          </v-layout>
                           <v-layout row>
                            <v-flex xs12>
                              <v-text-field name ="password" label="password" id="password"  type="password" v-model="inputPassword">
                              </v-text-field>
                            </v-flex>
                          </v-layout>
                                <v-layout row>
                                  <v-flex xs 6>
                                    <div>
                                   <v-btn round color="primary" @click="adduser">Submit </v-btn>
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
            "adduser"
        ]),
      
    },
    computed :{
        ...mapState([
            'user','email','password'
        ]),
           inputName: {
                get () {
                    return this.$store.state.name
                },
                set (value) {
                    this.$store.commit('setName', value)
                }
            },
            inputEmail :{
                get(){
                    return this.$store.state.email
                },
                set(value){
                    this.$store.commit('setEmail',value)
                }
            },
            inputPassword : {
                get(){
                    return this.$store.state.password
                },
                set(value){
                    this.$store.commit('setPassword',value)
                }
            }
    }
}
</script>