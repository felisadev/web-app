import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BlockIcon from '@mui/icons-material/Block';

type TNotAuthModal = {
  button: string;
  description: string;
  redirect: string;
  title: string;
};

const NotAuthModal = ({
  button,
  description,
  redirect,
  title,
}: TNotAuthModal) => {
  const navigate = useNavigate();

  return (
    <Dialog
      open={true}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="xs"
      role="alertdialog"
    >
      <DialogTitle
        id="alert-dialog-title"
        bgcolor="#c62828"
        color="#fff"
        display="flex"
        flexDirection="column"
        alignItems="center"
        fontWeight="bold"
      >
        <BlockIcon sx={{ fontSize: '4rem' }} />
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          fontWeight="bold"
          pt="24px"
        >
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '16px',
        }}
      >
        <Button
          variant="contained"
          color="error"
          onClick={() => navigate(redirect)}
        >
          {button}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NotAuthModal;
