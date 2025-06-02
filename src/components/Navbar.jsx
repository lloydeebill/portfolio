import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<div className="relative flex items-center h-32 px-4 sm:text-md lg:text-2xl nav-buttons">
				<Link
					to="/Connect"
					className="z-10 bg-yellow-300 hover:bg-yellow-400 transition-colors duration-300 ease-in px-8 py-3 rounded-lg"
				>
					CONNECT
				</Link>

				<div className="absolute left-1/2 transform -translate-x-1/2 flex gap-12">
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
			</div>
		</>
	);
}
