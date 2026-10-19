const imageUrl = "https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_19002.jpg"; 
const imgElement = document.getElementById("image");

async function getData() {
  const url = imageUrl;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}