import React, { useState } from "react";

const Folder = ({ explorer }) => {
	const [expand, setExpand] = useState(false);
	const [showInput, setShowInput] = useState({
		visible: false,
		isFolder: null,
	});

	const onAdd = (e, isFolder) => {
		setExpand(true);
		setShowInput({
			visible: true,
			isFolder,
		});
	};
	return (
		<>
			{explorer.isFolder ? (
				<div style={{ paddingLeft: "20px" }}>
					<span onClick={() => setExpand(!expand)}> 📁{explorer.title}</span>
					<div style={{ margin: "20px" }}>
						<button
							onClick={(e) => onAdd(e, true)}
							style={{ marginRight: "20px" }}
						>
							{" "}
							Add Folder 📁
						</button>
						<button onClick={(e) => onAdd(e, false)}> Add File 🗄️</button>
					</div>
					{showInput.visible && (
						<input
							type="text"
							autoFocus
							placeholder={`${
								showInput.isFolder ? "Add Folder 📁" : "Add File 🗄️"
							}`}
							onBlur={() => setShowInput({ ...showInput, visible: false })}
						/>
					)}

					{expand &&
						explorer.items.map((item, index) => {
							return <Folder key={item.id} explorer={item} />;
						})}
				</div>
			) : (
				<div style={{ paddingLeft: "20px" }}>🗄️{explorer.title}</div>
			)}
		</>
	);
};

export default Folder;
