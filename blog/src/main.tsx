import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import Footer from "./components/Footer";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./components/Posts";
import About from "./pages/about";
import Contact from "./pages/contact";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<div className="flex-container">
					<Home />
				</div>
				<Footer />
			</>
		),
	
    children: [
      {
        path: 'blog',
        element: <Posts /> 
      },
      {
        path: 'about',
        element: <About /> 
      },
      {
        path: 'contact',
        element: <Contact /> 
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
