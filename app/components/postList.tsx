// Import PostTile component for rendering individual posts
import PostTile from "./postTile";

// Interface defining the structure of post data
interface Posts {
    id: number;
    title: string;
    body: string;
}

// PostList component: Fetches and displays a grid of posts
export default async function PostList() {
    // Fetch posts data from the API
    const posts = await fetch(`${process.env.POST_API_URL}/posts`)
        .then(response => response.json());

    return (
        // Container with scrollable content
        <div className="bg-white w-full h-full overflow-y-auto">
            {/* Grid layout for posts */}
            <div className="grid grid-cols-12 gap-4">
                {/* Map through posts array and render PostTile for each post */}
                {posts?.map((post: Posts) => (
                    <PostTile key={post?.id} post={post} />
                ))}
            </div>
        </div>
    );
}