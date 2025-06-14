import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorksSection from "./components/WorksSection";
import AboutMe from "./components/AboutMe";
function App() {
	return (
		<>
			<div className="flex flex-col min-h-screen px-6 lg:px-16">
				<Navbar></Navbar>
				<div className="flex flex-col min-h-screen gap-20 lg:gap-56 px-8 lg:px-20">
					<Hero></Hero>
					<WorksSection></WorksSection>
					<AboutMe></AboutMe>
				</div>
			</div>
		</>
	);
}

export default App;
