var app = new Vue({
    el : '#app',

    data :{
       dollar : 20,
    },
    methods:{
        ammount(taka){
            this.dollar += taka;
        }
    }
   
})

