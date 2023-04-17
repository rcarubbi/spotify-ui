import { Home, Search, Library } from 'lucide-react'
import SidebarLink from './components/sidebarLink'
import WindowControls from './components/windowControls'
import Playlists from './components/playlists'

export default function Sidebar() {
    return (

        <aside className="w-72 p-6 bg-zinc-800 m-2 rounded-lg">
            <WindowControls />
            <nav className='space-y-4 mt-10'>
                <SidebarLink>
                    <Home />
                    Home
                </SidebarLink>
                <SidebarLink>
                    <Search />
                    Search
                </SidebarLink>
                <SidebarLink>
                    <Library />
                    Your Library
                </SidebarLink>
            </nav>

            <Playlists playListNames={["Rock", "Reggae", "Italianas", "Nacionais", "New Age", "Pop"]} />
        </aside>

    )
}
