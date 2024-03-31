import { useLoaderData, redirect } from "react-router-dom"
import { getMe } from "../data/authUsers"

export async function loader() { 
    const response = await getMe()
    if(response.error){
        return redirect('/auth/login')
    }
    return response.user
}

const Dashboard = () => {
    const user = useLoaderData()
    return (
        <>
            Hola bienvenido al dashboard
            {
                user && (
                    <>
                        <h1>{user.name}</h1>
                        <h2>{user.email}</h2>
                    </>
                )
            }
        </>
    )
}
export default Dashboard