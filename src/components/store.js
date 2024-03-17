// "Store" è una libreria JavaScript leggera e semplice utilizzata per la memorizzazione di dati nello storage del browser. Questo può includere l'archiviazione di dati come oggetti, array, stringhe e altri tipi di dati JavaScript. La libreria fornisce un'API semplice per memorizzare, recuperare e rimuovere dati dallo storage del browser.
import {reactive} from 'vue'
export const store = reactive({
    // oggetto inserito qui è come se fosse un dato condiviso tra tutti gli oggetti
    // in questo caso avremo films che è l'array vuoto delli nostri film
    links:["Home","Pages","Cours formats","Courses","Demos"],

    elements:["All Categories","Business","Design","Development","IT & Software","Lifestyle","Marketing","Office Productivity"],

    Topics:[
        {
            icon:'<i class="fa-solid fa-chart-column"></i>',
            name:'Business'
        },
        {
            icon:'<i class="fa-solid fa-palette"></i>',
            name:'Design'
        },
        {
            icon:'<i class="fa-solid fa-gear"></i>',
            name:'Development'
        },
        {
            icon:'<i class="fa-solid fa-face-smile"></i>',
            name:'Lifestyle'
        },
        {
            icon:'<i class="fa-solid fa-print"></i>',
            name:'Office Productivity'
        },
        
    ],
    Icons:[
        {
            icon:'<i class="fa-solid fa-tv"></i>',
        },
        {
            icon:'<i class="fa-solid fa-life-ring"></i>',
            
        },
        {
            icon:'<i class="fa-solid fa-wrench"></i>',
            
        },
        {
            icon:'<i class="fa-solid fa-cart-shopping"></i>',
            
        },
        {
            icon:'<i class="fa-solid fa-mobile-screen"></i>',
            
        },
        
    ],

    courses:[
        {
            img:'/src/assets/img/895786_7b4b_2-272x161.jpg',
            type:'Development>',
            name:'The Complete IOS 10 & Swift 3 Developer Course ',
            rating:'4',
            price:'$199.99',
            discount:'$100'
        },
        {
            img:'/src/assets/img/246154_d8b0_3-272x161.jpg',
            type:'Development>',
            name:'Web design for beginners:Real World Coding in HTML & CSS',
            rating:'5',
            price:'$129.99',
            discount:'$65'
        },
        {
            img:'/src/assets/img/752950_b773-272x161.jpg',
            type:'Development>',
            name:'GitHub Ultimate:Master Git and GitHub - Beginner to expert',
            rating:'4',
            price:'$99.99',
            discount:'$50'
        },
        {
            img:'/src/assets/img/1253188_58f7_2-272x161.jpg',
            type:'Development>',
            name:'The Complete IOS 11 & Swift Developer Course -Build 20 Apps ',
            rating:'4',
            price:'$199.99',
            discount:'$100'
        },
        {
            img:'/src/assets/img/919872_ed54_6-272x161.jpg',
            type:'Development>',
            name:'Android Java Masterclass- Become an App Developer',
            rating:'4',
            price:'$99.99',
            discount:'$50'
        },
        {
            img:'/src/assets/img/951684_9c1a_2-272x161.jpg',
            type:'Development>',
            name:'Xamarin Forms:Build Native Cross-platform Apps with C#',
            rating:'4',
            price:'$189.99',
            discount:'$95'
        },
        
        
    ],

    corsi_recenti: [
        {
          img: "/src/assets/img/895786_7b4b_2-272x161.jpg",
          type: "Sviluppo>",
          name: "The Complete IOS 10 & Swift 3 Developer Course",
          rating: "4",
          price: "$199.99",
          discount: "$100"
        },
        {
          img: "/src/assets/img/1561458_7f3b-272x161.jpg",
          type: "Design>",
          name: "CSS-The Complete Guide 2020 (incl. Flexbox,Grid & sass)",
          rating: "4",
          price: "$199.99",
          discount: "$100"
        },
        {
          img: "/src/assets/img/246154_d8b0_3-272x161.jpg",
          type: "Sviluppo>",
          name: "Web Design for Beginners: Real World Coding in HTML & CSS",
          rating: "5",
          price: "$129.99",
          discount: "$65"
        },
        {
          img: "/src/assets/img/1208228_d61c_4-272x161.jpg",
          type: "Design>",
          name: "Digitally Painting Light and Color: Amateur to Master",
          rating: "4",
          price: "$139.99",
          discount: "$70"
        },
        {
          img: "/src/assets/img/186792_41e4_4-272x161.jpg",
          type: "Art & Craft>",
          name: "Become an Arabic Calligraphy Artist from Scratch",
          rating: "4",
          price: "",
          discount: "$199.99"
        },
        {
          img: "/src/assets/img/1776542_30b1-272x161.jpg",
          type: "Google>",
          name: "Google Searching Ninja!",
          rating: "4",
          price: "$89.99",
          discount: "$45"
        },
        {
          img: "/src/assets/img/949316_2a64_11-272x161.jpg",
          type: "Art & Craft>>",
          name: "Foundations for Mastering Watercolor Painting",
          rating: "4",
          price: "$19.99",
          discount: "$10"
        },
        {
          img: "/src/assets/img/366802_6fcc-272x161.jpg",
          type: "Food & Beverage>",
          name: "Get Wine-Smart",
          rating: "4",
          price: "$49.99",
          discount: "$25"
        },
        {
          img: "/src/assets/img/381588_2e6d_4-272x161.jpg",
          type: "Art & Craft>",
          name: "The Colored Pencil Drawing Course",
          rating: "4",
          price: "$34.99",
          discount: "$18"
        },
        {
          img: "/src/assets/img/838056_611a_3-272x161.jpg",
          type: "Art & Craft>",
          name: "Paint Realistic Watercolor and Botanicals-STUDIO BASICS",
          rating: "4",
          price: "$69.99",
          discount: "$35",
        },
        {
          img: "/src/assets/img/1414956_d944_15-272x161.jpg",
          type: "Art & Craft>",
          name: "Mastering Brushstrokes-Part 1",
          rating: "4",
          price: "$19.99",
          discount: "$10",
        },
        {
           img:"/src/assets/img/1109398_4c13-272x161.jpg",
           type: "Art & Craft>",
           name: "Paint Realistic Watercolour and Botanicals-MAGNOLIAS",
           rating: "4",
           price: "$69.99",
        discount: "$35",
        }
    ],
    corsi_Popolari: [
      {
        img: "/src/assets/img/895786_7b4b_2-272x161.jpg",
        type: "Sviluppo>",
        name: "The Complete IOS 10 & Swift 3 Developer Course",
        rating: "4",
        price: "$199.99",
        discount: "$100"
      },
      {
        img: "/src/assets/img/1561458_7f3b-272x161.jpg",
        type: "Design>",
        name: "CSS-The Complete Guide 2020 (incl. Flexbox,Grid & sass)",
        rating: "4",
        price: "$199.99",
        discount: "$100"
      },
      {
        img: "/src/assets/img/246154_d8b0_3-272x161.jpg",
        type: "Sviluppo>",
        name: "Web Design for Beginners: Real World Coding in HTML & CSS",
        rating: "5",
        price: "$129.99",
        discount: "$65"
      },
      {
        img: "/src/assets/img/1208228_d61c_4-272x161.jpg",
        type: "Design>",
        name: "Digitally Painting Light and Color: Amateur to Master",
        rating: "4",
        price: "$139.99",
        discount: "$70"
      },
      {
        img: "/src/assets/img/186792_41e4_4-272x161.jpg",
        type: "Art & Craft>",
        name: "Become an Arabic Calligraphy Artist from Scratch",
        rating: "4",
        price: "",
        discount: "$199.99"
      },
      {
        img: "/src/assets/img/1776542_30b1-272x161.jpg",
        type: "Google>",
        name: "Google Searching Ninja!",
        rating: "4",
        price: "$89.99",
        discount: "$45"
      },
      
  ],

  Investiments: [
    {
      title:"Investing for Your Future",
      Person: "Linda Green",
      Job:"Product Manager, Apple Inc",
      Text:"It is no exaggeration to say this MasterStudy experience was transformative-both professionally and personally. This workshop will long remain a high point of my life. Thanks again.... I am feeling energized and eager to start teaching my class next week. I can't wait to use all of my new teaching tools. I will absolutely recommend this workshop to other educators!",
    },
    
],

About:[
  {
    title: "ABOUT",
    testo: "Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel, rutrum eu ipsum. Mauris accumsan eros eget libero posuere vulputate."
  }

],
Contact:[
  {
    title: "contact",
    address:"USA, California 20, First Avenue,",
    where:"California",
    contact1:"Tel:+1 212 458 300 32",
    contact2:"Fax:+1 212 375 24 14",
    email:"info@masterstudy.com",
  }
],
Social:[
  {
    title: "Social network",
    
  }
],
iconeSocial:[
  {
    icon:'<i class="fa-brands fa-facebook"></i>',
    color:'#3B5998',
  },
  {
    icon:'<i class="fa-brands fa-instagram"></i>',
    color:'#C32AA3',
  },
  {
    icon:'<i class="fa-brands fa-linkedin"></i>',
    color:'#0077B5',
  },
  {
    icon:'<i class="fa-brands fa-pinterest"></i>',
    color:'#BD081C',
  },
  {
    icon:'<i class="fa-brands fa-twitter"></i>',
    color:'#1DA1F2',
  },
  {
    icon:'<i class="fa-solid fa-basketball"></i>',
    color:'#EA4C89',
  },
  {
    icon:'<i class="fa-brands fa-google-plus"></i>',
    color:'#DB4437',
  },
  {
    icon:'<i class="fa-brands fa-skype"></i>',
    color:'#00AFF0',
  }  
    
    
    
    
   
    

  
]



})