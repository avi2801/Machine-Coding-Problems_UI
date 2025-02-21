import Accordian from '@/components/Accordian';
import accordionData from '../data/accordianData'

export default function Home() {
	return (
		<>
			<Accordian accordianData={accordionData} />
		</>
	);
}
