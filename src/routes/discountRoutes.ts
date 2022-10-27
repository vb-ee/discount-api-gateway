import { accessEnv } from '../utils'
import { RouteOption } from './RouteOption'

const discountsServiceUri = accessEnv('DISCOUNTS_SERVICE_URI')

export const discountRoutes: RouteOption[] = [
    {
        url: '/discounts',
        auth: true,
        forAdmin: true,
        options: {
            target: `${discountsServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/discounts': '/discounts'
            }
        }
    },
    {
        url: '/discounts/:discountId',
        auth: true,
        forAdmin: true,
        options: {
            target: `${discountsServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/discounts/:discountId': '/discounts/:discountId'
            }
        }
    },
    {
        url: '/categories/:categoryId/discounts',
        auth: true,
        forAdmin: true,
        options: {
            target: `${discountsServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/categories/:categoryId/discounts':
                    '/categories/:categoryId/discounts'
            }
        }
    },
    {
        url: '/sections/:sectionId/discounts',
        auth: true,
        forAdmin: true,
        options: {
            target: `${discountsServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/sections/:sectionId/discounts':
                    '/sections/:sectionId/discounts'
            }
        }
    },
    {
        url: '/discount-images/*.(png|jpg|jpeg)$/',
        auth: true,
        forAdmin: true,
        options: {
            target: `${discountsServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/discount-images/*.(png|jpg|jpeg)$/':
                    '/discount-images/*.(png|jpg|jpeg)$/'
            }
        }
    }
]
