import React from 'react'
import NavMenu from './Components/nav-menu/NavMenu'
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog'; // To use <ConfirmDialog> tag
import { ToastContainer, toast } from 'react-toastify';
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next'
import contextApp from './Context/ContextApp';
import TaskDefinitaion from './Components/tasks-definitaion/task-definitaion'


class App extends React.Component {

    state = {
        tasks: [],
        valuesTitleTask: '',
        valueDescriptionTask: '',
        valueInputEditTitle: '',
        valueInputEditDescription: '',
        idTaksEdited: null,
        displayBasic: false
    }

    changeTitleTask = (e) => {
        this.setState({ valuesTitleTask: e.target.value })
    }

    changeDescription = (e) => {
        this.setState({ valueDescriptionTask: e.target.value })
    }

    clickAddTask = () => {
        // toast("Wow so easy!");
        toast.success(`Adding Task with Title (${this.state.valuesTitleTask})`, {
            position: toast.POSITION.TOP_RIGHT
        });
        const { valuesTitleTask, valueDescriptionTask, tasks } = this.state
        const taskAdd = {
            id: Math.floor(Math.random() * 1000000),
            title: valuesTitleTask,
            description: valueDescriptionTask
        }
        tasks.push(taskAdd)
        this.setState({ tasks, valuesTitleTask: '', valueDescriptionTask: '' })
    }

    clickRemoveTask = (e, id) => {
        const { tasks } = this.state;
        const indexTask = tasks.findIndex(item => item.id === id);
        const titleTask = tasks[indexTask].title;
        const removeTask = tasks.filter(item => item.id !== id);
        confirmDialog({
            target: id.currentTarget,
            message: `Are you sure you want to delete the (${titleTask.slice(0, 10)}...) task?`,
            header: 'Delete Confirmation',
            icon: 'pi pi-exclamation-triangle',
            onHide: true,
            accept: () => {
                this.toast.show({
                    severity: "info",
                    summary: "Confirmed",
                    detail: `Task (${titleTask}) successfully removed`,
                    acceptClassName: 'accept',
                    visible: true,
                    life: 3000
                });
                this.setState({ tasks: removeTask })
            },
            reject: () => {
                this.toast.show({
                    severity: "success",
                    summary: "Rejected",
                    rejectClassName: 'reject',
                    detail: `${titleTask} Could not be deleted`,
                    life: 3000
                });
            }
        });
        // console.log(ConfirmPopup);
    }

    clickEditTask = (id) => {
        const { tasks } = this.state;
        const indexTask = tasks.findIndex(item => item.id === id);
        this.setState({
            displayBasic: true,
            valueInputEditTitle: tasks[indexTask].title,
            valueInputEditDescription: tasks[indexTask].description,
            idTaksEdited: id
        });
    }

    onHide() {
        this.setState({ displayBasic: false })
        console.log('hid');
    }

    confirmDialogEdite = () => {
        const { idTaksEdited: id, tasks, valueInputEditTitle, valueInputEditDescription } = this.state;
        const indexTasksArray = tasks.findIndex(item => item.id === id);
        tasks[indexTasksArray].title = valueInputEditTitle;
        tasks[indexTasksArray].description = valueInputEditDescription;
        this.setState({ displayBasic: false, tasks: tasks })
    }
    renderFooter() {
        return (
            <div>
                <Button
                    label="Yes"
                    onClick={() => this.confirmDialogEdite()}
                    autoFocus
                />
            </div>
        );
    }

    changeInputTitleEdite = (e) => {
        this.setState({ valueInputEditTitle: e.target.value })
    }
    changeInputDescriptionEdite = (e) => {
        this.setState({ valueInputEditDescription: e.target.value })
    }

    render() {
        const {
            tasks,
            valuesTitleTask,
            valueDescriptionTask,
            valueInputEditTitle,
            valueInputEditDescription,
            idTaksEdited,
            displayBasic } = this.state
        return (
            <contextApp.Provider
                value = {
                    {
                        state: this.state,
                        tasks: tasks,
                        valuesTitleTask: valuesTitleTask,
                        valueDescriptionTask: valueDescriptionTask,
                        valueInputEditTitle: valueInputEditTitle,
                        valueInputEditDescription: valueInputEditDescription,
                        idTaksEdited: idTaksEdited,
                        displayBasic: displayBasic,
                        changeTitleTask: this.changeTitleTask,
                        changeDescription: this.changeDescription,
                        clickAddTask: this.clickAddTask,
                        clickRemoveTask: this.clickRemoveTask,
                        clickEditTask: this.clickEditTask,
                        confirmDialogEdite: this.confirmDialogEdite,
                        renderFooter: this.renderFooter,
                        changeInputTitleEdite: this.changeInputTitleEdite,
                        changeInputDescriptionEdite: this.changeInputDescriptionEdite
                    }
                }>
                <div className="container-fluid">
                    <Toast ref={(el) => (this.toast = el)} />
                    <NavMenu />
                    <Dialog
                        header="Edeted Task"
                        style={{ width: "50vw" }}
                        footer={this.renderFooter()}
                        visible={this.state.displayBasic}
                        onHide={() => this.onHide()}>

                        <TaskDefinitaion />

                    </Dialog>
                    <ToastContainer />
                </div>
            </contextApp.Provider>
        )
    }
}


export default App