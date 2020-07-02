// 实力化vue 对象
const one = new Vue({
  el: '#vue-app-one', //html入口
  data() {
    return {
      title: '这是app one 的title',
    };
  },
  methods: {},
  computed: {
    greeting() {
      return '你好，Yellemy！';
    },
  },
});

const two = new Vue({
  el: '#vue-app-two', //html入口
  data() {
    return {
      title: '这是app two 的title',
    };
  },
  methods: {
    // apptwo修改appone
    changeAppOneTitle() {
      one.title = 'Hello World！';
    },
  },
  computed: {
    greeting() {
      return '你好，Worley！';
    },
  },
});

// 外部修改
two.title = '哈哈哈';
