import {
  Modal,
  Backdrop,
  Fade,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";

interface IModlaProps {
  modalOpen: boolean;
  modalContext: string;
  handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

const ModalPage: React.FunctionComponent<IModlaProps> = (props) => {
  const { modalOpen, handleClose, modalContext } = props;
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      className={classes.modal}
      open={modalOpen}
      onClose={handleClose}
    >
      <div className={classes.paper}>
        <h2 id="spring-modal-title">{modalContext}</h2>
      </div>
    </Modal>
  );
};

export default ModalPage;
