export default function Home() {
    return (
        <div className="min-h-screen bg-neutral-primary text-white flex items-start">
            <section className="w-full md:w-1/2 px-10 md:pl-32 pt-16 pb-12 text-left z-10 mt-32">
                <h1 className="text-2xl md:text-4xl font-bold mb-6">
                    Transform Your Skin Trading With <span className="text-brand">Flash Trade</span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mb-10">
                    Flash Trade brings next-generation tools for buying, selling, and analyzing CS2 skins.
                    Experience lightning-fast listings, deeper market insights, and a secure environment
                    built for both casual traders and professionals.
                </p>
                <div className="flex gap-4">
                    <button className="px-6 py-3 rounded-xl bg-[#76ABAE] hover:bg-[#5c8c8f] transition-all">
                        Explore Marketplace
                    </button>
                    <button className="px-6 py-3 rounded-xl bg-[#76ABAE] hover:bg-[#5c8c8f] transition-all">
                        Learn More
                    </button>
                </div>
            </section>

            <div className="hidden md:flex justify-center items-start w-1/2 -ml-24 pt-32">
                <img
                    src="/homeknife.jpg"
                    className="rounded-2xl shadow-lg w-full max-w-2xl hover:scale-110 transition-transform duration-300"
                />
            </div>
        </div>
    );
}
