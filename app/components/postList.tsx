import PostTile from "./postTile";

interface Posts {
    id: number;
    title: string;
    body: string;
}

export default async function PostList() {

    const posts = await fetch(`${process.env.POST_API_URL}/posts`)
        .then(response => response.json());
    return (
        <div className="bg-white w-full h-full overflow-y-auto">
            <div className="grid grid-cols-12 gap-4">
                {posts?.map((post: Posts) => (
                    <PostTile key={post?.id} post={post} />
                ))}
            </div>
        </div>
    );
}