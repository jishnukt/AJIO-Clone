function toggleAllDropdowns() {
  const genderDropdown = document.getElementById('dropdown-icon');
  const priceDropdown = document.getElementById('dropdown-icon2');
  const categoryDropdown = document.getElementById('dropdown-icon3');
  const brandsDropdown = document.getElementById('dropdown-icon4');
  genderDropdown.style.display = genderDropdown.style.display === 'none' ? 'block' : 'none';
  priceDropdown.style.display = priceDropdown.style.display === 'none' ? 'block' : 'none';
  categoryDropdown.style.display = categoryDropdown.style.display === 'none' ? 'block' : 'none';
  brandsDropdown.style.display = brandsDropdown.style.display === 'none' ? 'block' : 'none';
}
document.addEventListener('click', function (event) {
  if (event.target !== dropdownSection && event.target.closest('.up1') === null) {
      genderDropdown.style.display = 'none';
      priceDropdown.style.display = 'none';
      categoryDropdown.style.display = 'none';
      brandsDropdown.style.display = 'none';
  }
});



function toggleAllDropdowns2() {
  const genderDropdown2 = document.getElementById('box');
  genderDropdown2.style.display = genderDropdown2.style.display === 'none' ? 'block' : 'none';
}
document.addEventListener('click', function (event) {
  if (event.target !== dropdownSection && event.target.closest('.up1') === null) {
      genderDropdown2.style.display = 'none';
  }
});



function toggleDropdown() {
  var dropdownMenu = document.getElementById("myDropdown");
  dropdownMenu.style.display = (dropdownMenu.style.display === "none") ? "block" : "none";
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-icon')) {
    var dropdownMenu = document.getElementById("myDropdown");
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    }
  }
}


function toggleDropdown2() {
  var dropdownMenu2 = document.getElementById("myDropdown2");
  dropdownMenu2.style.display = (dropdownMenu2.style.display === "none") ? "block" : "none";
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-icon2')) {
    var dropdownMenu2 = document.getElementById("myDropdown2");
    if (dropdownMenu2.style.display === "block") {
      dropdownMenu2.style.display = "none";
    }
  }
}


function toggleDropdown3() {
  var dropdownMenu3 = document.getElementById("myDropdown3");
  dropdownMenu3.style.display = (dropdownMenu3.style.display === "block") ? "none" : "block";
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-icon3')) {
    var dropdownMenu3 = document.getElementById("myDropdown3");
    if (dropdownMenu3.style.display === "block") {
      dropdownMenu3.style.display = "none";
    }
  }
}


function toggleDropdown4() {
  var dropdownMenu4 = document.getElementById("myDropdown4");
  dropdownMenu4.style.display = (dropdownMenu4.style.display === "block") ? "none" : "block";
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-icon4')) {
    var dropdownMenu4 = document.getElementById("myDropdown4");
    if (dropdownMenu4.style.display === "block") {
      dropdownMenu4.style.display = "none";
    }
  }
}


function toggleDropdown11() {
  var dropdownMenu11 = document.getElementById11("myDropdown");
  dropdownMenu11.style.display = (dropdownMenu11.style.display === "block") ? "none" : "block";
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-icon11')) {
    var dropdownMenu11 = document.getElementById("myDropdown11");
    if (dropdownMenu11.style.display === "block") {
      dropdownMenu.style.display = "none";
    }
  }
}

