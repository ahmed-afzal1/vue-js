var app = new Vue({
    el : '#app',
    data :{
     name : 'Tithy',
     website: 'https://www.youtube.com',
     firstNumber : '',
     secondNumber: ''
    },
    methods:{
        Message(){
            console.log('You!');
        }
    },
    computed: {
        result: function(){
            return this.firstNumber * this.secondNumber;
        }
    }
   
})

