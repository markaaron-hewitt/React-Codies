import react, { useState } from "react";
//import { styled } from "@mui/material/styles";
import { Grid, Button, Typography, Paper, Switch, FormControlLabel } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import CodiesGrid from "../Components/CodiesGrid.js";
//import { Dimensions } from "react-native";
import theme from "../Components/theme.js";

const {WordList} = require('../Components/WordList.js');

var image = "https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg"

function randomizeWords(){
    //var words = ['Wassup','2','3','4','5','6','7','8','9','10','1:3','2:3','3:3','4:3','5:3','16','17','18','19','20','Wassup','22','23','24','25'];
    var words = ['','','','','','','','','','','','','','','','','','','','','','','','',''];
    var randomWord;
    for(let k=0; k<25; k++){
        randomWord = WordList[Math.floor(Math.random() * WordList.length)];
        while(words.indexOf(randomWord) != -1){
            randomWord = WordList[Math.floor(Math.random() * WordList.length)];
        }
        words[k] = randomWord;
    }
    return words;
}

function Home(){

    //var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight;

    const [solution, setSolution] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const [revealed, setRevealed] = useState([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]);
    const [words, setWords] = useState(['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']);
    const [endMessage, setEndMessage] = useState(["",""]);
    const [spymaster, setSpymaster] = useState(false);

    const [blueWords, setBlueWords] = useState(9);
    const [redWords, setRedWords] = useState(8);
    //var blueWords = 9;
    //var redWords = 8;
    var bombWords = 1;
    var neutralWords = 25-blueWords-redWords-bombWords;

    const randomize_solution = () =>{
        const starting_team = Math.floor(Math.random() * 2);
        var newBlueWords = 8 + starting_team;
        var newRedWords = 9 - starting_team;

        setBlueWords(newBlueWords);
        setRedWords(newRedWords);

        var solution = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var i = 0;
        for(let jBlue=0; jBlue<newBlueWords; jBlue++){ //put enough blue into the array
            solution[i] = 1;
            i++;
        }
        for(let jRed=0; jRed<newRedWords; jRed++){ //put enough red words into the array
            solution[i] = 2;
            i++;
        }
        for(let jBomb=0; jBomb<bombWords; jBomb++){ //put enough bomb words into the array
            solution[i] = 3;
            i++;
        }
        for (let i = solution.length - 1; i > 0; i--) { //shuffle the array
            const j = Math.floor(Math.random() * (i + 1));
            const temp = solution[i];
            solution[i] = solution[j];
            solution[j] = temp;
          }
        return solution;
    }

    const resetGame = () => {
        setRevealed([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]);
        setSolution(randomize_solution());
        setWords(randomizeWords());
        setEndMessage(["","secondary"]);
    }

    const endCheck = (buttonIndex, newRevealed) => {
        if (solution[buttonIndex] == 0) {
            return false;
        }
        else if (solution[buttonIndex] == 1) {
            var gameOver = false;
            var i = 0;
            var blueCount = 0;
            while(gameOver == false && i<newRevealed.length) {
                if (newRevealed[i] == 1) {
                    blueCount++;
                }
                if (blueCount == blueWords) {
                    gameOver = true;
                }
                i++;
            }
            return gameOver
        }
        else if (solution[buttonIndex] == 2) {
            var gameOver = false;
            var i = 0;
            var redCount = 0;
            while(gameOver == false && i<newRevealed.length) {
                if (newRevealed[i] == 2) {
                    redCount++;
                }
                if (redCount == redWords) {
                    gameOver = true;
                }
                i++;
            }
            return gameOver
        }
        else if (solution[buttonIndex] == 3) {
            return true;
        }
        return false;
    }

    const endGame = (buttonIndex) => {
        var newRevealed = [...revealed];
        
        newRevealed[buttonIndex] = solution[buttonIndex];
        for (let i=0; i<newRevealed.length; i++) {
            if (newRevealed[i] == 4) {
                newRevealed[i] = (solution[i] + 5);
            }
        }
        
        setRevealed(newRevealed);
        if (solution[buttonIndex] == 1) {
            setEndMessage(["Blue Wins!!","blue"]);
        }
        else if (solution[buttonIndex] == 2) {
            setEndMessage(["Red Wins!!","red"]);
        }
        else {
            setEndMessage(["Game Over","black"]);
        }
    }

    const wordButton = (buttonIndex) => {
        var newRevealed = [...revealed];
        newRevealed[buttonIndex] = solution[buttonIndex];
        setRevealed(newRevealed);
        if (endCheck(buttonIndex, newRevealed)){
            endGame(buttonIndex);
        }
    }
    
    //var words = randomizeWords();

    const consoleLog = () => {
        console.log("testing testing 123");
        //console.log(spymaster);
    }

    return (
        <Grid container paddingTop = {5} spacing = {0} alignItems="baseline" align="center" sx={{backgroundImage: "url("+image+")"}} paddingLeft={10} paddingRight={10} height={pageHeight}>
            <Grid item xs={12}>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap" rel="stylesheet"/>
                <Typography fontSize={60} fontFamily={'Rubik Glitch'} color={"#8E008E"}> MarkyMark's Codies </Typography>
            </Grid>
            <Grid item container xs={12} alignItems="center" justifyContent={"center"}>
                <Grid item xs={3}>
                    
                </Grid>
                <Grid item xs={6} height={67}>
                    <ThemeProvider theme={theme}>
                        <Typography fontSize={45} fontFamily={'Rubik Glitch'} color={endMessage[1]} sx={{verticalAlign: "center"}}> {endMessage[0]} </Typography>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={3}>
                    
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <CodiesGrid gameOver={(endMessage[0] != "")} onClick={wordButton} words={words} revealedStates={revealed} solution={solution} spymaster={spymaster}/>
            </Grid>
            <Grid item xs={3}>
                <Button sx={{ boxShadow: 3 }} onClick={resetGame} variant="contained" color="secondary">New Game</Button>
            </Grid>
            <Grid item xs={6}>
                <FormControlLabel control={<Switch color="secondary" onChange={(e,c) => setSpymaster(c)}/>}
                label={<Typography color="secondary" fontWeight={700}>Spymaster?</Typography>}
                color="secondary"
                labelPlacement="top"/>
            </Grid>
            <Grid item xs={3}>
            <Button sx={{ boxShadow: 3 }} onClick={endGame} variant="contained" color="secondary">End Game</Button>
            </Grid>
        </Grid>
    )

}

export default Home;