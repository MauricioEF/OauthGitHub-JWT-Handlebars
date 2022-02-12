import dotenv from 'dotenv';
dotenv.config();

export default {
    github:{
        CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET
    },
    mongo:{
        URL:process.env.MONGO_URL
    },
    jwt:{
        COOKIE_NAME:process.env.JWT_COOKIE_NAME,
        SECRET:process.env.JWT_SECRET
    }
}