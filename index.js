import { createClient } from 'redis';

async function fetchAndPrintData() {
  const client = createClient({ url: 'redis://localhost:6379' });

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  try {
    // Fetch all keys
    const keys = await client.keys('*');

    for (const key of keys) {
      const type = await client.type(key);

      console.log(`Key: ${key}, Type: ${type}`);

      let value;

      switch (type) {
        case 'string':
          value = await client.get(key);
          break;
        case 'list':
          value = await client.lRange(key, 0, -1);  // Note the use of lRange instead of lrange
          break;
        case 'set':
          value = await client.sMembers(key);  // Note the use of sMembers instead of smembers
          break;
        case 'hash':
          value = await client.hGetAll(key);  // Note the use of hGetAll instead of hgetall
          break;
        case 'zset':
          value = await client.zRange(key, 0, -1, { WITHSCORES: true });  // Note the use of zRange instead of zrange
          break;
        default:
          console.log(`Unhandled key type: ${type}`);
          continue;
      }

      console.log(`Value for key ${key}:`, value);
    }
  } catch (err) {
    console.error('Error fetching data from Redis:', err);
  } finally {
    await client.disconnect();
  }
}

fetchAndPrintData();
