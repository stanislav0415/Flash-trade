export default function Header() {
    return (
        <nav className="bg-[#31363F] fixed z-20 top-4 left-0 right-0 mx-auto max-w-7xl rounded-2xl border border-[#505661] shadow-lg">
            <div className="flex flex-wrap items-center justify-between py-2 px-6">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/Flash.png" className="h-10" alt="Flowbite Logo" />
                    <span className="self-center text-2xl md:text-3xl text-white font-semibold whitespace-nowrap">
                        Flash Trade
                    </span>
                </a>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="font-medium flex flex-col p-2 md:p-0 mt-2 rounded-lg bg-[#31363F] md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0">

                        <li>
                            <a
                                href="/"
                                className="block py-2 px-6 text-white rounded-lg text-lg md:text-xl hover:bg-[#505661] transition-all"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="/"
                                className="block py-2 px-6 text-white rounded-lg text-lg md:text-xl hover:bg-[#505661] transition-all"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="/"
                                className="block py-2 px-6 text-white rounded-lg text-lg md:text-xl hover:bg-[#505661] transition-all"
                            >
                                Trade
                            </a>
                        </li>

                        <li>
                            <a
                                href="/"
                                className="block py-2 px-6 text-white rounded-lg text-lg md:text-xl hover:bg-[#505661] transition-all"
                            >
                                Pricing
                            </a>
                        </li>

                        <li>
                            <a
                                href="/"
                                className="block py-2 px-6 text-white rounded-lg text-lg md:text-xl hover:bg-[#505661] transition-all"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
