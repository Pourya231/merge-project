const { readCSV } =  require('./src/utils/fileHandler')
// 1. Read CSV files    
const readFiles = async() => {
  const json = await readCSV('./input/catalogA.csv')
  console.log('json',json) 
}
readFiles()
// 2. Process Files and Merge Proudcts


// 3. Generate output file