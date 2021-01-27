export default function productsRoute () {
    return {
        path: '/products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "cart" */ '../../views/products/ProductsPage'),
    }
}