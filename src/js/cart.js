function cart() {
  const closeBtn = document.querySelector(".modal__close"),
    modal = document.querySelector(".modal"),
    addToCartBtn = document.querySelector(".product-card__btn-add"),
    products = document.querySelectorAll(".options__tab"),
    cartList = document.querySelector(".modal__row"),
    sendBtn = document.querySelector(".modal__send-btn");
  cart = [];

  function renderCart() {
    cartList.textContent = "";
    cart.forEach((item) => {
      const itemCart = `
        <div class="modal__column">
          <div class="modal__name">
            ${item.name}
          </div>
          <div class="modal__counter">
            <div class="modal__btn-incr btn-counter" data-id=${item.variantID}>+</div>
            <div class="modal__count">${item.quantity}</div>
            <div class="modal__btn-decr btn-counter" data-id=${item.variantID}>-</div>
          </div>
        </div>
      `;
      cartList.insertAdjacentHTML("afterbegin", itemCart);
    });
  }

  function openCartModal() {
    modal.style.display = "block";
    products.forEach((product) => {
      if (product.classList.contains("options__tab_active")) {
        const variantID = product.getAttribute("data-id"),
          name = product.nextElementSibling.textContent;
        if (!cart.find((item) => item.variantID === variantID)) {
          cart.push({
            name,
            variantID,
            quantity: 1,
          });
        }
      }
    });
  }

  sendBtn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
      })
      .finally(() => {
        modal.style.display = "none";
        cartList.textContent = "";
      });
  });

  cartList.addEventListener("click", (e) => {
    let target = e.target;

    if (target.classList.contains("btn-counter")) {
      const prod = cart.find((item) => item.variantID === target.dataset.id);

      if (target.classList.contains("modal__btn-decr")) {
        prod.quantity--;
        if (prod.quantity === 0) {
          cart.splice(prod.indexOff, 1);
        }
      }

      if (target.classList.contains("modal__btn-incr")) {
        prod.quantity++;
      }
    }
    renderCart();
  });

  addToCartBtn.addEventListener("click", () => {
    openCartModal();
    renderCart();
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

export default cart;
