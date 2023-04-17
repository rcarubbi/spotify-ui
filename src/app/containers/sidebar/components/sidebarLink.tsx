export default function SidebarLink({ children }: {
    children: React.ReactNode
}) {
    return (
        <a className="flex items-center gap-2 text-xs font-semibold text-zinc-100" href="">
            {children}
        </a>
    )
}
