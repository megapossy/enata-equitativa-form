import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const client = new S3Client({
  region: "auto",
  endpoint: `https://3e0d1349dcd4d80940576fa1e49cc5c5.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: "a18562f949a22ef3479a8e073e55570f",
    secretAccessKey:
      "d6e54b62e287095d556e2b8bcc2eeba5d5ccc81e375bbe17e081c0708fb3de9c",
  },
});

export default defineEventHandler(async (event) => {
  // const ACCOUNT_ID = '3e0d1349dcd4d80940576fa1e49cc5c5'
  // token value = oaTavwq3o_sc2KZbOzsy6Vc-Fn9UairnkX20m8W9
  // access key ID = a18562f949a22ef3479a8e073e55570f
  // secret key access key = d6e54b62e287095d556e2b8bcc2eeba5d5ccc81e375bbe17e081c0708fb3de9c
  // https://3e0d1349dcd4d80940576fa1e49cc5c5.r2.cloudflarestorage.com
  const query = getQuery(event);
  const command = new PutObjectCommand({
    Bucket: "enata-equitativa",
    Key: query.key as string,
  });

  const url = await getSignedUrl(client, command, {
    expiresIn: 60 * 2, // 2min
  });

  return url;
});
