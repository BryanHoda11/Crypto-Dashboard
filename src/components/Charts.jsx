
const Charts = () => {
    return (
        <>
            <div className="charts-container w-full my-3 overflow-hidden flex items-start gap-3">

                <div className="left flex flex-col gap-4 items-start">
                    <div className="cards flex items-center gap-3">
                        <div className="card min-w-[350px] h-[200px] bg-[#150134] shadow-xl rounded-lg"></div>
                        <div className="card min-w-[350px] h-[200px] bg-[#150134] shadow-xl rounded-lg"></div>
                        <div className="card min-w-[350px] h-[200px] bg-[#150134] shadow-xl rounded-lg"></div>
                    </div>

                    <div className="min-w-[300px] h-[400px] bg-[#150134] shadow-xl rounded-lg"></div>
                    {/* <div className="min-w-[300px] h-[400px] bg-[#150134] shadow-xl rounded-lg"></div> */}
                </div>

                <div className="right flex flex-col gap-4 items-start">
                    <div className="min-w-[350px] h-[600px] bg-[#150134] shadow-xl rounded-lg"></div>
                    {/* <div className="min-w-[350px] h-[300px] bg-[#150134] shadow-xl rounded-lg"></div> */}
                </div>
            </div>
        </>
    )
}

export default Charts
