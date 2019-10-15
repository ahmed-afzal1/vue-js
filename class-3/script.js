var app = new Vue({
    el : '#app',

    data :{
        name : 'Ahammed afzal',
        age  : 24,
        website: 'https://www.youtube.com/',
        classes : ['one','two'],
        value   : 'ahmmed afzal'
    },
   
})

/**
 * we do bind when we need use value as internal like in href,class,id,input value
 * NB. If we want use dynamic html atrribute that time we need binding
 */