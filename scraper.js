const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'http://zar-ptica.hr/program/';
  await page.goto(url);

  const predstave = await page.evaluate(() =>
        Array.from(document.querySelectorAll('div.predstava p'))
            .map((predstava) => predstava.innerText.trim()
        )
    );

  console.log(predstave);

  await browser.close();
})();