import React from 'react';
import { Link } from 'react-router-dom';
import ArchiveButton from './ArchiveButton';
import ThemeButton from './ThemeButton';
import LogoutButton from './LogoutButton';

function Toolbar() {
    return (
        <>
            <h1><Link to="/">Aplikasi Catatan</Link></h1>
            <ArchiveButton />
            <ThemeButton />
            <LogoutButton />
        </>
    );
}

export default Toolbar;