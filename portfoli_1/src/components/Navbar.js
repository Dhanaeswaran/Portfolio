import '../cssfile/Navbar.css';
import { useState,useEffect } from 'react';
const Navbar = () => {
    const [displaysidebar,setsidebar] = useState({
        display : 'none',
    });
    const[svg,setsvg] = useState(<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>)
    useEffect(() => {
        const handleResize = () => {
          // Update the sidebar display based on the screen width
          if (window.innerWidth > 800) {
              setsidebar({ display: 'none' });
              setsvg(<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>)

          }
        };
        // Attach the event listener
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    const opensidebar = (e) =>{
        setsidebar({
            display : 'flex',
        })
        setsvg(<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>)
    }
    const closesidebar = (e) =>{
        e.preventDefault();
        setsidebar({
            display : 'none',
        })
        setsvg(<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>)
    }
    return ( 
        <nav className="Navbar primarybackground">
            <ul style={displaysidebar} className='sidebar'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#content">contact</a></li>
            </ul>
            <ul>
                <li className='firstheader '><a href="/">DHANAESWARAN R</a></li>
                <li className='hide'><a href="#">Home</a></li>
                <li className='hide'><a href="#about">About</a></li>
                <li className='hide'><a href="#project">Projects</a></li>
                <li className='hide'><a href="#content">contact</a></li>
                <li className = 'menu_button' onClick={(displaysidebar.display === "none" && opensidebar) || closesidebar}><a>{svg}</a></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;