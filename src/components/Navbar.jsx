import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<nav className="relative flex items-center h-24 w-full md:h-32 md:text-xl xl:text-2xl font-michroma justify-between">
				<Link
					to="/Connect"
					className="border-b-2  border-b-yellow-300 transition-colors duration-300 ease-in lg:px-4 py-2  md:px-8 md:py-3 md:rounded-md  md:bg-yellow-300 hover:bg-yellow-400"
				>
					CONNECT
				</Link>
				{/* DESKTOP MENU */}
				<div className="hidden md:flex gap-5 xl:gap-20 absolute left-1/2 -translate-x-1/2 pl-18">
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

				<div
					className="md:hidden w-14 h-10 flex flex-col justify-between items-center cursor-pointer bg-yellow-300 hover:bg-yellow-400 rounded-md p-2"
					onClick={toggleMenu}
				>
					<span className="block h-1 w-6 bg-black"></span>
					<span className="block h-1 w-6 bg-black"></span>
					<span className="block h-1 w-6 bg-black"></span>
				</div>
			</nav>

			{/* menu open for phones*/}
			{menuOpen && (
				<div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 z-50 font-michroma">
					<Link
						className=" hover:text-yellow-600 transition-colors duration-300 ease-in"
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
			)}
		</>
	);
}
