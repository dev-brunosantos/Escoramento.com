import { S3Client, HeadBucketCommand, CreateBucketCommand, PutPublicAccessBlockCommand, PutBucketPolicyCommand, DeleteObjectCommand, } from "@aws-sdk/client-s3";
import multer from "multer";
import multerS3 from "multer-s3";
import { config } from "dotenv";
import path from 'path';
config();
export const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});
export const s3Upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        // acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: (req, file, cb) => {
            const prefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            const fileName = prefix + path.extname(file.originalname);
            cb(null, `uploads/${fileName}`);
        }
    })
});
export const bucketExists = async () => {
    const bucketName = process.env.AWS_BUCKET_NAME || 'escoramento.com';
    const region = process.env.AWS_REGION || 'us-east-2';
    try {
        await s3.send(new HeadBucketCommand({ Bucket: bucketName }));
        console.log(`Bucket "${bucketName}" já existe.`);
    }
    catch (error) {
        if (error.$metadata?.httpStatusCode === 404) {
            console.log(`Criando bucket público: ${bucketName}...`);
            try {
                await s3.send(new CreateBucketCommand({
                    Bucket: bucketName,
                    CreateBucketConfiguration: region === "us-east-1" ? undefined : {
                        LocationConstraint: region
                    }
                }));
                await s3.send(new PutPublicAccessBlockCommand({
                    Bucket: bucketName,
                    PublicAccessBlockConfiguration: {
                        BlockPublicAcls: false,
                        IgnorePublicAcls: false,
                        BlockPublicPolicy: false,
                        RestrictPublicBuckets: false,
                    },
                }));
                const policy = {
                    Version: "2012-10-17",
                    Statement: [
                        {
                            Sid: "PublicReadGetObject",
                            Effect: "Allow",
                            Principal: "*",
                            Action: "s3:GetObject",
                            Resource: `arn:aws:s3:::${bucketName}/*`,
                        },
                    ],
                };
                await s3.send(new PutBucketPolicyCommand({
                    Bucket: bucketName,
                    Policy: JSON.stringify(policy),
                }));
                console.log(`Bucket criado e configurado para acesso público!`);
            }
            catch (createError) {
                console.error("Erro na configuração do bucket:", createError.message);
            }
        }
        else {
            console.error("Erro de conexão:", error.message);
        }
    }
};
export const deleteFileS3 = async (key) => {
    try {
        const command = new DeleteObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: key,
        });
        await s3.send(command);
        console.log(`Arquivo ${key} deletado com sucesso do S3.`);
    }
    catch (error) {
        console.error("Erro ao deletar arquivo do S3:", error);
    }
};
//# sourceMappingURL=awsConfig.js.map