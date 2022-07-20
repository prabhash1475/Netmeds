import React from 'react'
import styles from './Navbar.module.css'



export const Navbar = () => {
    return (<div>
        <div className={styles.navbar}>
            <div className={styles.navtop}>
                <div className={styles.logo}>
                    <img src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg" alt="" />
                </div>
                <div className={styles.search}>
                    <div className={styles.address}> Deliver to <span class="teal"> 110002</span></div>
                    <input className={styles.search_inp} type="text" placeholder="Search for medicine & wellness product..." />

                    <div className={styles.search_last}>

                        <div>
                            <img src="	https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg" alt="" />
                            <span>Uplode</span>
                        </div>
                        <div>
                            <img src="https://www.netmeds.com/assets/gloryweb/images/icons/cart_icon.svg" alt="" />
                            <span>Cart</span>
                        </div>
                        <div>
                            <img src="https://www.netmeds.com/assets/gloryweb/images/icons/profile_icon.svg" alt="" />
                            <span>Login/Sign up</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.navbarbottom}>
                <div>
                    <img src="https://www.netmeds.com/assets/version1657888943/gloryweb/images/icons/medicine.svg" alt="" />
                    <span className={styles.span}>Medicine</span>

                </div>
                <div>
                    <img src="	https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg" alt="" />
                    <span>Wellness</span>

                </div>
                <div>
                    <img src="	https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg" alt="" />
                    <span>Lab Test</span>
                </div>
                <div>
                    <img src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg" alt="" />
                    <span>Beauty</span>
                </div>
                <div>
                    <img src="https://www.netmeds.com/assets/version1657888943/gloryweb/images/icons/health-library.svg"
                        alt="" />
                    <span>Health Corner</span>
                </div>
            </div>
        </div>
        <div className={styles.below_navbar}>
            <div>COVID Essential</div>
            <div>Diabetes</div>
            <div>Eyewear</div>
            <div>Ayush</div>
            <div>Ayurvedic</div>
            <div>Homeopathy</div>
            <div>Fitness</div>
            <div>Mom & Baby</div>
            <div>Devices</div>
            <div>Suegicals</div>
            <div>Sexual Wellness</div>
            <div>Treatments</div>
        </div>
    </div>
    )
}
