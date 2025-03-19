import React, { useState } from "react";
import Toast from "../components/toastComponent/ToastComponent";
import styles from '../components/toastComponent/ToastComponent.module.css'

const useToast = (position = "top-right") => {
	const [toastProperties, setToastProperties] = useState(null);
	let timer;

	const triggerToast = (toastProps) => {
		clearTimeout(timer);
		setToastProperties(toastProps);
		timer = setTimeout(() => {
			setToastProperties(null);
		}, toastProps.delay);
	};

	const onClose = () => {
		clearTimeout(timer)
		setToastProperties(null)
	}

	const ToastComponent = toastProperties ? (
		<div className={styles[position]}>
			<Toast {...toastProperties} onClose={onClose} />
		</div>
	) : null;

	return { ToastComponent, triggerToast };
};

export default useToast;
