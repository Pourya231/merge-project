const { readCSV , readDirectory , readSource } =  require('./src/utils/fileHandler')
const asyncForEach = require('./src/utils/asyncForEach')
const CatalogModels = require('./src/utils/models/CatalogModels')
const readFiles = async() => {
    const filename = readDirectory ('./input')
    const result = readSource(filename);
    const data=[]
    await asyncForEach( result ,(element) => {
        data[element]=[]
        data[element].catalog= readCSV(`./input/catalog${element}.csv`)
        data[element].suppliers= readCSV(`./input/supplier${element}.csv`)
        data[element].barcode=readCSV(`./input/barcode${element}.csv`) 
    });
    
    return data
}

const processStep = async (data) => {
    const catalogObj = new CatalogModels()
    await asyncForEach (Object.keys(data), async (catalogdata)=> {
        await catalogObj.addProduct(data[catalogdata]) 
    })
    return catalogObj
}
const runApp = async () => {
    // 1. Read CSV files    
    const data = await readFiles()
    
    // 2. Process Files and Merge Proudcts
   // console.log('data',data)
    const MergeData = await processStep(data)
    //console.log('mergeData',MergeData)
    

// 3. Generate output file
}
runApp()
