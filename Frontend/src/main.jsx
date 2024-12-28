
import * as React from "react"
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Routes,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import SingleBlog from "./components/SingleBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path:"/blogs/:id",
        element:<SingleBlog />,
        loader:({ params }) => 
          fetch(`http://localhost:5000/blogs/${params.id}`)
        
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route index element={<Home />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contactus" element={<ContactUs />} />
//         <Route
//           path="/blogs/:id"
//           element={<SingleBlog />}
//           loader={({ params }) => {
//             fetch(`http://localhost:5000/blogs/${params.id}`);
//           }}
//         />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );
