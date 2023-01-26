import { accessEnv } from '../utils'
import { RouteOption } from './RouteOption'

const discountsServiceUri = accessEnv('DISCOUNTS_SERVICE_URI')

export const discountRoutes: RouteOption[] = [
    {
        url: '/discounts',
        auth: true,
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
        options: {
            target: `${discountsServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/discounts/:discountId': '/discounts/:discountId'
            }
        }
    }
]
