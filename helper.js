// output an array of headings
Array.from(document.querySelectorAll('div.predstava p')).map((predstava) => predstava.innerText.trim())

// get .program-entry nodes (dani i njihove predstave kao childNodes[n])
const datumi = document.querySelectorAll('.program-entry')
// get childNodes (predstave) from datumi
datumi[n].childNodes[3].innerText

// datumi[n].childNodes.length - 3 je index zadnje predstave za taj dan

// datum i dan bloka predstava u text formatu
datumi[0].childNodes[1].innerText