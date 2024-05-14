// // import React, { useState } from 'react';
// import { useState } from 'react';
// import '../src/styles/homePage.css';

// const HomePage = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleNav = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <div className={`overlay overlay-slide-left ${isMenuOpen ? 'overlay-active' : ''}`} id="overlay">
//         {/* MENU ITEMS */}
//         <nav className='navBar-homePage'>
//           <ul className='homepage-navbar-container'>
//             <li className={`slide-out-1 center ${isMenuOpen ? 'slide-in-1' : ''}`}>
//             <Link to="/vidanomade" className="nav-bar-home-items center">VIDA NOMADE</Link>
//             </li>
//             <li className={`slide-out-2 center ${isMenuOpen ? 'slide-in-2' : ''}`}>
//               <a href=" " className="nav-bar-home-items center">UGC CREATOR</a>
//             </li>
//             <li className={`slide-out-3 center ${isMenuOpen ? 'slide-in-3' : ''}`}>
//               <a href=" " className="nav-bar-home-items center">DEVELOP</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
      
//       {/* HAMBURGER MENU */}
//       <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} id="hamburger-menu" onClick={toggleNav}>
//         <div className="menu-bar1"></div>
//         <div className="menu-bar2"></div>
//         <div className="menu-bar3"></div>
//       </div>
      
//       {/* HOMEPAGE */}
//       <section id="home" className="">
//         <p className="logo">Trinidad.Aldi</p>
//         <div className='text-container'>
//           <h1 className='principal-title'>Hola!</h1>
//           <p className='description'>Mi nombre es <strong className='highlight-description'>Aldana Trinidad</strong>, pero puedes llamarme <strong className='highlight-description'>Aldi</strong>. Soy <a className='hover-description'>front end developer</a>, <a className='hover-description'>creadora UGC</a> y <Link to="/vidanomade" className='hover-description'>nomade digital</Link>, viajando por Latino America.</p>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HomePage;
