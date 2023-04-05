import React, { useEffect, useState } from "react"
import Card from "../components/Deals/Card";
import Layout from "../components/Layout";
import { IDeal } from "../types"

function Deals() {
    const [deals, setDeals] = useState<IDeal[]>([]);

    const fetchDeals = async () => {
        const response = await fetch("http://localhost:3541/api/v1/deals/trending");
        const { data: deals } = await response.json();
        setDeals(deals);
    }

    useEffect(() => {
        fetchDeals();
    }, []);

    const getLastScraped = async (): Promise<string> => {
        const response = await fetch("http://localhost:3541/api/v1/scrapes/latest");
        const { data: { timestamp } } = await response.json();
        const lastScraped = new Intl.DateTimeFormat('default', { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true, timeZoneName: 'short' }).format(new Date(timestamp))
        return lastScraped;
      };

    useEffect(() => {
        getLastScraped().then((seconds) => {
            const s = document.getElementById("s");
            if (s) {
                s.innerHTML = seconds.toString();
            }
        })
        console.log("useEffect");
    }, []);

    return (
        <Layout>
            <h1 className="my-4 text-3xl font-semibold tracking-wide text-center">Trending Deals</h1>
            <p className="mb-6 text-sm text-center text-gray-500">Last Updated: <span id="s"></span></p>
            <Card deals={...deals} />
        </Layout>
    )
}

export default Deals