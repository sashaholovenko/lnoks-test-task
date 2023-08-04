import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import MainPage from "./pages/main-page.tsx";
import Header from "./components/header/header.tsx";
import NewsItemPage from "./pages/news-item-page.tsx";
import { Provider } from 'react-redux';
import {setupStore} from "./store/store.ts";


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

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Header/>
      <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
      </Provider>
  </React.StrictMode>,
)
