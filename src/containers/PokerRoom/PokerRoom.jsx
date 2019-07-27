import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/Table';
import setGameMode from '../../actions/GameModeAction';
import { POT_COUNT } from '../../const/GameModes';


class PokerRoom extends Component {

    // TODO this is just an example to make sure redux is working. The user should set this
    componentDidMount() {
        console.log(`Action should fire`);
        this.props.setGameMode(POT_COUNT);
        //console.log(`game_mode.game: ${JSON.stringify(this.props.game_mode.game)}`);
    }

    // TODO I'd like to dynamically set the table size based on screen size
    render() {
        return <Table table_height={55} table_width={50} />;
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    setGameMode,
};


export default connect(mapStateToProps, mapDispatchToProps)(PokerRoom);