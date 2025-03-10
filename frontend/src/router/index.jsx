import { createBrowserRouter } from "vite/module-runner";  
//pour cree un route
export const router = createBrowserRouter([
    {
        path:'/',
        Element:'<p>hi from homePage</p>'
    },
    {
        path:'/login',
        Element:'<p>hi from login</p>'
    },
    {
        path:'/singup',
        Element:'<p>hi from singup</p>'
    },
    {
        path:'/users',
        Element:'<p>hi from users</p>'
    },
])