import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function ControlForm(
    {
        actions: {set_game_mode, set_number_players, set_blinds},
        current_game_mode,
        all_game_modes,
        number_players,
        blinds,
    }) {

    const classes = useStyles();
    const [values, setValues] = React.useState({
        [set_number_players.name]: number_players,
        [set_game_mode.name]: current_game_mode,
        //[set_blinds.name]: `${blinds.small_blind}/${blinds.big_blind}`,
        [set_blinds.name]: {small_blind: blinds.small_blind, big_blind: blinds.big_blind},
    });
    console.log(`values: ${JSON.stringify(values)}`);

    //const inputLabel = React.useRef(null);
    // const [labelWidth, setLabelWidth] = React.useState(0);
    // React.useEffect(() => {
    //     setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);

    function handleChange(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
        //console.log(`name: ${event.target.name} value: ${event.target.value}`);
        if (event.target.name === set_game_mode.name) {
            //console.log(`game_mode action called`);
            set_game_mode.action(event.target.value);
        } else if (event.target.name === set_number_players.name) {
            //console.log(`number_players action called`);
            set_number_players.action(event.target.value);
        } else if (event.target.name === set_blinds.name) {
            set_blinds.action(event.target.value);
        }
        //console.log(`props: ${JSON.stringify(props)}`);

    }

    return (
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Players</InputLabel>
                <Select
                    value={values.number_players}
                    onChange={handleChange}
                    inputProps={{
                        name: set_number_players.name,
                        id: 'players-simple',
                    }}
                >
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Three</MenuItem>
                    <MenuItem value={4}>Four</MenuItem>
                    <MenuItem value={5}>Five</MenuItem>
                    <MenuItem value={6}>Six</MenuItem>
                    <MenuItem value={7}>Seven</MenuItem>
                    <MenuItem value={8}>Eight</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Game Type</InputLabel>
                <Select
                    value={values.game_mode}
                    onChange={handleChange}
                    inputProps={{
                        name: set_game_mode.name,
                        id: 'gameMode-simple',
                    }}
                >
                    <MenuItem value={all_game_modes[0].value}>{all_game_modes[0].name}</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Blinds</InputLabel>
                <Select
                    value={values.blinds}
                    onChange={handleChange}
                    inputProps={{
                        name: 'blinds',
                        id: 'blinds-simple',
                    }}
                >
                    <MenuItem value={{big_blind: 2, small_blind: 1}}>1/2</MenuItem>
                    <MenuItem value={{big_blind: 10, small_blind: 5}}>5/10</MenuItem>
                    <MenuItem value={{big_blind: 20, small_blind: 10}}>10/20</MenuItem>
                </Select>
            </FormControl>

        </form>
    );
}
