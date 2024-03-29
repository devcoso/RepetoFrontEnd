import { Form, useActionData, redirect } from "react-router-dom"
import Error from "../components/Error"
import { newUser } from "../data/users"

export async function action({request}) {
    const formData = await request.formData()
    const email = formData.get('email')
    const name = formData.get('name')
    const password = formData.get('password')
    const password2 = formData.get('password2')
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    //Validación
    let errores = []
    console.log(name);
    if(name.length < 3) { 
        errores.push('El nombre debe tener al menos 3 caracteres')
    }
    if(!regex.test(email)){
        errores.push('Email no válido')
    }
    if(password.length < 8) {
        errores.push('La contraseña debe tener al menos 8 caracteres')
    }
    if(password.length > 16) {
        errores.push('La contraseña no debe tener más de 16 caracteres')
    }
    if(password != password2) {
        errores.push('Las contraseñas no coinciden')
    }
    if(Object.keys(errores).length) {
        return errores
    }
    const datos = {name, email, password}
    const respuesta = await newUser(datos)
    if(respuesta.error){  
        return [respuesta.message]
    }
    console.log(respuesta.user)
    return redirect('/')
}

const Signup = () => {
    const errores = useActionData()

    return (
        <>
            <h1 className="font-bold text-3xl">Crear cuenta</h1>
            {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
            <Form method="POST" noValidate>
                <div className="w-full">
                    <label htmlFor="name">Nombres:</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div>
                    <label htmlFor="name">Apellidos:</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password"/>
                </div>
                <div>
                    <label htmlFor="password2">Repite tu Contraseña:</label>
                    <input type="password" id="password2" name="password2"/>
                </div>
                <input type="submit" value='Crea tu cuenta' />
            </Form>
        </>
    )
}
export default Signup