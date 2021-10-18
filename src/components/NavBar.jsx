import CartWidget from './CartWidget'
import './styles/NavBar.css'


function NavBar() {
    return (
        <nav className='nav'>
            <div className='container'>
                <div className='nav__container'>
                    <div className='nav__title'>
                        <h1>Nombre de la tienda</h1>
                    </div>
                    <div className='nav__menu'>
                        <ul>
                            <li>Home</li>
                            <li>Productos</li>
                            <li>Contacto</li>
                            <li><CartWidget /></li>
                        </ul>
                    </div>  
                </div>
            </div>
        </nav>
    )
}

export default NavBar