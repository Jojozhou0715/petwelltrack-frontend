import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../images/PetWellTrack3.png'

const NavBar = ({ user, handleLogout}) => {
  // const navbarClassName = isLandingPage ? styles.landingNav : styles.container;
  // const navLinkClassName = isLandingPage ? styles.landingNavLink : styles.navLink;
  return (
    // <nav className={navbarClassName} handleLogout={handleLogout}>
    <nav className={styles.container}>
       <Link to='/'><img className={styles.image} src={logo} alt="logo"/></Link>
     {user ?
       <ul className={styles.navUl}>
        <li><Link to='/mypets' className={styles.navLink}>My Pets</Link></li>
        <li><Link to='/mypets/new' className={styles.navLink}>Add A Pet</Link></li>
        <li><Link to='/login' onClick={handleLogout} className={styles.navLink}>Logout</Link></li>
       </ul>
      :
      <ul className={styles.navUl}>
        <li><Link to='/login' className={styles.navLink}>Log in</Link></li>
        <li><Link to='/signup' className={styles.navLink}>Sign up</Link></li>
      </ul>     
    }
    </nav>
  )
}

export default NavBar