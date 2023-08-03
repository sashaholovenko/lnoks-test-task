import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import MainPage from "./pages/main-page.tsx";
import Header from "./components/header/header.tsx";
import NewsItemPage from "./pages/news-item-page.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <div>Error</div>
    },
    {
        path: "/:id",
        element: <NewsItemPage />
    }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Header/>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
