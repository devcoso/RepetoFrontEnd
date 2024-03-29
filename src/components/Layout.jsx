import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
            <Outlet></Outlet>
        </>
    )
}
export default Layout