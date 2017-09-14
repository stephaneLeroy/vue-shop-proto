var eventBus = new Vue()

var products = Vue.component('products',{
  template: '#products',
  data: function () {
    return { products: [{
      "id": 1,
      "name": "Rouge à lèvre",
      "price": "",
      "img": "/assets/rouge_a_levres.jpg"
    }] }
  }
});

var product = Vue.component('product',{
  template: '#product',
  props: ['product'],
  methods: {
    addToCart: function () {
      eventBus.$emit('addToCart', this.product)
    }  
  }
});

new Vue({
  el: '#main',
  data: function () {
    return {
      cart: []
    }
  },
  computed: {
    cartCount: function () {
      return this.cart.length
    }
  },
  mounted: function () {
    var that = this
    eventBus.$on('addToCart', function (product) {
      that.cart.push(product)
    })
  }
});