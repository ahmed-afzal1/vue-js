var app = new Vue({
    el : '#app',
    data :{
        name : 'ahammed afzal',
    },
    methods:{
        nameChange(e){
          this.name = e.target.value;
        }
    }
   
})

