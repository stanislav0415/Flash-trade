import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#31363F] rounded-2xl shadow-lg border border-[#505661] mx-auto max-w-7xl my-4">
            <div className="w-full flex flex-col md:flex-row items-center justify-between p-4">
                <span className="text-sm text-body sm:text-center text-white">
                    © 2025 <a href="/" className="hover:underline text-[#76ABAE]">Flash Trade™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 md:mt-0 text-sm font-medium text-body">
                    <li>
                        <Link to="/about" className="hover:underline me-4 md:me-6 text-white">About</Link>
                    </li>                
                
                </ul>
            </div>
        </footer>
    );
}
