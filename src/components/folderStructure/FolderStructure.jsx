import React, { useState } from "react";
import { data } from "./file.js";
import styles from "./FolderStructure.module.css";


const RenderFile = ({ fileData, addFolderClick }) => {
	const { file_container } = styles;
	const [expanded, setIsExpanded] = useState({});
	const onExpandClick = (e, name) => {
		setIsExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
	};
	return (
		<div className={file_container}>
			{fileData?.map((file, index) => {
				return (
					<>
						<div onClick={(e) => onExpandClick(e, file.name)}>
							<span onClick={() => addFolderClick(file.id)}>
								{file.isFolder && (expanded?.[file?.name] ? "-" : "+")}
							</span>
							{file.isFolder ? "📁" : "🗄️"}
							<span>{file.name}</span>
						</div>

						{file.isFolder && expanded?.[file?.name] && (
							<RenderFile fileData={file?.isChildren} />
						)}
					</>
				);
			})}
		</div>
	);
};

const FolderStructure = () => {
	const [fileData, setFileData] = useState(data);

	const addFolderClick = (fileId) => {
		const name = prompt("Enter the name of folder");
		const updateFolder = (data) => {
			return data.map((d, index) => {
				if (d.id === fileId) {
					return {
						...d,
						isChildren: [
							...d.isChildren,
							{ id: "123", name: name, isFolder: false, isChildren: [] },
						],
					};
				}
				if (d.isChildren) {
					return { ...d, isChildren: updateFolder(d.isChildren) };
				}
				return d;
			});
		};
		setFileData((prev) => updateFolder(prev));
	};
	return (
		<div>
			<span>File Structure</span>
			<RenderFile fileData={fileData} addFolderClick={addFolderClick} />
		</div>
	);
};

export default FolderStructure;
