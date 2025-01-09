import http from 'http';
import { URL } from 'url';

import { router } from './routes.js';

const server = http.createServer((request, response) => {
    const parsedUrl = new URL(`http://localhost:3000${request.url}`);
    console.log(`Method: ${request.method} | Endpoint: ${parsedUrl.pathname}`);

    let { pathname } = parsedUrl;
    let id = null;

    const splitEndpoint = pathname.split("/").filter(Boolean);

    if (splitEndpoint.length > 1) {
        pathname = `/${splitEndpoint[0]}/:id`;
        id = Number(splitEndpoint[1]);
    };

    const route = router.find((route) => (
        route.method === request.method && route.endpoint === pathname
    ));

    if (route) {
        request.query = Object.fromEntries(parsedUrl.searchParams);
        request.params = { id }
        route.handler(request, response);
    } else {
        response.writeHead(404, { 'content-type': 'text/html' });
        response.end(`Cannot ${request.method} ${pathname}`);
    };
});

server.listen(3000, () => console.log('Server runner in http://localhost:3000'));
