import { useState, useEffect } from "react"
import {
    CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement, BarElement, ArcElement, Tooltip,
    Legend
} from 'chart.js';

Chart.register([
    CategoryScale,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
]);
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

import { Link } from "react-router-dom";

// Fetching the data from API
const Charts = () => {
    const [crypto, setCrypto] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const CryptoData = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&x_cg_demo_api_key=CG-7Gw9C3o7WuyNipQpSgjUwtso")
            const data = await CryptoData.json()

            setCrypto(data)
        }

        fetchData()
    }, [])

    const totalSupply = crypto.reduce((sum, coin) => {
        return sum + (coin.total_supply || 0);
    }, 0);

    const top5Crypto = [...crypto]
        .sort((a, b) => b.current_price - a.current_price)
        .slice(0, 5);

    // Bar Data
    const barData = {
        labels: top5Crypto.map((coin) => coin.name),
        datasets: [
            {
                label: "Current Price (USD)",
                data: crypto.map((coin) => coin.current_price),
                backgroundColor: "#6886bf",
                borderRadius: 6,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: "#ffffff",
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#ffffff",
                },
            },
            y: {
                ticks: {
                    color: "#ffffff",
                },
            },
        },
    };

    //Doughnut Data
    const doughnutData = {
        labels: crypto.slice(0, 6).map((coin) => coin.name),
        datasets: [
            {
                label: 'Market Cap Share',
                data: crypto.slice(0, 6).map((coin) => coin.market_cap),
                backgroundColor: [
                    '#FF4C61',
                    '#4FC3F7',
                    '#FFD600',
                    '#00E5A0',
                    '#B388FF',
                    '#FF9100',
                ],
                borderColor: '#1e1e1e',
                borderWidth: 0,
            },
        ],
    };

    const doughnutOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    };

    const Cards = [

        {
            id: 1,
            info: <> <h3 className="text-2xl sm:text-4xl opacity-75 font-bold">Total Price</h3>
                <p className="text-lg sm:text-xl opacity-45 font-semibold">{totalSupply.toLocaleString()} $</p></>
        },
        {
            id: 2,
            info: <> <h3 className="text-2xl sm:text-4xl opacity-75 font-bold">Top Trending</h3>
                <p className="text-lg sm:text-xl opacity-45 font-semibold">#1 {crypto[0]?.name} </p></>
        },
        {
            id: 3,
            info: <> <h3 className="text-2xl sm:text-4xl opacity-75 font-bold">Coins Tracked</h3>
                <p className="text-lg sm:text-xl opacity-45 font-semibold">{crypto.length}</p></>
        },

    ]

    return (
        <>
            <div className="charts-container w-full mx-auto my-3 xl:overflow-hidden flex flex-col xl:flex-row xl:items-start items-center gap-3 text-white">

                <div className="left flex flex-col gap-4">
                    <div className="cards flex max-lg:flex-wrap items-center max-lg:justify-center gap-3">
                        {Cards.map((c) => (
                            <div key={c.id} className="card px-3 py-4 flex flex-col items-center justify-center gap-4 min-w-[300px] lg:min-w-[350px] h-auto sm:h-[200px] bg-[#0d1b2a] shadow-xl rounded-lg">{c.info}</div>
                        ))}
                    </div>

                    <div className="charts flex flex-col lg:flex-row gap-3 items-center sm:justify-center sm:mx-auto">
                        <div className="xl:min-w-[530px] h-auto sm:h-[400px] px-3 py-4 bg-[#0d1b2a] shadow-xl rounded-lg">
                            <div className="w-full h-auto sm:h-[700px]">
                                <Bar data={barData} options={barOptions} />
                            </div>
                        </div>
                        <div className="xl:min-w-[530px] h-[400px]  px-3 py-4 bg-[#0d1b2a] shadow-xl rounded-lg">
                            <div className="w-fit h-auto sm:h-[350px] mx-auto">
                                <Doughnut data={doughnutData} options={doughnutOptions} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right flex flex-col gap-4">
                    <div className="min-w-[300px] max-sm:px-4 sm:min-w-[400px] h-[550px] mx-auto overflow-y-scroll px-3 py-4 bg-[#0d1b2a] shadow-xl rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Top Cryptos</h2>

                        <ul className="flex flex-col">
                            {crypto.map((coin) => (
                                <li key={coin.id} className="flex items-center max-sm:w-full max-sm:justify-between cursor-pointer gap-3 hover:bg-[#0a1722] transition-all duration-300 rounded-lg py-5 px-3 border-b border-[#1b263b]">
                                    <img src={coin.image} alt={coin.name} className="w-6 h-6 animate-pulse" />
                                    <div>
                                        <Link to={`/coin/${coin.id}`} className="font-medium text-lg hover:underline">{coin.name}</Link>
                                        <p className="text-sm max-sm:hidden text-gray-400 uppercase">{coin.symbol}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Charts
