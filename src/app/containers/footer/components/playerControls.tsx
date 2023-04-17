import { Play, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react";

export default function PlayerControls() {
    return (
        <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-zinc-200 text-black ml-auto">
                <Play />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
        </div>
    )
}
