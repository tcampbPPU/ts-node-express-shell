import express from "express";
import { PORT } from './config/constants';
import { userRouter } from './routes';

const main = async () => {    
    // Init App
    const app = express();

    // Setup Middleware
    app.use(express.json());

    // Import Routes
    app.use('/users', userRouter);

    // Run the App
    app.listen(PORT, () => {
        console.log(`Server is listening on port: ${PORT}`);
    });
};

// Run Main Thread
main().catch((err) => {
    console.log(err);
    process.exit(1);
});