// src/components/WorksSection.jsx

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Our Square component is simple and reusable, no changes needed here.
function Square({ motionStyle, className }) {
	return (
		<motion.div
			style={motionStyle}
			className={`absolute aspect-square border-2 ${className}`}
		/>
	);
}

export default function WorksSection() {
	// 1. We still need to "name tag" our main section to track its scroll position.
	const targetRef = useRef(null);

	// 2. We track the scroll progress of the section. `scrollYProgress` will be a
	//    number that goes from 0 (start) to 1 (end) as we scroll.
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	// 3. We create our animation "translators" FOR ONLY THE ONE SQUARE.
	//    Let's make it move from left to right and rotate.
	const x = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	const rotate = useTransform(scrollYProgress, [0, 1], [0, -45]);

	return (
		// We attach our "name tag" here
		<section ref={targetRef} className="relative h-[200vh]">
			<div className="sticky top-0 flex h-screen items-center overflow-hidden">
				{/* Left Side: Content */}
				<div className="relative z-10 w-1/2 px-8 text-left">
					<h2 className="text-7xl font-bold">Works</h2>
					<p className="text-lg">what I've been doing so far with my life?</p>
				</div>

				{/* Right Side: Our ONE Animated Square */}
				<div className="relative z-0 w-1/2 h-full">
					{/* 4. We apply our animation values directly to the style prop. */}
					<Square
						motionStyle={{ x, rotate }} // The 'x' and 'rotate' values will be updated on scroll
						className="border-red-500 w-1/3 top-[50%] right-[25%]"
					/>
				</div>
			</div>
		</section>
	);
}
