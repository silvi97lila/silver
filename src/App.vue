<template>
  <div id="app">
        <header>
          <div class="menu-btn">
              <div class="btn-line"></div>
              <div class="btn-line"></div>
              <div class="btn-line"></div>
          </div>

          <nav class="menu">
              <div class="menu-branding">
                <div class="portrait"></div>    
              </div>
              <ul class="menu-nav">
                  <li class="nav-item current">
                    <router-link class="nav-link"  v-on:click="toggleMenu" to='/'>Home</router-link>    
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" id="hiqe"  v-on:click="toggleMenu" to='/work'>Work</router-link>    
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" id="about-link"  v-on:click="toggleMenu"  to='/about'>About</router-link>    
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" id="contact-link"  v-on:click="toggleMenu" to='/contact'>Contact</router-link>    
                  </li>
              </ul>
          </nav>
      </header>
    
    
    <router-view />
  </div>
</template>

<script>


export default {
 mounted: function(){
   //Select DOM items
    const menuBtn=document.querySelector('.menu-btn');
    const menu=document.querySelector('.menu');
    const menuNav=document.querySelector('.menu-nav');
    const menuBrand=document.querySelector('.menu-branding');
    const alink=document.querySelector('.nav-link');
    const hiqe=document.querySelector('#hiqe');
    const aboutlink=document.querySelector('#about-link');
    const contactlink=document.querySelector('#contact-link');

    const navItems=document.querySelectorAll('.nav-item');


    
    // hiqe.addEventListener('click', toggleMenu);
    // aboutlink.addEventListener('click', toggleMenu);
    // contactlink.addEventListener('click', toggleMenu);

    //Set initial state of the menu
    let showMenu=false;
    if(menuBtn){
        menuBtn.addEventListener('click', toggleMenu);
    }
    // if(alink){
    //   alink.addEventListener('click', toggleMenu);
    // }
    // if(hiqe){
    //   hiqe.addEventListener('click', toggleMenu);
    // }
    // if(aboutlink){
    //   aboutlink.addEventListener('click', toggleMenu);
    // }
    // if(contactlink){
    //   contactlink.addEventListener('click', toggleMenu);
    // }


    function toggleMenu(){
        if(!showMenu){
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            menuBrand.classList.add('show');

            navItems.forEach(item=> item.classList.add('show'));

            //Set menu state
            showMenu=true;
        }else{
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            menuBrand.classList.remove('show');

            navItems.forEach(item=> item.classList.remove('show'));

            //Set menu state
            showMenu=false;

        }
    }
 },
 methods:{
   toggleMenu:function(){
     const showMenu=false;
            if(!showMenu){
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            menuBrand.classList.add('show');

            navItems.forEach(item=> item.classList.add('show'));

            //Set menu state
            showMenu=true;
        }else{
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            menuBrand.classList.remove('show');

            navItems.forEach(item=> item.classList.remove('show'));

            //Set menu state
            showMenu=false;

        }
   }
 }
}
</script>

<style>

</style>
