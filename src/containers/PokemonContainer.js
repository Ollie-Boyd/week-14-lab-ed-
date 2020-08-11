import React from 'react';
import PokemonDetail from '../components/PokemonDetail';
import PokemonSelector from '../components/PokemonSelector';

class PokemonContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <>
                <h1>hellooooo</h1>
                {/* <PokemonSelector/> */}
                <PokemonDetail/>
            </>

        )
    }
}

export default PokemonContainer;
