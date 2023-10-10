// Note: AppBar with responsive menu
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, grey } from '@mui/material/colors';


const theme = createTheme({
    palette: {
        primary: lime,
        secondary: grey,
    },
});


const card = (
    <React.Fragment>
        <CardContent className={'bg-white flex flex-col relative'}>
            <ThemeProvider theme={theme} >
                <Typography color={'secondary'} align={'center'} component="div" variant={'caption'}>
                    Add a new shelf
                </Typography>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <Button color={'secondary'} variant="outlined" className={'h-fit w-fit'} >
                    <AddIcon sx={{height: '50%', width: '50%'}}/>
                </Button>
            </ThemeProvider>
        </CardContent>
    </React.Fragment>
);

export default function ConstructorCard() {
    return (
        <Box className={'backdrop-blur-xl ml-5 mt-12 bg-graygpt h-fit w-fit'}>
            <Card variant="outlined" >{card}</Card>
        </Box>
    );
}