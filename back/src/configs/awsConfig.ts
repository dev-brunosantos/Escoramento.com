import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import multer from "multer";
import multerS3 from "multer-s3";
import { config } from "dotenv";

import path from 'path';

config();

export const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const s3Upload = multer({
    storage: multerS3({
        s3: s3,
        // bucket: process.env.AWS_BUCKET_NAME!,
        bucket: 'escoramento.com',
        // acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: (req, file, cb) => {
            const prefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            const fileName = prefix + path.extname(file.originalname);
            
            cb(null, `uploads/${fileName}`);
        }

    })
})

export const deleteFileS3 = async (key: string) => {
    try {
        const command = new DeleteObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: key,
        });

        await s3.send(command);
        console.log(`Arquivo ${key} deletado com sucesso do S3.`);
    } catch (error) {
        console.error("Erro ao deletar arquivo do S3:", error);
    }
};