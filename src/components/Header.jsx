import '../assets/redpcph.png'
import './Header.css'
import './Header/SearchBar'
import SearchBar from './Header/SearchBar';
import Options from "./Header/Options";



function Header(){
  
  return (
    <>
    <div className='frame bg-accent'>
    <div className='logo'>
      <img src="redpcph.png" alt="" />
      <h1 className="text-4xl-anton text-primary">
        RED PC
      </h1>
    </div>
      <SearchBar />
      <div>
      <Options />
      </div>
    </div>
    </>
  )
};




export default Header;