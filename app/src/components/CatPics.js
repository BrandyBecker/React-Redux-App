import React, {useEffect} from 'react';
import CatCard from './CatCard';
import {fetchCatPics} from '../actions';
import {connect} from 'react-redux';

const CatPics = props => {
    useEffect(()=> {
        props.fetchCatPics()
    }, []);
    if (props.isFetching){
        //WIP add a loader using react-loader-spinner, brandy!! dont be lazy!!
        return <h2>🐾 Cat Pics loading... Prepare for liftoff! 🚀</h2>
    }
    return (
        <div className="cardCSS">
            {props.error && <p>{props.error}</p>}
            {props.catPics.map(data => (
                <CatCard key={data.id} data={data} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        catPics: state.catPics,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {fetchCatPics}
)(CatPics);