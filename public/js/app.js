//Vue object for the index page
new Vue({
    el:'#home',
    data(){
        return{
            info:[]
        }
    },
mounted(){
    axios.get('http://localhost:8080/api/settings')
    .then(respone =>(this.info=respone.data))
},
computed:{
    splitedList(){
        let newArr=[...this.info]
        newArr.map(el=>{
            return el.title= el.title.split(" ");
        })
        return newArr;
    }
}

});


// Vue object for the about page
new Vue({
    el:'#about',
    data(){
        return{
            info:[]
        }
    },
    mounted(){
        axios.get('http://localhost:8080/api/aboutData')
        .then(response =>(this.info=response.data))
    },
    computed:{
        splitedList(){
            let newArr=[...this.info]
            newArr.map(el=>{
                return el.title= el.title.split(" ");
            })
            return newArr;
        }
    }
  });



  //Vue object for the work.html page
  new Vue({
      el:'#work',
      data(){
          return{
              info:[]
          }
      },
      mounted(){
        axios.get('http://localhost:8080/api/workData')
        .then(response=> (this.info=response.data))
      }

  })

