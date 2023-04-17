import Image from "next/image";
import RecommendedPlaylist from "./recommendedPlaylist";


export default function RecommendedPlaylistsGrid() {
    return (
        <>
            <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <RecommendedPlaylist artistName="Iron Maiden" albumName="Fear of the dark" />
                <RecommendedPlaylist artistName="Iron Maiden" albumName="Killers" />
                <RecommendedPlaylist artistName="Iron Maiden" albumName="No prayer for the dying" />
                <RecommendedPlaylist artistName="Iron Maiden" albumName="Seventh son of a seventh son" />
                <RecommendedPlaylist artistName="Iron Maiden" albumName="Somewhere in time" />
                <RecommendedPlaylist artistName="Iron Maiden" albumName="Powerslave" />
            </div>
        </>
    )
}
