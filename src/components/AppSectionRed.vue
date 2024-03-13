<script>

export default{
  name:'AppSectionRed',
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
    <div id="Container_section">
        <div id="Section_red">
            <div id="text">
                <h2>Udemy Affiliates Sales</h2>
                <span>Monetize your audience and acttract customers with <br> Udemy!</span>
            </div>
        </div>
        <div id="section_img">
            <img src="../assets/img/slide-1.jpg" alt="">
        </div>

    </div>
    

</template>

<style lang="scss">
#Container_section{
    padding-top: 30px;
    background-color: white;
    display: flex;
    #Section_red{
        background-color: #FF4450;
        width: 50%;
        position: relative;
        
        #text{
            position: absolute;
            z-index: 5;
            top: 100px;
            right: 90px;
            h2{
                margin-bottom: 36px;
                font-size: 42px;
            }
            span{
                font-size: 20px;
                font-weight: 400;
            }
        }

    }
    #Section_red::before{
    content: ""; /* Aggiungi un elemento per rappresentare il lato inclinato */
    position: absolute; /* Posizionamento assoluto per sovrapporre questo elemento al div */
    width: 100%; /* Larghezza uguale a quella del div */
    height: 100%; /* Altezza uguale a quella del div */
    background-color:#FF4450 ; /* Stesso colore di sfondo del div */
    // proprietà che ci permette di deformare un elemento sull'asse delle x
    transform: skewX(-150deg); /* Inclina l'elemento di -150 gradi lungo l'asse X */
    
    transform-origin: top right; /* Origin della trasformazione */
    right: 0; /* Allinea il lato destro del lato inclinato con il lato destro del div */
    top: 0; /* Allinea il lato inferiore del lato inclinato con il lato inferiore del div */
  
    }
    #section_img{
        width: 50%;
        img{
            width: 100%;
            height: 100%;
        }
    }
}

</style>

