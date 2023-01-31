import { accessEnv } from '@payhasly-discount/common'
import { RouteOption } from './RouteOption'

const discountsServiceUri = accessEnv('DISCOUNTS_SERVICE_URI')

export const categoryRoutes: RouteOption[] = [
    {
        url: '/categories',
        auth: false,
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
        auth: false,
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
        auth: false,
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
