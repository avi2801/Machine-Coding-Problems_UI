import PollWidget from "../components/pollWidget/PollWidget";

export const mainContainer = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
};

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
			<PollWidget />
		</div>
	);
}
