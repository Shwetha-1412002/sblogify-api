const express = require('express');
const cors = require('cors');
const mainRouter = require('./routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/v1', mainRouter);

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
