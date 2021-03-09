const fs = require('fs'); 

const { blueDolarHoyCompra, blueDolarHoyVenta, blueAmbitoCompra, blueAmbitoVenta, blueCronistaCompra, blueCronistaVenta } = require('./scraper')

const writeSlippage = Promise.all([
  blueAmbitoCompra,
  blueAmbitoVenta,
  blueDolarHoyCompra,
  blueDolarHoyVenta,
  blueCronistaVenta,
  blueCronistaCompra])
  .then(data => {
    let average_buy_price = Number(((parseInt(data[0]) + parseInt(data[2].slice(1)) + parseInt(data[5])) / 3).toFixed(2));
    let average_sell_price = Number(((parseInt(data[1]) + parseInt(data[3].slice(1)) + parseInt(data[4])) / 3).toFixed(2));
    let objectToSave = {
      "ambito": {
        "buy_price_slippage": calculateSlippage(parseInt(data[0]), average_buy_price),
        "sell_price_slippage": calculateSlippage(parseInt(data[1]), average_sell_price),
        "source": "https://www.ambito.com/contenidos/dolar.html"
      },
      "DolarHoy": {
        "buy_price_slippage": calculateSlippage(parseInt(data[2].slice(1)), average_buy_price),
        "sell_price_slippage": calculateSlippage(parseInt(data[3].slice(1)), average_sell_price),
        "source": "https://www.dolarhoy.com"
      },
      "Cronista": {
        "buy_price_slippage": calculateSlippage(parseInt(data[4]), average_buy_price),
        "sell_price_slippage": calculateSlippage(parseInt(data[5]), average_sell_price),
        "source": "https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB"
      }
    }
    fs.writeFile('data/slippage.json', JSON.stringify(objectToSave),'utf8', (err) => { 
      if (err) throw err; 
      console.log('The file has been saved!'); 
    });
});

function calculateSlippage(price, prom){
  let subtraction = prom - price
  let division = subtraction / price
  let slippage = division * 100
  let result = Number(slippage.toFixed(2))
  if (result < 0){
    return `${result}🔻`
  }
  return `${result}💹`
}



module.exports = writeSlippage