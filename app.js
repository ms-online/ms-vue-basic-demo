new Vue({
  el: '#vue-app',
  data() {
    return {
      todos: [],
      todo: {
        title: '',
        completed: false,
      },
    };
  },
  mounted() {
    // fetch('http://jsonplaceholder.typicode.com/todos')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((todos) => (this.todos = todos));

    axios.get('http://jsonplaceholder.typicode.com/todos').then((res) => {
      // console.log(res.data);
      this.todos = res.data;
    });
  },
  methods: {
    submit() {
      // fetch('http://jsonplaceholder.typicode.com/todos', {
      //   method: 'POST',
      //   body: JSON.stringify(this.todo),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // })
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((todo) => {
      //     this.todos.unshift(todo);
      //   });

      axios
        .post('http://jsonplaceholder.typicode.com/todos', this.todo)
        .then((res) => {
          // console.log(res.data);
          todos = this.todos.unshift(res.data);
        });
    },
  },
});
