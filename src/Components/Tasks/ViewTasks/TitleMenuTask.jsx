import React from 'react'



class TitleTaskMenu extends React.Component {



    render() {
        return (
            <div className="viewTasks">
                <ul className="title-menu">
                    <li className="item-1">Title</li>
                    <li className="item-2">Description</li>
                    <li className="item-3">Edited</li>
                    <li className="item-4">Deleted</li>
                </ul>
            </div>
        )
    }
}

export default TitleTaskMenu