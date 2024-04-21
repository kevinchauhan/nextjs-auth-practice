import jwt from "jsonwebtoken"
import { NextRequest } from "next/server"

const getToken = (request: NextRequest) => {
    const token = request.cookies.get('token')
    if (!token) {
        return null
    }
    const payload = jwt.verify(token.value, process.env.TOKEN_SECRET!)
    return payload
}

export default getToken