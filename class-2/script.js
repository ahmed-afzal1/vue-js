var app = new Vue({
    el : '#app',

    data :{
        name : 'Ahammed afzal',
        age  : 24,
    },
    methods : {
        myDetails(){
            return `Hello ${this.name} your age is ${this.name}`;
        },
        valuePass(name){
            return `your gf name is ${name}`
        }
    }
})