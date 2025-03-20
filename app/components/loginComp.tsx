"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginComp() {
    const router = useRouter();
    const [username, setUsername] = useState("username");
    const [password, setPassword] = useState("password");
    const [error, setError] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        if (username === "username" && password === "password") {
            e.preventDefault();
            router.push("/home");
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            setError("Invalid username or password");
        }
    };
    return (
        <div className="bg-white w-full h-screen flex items-center justify-center">
            <div className="bg-gray-100 opacity-80 p-8 rounded-lg shadow-lg gap-4 w-[400px] flex flex-col items-center gap-4 border-2 border-gray-500">
                <h1 className="text-[26px] text-center font-bold text-black">Login</h1>
                <form action="" className="flex flex-col gap-3 w-full">
                    <input type="text" placeholder="Username" name="username" required value={username} onChange={(e) => setUsername(e.target.value)} className="bg-white border border-gray-500 rounded-[6px] p-[10px_10px] h-[50px] text-black" />
                    <input type="password" placeholder="Password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="bg-white border border-gray-500 rounded-[6px] p-[10px_10px] h-[50px] text-black" />
                    {error && <p className="text-red-600">{error}</p>}
                    <button type="submit" className="bg-blue-500 text-white w-full rounded-[6px] p-[10px_10px] h-[50px] hover:bg-blue-600 cursor-pointer" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
    );
}
