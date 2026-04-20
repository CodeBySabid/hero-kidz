"use client";

import { useEffect, useRef, useState } from "react";

const useNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => setOpenMenu(false);
  const toggleMenu = () => setOpenMenu((prev) => !prev);

  // Scroll close
  useEffect(() => {
    if (!openMenu) return;

    const handleScroll = () => closeMenu();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [openMenu]);

  // Outside click
  useEffect(() => {
    if (!openMenu) return;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  // Resize (mobile → desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    openMenu,
    toggleMenu,
    closeMenu,
    menuRef,
  };
};

export default useNavbar;