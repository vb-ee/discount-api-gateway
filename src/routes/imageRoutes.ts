import { accessEnv } from '../utils'
import { RouteOption } from './RouteOption'

const imageServiceUri = accessEnv('IMAGE_SERVICE_URI')

export const imageRoutes: RouteOption[] = [
    {
        url: '/images/*.(png|jpg|jpeg)$/',
        auth: true,
        options: {
            target: `${imageServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/images/*.(png|jpg|jpeg)$/': '/images/*.(png|jpg|jpeg)$/'
            }
        }
    }
]
