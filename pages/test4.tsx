// import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";

const PREFIX = "MyCard";
const classes = {
  root: `${PREFIX}-root`,
  cta: `${PREFIX}-cta`,
  content: `${PREFIX}-content`,
};
const Root = styled("div")( ({ theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
  },
  [`& .${classes.cta}`]: {
    borderRadius: theme.shape.borderRadius,
  },
  [`& .${classes.content}`]: {
    color: theme.palette.common.white,
    fontSize: 16,
    lineHeight: 1.7,
  },
}));

export const MyCard = () => {
  return (
    <Root className={classes.root}>
      {/* The benefit of this approach is that the code inside Root stays the same. */}
      <Typography className={classes.content}>
        The benefit of this approach is that the code inside Root stays the
        same.
      </Typography>
      <Button className={classes.cta}>Go</Button>
    </Root>
  );
};

const test4 = () => {
  return <MyCard />;
};

export default test4;
