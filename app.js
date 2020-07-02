// 实力化vue 对象
new Vue({
  el: '#vue-app', //html入口
  data: {
    name: '',
    age: 20,
  },
  methods: {
    getName() {
      // console.log(this.$refs.name.value);
      this.name = this.$refs.name.value;
    },
    getAge() {
      // console.log(this.$refs.age.value);
      this.age = this.$refs.age.value;
    },
  },
});
