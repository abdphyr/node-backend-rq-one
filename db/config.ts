import { connect } from 'mongoose'

export const connectdb = async () => {
    await connect('mongodb://localhost/rq-app')
    .then(() => console.log("MongoDB ga ulanish hosil qilindi !!!"))
    .catch(e => console.log("Mongo DB ga ulanishda xato ???", e))
}
