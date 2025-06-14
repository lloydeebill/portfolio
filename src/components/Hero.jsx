import { useEffect, useState, useRef } from "react";
import {
	useTransform,
	motion,
	AnimatePresence,
	useScroll,
	useSpring,
} from "framer-motion";

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
			className="relative w-full "
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit={{ opacity: 0 }}
		>
			<div className="relative h-[40vh] lg:h-[60vh] w-full flex flex-col items-center justify-center gap-8 xl:block">
				<motion.span
					variants={itemVariants}
					className="
      text-5xl md:text-7xl lg:text-9xl font-fira-code
      xl:absolute xl:top-[10%] xl:left-[10%]
    "
				>
					Developer
				</motion.span>

				<motion.span
					variants={itemVariants}
					className="
      text-4xl md:text-7xl lg:text-8xl font-anton
      xl:absolute xl:top-[40%] xl:left-[65%]
    "
				>
					Engineer
				</motion.span>

				<motion.span
					variants={itemVariants}
					className="
      text-4xl md:text-7xl lg:text-8xl font-dm-serif
      xl:absolute xl:top-[70%] xl:left-[7%]
    "
				>
					Virtual Assistant
				</motion.span>

				<motion.span
					variants={itemVariants}
					className="
      text-6xl md:text-7xl lg:text-9xl font-alex-brush
      xl:absolute xl:top-[100%] xl:left-[60%]
    "
				>
					Designer
				</motion.span>
			</div>
		</motion.div>
	);
}

export default function Hero() {
	const heroRef = useRef(null);

	const [sequenceIndex, setSequenceIndex] = useState(0);

	const scroll = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	});

	const rawScale = useTransform(scroll.scrollYProgress, [0, 0.2], [1, 1.15]);
	const rawOpacity = useTransform(scroll.scrollYProgress, [0, 0.2], [1, 0]);

	const scale = useSpring(rawScale, { stiffness: 100, damping: 20 });
	const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 20 });

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
			<div ref={heroRef} className="">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentSequence.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 0.8 } }}
						exit={{ opacity: 0, transition: { duration: 0.8 } }}
						style={sequenceIndex === 2 ? { scale, opacity } : {}}
						className="h-[40vh] lg:h-[60vh] w-full flex items-center justify-center text-2xl lg:text-4xl xl:text-7xl"
					>
						{currentSequence.text ? (
							<span
								className={`text-center xl:whitespace-nowrap ${currentSequence.className}`}
							>
								{currentSequence.text}
							</span>
						) : (
							currentSequence.component
						)}
					</motion.div>
				</AnimatePresence>
			</div>
		</>
	);
}
