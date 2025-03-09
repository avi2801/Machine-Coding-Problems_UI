import React,{useState} from "react";
import styles from "./accordian.module.css";

const Accordian = ({ title, description }) => {
	const { accordian_container, main_container, cta_container } = styles;
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordian = () => {
		setIsOpen((prev) => !prev);
	};
	return (
		<div className={main_container}>
			<div className={accordian_container}>
				<span>{title}</span>
				{isOpen && <p>{description}</p>}
			</div>
			<div className={cta_container}>
				<button onClick={toggleAccordian}>{isOpen ? "Close" : "Open"}</button>
			</div>
		</div>
	);
};

export default Accordian;
