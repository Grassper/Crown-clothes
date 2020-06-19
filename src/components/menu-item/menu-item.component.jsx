import React from 'react'
import "./menu-item.styles.scss"

const Menuitem = ({title, imageUrl, large}) => {
    return (
        <div
            className={`${large} menu-item`}>
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

export default Menuitem