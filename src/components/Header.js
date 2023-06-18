import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">BHOJWA.</h1>
            <ul className="nav-menu">
                <li className="nav-item search-container">
                    <input className="input-box" type="text" placeholder="Search your Bhoj here..." />
                    <button className='btn'><AiOutlineSearch /></button>
                </li>
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact</li>
                <li className="nav-item">Cart</li>
            </ul>
        </header>
    );
}
export default Header;