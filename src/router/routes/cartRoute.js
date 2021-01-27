export default function cartRoute () {
    return {
        path: '/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "cart" */ '../../views/cart/CartPage'),
    }
}