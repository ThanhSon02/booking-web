import { createBrowserRouter } from 'react-router-dom';
import Car from '../pages/Car/Car';
import Attractions from '../pages/Attractions/Attractions';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
    },
    {
        path: '/car',
        element: (
            <Layout>
                <Car />
            </Layout>
        ),
    },
    {
        path: '/attractions',
        element: (
            <Layout>
                <Attractions />
            </Layout>
        ),
    },
]);

export default router;
