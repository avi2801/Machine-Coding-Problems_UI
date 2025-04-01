import ProgressBar from '../components/progressBar/ProgressBar'


export default function Home() {
	// const { ToastComponent, triggerToast } = useToast("bottom-right");
	return (
		<div

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
			<ProgressBar percentageFromProps={80} />
			<ProgressBar percentageFromProps={20} />
			<ProgressBar percentageFromProps={30} />
		</div>
	);
}
