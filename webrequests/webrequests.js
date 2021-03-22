/* global Vue, axios */axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

var app = new Vue({
  el: "#app",
  data: {
    message: "Making Web Requests (A Practice File)",
    todos: [],
    newTodo:"",
  },
  methods: {
    // ...
    loadTodos: function() { 
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
          console.log(response.data);
          this.todos = response.data;
        })
    },
    makeNewTodo: function(){
      console.log('post request');
      axios.post("https://jsonplaceholder.typicode.com/todos", {
        userId: 4,
        title: this.newTodo,
      }).then(response => {console.log(response);
      this.todos.push(response.data);
    });
    },
    printArray: function(){
      console.log(todos);
    },
  },
  created: function(){
    console.log('in created...');
    this.loadTodos();
  },
});