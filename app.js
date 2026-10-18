const crypto = require('node:crypto');
require('dotenv').config();

const applicationSecret = process.env.APP_SECRET;
const message = 'student=Micah Baca';

if (!applicationSecret) {
  console.error('Error: APP_SECRET is missing. Copy .env.example to .env and provide a local value.');
  process.exit(1);
}

const signature = crypto
  .createHmac('sha256', applicationSecret)
  .update(message)
  .digest('hex');

console.log('Method: secret loaded from a local, non-shared .env file');
console.log(`Message: ${message}`);
console.log(`Signature: ${signature}`);
console.log('Finding: the secret is available at runtime but absent from the Git repository.');
