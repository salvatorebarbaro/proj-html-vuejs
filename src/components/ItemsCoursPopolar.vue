<script>



export default{
  name:'ItemsCoursPopolar',
  data(){
    return{
        

       
    }
  },
    components:{
        
      
  },
  created(){
   
   
  },

  methods: {
    starRating(rating){
      // dichiaraimo la variabile che usaimo per salvarci le stelle vuota
      let stars='';
      // facciamo un ciclo per inserire le stelle fino al voto massimo ovvero 5
      for( let i=0;i<5;i++){
        // facciamo delle condizioni perchè inseriremo stelle piene fino a che i è < di rating 
        if(rating>i){
          // inseriamo dentro stars una stella piena
          stars+='<i class="fa-solid fa-star"></i>';
        }
        else
        {
          // inseriamo dentro stars una stella piena
          stars+='<i class="fa-regular fa-star"></i>';
        }
      }
      // quando finsico la mia funzione ritorno le stelle in pagina
      return stars;
    }
    
    
  },
  props:{
    CardPopolari:Object,
   
  }
}


</script>

<template>
    <div id="card">
      <!-- <img src={{elemento.img}} alt=""> -->
        <img :src="CardPopolari.img" alt="">
        <div id="Container_txt">
          <span id="cosa">{{ CardPopolari.type }}</span>
          <span>{{CardPopolari.name}}</span>
          <hr>
          <div id="Container_footer">
            
            <div id="stelle" v-html="starRating(CardPopolari.rating)"></div>
            <div id="container_price">
              <span id="price">{{ CardPopolari.price }}</span>
              <span>{{ CardPopolari.discount }}</span>
            </div>
          </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../components/style/varables.scss' as *;
#card{
            display: flex;
            flex-direction: column;
            border: 1px solid $grigio;
            width: calc(100% / 6 - $gap / 6 * 5);
            flex-grow: 1;
            #Container_txt{
                padding: 20px;
                display: flex;
                flex-direction: column;
                #cosa{
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
                #Container_footer{
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }
                // #stelle{
                //   color: #EFB467;
                //   font-size: 12px;
                // }
                #container_price{
                    display: flex;
                    flex-direction: column;
                    #price{
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

</style>

