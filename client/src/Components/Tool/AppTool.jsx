import { useState } from 'react';
import { Tooltip, makeStyles, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close';
import Menu from '../Menu/Menubar'

const useStyles = makeStyles((theme) => ({
  absolute: {
      position: 'absolute',
      bottom: theme.spacing(8),
      right: theme.spacing(12),
      height: '55px',
      width: '55px'
  },
  root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
  },
  icon: {
    fontSize: '23px',
  }
}))

function AppTool() {

  const classes = useStyles()

  const [showMenu, setShowMenu] = useState(false)

  const openMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div>
      <Tooltip title="Add" aria-label="add">
        <Fab color="secondary" className={classes.absolute} onClick={openMenu}>
          {showMenu ? <CloseIcon className={classes.icon} /> : <AddIcon className={classes.icon} />}
        </Fab>
      </Tooltip>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}

export default AppTool;
