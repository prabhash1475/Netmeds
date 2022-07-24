import React from 'react'
import styles from './Top.module.css'

export const Top = () => {
    return (
        <div>
            <div className={styles.top}>
                <div className={styles.po}>
                    <img src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/netmeds_first_membership.svg"
                        alt="" />
                </div>
                <div>
                    <h3>Netmeds First Membership</h3>
                    <li>Get special discounts and offers on Netmeds services.</li>
                    <li>
                        Get 2.5% NMS Cash on pre-paid, Medicine orders of ANY value!</li>
                </div>
                <div className={styles.flex1}>
                    <h4 className={styles.pp}>Starting at ₹299</h4>
                    <button className={styles.but}>Explore Plane</button>
                </div>
            </div>


            <h3>Categories in Focus</h3>
            <div className={styles.focus}>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/3087/thumb/feminine_hygiene_1.jpg" alt="" />
                    <p>Feminine Hygiene</p>
                    <p className={styles.green}>UP TO 50% OFF</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_2.jpg" alt="" />
                    <p>Body Care</p>
                    <p className={styles.green}>UP TO 40% OFF</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/482/thumb/ayurvedic_1.jpg" alt="" />
                    <p>Ayurvedic</p>
                    <p className={styles.green}>UP TO 76% OFF</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/676/thumb/orthopaedics_1.jpg" alt="" />
                    <p>Orthopadic</p>
                    <p className={styles.green}>UP TO 50% OFF</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/3216/thumb/sports_supplements_1.jpg" alt="" />
                    <p>Sports</p>
                    <p className={styles.green}>UP TO 60% OFF</p>
                </div>
            </div>

            <div className={styles.red}>
                <h3>Explore Beauty</h3>
            </div>
            <div className={styles.focus}>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/3505/thumb/facial_kits_1.jpg" alt="" />
                    <p>Facial Kits</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/v1/560/thumb/lip_care_2.jpg" alt="" />
                    <p>Lip Care</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_2.jpg" alt="" />
                    <p>Body Care</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/v1/547/thumb/hair_care_2.jpg" alt="" />
                    <p>Hair Care</p>
                </div>

            </div>
            <div className={styles.gray}>
                <h3>Best in Beauty</h3>
            </div>
            <div className={styles.focus}>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/maybelline.jpg?v=10" alt="" />
                    <p>Mablline</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/garnier.jpg?v=10" alt="" />
                    <p>Garnier</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/myglamm.jpg?v=10" alt="" />
                    <p>Mayglamm</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/colorbar.jpg?v=10" alt="" />
                    <p>Colorbar</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/plum.jpg?v=10" alt="" />
                    <p>Plum</p>
                </div>
            </div>

            <h3>Personal Care</h3>
            <div className={styles.focus}>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_2.jpg" alt="" />
                    <p>Body Care</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/product-v1/150x150/1037529/dr_vaidyas_my_prash_paste_for_diabetes_care_500_gm_free_dr_morepen_glucometer_0_0.jpg"
                        alt="" />
                    <p>Moms & Baby</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/3934/thumb/skin_treatment_1.jpg" alt="" />
                    <p>Skin Treatment</p>
                </div>
                <div vclassName={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/3495/thumb/face_wash_cleansers_3.jpg" alt="" />
                    <p>Face Wash & Clearance</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/v1/3566/thumb/shower_gels_body_wash_2.jpg" alt="" />
                    <p>Shower gel & Body Wash</p>
                </div>
            </div>
            <h3>Men's Grooming</h3>
            <div className={styles.focus}>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/v1/3420/thumb/shaving.jpg?v=1" alt="" />
                    <p>Shaving</p>
                    <p className={styles.green}>UPTO 30% OFF</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/v1/3002/thumb/razors_cartridges_2.jpg?v=1" alt="" />
                    <p>Razors Cartridges</p>
                    <p className={styles.green}>UPTO 46% OFF</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/v1/3591/thumb/beard_oil_2.jpg?v=1" alt="" />
                    <p>Beard Oil</p>
                    <p className={styles.green}>UPTO 25% OFF</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/v1/3593/thumb/beard_wash_2.jpg?v=1" alt="" />
                    <p>Beared Wash</p>
                    <p className={styles.green}>UPTO 20% OFF</p>
                </div>
                <div className={styles.bo}>
                    <img src="https://www.netmeds.com/images/category/v1/3704/thumb/hair_gels_waxes_2.jpg?v=1" alt="" />
                    <p>Hair Gel & Waxs</p>
                    <p className={styles.green}>UPTO 23% OFF</p>
                </div>
            </div>

            <div className={styles.top}>
                <div className={styles.po}>
                    <img src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/subscribe_and_schedule.svg"
                        alt="" />
                </div>
                <div>
                    <h3>Get medicine refill every month</h3>
                    <li>Subscribe and schedule next deliveries</li>
                    <li>
                        Subscribe for 12 months and get the last month free. *T&C Apply</li>
                </div>
                <div className={styles.flex1}>

                    <button className={styles.but}>Subscribe</button>
                </div>
            </div>

            <h3>
                Health Concerns</h3>
            <div className={styles.pad}>
                <div className={styles.last}><img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1"
                    alt="" />
                    <p>Lung Care</p>
                </div>
                <div className={styles.last}><img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1"
                    alt="" />
                    <p>Weight Care</p>
                </div>
                <div className={styles.last}><img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1"
                    alt="" />
                    <p>Womens Care</p>
                </div>
                <div className={styles.last}><img
                    src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg?v=1" alt="" />
                    <p>Bone And Joint Pain</p>
                </div>
                <div className={styles.last}><img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg?v=1"
                    alt="" />
                    <p>Cold And Fever</p>
                </div>
            </div>
        </div>
    )
}
