import Link from "next/link";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

interface Post {
    id: number;
    title: string;
    body: string;
}

async function getPost(id: string): Promise<Post> {
    const res = await fetch(`${process.env.POST_API_URL}/posts/${id}`, {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch post');
    return res.json();
}

type Props = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: Props) {
    if (!params?.id) {
        return <div>Invalid post ID</div>;
    }

    try {
        const post = await getPost(params.id);

        return (
            <div className="bg-white w-full h-screen overflow-hidden">
                <Header />
                <div className="max-w-[1440px] p-[40px] max-md:p-[40px_20px] h-[calc(100vh-120px)] mx-auto flex items-center justify-center">
                    <div className="w-full h-full">
                        <div className="mb-[20px]">
                            <Link href="/" className="cursor-pointer p-[12px_20px] text-[18px] font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500">
                                {"<"} Back to Home
                            </Link>
                        </div>
                        <div className="w-full h-full">
                            <p className="text-black text-[22px] font-medium">Post {post.id}</p>
                            <p className="text-black text-[22px] font-medium">{post.title}</p>
                            <p className="text-gray-600 text-[16px]">{post.body}</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    } catch (error) {
        return <div>Error loading post. Please try again later.</div>;
    }
}

/** Ensure Next.js knows which dynamic paths to pre-render */
export async function generateStaticParams() {
    const res = await fetch(`${process.env.POST_API_URL}/posts`);
    if (!res.ok) return [];

    const posts: Post[] = await res.json();
    return posts.map((post) => ({ id: String(post.id) }));
}
