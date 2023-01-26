import { accessEnv } from '../utils'
import { RouteOption } from './RouteOption'

const discountsServiceUri = accessEnv('DISCOUNTS_SERVICE_URI')

export const categoryRoutes: RouteOption[] = [
    {
        url: '/categories',
        auth: true,
        options: {
            target: `${discountsServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/categories': '/categories'
            }
        }
    },
    {
        url: '/categories/:categoryId',
        auth: true,
        options: {
            target: `${discountsServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/categories/:categoryId': '/categories/:categoryId'
            }
        }
    },
    {
        url: '/categories/:categoryId/discounts',
        auth: true,
        options: {
            target: `${discountsServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/categories/:categoryId/discounts':
                    '/categories/:categoryId/discounts'
            }
        }
    }
]
