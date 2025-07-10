import React, { useState } from 'react';
import './index.css';

const menuItems = [
    {
        label: 'Buying',
        submenu: [
            { label: 'Buying Process', link: '/buying/process' },
            { label: 'Listings', link: '/buying/listings' }
        ]
    },
    {
        label: 'Selling',
        submenu: [
            { label: 'Selling Process', link: '/selling/process' },
            { label: 'Home Evaluation', link: '/selling/evaluation' }
        ]
    },
    {
        label: 'About',
        submenu: [
            { label: 'About Me', link: '/about/me' },
            { label: 'Client Reviews', link: '/about/reviews' },
            { label: 'Contact', link: '/about/contact' }
        ]
    }
];

function Header() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <header className="header">
            <h1 className="header-name">
                Assel Abisheva
            </h1>
            <ul className="header-options">
                <li
                    className="header-option"
                >
                    <button className="header-btn" onClick={() => window.location.href = '/home'}>Home</button>
                </li>
                {menuItems.map((item, idx) => (
                    <li
                        key={item.label}
                        className="header-option"
                        onMouseEnter={() => setOpenIndex(idx)}
                        onMouseLeave={() => setOpenIndex(null)}
                    >
                        <button className="header-btn">{item.label}</button>
                        {openIndex === idx && (
                            <ul className="dropdown-menu">
                                {item.submenu.map(sub => (
                                    <li key={sub.label}>
                                        <a href={sub.link} className="dropdown-link">{sub.label}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default Header;