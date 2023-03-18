import Features from "../components/index/Features";
import Hero from "../components/index/Hero";
import Layout from "../components/Layout";


function Home() {
    return (
        <Layout title="Homepage">
            <div
                className="mx-auto max-w-screen-xl px-4 py-10"
            >
                <img
                src="https://safe.1m.cx/hG3ZfZ02.png"
                alt="RedFlagDeals Screenshot"
                className="mx-auto rounded-lg shadow-md hidden md:block max-h-[400px] mt-10 sm:mt-20"
                />

                <Hero />
                            
                {/* <Features /> */}
            </div>
        </Layout>
    )
}

export default Home;