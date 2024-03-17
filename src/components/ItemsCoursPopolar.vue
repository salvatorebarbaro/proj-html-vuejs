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
            <div>{{ CardPopolari.rating }}</div>
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

