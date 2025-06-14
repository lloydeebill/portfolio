import { useEffect, useState, useRef } from "react";
import {
	useTransform,
	motion,
	AnimatePresence,
	useScroll,
	useSpring,
} from "framer-motion";

export default function WorksSection() {
	function Square({ size, color, top, left, right, delay }) {
		return (
			<motion.div
				initial={{ x: 0, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 1, delay }}
				className={`absolute ${top} ${left} ${right} ${color}`}
				style={{
					width: size,
					height: size,
				}}
			/>
		);
	}
	return (
		<>
			<div className="h-[100vh] relative border border-red-500 overflow-hidden">
				<h1 className="text-5xl z-10 relative text-black">Works</h1>

				<Square
					size="100px"
					color="bg-red-500"
					top="top-[20%]"
					right="right-[10%]"
					delay={0}
				/>

				<Square
					size="80px"
					color="bg-yellow-500"
					top="top-[20%]"
					right="right-[20%]"
					delay={0.3}
				/>
			</div>
		</>
	);
}
