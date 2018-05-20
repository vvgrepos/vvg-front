const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:admin@10.0.0.3:5432/dbapp';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE app.items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });