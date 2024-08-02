import './NavBar.css';
import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';

export default function NavBar() {
return (
    <>
    <nav className="barra">
        <img
        src="/public/images/Logo Utopia (2).jpg"
        alt="logo"
        />
        <div className="btn-container">
                <ButtonComponent nombre="Home" color="#73171f" />
                <ButtonComponent nombre="Vinos" color="#a61c41" />
                <ButtonComponent nombre="Contacto" color="#bf1f5a" />
            </div>
        <CartWidget />
    </nav>
    </>
);
}