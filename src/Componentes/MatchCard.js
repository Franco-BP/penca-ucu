import * as React from 'react';
import { CardActionArea, CardMedia, Card, Box, Typography, Button } from '@mui/material';
import "../services/PencaUCUservices.js";
import formatDate from '../utils/formatDate.js';

const MatchCard = ({match, userPrediction}) => {

  // Hardcoding variables
  const hardcodedMatch = {
    idPartido: 1,
    equipo1: {
      imgBandera: `brasil.png`,
      nombre: 'brasil'
    },
    equipo2: {
      imgBandera: 'argentina.png',
      nombre: 'argentina'
    },
    fecha: '2024-06-12T03:00:00.000+00:00'
  };
  
  const hardcodedPrediction = {resultadoEquipo1: 1, resultadoEquipo2: 4, idPartido: 1}

  const flagTeam1 =  require(`../assets/banderas/${hardcodedMatch.equipo1.imgBandera}`);
  const flagTeam2 = require(`../assets/banderas/${hardcodedMatch.equipo2.imgBandera}`);
  const team1 = {imgBandera: flagTeam1, nombre: 'Brasil'};
  const team2 = {imgBandera: flagTeam2, nombre: 'Argentina'};
  const matchDate = hardcodedMatch.fecha;
  const hasPrediction = userPrediction != null;

  return (
    <Card sx={{
      display: 'flex', flexDirection: 'column', width: '25rem', height: '10rem',
      justifyContent: 'space-between', border: '2px solid ',borderColor:'#1C285E', borderRadius:'2rem'}}>
      <CardActionArea sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', paddingY: '0.5rem', borderBottomRightRadius: 0, borderBottomLeftRadius: 0}}
        // onClick={() => window.open(match.link, "_blank")}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            sx={{width: '5rem', height: '5rem'}}
            component="img"
            src={team1.imgBandera} /* IMAGEN DEL EQUIPO */
            alt={team1.nombre}
          />
          <Typography sx={{marginY: '0.5rem'}}>
            {team1.nombre}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          { hasPrediction && hardcodedMatch.idPartido === hardcodedPrediction.idPartido ?
          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Box sx={{ borderRadius:'2px', backgroundColor:'#EFEFEF', padding: '0.5rem', marginRight: '0.5rem'}}>
              <Typography sx={{color: 'black'}}>
                {hardcodedPrediction.resultadoEquipo1}
              </Typography>
            </Box>
            <Box sx={{ borderRadius:'2px', backgroundColor:'#EFEFEF', padding: '0.5rem', marginLeft: '0.5rem'}}>
              <Typography sx={{color: 'black'}}>
                {hardcodedPrediction.resultadoEquipo2}
              </Typography>
            </Box>
          </Box>
          :
          <Button sx={{}}>
            Ingresar
          </Button>
          }
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            sx={{width: '5rem', height: '5rem'}}
            component="img"
            src={team2.imgBandera} /* IMAGEN DEL EQUIPO */
            alt={team2.nombre}
          />
          <Typography sx={{marginY: '0.5rem'}}>
            {team2.nombre}
          </Typography>
        </Box>
      </CardActionArea>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Typography align='center'>
          {formatDate(matchDate)}
        </Typography>
      </Box>
      </Card>
  )
}

export default MatchCard;