import { HomeIcon, MagnifyingGlassIcon, QueueListIcon, PlusCircleIcon, HeartIcon, BookmarkIcon } from "@heroicons/react/24/outline"
import { signOut } from "next-auth/react";


function Sidebar() {
  return (
    <aside className="p-5 text-gray-500 text-sm">
        {/* top part */}
        <div className="space-y-4 mb-5">

            {/* TEMPORAIRE */}
            <button 
                className="flex items-center space-x-2 hover:text-white"
                onClick={ () => signOut() }>
                <HomeIcon className="h-5 w-5" />
                <p>Deconnexion</p>
            </button>
            {/* TEMPORAIRE */}

            <button className="flex items-center space-x-2 hover:text-white">
                <HomeIcon className="h-5 w-5" />
                <p>Accueil</p>
            </button>

            <button className="flex items-center space-x-2 hover:text-white">
                <MagnifyingGlassIcon className="h-5 w-5" />
                <p>Rechercher</p>
            </button>

            <button className="flex items-center space-x-2 hover:text-white">
                <QueueListIcon className="h-5 w-5" />
                <p>Bibliothèque</p>
            </button>

            <div className="spacer pt-1 pb-1"></div>

            <button className="flex items-center space-x-2 hover:text-white">
                <PlusCircleIcon className="h-5 w-5" />
                <p>Créer une playlist</p>
            </button>

            <button className="flex items-center space-x-2 hover:text-white">
                <HeartIcon className="h-5 w-5" />
                <p>Titres likés</p>
            </button>

            <button className="flex items-center space-x-2 hover:text-white">
                <BookmarkIcon className="h-5 w-5" />
                <p>Vos épisodes</p>
            </button>
        </div>

        <hr />
        {/* Playlist displayed here */}
        <div></div>
    </aside>
  );
}

export default Sidebar;
