const path = require('path'),
    fs = require('fs');

const env = process.env.NODE_ENV,

    envPath = path.resolve(process.cwd(), `.env.${env}`),
    defaultEnvPath = path.resolve(process.cwd(), '.env');

require('dotenv').config({ path: fs.existsSync(envPath) ? envPath : defaultEnvPath });