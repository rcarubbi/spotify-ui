import PlaylistItem from "./playlistItem";

export default function Playlists({ playListNames }: { playListNames: string[] }) {
    return (
        <nav className="mt-6 pt-6 border-t border-zinc-700 flex flex-col gap-2">
            {playListNames.map(playListName =>
                <PlaylistItem key={playListName}>{playListName}</PlaylistItem>
            )}
        </nav>
    )
}
