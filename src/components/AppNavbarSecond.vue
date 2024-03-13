<script>




export default{
  name: 'AppNavbarSecond',
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
    <div id="container_Second">
        <img src="../assets/img/masterstudy-logo.svg" alt="">
        <a id="Container_hamburg" href="">
            <i class="fa-solid fa-bars"></i>
            <span>category</span>
        </a>
        <div id="container_search">
            <div class="topnav">
                <input type="text" placeholder="Search Courses">
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>

        </div>
        <div id="Container_icons">
            <div id="megafono">
                <i class="fa-solid fa-bullhorn"></i>
                <a href="">Become an instructor</a>
            </div>
            <div id="bag">
                <i class="fa-solid fa-briefcase"></i>
                <a href="">For enterprise</a>
            </div>
            <div id="person">
                <i class="fa-solid fa-user-large"></i>
                <a href="#">Log in</a>
                <button>SIGN UP</button>
            </div>
            <div class="ribbon"><a href=""><i class="fa-solid fa-ribbon"></i></a></div>

        </div>
        
    </div>


</template>

<style lang="scss">
#container_Second{
    background-color: white;
    padding: 24px 114px;
    border-bottom: 2px grey solid;
    display: flex;
    color: black;
    align-items: center;
    #Container_hamburg{
        display: flex;
        align-items: center;
        margin-left: 50px;
        margin-right: 14px;
        text-decoration: none;
        gap: 5px;
        .fa-solid{
            font-size: 14px;
            color: #AAAAAA;
        }
        span{
            font-size: 14px;
            color: #AAAAAA;
            text-transform: uppercase;
        }

    }
    #container_search{
        .topnav{
            display: flex;
        align-items: stretch;
        margin-right: 56px;
        input{
        padding: 18px 15px;
        width: 510px;
        background-color: #F0F2F5;
        color: #AAAAAA;
        border: 0;
        }
        button{
            padding: 0 22px;
            background-color: #457992;
            border: 0;
            cursor: pointer;
            
            .fa-solid{
                font-size: 16px;
            }
        } 
        }
        

        
    }
    #Container_icons{
            display: flex;
            gap: 28px;
            #megafono{
                display: flex;
                gap: 10px;
                align-items: center;
                .fa-solid{
                    color: #457992;
                }
                a{
                    font-weight: 200;
                    text-decoration: none;
                    color: #AAAAAA;
                    white-space: nowrap;
                    font-size: 14px;
                }
            }
            #bag{
                display: flex;
                gap: 10px;
                align-items: center;
                margin-right: 58px;
                .fa-solid{
                    color: #457992;
                }
                a{
                    font-weight: 200;
                    text-decoration: none;
                    color: #AAAAAA;
                    white-space: nowrap;
                    font-size: 14px;
                }
            }
            #person{
                display: flex;
                gap: 10px;
                align-items: center;
                .fa-solid{
                    color: #457992;
                }
                a{
                    font-weight: 200;
                    text-decoration: none;
                    color: #AAAAAA;
                    white-space: nowrap;
                    font-size: 14px;
                }
                Button{
                    color: white;
                    background-color: #FF4450;
                    margin-left: 14px;
                    padding: 25px 34px;
                    border: 0;
                    border-radius: 30px;
                    cursor: pointer;
                }

            }
            .ribbon{
                display: flex;
                align-items: center;
                a{
                    color: #457992;
                }
            }
            
            
            

        }
}

</style>

