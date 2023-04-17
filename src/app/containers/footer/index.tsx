import ControlsPanel from "./components/controlsPanel";
import CurrentSong from "./components/currentSong";
import Player from "./components/player";

export default function Footer() {
    return (

        <footer className="bg-zinc-950 border-t border-zinc-900 px-6 py-4 flex items-center justify-between">
            <CurrentSong albumName="Fear of the dark" artistName="Iron Maiden" songName="Wasting Love" />
            <Player />
            <ControlsPanel />
        </footer>

    )
}
