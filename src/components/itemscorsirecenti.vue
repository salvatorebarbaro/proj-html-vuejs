<script>



export default{
  name:'itemscorsirecenti',
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
    corso_recente_props:Object,
   
  }
}


</script>

<template>
    <div id="card">
      <!-- <img src={{elemento.img}} alt=""> -->
        <img :src="corso_recente_props.img" alt="">
        <div id="Container_txt">
          <span id="cosa">{{ corso_recente_props.type }}</span>
          <span>{{corso_recente_props.name}}</span>
          <hr>
          <div id="Container_footer">
            <div>{{ corso_recente_props.rating }}</div>
            <div id="container_price">
              <span id="price">{{ corso_recente_props.price }}</span>
              <span>{{ corso_recente_props.discount }}</span>
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

