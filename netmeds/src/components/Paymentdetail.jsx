import React from 'react'
import styles from './Paymentdetail.module.css'

export default function Paymentdetail() {
    return (
        <div>
            <div className={styles.order}>
                <div className={styles.box}>
                    <img src="https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg" alt="" />
                    <div className={styles.middile}>
                        <h2 className={styles.h3}>Order Medicine</h2>
                        <p className={styles.green}>Save upto 25% off</p>
                    </div>

                </div>
                <div className={styles.box}>
                    <img src="https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg" alt="" />
                    <div className={styles.middile}>
                        <h2 className={styles.h3}>Beauty</h2>
                        <p className={styles.green}>Save upto 40% off</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <img src="https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg" alt="" />
                    <div className={styles.middile}>
                        <h2 className={styles.h3}>Wellness</h2>
                        <p className={styles.green}>Save upto 25% off</p>
                    </div>
                </div>
            </div>
            {/* <!-- 3rd part --> */}
            <div className={styles.third}>
                <h2>Payment Partner Offers</h2>
                <div className={styles.innerimg}>
                    <div className={styles.box}>
                        <img className={styles.img2} src="https://www.netmeds.com/images/cms/offers/1616682689_paytm.png" alt="" />
                        <div className={styles.h4}>
                            <h4>Get up to Rs. 300 Paytm Cashback!..</h4>
                            <p className={styles.p}>Get Paytm Cashback between max. Rs. 300 and min. Rs. 30 on a mini
                                mum purchase of ANY products* worth...</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <img className={styles.img2} src="https://www.netmeds.com/images/cms/offers/1654235738_Icon_256x256.png" alt="" />
                        <div className={styles.h4}>
                            <h4>Use Pay with Rewards, Get up to Rs. to 800 Cashback!..</h4>
                            <p className={styles.p}>Get assured cashback between Rs. 30 and Rs. 800, when you pay usi 30
                                ng the *Pay with Rewards" payme..</p>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <img className={styles.img2} src="https://www.netmeds.com/images/cms/offers/1601465558_freecharge.png" alt="" />
                        <div className={styles.h4}>
                            <h4>Get max. Rs. 30 FreeCharge Cashback* (10%)!..</h4>
                            <p className={styles.p}>Get 10% FreeCharge Cashback (flat Rs. 30) only when you pay FULLY
                                via FreeCharge for your order</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- 4th part --> */}
            <div className={styles.fourthpart}>
                <div className={styles.flex}>
                    <div>
                        <h2>Previous Order</h2>
                        <p className={styles.margintop}>Your Previous Orderd Products</p>
                        <p className={styles.teal}>View Order</p>
                    </div>
                    <img src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/previous_orders.svg" alt="" />
                </div>
                <div className={styles.flex}>
                    <div>
                        <h2>Previous Order</h2>
                        <p className={styles.margintop}>Beauty Products</p>
                        <button className={styles.teal_btn}>Expolre Beauty</button>
                    </div>
                    <img src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/beauty_products.svg" alt="" />
                </div>
            </div>
        </div>

    )
}
