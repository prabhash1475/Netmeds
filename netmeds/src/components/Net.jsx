import React from 'react'
import styles from './Net.module.css'

export const Net = () => {
    return (
        <div>
            <h2 className={styles.margin}>Shope By Catogery</h2>
            <div className={styles.catogery}>

                <div className={styles.pk}>
                    <img src="https://www.netmeds.com/images/category/481/thumb/ayush_1.jpg" alt="" />
                    <p>Ayush</p>
                </div>
                <div className={styles.pk}>
                    <img style={{ height: "180px", width: "180px" }}
                        src="https://www.netmeds.com/images/category/v1/3085/thumb/mom_baby_1.jpg" alt="" />
                    <p>Moms & Baby</p>
                </div>
                <div className={styles.pk}>
                    <img src="https://www.netmeds.com/images/category/665/thumb/devices_1.jpg" alt="" />
                    <p>Devices</p>
                </div>
                <div className={styles.pk}>
                    <img src="https://www.netmeds.com/images/category/500/thumb/fitness_1.jpg" alt="" />
                    <p>Fitness</p>
                </div>
                <div className={styles.pk}>
                    <img src="https://www.netmeds.com/images/category/v1/3251/thumb/sexual_wellness_2.jpg" alt="" />
                    <p>Sexual Wellness</p>
                </div>
            </div>
            <h2 className={styles.margin}>Top Brand</h2>
            <div className={styles.catogery}>

                <div className={styles.pk}>
                    <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/maxi.jpg?v=14" alt="" />
                    <p>Maxi</p>
                </div>
                <div class="pk">
                    <img style={{ height: "180px", width: "180px" }}
                        src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/skin-elements.jpg?v=14" alt="" />
                    <p>Skin-Elements</p>
                </div>
                <div className={styles.pk}>
                    <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dr-vaidyas.jpg?v=14" alt="" />
                    <p>Dr-Vaidyas</p>
                </div>
                <div className={styles.pk}>
                    <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dabur.jpg?v=14" alt="" />
                    <p>Dabur</p>
                </div>
                <div className={styles.pk}>
                    <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/accu-chek.jpg?v=14" alt="" />
                    <p>Acc-Chek</p>
                </div>
            </div>
        </div >
    )
}
