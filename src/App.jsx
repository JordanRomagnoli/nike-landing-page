import React from "react";
import { useRoutes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import routes from "./routes";

function App() {
    const pages = useRoutes(routes);
    return (
        <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="flex-grow bg-[#E4DFDC]">
                <div className="md:max-w-screen-lg mx-auto px-5 sm:px-16 lg:p-0">
                    {pages}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
