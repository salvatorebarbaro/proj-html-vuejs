<script>
import ItemsCoursPopolar from './ItemsCoursPopolar.vue';

import {store} from '../components/store.js'
export default{
  name:'AppPopularCours',
  data(){
    return{
      store,
        

       
    }
  },
    components:{
      ItemsCoursPopolar
        
      
  },
  created(){
   
   
  },

  methods: {
    
    
  },
  props:{
   
  }
}


</script>

<template>
     <div id="container_corsipopolari">
      <h2>Popular courses</h2>
      <span id="Sottotesto">Discover our most popular courses for self learning</span>
      <div id="container_corsi">
        <ItemsCoursPopolar v-for="corso_popolare in store.corsi_Popolari" :CardPopolari="corso_popolare"></ItemsCoursPopolar>
        
      </div>
     <div id="section_button">
        <button><i class="fa-solid fa-chevron-left"></i></button>
        <button><i class="fa-solid fa-chevron-right"></i></button>
     </div>
    
     
     
    </div>
</template>

<style lang="scss">
@use '../components/style/varables.scss' as *;
#container_corsipopolari {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F0F4FA;
    h2 {
    color: $testo;
    font-size: 40px;
    margin-bottom: 10px;
    margin-top: 112px;
    }
    #Sottotesto{
        color: $testo;
        font-size: 14px;
        font-weight: 300;
    }
    #container_corsi{
    padding: 52px 98px 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap:$gap ;
    color: black;
    .card{
        display: flex;
        flex-direction: column;
        border: 1px solid $grigio;
        width: calc(100% / 6 - $gap / 6 * 5 );
        color: black;
        #container_txt{
                padding: 20px;
                .cosa{
                    font-size: 12px;
                    color: $grigio;
                    margin-bottom: 20px;
                }
                span{
                    font-size: 16px;
                }
                hr{
                    margin: 20px 0 10px; 
                }
                .container_footer{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .container_price{
                    display: flex;
                    flex-direction: column;
                    .price{
                        color: $grigio;
                        text-decoration: line-through;
                        font-size: 10px;
                    }
                    span{
                        font-size: 14px;
                    }
                }

            }

    }
    }
    #section_button{
        margin-bottom: 76px;
        button{
            padding: 16px;
            border: 1px solid $grigio;
            background-color:#FFFFFF;
            color: $grigio;
            cursor: pointer;
        }
    }
  }
  


</style>

