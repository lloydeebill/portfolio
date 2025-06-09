import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorksSection from "./components/WorksSection";
function App() {
	return (
		<>
			<div className="px-4 lg:px-20">
				<Navbar></Navbar>
				<Hero></Hero>
				<WorksSection></WorksSection>
			</div>
		</>
	);
}

export default App;
