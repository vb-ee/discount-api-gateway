import { accessEnv } from '../utils'
import { RouteOption } from './RouteOption'

const discountsServiceUri = accessEnv('DISCOUNTS_SERVICE_URI')

export const sectionRoutes: RouteOption[] = [
    {
        url: '/sections',
        auth: true,
        options: {
            target: `${discountsServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/sections': '/sections'
            }
        }
    },
    {
        url: '/sections/:sectionId',
        auth: true,
        options: {
            target: `${discountsServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/sections/:sectionId': '/sections/:sectionId'
            }
        }
    },
    {
        url: '/sections/:sectionId/discounts',
        auth: true,
        options: {
            target: `${discountsServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/sections/:sectionId/discounts':
                    '/sections/:sectionId/discounts'
            }
        }
    }
]
