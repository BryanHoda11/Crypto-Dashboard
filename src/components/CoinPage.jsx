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
            <div className="wrapper flex items-center justify-center gap-5 w-full text-white p-6 mx-auto">
                {coinData.image && (
                    <img src={coinData.image?.large} alt={coinData.name} className="w-[30%] h-auto mb-6" />
                )}

                <div className="info text-white p-6 w-[70%] h-auto mx-auto">
                    <h1 className="text-3xl font-bold mb-2">{coinData.name}</h1>
                    <div className="text-gray-400 uppercase mb-4">{coinData.symbol}</div>

                    <span className="font-semibold text-yellow-400">
                        Market Rank : #{coinData.market_cap_rank || "N/A"}
                    </span>

                    <div className="my-4">
                        <span className="font-semibold text-gray-300 text-">Description:
                            {coinData.description && (
                                <p className="mt-1 w-[80%]"
                                    dangerouslySetInnerHTML={{
                                        __html: coinData.description.en?.split('. ')[0] + '.',
                                    }} />
                            )}
                        </span>

                        <ul className="flex flex-col text-sm gap-5 my-4 mt-5">
                            <li>Current Price : <span>{coinData.market_data?.current_price?.usd
                                ? `$${coinData.market_data.current_price.usd.toLocaleString()}`
                                : "N/A"}</span></li>

                            <li>Highest Value (last 24h) : <span>{coinData.market_data?.high_24h?.usd
                                ? `$${coinData.market_data.high_24h.usd.toLocaleString()}`
                                : "N/A"}</span></li>

                            <li>Lowest Value (last 24h) : <span>{coinData.market_data?.low_24h?.usd
                                ? `$${coinData.market_data.low_24h.usd.toLocaleString()}`
                                : "N/A"}</span></li>

                            <li>Total Supply : <span>{coinData.market_data?.total_supply ? `${coinData.market_data?.total_supply.toLocaleString()}` : "N/A"}</span></li>
                            <li>Max Supply : <span>{coinData.market_data?.max_supply ? `${coinData.market_data?.max_supply.toLocaleString()}` : "N/A"}</span></li>
                        </ul>

                        <p className="pt-5 text-gray-300 text-sm">Last Updated on - {coinData.last_updated?.split("T")[0] || "N/A"}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoinPage
