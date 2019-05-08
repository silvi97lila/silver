<template>
    <main id="about">
       <h1 class="lg-heading" v-for="v in splitedList" v-bind:key="v.id">
           {{v.title[0]}}  <span class="text-secondary"> {{v.title[1]}}</span>
       </h1>

       <h2 class="sm-heading" v-for="subtitle in info" v-bind:key="subtitle.id">
           {{subtitle.sub_title}}
       </h2>

       <div class="about-info">
           <img src="img/silvi.jpg" alt="Silver Lila" class="bio-image portrait">

           <div class="bio">
               <h3 class="text-secondary" >BIO</h3>
               <p id="bio_text" v-for="i in info" v-bind:key="i.id">{{i.body}}</p>
               <h3 class="text-secondary" style=" margin-top: 20px;">REACH ME</h3>
               <div class="reach-me">
                    
                   <div style="margin: auto;text-align:center;">
                        <i class="fas fa-map-marker-alt" style="font-size:35px;"></i>
                        <h4>Based in Tirana.</h4>
                   </div>
                   <div style="margin: auto;text-align:center;">
                        <i class="fas fa-phone"  style="font-size:35px;"></i> 
                        <h4>+355695831793</h4>
                   </div>
                   <div style="margin: auto;text-align:center;">
                        <i class="fas fa-envelope" style="font-size:35px;"></i>
                        <h4>info@silverlila.com</h4>
                   </div>
      
               </div>
               <h3 class="text-secondary" style=" margin-top: 20px;">LET'S SOCIALIZE </h3>
               <!-- Icons -->
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
               
            </div>
            <div></div>
            <div class="my-skills ">
                <h3 style="color:#eece1a;">My programing Skills :)</h3>
                PHP
                <div class="skills php">90%</div>
                LARAVEL
                <div class="skills LARAVEL">75%</div>
                JAVA
                <div class="skills JAVA">70%</div>
                SPRING BOOT
                <div class="skills SPRING-BOOT">70%</div>
                JS
                <div class="skills JS">60%</div>
                REACT.JS
                <div class="skills REACT">60%</div>
            </div>
       </div>
       <div class="overlay"></div>


    </main>
    <!-- End of main -->
</template>

<script>
import axios from 'axios';
export default {
    name:'about',
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
}
</script>
