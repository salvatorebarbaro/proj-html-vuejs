<script>
import {store} from '../components/store.js'

// import ItemsCourses from '../components/ItemsCourses.vue'

export default{
  name:'AppSectionCourses',
  data(){
    return{
        store,

       
    }
  },
    components:{
        // ItemsCourses,
        
      
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
<div id="container_courses">
    <h3>Popular Development Courses</h3>
        <div id="container_total" >
            <!-- <ItemsCourses v-for="corsocorrente in store.courses" :elemento="corsocorrente"></ItemsCourses> -->
            <div id="card">
                <img src="../assets/img/895786_7b4b_2-272x161.jpg" alt="">
                <div id="Container_txt">
                    <div id="cosa">Development></div>
                    <span>The Complete IOS 10 & Swift 3 Developer Course</span>
                    <hr>
                       <div id="Container_footer">
                            <div>stelle</div>
                            <div id="container_price">
                                <span id="price">$199.99</span>
                                <span>$100</span>

                            </div>

                        </div>
                </div>
                
            </div>
            <div id="card">
                <img src="../assets/img/246154_d8b0_3-272x161.jpg" alt="">
                <div id="Container_txt">
                    <div id="cosa">Development></div>
                    <span>Web design for beginners:Real World Coding in HTML & CSS</span>
                    <hr>
                       <div id="Container_footer">
                            <div>stelle</div>
                            <div id="container_price">
                                <span id="price">$129.99</span>
                                <span>$65</span>

                            </div>

                        </div>
                </div>
                
            </div>
            <div id="card">
                <img src="../assets/img/752950_b773-272x161.jpg" alt="">
                <div id="Container_txt">
                    <div id="cosa">Development></div>
                    <span>GitHub Ultimate:Master Git and GitHub - Beginner to expert</span>
                    <hr>
                       <div id="Container_footer">
                            <div>stelle</div>
                            <div id="container_price">
                                <span id="price">$99.99</span>
                                <span>$50</span>

                            </div>

                        </div>
                </div>
                
            </div>
            <div id="card">
                <img src="../assets/img/1253188_58f7_2-272x161.jpg" alt="">
                <div id="Container_txt">
                    <div id="cosa">Development></div>
                    <span>The Complete IOS 11 & Swift Developer Course -Build 20 Apps</span>
                    <hr>
                       <div id="Container_footer">
                            <div>stelle</div>
                            <div id="container_price">
                                <span id="price">$199.99</span>
                                <span>$100</span>

                            </div>

                        </div>
                </div>
                
            </div>
            <div id="card">
                <img src="../assets/img/919872_ed54_6-272x161.jpg" alt="">
                <div id="Container_txt">
                    <div id="cosa">Development></div>
                    <span>Android Java Masterclass- Become an App Developer</span>
                    <hr>
                       <div id="Container_footer">
                            <div>stelle</div>
                            <div id="container_price">
                                <span id="price">$99.99</span>
                                <span>$50</span>

                            </div>

                        </div>
                </div>
                
            </div>
            <div id="card">
                <img src="../assets/img/951684_9c1a_2-272x161.jpg" alt="">
                <div id="Container_txt">
                    <div id="cosa">Development></div>
                    <span>Xamarin Forms:Build Native Cross-platform Apps with C#</span>
                    <hr>
                       <div id="Container_footer">
                            <div>stelle</div>
                            <div id="container_price">
                                <span id="price">$189.99</span>
                                <span>$95</span>

                            </div>

                        </div>
                </div>
                
            </div>
        </div>
</div>

</template>

<style lang="scss">
@use '../components/style/varables.scss' as *;
#container_courses{
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    padding: 92px 100px 80px;
    h3{
        font-size: 18px;
        margin-bottom: 42px;
        font-weight: 700;
    }
    #container_total{
        display: flex;
        gap: 20px;
        align-items: stretch;
        #card{
            display: flex;
            flex-direction: column;
            border: 1px solid $grigio;
            width: calc(100% / 6 - $gap / 6 * 5);
            flex-grow: 1;
            #Container_txt{
                padding: 20px;
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
                    align-items: center;
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
        
        
        
        
    }
}

</style>

