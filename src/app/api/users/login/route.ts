import { dbConnection } from '@/dbConfig/dbConfig'
import userModel from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

dbConnection()

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const body = await req.json()
        const { email, password } = body
        const user = await userModel.findOne({ email })
        if (!user) {
            return NextResponse.json({ error: 'User does not exists' }, { status: 400 })
        }

        const checkPass = await bcryptjs.compare(password, user.password)
        if (!checkPass) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 })
        }

        const payload: { id: string } = {
            id: user._id
        }

        const token = jwt.sign(payload, process.env.TOKEN_SECRET!, {
            expiresIn: '1d'
        })

        const response = NextResponse.json({
            message: 'Logges in success',
        })

        response.cookies.set('token', token, {
            httpOnly: true
        })

        return response

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}