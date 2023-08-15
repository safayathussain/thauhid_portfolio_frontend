import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
    const open_btn = document.getElementById("open");
    const close_btn = document.getElementById("close");
    const nav_container = document.getElementById("nav_container");
    const nav_elements = document.getElementById("nav_elements");
    const navbar_main = document.getElementById("navbar_main");
    const [nav_container_position, setnav_container_position] = useState(-370)
    const openMenu = () => {
        setnav_container_position(0)
    }

    const closeMenu = () => {
        setnav_container_position(-370)

    }

    const scroll = () => {
        closeMenu();
        if (window.scrollY > 100) {
            navbar_main.classList.add("shadow");
        } else {
            navbar_main.classList.remove("shadow");
        }
    };

    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".nav_links a");
    window.onscroll = () => {
        var current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach((a) => {
            if (a.classList.contains(current)) {
                a.classList.add("active");
            } else {
                a.classList.remove("active")
            }
        });
    };

    return (
        <div onscroll={scroll}>
            <div class="navbar_main" id="navbar_main">
                <div class="brand">
                    <Image width={150} height={90} src="https://thauhid.com/xtra-img/Thauhid.svg" alt="brand_image" class="nav-img" />
                </div>
                <div class="nav_links">
                    <a href="https://thauhid.com/#hero_section" class="hero_section active">Home</a>
                    <a href="https://thauhid.com/#job_section" class="job_section">Experiences</a>
                    <a href="https://thauhid.com/#projects_section" class="projects_section">Projects</a>
                    <a href="https://thauhid.com/#ui_section" class="ui_section">UI Design</a>
                    <a href="https://thauhid.com/#blogs_section" class="blogs_section">Blogs</a>
                    <a href="mailto: thauhidfahad@gmail.com" id="nav_contact">Contact Me</a>
                </div>

                <div class="hamburger" id="open" onClick={openMenu}>
                    <Image width={40} height={40} src="https://thauhid.com/xtra-img/menu.svg" alt="hamburger_icon" class="nav-menu-img" />
                </div>
            </div>
            <div class={`phone_navbar_main phone_navbar_main_close`} id="nav_container" style={{top: `${nav_container_position}px`}}>
                <div class="navbar_elements " id="nav_elements">
                    <div class="close" onClick={closeMenu}><Image width={40} height={40} src="https://thauhid.com/xtra-img/close.svg" alt="close_icon" id="close" class="nav-menu-img" /></div>
                    <a href="#hero_section">Home</a>
                    <a href="#job_section">Experiences</a>
                    <a href="#projects_section">Projects</a>
                    <a href="#ui_section">UI Design</a>
                    <a href="#blogs_section" class="blogs_section">Blogs</a>
                    <a href="mailto: thauhidfahad@gmail.com" id="nav_contact_phone">Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar