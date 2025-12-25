import { createClient } from "redis";

const redisClient = createClient({
    username: 'default',
    password: 'OqE4u64t4D5Mr5AzHlyIGZjPSGszcB5C',
    socket: {
        host: 'redis-15722.crce263.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 15722
    }
});

redisClient.on("error", (err) => {
  console.log("Redis Client Error", err);
  process.exit(1);
});

await redisClient.connect();

export default redisClient;
