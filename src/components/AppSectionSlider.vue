<script>

export default{
  name: 'AppSectionSlider',
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
}


</script>

<template>
  <div id="container_img">
    <img src="../assets/img/bg.png" alt="">
    <div id="text">
      <h2>Limitless learning,<br> more possibilites</h2>
      <p>Online courses open the opportunity for learning to almost anyone, <br> regardless of their scheduling commitments.</p>
      <button>Read more</button>
    </div>

  </div>

</template>

<style lang="scss">
#container_img{
  position: relative;
  background-image: url(../assets/img/bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  #text{
    color: #273044;
    position: absolute;
    top: 160px;
    left: 350px;
    h2{
      font-size: 48px;
      
      margin-bottom: 40px;
    }
    p{
      font-size: 16px;
      margin-bottom: 50px;
    }
    button{
      text-transform: uppercase;
      color: white;
      background-color: #FF4450;
      margin-left: 14px;
      padding: 25px 34px;
      border: 0;
      border-radius: 30px;
      cursor: pointer;
      white-space: nowrap;
      font-weight: 600;
    }
  }
}


</style>

