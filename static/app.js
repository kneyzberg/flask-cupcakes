const BASE_URL = "/api/cupcakes";
const $cupcakesSection = $("#cupcakes-section");
const $flavorInput = $("#flavor");
const $ratingInput = $("#rating");
const $sizeInput = $("#size");
const $imageInput = $("#image");

async function getCupcakes() {
  let cupcakes = await axios.get(BASE_URL);
  $cupcakesSection.empty();
  console.log(cupcakes, "cupcakes");
  for (let cupcake of cupcakes.data.cupcakes) {
    console.log(cupcake, "cupcake");
    let $listItem = $("<li>");
    $listItem.text(
      `flavor: ${cupcake.flavor}, rating: ${cupcake.rating}, size: ${cupcake.size}`
    );
    $listItem.append(`<img src=${cupcake.image} class=img-thumbnail></img>`);
    $cupcakesSection.append($listItem);
  }
}

async function addNewCupcake() {
  const flavor = $flavorInput.val();
  const rating = $ratingInput.val();
  const size = $sizeInput.val();
  const image = $imageInput.val();
  await axios.post(BASE_URL, { flavor, rating, size, image });
}

$("#cupcake-form").on("submit", async function (evt) {
  evt.preventDefault();
  await addNewCupcake();
  $("#cupcake-form").trigger("reset");
  getCupcakes();
});

getCupcakes();
