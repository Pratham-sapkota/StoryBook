const mongoose=require('mongoose')

const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log(`MongoDB connected:${conn.connection.host}`)
    }catch(e){
        console.log(e)
        process.exit(1) //We want to exit with failure

    }
}

module.exports=connectDB