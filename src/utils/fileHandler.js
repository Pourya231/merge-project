const Papa = require('papaparse')
const fs = require('fs')
const readCSV = (filePath) => {

   return new Promise((resolve) => {
    const csvFile=fs.readdirSync(filePath).toString()
    Papa.parse(csvFile,{
        header : true,
        complete : function(results){
            resolve(results)
        },
    })
   })
} 

module.exports = {
    readCSV,
}   