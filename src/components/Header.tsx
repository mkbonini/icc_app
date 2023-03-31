import { Box } from "@mui/material";
import icc from './assets/icc.svg'
export default function Header() {

  return(
      <Box>
        <Box
          component="img"
          alt='ICC-CDS Logo'
          src={icc}
          sx={{
            height: 75,
            width: 75,
          }}>
          </Box>
      </Box>
  );
}