const asyncForEach = require("../asyncForEach")

class CatalogModels  {
    constructor(){
        this. product = []
    }
    async addProduct(productData){
        console.log('just for test',productData)
    }
   async  addProducts(catalogData) {
         const productData = {}

        await asyncForEach(catalogData.catalog , async (productItem) => {
            productData.SKU = productItem.SKU
            productData.description = productItem.description

            await asyncForEach(catalogData.barcode, async (barcodeRow) => {
                if ( barcodeRow.SKU  === productItem.SKU ) {

                    productData.barcode.push(barcodeRow.barcode)
                }
                productData.SupplierID = barcodeRow.SupllierID
            })  
            productData.supplierName = catalogData.suppliers.find(supplierRow => {
               return (supplierRow.ID=productData.SupplierID)
            }).Name
            this.addProduct(productData)
        })
     }
}

module.exports = CatalogModels 