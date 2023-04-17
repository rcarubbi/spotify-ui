export default function PlaylistItem({ children }: { children: string }) {
    return (
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">{children}</a>
    )
}
