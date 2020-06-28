import React from "react";

import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = ({collections}) => {
    const {title,items} = collections;
    return (
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(
                    item => <CollectionItem key={item.id} item={item} className='collection-item'/>
                )
            }
        </div>
    </div>
)}

const mapStateToProps = (state,ownProps) => ({
    collections:selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);