import MadeForYou from "./components/madeForYou";
import NavigationButtonsPanel from "./components/navigationButtonsPanel";
import RecommendedPlaylistsGrid from "./components/recommendedPlaylistsGrid";

export default function Main() {
    return (
        <main className="flex-1 p-6 bg-zinc-800 m-2 rounded-lg">
            <NavigationButtonsPanel />
            <RecommendedPlaylistsGrid />
            <MadeForYou userName="Raphael Carubbi Neto" />
        </main>
    )
}
