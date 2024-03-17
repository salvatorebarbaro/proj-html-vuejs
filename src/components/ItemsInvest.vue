<script>



export default{
  name:'ItemsInvest',
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
    invest:Object,
   
  }
}


</script>

<template>
    <div id="container_elements">
        <h2>{{ invest.title }}</h2>
        <span id="Testo">{{ invest.Text }}</span>
        <span id="autore">{{ invest.Person }}</span>
        <span id="posizione">{{ invest.Job }}</span>


    </div>

</template>

<style lang="scss">
@use '../components/style/varables.scss' as *;
#container_elements{
    display: flex;
    flex-direction: column;
    h2{
        margin-bottom: 40px;
    }
    #Testo{margin-bottom: 46px;
    font-size: 14px;
    font-weight: 300;
    }
    #posizione{
        font-size: 14px;
    font-weight: 300;
    }
    #autore{
        font-weight: 700;
    }
}

</style>

