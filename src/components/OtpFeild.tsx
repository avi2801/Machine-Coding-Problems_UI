import React, { useState, useRef, useEffect, InputHTMLAttributes } from "react";
import styles from "../styles/otp.module.css";

type OtpFeildType = {
	otpFeildLength: number;
};

const OtpFeild = ({ otpFeildLength = 4 }: OtpFeildType) => {
	const { main__container, heading__style, input__container } = styles;
	const [inputFeildsValue, setInputFeildsValue] = useState([
		...Array(otpFeildLength).fill(""),
	]);
	const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
	useEffect(() => {
		if (inputRefs.current[0]) {
			inputRefs.current[0].focus();
		}
	}, []);

	//handle input change
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const inputArray = [...inputFeildsValue];
		inputArray[index] = e.target.value;
		setInputFeildsValue(inputArray);
		if (index < otpFeildLength - 1 && inputRefs.current[index + 1]) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	//
	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		if (e.key === "Backspace") {
			// Move focus to the previous input first
			if (index > 0 && !inputFeildsValue[index]) {
				inputRefs.current[index - 1]?.focus();
			}

			// Then clear the value
			const inputArray = [...inputFeildsValue];
			inputArray[index] = "";
			setInputFeildsValue(inputArray);
		}
	};


	return (
		<div className={main__container}>
			<h4 className={heading__style}>Enter your Otp</h4>
			<div className={input__container}>
				{[
					...Array(otpFeildLength)
						.fill(0)
						.map((value, index) => {
							return (
								<input
									type="text"
									key={index}
									value={inputFeildsValue[index]}
									maxLength={1}
									onChange={(e) => handleInputChange(e, index)}
									onKeyDown={(e) => handleKeyDown(e, index)}
									ref={(input) => {
										inputRefs.current[index] = input;
									}}
								/>
							);
						}),
				]}
			</div>
		</div>
	);
};

export default OtpFeild;
