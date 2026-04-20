"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { IoIosMenu } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import useNavbar from "./useNavbar";
import { FaShoppingCart } from "react-icons/fa";
import { IoMoonSharp, IoSunny } from "react-icons/io5";

const navItems = ["Home", "Services", "About", "Contact"];

const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.1 },
    },
    exit: { opacity: 0, y: -20 },
};

const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
    const { openMenu, toggleMenu, closeMenu, menuRef } = useNavbar();
    const [theme, setTheme] = useState('dark');

    const handleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }, [])

    return (
        <div className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">

            {/* Desktop */}
            <div className="hidden lg:flex justify-between items-center px-6 py-3">
                <Logo />

                <div className="flex gap-6">
                    {navItems.map((item, i) => (
                        <a key={i} href="#" className="hover:text-cyan-300 transition">
                            {item}
                        </a>
                    ))}
                </div>
                <div>
                    <button onClick={handleTheme}>
                        {theme === "dark" ? <IoSunny size={22} /> : <IoMoonSharp size={22} />}
                    </button>
                    <button
                        onClick={closeMenu}
                        className="px-4 py-1.5 rounded-full bg-cyan-400 text-black"
                    >
                        <FaShoppingCart />
                    </button>
                    <button className="px-4 py-1.5 rounded-full bg-white/20">
                        Login
                    </button>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden flex justify-between items-center px-4 py-3">
                <Logo />
                <button onClick={toggleMenu}>
                    {openMenu ? <FiX size={28} /> : <IoIosMenu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {openMenu && (
                    <motion.div
                        ref={menuRef}
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="lg:hidden absolute top-full left-0 w-full 
            backdrop-blur-xl bg-black/50 border-b border-white/20
            flex flex-col items-center py-5 gap-4"
                    >
                        {navItems.map((item, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                onClick={closeMenu}
                                variants={itemVariants}
                                className="text-lg hover:text-cyan-300 transition"
                            >
                                {item}
                            </motion.a>
                        ))}

                        <motion.div variants={itemVariants} className="flex gap-4 mt-2">
                            <button onClick={handleTheme}>
                                {theme === "dark" ? <IoSunny size={22} /> : <IoMoonSharp size={22} />}
                            </button>
                            <button
                                onClick={closeMenu}
                                className="px-4 py-1.5 rounded-full bg-cyan-400 text-black"
                            >
                                Sign Up
                            </button>
                            <button
                                onClick={closeMenu}
                                className="px-4 py-1.5 rounded-full bg-white/20"
                            >
                                Login
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;