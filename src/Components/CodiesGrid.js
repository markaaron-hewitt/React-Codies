import react, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Button, Paper, Typography } from "@mui/material";
import { getThemeProps } from "@mui/system";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';

const buttonColourDict = {
    0:"neutralWord",
    1:"blueWord",
    2:"redWord",
    3:"bombWord",
    4:"unrevealedWord",
    5:"neutralWordFaded",
    6:"blueWordFaded",
    7:"redWordFaded",
    8:"bombWordFaded",
}

function CodiesGrid(props){
    
    const getButtonState = (index) => {
        if (props.spymaster || props.revealedStates[index]!=4 || props.gameOver || props.words[0] == "-") {
            return true;
        }
        return false;
    }

    const getButtonColour = (index) => {
        if (props.spymaster && props.revealedStates[index]==4) {
            if (props.revealedStates[index]==4) {
                return buttonColourDict[props.solution[index]+5];
            }
            else {
                return buttonColourDict[props.solution[index]];
            }
        }
        else {
            return buttonColourDict[props.revealedStates[index]];
        }
    }

    const getButtonText = (word, index) => {
        if (props.revealedStates[index]==4 || props.gameOver) {
            return (word);
            //return (word+": "+props.solution[index]);
        }
        else {
            return ('\u2714 '+word+' \u2714');
            //return ('\u2714 '+word+": "+props.solution[index]+' \u2714');
            // '\u2714'
        }
    }

    const getFontSize = (index) => {
        if (props.revealedStates[index] == 4 || props.gameOver) {
            return 25;
        }
        else {
            return 15;
        }
    }

    const getTextDecoration = (index) => {
        if (props.revealedStates[index] == 4 || props.gameOver) {
            return "none";
        }
        else {
            return "line-through";
        }
    }

    var codiesGrid = (<Grid container columns={5} spacing={2} direction="row" justifyContent="center" align="center">
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Inline+One:ital@1&family=Bungee+Inline&family=Rubik+Glitch&display=swap" rel="stylesheet" />
        </div>
        {props.words.map((word,index) =>
            <Grid item key={"button"+(index+1)} xs={1}>
                <Paper elevation={2}>
                    <ThemeProvider theme={theme}>
                            <Button 
                                style={{ height: 80 }}
                                onClick={() => props.onClick(index)}
                                fullWidth={true}
                                variant={"contained"}
                                disabled={getButtonState(index)}
                                color={getButtonColour(index)} >
                                    <Typography fontFamily={'Bungee Inline'} fontSize={getFontSize(index)} sx={{textDecoration: getTextDecoration(index),textDecorationColor:"white"}}>
                                        {getButtonText(word,index)}
                                    </Typography>
                            </Button>
                    </ThemeProvider>
                </Paper>
            </Grid>
        )}
    
    </Grid>);
    return codiesGrid;
}

export default CodiesGrid;