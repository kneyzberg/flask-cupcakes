const BASE_URL = "/api/cupcakes"
$cupcakesSection = $("#cupcakes-section")

async function getCupcakes(){
  let cupcakes = await axios.get(BASE_URL);
  console.log(cupcakes, "cupcakes")
  for (let cupcake of cupcakes.data.cupcakes){
    console.log(cupcake, "cupcake")
    let $listItem = $("<li>");
    $listItem.text(`flavor: ${cupcake.flavor}, rating: ${cupcake.rating}, size: ${cupcake.size}`)
    $listItem.append(`<img src=${cupcake.image} class=img-thumbnail></img>`)
    $cupcakesSection.append($listItem)
  }
}