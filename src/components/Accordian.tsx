import React, { useState } from "react";
import styles from "../styles/accordian.module.css";

type AccordionData = {
	id: number;
	title: string;
	content: string;
};

type Props = {
	accordianData: AccordionData[]; // Should be an array of objects
};

const Accordian = ({ accordianData }: Props) => {
	const { main__container, accordian__container, accordian__content, show } =
		styles;
	const [expandedId, setExpandedId] = useState<number | null>(null);

	const toggleAccordian = (id: number) => {
		setExpandedId((prev) => (prev === id ? null : id));
	};
	return (
		<div className={main__container}>
			{accordianData.map((acc, index) => {
				const isExpanded = expandedId === acc.id;
				return (
					<div
						className={accordian__container}
						key={acc.id}
						onClick={() => toggleAccordian(acc.id)}
					>
						<div>
							<h3>{acc.title}</h3>
							{isExpanded && (
								<p className={`${accordian__content} ${isExpanded && show}`}>
									{acc.content}
								</p>
							)}
						</div>
						<span style={{ transform: !isExpanded ? "rotate(180deg)" : "" }}>
							{String.fromCharCode(8593)}
						</span>
					</div>
				);
			})}
		</div>
	);
};

export default Accordian;
