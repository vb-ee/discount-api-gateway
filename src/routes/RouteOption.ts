export interface RouteOption {
    url: string
    auth: boolean
    forAdmin: boolean
    authRefresh?: boolean
    options: {
        target: string
        changeOrigin: boolean
        pathRewrite: { [key: string]: string }
    }
}
