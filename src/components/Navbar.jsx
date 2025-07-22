import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="p-6 sm:my-3 flex max-sm:flex-col max-sm:gap-3 justify-between items-center text-white bg-[#0d1b2a] shadow-xl sm:rounded-lg">
                <Link to='/' className="logo text-lg sm:text-2xl font-semibold">Crypto Dashboard</Link>

                <div className="warning">
                    <p className='opacity-55 text-center max-sm:text-xs'>*All the prices and info mentioned are up to date.</p>
                </div>
            </nav>
        </>
    )
}

export default Navbar
