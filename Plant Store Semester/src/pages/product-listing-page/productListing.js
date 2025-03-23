document.addEventListener("DOMContentLoaded", function () {
  // Array of Plant Objects
  const plants = [
      { id: 1, name: "Snake Plant", category: "Indoor", price: 500, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQst_HGF1VulUVdBe6312mPhmW-B5dOEZ0h1QvrZkqUYtrYexfYLpaxo5PvAwI2FnTfk7DsGoIpd2205ob9doGtw", inStock: true, careInstructions: "Low maintenance, thrives in indirect light." },
      { id: 2, name: "Spider Plant", category: "Indoor", price: 300, image: " ", inStock: false, careInstructions: "Prefers bright, indirect light." },
      { id: 3, name: "Bamboo Palm", category: "Indoor", price: 800, image: " ", inStock: true, careInstructions: "Needs moist soil and indirect light." },
      { id: 4, name: "Aloe Vera", category: "Succulent", price: 250, image: " ", inStock: true, careInstructions: "Thrives in dry soil and bright light." },
      { id: 5, name: "Peace Lily", category: "Flowering", price: 700, image: " ", inStock: false, careInstructions: "Prefers shade and moist soil." },
      { id: 6, name: "Rose Bush", category: "Outdoor", price: 1000, image: " ", inStock: true, careInstructions: "Full sun, regular watering." },
      { id: 7, name: "Cactus", category: "Succulent", price: 400, image: " ", inStock: true, careInstructions: "Minimal water, loves direct sun." },
      { id: 8, name: "Orchid", category: "Flowering", price: 900, image: " ", inStock: false, careInstructions: "Needs humidity and indirect light." },
      { id: 9, name: "Basil", category: "Outdoor", price: 150, image: " ", inStock: true, careInstructions: "Water regularly, prefers full sun." },
      { id: 10, name: "Gardening Shears", category: "Gardening Tools", price: 500, image: " ", inStock: true, careInstructions: "Keep dry after use." }
  ];

  let cart = [];
  let wishlist = [];

  function addToCart(plantId) {
      const plant = plants.find(p => p.id === plantId);
      if (plant.inStock) {
          cart.push(plant);
          alert(`${plant.name} added to cart!`);
      } else {
          alert(`${plant.name} is out of stock.`);
      }
  }

  function addToWishlist(plantId) {
      const plant = plants.find(p => p.id === plantId);
      wishlist.push(plant);
      alert(`${plant.name} added to wishlist!`);
  }

  function filterPlants(category) {
      const filteredPlants = category === "all" ? plants : plants.filter(plant => plant.category === category);
      displayPlants(filteredPlants);
  }

  function displayPlants(plantsArray) {
      const plantContainer = document.getElementById("plant-container");
      plantContainer.innerHTML = "";
      plantsArray.forEach(plant => {
          const plantCard = `
              <div class="bg-white p-4 rounded shadow-md">
                  <img src="${plant.image}" alt="${plant.name}" class="w-full h-32 object-cover mb-2 rounded">
                  <h3 class="text-xl font-bold">${plant.name}</h3>
                  <p class="text-gray-600">${plant.category}</p>
                  <p class="text-green-600 font-bold">$${plant.price}</p>
                  <p class="text-sm text-gray-500">${plant.careInstructions}</p>
                  <button onclick="addToCart(${plant.id})" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2">Add to Cart</button>
                  <button onclick="addToWishlist(${plant.id})" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2 ml-2">Add to Wishlist</button>
              </div>
          `;
          plantContainer.innerHTML += plantCard;
      });
  }

  document.getElementById("filter").addEventListener("change", (e) => filterPlants(e.target.value));
  displayPlants(plants);
});
