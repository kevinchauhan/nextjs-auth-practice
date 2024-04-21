import { dbConnection } from '@/dbConfig/dbConfig'
import userModel from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import { sendEmail } from '@/helpers/mailer'

dbConnection()

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const body = await req.json()
        const { username, email, password } = body

        const user = await userModel.findOne({ email })
        if (user) {
            return NextResponse.json({ error: 'User already exists' }, { status: 400 })
        }

        const hashedPass = await bcryptjs.hash(password, 10)

        const result = await userModel.create({ username, email, password: hashedPass })

        // await sendEmail({ email, emailType: 'verify', userId: result._id })

        return NextResponse.json({
            message: 'User registered successfully',
            success: true,
            user: result
        }, { status: 201 })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}