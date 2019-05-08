<template>
    <div>
    <div class="overlay"></div>
    <main id="home">
       <h1 class="lg-heading" v-for="s in splitedList" v-bind:key="s.id">
            {{s.title[0]}} <span class="text-secondary"> {{s.title[1]}}</span>
       </h1>

       <h2 class="sm-heading" v-for="sub_title in info" v-bind:key="sub_title.id">
           {{sub_title.sub_title}}
           <!-- Web developer, Programer, Designer; -->
       </h2>

       <div class="icons" v-for="i in info" v-bind:key="i.id">
           <a v-bind:href="`${i.social_insta}`">
               <i class="fab fa-instagram fa-2x"></i>
           </a>
           <a v-bind:href="`${i.social_facebook}`">
                <i class="fab fa-facebook fa-2x"></i>
           </a>
           <a v-bind:href="`${i.social_linkedin}`">
                <i class="fab fa-linkedin fa-2x"></i>
           </a>
           <a v-bind:href="`${i.social_github}`">
                <i class="fab fa-github fa-2x"></i>
           </a>
       </div>
    </main>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'Home',
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
   },

}
</script>