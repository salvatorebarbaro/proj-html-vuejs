<script>

export default{
  name:'SectionEnd',
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
    
   
  }
}


</script>

<template>
    <div id="ContainerFine">
        <img src="../assets/img/footer-logo2x-50x56.png" alt="">
        <span>Copyright © 2020.<a href="#">MasterStudy.</a> Theme by <a href="#">StyleMixThemes</a></span>
    </div>

</template>

<style lang="scss">
@use '../components/style/varables.scss' as *;
#ContainerFine{
    display: flex;
    justify-content: flex-start;
    padding: 20px 0;
    margin: 0 300px;
    gap: 14px;
    img{
        width:26px;

    }
    span{
        a{
            color: white;
        }
    }
}

</style>

