'use client';
import React from 'react';

import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { ListDashes } from '@phosphor-icons/react';
import Link from 'next/link';
import MenuItems from './MenuItems';

const items: MenuProps['items'] = [
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        ),
        key: '1',
    },
];

const Header = () => {
    return (
        <header className="w-full bg-secondary_light_color h-[76px] flex items-center shadow-md">
            <div className="container max-w-[1460px] mx-auto flex items-center justify-between">
                {/* Dropdown Section */}
                <div className='flex items-center'>
                    <div className="bg-white rounded-md shadow-sm">
                        <Dropdown menu={{ items }}>
                            <Link
                                className="flex items-center gap-2 px-4 py-[14px] text-black hover:text-gray-700"
                                href="#"
                                onClick={(e) => e.preventDefault()}
                            >
                                <ListDashes size={20} />
                                <Space>
                                    <span className="font-medium">Products Category</span>
                                    <DownOutlined style={{ fontSize: '16px' }} />
                                </Space>
                            </Link>
                        </Dropdown>
                    </div>

                    {/* Middle Navigation Section */}
                    <nav className="flex-1 flex justify-center ml-[120px]">
                        <div className="relative">
                            <div className="absolute h-6 left-[-40px] w-[1px] bg-gray-300"></div>
                            <MenuItems />
                        </div>
                    </nav>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-6">
                    {/* Additional elements like icons or links can be added here */}
                    <Link href="#" className="text-black hover:text-gray-700">
                        Deal
                    </Link>
                    {/* Example right icons */}
                    <div className="relative cursor-pointer">
                        <span>⭐</span>
                    </div>
                    <div className="relative cursor-pointer">
                        ♥ <span className="absolute -top-2 -right-2 bg-orange-400 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">12</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
