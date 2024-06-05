import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import VideoPlayer from "./VideoPlayer";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/player/:movieId",
      element: <VideoPlayer />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Body;
