const csv = require("csvtojson")
const fs = require("fs")
const csvFilePath = 'customer-data.csv'

csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        //console.log(jsonObj);
        fs.writeFile("customer-data.json", JSON.stringify(jsonObj, null, 4), (err) => {
            if (err) {
                console.error(err)
                return
            };
            console.log("File has been created")
        })
    })