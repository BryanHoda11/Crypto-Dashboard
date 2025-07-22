import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';

const CoinPage = () => {
    const { id } = useParams();
    const [coinData, setCoinData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const CoinData = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=CG-7Gw9C3o7WuyNipQpSgjUwtso`);
            const data = await CoinData.json()

            setCoinData(data)
        }

        fetchData()
    }, [id])

    return (
        <>
            <div className="wrapper flex flex-col lg:flex-row items-center justify-center gap-5 w-full max-w-6xl text-white lg:p-6 mx-auto">
                {coinData.image && (
                    <img src={coinData.image?.large} alt={coinData.name} className="w-full sm:w-1/2 lg:w-[20%] h-auto mb-6" />
                )}

                <div className="info text-white w-full sm:w-[80%] lgw-[60%] h-auto max-sm:my-3 px-3 sm:px-5 py-5 bg-[#0d1b2a] shadow-xl rounded-lg">
                    <h1 className="text-3xl font-bold mb-2">{coinData.name}</h1>
                    <div className="text-gray-400 uppercase mb-4">{coinData.symbol}</div>

                    <span className="font-semibold text-yellow-400 pb-3">
                        Market Rank : #{coinData.market_cap_rank || "N/A"}
                    </span>

                    <div className="font-semibold py-4 text-gray-300">Description:
                        {coinData.description && (
                            <p className="mt-1 w-full lg:w-[80%]"
                                dangerouslySetInnerHTML={{
                                    __html: coinData.description.en?.split('. ')[0] + '.',
                                }} />
                        )}
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 w-[80%] text-sm gap-4 py-4">
                        <li>Current Price : <span className="text-gray-300">{coinData.market_data?.current_price?.usd
                            ? `$${coinData.market_data.current_price.usd.toLocaleString()}`
                            : "N/A"}</span></li>

                        <li>Highest Value (last 24h) : <span className="text-gray-300">{coinData.market_data?.high_24h?.usd
                            ? `$${coinData.market_data.high_24h.usd.toLocaleString()}`
                            : "N/A"}</span></li>

                        <li>Lowest Value (last 24h) : <span className="text-gray-300">{coinData.market_data?.low_24h?.usd
                            ? `$${coinData.market_data.low_24h.usd.toLocaleString()}`
                            : "N/A"}</span></li>

                        <li>Total Supply : <span className="text-gray-300">{coinData.market_data?.total_supply ? `${coinData.market_data?.total_supply.toLocaleString()}` : "N/A"}</span></li>
                        <li>Max Supply : <span className="text-gray-300">{coinData.market_data?.max_supply ? `${coinData.market_data?.max_supply.toLocaleString()}` : "N/A"}</span></li>
                    </ul>

                    <p className="pt-5 text-gray-300 text-sm">Last Updated on ~ {coinData.last_updated &&
                        new Date(coinData.last_updated).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}</p>
                </div>
            </div>
        </>
    )
}

export default CoinPage
