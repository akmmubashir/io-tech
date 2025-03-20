"use client"
import Link from "next/link";
import React, { useState } from "react";
import EditPopup from "./editPopup";

interface Post {
    id: number;
    title: string;
    body: string;
}

export default function PostTile({ post }: { post: Post }) {
    const [isEditPopup, setIsEditPopup] = useState(false);

    const handleDelete = () => {
        fetch(`${process.env.POST_API_URL}/posts/${post?.id}`, {
            method: 'DELETE'
        })
            .then(() => {
                alert('Post deleted successfully');
            })
            .catch((error) => {
                console.error('Error deleting post:', error);
                alert('Failed to delete post');
            });
    }

    return (
        <React.Fragment>
            <div key={post?.id} className="col-span-full bg-gray-100 p-4 rounded-lg shadow-md flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                    <h2 className="text-black text-[22px] font-medium">{post?.title}</h2>
                    <p className="text-gray-600 text-[16px]">{post?.body}</p>
                </div>
                <div className="flex items-center gap-[10px] justify-between ms-auto">
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white w-full rounded p-[8px_10px] hover:bg-red-600 cursor-pointer text-[16px] font-medium">Delete</button>
                    <button
                        onClick={() => setIsEditPopup(true)}
                        className="bg-blue-500 text-white w-full rounded p-[8px_10px] hover:bg-blue-600 cursor-pointer text-[16px] font-medium">Edit</button>
                    <Link
                        href={`/post/${post?.id}`}
                        className="bg-gray-700 text-white w-full rounded p-[8px_10px] hover:bg-gray-600 cursor-pointer text-[16px] font-medium whitespace-nowrap">Read More</Link>
                </div>
            </div>
            {isEditPopup && (
                <EditPopup
                    post={post}
                    onClose={() => setIsEditPopup(false)}
                />
            )}
        </React.Fragment>
    )
}