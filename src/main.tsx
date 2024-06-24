import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import "./index.css"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { Root } from "./routes/root"
import { UsersPage } from "./pages/users-page"
import { UserPage } from "./pages/user-page"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Home</h1>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "users",
        element: (
          <div>
            <h1>Users</h1>
          </div>
        ),
      },
    ],
  },
  {
    path: "/blog-posts",
    element: <div>BlogPosts</div>,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
