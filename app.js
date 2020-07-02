// 实力化vue 对象
new Vue({
  el: '#vue-app', //html入口
  data: {
    name: '',
    age: 20,
  },
  methods: {
    getName() {
      this.name = this.$refs.name.value;
    },
    getAge() {
      this.age = this.$refs.age.value;
    },
  },
  watch: {
    name(val, oldVal) {
      console.log(val, oldVal);
    },
    age(val, oldVal) {
      console.log(val, oldVal);
    },
  },
});
