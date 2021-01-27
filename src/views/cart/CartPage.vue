<template>
    <div class="page-wrap">
        <h1> Shopping cart </h1>
        <CartGrid
            v-for="product in cartItems"
            :key="product.id"
            :product="product"/>
        <h3 class="total-price">Total: ${{ totalPrice }} </h3>
        <button class='checkout-button'> Proceed to Checkout </button>
    </div>
</template>

<script>

import { cartItems } from '../../fake-data'
import CartGrid from '../../components/CartGrid'

export default {
    name: 'CartPage',
    components: {
        CartGrid
    },
    data () {
        return {
            cartItems
        }
    },
    computed: {
        totalPrice () {
            return cartItems.reduce((sum, item) => sum + Number(item.price), 0)
        }
    }
}
</script>


<style scoped>
  h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }

  .page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
    margin: auto;
  }

  .total-price {
    padding: 16px;
    text-align: right;
  }

  .checkout-button {
    width: 100%;
  }

</style>