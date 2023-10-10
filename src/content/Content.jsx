// Note: AppCards
import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {ThemeProvider} from "@mui/material/styles";
import {createTheme} from "@mui/material/styles";
import {grey, lime} from "@mui/material/colors";
import BorderLinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box"

function Media(props) {
    const { loading = false } = props;
    const {name = ''} = props;

    const theme = createTheme({
        palette: {
            primary: lime,
            secondary: {
                main: grey[100],
            },
        },
    });

    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardHeader
                // avatar={
                //     loading ? (
                //         <Skeleton animation="wave" variant="circular" width={40} height={40} />
                //     ) : (
                //         <Avatar className={'bg-my-gray'}/>
                //     )
                // }
                action={
                    loading ? null : (
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    )
                }
                title={
                    loading ? (
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    ) : name
                }
                // subheader={
                //     loading ? (
                //         <Skeleton animation="wave" height={10} width="40%" />
                //     ) : (
                //         '5 hours ago'
                //     )
                // }
            ></CardHeader>
            {loading ? (
                <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
            ) : (
                <CardMedia className={'bg-bluegpt justify-center'}>
                    <ThemeProvider theme={theme}>
                        <Button color={'secondary'} variant="outlined" className={'h-full w-full border-graygpt'} >
                            <AddIcon  sx={{height: '50%', width: '50%'}}/>
                        </Button>
                    </ThemeProvider>
                </CardMedia>
            )}

            <CardContent>
                {loading ? (
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                ) : (
                    <Box>
                        <Typography variant="body2" color="text.secondary" component="p">
                            {
                                "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                            }
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={10} />
                    </Box>
                )}
            </CardContent>
        </Card>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};

export default function Shelf() {
    return (
        <div>
            <Media loading={false} name={'First Shelf'}/>
        </div>
    );
}

