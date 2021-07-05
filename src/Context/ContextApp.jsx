import React from 'react';

const contextApp = React.createContext({
    tasks: [],
    valuesTitleTask: '',
    valueDescriptionTask: '',
    valueInputEditTitle: '',
    valueInputEditDescription: '',
    idTaksEdited: null,
    displayBasic: false,
    changeTitleTask: () => { },
    changeDescription: () => { },
    clickAddTask: () => { },
    clickRemoveTask: () => { },
    clickEditTask: () => { },
    confirmDialogEdite: () => { },
    renderFooter: () => { },
    changeInputTitleEdite: () => { },
    changeInputDescriptionEdite: () => { }
})


export default contextApp