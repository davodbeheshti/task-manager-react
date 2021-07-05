import { useContext } from 'react'
import ContextApp from '../../Context/ContextApp'


const TaskDefinitaion = () => {

const context = useContext(ContextApp)
    return (
        <div>
            <div className="title-input">
                <label>Title :</label>
                <input onChange={(e) => context.changeInputTitleEdite(e)} value={context.valueInputEditTitle} type="text" className="form-control" />
            </div>
            <div className="description-input">
                <label>description :</label>
                <textarea onChange={(e) => context.changeInputDescriptionEdite(e)} value={context.valueInputEditDescription} className="form-control"></textarea>
            </div>
        </div>
    )
}


export default TaskDefinitaion