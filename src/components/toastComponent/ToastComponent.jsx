import React from "react";
import styles from "./ToastComponent.module.css";
import {
	AiOutlineCheckCircle,
	AiOutlineInfoCircle,
	AiOutlineWarning,
	AiOutlineCloseCircle,
} from "react-icons/ai";

const iconStyles = { margingRight: "10px" };

const icons = {
	success: <AiOutlineCheckCircle style={iconStyles} />,
	info: <AiOutlineInfoCircle style={iconStyles} />,
	warning: <AiOutlineWarning style={iconStyles} />,
	error: <AiOutlineCloseCircle style={iconStyles} />,
};

const ToastComponent = ({ type = "success", message, onClose = () => {} }) => {
	return (
		<div className={`${styles.main_container} ${styles[type]}`}>
			{/* type */}
			{icons[type]}
			{/* message */}
			{message}
			{/* onClose */}
			<AiOutlineCloseCircle
				onClick={() => onClose()}
				className={styles.close_button}
			/>
		</div>
	);
};

export default ToastComponent;
