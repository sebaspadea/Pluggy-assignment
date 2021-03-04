const puppeteer = require('puppeteer')

const webScrapper = async (url, seccion) => {
  try {
    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();
  
    let response = await loadUrl(page, url, browser, seccion);
    await response
    return response
  } catch(err) {
    console.log(err)
  }
};

async function loadUrl(page, url, browser, seccion){
  await page.goto(url,{
    awaitUntil:["load","domcontentloaded","networkidle0"]
  });

  const valorEncontrado= await page.$eval(seccion, el=>el.innerHTML)
  browser.close();
  return valorEncontrado
};

let blueAmbitoCompra = webScrapper("https://www.ambito.com/contenidos/dolar.html",".variacion-max-min-chico > .d-flex  > .first > .data-compra");
let blueAmbitoVenta = webScrapper("https://www.ambito.com/contenidos/dolar.html",".variacion-max-min-chico > .d-flex  > .second > .data-venta");

let blueDolarHoyCompra = webScrapper("https://www.dolarhoy.com/",".dolar > .is-parent > .is-child > .values > .compra > .val");
let blueDolarHoyVenta = webScrapper("https://www.dolarhoy.com/",".dolar > .is-parent > .is-child > .values > .venta > .val");

let blueCronistaVenta = webScrapper("https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB",".markets > #market-scrll-1 > li > a > .sell > .sell-wrapper > .sell-value")
let blueCronistaCompra = webScrapper("https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB",".markets > #market-scrll-1 > li > a > .buy > .buy-wrapper > .buy-value")

module.exports = {
  blueDolarHoyVenta,
  blueDolarHoyCompra,
  blueAmbitoCompra,
  blueAmbitoVenta,
  blueCronistaCompra,
  blueCronistaVenta
}

