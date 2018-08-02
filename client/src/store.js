import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name :  '',
    email : '',
    password : '', 
    articles : [],
    title : '',
    category : '',
    content : '' 
  },
  mutations: {
    setTitle(state,payload){
      state.title = payload
    },
    setCategory(state,payload){
      state.category = payload
    },
    setContent(state,payload){
      state.content = payload
    },
    setArticles(state,payload){
      state.articles = payload
    },
    setName(state,payload){
      state.name = payload
    },
    setEmail(state,payload){
      state.email = payload
    },
    setPassword(state,payload){
      state.password =payload
},
  },
  actions: {
    
    adduser(context){
      axios.post('http://localhost:3000/users/register',{
        name : this.state.name,
        email : this.state.email,
        password : this.state.password
      })
      .then(dataUser=>{
        console.log("berhasil register",dataUser)
        // console.log(dataUser.data.token)
        let author = dataUser.data.dataUser._id
        localStorage.setItem('tokenUser',dataUser.data.token)
        localStorage.setItem('idauthor',author)
        router.push('/about')
      })
      .catch(err=>{
        console.log(err)
      })

    },
    login(context){
      axios.post('http://localhost:3000/users/login',{
          email : this.state.email,
          password : this.state.password
      })
      .then(data=>{
        console.log(data.data.dataUser._id)
        let author = data.data.dataUser._id
        localStorage.setItem('idauthor',author)
        localStorage.setItem('tokenUser',data.data.token)
        
        if(data){
          router.push('/about')
        }else{
          console.log("eror")
        }
      })
      .catch(err=>{
        console.log('tes')
      })
    },
    allArticle(context){
      axios.get('http://localhost:3000/users/allArticle')
      .then(dataArticle=>{
        console.log(dataArticle)
        this.state.articles = dataArticle.data
      })
    },
    addArticle(context){
      console.log('tes')
      let id = localStorage.getItem('idauthor')
      let token =localStorage.getItem('tokenUser')
      console.log('=============',id)
     
      axios.post('http://localhost:3000/users/addArticle',{
        title : this.state.title,
        category : this.state.category,
        content : this.state.content,
        author : id
      },{
        headers :{
          token : token
        }
      })
      .then(dataArticle=>{
        console.log("success",dataArticle)
      })
      .catch(err=>{
        console.log(err)
      })
    },
    logout(context){
      localStorage.clear()
      router.push('/')
    },
    deleteArticle(context){
      axios.get('http://localhost:3000/users/find')
      let idauthor = localStorage.getItem('idauthor')
      .then(dataAuthor=>{
        if(dataAuthor._id === idauthor){
          axios.delete('http://localhost:3000/users/delete/id')
          .then(data=>{
            console.log(data)
          })
          .catch(err=>{
            console.log(err)
          })

        }
      })
    }



  }
})
