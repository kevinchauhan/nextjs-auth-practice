import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log('db connected...')
        })
        connection.on('error', (err) => {
            console.log('error while connecting db')
            console.log(err)
            process.exit(1)
        })
    } catch (error) {
        console.log('db connection error')
        console.log(error)
    }
}