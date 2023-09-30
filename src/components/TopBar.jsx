import MenuIcon from "../../public/assets/icons/MenuIcon.svg";
import Logo from "../../public/assets/logo_fi_nbg.png";
import "../css/TopBar.css"

export default function TopBar() {
    return (
        <div className="top-bar">
            <img className="logo" src={Logo} alt="Jakub Gawroński Logo" />
            <img className="menu-icon" src={MenuIcon} alt="Menu icon" />
        </div>
    );
}