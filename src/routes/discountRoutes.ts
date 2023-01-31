import { accessEnv } from '@payhasly-discount/common'
import { RouteOption } from './RouteOption'

const discountsServiceUri = accessEnv('DISCOUNTS_SERVICE_URI')

export const discountRoutes: RouteOption[] = [
    {
        url: '/discounts',
        auth: false,
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
        auth: false,
        options: {
            target: `${discountsServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/discounts/:discountId': '/discounts/:discountId'
            }
        }
    }
]
