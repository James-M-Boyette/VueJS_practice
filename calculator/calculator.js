var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Your handy calculator app!",
      message2: "Can you have more than one?",
      n1: "0",
      n2: "0",
      n3: "0"
      sum: "0"
    };
  },
  methods: {
    addNumbers: function(){
      // console.log(n2)
      //var sum = n1 + n2 + n3
      console.log(this.n1 + this.n2 + this.n3);
    }
  }
});