import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes =
{
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}
const char = document.getElementById('Character-focus') || null;
const router = async () =>
{
    const header = document.getElementById('header') || null;
    const content = document.getElementById('content') || null;
    
    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    
    let render = routes[route]
    ? routes[route]
    : Error404;
    let response = await render(content);
    const resolve = response
    ? content.innerHTML = response
    : console.log(response);
    
}
export default router;