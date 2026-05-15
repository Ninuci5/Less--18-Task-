function isEmptyString(str) {
  return str === "";
}

function convertUsdToGel(usd, rate) {
  return usd * rate;
}

function getCountryByCurrency(code) {
  const currency = String(code).toUpperCase();
  const map = {
    USD: "United States",
    EUR: "European Union",
    GEL: "Georgia"
  };
  return map[currency] || "Unknown currency";
}

function toLowerCaseString(str) {
  return String(str).toLowerCase();
}

function filterGreaterThan100(numbers) {
  return Array.isArray(numbers)
    ? numbers.filter((num) => typeof num === "number" && num > 100)
    : [];
}

function findMinPriceProduct(products) {
  if (!Array.isArray(products) || products.length === 0) {
    return null;
  }
  return products.reduce((minProduct, product) => {
    if (minProduct === null || product.price < minProduct.price) {
      return product;
    }
    return minProduct;
  }, null);
}

function findById(items, id) {
  if (!Array.isArray(items)) {
    return undefined;
  }
  return items.find((item) => String(item.id) === String(id));
}
