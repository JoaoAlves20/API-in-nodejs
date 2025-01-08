import http from 'http';
import { URL } from 'url';

import { router } from './routes.js';

const server = http.createServer((request, response) => {
    const parsedUrl = new URL(`http://localhost:3000${request.url}`);
    console.log(`Method: ${request.method} | Endpoint: ${parsedUrl.pathname}`);

    const route = router.find((route) => (
        route.method === request.method && route.endpoint === parsedUrl.pathname
    ));

    if (route) {
        request.query = Object.fromEntries(parsedUrl.searchParams);
        route.handler(request, response);
    } else {
        response.writeHead(404, { 'content-type': 'text/html' });
        response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
    };
});

server.listen(3000, () => console.log('Server runner in http://localhost:3000'));
