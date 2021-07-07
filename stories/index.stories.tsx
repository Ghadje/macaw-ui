import { Button, Link, Typography } from "@material-ui/core";
import { fade, lighten } from "@material-ui/core/styles";
import { storiesOf } from "@storybook/react";
import React from "react";
import SVG from "react-inlinesvg";

import { light, makeStyles, ThemeProvider } from "../src/theme";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import * as logo from "./assets/macaw-ui-logo.svg";

const useStyles = makeStyles((theme) => ({
  authors: {
    display: "flex",
    justifyContent: "space-between",
  },
  authorsText: {
    fontWeight: 600,
  },
  code: {
    background: fade(theme.palette.secondary.light, 0.1),
    display: "inline",
    fontFamily: "monospace",
    padding: "2px 4px",
  },
  footer: {
    marginTop: theme.spacing(2),
  },
  headline: {
    marginBottom: theme.spacing(6),
  },
  logo: {
    marginBottom: theme.spacing(6),
  },
  paragraph: {
    marginBottom: theme.spacing(3),
  },
  root: {},
  sectionHeader: {
    marginBottom: theme.spacing(3),
  },
}));

const Default: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <SVG className={classes.logo} src={logo} />
      <Typography className={classes.paragraph} component="p">
        Welcome to the MacawUI.
        <br />
        This is an official UI Design Kit for Saleor, a GraphQL-First e-commerce
        platform for perfectionists.
      </Typography>
      <Typography className={classes.paragraph} component="p">
        You can find most of the elements used in the creation of Saleor’s
        dashboard interface and use it to create designs for your specific
        purposes. Use the left-side navigation to choose between different pages
        on which you can find categorized UI Components.
      </Typography>
      <Typography className={classes.paragraph} component="p">
        This project is in 'view only' mode, which means that you will have to
        duplicate it to make any changes and create your own solutions.
      </Typography>
      <Typography className={classes.paragraph} component="p">
        Have a great time working on your designs and empowering your users.
      </Typography>
      <div className={classes.authors}>
        <Typography className={classes.authorsText}>Saleor Team</Typography>
        <Typography className={classes.authorsText}>
          visit us at:{" "}
          <Link href="https://saleor.io" target="_blank">
            saleor.io
          </Link>
        </Typography>
      </div>
      <footer className={classes.footer}>
        <Typography variant="body2">
          Distributed under the Creative Common Attribution 4.0 International
          License
        </Typography>
        <Typography variant="body2">
          <Link
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
          >
            https://creativecommons.org/licenses/by/4.0/
          </Link>
        </Typography>
      </footer>
    </div>
  );
};

const CustomTheme: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.headline} variant="h1">
        Custom Themes
      </Typography>
      <Typography className={classes.paragraph} component="p">
        It's possible to override both themes and component internal styles
        using{" "}
        <Typography color="primary" className={classes.code}>
          overrides
        </Typography>{" "}
        and{" "}
        <Typography color="primary" className={classes.code}>
          palettes
        </Typography>{" "}
        props. Macaw-UI uses deep merge algorithm to combine supplied props with
        its own theme.
      </Typography>
      <Typography className={classes.sectionHeader} variant="h3">
        Example
      </Typography>
      <Typography className={classes.paragraph} component="p">
        Let's try to override buttons:
      </Typography>
      <ThemeProvider
        palettes={{
          light: { ...light, primary: "#ff7a93", secondary: "#ffbf7a" },
        }}
        overrides={{
          overrides: {
            MuiButton: {
              containedPrimary: {
                background: `linear-gradient(45deg, #ff7a93 0%, ${lighten(
                  "#ff7a93",
                  0.5
                )} 100%)`,
              },
              containedSecondary: {
                background: `linear-gradient(45deg, #ffbf7a 0%, ${lighten(
                  "#ffbf7a",
                  0.5
                )} 100%)`,
              },
            },
          },
        }}
      >
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </ThemeProvider>
    </div>
  );
};

storiesOf("Home", module)
  .addDecorator(Decorator)
  .addDecorator(GuideDecorator)
  .add("default", () => <Default />)
  .add("custom theme", () => <CustomTheme />);
