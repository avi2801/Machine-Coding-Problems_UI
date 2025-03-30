import Game from '@/components/game/Game';

export default function Home() {
	// const { ToastComponent, triggerToast } = useToast("bottom-right");
	return (
		<div>
			{/* {ToastComponent}
			<button
				onClick={() =>
					triggerToast({ type: "info", message: "Error Found", delay: 3000 })
				}
			>
				Trigger
			</button> */}
			<Game />
		</div>
	);
}
