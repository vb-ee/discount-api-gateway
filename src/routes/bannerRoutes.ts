import { accessEnv } from '../utils'
import { RouteOption } from './RouteOption'

const bannersServiceUri = accessEnv('BANNERS_SERVICE_URI')

export const bannerRoutes: RouteOption[] = [
    {
        url: '/banners',
        auth: true,
        forAdmin: true,
        options: {
            target: `${bannersServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/banners': '/banners'
            }
        }
    },
    {
        url: '/banners/:bannerId',
        auth: true,
        forAdmin: true,
        options: {
            target: `${bannersServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/banners/:bannerId': '/banners/:bannerId'
            }
        }
    },
    {
        url: '/banner-images/*.(png|jpg|jpeg)$/',
        auth: true,
        forAdmin: true,
        options: {
            target: `${bannersServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/banner-images/*.(png|jpg|jpeg)$/':
                    '/banner-images/*.(png|jpg|jpeg)$/'
            }
        }
    }
]
