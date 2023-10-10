import Box from '@mui/material/Box';
import Library from "../pages/Library";
import ProfilePage from "../pages/Profile";
import SettingsPage from "../pages/Settings";
import InboxPage from "../pages/InboxPage";
import FavouritesPage from "../pages/FavouritesPage";

export default function MainPane({ activeSection }) {

    return(
        <Box className={'flex wrap ml-7 bg-white h-[calc(100vh-10rem)] w-full'}>
            <Box className={'flex flex-row gap-4'}>
                {activeSection === 'library' && <Library/>}
                {activeSection === 'settings' && <SettingsPage/>}
                {activeSection === 'profile' && <ProfilePage/>}
                {activeSection === 'inbox' && <InboxPage/>}
                {activeSection === 'favourite' && <FavouritesPage/>}
            </Box>
        </Box>
    );
}