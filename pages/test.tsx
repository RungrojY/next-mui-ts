import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { Zoom } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";



interface ScrollTopProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  trigger: boolean;
  window?: () => Window;
  children: React.ReactElement;
}

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}


function ScrollTop(props: Props) {
  const { children, window } = props;
  // window น่าจะเป็นตำแหน่งที่จะ เลื่อนขึ้นไป
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior: "smooth"
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function BackToTop(props: Props) {
  console.log(props);
  
  const chk = false;


  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar
        position="sticky"
        // #1
        // color="default"
        // #2
        // color="secondary"
        // #3
        style={chk ? {
          backgroundColor: "transparent",
          color: "black",
          boxShadow: "0px 0px 0px 0px",
        } : {}}
      >
        <Toolbar>
          <IconButton aria-label="app" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">Scroll to see button</Typography>
        </Toolbar>
      </AppBar>


      <Toolbar id="back-to-top-anchor" />

      <Container>
        <Typography variant="h1" component="div">Heading 1</Typography>
        <Box sx={{ my: 2 }}>
          {[...new Array(32)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>

      <ScrollTop>
      {/* <ScrollTop {...props}> */}
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

    </React.Fragment>
  );
}



