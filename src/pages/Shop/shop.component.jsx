import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { firestore,convertCollectionSnapShotToMap } from "../../firebase/firebase.utils.js";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../../pages/collection/collection.component";

import { updateCollections } from "../../redux/shop/shop.action";

import "./shop.styles.scss";


const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {

    state = {
        loading:true
    }

    unSubscribeFromSnapShot = null;

    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection("collections");
        this.unSubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionSnapShotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({loading:false});
        })
    }

    componentWillUnmount(){
        this.unSubscribeFromSnapShot()
    }

    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
        </div>
    )}
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
})


export default connect(null,mapDispatchToProps)(Shop);