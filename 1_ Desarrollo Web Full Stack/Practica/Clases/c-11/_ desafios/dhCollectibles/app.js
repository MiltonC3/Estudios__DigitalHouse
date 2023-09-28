const figuras = require("./collectibles");

const hotToys = figuras("Hot Toys");
const bandai = figuras("Bandai");
const starWars = figuras("Star Wars");

const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

let collectibles = {
  figuras: unifiedCollectibles,
  listFigures: function () {
    for (let value of this.figuras) {
      console.table(value);
    }
  },
  figuresByBrand: function (marca) {
    console.table(this.figuras.filter((value) => value.marca === marca));
  },
};

collectibles.figuresByBrand("Hot Toys");

