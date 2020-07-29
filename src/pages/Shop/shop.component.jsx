import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { firestore,convertCollectionSnapShotToMap } from "../../firebase/firebase.utils.js";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../../pages/collection/collection.component";

import { updateCollections } from "../../redux/shop/shop.action";

import "./shop.styles.scss";

class Shop extends React.Component {

    unSubscribeFromSnapShot = null;

    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection("collections");
        this.unSubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionSnapShotToMap(snapshot);
            updateCollections(collectionMap);
        })
    }

    componentWillUnmount(){
        this.unSubscribeFromSnapShot()
    }

    render(){
        const { match } = this.props;
        return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )}
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
})


export default connect(null,mapDispatchToProps)(Shop);