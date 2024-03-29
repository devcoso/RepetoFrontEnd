import { Form, useActionData, redirect, Link } from "react-router-dom"
import { loginUser } from "../data/users"

import Error from "../components/Error"

export async function action({request}) { 
    const formData = await request.formData()
    const correo = formData.get('correo')
    const password = formData.get('password')
    const respuesta = await loginUser({'email': correo, password})
    if(respuesta.error){  
        return respuesta.message
    }
    console.log(respuesta.user)
    return redirect('/')
}

const Login = () => {
    const error = useActionData()

    return (
        <>
            <h1 className="text-3xl font-bold text-center text-neutral-700">Inicia sesión</h1>
            <p className="text-neutral-700 text-center text-lg">Llena todos los campos, para iniciar sesión</p>
            {error &&  <Error>{error}</Error>}
            <Form method="POST" noValidate className="space-y-5 text-xl">
                <div>
                    <label className="text-neutral-700" htmlFor="correo">Correo electrónico</label>
                    <input className="block w-full p-1 bg-neutral-200 rounded-md" type="text" id="correo" name="correo"/>
                </div>
                <div>
                    <label className="text-neutral-700" htmlFor="password">Contraseña</label>
                    <input className="block w-full p-1 bg-neutral-200 rounded-md" type="password" id="password" name="password"/>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <Link to="/auth/signup" className="block text-center text-lime-600 hover:text-lime-800 transition-colors">¿Aun no tienes cuenta? Crea una</Link>
                    <Link to="/auth/signup" className="block text-center text-lime-600 hover:text-lime-800 transition-colors">¿Olvidaste tu contraseña? Recupérala</Link>
                </div>
                <input className="block w-2/3 mx-auto text-white bg-lime-600 rounded-md py-3 font-bold hover:bg-lime-800 transition-colors" type="submit" value='Inicia Sesión' />
            </Form>
        </>
    )
}
export default Login