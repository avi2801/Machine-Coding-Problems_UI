import React, { useState } from "react";
import styles from "./TodoList.module.css";

const TodoList = () => {
	const {
		main_container,
		input_container,
		button_class,
		todoList_style_container,
	} = styles;
	const [todoList, setTodoList] = useState([]);
	const [inputTask, setInputTask] = useState("");

	// handle input
	const handleInputTask = (e) => {
		setInputTask(e.target.value);
	};

	const handleAddTask = () => {
		const newObj = {
			id: new Date().getTime(),
			value: inputTask,
		};
		inputTask.length > 0 && setTodoList((prev) => [...prev, newObj]);
		setInputTask("");
	};

	const handleTaskDone = (id) => {
		const newList = todoList.filter((list) => list.id !== id);
		setTodoList(newList);
	};

	const handleEdit = (id) => {
		const selectedList = todoList.filter((list) => list.id === id);
		handleTaskDone(id);
		setInputTask(selectedList[0].value);
	};

	return (
		<div className={main_container}>
			<div className={input_container}>
				<label>
					Enter the task {"  "}
					<input
						type="text"
						onChange={(e) => handleInputTask(e)}
						value={inputTask}
					/>
				</label>
			</div>
			<div className={button_class}>
				<button onClick={handleAddTask}>Add Task</button>
			</div>
			<div>
				{todoList?.map((list, index) => (
					<div className={todoList_style_container}>
						<span key={list.id}>{list.value}</span>
						<button onClick={() => handleTaskDone(list.id)}>Done</button>
						<button onClick={() => handleEdit(list.id)}>Edit</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default TodoList;
