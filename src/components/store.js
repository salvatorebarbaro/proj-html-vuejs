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

    // courses:[
    //     {
    //         img:'../assets/img/895786_7b4b_2-272x161.jpg',
    //         type:'Development>',
    //         name:'The Complete IOS 10 & Swift 3 Developer Course ',
    //         rating:'4',
    //         price:'$199.99',
    //         discount:'$100'
    //     },
    //     {
    //         img:'../assets/img/246154_d8b0_3-272x161.jpg',
    //         type:'Development>',
    //         name:'Web design for beginners:Real World Coding in HTML & CSS',
    //         rating:'5',
    //         price:'$129.99',
    //         discount:'$65'
    //     },
    //     {
    //         img:'../assets/img/752950_b773-272x161.jpg',
    //         type:'Development>',
    //         name:'GitHub Ultimate:Master Git and GitHub - Beginner to expert',
    //         rating:'4',
    //         price:'$99.99',
    //         discount:'$50'
    //     },
    //     {
    //         img:'../assets/img/1253188_58f7_2-272x161.jpg',
    //         type:'Development>',
    //         name:'The Complete IOS 11 & Swift Developer Course -Build 20 Apps ',
    //         rating:'4',
    //         price:'$199.99',
    //         discount:'$100'
    //     },
    //     {
    //         img:'../assets/img/919872_ed54_6-272x161.jpg',
    //         type:'Development>',
    //         name:'Android Java Masterclass- Become an App Developer',
    //         rating:'4',
    //         price:'$99.99',
    //         discount:'$50'
    //     },
    //     {
    //         img:'../assets/img/951684_9c1a_2-272x161.jpg',
    //         type:'Development>',
    //         name:'Xamarin Forms:Build Native Cross-platform Apps with C#',
    //         rating:'4',
    //         price:'$189.99',
    //         discount:'$95'
    //     },
        
        
    // ],

    

})