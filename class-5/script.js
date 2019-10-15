var app = new Vue({
    el : '#app',

    data :{
       log :{
           x : 0,
           y : 0,
       }
    },
    methods:{
        me(event){
            console.log(event);
        },
        over(event){
           this.log.x = event.offsetX
           this.log.y = event.offsetY
        }
    }
   
})

