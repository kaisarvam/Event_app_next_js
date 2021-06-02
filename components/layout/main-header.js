import React from 'react';
import Link from 'next/link';
import classes from './main-header.module.css';

export default function MainHeader() {
    return (
       <header className={classes.header}>
           <div className={classes.logo}>
<Link href='/'>NextEvent</Link>
           </div>
           <nav className={classes.navigation}>
        <ul>
            <li>
                <Link href='/events'>Browse All event</Link>
            </li>
        </ul>
           </nav>
       </header>
    )
}
