export interface RouteOption {
    url: string
    auth: boolean
    options: {
        target: string
        changeOrigin: boolean
        pathRewrite: { [key: string]: string }
    }
}
