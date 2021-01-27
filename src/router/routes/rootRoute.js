import cartRoute from './cartRoute'
import productDetailRoute from './productDetailRoute'
import productsRoute from './productsRoute'
import notFoundRoute from './notFoundRoute'

export default function rootRoute () {
    return [
            cartRoute(),
            productDetailRoute(),
            productsRoute(),
            notFoundRoute(),
            {
                path: '/',
                redirect: '/products'
            },
        ]
}