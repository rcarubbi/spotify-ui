import { Play } from "lucide-react";
import Image from "next/image";

export default function RecommendedPlaylist({ artistName, albumName }: { artistName: string, albumName: string }) {
    return (
        <a href="" className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group">
            <Image priority={true} className="w-26 h-26" src={`/images/${artistName} - ${albumName}.jpg`} width={104} height={104} alt={`${albumName} - album by ${artistName}`} />
            <strong>{albumName}</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
            </button>
        </a>
    )
}
