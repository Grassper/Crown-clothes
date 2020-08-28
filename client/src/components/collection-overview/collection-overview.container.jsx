import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";



const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
    )(CollectionOverview);

export default CollectionOverviewContainer;