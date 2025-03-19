import React, { useEffect, useRef, useState } from "react";
import styles from "./Otp.module.css";

const Otp = ({ noOfOtpRequired = 4 }) => {
	const { main_otp_container, input__container } = styles;
	// states and refs here
	const inputRefs = useRef([]);
	const [inputFeildValue, setInputFeildValue] = useState([]);

	//useEffect first render
	useEffect(() => {
		if (inputRefs.current[0]) {
			inputRefs.current[0].focus();
		}
	}, []);

	// onchange handler for otp feilds
	const onInputChangeHandler = (e, index) => {
		const newInputFeild = [...inputFeildValue];
		newInputFeild[index] = e.target.value;
		setInputFeildValue(newInputFeild);
		if (index < noOfOtpRequired - 1 && inputRefs.current[index + 1]) {
			inputRefs.current[index + 1].focus();
		}
	};

	// key down
	const onKeyDownHandler = (e, index) => {
		if (
			e.key === "Backspace" &&
			index > 0 &&
			inputRefs.current[index - 1]
		) {
			inputRefs.current[index-1].focus();
		}
	};

	return (
		<div className={main_otp_container}>
			<div className={input__container}>
				{[
					...Array(noOfOtpRequired)
						.fill("")
						.map((_, index) => {
							return (
								<input
									type="text"
									key={index}
									ref={(input) => (inputRefs.current[index] = input)}
									onChange={(e) => onInputChangeHandler(e, index)}
									onKeyDown={(e) => onKeyDownHandler(e, index)}
									maxLength={1}
								/>
							);
						}),
				]}
			</div>
		</div>
	);
};

export default Otp;
