import { Link } from "react-router-dom"

export default function I() {
  return (
    <div className="h-full flex justify-center items-center">
      <Link to='/maquina/reciclando' className="block bg-lime-600 py-20 px-40 text-white text-7xl hover:bg-lime-800">Inicia</Link>
    </div>
  )
}
