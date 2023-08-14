import { Box, Button, List, ListItem, styled } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import {
  HiOutlineStar,
  HiOutlineDocument,
  HiOutlineMail,
} from "react-icons/hi";
import { BiSolidInbox, BiTrash } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
import ComposeMail from "./ComposeMail";
import { useState } from "react";

const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  borderRadius: 16,
  padding: 15,
  minWidth: 140,
  textTransform: "none",
  marginTop: 10,
  marginLeft: 10,
});

const Container = styled(Box)({
  padding: 8,
  "&>ul": {
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
  },
  "&>ul>li>svg": {
    marginRight: 20,
  },
});

const SideContent = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const onComposeClick = () => {
    setOpenDialog(true);
  };

  const sidebarData = [
    {
      id: 1,
      name: "inbox",
      title: "inbox",
      icon: <BiSolidInbox />,
    },
    {
      id: 2,
      name: "starred",
      title: "starred",
      icon: <HiOutlineStar />,
    },
    {
      id: 3,
      name: "sent",
      title: "sent",
      icon: <AiOutlineSend />,
    },
    {
      id: 4,
      name: "drafts",
      title: "drafts",
      icon: <HiOutlineDocument />,
    },
    {
      id: 5,
      name: "trash",
      title: "trash",
      icon: <BiTrash />,
    },
    {
      id: 6,
      name: "all mail",
      title: "all mail",
      icon: <HiOutlineMail />,
    },
  ];
  return (
    <Container>
      <ComposeButton onClick={() => onComposeClick()}>
        <CreateOutlined />
        Compose
      </ComposeButton>

      <List>
        {sidebarData.map(({ id, name, title, icon }) => (
          <ListItem>
            {icon}
            {title}
          </ListItem>
        ))}
      </List>
      <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Container>
  );
};

export default SideContent;
