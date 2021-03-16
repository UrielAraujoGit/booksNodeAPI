import express from 'express';

const app = express();

// Settings
const PORT: number = 3000;
app.set('port', PORT)

// Middlewares

// Routes

// Static files

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

