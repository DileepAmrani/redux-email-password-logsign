import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div style={{display: 'inline'}}>
      <Fab color="secondary" aria-label="edit" className={classes.fab}>
        <EditIcon />
      </Fab>
      <Fab  aria-label="delete" className={classes.fab}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}