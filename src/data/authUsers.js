export async function newUser(datos){
    try {
        const url = import.meta.env.VITE_API_URL + '/auth/signup'
        const respuesta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        return await respuesta.json()
    } catch (error) {
        console.log(error);
        return {error: true, message: 'Error al conectar con el servidor'}
    }
}

export async function loginUser(datos){ 
    try {
        const url = import.meta.env.VITE_API_URL + '/auth/login'
        const respuesta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        return await respuesta.json()
    } catch (error) {
        console.log(error);
        return {error: true, message: 'Error al conectar con el servidor'}
    }
}

export async function forgotPassword(datos){
    try {
        const url = import.meta.env.VITE_API_URL + '/auth/forgot-password'
        const respuesta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        return await respuesta.json()
    } catch (error) {
        console.log(error);
        return {error: true, message: 'Error al conectar con el servidor'}
    }
 }