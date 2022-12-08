import { Navigate, useRoutes } from "react-router-dom";
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
                element: <EditProject />
            }
        ]
    },
    {
        path: "/add",
        element: <AddProject />
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