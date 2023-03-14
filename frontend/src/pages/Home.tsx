import Layout from "../components/Layout";


function Home() {
    return (
        <Layout title="Homepage">
            <div
                className="mx-auto max-w-screen-xl px-4 py-10"
            >
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Never Miss A RFD Deal.
                        <strong className="font-extrabold text-red-700 sm:block">
                            No B.S Tracking
                        </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl sm:leading-relaxed">
                        Tired of spending hours constantly checking RedFlagDeals for deals? We'll deliver only what you want!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded bg-red-600 px-12 py-3 text-md font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                            href="/get-started"
                        >
                            Browse Deals
                        </a>

                        <a
                            className="block w-full rounded px-12 py-3 text-md font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                            href="/about"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home;