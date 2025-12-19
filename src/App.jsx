import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Games from "./Pages/Games";
import GameDetails from "./Pages/GameDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

const App = () => {

    const routerConfig = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "games", element: <Games /> },
                { path: "game/:gameId", element: <GameDetails /> },
                { path: "about", element: <About /> },
                { path: "contact", element: <Contact /> },
                { path: "*", element: <NotFound /> }
            ]
        }
    ]);

    return <RouterProvider router={routerConfig} />;
};

export default App;
