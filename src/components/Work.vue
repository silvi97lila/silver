<template>
     <main id="work">
       <div class="overlay"></div>
       <h1 class="lg-heading">
            My <span class="text-secondary">  Work</span>
       </h1>

       <h2 class="sm-heading">
          Check out my recent projects...
       </h2>

       <div class="projects">
          <div class="item">
              <a href="#!">
                  <img src="../assets/img/projects/smartmoto.jpg" alt="Projects">
              </a>
              <a href="#" class="btn-light">
                  <i class="fas fa-eye"></i>Project
              </a>
              <a href="#" class="btn-light">
                  <i class="fab fa-github"></i>Github
              </a>
          </div>

        <div class="item">
            <a href="#!">
              <img src="../assets/img/projects/crm.jpg" alt="Projects">
            </a>
            <a href="#" class="btn-light">
              <i class="fas fa-eye"></i>Project
            </a>
            <a href="#" class="btn-light">
              <i class="fab fa-github"></i>Github
            </a>
        </div>

        <div class="item">
            <a href="#!">
                <img src="../assets/img/projects/adasall.jpg" alt="Projects">
            </a>
            <a href="#" class="btn-light">
                <i class="fas fa-eye"></i>Project
            </a>
            <a href="#" class="btn-light">
                <i class="fab fa-github"></i>Github
            </a>
        </div>

        <div class="item">
            <a href="#!">
                <img src="../assets/img/projects/avokat.jpg" alt="Projects">
            </a>
            <a href="#" class="btn-light">
                <i class="fas fa-eye"></i>Project
            </a>
            <a href="#" class="btn-light">
                <i class="fab fa-github"></i>Github
            </a>
        </div>


       </div>

    </main>
    <!-- End of main -->
</template>

<script>
import axios from 'axios';
export default {
    name:'Work',
    data(){
        return{
            info:[]
        }
    },
    mounted(){
    axios.get('http://localhost:8080/api/workData')
    .then(response=> (this.info=response.data))
    }
}
</script>

<style>

</style>
