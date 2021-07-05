import { Fragment , useContext } from 'react'
import ContextApp from '../../../Context/ContextApp'


const TaskList = () => {

    const context = useContext(ContextApp)

    return (
        <Fragment>
            {
                context.tasks.map(data => {
                    return <ul className="task-list">
                        <li className="item-1">{data.title}</li>
                        <li className="item-2">{data.description}</li>
                        <li className="item-3">
                            <i onClick={() => context.clickEditTask(data.id)} className="pi pi-pencil"></i>
                        </li>
                        <li className="item-4">
                            <i onClick={(e) => context.clickRemoveTask(e, data.id)} className="pi pi-trash"></i>
                        </li>
                    </ul>
                })
            }
        </Fragment>
    )

}


export default TaskList