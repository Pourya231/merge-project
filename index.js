const { readCSV , readDirectory } =  require('./src/utils/fileHandler')
// 1. Read CSV files    
const readFiles = async() => {
    const data = readDirectory ('./input')
    console.log('data',data)
//   const json = await readCSV('./input/catalogA.csv')
//   console.log('json',json) 
}
readFiles()
// 2. Process Files and Merge Proudcts


// 3. Generate output file