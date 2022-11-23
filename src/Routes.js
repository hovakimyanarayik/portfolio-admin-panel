import { Navigate, useRoutes } from "react-router-dom";
import AddProject from "./pages/AddProject";
import EditPage from "./pages/EditPage";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";


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
                element: <EditPage />
            },
            {
                path: ":slug",
                element: <SingleProject />
            },
        ]
    },
    {
        path: "/add",
        element: <AddProject />
    }
]

const Routes = () => useRoutes(routes)


export default Routes