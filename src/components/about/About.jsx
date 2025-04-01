import styles from './About.module.css';

const About = () => {
	return (
		<div className={styles.about_container}>
			<div className={styles.about_content}>
				{/* Add circular image here */}
				<div className={styles.profile_picture}>
					<img src="/avinash.JPG" alt="Avinash" />
				</div>
				<h2>About Me</h2>
				<p>
					Hey there! I'm <strong>Avinash</strong>, a front-end engineer with{" "}
					<strong>2.5 years of experience</strong> crafting seamless web
					experiences using <strong>ReactJS, Next.js, TypeScript</strong>, and{" "}
					<strong>JavaScript</strong>. I focus on building **scalable and
					optimized UIs** to ensure smooth interactions.
				</p>

				<h3>What I Bring to the Table</h3>
				<ul>
					<li>🔥 Expertise in React, Next.js, JavaScript, HTML, and CSS</li>
					<li>🚀 Performance optimization & clean code</li>
					<li>🔗 Experience with dynamic form handling & API integrations</li>
					<li>💡 Passion for solving complex front-end challenges</li>
				</ul>

				<h3>Beyond Code</h3>
				<p>
					When I’m not coding, you’ll find me <strong>reading fiction</strong>,
					watching <strong>Netflix</strong>, or hitting the <strong>gym</strong>
					as part of my daily routine. I also enjoy sharpening my skills with{" "}
					<strong>DSA problems</strong> and exploring backend development with{" "}
					<strong>Node.js</strong>.
				</p>
			</div>
		</div>
	);
};

export default About;
