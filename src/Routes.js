import { Navigate, useRoutes } from "react-router-dom";
import Protected from "./components/Protected";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import Registration from "./pages/Registration";


const routes = [
    {
        path: '',
        element: <Navigate to='/projects' />
    },
    {
        path: '/projects',
        children: [
            {
                path: "",
                element: <Projects />
            },
            {
                path: ":slug/edit",
                element: <Protected><EditProject /></Protected> 
            }
        ]
    },
    {
        path: "/add",
        element: <Protected><AddProject /></Protected> 
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/registration',
        element: <Registration />
    }
]

const Routes = () => useRoutes(routes)

export default Routes