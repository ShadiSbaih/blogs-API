import express from 'express';

import fileUpload from './src/utils/multer.js';
import initApp from './src/index.router.js';

const app = express();
fileUpload();
initApp(app, express);

app.listen(3003, () => {
    console.log('Server is running on port 3003 at :', new Date().toLocaleString('en-US', { hour12: false }));
});
