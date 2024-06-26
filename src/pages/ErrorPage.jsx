import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
        error.statusText = "Página No Encontrada"
    } else if (error.status === 405) {
        error.statusText = "Método No Permitido"
    }
    return (
      <div id="error-page" className=" min-h-screen flex flex-col justify-center items-center gap-5">
        <Link to='/' className='w-2/3 md:w-1/2 lg:w-1/3 mx-auto'>
                            <img src="/img/REPETO-LOGO.png" alt="Logo de repeto"/>
        </Link>
        <h1 className=" text-3xl text-lime-600">¡Ha ocurrido un Error! {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data?.message && (
          <p>
            <i>{error.data?.message}</i>
          </p>
        )}
        <Link className="text-lime-600 underline" to="/">Tal vez quieras volver</Link>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page" className=" min-h-screen flex flex-col justify-center items-center gap-5">
        <h1 className="text-6xl text-lime-600">Oops! Ha ocurrido un error</h1>
            <p>Algo inesperado sucedió</p>
            <p>
                <i>{error.message}</i>
            </p>
            <Link className="text-lime-600 underline" to="/">Tal vez quieras volver</Link>
    </div>
    );
  } else {
    return <></>;
  }
}