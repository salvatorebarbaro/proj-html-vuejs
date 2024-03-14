<script>
  import { store } from '../components/store'
  import ItemsHover from '../components/ItemsHover.vue'

  import ItemsMove from '../components/ItemsMove.vue'
  
  export default {
    name: 'AppCorsirecenti',
    data() {
      return {
        store,
      }
    },
    components: {
      ItemsHover,
      ItemsMove,
    },
    created() {},
    methods: {},
  }
  </script>
<template>
    <div id="container_corsinuovi">
      <h2>Recent Courses</h2>
      <ul>
        <ItemsHover v-for="Currentelement in store.elements" :oggetto="Currentelement"></ItemsHover>
      </ul>
      <ul id="elemento_mobile">
        <ItemsMove v-for="iconacorrente in store.Icons" :Icone="iconacorrente"></ItemsMove>
      </ul>
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
        <div class="card">
          <img src="../assets/img/949316_2a64_11-272x161.jpg" alt="">
          <div id="container_txt">
            <div class="cosa">Art & Craft>></div>
            <span> Foundations for Mastering Watercolor Painting</span>
            <hr>
            <div class="container_footer">
              <div>stelle</div>
              <div class="container_price">
                <span class="price">$19.99</span>
                <span>$10</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/img/366802_6fcc-272x161.jpg" alt="">
          <div id="container_txt">
            <div class="cosa">Food &  Beverage></div>
            <span>Get Wine-Smart</span>
            <hr>
            <div class="container_footer">
              <div>stelle</div>
              <div class="container_price">
                <span class="price">$49.99</span>
                <span>$25</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/img/381588_2e6d_4-272x161.jpg" alt="">
          <div id="container_txt">
            <div class="cosa">Art & Craft></div>
            <span> The Colored Pencil Drawing Course</span>
            <hr>
            <div class="container_footer">
              <div>stelle</div>
              <div class="container_price">
                <span class="price">$34.99</span>
                <span>$18</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/img/838056_611a_3-272x161.jpg" alt="">
          <div id="container_txt">
            <div class="cosa">Art & Craft></div>
            <span>Paint Realistic Watercolor and Botanicals-STUDIO BASICS</span>
            <hr>
            <div class="container_footer">
              <div>stelle</div>
              <div class="container_price">
                <span class="price">$69.99</span>
                <span>$35</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/img/1414956_d944_15-272x161.jpg" alt="">
          <div id="container_txt">
            <div class="cosa">Art & Craft></div>
            <span>Mastering Brushstrokes-Part 1</span>
            <hr>
            <div class="container_footer">
              <div>stelle</div>
              <div class="container_price">
                <span class="price">$19.99</span>
                <span>$10</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/img/1109398_4c13-272x161.jpg" alt="">
          <div id="container_txt">
            <div class="cosa">Art & Craft></div>
            <span>Paint Realistic Watercolour and Botanicals-MAGNOLIAS</span>
            <hr>
            <div class="container_footer">
              <div>stelle</div>
              <div class="container_price">
                <span class="price">$69.99</span>
                <span>$35</span>
              </div>
            </div>
          </div>
        </div>
     </div>
     <button>show all</button>
     
    </div>
  </template>
  
  
  
  <style lang="scss">
  @use '../components/style/varables.scss' as *;
  
  #container_corsinuovi {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    position: relative;
    h2 {
    color: $testo;
    font-size: 36px;
    margin-bottom: 64px;
    margin-top: 112px;
    }
    ul{
    display: flex;
    // gap: 20px;
    }
    #elemento_mobile{
        position: fixed;
        bottom: 145px;
        right: 0;
        display: flex;
        flex-direction: column;
        color: black;
        // border: 1px $grigio solid;
        align-items: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        background-color: white;

    }
    #container_corsi{
    padding: 52px 98px 82px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap:50px $gap ;
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
    button{text-transform: uppercase;
    color: white;
    background-color: #FF4450;
    margin-left: 14px;
    padding: 25px 34px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    white-space: nowrap;
    font-weight: 600;
        margin-bottom: 110px;
    }
    

  }
  
  
  
  
  
  
  </style>
  