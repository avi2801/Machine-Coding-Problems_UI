import React, { useState, useContext } from "react";
import catergoriesData from "./checkBoxData.js";
import { CounterContext } from "@/context/CounterContext.jsx";

const NestedCheckBox = () => {
	const [items, setItems] = useState(catergoriesData);
	const counterContext = useContext(CounterContext);
	

	// Function to update checkbox state
	const handleCheckboxChange = (item, isChecked) => {
		// Function to update all descendants
		const updateChildren = (children, checked) => {
			return children?.map((child) => ({
				...child,
				checked,
				children: child.children
					? updateChildren(child.children, checked)
					: undefined,
			}));
		};

		// Function to update parent state based on children
		const updateParent = (items) => {
			return items.map((parent) => {
				if (parent.children) {
					const updatedChildren = updateParent(parent.children);
					const allChecked = updatedChildren.every(
						(child) => child.checked === true
					);
					const someChecked = updatedChildren.some((child) => child.checked);

					return {
						...parent,
						checked: allChecked ? true : someChecked ? "indeterminate" : false,
						children: updatedChildren,
					};
				}
				return parent;
			});
		};

		// Function to update an item in the hierarchy
		const updateItem = (items) => {
			return items.map((i) => {
				if (i.id === item.id) {
					return {
						...i,
						checked: isChecked,
						children: i.children
							? updateChildren(i.children, isChecked)
							: undefined,
					};
				} else if (i.children) {
					return {
						...i,
						children: updateItem(i.children),
					};
				}
				return i;
			});
		};

		let updatedItems = updateItem(items);
		updatedItems = updateParent(updatedItems);
		setItems(updatedItems);
	};

	// Recursive component to render checkboxes
	const renderCheckboxes = (items) => {
		return (
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<input
							type="checkbox"
							checked={item.checked === true}
							ref={(el) =>
								el && (el.indeterminate = item.checked === "indeterminate")
							}
							onChange={(e) => handleCheckboxChange(item, e.target.checked)}
						/>
						{item.name}
						{item.children && renderCheckboxes(item.children)}
					</li>
				))}
			</ul>
		);
	};

	return <div>{renderCheckboxes(items)}</div>;
};

export default NestedCheckBox;
