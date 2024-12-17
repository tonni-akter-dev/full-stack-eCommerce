'use client'
import React from 'react'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
import { CaretDown, ListDashes } from '@phosphor-icons/react'
import Link from 'next/link'
import MenuItems from './MenuItems'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.antgroup.com'
      >
        1st menu item
      </a>
    )
  },

  {
    key: '3',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.luohanacademy.com'
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item'
  }
]
const navItems = [
  {
    key: 'home',
    label: 'Home',
    items: [
      {
        key: '1',
        label: (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.antgroup.com'
          >
            Home 1
          </a>
        )
      },
      {
        key: '2',
        label: (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.aliyun.com'
          >
            Home 2
          </a>
        )
      }
    ]
  },
  {
    key: 'shop',
    label: 'Shop',
    items: [
      {
        key: '1',
        label: (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.antgroup.com'
          >
            Our Shop
          </a>
        )
      },
      {
        key: '2',
        label: (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.aliyun.com'
          >
            Product Details
          </a>
        )
      },
      {
        key: '3',
        label: (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.aliyun.com'
          >
            Cart
          </a>
        )
      },
      {
        key: '3',
        label: (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.aliyun.com'
          >
            Checkout
          </a>
        )
      },
      {
        key: '3',
        label: (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.aliyun.com'
          >
            Wishlist
          </a>
        )
      }
    ]
  },
  {
    key: 'blog',
    label: 'Blog',
    items: [
      {
        key: '1',
        label: (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.antgroup.com'
          >
            Our Blog
          </a>
        )
      },
      {
        key: '2',
        label: (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.aliyun.com'
          >
            Blog Details
          </a>
        )
      }
    ]
  },
  {
    key: 'pages',
    label: 'Pages',
    items: [
      {
        key: '1',
        label: (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.antgroup.com'
          >
            About Us
          </a>
        )
      },
      {
        key: '2',
        label: (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.aliyun.com'
          >
            Faqs
          </a>
        )
      }
    ]
  }
]

const Header = () => {
  return (
    <header className='w-full bg-secondary_light_color h-[76px] flex items-center shadow-md'>
      <div className='container max-w-[1460px] mx-auto flex items-center justify-between'>
        {/* Dropdown Section */}
        <div className='flex items-center'>
          <div className='bg-white rounded-md shadow-sm'>
            <Dropdown menu={{ items }}>
              <Link
                className='flex items-center gap-2 px-4 py-[14px] text-black hover:text-gray-700'
                href='#'
                onClick={e => e.preventDefault()}
              >
                <ListDashes size={20} />
                <Space>
                  <span className='font-medium'>Products Category</span>
                  <CaretDown size={16} />
                </Space>
              </Link>
            </Dropdown>
          </div>
          {/* Middle Navigation Section */}
          <div className='flex gap-[50px]  ml-20'>
            <div className='h-6 w-[1px] bg-text_color'></div>
            <nav className='flex gap-[50px] justify-center'>
              {navItems.map(navItem => (
                  <MenuItems key={navItem.key} items={navItem.items} label={navItem.label} />
              ))}
            </nav>
            <div className='h-6 w-[1px] bg-text_color'></div>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex items-center space-x-6'>
          <Link href='#' className='text-black hover:text-gray-700'>
            Deal
          </Link>
          <div className='relative cursor-pointer'>
            <span>⭐</span>
          </div>
          <div className='relative cursor-pointer'>
            ♥{' '}
            <span className='absolute -top-2 -right-2 bg-orange-400 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full'>
              12
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
