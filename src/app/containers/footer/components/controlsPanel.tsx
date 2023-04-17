import { ListMusic, Maximize2, Mic2, MonitorSpeaker, Volume1 } from "lucide-react";

export default function ControlsPanel() {
    return (
        <div className="flex items-center gap-4">
            <Mic2 size={20} />
            <ListMusic size={20} />
            <MonitorSpeaker size={20} />
            <div className="flex items-center gap-2">
                <Volume1 size={20} />
                <div className="h-1 rounded-full w-24 bg-zinc-600">
                    <div className={`h-1 rounded-full w-12 bg-zinc-200`}></div>
                </div>
            </div>
            <Maximize2 size={20} />
        </div>
    )
}