// #######################################################################################################3
async function filterajio() {
  try {
      // const response = await fetch('sample.json');
      const response = await fetch('https://jishnukt.github.io/api/sample.json');
      const products = await response.json();
      const sortDropdown = document.getElementById('dropdown');
      const countDisplay = document.getElementById('countDisplay');
      const productContainer = document.getElementById('flexb');
      const priceCheckbox1 = document.getElementById('ver5');
      const priceCheckbox2 = document.getElementById('ver6');
      const priceCheckbox3 = document.getElementById('ver7');
      const priceCheckbox4 = document.getElementById('ver8');
      const priceCheckbox5 = document.getElementById('ver9');
      const GenderCheckbox1 = document.getElementById('ver10');
      const GenderCheckbox2 = document.getElementById('ver11');
      const GenderCheckbox3 = document.getElementById('ver12');
      const GenderCheckbox4 = document.getElementById('ver13');
      const GenderCheckbox5 = document.getElementById('ver14');
      const categoryCheckbox1 = document.getElementById('ver15');
      const categoryCheckbox2 = document.getElementById('ver16');
      const categoryCheckbox3 = document.getElementById('ver17');
      const categoryCheckbox4 = document.getElementById('ver18');
      const categoryCheckbox5 = document.getElementById('ver19');
      const brandCheckbox1 = document.getElementById('ver20');
      const brandCheckbox2 = document.getElementById('ver21');
      const brandCheckbox3 = document.getElementById('ver22');
      const brandCheckbox4 = document.getElementById('ver23');
      const brandCheckbox5 = document.getElementById('ver24');
      
      let filteredProducts = [];

      const CheckboxChange = () => {
        productContainer.innerHTML = '';
    
        const checkedPriceCheckboxes = [priceCheckbox1, priceCheckbox2, priceCheckbox3, priceCheckbox4, priceCheckbox5].filter(checkbox => checkbox.checked);
        const checkedGenderCheckboxes = [GenderCheckbox1, GenderCheckbox2, GenderCheckbox3, GenderCheckbox4, GenderCheckbox5].filter(checkbox => checkbox.checked);
        const checkedcategoryCheckboxes = [categoryCheckbox1, categoryCheckbox2, categoryCheckbox3, categoryCheckbox4, categoryCheckbox5].filter(checkbox => checkbox.checked);
        const checkedbrandCheckboxes = [brandCheckbox1, brandCheckbox2, brandCheckbox3, brandCheckbox4, brandCheckbox5].filter(checkbox => checkbox.checked);

        filteredProducts = products.filter(product => {
            const price = Number(product.prprice);
            const gender = product.gender;
            const category = product.category;
            const prcomp = product.prcomp;

            const priceFilter = checkedPriceCheckboxes.length === 0 || checkedPriceCheckboxes.some(checkbox => {
                if (checkbox.id === 'ver5') return price < 500;
                else if (checkbox.id === 'ver6') return price >= 500 && price <= 1000;
                else if (checkbox.id === 'ver7') return price >= 1001 && price <= 1500;
                else if (checkbox.id === 'ver8') return price >= 1501 && price <= 2000;
                else if (checkbox.id === 'ver9') return price >= 2001 && price <= 2500;
                else return false;
            });
    
            const genderFilter = checkedGenderCheckboxes.length === 0 || checkedGenderCheckboxes.some(checkbox => {
                if (checkbox.id === 'ver10') return gender === 'Girls';
                else if (checkbox.id === 'ver11') return gender === 'Boys';
                else if (checkbox.id === 'ver12') return gender === 'Infants';
                else if (checkbox.id === 'ver13') return gender === 'Women';
                else if (checkbox.id === 'ver14') return gender === 'Junior';
                else return false;
            });

            const categoryFilter = checkedcategoryCheckboxes.length === 0 || checkedcategoryCheckboxes.some(checkbox => {
              if (checkbox.id === 'ver15') return category === 'tshirts';
              else if (checkbox.id === 'ver16') return category === 'frocks';
              else if (checkbox.id === 'ver17') return category === 'sweaters';
              else if (checkbox.id === 'ver18') return category === 'track';
              else if (checkbox.id === 'ver19') return category === 'leggings';
              else return false;
          });

            const brandFilter = checkedbrandCheckboxes.length === 0 || checkedbrandCheckboxes.some(checkbox => {
              if (checkbox.id === 'ver20') return prcomp === '1183';
              else if (checkbox.id === 'ver21') return prcomp === '14 Fab';
              else if (checkbox.id === 'ver22') return prcomp === '2BME';
              else if (checkbox.id === 'ver23') return prcomp === '2K Kids';
              else if (checkbox.id === 'ver24') return prcomp === '3Pin';
              else return false;
          });
    
            return priceFilter && genderFilter && categoryFilter && brandFilter ;
            
        });

        const selectedSortOption = sortDropdown.value;
        if (selectedSortOption === 'low') {
            filteredProducts.sort((a, b) => Number(a.prprice) - Number(b.prprice));
        } else if (selectedSortOption === 'high') {
            filteredProducts.sort((a, b) => Number(b.prprice) - Number(a.prprice));
        }
        else if (selectedSortOption === 'new') {
          filteredProducts.sort((a, b) => Number(b.id) - Number(a.id));
      }
      else if (selectedSortOption === 'rating') {
        filteredProducts.sort((a, b) => Number(b.prrating) - Number(a.prrating));
    }
    else if (selectedSortOption === 'discount') {
      filteredProducts.sort((a, b) => Number(b.discount) - Number(a.discount));
  }


        countDisplay.textContent = `${filteredProducts.length} Items Found`;

          filteredProducts.forEach(product => {
              const productDiv = document.createElement('div');
              productDiv.classList.add('grid1');

        const productImage = document.createElement('img');
        productImage.src = product.imgurl;
        productImage.alt = product.prname;
        productImage.classList.add('prod1');

        const productCompElement = document.createElement('p');
        productCompElement.classList.add('prcomp');
        productCompElement.textContent = product.prcomp;

        const productNameElement = document.createElement('p');
        productNameElement.classList.add('prname');
        productNameElement.textContent = product.prname;

        const productRatingElement = document.createElement('button');
        productRatingElement.classList.add('prbtn');
        productRatingElement.textContent = `${product.prrating}`;

        const productPriceElement = document.createElement('p');
        productPriceElement.classList.add('prprice');
        productPriceElement.textContent = `${product.prprice}`;

        const productOfferElement = document.createElement('p');
        productOfferElement.classList.add('proffer');
        productOfferElement.textContent = `${product.proffer}`;

        

        productDiv.appendChild(productImage);
        productDiv.appendChild(productCompElement);
        productDiv.appendChild(productNameElement);
        productDiv.appendChild(productRatingElement);
        productDiv.appendChild(productPriceElement);
        productDiv.appendChild(productOfferElement);

              productContainer.appendChild(productDiv);
          });
      };

      [priceCheckbox1, priceCheckbox2, priceCheckbox3, priceCheckbox4, priceCheckbox5, GenderCheckbox1, GenderCheckbox2, GenderCheckbox3, GenderCheckbox4, GenderCheckbox5,categoryCheckbox1,categoryCheckbox2,categoryCheckbox3,categoryCheckbox4,categoryCheckbox5,brandCheckbox1,brandCheckbox2,brandCheckbox3,brandCheckbox4,brandCheckbox5].forEach(checkbox => {
        checkbox.addEventListener('change', CheckboxChange);
        sortDropdown.addEventListener('change', CheckboxChange);

    });

      CheckboxChange();
  } catch (error) {
      console.error('Error fetching product details:', error);
  }
}

