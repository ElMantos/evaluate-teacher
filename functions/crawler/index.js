const Crawler = require("crawler");

const URL =
  "https://eif.viko.lt/fakultetas/katedros/programines-irangos-katedra/programines-irangos-katedros-destytojai/";

const c = new Crawler({
  maxConnections: 10
});

function formatData($, row) {
  return {
    img: $(row)
      .find("img")
      .data("largeFile")
      .trim(),
    name: $(row)
      .find("a")
      .find("strong")
      .first()
      .text()
      .trim(),
    email: $(row)
      .find('a[href^="mailto:"]')
      .text()
      .trim(),
    description: $(row)
      .find("td")
      .first()
      .clone()
      .children()
      .remove()
      .end()
      .text()
      .replace("Pareigos:", "")
      .trim()
  };
}

module.exports = async function fetchData(callback) {
  const data = [];

  await c.queue({
    uri: URL,
    callback: function(error, res, done) {
      if (error) {
        console.error(error);
      } else {
        const $ = res.$;
        const tableRows = $(".entry-content")
          .find("table")
          .find("tr");
        $(tableRows).each((index, row) => {
          data.push(formatData($, row));
        });
      }
      done();
      callback(data);
    }
  });
};
