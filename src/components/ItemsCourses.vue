<script>



export default{
  name:'ItemsCourses',
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
    elemento:Object,
   
  }
}


</script>

<template>
    <div id="cards">
        <img :src="elemento.img" alt="">
        <span>{{ elemento.type }}</span>
        <span>{{elemento.name}}</span>
        <hr>
        <div id="last_section">
          <div>{{ elemento.rating }}</div>
          <div id="container_prices">
            <span>{{ elemento.price }}</span>
            <span>{{ elemento.discount }}</span>
          </div>
        </div>

    </div>
        


</template>

<style lang="scss">
@use '../components/style/varables.scss' as *;
#cards{
  width: calc(100% / 6 - $gap / 6 * 5);
    display: flex;
    flex-direction: column;
    #last_section{
      display: flex;
      justify-content: space-between;
      #container_prices{
        display: flex;
        flex-direction: column;
      }
    }
}

</style>

