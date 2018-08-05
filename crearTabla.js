const fs = require('fs');

function tabla(base, limite){
    return new Promise((resolve,reject)=>{
        var rs = '';
        for(let i=0; i<limite; i++){
            rs += `${base} * ${(1+i)} = ${(1+i) * base} \n`
        }
        if(rs != null){
            resolve(rs);
        }else{
            reject(`Error en los parámetros ingresados ..!`);
        }
    })
} 

function fileTable(base,limite){
    return new Promise((resolve,reject)=>{
        var rs = '';
        for(let i = 0; i<limite; i++){
            rs += `${base} * ${(1+i)} = ${(i+1) * base} \n`;
        }
        if(rs == ""){
            throw new Error('Error ..!');
        }else{
            resolve(rs);
        }
    })
}

module.exports={
    tabla,
    fileTable
}