import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import { Zoom } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

interface Props {
  trigger: boolean;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children, trigger } = props;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function BackToTop() {
  const trigger = useScrollTrigger({
    target: undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar
        position="sticky"
        style={
          trigger
            ? {
                color: "black",
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(5px) saturate(180%)",
                WebkitBackdropFilter: "blur(5px) saturate(180%)",
              }
            : {
                color: "black",
                backgroundColor: "transparent",
                boxShadow: "0px 0px 0px 0px",
              }
        }
      >
        <Toolbar>
          <IconButton aria-label="app" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Scroll to see button
          </Typography>
        </Toolbar>
      </AppBar>

      <Toolbar id="back-to-top-anchor" />

      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(32)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>

      <ScrollTop trigger={trigger}>
        {/* <ScrollTop {...props}> */}
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
