// 实力化vue 对象
new Vue({
  el: '#vue-app', //html入口
  data: {
    age: 30,
    x: 0,
    y: 0,
  },
  methods: {
    add(inc) {
      this.age += inc;
    },
    subtract(dec) {
      this.age -= dec;
    },
    updataXY(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
});
