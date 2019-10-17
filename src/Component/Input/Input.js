import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(1),
  },
  menu: {
    width: 300,
  },
}));

export default function OutlinedTextFields(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  return (
    <form className={classes.container} noValidate autoComplete="on">
     
      <TextField
        ref={props.ref}
        onChange={props.onchange}
        id="outlined-dense"
        label={props.name}
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        type={props.type}
        style={{width: "100%"}}
      />
      
    </form>
  );
}