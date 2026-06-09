import { MongoClient, type Db } from "mongodb";

const dbName = process.env.MONGODB_DB || "romanspage";

type GlobalMongoCache = {
  client: MongoClient | null;
  clientPromise: Promise<MongoClient> | null;
};

const globalForMongo = globalThis as typeof globalThis & {
  __mongoCache?: GlobalMongoCache;
};

const mongoCache = globalForMongo.__mongoCache || {
  client: null,
  clientPromise: null,
};

if (!globalForMongo.__mongoCache) {
  globalForMongo.__mongoCache = mongoCache;
}

export async function getDb(): Promise<Db> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable.");
  }

  if (!mongoCache.clientPromise) {
    mongoCache.client = new MongoClient(uri);
    mongoCache.clientPromise = mongoCache.client.connect();
  }

  const client = await mongoCache.clientPromise;
  return client.db(dbName);
}
