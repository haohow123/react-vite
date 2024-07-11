import { SubmitHandler, useController, useForm } from 'react-hook-form';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useMutation } from '@tanstack/react-query';
import { signIn } from '@/api/user';
import useSnackbar from '@/hooks/useSnackbar';
import { useSetRecoilState } from 'recoil';
import userToken from '@/atoms/userToken';

function useSignInForm() {
  const { handleSubmit: onSubmit, control } = useForm({
    defaultValues: {
      account: '',
      password: '',
      remember: Number(localStorage.getItem('remember')) > new Date().getTime(),
    },
  });
  const accountInput = useController({
    name: 'account',
    control,
    rules: { required: 'account is required' },
  });
  const passwordInput = useController({
    name: 'password',
    control,
    rules: { required: 'password is required' },
  });
  const checkbox = useController({
    name: 'remember',
    control,
  });
  return { onSubmit, accountInput, passwordInput, checkbox };
}

type FormInput = {
  account: string;
  password: string;
  remember: boolean;
};
function SignInForm() {
  const { onSubmit, accountInput, passwordInput, checkbox } = useSignInForm();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();
  const setUserToken = useSetRecoilState(userToken);
  const { mutate, isPending } = useMutation({ mutationFn: signIn });
  const handleSubmit: SubmitHandler<FormInput> = ({ remember, ...data }) => {
    mutate(data, {
      onSuccess: (token) => {
        if (remember) {
          localStorage.setItem(
            'remember',
            `${new Date().getTime() + 5 * 60 * 1000}`,
          );
        }
        localStorage.setItem(
          'expiredTime',
          `${new Date().getTime() + 3 * 60 * 1000}`,
        );
        localStorage.setItem('token', token);
        setUserToken(token);
        if (state.redirectURL) {
          navigate(state.redirectURL);
        }
      },
      onError: (error) => {
        openSnackbar(error.message);
      },
    });
  };
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={onSubmit(handleSubmit)}
          noValidate
          sx={{
            mt: 1,
          }}
        >
          <TextField
            {...accountInput.field}
            label="Account"
            required
            fullWidth
            margin="normal"
            autoFocus
            error={!!accountInput.fieldState.error}
            helperText={accountInput.fieldState.error?.message}
          />
          <TextField
            {...passwordInput.field}
            label="Password"
            required
            fullWidth
            margin="normal"
            error={!!passwordInput.fieldState.error}
            helperText={passwordInput.fieldState.error?.message}
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                {...checkbox.field}
                checked={checkbox.field.value}
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isPending}
          >
            {isPending ? <CircularProgress size={24.5} /> : 'Sign In'}
          </Button>
          <Grid
            container
            flexWrap="wrap"
            sx={{ whiteSpace: 'nowrap', rowGap: 1 }}
          >
            <Grid item xs>
              <Link component={RouterLink} to="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="#" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignInForm;
