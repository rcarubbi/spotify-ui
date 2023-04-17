import Image from "next/image";

export default function CurrentSong({ albumName, songName, artistName }: { albumName: string, songName: string, artistName: string }) {
    return (
        <div className="flex items-center gap-3">
            <Image priority={true} className="w-15 h-15" src={`/images/${artistName} - ${albumName}.jpg`} width={56} height={56} alt={songName} />
            <div className="flex flex-col">
                <strong className="font-normal">{songName}</strong>
                <span className="text-xs text-zinc-400">{artistName}</span>
            </div>
        </div>
    )
}
