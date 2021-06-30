import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    input: {
        height: 50
    },
});


export default withStyles(styles)(props => {
    const { classes, width = "100%", label = "label", onChange, value = "" } = props;
    return (
        <TextField
            InputProps={{ className: classes.input }}
            InputLabelProps={{
                shrink: true
            }}
            value={value}
            style={{ width }}
            id="outlined-basic"
            label={label}
            variant="outlined"
            onChange={(e) => onChange(e.target.value)}
        />
    );
})
