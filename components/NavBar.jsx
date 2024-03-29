import Link from 'next/link';
import React from 'react';
import styles from '../styles/component-styles/NavBar2.module.css';
import { BsBasket3 } from 'react-icons/bs';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import {CgProfile} from 'react-icons/cg';
import {MdOutlineRiceBowl} from 'react-icons/md';
import {FiLogOut} from 'react-icons/fi';

function NavBar() {
    const [shopModal, setshopModal] = useState(false);
    const [shopModal2, setshopModal2] = useState(false);
    const [menuModal, setmenuModal] = useState(false);
    const [profileModal, setprofileModal] = useState(false);

    const handleShopModal1 = () => {
        setprofileModal(false);
        setshopModal(!shopModal)
    }
    const handleShopModal2 = () => {
        setshopModal2(!shopModal2);
    }
    const handleMenuModal = () => {
        setmenuModal(!menuModal);
    }
    const handleProfileModal = ()=>{
        setshopModal(false)
        setprofileModal(!profileModal);
    }
    return (
        <>
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.leftLinks}>
                    <Link href={'/currentmenu'}>Current Menu</Link>
                    <Link href={'/grabAndGo'}>Grab & Go</Link>
                </div>
                <div className={styles.logo}>
                    <Link href={"/"}><img src="/bookOne.png" alt="" /></Link>
                </div>
                <div className={styles.rightMenuContainer}>
                    <div className={styles.rightMenu}>
                        <div className={styles.shopBtn} onClick={handleShopModal1}>
                            Shop
                            <div className={styles.shopModal} style={shopModal?{display: 'block'}:{display: 'none'}}>
                                <Link href="/subscription"><li>Subscription Meal Selection</li></Link>
                                <Link href="/alacarte"><li>A la Carte</li></Link>
                                <Link href="/byingredients"><li>Proteins By The Pound</li></Link>
                                <Link href="/customMealBuilder"><li>Custom Meal Builder</li></Link>
                                <Link href="/extras"><li>Extras</li></Link>
                                <Link href="/giftcard"><li>Gift Card</li></Link>
                            </div>
                        </div>
                        <Link href={'/meals'}>Select Meals</Link>
                        <Link href={'/Blog'}>Blog</Link>
                    </div>
                    <div className={styles.icons}>
                        <Link href={"/cart"}><BsBasket3 size={'23px'} style={{ cursor: 'pointer', margin: '0 19px' }} /></Link>
                        <div className={styles.profileIcon} onClick={handleProfileModal}>Sushil
                <div className={styles.profileModal} style={profileModal?{display: 'block'}:{display: 'none'}}>
                        <Link href={"/profile"}><li><CgProfile size={'23px'} /> Profile</li></Link>
                        <Link href={"/subscription"}><li><MdOutlineRiceBowl size={'23px'}/> Subscription</li></Link>
                        <Link href={"/"}><li><FiLogOut  size={'23px'} /> Log Off</li></Link>
                    </div></div>
                    </div>
                    <div className={styles.hamIcon} onClick={handleMenuModal}>
                        {menuModal ? (<ImCross size={'23px'} style={{ cursor: 'pointer', margin: '0 19px' }} />) : (<GiHamburgerMenu size={'23px'} style={{ cursor: 'pointer', margin: '0 19px' }} />)}
                    </div>
                </div>
            </div>
            <div className={styles.menuModal} style={menuModal ? { display: 'block' } : { display: 'none' }}>
                <Link href={'/currentmenu'}><li>Current Menu</li></Link>
                <div className={styles.shopBtn2} onClick={handleShopModal2}>
                    Shop
                    <div className={styles.shopBtnModal2} style={shopModal2 ? { display: 'block' } : { display: 'none' }}>
                        <Link href="/subscription"><li>Subscription Meal Selection</li></Link>
                        <Link href="/alacarte"><li>A la Carte</li></Link>
                        <Link href="/byingredients"><li>Proteins By The Pound</li></Link>
                        <Link href="/customMealBuilder"><li>Custom Meal Builder</li></Link>
                        <Link href="/extras"><li>Extras</li></Link>
                        <Link href="/giftcard"><li>Gift Card</li></Link>
                    </div>
                </div>
                <Link href={'/meals'}><li>Select Meals</li></Link>
                <Link href={'/grabAndGo'}><li>Grab & Go</li></Link>
                <Link href={'/Blog'}><li>Blog</li></Link>
            </div>
        </div>
         <div className={styles.container2}>

         </div>
        </>
    )
}

export default NavBar