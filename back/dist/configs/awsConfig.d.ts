import { S3Client } from "@aws-sdk/client-s3";
import multer from "multer";
export declare const s3: S3Client;
export declare const s3Upload: multer.Multer;
export declare const bucketExists: () => Promise<void>;
export declare const deleteFileS3: (key: string) => Promise<void>;
//# sourceMappingURL=awsConfig.d.ts.map