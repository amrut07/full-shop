export default function NotFoundRoute () {
    return {
        path: '*',
        component: () => import(/* webpackChunkName: "NotFound" */ '../../views/notFound/NotFoundPage'),
    }
}