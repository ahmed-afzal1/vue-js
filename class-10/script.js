var app = new Vue({
    el : '#app',
    data :{
        names : ['asif','anik','appel','arman','adnan'],
        fruits :[
            {name : 'Mango', color : 'green|yellow', weight: '2'},
            {name : 'Orange', color : 'green|orange', weight: '.5'},
            {name : 'Banana', color : 'green|yellow', weight: '.25'},
            {name : 'Apple', color : 'green|red', weight: '.67'},
            {name : 'Lemon', color : 'green|green', weight: '.25'},
        ]
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

