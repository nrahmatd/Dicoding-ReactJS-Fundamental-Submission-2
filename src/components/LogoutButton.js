import React, { useContext } from "react";
import { MdLogout } from "react-icons/md";
import { AuthContext } from "../context/AppContext";

function LogoutButton() {
    const { auth } = useContext(AuthContext);

    const onLogoutHandler = () => {
        localStorage.removeItem("accessToken");
        window.location = '/';
    }

    return (
        <>
            { auth ? (
                <button
                    title="Logou"
                    type="button"
                    className="button-logout"
                    onClick={onLogoutHandler}>
                        <MdLogout />
                    </button>
            ): '' }
        </>
    );
}

export default LogoutButton;