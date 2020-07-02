// 实力化vue 对象
new Vue({
  el: '#vue-app', //html入口
  data() {
    return {
      fruits: ['苹果', '草莓', '西瓜', '菠萝'],
      products: [
        { name: '苹果', color: 'red' },
        { name: '草莓', color: 'red' },
        { name: '西瓜', color: 'green' },
        { name: '菠萝', color: 'yellow' },
      ],
    };
  },
  methods: {},
  computed: {},
});
