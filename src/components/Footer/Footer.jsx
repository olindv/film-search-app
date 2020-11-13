import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: 'grey'
    },
    copyright: {
        color: '#fff'
    }

}))

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <footer className={classes.footer}>
                <Toolbar>
                    <Typography variant="h6" component="p" className={classes.copyright}>
                        © created by navras
                    </Typography>
                </Toolbar>
            </footer>
        </div>
    );
};

export default Footer;
