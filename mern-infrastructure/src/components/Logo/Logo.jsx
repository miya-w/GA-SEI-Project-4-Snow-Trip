import './Logo.css';
import logo from '../images/logo-snow-mountain.png'

export default function Logo() {
  return (
    <div className="Logo">
      <img src={logo} width={100} height={100} alt='LOGO' />
      <p>Snow Trip</p>
    </div>
  );
}
