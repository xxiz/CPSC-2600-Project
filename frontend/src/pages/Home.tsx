import Features from "../components/index/Features";
import Hero from "../components/index/Hero";
import Layout from "../components/Layout";
import React from "react";


function Home() {
    return (
        <Layout title="Homepage">
            <div
                className="max-w-screen-xl px-4 py-10 mx-auto"
            >
                <img
                src="https://safe.1m.cx/hG3ZfZ02.png"
                alt="RedFlagDeals Screenshot"
                className="mx-auto rounded-lg shadow-md md:block max-h-[400px] mt-10 sm:mt-20"
                />

                <Hero />
                            
                {/* <Features /> */}
            </div>
        </Layout>
    )
}

export default Home;