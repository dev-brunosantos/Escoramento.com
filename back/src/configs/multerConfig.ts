import multer from 'multer';
import path from 'path';
import fs from 'fs';

// const uploadPath = path.resolve(__dirname, './uploads');
const uploadPath = path.resolve(process.cwd(), 'uploads');
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const prefix = Date.now() + '' + Math.round(Math.random() * 1E9);
        cb(null, prefix + '-' + file.originalname);
    }
});

export const upload = multer({ storage });