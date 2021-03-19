// Try implementing code using `v-on:click`, `v-model`, and `v-for`.
// Make a button that runs a Vue.js method to update some Vue.js data!
// Add an input with a v-model to see how it can update data dynamically!

/* global Vue */
var app = new Vue({
  el: "#app",           // 'el' stands for "element", and is what vue "latches on to" && for '#app' ... the # indicates an "ID"
  // a '.' indicates a class
  data:                 // Data is a JS object, and has key:value pairs
                        // This is also where we store our variables - and can show them on the html page
  
  function() {
    return {
      message1: "This is the pre-loaded message ...",
    };
  
  },
});

// var app5 = new Vue({
//   el: '#app-5',
//   data: {
//     message: 'Can you read me in reverse?'
//   },
//   methods: {
//     reverseMessage: function () {
//       this.message = this.message.split('').reverse().join('')
//     }
//   }
// })
// var app6 = new Vue({
//   el: '#app-6',
//   data: {
//     message: 'Hello Vue!'
//   }
// })