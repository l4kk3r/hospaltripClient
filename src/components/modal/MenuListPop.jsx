import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import InsertInvitationOutlinedIcon from "@material-ui/icons/InsertInvitationOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PowerSettingsNewOutlinedIcon from "@material-ui/icons/PowerSettingsNewOutlined";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import jwt_decode from "jwt-decode";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const MenuListPop = observer(() => {
  const { user } = useContext(Context);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const logOut = () => {
    user.setIsAuth(false);
    localStorage.clear();
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const decode = jwt_decode(localStorage.getItem("token"));
  console.log(decode.user.name);
  return (
    <div className={classes.root}>
      <div>
        <Avatar
          className="ava"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        />
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <div className="popap_info_profile">
                      <div>
                        <Avatar />
                      </div>
                      <div className="popap_info_profile_in">
                        <h3 className="popap_info_profile_h">
                          {decode.user.name}
                        </h3>
                        <p className="popap_info_profile_p">
                          {decode.user.email}
                        </p>
                      </div>
                    </div>
                    <MenuItem
                      onClick={handleClose}
                      className="popap_info_profile_link"
                    >
                      <InsertInvitationOutlinedIcon className="popap_info_profile_icon" />
                      Dashboard
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="popap_info_profile_link"
                    >
                      <SearchOutlinedIcon className="popap_info_profile_icon" />
                      Search a clinic
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="popap_info_profile_link"
                    >
                      <SettingsOutlinedIcon className="popap_info_profile_icon" />
                      Settings
                    </MenuItem>
                    <MenuItem
                      onClick={logOut}
                      className="popap_info_profile_link"
                    >
                      <PowerSettingsNewOutlinedIcon className="popap_info_profile_icon" />
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
});

export default MenuListPop;
