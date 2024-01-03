export default {
  namespaced: true,

  state() {
    return { items: [], total: 0, qty: 0 }
  },

  mutations: {
    addProductToCart(state, payload) {
      const productData = payload
      const productInCartIndex = state.items.findIndex(
        ci => ci.productId === productData.id
      )

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++
      }
      else {
        state.items.push({
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1
        })
      }
      state.qty++
      state.total += productData.price
    },
    removeProductFromCart(state, payload) {
      const productInCartIndex = state.items.findIndex(
        cartItem => cartItem.productId === payload.productId
      )
      const prodData = state.items[productInCartIndex]
      state.items.splice(productInCartIndex, 1)

      state.qty -= prodData.qty
      state.total -= prodData.price * prodData.qty
    },
  },

  actions: {
    addToCart(context, payload) {
      const products = context.rootGetters['prods/products']
      const product = products.find(prod => prod.id === payload.id)
      context.commit('addProductToCart', product)
    },
    removeFromCart(context, payload) {
      context.commit('removeProductFromCart', payload)
    }
  },
  
  getters: {
    products(state) { return state.items},
    totalSum(state) { return state.total},
    quantity(state) { return state.qty }
  }
}
