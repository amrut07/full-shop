<template>
    <div class='page-wrap'>
        <ProductsGrid
            :products="products"
        />
    </div>
</template>

<script>

import { products } from '../../fake-data'
import ProductsGrid from '../../components/ProductsGird'

export default {
    name: 'ProductsPage',
    components: {
        ProductsGrid
    },
    data () {
        return {
            products
        }
    }
}
</script>

<style scoped>
  .page-wrap {
    margin: 128px;
    padding: 16px;
  }

</style>