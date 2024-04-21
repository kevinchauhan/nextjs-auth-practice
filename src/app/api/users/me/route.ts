import { dbConnection } from "@/dbConfig/dbConfig";
import getToken from "@/helpers/getToken";
import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";


dbConnection()

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const payload: any = getToken(req)
        if (!payload) {
            return NextResponse.json({ error: 'Token not found' }, { status: 401 })
        }
        const user = await userModel.findOne({ _id: (payload).id }).select('-password')
        return NextResponse.json(user)
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}