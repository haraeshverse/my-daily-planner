const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydailyplanner-root', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Node code to invoke a child process to access Python functions
const { spawn } = require('child_process');

function runPythonScript(input) {
    return new Promise((resolve, reject) => {
        const python = spawn('python3', ['./scripts/process_data.py', input]);

        python.stdout.on('data', (data) => {
            resolve(data.toString());
        });

        python.stderr.on('data', (data) => {
            reject(data.toString());
        });
    });
}

