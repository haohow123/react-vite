import { Button, Snackbar } from '@mui/material';

type Props = {
  open: boolean;
  message: string;
  onClose: () => void;
};
function CustomSnackbar({ open, message, onClose }: Props) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      message={message}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      action={
        <Button color="error" size="small" onClick={onClose}>
          Close
        </Button>
      }
    />
  );
}

export default CustomSnackbar;
