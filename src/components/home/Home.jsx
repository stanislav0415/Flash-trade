import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-neutral-primary text-white min-h-screen">
         
            <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-start px-6 pt-32 pb-12 gap-10">
                <div className="md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">
                        Transform Your Skin Trading With <span className="text-brand">Flash Trade</span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mb-10">
                        Flash Trade brings next-generation tools for buying, selling, and analyzing CS2 skins.
                        Experience lightning-fast listings, deeper market insights, and a secure environment
                        built for both casual traders and professionals.
                    </p>
                    <div className="flex gap-4">
                        <Link to="/skins" className="px-6 py-3 rounded-xl bg-[#76ABAE] hover:bg-[#5c8c8f] transition-all">
                            Explore Marketplace
                        </Link>
                        <Link to="/about" className="px-6 py-3 rounded-xl bg-[#76ABAE] hover:bg-[#5c8c8f] transition-all">
                            Learn More
                        </Link>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="/homeknife.jpg"
                        className="rounded-2xl shadow-lg w-full max-w-2xl hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </section>

            <section className="max-w-5xl mx-auto mt-12 px-6 mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                    Frequently Asked Questions
                </h2>
                <p className="text-neutral-300 text-center mb-12">
                    Can't find the answer here? Visit our Full Documentation.
                </p>

                <div className="space-y-4">
                    <div className="bg-[#31363F] p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Sell Skins for Real Money?
                        </h3>
                        <p className="text-neutral-300">
                            Yes! Flash Trade allows you to sell your CS2 skins securely and receive real money through verified payment methods.
                        </p>
                    </div>

                    <div className="bg-[#31363F] p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            How Long Will It Take To Receive Purchased Items?
                        </h3>
                        <p className="text-neutral-300">
                            Purchased items are usually delivered instantly, but in some cases it may take a few minutes depending on the marketplace load.
                        </p>
                    </div>

                    <div className="bg-[#31363F] p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            What If the Seller Doesn't Send the Item?
                        </h3>
                        <p className="text-neutral-300">
                            Our platform guarantees your purchase. If the seller doesn’t send the item, we will refund your money immediately.
                        </p>
                    </div>

                    <div className="bg-[#31363F] p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            How Long Does it Take to Receive Proceeds as a Seller?
                        </h3>
                        <p className="text-neutral-300">
                            Once your item is sold, proceeds are transferred to your account within 24 hours, depending on your payment method.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
