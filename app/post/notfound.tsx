import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

export default function NotFound() {
    return <div className="bg-white w-full h-screen overflow-hidden">
        <Header />
        <div className="max-w-[1440px] p-[40px] max-md:p-[40px_20px] h-[calc(100vh-120px)] mx-auto flex items-center justify-center">
            Not Found
            <Link href="/" className="cursor-pointer p-[12px_20px] text-[18px] font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500">
                {"<"} Back to Home
            </Link>
        </div>
        <Footer />
    </div>;
}