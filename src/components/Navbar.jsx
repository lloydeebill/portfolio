import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<nav className="relative flex items-center h-32 px-4 sm:text-md lg:text-2xl nav-buttons gap-2">
				<Link
					to="/Connect"
					className="border-b-2  border-b-yellow-300 transition-colors duration-300 ease-in px-4 py-2 text-sm lg:px-8 lg:py-3 lg:rounded-lg lg:text-lg lg:bg-yellow-300 hover:bg-yellow-400"
				>
					CONNECT
				</Link>

				<div className="hidden lg:flex gap-12 absolute left-1/2 transform -translate-x-1/2">
					<Link
						className="hover:text-yellow-600 transition-colors duration-300 ease-in"
						to="/AboutMe"
					>
						ABOUT ME
					</Link>
					<Link
						className="hover:text-yellow-600 transition-colors duration-300 ease-in"
						to="/Works"
					>
						WORKS
					</Link>
				</div>
				{/* hamburger menu*/}
				<div
					className="lg:hidden w-10 h-10	 flex flex-col justify-between items-center cursor-pointer bg-yellow-300 rounded-md p-2"
					onClick={toggleMenu}
				>
					<span className="block h-1 w-6 bg-black"></span>
					<span className="block h-1 w-6 bg-black"></span>
					<span className="block h-1 w-6 bg-black"></span>
				</div>
			</nav>
		</>
	);
}
