<template>
   <main id="contact">
    <div class="overlay"></div>

       <h1 class="lg-heading">
            Get in <span class="text-secondary">  Touch</span>
       </h1>

       <h2 class="sm-heading">
          Send me an email down below...
       </h2>

       <div class="contact-section">
        
         <div class="contact-info" style="margin: 0 auto; text-align: center;">
            <img src="img/silvi.jpg" alt="Silver Lila" class="bio-image portrait">
            <h2 class="text-secondary" style=" margin-top: 20px;">REACH ME</h2>
            <div class="reach-me">
                    <div style="margin: auto;text-align:center;">
                         <i class="fas fa-map-marker-alt" style="font-size:30px;"></i>
                         <h4>Based in Tirana.</h4>
                    </div>
                    <div style="margin: auto;text-align:center;">
                         <i class="fas fa-phone"  style="font-size:30px;"></i> 
                         <h4>+355695831793</h4>
                    </div>
                    <div style="margin: auto;text-align:center;">
                         <i class="fas fa-envelope" style="font-size:30px;"></i>
                         <h4>info@silverlila.com</h4>
                    </div>
       
            </div>
            <h2 class="text-secondary" >LET'S SOCIALIZE </h2>
            <!-- Icons -->
             <div class="icons" v-for="i in info" v-bind:key="i.id">
                 <a v-bind:href="`${i.social_insta}`">
                     <i class="fab fa-instagram fa-2x" style="padding:10px;"></i>
                 </a>
                 <a v-bind:href="`${i.social_facebook}`">
                     <i class="fab fa-facebook fa-2x" style="padding:10px;"></i>
                 </a>
                 <a v-bind:href="`${i.social_linkedin}`">
                     <i class="fab fa-linkedin fa-2x" style="padding:10px;"></i>
                 </a>
                 <a v-bind:href="`${i.social_github}`">
                     <i class="fab fa-github fa-2x" style="padding:10px;"></i>
                 </a>
             </div>
         </div>

         <div class="cont-form">
             <h1 class="text-secondary">Send me an email.</h1>
         <form action="#" class="form">
             <label for="name">First Name</label>
             <input type="text" class="form-input">

             <label for="name">Last Name</label>
             <input type="text" class="form-input">

             <label for="name">Email</label>
             <input type="email" class="form-input">

             <label for="name">Message</label>
             <textarea name="message" id="msg" cols="30" rows="10"></textarea>

             <button type="submit" class="btn-submit">Submit</button>   
         </form>
        </div>

         

       </div>

    </main>
</template>

<script>
import axios from 'axios';
export default {
  name:'Contact',
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
}
</script>

<style>

</style>