filterajio();


// ################################################################################################
async function handleSearch() {
  const searchInput = document.getElementById('search1');
  const searchTerm = searchInput.value.toLowerCase();
  const response = await fetch('https://jishnukt.github.io/api/sample.json');
        // const response = await fetch('sample.json');
  const products = await response.json();
  const countDisplay = document.getElementById('countDisplay');

  const filteredProducts2 = products.filter(product => {
    const searchName = product.prname.toLowerCase();
    const searchType = product.category.toLowerCase();
    const searchComp = product.prcomp.toLowerCase();
    const searchColor = product.color.toLowerCase();
    const searchGender = product.gender.toLowerCase();
    const nameMatch = searchName.includes(searchTerm);
    const typeMatch = searchType.includes(searchTerm);
    const compMatch = searchComp.includes(searchTerm);
    const colorMatch = searchColor.includes(searchTerm);
    const genderMatch = searchGender.includes(searchTerm);
    return nameMatch || typeMatch || compMatch || colorMatch || genderMatch;
  });
  countDisplay.textContent = `${filteredProducts2.length} Items Found`;
  updateDisplay(filteredProducts2);
}
function updateDisplay(filteredProducts) {
  const productContainer = document.getElementById('flexb');
  productContainer.innerHTML = '';

  filteredProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('grid1');

    const productImage = document.createElement('img');
    productImage.src = product.imgurl;
    productImage.alt = product.prname;
    productImage.classList.add('prod1');

    const productCompElement = document.createElement('p');
    productCompElement.classList.add('prcomp');
    productCompElement.textContent = product.prcomp;

    const productNameElement = document.createElement('p');
    productNameElement.classList.add('prname');
    productNameElement.textContent = product.prname;

    const productRatingElement = document.createElement('button');
    productRatingElement.classList.add('prbtn');
    productRatingElement.textContent = `${product.prrating}`;

    const productPriceElement = document.createElement('p');
    productPriceElement.classList.add('prprice');
    productPriceElement.textContent = `${product.prprice}`;

    const productOfferElement = document.createElement('p');
    productOfferElement.classList.add('proffer');
    productOfferElement.textContent = `${product.proffer}`;

    productDiv.appendChild(productImage);
    productDiv.appendChild(productCompElement);
    productDiv.appendChild(productNameElement);
    productDiv.appendChild(productRatingElement);
    productDiv.appendChild(productPriceElement);
    productDiv.appendChild(productOfferElement);

    productContainer.appendChild(productDiv);
  });
}
const searchInput = document.getElementById('search1');
searchInput.addEventListener('input', handleSearch);
handleSearch();
