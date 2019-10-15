var app = new Vue({
    el : '#app',
    data :{
        name : 'Imtiaze',
        jhonAge : 54,
        janeAge : 24,
        leonAge : 60,
    },
    methods:{
        Message(){
            console.log('You!');
        }
    },
    computed :{
        result : function(){
            return this.a * this.b;
        }
    }
    
})

