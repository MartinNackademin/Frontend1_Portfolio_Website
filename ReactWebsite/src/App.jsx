import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer.jsx'
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
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

const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <div>DET FUNKAR JU INTE XD </div>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/Projects',
        element: <Projects/>
      },
      {
        path: '/Skills',
        element: <Skills/>
      },
      {
        path: '/About',
        element: <About/>
      },   
      {
        path: '/Projects/:urlname',
        element: <SingleProject/>
      },    
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App