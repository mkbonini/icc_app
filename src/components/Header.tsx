import { Box } from "@mui/material";
import icc from "../assets/icc.svg";

export default function Header() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Box
        component="img"
        alt="ICC-CDS Logo"
        src={icc}
        sx={{
          p: 1,
          height: 40,
        }}
      ></Box>
    </Box>
  );
}
