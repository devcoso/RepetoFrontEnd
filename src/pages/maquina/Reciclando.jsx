import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getReciclando } from "../../data/maquinaServices"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reciclando = () => {
    const [total, setTotal] = useState(0)
    
    async function loopGetReciclando() { 
        const data = await getReciclando()
        setTotal(data.Total)
    }

    useEffect(() => {
       if(total > 0){ 
            toast.success('Botella ingresada', {
                position: "bottom-right",
                autoClose: 1200,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
       }
     }, [total])

    useEffect(() => { 
        loopGetReciclando();

        // Establece un intervalo para consultar el servicio cada 5 segundos
        const interval = setInterval(loopGetReciclando, 1000);
    
        // Limpia el intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="h-full flex flex-col justify-center items-center">
            <ToastContainer className='text-3xl'/>
            <div className="text-white flex flex-col justify-center items-center h-full text-7xl ">
                <p className="text-neutral-300">Botellas ingresadas</p>
                <p className="font-bold text-9xl ">{total}</p>
            </div>
            <Link className="w-full text-3xl bg-red-700 py-3 text-white text-center hover:bg-red-900 max-w-96 mx-auto block">Terminar</Link>
        </div>
    )
}
export default Reciclando