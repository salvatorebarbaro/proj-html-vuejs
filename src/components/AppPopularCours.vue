<script>

export default{
  name:'AppPopularCours',
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
     <div id="container_corsipopolari">
      <h2>Popular courses</h2>
      <span>Discover our most popular courses for self learning</span>
      <div id="container_corsi">
        <div class="card">
          <img src="../assets/img/895786_7b4b_2-272x161.jpg" alt="">
          <div id="container_txt">
            <div class="cosa">Development></div>
            <span>The Complete IOS 10 & Swift 3 Developer Course</span>
            <hr>
            <div class="container_footer">
              <div>stelle</div>
              <div class="container_price">
                <span class="price">$199.99</span>
                <span>$100</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/img/1561458_7f3b-272x161.jpg" alt="">
          <div id="container_txt">
            <div class="cosa">Design></div>
            <span>CSS-The Complete Guide 2020 (incl. Flexbox,Grid & sass)</span>
            <hr>
            <div class="container_footer">
              <div>stelle</div>
              <div class="container_price">
                <span class="price">$199.99</span>
                <span>$100</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/img/246154_d8b0_3-272x161.jpg" alt="">
          <div id="container_txt">
            <div class="cosa">Development></div>
            <span>Web Design for Beginners: Real World Coding in HTML & CSS</span>
            <hr>
            <div class="container_footer">
              <div>stelle</div>
              <div class="container_price">
                <span class="price">$129.99</span>
                <span>$65</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/img/1208228_d61c_4-272x161.jpg" alt="">
          <div id="container_txt">
            <div class="cosa">Design></div>
            <span>Digitally Painting Light and Color: Amateur to Master</span>
            <hr>
            <div class="container_footer">
              <div>stelle</div>
              <div class="container_price">
                <span class="price">$139.99</span>
                <span>$70</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/img/186792_41e4_4-272x161.jpg" alt="">
          <div id="container_txt">
            <div class="cosa">Art & Craft></div>
            <span>Become an Arabic Calligraphy Artist from Scratch</span>
            <hr>
            <div class="container_footer">
              <div>stelle</div>
              <div class="container_price">
                <span class="price"></span>
                <span>$199.99</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/img/1776542_30b1-272x161.jpg" alt="">
          <div id="container_txt">
            <div class="cosa">Google></div>
            <span>Google Searching Ninja!</span>
            <hr>
            <div class="container_footer">
              <div>stelle</div>
              <div class="container_price">
                <span class="price">$89.99</span>
                <span>$45</span>
              </div>
            </div>
          </div>
        </div>
        
     </div>
     <div id="section_button">
        <button><i class="fa-solid fa-chevron-left"></i></button>
        <button><i class="fa-solid fa-chevron-right"></i></button>
     </div>
    
     
     
    </div>
</template>

<style lang="scss">
@use '../components/style/varables.scss' as *;
#container_corsipopolari {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F0F4FA;
    h2 {
    color: $testo;
    font-size: 40px;
    margin-bottom: 10px;
    margin-top: 112px;
    }
    span{
        color: $testo;
        font-size: 14px;
        font-weight: 300;
    }
    #container_corsi{
    padding: 52px 98px 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap:$gap ;
    .card{
        display: flex;
        flex-direction: column;
        border: 1px solid $grigio;
        width: calc(100% / 6 - $gap / 6 * 5 );
        color: black;
        #container_txt{
                padding: 20px;
                .cosa{
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
                .container_footer{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .container_price{
                    display: flex;
                    flex-direction: column;
                    .price{
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
    #section_button{
        margin-bottom: 76px;
        button{
            padding: 16px;
            border: 1px solid $grigio;
            background-color:#FFFFFF;
            color: $grigio;
            cursor: pointer;
        }
    }
  }
  


</style>

