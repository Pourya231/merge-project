const { readCSV , readDirectory , readSource } =  require('./src/utils/fileHandler')
// 1. Read CSV files    
const readFiles = async() => {
    const filename = readDirectory ('./input')
    const res= readSource(filename);
    const data=[]
    res.forEach(element => {
        data[element]=[]
        data[element].catalog= readCSV(`./input/catalog${element}.csv`)
        data[element].catalog= readCSV(`./input/barcode${element}.csv`)
    });
    console.log('data',data)
//   const json = await readCSV('./input/catalogA.csv')
//   console.log('json',json) 
}
readFiles()
// 2. Process Files and Merge Proudcts


// 3. Generate output file