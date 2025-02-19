import React, { useState } from "react";

const TodoList = () => {
	const [todos, setTodos] = useState<{ value: string; done: false }[]>([]);
	const [taskFeildValue, setTakFeildValue] = useState<string>("");
	const onTaskFeildChange = (e: any) => {
		setTakFeildValue(e.target.value);
	};
	const onAddItemsClick = () => {
		if (taskFeildValue.length) {
			setTodos((todo) => [...todo, { value: taskFeildValue, done: false }]);
			setTakFeildValue('')
		}

	};

	const onDoneClick = (taskValue: string) => {
		const newTodos = todos.filter((todo) => todo.value !== taskValue)
		setTodos(newTodos)
	}
	return (
		<>
			<div style={{ margin: "40px" }}>
				<div>
					<label style={{ marginRight: "20px" }} htmlFor="input">
						Enter yout task:
					</label>
					<input
						value={taskFeildValue}
						onChange={onTaskFeildChange}
						placeholder={"Enter your task here"}
					/>
					<button style={{ marginLeft: "20px" }} onClick={onAddItemsClick}>
						+
					</button>
				</div>
				<ul>
					{todos.map((todo, index) => {
						return (
							<li style={{display:'flex', gap:'20px', height:'20px', alignItems:'center', marginBottom:'20px'}}>
								<h4>{todo.value}</h4>
								<button onClick={()=>onDoneClick(todo.value)}>-</button>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};
export default TodoList;
