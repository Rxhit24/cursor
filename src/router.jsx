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
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <HeroSection />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/works",
                element: <OurWork />,
            },
            
        ],
    },
    {
        path:'getstarted',
        element: <GetStarted />
    }
]);

export default appRouter;
