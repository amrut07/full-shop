<template>
    <div class="page-wrap">
        <div v-if="product">
            <div class="img-wrap">
                <img :src="product.imageUrl"/>
            </div>
            <div class="product-details">
                <h1> {{ product.name }} </h1>
                <h3 class='price'> $ {{ product.price }} </h3>
                <p> Average Rating: {{ product.averageRating }} </p>
                <button class="add-to-cart"> Add to Cart </button>
                <h4> Description </h4>
                <p> {{ product.description }} </p>
            </div>
        </div>
        <NotFoundPage v-else/>
    </div>
</template>

<script>

import { products } from '../../fake-data'
import NotFoundPage from '../notFound/NotFoundPage'

export default {
    name: 'ProductDetailPage',
    components: {
        NotFoundPage
    },
    data () {
        return {
            product: products.find((p) => p.id === this.$route.params.id)
        }
    },
}
</script>

<style scoped>
  .page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
    margin: auto;
  }

  .img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  .product-details {
    padding: 16px;
    position: relative;
  }

  .add-to-cart {
    width: 100%;
  }

  .price {
    position: absolute;
    top: 24px;
    right: 16px;
  }
</style>