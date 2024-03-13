<script>
import {store} from '../components/store.js'

import ItemsList from '../components/ItemsList.vue'

export default{
  name:'AppLanguageNav',
  data(){
    return{
        // varabile necessaria per la function
        isDropdownOpen:false,
        store,

    }
  },
    components:{
        ItemsList,
      
  },
  created(){
   
   
  },

  methods: {
    Apertura_menu(){
        // noi ad ogni pressione del pulsante andiamo a negare la visione o no del menu a scomparsa grazie all'operatore logico
        this.isDropdownOpen= !this.isDropdownOpen

    }
    
    
  },
}


</script>

<template>
    <div id="container">
        <!-- :class="{'open':isDropdownOpen }" con questo comando noi andiamo ad applicare la classe open al dropdown -->
        <div class="dropdown" :class="{'open':isDropdownOpen }">
            <button @click="Apertura_menu" class="dropbtn">English <i class="fa-solid fa-chevron-down"></i></button>
            <div id="myDropdown" class="dropdown-content">
                <a href="#">Italiano</a>
                <a href="#">French</a>
                <a href="#">Spanish</a>
            </div>
        </div>
        <div id="container_list">
            <ul>
                <ItemsList v-for="currentlink in store.links" :link="currentlink"></ItemsList>
            </ul>
            <div id="Social">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-google-plus-g"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
#container{
    background-color: white;
    padding: 22px 114px;
    border-bottom: 2px grey solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .dropbtn{
    border: transparent;
    background-color: transparent;
    font-size: 1em;
    cursor: pointer;
    
    color: #AAAAAA;
    
    
    
}
.dropdown-content{
        display: none;
        position: absolute;
    }
.open .dropdown-content{
        display: flex;
        flex-direction: column;
        gap: 5px;
        a{
            color: #AAAAAA;
            text-decoration: none;

        }
    }
    #container_list{
        display: flex;
        gap: 38px;
        ul{
        display: flex;
        list-style-type:none;
        gap: 30px;
    }
    #Social{
        
        display: flex;
        gap: 16px;
        align-items: center;
        text-decoration: none;
        a{
            color: #AAAAAA;
        }
    }

    }
    
}


</style>

