<template>
  <div>
    <div v-for='(product, index) in products' :key='index' class="produit">
      <h1>{{product['name']}}</h1>
      <b>Quantité : </b> {{product['quantity']}} <br>
      <b>Marque : </b>{{product['brand']}} <br>
      <b>Code barre : </b>{{product['bar_code']}} <br>
      <img v-bind:src="product.image">
    </div>
  </div>
</template>

<script>

  export default {

      data: function(){
          return{
          products: [
              {
                  name:'Lipton Ice Tea',
                  brand: 'Lipton',
                  bar_code: '123456125',
                  quantity:'200ml',
                  ingredients:
                      {name: 'sugar', proportion: '85'},
                  image:'/img/Lipton.jpg'},
              {
                  name:'Coca Cola',
                  brand: 'Coca Cola Company',
                  bar_code: '58541895', quantity:'320ml',
                  ingredients:
                      {name: 'sugar', proportion: '70'},
                  image:'/img/coca.jpg'}]
          }
      }
  }
</script>

<style>

.produit{
  padding : 10px;
  border: 1px solid black;
  width : 70%;
  margin: auto;
}

  .produit img{
    width : 200px;
  }


</style>
