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

export default function ControlForm({ actions: {game_mode, number_players}, gameType }) {

    const classes = useStyles();
    const [values, setValues] = React.useState({
        [number_players.name]: 2,
        [game_mode.name]: gameType[0],
        age: 10,
    });

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
        // Here is where I can set redux state via callbacks passed down through props
        console.log(`name: ${event.target.name} value: ${event.target.value}`);
        if (event.target.name === game_mode.name) {
            //console.log(`game_mode action called`);
            game_mode.action(event.target.value);
        } else if (event.target.name === number_players.name) {
            //console.log(`number_players action called`);
            number_players.action(event.target.value);
        }
        //console.log(`props: ${JSON.stringify(props)}`);

    }

    return (
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Players</InputLabel>
                <Select
                    value={values.num_players}
                    onChange={handleChange}
                    inputProps={{
                        name: number_players.name,
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
                    value={values.game_type}
                    onChange={handleChange}
                    inputProps={{
                        name: game_mode.name,
                        id: 'gameMode-simple',
                    }}
                >
                    <MenuItem value={gameType[0].value}>{gameType[0].name}</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Age</InputLabel>
                <Select
                    value={values.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-simple',
                    }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

        </form>
    );
}
