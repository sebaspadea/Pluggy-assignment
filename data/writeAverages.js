const fs = require('fs'); 

const { blueDolarHoyCompra, blueDolarHoyVenta, blueAmbitoCompra, blueAmbitoVenta, blueCronistaCompra, blueCronistaVenta } = require('./scraper')

const writeAverages = Promise.all([
  blueAmbitoCompra,
  blueAmbitoVenta,
  blueDolarHoyCompra,
  blueDolarHoyVenta,
  blueCronistaVenta,
  blueCronistaCompra])
  .then(data => {
    let objectToSave = {
        "average_buy_price": Number(((parseInt(data[0]) + parseInt(data[2].slice(1)) + parseInt(data[5])) / 3).toFixed(2)),
        "average_sell_price": Number(((parseInt(data[1]) + parseInt(data[3].slice(1)) + parseInt(data[4])) / 3).toFixed(2))
    }
    fs.writeFile('data/average.json', JSON.stringify(objectToSave),'utf8', (err) => { 
      if (err) throw err; 
      console.log('The file has been saved!'); 
    });
  })

module.exports = writeAverages

