<template>
    <div class="nav-bar">
        <router-link to="/products" id="products-link">
            <h1> Complete Footwear </h1>
        </router-link>
        <router-link to="/cart" id="cart-link">
            <button> Shopping Cart </button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    .nav-bar {
        border: 1px solid #ddd;
        height: 75px;
        width: 100%;
    }
  #products-link {
    text-align: center;
    display: block;
    color: black;
    font-size: 22px;
    left: 32px;
    position: absolute;
    top: 16px;
    text-decoration: none;
  }

  #products-link h1 {
      margin: 0;
  }
  button {
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: black;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }
</style>