import { Play } from "lucide-react";
import Image from "next/image";

export default function MadeForYouItem({ artistNames, playListTitle, playlistImageName }: { artistNames: string, playListTitle: string, playlistImageName: string }) {
    return (
        <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2 group">
            <div className="relative">
                <Image priority={true} className="w-full" src={`/images/${playlistImageName}.jpg`} width={104} height={104} alt={playListTitle} />
                <button className="absolute bottom-2 -right-6 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <Play />
                </button>
            </div>
            <strong className="font-semibold">{playListTitle}</strong>
            <span className="text-sm text-zinc-500">{artistNames}</span>
        </a>
    )
}
