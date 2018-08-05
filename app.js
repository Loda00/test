const fs = require('fs');
const colors = require('colors');

const { tabla,fileTable } = require('./crearTabla');

let base = 4, limite = 6;

// tabla(base,limite).then(rs => console.log(rs.yellow))
//     .catch(err => console.log(err))

fileTable(base,limite)
    .then((rs)=>{
        fs.writeFile(`./tablas/tabla${base}.txt`,rs,()=>{
            console.log(rs.blue);
        })
    })
    .catch(err => console.log(err));


