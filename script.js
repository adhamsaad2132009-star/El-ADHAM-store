const products = [
  {
    name: "EL-ADHAM T-Shirt",
    price: 700,
    frontImage: "https://via.placeholder.com/500x600?text=EL-ADHAM+FRONT",
    backImage: "https://via.placeholder.com/500x600?text=EL-ADHAM+BACK",
    description: "تيشيرت EL-ADHAM بتصميم مميز وخامة مريحة."
  }
];

const container = document.getElementById("productsContainer");

container.innerHTML = "";

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${product.frontImage}" alt="${product.name}">

    <div class="name">${product.name}</div>

    <div class="price">${product.price} جنيه</div>

    <p>${product.description}</p>

    <label for="size">اختار المقاس:</label>

    <select id="size">
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
      <option value="2XL">2XL</option>
    </select>

    <br><br>

    <button onclick="showBack('${product.backImage}')">
      صورة الظهر
    </button>

    <button onclick="buyNow('${product.name}', ${product.price})">
      اطلب الآن
    </button>
  `;

  container.appendChild(card);
});

function showBack(image) {
  const win = window.open("", "_blank");

  win.document.write(`
    <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <title>صورة الظهر</title>
      </head>

      <body style="text-align:center;font-family:Arial;">
        <h2>EL-ADHAM - صورة الظهر</h2>
        <img src="${image}" style="max-width:90%;border-radius:15px;">
      </body>
    </html>
  `);
}

function buyNow(name, price) {
  const sizeSelect = document.querySelector("select");
  const size = sizeSelect.value;

  const message =
    `مرحباً EL-ADHAM 👕%0A` +
    `أريد طلب: ${name}%0A` +
    `السعر: ${price} جنيه%0A` +
    `المقاس: ${size}`;

  const whatsappNumber = "201027380152";

  window.open(
    `https://wa.me/${whatsappNumber}?text=${message}`,
    "_blank"
  );
}
