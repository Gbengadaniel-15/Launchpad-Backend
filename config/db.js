import mongoose from 'mongoose'

const connectDb = async () =>{
    try{
        await mongoose.connect (process.env.MONGO_URL)
        console.log('Mongo Connected')

    }catch(error){
        console.log('Mongo Failed', error.message)
    }
}

export default connectDb