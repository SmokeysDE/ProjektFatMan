import {useContext} from "react";
import * as React from "react";
import {NumberContext} from "../provider/NumProvider";
import {Badge, ListItemButton} from "@mui/material";
import {styled} from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import MailRoundedIcon  from '@mui/icons-material/MailRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";

export default function SidebarVisible( {setSection} ) {
    const {resetInbox, inboxNumber} = useContext(NumberContext);
    const navigate = useNavigate();

    const handleLoadLibrary = () =>{
        setSection('library');
    };
    const handleLoadSettings = () =>{
        setSection('settings');
    };
    const handleLoadProfile = () =>{
        setSection('profile');
    }
    const handleLoadInbox = () =>{
        resetInbox();
        setSection('inbox');
    }
    const handleLoadFavourite = () => {
        setSection('favourite');
    }
    const Theme = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const handleLogout = () => {
        // Hier wird der JWT-Token aus dem Local Storage entfernt
        localStorage.removeItem('jwtToken');
        // Redirect zur Startseite
        navigate('/');
    }
    return (
        <Theme>
            <Box sx={{display: {xs: 'none', md: 'flex'}, width: '15em', height: '100vh', mr: '5em', borderRight: '2em solid', borderColor: '#000'}}>
                <List dense={true}>
                    <ListItemButton onClick={handleLoadLibrary} >
                        <ListItem>
                            <ListItemIcon>
                                <AutoStoriesRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Library" />
                        </ListItem>
                    </ListItemButton>
                    <ListItemButton onClick={handleLoadFavourite}>
                        <ListItem>
                            <ListItemIcon>
                                <StarRateRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Favourites" />
                        </ListItem>
                    </ListItemButton>
                    <ListItemButton onClick={handleLoadInbox}>
                        <ListItem>
                            <Badge color={'error'} badgeContent={inboxNumber} anchorOrigin={{vertical: 'top', horizontal: 'left'}} >
                                <ListItemIcon>
                                  <MailRoundedIcon />
                                </ListItemIcon>
                            </Badge>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                    </ListItemButton>
                    <ListItemButton onClick={handleLoadProfile}>
                        <ListItem>
                            <ListItemIcon>
                                <AccountCircleRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItem>
                    </ListItemButton>
                    <ListItemButton onClick={handleLoadSettings}>
                        <ListItem>
                            <ListItemIcon>
                                <SettingsRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItem>
                    </ListItemButton>
                    <ListItemButton onClick={handleLogout}>
                        <ListItem>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </ListItemButton>
                </List>
            </Box>
        </Theme>
    );
}
