import { useEffect, useState } from "react"
import Layout from "../components/Layout";
import { IDeal } from "../types"

function Deals() {
    const [deals , setDeals] = useState<IDeal[]>([]);

    const fetchDeals = async () => {
        const response = await fetch("http://localhost:3000/api/v1/deals/trending");
        const { data: deals } = await response.json();
        setDeals(deals);
    }
    
    useEffect(() => {
        fetchDeals();
    }, []);
    

    return (
        <Layout>
            <h1>Deals</h1>
            {deals && deals.map((deal) => (
                <div key={deal.title}>
                    <h2>{deal.title}</h2>
                    <p>{deal.description}</p>
                    <p>{deal.last_updated}</p>
                </div>
            ))}
        </Layout>
    )
}

export default Deals