import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import useStyles from './style';
import SearchIcon from '@material-ui/icons/Search';
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded';



export default function SearchAppBar(props) {
const handleChange = e =>{
      props.setSearchValue(e.target.value)
}
  const classes = useStyles();

  return (
    <div  className={classes.root} >
      <AppBar position="static" style={{backgroundColor :'#C38370'}} >
        <Toolbar  >
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
           <PhotoLibraryRoundedIcon/>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Photo Gallery
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
              value={props.searchValue} onKeyPress={e=>{
                if(e.key ==='Enter')
                props.handleSearch()
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
//