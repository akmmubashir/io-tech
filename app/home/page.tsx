// Import necessary components for the home page layout
import Header from "@/app/components/header";
import Footer from "../components/footer";
import PostList from "../components/postList";

// HomePage component: Main layout component for the home page
export default function HomePage() {
    return (
        // Main container with full width and height, white background
        <div className="bg-white w-full h-screen overflow-hidden">
            <Header />
            {/* Content container with maximum width and responsive padding */}
            <div className="max-w-[1440px] p-[40px] max-md:p-[40px_20px] h-[calc(100vh-120px)] mx-auto flex items-center justify-center">
                <div className="w-full h-full">
                    <PostList />
                </div>
            </div>
            <Footer />
        </div>
    );
}
