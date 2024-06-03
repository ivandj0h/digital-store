import dotenv from 'dotenv'
import path from "path";
import payload from "payload";
import {Args} from "@/config/props";

dotenv.config({
    path: path.resolve(__dirname, '../.env'),
})

let cached = (global as any).payload
if (!cached) {
    cached = (global as any).payload = {
        client: null,
        promise: null
    }
}

export const getPayloadClient = async ({initOptions}: Args = {}) => {
    if (!process.env.PAYLOAD_SECRET) {
        throw new Error('PAYLOAD_SECRET is required');
    }

    if (cached.client) {
        return cached.client
    }

    if (!cached.promise) {
        cached.promise = payload.init({
            secret: process.env.PAYLOAD_SECRET,
            local: !initOptions?.express,
            ...(initOptions || {})
        })
    }

    try {
        cached.client = await cached.promise
    } catch (err: unknown) {
        cached.promise = null
        throw err;
    }

    return cached.client
}
