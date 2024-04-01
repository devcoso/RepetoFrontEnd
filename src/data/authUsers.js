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
    console.log(datos);
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

export async function resetPassword(datos){ 
    try {
        const url = import.meta.env.VITE_API_URL + '/auth/reset-password'
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

export async function getMe(){
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
        try {
            const url = import.meta.env.VITE_API_URL + '/auth/me'
            const respuesta = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${user.jwt}`
                }
            })
            const data = await respuesta.json()
            if(data.error){
                localStorage.removeItem('user')
            } else {
                data.user = {...data.user, jwt: user.jwt}
                const userLS = JSON.stringify(data.user)
                localStorage.setItem('user', userLS)
            }
            return data
        }
        catch (error) {
            console.log(error);
            return {error: true, message: 'Error al conectar con el servidor'}
        }
    }
    return {error: true, message: 'Sin usuario'}
}