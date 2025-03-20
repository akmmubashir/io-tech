"use client"
import { useState } from "react";

interface CreatePopupProps {
    onClose: () => void;
}

export default function CreatePopup({ onClose }: CreatePopupProps) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`${process.env.POST_API_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                body
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(() => {
                alert('Post created successfully');
                onClose();
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error creating post:', error);
                alert('Failed to update post');
            });
    }

    return (
        <>
            <div 
                className="fixed inset-0 bg-black/50" 
                style={{ zIndex: 1000 }}
                onClick={onClose}
            />
            <div 
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-lg"
                style={{ zIndex: 1001 }}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-black">Create Post</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleCreate} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-black mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter post title"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder:text-gray-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="body" className="block text-sm font-medium text-black mb-1">
                            Body
                        </label>
                        <textarea
                            id="body"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            rows={4}
                            placeholder="Enter post body"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder:text-gray-400"
                        />
                    </div>

                    <div className="flex gap-2 justify-end mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}