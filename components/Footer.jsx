import React from 'react'

const Footer = () => {
    return (
        <div class="footer-container">
            <div class="footer-top">
                <div class="footer-top-left">
                    <h1 class="footer-top-h1">Ready to go for a project with me?</h1>

                </div>
                <div class="footer-top-right">
                    <a href="mailto: thauhidfahad@gmail.com"><button class="cta-footer-1">Send Message</button></a>
                </div>

            </div>
            <div class="footer-bottom">
                <div class="footer-left">

                    <h1>Thauhid Fahad</h1>
                    <div class="footer-p">
                        <p>Thanks a lot for visiting my site! For any further query feel free to contact!</p>
                    </div>
                    <div class="social">
                        <a href="https://www.facebook.com/thauhidfahad/" target="_Blank"><img src="Social/Asset 1.png" alt=""/></a>
                        <a href="https://www.linkedin.com/in/thauhidfahad/" target="_Blank"><img src="Social/Asset 2.png" alt=""/></a>
                        <a href="https://api.whatsapp.com/send?phone=01748710741" target="_Blank"><img src="Social/Asset 3.png" alt=""/></a>
                        <a href="https://instagram.com/thauhidfahad" target="_Blank"><img src="Social/Asset 4.png" alt=""/></a>
                    </div>
                </div>
                <div class="footer-right">
                    <div class="footer-contacts">
                        <div class="footer-contacts">
                            <a href="tel:+8801748710741" >
                                <div class="footer-contacts-content">
                                    <i class="fas fa-phone-alt footer-contacts-phone-content-phone-icon"></i>
                                    <p class="footer-contacts-phone-content-phone">+8801748-710741</p>
                                </div>
                            </a>
                        </div>

                        <div class="footer-contacts">
                            <a href="https://goo.gl/maps/zDmfMcuWAxMTiuVg7" target="_Blank">
                                <div class="footer-contacts-content">
                                    <i class="fas fa-location-arrow"></i>
                                    <p class="footer-contacts-phone-content-location">Sylhet, Bangladesh</p>
                                </div>
                            </a>
                        </div>

                        <div class="footer-contacts">
                            <a href="mailto:thauhidfahad@gmail.com" >
                                <div class="footer-contacts-content">
                                    <i class="fas fa-envelope"></i>
                                    <p class="footer-contacts-phone-content-email">thauhidfahad@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer