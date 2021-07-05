// import { Component,  } from 'react';
import { TabPanel, TabView } from 'primereact/tabview';
import DefinitaionTask from '../Tasks/DefinitaionTask/DefinitaionTask';
import TaskList from '../Tasks/ViewTasks/TaskList';
import TitleTaskMenu from '../Tasks/ViewTasks/TitleMenuTask';

const NavMenu = () => {
    return (
        <div className="tabview-demo">
            <TabView>
                <TabPanel header="TaskDefinitation">
                    <DefinitaionTask />
                </TabPanel>
                <TabPanel header="View Tasks">
                    <TitleTaskMenu />
                    <div className="viewTaskList">
                        <TaskList />
                    </div>
                </TabPanel>
            </TabView>
        </div>
    )
}



export default NavMenu