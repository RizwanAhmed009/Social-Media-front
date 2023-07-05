import React, { useState } from "react";
import {
  Add,
  AddPhotoAlternate,
  CalendarMonth,
  EmojiEmotions,
  Margin,
  PersonAdd,
  VideoCameraFront,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
const AddComp = () => {
  const [open, setopen] = useState(false);

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  return (
    <>
      <Tooltip
        onClick={(e) => setopen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor={"background.default"} color={"text.primary"} height={280} width={400} borderRadius={5}>
          <Typography variant="h6" textAlign="center" color="gray">
            Create Modal
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />

            <Typography variant="span" fontWeight={500}>
              Asim
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-helperText"
            placeholder="What's on your mind"
            multiline
            rows={2}
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <AddPhotoAlternate color="secondary" />
            <VideoCameraFront color="success" />
            <PersonAdd color="error" />
          </Stack>

          <ButtonGroup
           fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{width:'100px'}}><CalendarMonth/></Button>
           
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddComp;
