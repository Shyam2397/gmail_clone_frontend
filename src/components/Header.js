import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material";
import {
  Menu,
  Search,
  Tune,
  HelpOutline,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { gmailLogo } from "../constants/Constant";

const StyledAppBar = styled(AppBar)({
  background: "#f5f5f5",
  boxShadow: "none",
});

const SearchWrapper = styled(Box)({
  marginLeft: 80,
  borderRadius: 20,
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  background: "#f5f5f5",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  "&>div": {
    width: "100%",
    padding: "0 5px",
  },
});

const OptionWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  "&>svg": {
    marginLeft: 20,
  },
});

const Header = ({ toggleDrawer }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Menu color="action" onClick={toggleDrawer} />
        <img
          src={gmailLogo}
          alt="logo"
          style={{ width: 110, marginLeft: 15 }}
        />
        <SearchWrapper>
          <Search color="action" />
          <InputBase placeholder="Search mail" />
          <Tune color="action" />
        </SearchWrapper>
        <OptionWrapper>
          <HelpOutline color="action" />
          <SettingsOutlined color="action" />
          <AppsOutlined color="action" />
          <AccountCircleOutlined color="action" />
        </OptionWrapper>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
