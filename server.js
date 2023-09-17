const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://images.unsplash.com; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/; style-src 'self' https://fonts.googleapis.com https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css; frame-src http://sinlxsves19:3000/ http://sinlxsves19:5500/test",
    'X-Frame-options', 'deny'
  );
  next();
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname + '/test.html'));
});

const server = app.listen(process.env.PORT || 5500, () => {
  const { port } = server.address();
  console.log(`Server running on PORT ${port}`);
});
