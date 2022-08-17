import { accessEnv } from '../utils'
import { RouteOption } from './RouteOption'

const categoriesServiceUri = accessEnv('CATEGORIES_SERVICE_URI')

export const categoryRoutes: RouteOption[] = [
    {
        url: '/categories',
        auth: true,
        forAdmin: true,
        options: {
            target: `${categoriesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/categories': '/categories'
            }
        }
    },
    {
        url: '/categories/:categoryId',
        auth: true,
        forAdmin: true,
        options: {
            target: `${categoriesServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/categories/:categoryId': '/categories/:categoryId'
            }
        }
    }
]
