// 实力化vue 对象
new Vue({
  el: '#vue-app', //html入口
  data() {
    return {
      status: 100,
      ended: false,
    };
  },
  methods: {
    punch() {
      this.status -= 20;
      if (this.status <= 0) {
        this.ended = true;
      }
    },
    restart() {
      this.status = 100;
      this.ended = false;
    },
  },
  computed: {},
});
