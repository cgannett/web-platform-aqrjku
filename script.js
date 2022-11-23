window.onload = (function () {
  // const output = new Uint8Array(30000);
  const type = [
    'Sand Desert',
    'Grassland(flat)',
    'Savanna(flat)',
    'Marsh',
    'Swamp',
    'Rocky Wasteland(flat)',
    'Shrubland(flat)',
    'Conifer Forest',
    'Broadleaf Forest',
    'Rocky Wasteland(Hilly)',
    'Grassland(hilly)',
    'Savanna(hilly)',
    'Shrubland(hilly)',
    'Badlands',
  ];
  const colors = [
    '#000000',
    '#000080',
    '#008000',
    '#008080',
    '#800000',
    '#800080',
    '#808000',
    '#C0C0C0',
    '#808080',
    '#0000FF',
    '#00FF00',
    '#00FFFF',
    '#FF0000',
    '#FF00FF',
    '#FFFF00',
    '#FFFFFF',
  ];
  for (let rain = 0; rain < 100; rain++) {
    for (let drn = 0; drn < 100; drn++) {
      let index = rain * 100 + drn * 3;
      if (rain < 10 && drn < 33) {
        //sand desert
        output[index] = 142;
        output[index + 1] = 247;
        output[index + 2] = 6;
      } else if (rain < 20 && drn < 50 && rain >= 10) {
        //Grassland(flat)
        output[index] = 126;
        output[index + 1] = 249;
        output[index + 2] = 10;
      } else if (rain >= 20 && drn < 50 && rain < 33) {
        //Savanna(flat)
        output[index] = 126;
        output[index + 1] = 34;
        output[index + 2] = 10;
      } else if (rain >= 33 && drn < 33 && rain < 66) {
        //Marsh
        output[index] = 126;
        output[index + 1] = 34;
        output[index + 2] = 2;
      } else if (rain >= 66 && drn < 33 && rain < 100) {
        //Swamp
        output[index] = 244;
        output[index + 1] = 34;
        output[index + 2] = 2;
      } else if (rain < 10 && drn < 50 && drn >= 33) {
        //Rocky Wasteland(Flat)
        output[index] = 39;
        output[index + 1] = 112;
        output[index + 2] = 7;
      }
    }
  }
  console.log(type.length);
})();

/*output schema is
output[i] == icon index 1,
output[i+1] == icon index 2,
output[i+2] == color; 
*/
