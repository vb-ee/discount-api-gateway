import { accessEnv } from '../utils'
import { RouteOption } from './RouteOption'

const sectionsServiceUri = accessEnv('SECTIONS_SERVICE_URI')

export const sectionRoutes: RouteOption[] = [
    {
        url: '/sections',
        auth: true,
        options: {
            target: `${sectionsServiceUri}`,
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
            target: `${sectionsServiceUri}`,
            changeOrigin: true,
            pathRewrite: {
                '^/sections/:sectionId': '/sections/:sectionId'
            }
        }
    }
]
