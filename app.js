// 全局变量（同时改变名称）

let data = {
  name: 'Yellemy',
  age: 25,
};

// 创建全局组件
Vue.component('greet', {
  // html模版
  template: `<p>这是全局组件，可以在任何实例的容器中使用
    我的名字是：{{name}}, 我的年龄是：{{age}};
    <button @click= changeName()>改变姓名</button>
  </p>`,

  // 属性
  data() {
    return data;
  },
  // 方法
  methods: {
    changeName() {
      this.name = 'Worley';
    },
  },
});

// 实力化vue 对象
const one = new Vue({
  el: '#vue-app-one', //html入口
});

const two = new Vue({
  el: '#vue-app-two', //html入口
});
