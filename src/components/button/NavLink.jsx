"use client"


import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const path = useParams();
    return <Link href={href}>{children}</Link>
};

export default NavLink;