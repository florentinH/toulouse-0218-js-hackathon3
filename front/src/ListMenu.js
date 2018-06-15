import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import PhotoLibrary from '@material-ui/icons/PhotoLibrary'
import AddToPhotos from '@material-ui/icons/AddToPhotos'
import Face from '@material-ui/icons/Face'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  logo: {
    marginRight: 8
  }
})

function SimpleList (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button component="a" href="/">
          <PhotoLibrary className={classes.logo}>
            <InboxIcon />
          </PhotoLibrary>
          <ListItemText primary="Articles" />
        </ListItem>
        <ListItem button component="a" href="/contributor">
          <AddToPhotos className={classes.logo}>
            <DraftsIcon />
          </AddToPhotos>
          <ListItemText primary="Contributeur" />
        </ListItem>
        <ListItem button component="a" href="/profile">
          <Face className={classes.logo}>
            <DraftsIcon />
          </Face>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
      <Divider />
    </div>
  )
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleList)
