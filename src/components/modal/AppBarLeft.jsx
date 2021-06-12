import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
});

const AppBarLeft = () => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (e) => {
    setState(open);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon className="black_icon" />
      </IconButton>
      <Drawer open={state} onClose={toggleDrawer(false)}>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            <ListItem button>
              <ListItemIcon>
                <LocalHospitalIcon />
              </ListItemIcon>
              <ListItemText primary="Find a hospital" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Treatments" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <FlightTakeoffIcon />
              </ListItemIcon>
              <ListItemText primary="Medical trip" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <CollectionsBookmarkIcon />
              </ListItemIcon>
              <ListItemText primary="How it work" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
              <ListItemText primary="Close" />
            </ListItem>
            <Divider />
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default AppBarLeft;
