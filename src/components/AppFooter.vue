<script>
import SectionInfo from '../components/SectionInfo.vue'


import SectionEnd from '../components/SectionEnd.vue'
export default{
  name:'AppFooter',
  data(){
    return{
        

       
    }
  },
    components:{
        SectionInfo,
        SectionEnd,
    
        
      
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
<div id="Footer">
  <div id="section">
    <SectionInfo></SectionInfo>
    
  </div>
  <SectionEnd></SectionEnd>
</div>

</template>

<style lang="scss">
@use '../components/style/varables.scss' as *;
#Footer{
    background-color: $testo;
    color: white;
    display: flex;
    flex-direction: column;
    #section{
        display: flex;
        justify-content: center;
        padding: 68px 0 56px;
        border-top: 1px solid $grigio;
        border-bottom: 1px solid $grigio;
      }
}

</style>

