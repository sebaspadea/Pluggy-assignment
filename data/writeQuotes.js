const fs = require('fs'); 

const { blueDolarHoyCompra, blueDolarHoyVenta, blueAmbitoCompra, blueAmbitoVenta, blueCronistaCompra, blueCronistaVenta } = require('./scraper')

let objectToSave = {
  "ambito": {
    "buy_price": blueAmbitoVenta,
    "sell_price": blueAmbitoCompra,
    "source": "https://www.ambito.com/contenidos/dolar.html"
  },
  "DolarHoy": {
    "buy_price": blueDolarHoyVenta,
    "sell_price": blueDolarHoyCompra,
    "source": "https://www.dolarhoy.com"
  },
  "Cronista": {
    "buy_price": blueCronistaVenta,
    "sell_price": blueCronistaCompra,
    "source": "https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB"
  }
}
 
fs.writeFile('quotes.json', JSON.stringify(objectToSave),'utf8', (err) => { 
  if (err) throw err; 
  console.log('The file has been saved!'); 
}); 