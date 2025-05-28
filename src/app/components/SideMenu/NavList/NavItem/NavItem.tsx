'use client'

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ label, link, icon }) => {
    const pathname = usePathname();

    return (
        <Link href={link} className={`flex p-4 items-center w-full font-medium hover:bg-gray-700 
        ${pathname === link ? 'bg-gray-600 border-r-4 border-green-500' : ''}`}>
            <div className="mr-1">{icon}</div>
            <div>{label}</div>
        </Link>
  );
}

export default NavItem
