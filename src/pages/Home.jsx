import { Link, useLoaderData } from 'react-router-dom'

import { getMe } from '../data/authUsers'

export async function loader(){ 
    const response = await getMe()
    return !response.error
}


const Home = () => {
    const IsUserLogged = useLoaderData()
    const date = new Date();
    const year = date.getFullYear();

    return (
        <>
            <div className="h-screen bg-[url('/img/home-bg.jpg')] bg-cover bg-center">
                <div className=" h-full bg-black/[0.6] flex items-center flex-col justify-evenly">
                    <div className='flex justify-center w-full'>
                        <Link to='/' className='w-2/3 md:w-1/2 lg:w-1/3 mx-auto'>
                            <img src="img/REPETO-LOGO.png" alt="Logo de repeto"/>
                        </Link>
                    </div>
                    <div className='w-3/4 lg:w-2/3 xl:w-1/3 text-center text-white'>
                        <div className="flex flex-col items-center justify-center md:flex-row text-xl gap-3 mb-10">
                            {IsUserLogged ? (
                                <Link to='/dashboard' className='text-white px-11 py-3 bg-lime-600 rounded-2xl w-full hover:bg-lime-800 transition-colors'>Ir al Dashboard</Link>
                            ) : (
                                <>
                                    <Link to='/auth/login' className='text-white px-11 py-3 bg-lime-600 rounded-2xl w-full hover:bg-lime-800 transition-colors'>Iniciar Sesión</Link>
                                    <Link to='/auth/signup' className='text-white px-11 py-3 bg-lime-600 rounded-2xl w-full hover:bg-lime-800 transition-colors'>Registrarse</Link>
                                </>
                           )}
                        </div>
                        <p className='text-lg'>Todos los derechos reservados @{year}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home