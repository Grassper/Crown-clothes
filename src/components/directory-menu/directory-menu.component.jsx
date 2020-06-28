import React from "react"

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectSection } from "../../redux/directory/directory.selector";

import Menuitem from "../menu-item/menu-item.component"

import "./directory-menu.component.scss"


const Directorymenu = ({section}) => {
        return (
            <div className="directory-menu">
            {section.map(({id,...otherSectionProps}) => {
                return (
                    <Menuitem key={id} {...otherSectionProps}/>
                )
            })}
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
  section:selectSection
})

export default connect(mapStateToProps)(Directorymenu);