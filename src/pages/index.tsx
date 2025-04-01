import TodoList from '../components/todoList/TodoList'


export default function Home() {
	// const { ToastComponent, triggerToast } = useToast("bottom-right");
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems:'center'
			}}
		>
			{/* {ToastComponent}
			<button
				onClick={() =>
					triggerToast({ type: "info", message: "Error Found", delay: 3000 })
				}
			>
				Trigger
			</button> */}
			{/* <PollWidgetMainComponent/> */}
			<TodoList/>
		</div>
	);
}
