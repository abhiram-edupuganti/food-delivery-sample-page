const mongoose=require('mongoose');
require('dotenv').config();
const mongoUri = process.env.MONGODB_URI;
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB');

        const foodSchema = new mongoose.Schema({
            categoryName: {
                type: String,
                required: true,
            },
            taste: {
                type: String,
                required: true,
            },
        });
        const Food = mongoose.model('Food', foodSchema);
        const fetch_data=Food.find({});
        console.log(fetch_data);
        
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }

    
};



module.exports=mongoDB;