<script>
  import { store } from '../components/store'
  import ItemsHover from '../components/ItemsHover.vue'

  import ItemsMove from '../components/ItemsMove.vue'

  import itemscorsirecenti from '../components/itemscorsirecenti.vue'
  
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
      itemscorsirecenti,
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
      <div id="containerCards">
        <itemscorsirecenti v-for="corso_recente in store.corsi_recenti"  :corso_recente_props="corso_recente"></itemscorsirecenti>
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
    #containerCards{
      display: flex;
        gap: 20px;
        align-items: stretch;
        flex-wrap: wrap;
        margin: 52px 100px 80px;
      color: black;
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
  