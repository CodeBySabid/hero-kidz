"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { IoIosMenu } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import useNavbar from "./useNavbar";
import { FaShoppingCart } from "react-icons/fa";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import Link from "next/link";


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
        <div className="fixed w-full shadow-sm z-50 backdrop-blur-md bg-orange-500/40 border-b border-white/20">

            {/* Desktop */}
            <div className="hidden lg:flex justify-between items-center px-6 py-1">
                <Logo />

                <div className="flex gap-6">
                    <Link href='/'>Home</Link>
                    <Link href='/service'>Service</Link>
                    <Link href='/products'>Products</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/blog'>blog</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={handleTheme}>
                        {theme === "dark" ? <IoSunny size={22} /> : <IoMoonSharp size={22} />}
                    </button>
                    <button
                        className="px-4 py-1.5 rounded-full bg-cyan-400 text-black cursor-pointer"
                    >
                        <FaShoppingCart />
                    </button>
                    <button className="px-4 py-1 rounded-full bg-blue-600/80 cursor-pointer text-white">
                        Login
                    </button>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden flex justify-between items-center px-4 py-1">
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
                        <motion.div
                            variants={itemVariants}
                            className="text-lg hover:text-cyan-300 hover:bg-blue-600/30 hover:px-6 hover:rounded-2xl transition"
                        >
                            <Link onClick={closeMenu} href='/'>Home</Link>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="text-lg hover:text-cyan-300 hover:bg-blue-600/30 hover:px-6 hover:rounded-2xl transition"
                        >
                            <Link onClick={closeMenu} href='/service'>Service</Link>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="text-lg hover:text-cyan-300 hover:bg-blue-600/30 hover:px-6 hover:rounded-2xl transition"
                        >
                            <Link href='/products'>Products</Link>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="text-lg hover:text-cyan-300 hover:bg-blue-600/30 hover:px-6 hover:rounded-2xl transition"
                        >
                            <Link onClick={closeMenu} href='/about'>About</Link>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="text-lg hover:text-cyan-300 hover:bg-blue-600/30 hover:px-6 hover:rounded-2xl transition"
                        >
                            <Link onClick={closeMenu} href='/blog'>blog</Link>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="text-lg hover:text-cyan-300 hover:bg-blue-600/30 hover:px-6 hover:rounded-2xl transition"
                        >
                            <Link onClick={closeMenu} href='/contact'>Contact</Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex gap-4 mt-2">
                            <button onClick={handleTheme} className="cursor-pointer">
                                {theme === "dark" ? <IoSunny size={22} /> : <IoMoonSharp size={22} />}
                            </button>
                            <button
                                onClick={closeMenu}
                                className="px-6 rounded-full bg-cyan-400 text-black cursor-pointer"
                            >
                                <FaShoppingCart />
                            </button>
                            <button
                                onClick={closeMenu}
                                className="px-4 py-1 rounded-full bg-blue-600/80 cursor-pointer text-white"
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