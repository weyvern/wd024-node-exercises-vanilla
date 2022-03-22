import { createServer } from 'http';

const port = process.env.PORT || 5000;

const server = createServer((request, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: 'Hello World!'
    })
  );
});

server.listen(port, () => console.log(`Server running at http://localhost:${port}`));
