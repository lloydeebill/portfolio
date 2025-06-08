import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroSequence = [
	{
		id: 0,
		text: "The one you're looking for is",
		className: "text-black font-michroma",
	},
	{
		id: 1,
		text: "me.",
		className: "text-yellow-500 font-michroma",
	},
	{ id: 3, component: <SkillsGrid /> },
];

function SkillsGrid() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.5 },
		},
	};

	return (
		<motion.div
			className="relative w-full h-full"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit={{ opacity: 0 }}
		>
			<motion.span
				variants={itemVariants}
				className="absolute top-[15%]  lg:top-[15%]  left-[10%] text-5xl md:text-9xl font-fira-code"
			>
				Developer
			</motion.span>
			<motion.span
				variants={itemVariants}
				className="absolute top-[40%] lg:top-[40%] left-[30%] lg:left-[60%] text-4xl md:text-6xl font-anton"
			>
				Engineer
			</motion.span>
			<motion.span
				variants={itemVariants}
				className="absolute bottom-[28%] lg:bottom-[28%] left-[10%] lg:left-[20%] text-4xl md:text-7xl font-dm-serif"
			>
				Virtual Assistant
			</motion.span>
			<motion.span
				variants={itemVariants}
				className="absolute bottom-[0%]  right-[10%] text-7xl md:text-9xl font-alex-brush"
			>
				Designer
			</motion.span>
		</motion.div>
	);
}

export default function Hero() {
	const [sequenceIndex, setSequenceIndex] = useState(0);

	useEffect(() => {
		const timer1 = setTimeout(() => {
			setSequenceIndex(1);
		}, 2000);

		const timer2 = setTimeout(() => {
			setSequenceIndex(2);
		}, 4000);

		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	}, []);

	const currentSequence = heroSequence[sequenceIndex];

	return (
		<>
			<div className="flex justify-center items-center h-[70vh]">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentSequence.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 0.8 } }}
						exit={{ opacity: 0, transition: { duration: 0.8 } }}
						className="w-full h-full"
					>
						{currentSequence.text ? (
							<div className="relative w-full h-full">
								<span
									className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl  xl:text-5xl text-center lg:whitespace-nowrap w-full px-5 ${currentSequence.className}`}
								>
									{currentSequence.text}
								</span>
							</div>
						) : (
							currentSequence.component
						)}
					</motion.div>
				</AnimatePresence>
			</div>
		</>
	);
}
