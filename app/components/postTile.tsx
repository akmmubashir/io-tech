"use client"
import React, { useState } from "react";
import EditPopup from "./editPopup";

// Interface defining the structure of a Post object
interface Post {
    id: number;
    title: string;
    body: string;
}

// PostTile component: Displays individual post with edit and delete functionality
export default function PostTile({ post }: { post: Post }) {
    // State to control the visibility of edit popup
    const [isEditPopup, setIsEditPopup] = useState(false);

    // Handler function to delete a post
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
            {/* Post card container with title and body */}
            <div key={post?.id} className="col-span-full bg-gray-100 p-4 rounded-lg shadow-md flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                    <h2 className="text-black text-[22px] font-medium">{post?.title}</h2>
                    <p className="text-gray-600 text-[16px]">{post?.body}</p>
                </div>
                {/* Action buttons container */}
                <div className="flex items-center gap-[10px] justify-between ms-auto">
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white w-full rounded p-[8px_10px] hover:bg-red-600 cursor-pointer text-[16px] font-medium">Delete</button>
                    <button
                        onClick={() => setIsEditPopup(true)}
                        className="bg-blue-500 text-white w-full rounded p-[8px_10px] hover:bg-blue-600 cursor-pointer text-[16px] font-medium">Edit</button>
                </div>
            </div>
            {/* Conditional rendering of edit popup */}
            {isEditPopup && (
                <EditPopup
                    post={post}
                    onClose={() => setIsEditPopup(false)}
                />
            )}
        </React.Fragment>
    )
}