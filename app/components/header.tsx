"use client"
import React, { useEffect, useState } from "react";
import CreatePopup from "./createPopup";

export default function Header() {
    // State variables for popup
    const [isCreatePopup, setIsCreatePopup] = useState(false);
    // Check authentication
    useEffect(() => {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        if (!username || !password) {
            window.location.href = "/login";
        }
    }, []);

    // Render the header
    return (
        <React.Fragment>
            <div className="bg-blue-800 w-full flex items-center p-[20px_30px] sticky top-0 z-40 justify-between h-[70px]">
                <h1 className="text-3xl font-bold text-white">Io-Tech</h1>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => {
                            setIsCreatePopup(true);
                        }}
                        className="bg-white text-black text-[16px] font-medium w-fit rounded p-[6px_10px] hover:bg-gray-100 cursor-pointer">
                        Create Post
                    </button>
                    <button
                        onClick={() => {
                            localStorage.removeItem("username");
                            localStorage.removeItem("password");
                            window.location.href = "/login";
                        }}
                        className="bg-red-500 text-white text-[16px] font-medium w-fit rounded p-[6px_10px] hover:bg-red-600 cursor-pointer">Logout</button>
                </div>
            </div>
            {/* Create popup */}
            {isCreatePopup && (
                <CreatePopup
                    onClose={() => setIsCreatePopup(false)}
                />
            )}
        </React.Fragment>
    );
}
