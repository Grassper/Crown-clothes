import React from 'react'
import "./menu-item.styles.scss"
import { withRouter } from "react-router-dom"


const Menuitem = ({title, imageUrl, size, linkUrl, history, match}) => {
    return (
        <div
            onClick = {() => history.push(`${match.url}${linkUrl}`)}
            className={`${size} menu-item`}>
            <div
            style={{
                backgroundImage: `URL(${imageUrl})`
            }}
            className="background-image"
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Reinventing the life!</span>
            </div>
        </div>
    )
}

export default withRouter(Menuitem)