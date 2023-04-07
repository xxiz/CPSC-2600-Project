import Layout from "../components/Layout";
import React, { lazy, Suspense } from "react";

const Hero = lazy(() => import("../components/index/Hero"));

function Home() {
  return (
    <Layout title="Homepage">
      <div className="max-w-screen-xl px-4 py-10 mx-auto">
        <img
          src="https://safe.1m.cx/hG3ZfZ02.png"
          alt="RedFlagDeals Screenshot"
          className="mx-auto rounded-lg shadow-md md:block max-h-[400px] mt-10 sm:mt-20"
        />
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
        </Suspense>
      </div>
    </Layout>
  );
}

export default Home;
