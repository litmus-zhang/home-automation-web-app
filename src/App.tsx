import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DeviceList from "./screens/DeviceList";


const router = createBrowserRouter([
  {
    path: "/",
    element: <DeviceList/>
  }
])
function App(){
return (
<RouterProvider router={router} />
)
}

export default App;