import { accessEnv } from '@payhasly-discount/common'
import { RouteOption } from './RouteOption'

const bannersServiceUri = accessEnv('BANNERS_SERVICE_URI')

export const bannerRoutes: RouteOption[] = [
    {
        url: '/banners',
        auth: false,
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
        auth: false,
        options: {
            target: `${bannersServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/banners/:bannerId': '/banners/:bannerId'
            }
        }
    }
]
