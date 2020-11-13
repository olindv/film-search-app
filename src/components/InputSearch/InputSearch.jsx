import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
    button: {
        padding: '15px 22px'
    },
    input: {
        marginRight: '20px'
    }
}));

const InputSearch = () => {
    const classes = useStyles();
    return (
        <div>
            <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                variant="outlined"
                className={classes.input}
            />
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                endIcon={<SearchIcon/>}
            >
                Показать фильмы
            </Button>
        </div>
    );
};

export default InputSearch;
