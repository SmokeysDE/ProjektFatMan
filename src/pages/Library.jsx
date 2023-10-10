import React, {useContext} from "react";
import {NumberContext} from "../provider/NumProvider";
import Button from "@mui/material/Button"
import Box from "@mui/material/Box";
import ConstructorCard from "../content/ConstructorCard";
import Shelf from "../content/Content";
import Typography from "@mui/material/Typography";
export default function Library() {
    const {incrementNumber, number} = useContext(NumberContext);
    const handleIncrement = () => {
        incrementNumber();
    }
    return (
        <Box className={'grid grid-cols-1 grid-rows-5 h-calc[1em] w-full gap-4'}>
            <Box className={'flex flex-row row start-1 row-end-2 h-fit w-fit'}>
                <Shelf />
                <ConstructorCard/>
            </Box>
            <Box className={'row-start-5 row-end-5 h-full w-full'}>
                <Box>
                    <p>Du hast mich  {number}  mal geklickt</p>
                    <Button className={'mb-2'} onClick={handleIncrement} variant={'contained'}>Click me!</Button>
                </Box>
            </Box>
        </Box>
    );
}