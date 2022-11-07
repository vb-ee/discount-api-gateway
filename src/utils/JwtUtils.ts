import * as jwt from 'jsonwebtoken'
import { accessEnv } from './accessEnvs'

export interface IJwtPayload {
    id: string
    phone: string
    isAdmin: boolean
}

export class JwtUtils {
    private static accessSecret = accessEnv('JWT_ACCESS')
    private static refreshSecret = accessEnv('JWT_REFRESH')

    static verifyAccessToken(accessToken: string) {
        return jwt.verify(accessToken, this.accessSecret) as IJwtPayload
    }

    static verifyRefreshToken(refreshToken: string) {
        return jwt.verify(refreshToken, this.refreshSecret) as IJwtPayload
    }
}
