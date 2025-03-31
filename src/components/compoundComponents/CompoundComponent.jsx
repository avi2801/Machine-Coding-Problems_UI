import React from "react";
import styles from "./CompoundComponents.module.css";

const CompoundComponent = ({ post }) => {
	const { title, description, author, image } = post;

	const { main_container, image_block, content_block, button_block } = styles;
	return (
		<div className={main_container}>
			<img className={image_block} src={image} alt="image" />
			<div className={content_block}>
				<h1>{title}</h1>
				<p>{description}</p>
				<h4>{author}</h4>
				<div className={button_block}>
					<button>See Comment</button>
					<button>More</button>
				</div>
			</div>
		</div>
	);
};


export default CompoundComponent;
