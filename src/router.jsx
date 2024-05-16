import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";
import HeroSection from "./components/Landing/HeroSection";
import About from "./components/Landing/About";
import Contact from "./components/Landing/Contact";
import OurWork from "./components/Landing/OurWork";
import GetStarted from "./components/GetStarted"

const appRouter = createBrowserRouter([
    {
        path: "/cursor",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/cursor/",
                element: <HeroSection />,
            },
            {
                path: "/cursor/about",
                element: <About />,
            },
            {
                path: "/cursor/contact",
                element: <Contact />,
            },
            {
                path: "/cursor/works",
                element: <OurWork />,
            },
            
        ],
    },
    {
        path:'/getstarted',
        element: <GetStarted />
    }
]);

export default appRouter;
