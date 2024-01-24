const app= Vue.createApp({
    data(){
        return{
            product:'Socks',
            images:'./assets/images/socks_green.jpg',
            inStock:true,
            details:['50% cotton','50% wool'],
            variants:[
                {id:1 , color:'green'},
                {id:2 , color:'blue'},
            ]
        }
    }
})
