import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Nav from '../components/Nav/Nav';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'nav',
        element: <Nav />,
    },
]);

export default router;
