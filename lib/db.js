import { Client } from 'pg';

const POSTGRES_URI = process.env.POSTGRES_URI;

const connect = async () => {
  const client = new Client({
    connectionString: POSTGRES_URI,
  });

  try {
    await client.connect();
    console.log('Connected to PostgreSQL');
  } catch (err) {
    console.log("Error connecting to PostgreSQL:", err);
    throw new Error(err);
  }

  return client;
};

export default connect;
