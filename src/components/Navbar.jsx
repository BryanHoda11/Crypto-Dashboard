import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="p-6 my-3 flex justify-between items-center text-white bg-[#0d1b2a] shadow-xl rounded-lg">
                <Link to='/' className="logo text-2xl font-semibold">Crypto Dashboard</Link>

                <div className="warning">
                    <p className='opacity-55'>*All the prices and info mentioned are up to date.</p>
                </div>
            </nav>
        </>
    )
}

export default Navbar
