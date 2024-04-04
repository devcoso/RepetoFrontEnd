import { useOutletContext  } from 'react-router-dom'
import { getReciclados } from '../../data/userServices'

export async function loader() { 
    const datos = await getReciclados()
    console.log(datos)
    return datos
}

const Index = () => {
    const {user} = useOutletContext()
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
export default Index