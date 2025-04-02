import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1), // Make sure theme is properly provided
  },
  actionDiv: {
    textAlign: 'center',
  },
}));