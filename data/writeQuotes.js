const fs = require('fs'); 

const { blueDolarHoyCompra, blueDolarHoyVenta, blueAmbitoCompra, blueAmbitoVenta, blueCronistaCompra, blueCronistaVenta } = require('./scraper')

Promise.all([
  blueAmbitoCompra,
  blueAmbitoVenta,
  blueDolarHoyCompra,
  blueDolarHoyVenta,
  blueCronistaVenta,
  blueCronistaCompra])
  .then(data => {
    let objectToSave = {
      "ambito": {
        "buy_price": data[0],
        "sell_price": data[1],
        "source": "https://www.ambito.com/contenidos/dolar.html"
      },
      "DolarHoy": {
        "buy_price": data[2],
        "sell_price": data[3],
        "source": "https://www.dolarhoy.com"
      },
      "Cronista": {
        "buy_price": data[4],
        "sell_price": data[5],
        "source": "https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB"
      }
    }
     
    fs.writeFile('quotes.json', JSON.stringify(objectToSave),'utf8', (err) => { 
      if (err) throw err; 
      console.log('The file has been saved!'); 
    });
  })