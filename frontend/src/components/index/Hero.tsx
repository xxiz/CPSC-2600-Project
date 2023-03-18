function Hero() {
    return (
        <div className="mx-auto max-w-2xl text-center py-24 sm:py-32">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-800">
                Never Miss A Deal!
                <strong className="font-extrabold text-red-600 block">
                    Get The Deals You Want!
                </strong>
            </h1>

            <p className="mt-4 sm:text-xl sm:leading-relaxed">
                Tired of spending hours constantly checking RedFlagDeals for deals? We'll deliver only the best deals!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                    className="block w-full rounded bg-red-600 px-12 py-3 text-md font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                    href="/deals"
                >
                    Trending Deals
                </a>

                <a
                    className="block w-full rounded px-12 py-3 text-md font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                    href="/about"
                >
                    Learn More
                </a>
            </div>
        </div>
    )
}

export default Hero