// 实力化vue 对象
new Vue({
  el: '#vue-app', //html入口,可操作的元素
  data: {
    name: 'Summer',
    wechat: 123456,
    website: 'https://www.baidu.com',
    websiteTag: '<a href="https://www.taobao.com">淘宝</a>',
  },
  methods: {
    // greeting() {
    //   return '很高兴认识大家！';
    // },
    greeting(time) {
      return `Good ${time} ${this.name}`;
    },
    haveLunch(time) {
      return `${this.name} 你吃${time}了吗？`;
    },
  },
});
