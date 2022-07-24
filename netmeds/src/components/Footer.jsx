import React from 'react'
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div>
            <div className={styles.above_futter}>
                <div><img src="https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg" alt="" /></div>
                <div>
                    <p>Netmeds.com, India Ki Pharmacy, is brought to you by the Dadha & Company – one of India’s most trusted
                    </p>
                    <p>pharmacies, with over 100 years’ experience in dispensing quality medicines.</p>
                </div>
            </div>

            <div className={styles.footer}>
                <div>
                    <h4>COMPANY</h4>
                    <p>About Netmeds</p>
                    <p>Customers Speak</p>
                    <p>In the News</p>
                    <p>Career</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Fees and Payments Policy</p>
                    <p>Shipping and Delivery Policy</p>
                    <p>Return, Refund and Cancellation Policy</p>
                    <p>Contact</p>
                </div>
                <div>
                    <h4>SHOPPING</h4>
                    <p>Browse by A-Z</p>
                    <p>Browse by Manufacturers</p>
                    <p>Health Articles</p>
                    <p>Offers / Coupons</p>
                    <p>FAQs</p>

                </div>
                <div>
                    <h4>SOCIAL</h4>
                    <p>Patients Alike</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                    <p>Youtube</p>
                    <p>Refer & Earn</p>

                </div>
                <div>
                    <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
                    <p>Get a free subscription to our health and</p>
                    <p> fitness tip and stay tuned to our latest offers</p>

                </div>
            </div>

            <div className={styles.footer1}>
                <div>Medicine</div>
                <div>Wellness</div>
                <div>Lab Tests</div>
                <div>Beauty</div>
                <div>Copyright© 2022. All Rights Reserved.</div>
            </div>
        </div>
    )
}
