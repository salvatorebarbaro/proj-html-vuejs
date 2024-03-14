<script>

export default{
  name:'AppSectionNewsletter',
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
<div id="sezioneRossa">
        <div id="contenitore">
            <div id="sezione_testo">
                <h3>Subscribe our newsletter</h3>
                <p>They are many variations of passages of lorem ipsum aviable , but in the majority have suffered <br> alteration in some form , by injected humour, or randomised words</p>
            </div>
            <div id="Sezione_ricerca" >
                <h3>Your E-mail address</h3>
                <div class="topnav">
                <input type="text" placeholder="Enter your Email">
                <button id="Bottone">Search</button>
            </div>
            </div>

        </div>
</div>

</template>

<style lang="scss">
#sezioneRossa{
        width: 100%;
        background-color: #FF4450;
        display: flex;
        justify-content: center;
        #contenitore{
            display: flex;
            gap: 32px;
            padding-top: 40px;
            padding-bottom: 58px;
            #sezione_testo{
                h3{
                    margin-bottom: 20px;
                    font-size: 20px;
                    font-weight: 900;
                }
            }
            #Sezione_ricerca{
                h3{
                    margin-bottom: 20px;
                    text-transform: uppercase;
                }
                .topnav
                {
                    display: flex;
                    align-items: stretch;
                    input{
                        min-width: 334px;
                        padding: 16px;
                        background-color: white;
                        border: transparent;
                        color: black;
                    }
                    button{
                        min-width: 136px;
                        text-transform: uppercase;
                        padding: 16px;
                        background-color: #457992;
                        border: transparent;
                        cursor: pointer;
                    }
                }
            }

        }
    }


</style>

