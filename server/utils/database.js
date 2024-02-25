import mongoose from 'mongoose';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

const dbConnect = async () => {
    mongoose.set('strictQuery', true);

    await mongoose
        .connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log(chalk.blue('MongoDB connected'));
        })
        .catch((err) => {
            console.log(chalk.red(`Error in connecting to MongoDB: ${err}`));
            process.exit(1);
        });
};

export default dbConnect;
