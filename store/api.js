import { asyncgetProducts} from "../common/api";

export const state = () => []

export const mutations = {
  gotProducts(state, payload){
    state = payload
  }
}

export const actions = {
  async fetchProducts(context){
    const products = await asyncgetProducts()
    context.commit('gotProducts', products)
  }
}
