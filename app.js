// 实力化vue 对象
new Vue({
  el: '#vue-app', //html入口
  data: {
    age: 20,
    a: 0,
    b: 0,
  },
  methods: {
    // addToA() {
    //   console.log('addToA');
    //   return this.age + this.a;
    // },
    // addToB() {
    //   console.log('addToB');
    //   return this.age + this.b;
    // },
  },
  computed: {
    // 必须有返回值
    addToA() {
      console.log('addToA');
      return this.age + this.a;
    },
    addToB() {
      console.log('addToB');
      return this.age + this.b;
    },
  },
});
