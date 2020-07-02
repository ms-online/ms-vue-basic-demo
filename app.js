// 实力化vue 对象
new Vue({
  el: '#vue-app', //html入口
  data() {
    return {
      mrChangeColor: false,
      mrChangeLength: false,
    };
  },
  methods: {},
  computed: {
    compClasses() {
      return {
        changeColor: this.mrChangeColor,
        changeLength: this.mrChangeLength,
      };
    },
  },
});
