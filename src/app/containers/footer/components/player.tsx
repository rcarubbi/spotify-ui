import PlayerControls from "./playerControls";
import ProgressBar from "./progressBar";

export default function Player() {
    return (
        <div className="flex flex-col items-center gap-2">
            <PlayerControls />
            <ProgressBar timeElapsed="1:32" totalTime="2:14" />
        </div>
    )
}
