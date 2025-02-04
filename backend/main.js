import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { updateCounter, resetCounter } from './jobs/updateCounter.js'; 

dotenv.config();

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true 
};

app.use(cors(corsOptions)); 
app.use(express.json()); 


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.error(" MongoDB Connection Error:", err));

app.get('/', (req, res) => {
    res.send('Hello, World! Server is running 🚀');
});
app.post('/click', updateCounter);

app.post('/reset', resetCounter); 

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running at: http://localhost:${PORT}`));