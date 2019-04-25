const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    desc: 'Marcar con completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Craer un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar un dato de una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}