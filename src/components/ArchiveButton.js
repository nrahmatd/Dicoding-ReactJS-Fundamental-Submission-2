import React from "react";
import { Link } from 'react-router-dom';

function ArchiveButton() {
    return (
        <nav className="navigation">
                <ul>
                    <Link to="/archives" title="Archives">Arsip</Link>
                </ul>
        </nav>
    )
}

export default ArchiveButton;