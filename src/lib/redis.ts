const Redis = require("ioredis");

// export const redis=new Redis(6380); // 127.0.0.1:6380
// export const redis=new Redis(6379, "192.168.1.1"); // 192.168.1.1:6379
// export const redis=new Redis("/tmp/redis.sock");
const {REDIS_PORT, REDIS_HOST, REDIS_USERNAME, REDIS_PASS, REDIS_DB} = process.env;
export const redis = new Redis({
    port: REDIS_PORT, // Redis port
    host: REDIS_HOST ?? "127.0.0.1", // Redis host
    username: REDIS_USERNAME ?? "default", // needs Redis >= 6
    password: REDIS_PASS ?? null,
    db: REDIS_DB ?? 0, // Defaults to 0
});