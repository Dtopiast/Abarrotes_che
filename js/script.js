var modal = document.getElementById("modal");

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function openModal(departamento) {
  var modalItems = document.querySelector(".modal-items");
  modalItems.innerHTML = "";
  switch (departamento) {
    case "Cuidado Personal":
      var items = [
        {
          imagen: "https://via.placeholder.com/150",
          titulo: "Helado de vainilla",
          descripcion: "Delicioso helado de vainilla premium.",
          precio: "$3.99",
        },
        {
          imagen: "https://via.placeholder.com/150",
          titulo: "Vegetales congelados",
          descripcion: "Mezcla de vegetales frescos congelados.",
          precio: "$2.49",
        },
      ];
      break;
    case "Abarrotes":
      var items = [
        {
          imagen: "https://via.placeholder.com/150",
          titulo: "Azucar",
          descripcion: "Azucar premium.",
          precio: "$3.99",
        },
        {
          imagen: "https://via.placeholder.com/150",
          titulo: "Sal",
          descripcion: "Sal premium.",
          precio: "$2.49",
        },
      ];
      break;
    case "Papel":
      var items = [
        {
          imagen: "https://via.placeholder.com/150",
          titulo: "Papel Regio",
          descripcion: "Papel calidad premium.",
          precio: "$3.99",
        },
        {
          imagen: "https://via.placeholder.com/150",
          titulo: "Papel Kotonete",
          descripcion: "Papel calidad premium.",
          precio: "$2.49",
        },
      ];
      break;
    case "congelados":
      var items = [
        {
          imagen: "https://via.placeholder.com/150",
          titulo: "Helado de vainilla",
          descripcion: "Delicioso helado de vainilla premium.",
          precio: "$3.99",
        },
        {
          imagen: "https://via.placeholder.com/150",
          titulo: "Helado de Chocolate",
          descripcion: "Delicioso helado de chocolate premium.",
          precio: "$2.49",
        },
      ];
      break;
      case "Cuidado Personal":
      var items = [
        {
          imagen: "https://via.placeholder.com/150",
          titulo: "Shampoo",
          descripcion: "Shampoo premium.",
          precio: "$3.99",
        },
        {
          imagen: "https://via.placeholder.com/150",
          titulo: "Shampoo duo",
          descripcion: "Shampoo premium.",
          precio: "$2.49",
        },
      ];
      break;
  }
  items.forEach(function (item) {
    var itemElement = document.createElement("div");
    itemElement.classList.add("modal-item");

    var imageElement = document.createElement("div");
    imageElement.classList.add("modal-item-image");
    imageElement.style.backgroundImage = "url('" + item.imagen + "')";

    var detailsElement = document.createElement("div");
    detailsElement.classList.add("modal-item-details");

    var titleElement = document.createElement("div");
    titleElement.classList.add("modal-item-title");
    titleElement.textContent = item.titulo;

    var descriptionElement = document.createElement("div");
    descriptionElement.classList.add("modal-item-description");
    descriptionElement.textContent = item.descripcion;

    var priceElement = document.createElement("div");
    priceElement.classList.add("modal-item-price");
    priceElement.textContent = item.precio;

    detailsElement.appendChild(titleElement);
    detailsElement.appendChild(descriptionElement);
    detailsElement.appendChild(priceElement);

    itemElement.appendChild(imageElement);
    itemElement.appendChild(detailsElement);

    modalItems.appendChild(itemElement);
  });
  modal.style.display = "block";
}
