import { motion } from 'framer-motion';
import styles from '../styles';
import ComputersCanvas from './canvas/Computers';

const Hero = () => {
	return (
		<section
			name="heroSection"
			className="relative w-full h-screen mx-auto"
		>
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-2xl mx-auto flex flex-row items-start gap-5`}
			>
				<div
					name="needleContainer"
					className="flex flex-col justify-center items-center mt-5"
				>
					<div
						name="circle"
						className="w-5 h-5 rounded-full bg-[#915eff]"
					/>
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div name="introContainer">
					<h1
						name="introText"
						className={`${styles.heroHeadText} text-white sm:block`}
					>
						Hi, I'm&nbsp;
						<span className="text-[#915eff]">
							Steve
						</span>
					</h1>
					<div
						className={`${styles.heroSubText}`}
					>
						I develop apps, websites, and
						video games. Check out my
						projects below!
					</div>
				</div>
			</div>
			<ComputersCanvas />
			<div
				name="fmContainer"
				className="absolute top-[40%] w-full flex justify-center"
			>
				<div className="text-center text-red-500">
					<a name="aboutLink" href="#about">
						<div
							name="fmButton"
							className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-100 flex justify-center items-start p-2
						"
						>
							<motion.div
								animate={{
									y: [
										0,
										24,
										0,
									],
								}}
								transition={{
									duration: 5,
									repeat: Infinity,
									repeatType: 'loop',
								}}
								className="w-3 h-3 rounded-full border-2 border-gray-100 mb-1"
							/>
						</div>
						Tap
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
