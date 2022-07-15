export interface RouteOption {
    url: string
    auth: boolean
    authRefresh?: boolean
    options: {
        target: string
        changeOrigin: boolean
        pathRewrite: { [key: string]: string }
    }
}
