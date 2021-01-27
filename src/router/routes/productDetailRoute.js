export default function ProductDetailRoute () {
    return {
        path: '/products/:id',
        name: 'ProductDetail',
        component: () => import(/* webpackChunkName: "products" */ '../../views/productDetail/ProductDetailPage'),
    }
}