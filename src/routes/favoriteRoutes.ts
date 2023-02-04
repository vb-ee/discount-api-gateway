import { accessEnv } from '@payhasly-discount/common'
import { RouteOption } from './RouteOption'

const favoritesServiceUri = accessEnv('FAVORITES_SERVICE_URI')

export const favoriteRoutes: RouteOption[] = [
    {
        url: '/favorites',
        auth: false,
        options: {
            target: `${favoritesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/favorites': '/favorites'
            }
        }
    }
]
