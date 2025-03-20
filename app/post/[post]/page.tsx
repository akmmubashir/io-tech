import { Metadata } from "next";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Link from "next/link";

interface Post {
    id: number;
    title: string;
    body: string;
}

async function getPost(id: string) {
    const res = await fetch(`https://dummyjson.com/posts/${id}`, {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch post');
    return res.json();
}

export async function generateMetadata({ params }: { params: { post: string } }): Promise<Metadata> {
    try {
        if (!params?.post) {
            return {
                title: "Post Not Found",
                description: "Invalid post ID"
            };
        }

        const id = params.post;
        const post: Post = await getPost(id);

        return {
            title: `${post.title} - IO Tech`,
            description: post.body,
            keywords: ["Post", id],
            openGraph: {
                title: post.title,
                description: post.body,
                type: "article",
                url: `https://io-tech.vercel.app/post/${id}`,
                siteName: "IO Tech",
            },
            twitter: {
                title: post.title,
                description: post.body,
                card: "summary",
                site: "@IO_Tech",
            },
            alternates: {
                canonical: `https://io-tech.vercel.app/post/${id}`,
            },
        };
    } catch (error) {
        return {
            title: "Error",
            description: "Failed to load post",
        };
    }
}

export default async function Page({ params }: { params: { post: string } }) {
    if (!params?.post) {
        return <div>Invalid post ID</div>;
    }

    const post = await getPost(params.post);

    return (
        <div className="bg-white w-full h-screen overflow-hidden ">
            <Header />
            <div className="max-w-[1440px] p-[40px] max-md:p-[40px_20px] h-[calc(100vh-120px)] mx-auto flex items-center justify-center">
                <div className="w-full h-full">
                    <div className="mb-[20px]">
                        <Link href="/" className="cursor-pointer p-[12px_20px] text-[18px] font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            {"<"} Back to Home
                        </Link>
                    </div>
                    <div className="w-full h-full">
                        <p className="text-black text-[22px] font-medium">Post {post?.id}</p>
                        <p className="text-black text-[22px] font-medium">{post?.title}</p>
                        <p className="text-gray-600 text-[16px]">{post?.body}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}