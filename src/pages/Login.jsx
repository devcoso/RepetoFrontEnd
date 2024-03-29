import { Form, useActionData, redirect } from "react-router-dom"
import { loginUser } from "../data/users"

import Error from "../components/Error"

export async function action({request}) { 
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const respuesta = await loginUser({email, password})
    if(respuesta.error){  
        return [respuesta.message]
    }
    console.log(respuesta.user)
    return redirect('/')
}

const Login = () => {
    const errores = useActionData()

    return (
        <>
            <h1>Inciar Sesión</h1>
            {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
            <Form method="POST" noValidate>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password"/>
                </div>
                <input type="submit" value='Inicia Sesión' />
            </Form>
        </>
    )
}
export default Login