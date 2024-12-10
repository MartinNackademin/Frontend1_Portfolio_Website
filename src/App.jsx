import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer.jsx'
import { createHashRouter, RouterProvider, Outlet} from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Projects } from './Components/Projects/Projects';
import { Skills } from './Components/Skills/Skills';
import { About } from './Components/About/About';
import { SingleProject } from './Components/Projects/SingleProject.jsx';

function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

const router = createHashRouter([
    {
        element: <Layout/>,
        errorElement: <div>404 - Page Not Found</div>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/projects",
                element: <Projects/>
            },
            {
                path: "/skills",
                element: <Skills/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/projects/:id",
                element: <SingleProject/>
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;