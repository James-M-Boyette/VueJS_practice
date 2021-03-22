/* global Vue */
var app = new Vue({
  el: "#app",
  data: {
    message_1: "We're showing a variable (message_1) from JS's data section, in the div-app, using mustaches",
    message_2: "This message is on the next, lower line using pParagraph tags (apparently this. doesn't interfere?)",
    m3: "Enough of that - try the calculator below:",
    m4: "=> Your input, here, is being stored live in the n1 variable",
    m5: "The addNumbers function was called!",
    m6: "The subtractNumbers function was called!",
    m7: "The multiplyNumbers function was called!",
    m8: "The divideNumbers function was called!",
    n1:  0,
    n2: 0, 
    n3: 0,
    total: 123,
  },
  methods: {
    addNumbers: (function() {
      console.log(this.m5);
      this.total = (parseInt(this.n1) + parseInt(this.n2) + parseInt(this.n3));
    }),
    subtractNumbers: (function() {
      console.log(this.m6);
      this.total = (parseInt(this.n1) - parseInt(this.n2) - parseInt(this.n3));
    }),
    multiplyNumbers: (function() {
      console.log(this.m7);
      this.total = (parseInt(this.n1) * parseInt(this.n2) * parseInt(this.n3));
    }),
    divideNumbers: (function() {
      console.log(this.m7);
      this.total = (parseInt(this.n1) / parseInt(this.n2) / parseInt(this.n3));
    }),
  }
});