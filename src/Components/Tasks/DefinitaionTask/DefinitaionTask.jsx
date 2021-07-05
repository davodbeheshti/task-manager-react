import React, { Fragment, useContext } from 'react'
import ContextApp from '../../../Context/ContextApp'
// import SimpleReactValidator from 'simple-react-validator';


const DefinitaionTask = () => {

    const context = useContext(ContextApp);
    return (
        <Fragment>
            <div className="definitaion-task d-flex flex-column">
                <div className="title-task d-flex align-items-center">
                    <label className="mb-0">Title Task</label>
                    <input value={context.valuesTitleTask} type="text" onChange={context.changeTitleTask} className="form-control" />
                </div>
                <div className="description-task d-flex">
                    <label className="mb-0">Description</label>
                    <textarea value={context.valueDescriptionTask} className="form-control" onChange={context.changeDescription}></textarea>
                </div>
                <div className="btn-add-task">
                    <button onClick={context.clickAddTask}>Add Task</button>
                </div>
            </div>
        </Fragment>
    )

}



export default DefinitaionTask