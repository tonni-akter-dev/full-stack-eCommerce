'use client';
import React from 'react';
import { Dropdown } from 'antd';
import { CaretDown } from '@phosphor-icons/react';
import Link from 'next/link';

const MenuItems = ({ items, label }) => {
    return (
        <Dropdown menu={{ items }}>
            <Link
                href="#"
                className="flex gap-1 items-center cursor-pointer text-base font-semibold text-primary_dark_color hover:text-primary_color"
                onClick={(e) => e.preventDefault()}
            >
                {label}
                <CaretDown size={16} />
            </Link>
        </Dropdown>
    );
};

export default MenuItems;
