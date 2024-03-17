<script>



export default{
  name:'AppTypeUser',
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
    <div id="container_user">
        <div class="User">
            <img src="../assets/img/image_box_1-221x231.png" alt="">
            <div class="ContainerTextUser">
                <h2>Become an Instructor</h2>
                <span>Teach what you love. Masterstudy gives you <br> the tools to create a course.</span>
                <button>start teaching</button>
            </div>
        </div>
        <div class="User">
            <img src="../assets/img/image_box_2-234x231.png" alt="">
            <div class="ContainerTextUser">
                <h2>Acces for Business</h2>
                <span>Get unlimited access to 2,500 of top courses <br> for your team.</span>
                <button>doing business</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../components/style/varables.scss' as *;
#container_user{
    background-color: white;
    padding: 78px 90px;
    color: black;
    display: flex;
    gap: 30px;
    .User{
        border: 1px solid $grigio;
        padding: 72px 46px;
        // padding-right: calc(180px - 46px);
        display: flex;
        gap: 46px;
        width: 50%;
        // align-items: center;
    }
    .ContainerTextUser{
        display: flex;
        flex-direction: column;
        h2{
            font-size: 26px;
            color: $testo;
            margin-bottom: 32px;
        }
        span{
            font-size: 14px;
            color: $grigio;
            margin-bottom: 36px;
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
    max-width: 200px;
    font-weight: 600;
        }
    }
}
</style>

