import ProgressBar from "@/components/ProgressBar";

export default function Home() {
	const bars = [5, 10, 30, 65, 90, 100];
	return (
		<>
			<h2>Progress Bar</h2>
			{bars.map((bar, index) => (
				<ProgressBar percentage={bar} key={index} />
			))}
		</>
	);
}
