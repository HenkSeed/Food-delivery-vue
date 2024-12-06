const modalFun = () => {
    const modal = document.querySelector(".cart-modal__overlay");
    const cartBtn = document.querySelector("#cart-button");

    const openModal = () => {
        modal.classList.add("open");
    };

    const closeModal = () => {
        modal.classList.remove("open");
    };

    cartBtn.addEventListener("click", () => {
        openModal();
    });

    modal.addEventListener("click", (event) => {
        if (
            event.target.classList.contains("cart-modal__overlay") ||
            event.target.closest(".cart-modal__header--close")
        ) {
            closeModal();
        }
    });
};

const restFun = () => {
    const container = document.querySelector("#rests-container");

    const restArray = [
        {
            id: 1,
            title: "Пицца плюс",
            time: 50,
            rating: 4.5,
            price: 900,
            group: "Пицца",
            image: "rest-01.jpg",
        },
        {
            id: 2,
            title: "Тануки",
            time: 50,
            rating: 4.5,
            price: 900,
            group: "Пицца",
            image: "rest-02.jpg",
        },
        {
            id: 3,
            title: "FoodBand",
            time: 50,
            rating: 4.5,
            price: 900,
            group: "Пицца",
            image: "rest-03.jpg",
        },
        {
            id: 4,
            title: "Жадина-пицца",
            time: 50,
            rating: 4.5,
            price: 900,
            group: "Пицца",
            image: "rest-04.jpg",
        },
        {
            id: 5,
            title: "Точка еды",
            time: 50,
            rating: 4.5,
            price: 900,
            group: "Пицца",
            image: "rest-05.jpg",
        },
        {
            id: 6,
            title: "PizzaBurger",
            time: 50,
            rating: 4.5,
            price: 900,
            group: "Пицца",
            image: "rest-06.jpg",
        },
    ];

    const loading = () => {
        container.innerHTML =
            "<p style='width: 100%; text-align:center;'>LOADING...</p>";
    };

    const renderRests = (array) => {
        container.innerHTML = "";
        array.forEach((card) => {
            container.insertAdjacentHTML(
                "beforeend",
                `
                <a href="./goods.html?id=${card.id}" class="products-card">
                    <div class="products-card__image">
                        <img src="./images/rests/${card.image}" alt="${card.image}">
                    </div>

                    <div class="products-card__description">
                        <div class="products-card__description-row">
                            <h4 class="products-card__description--title">${card.title}</h4>
                            <div class="products-card__description--badge">${card.time} мин</div>
                        </div>

                        <div class="products-card__description-row">
                            <div class="products-card__description-info">

                                <div class="products-card__description-info--rating">
                                    <img src="./images/icons/star.svg" alt="star"> ${card.rating}
                                </div>

                                <div class="products-card__description-info--price">
                                    От ${card.price} ₽
                                </div>

                                <div class="products-card__description-info--group">
                                    ${card.group}
                                </div>
                            </div>
                        </div>

                    </div>
                </a>
                `
            );
        });
    };

    if (container) {
        loading();

        setTimeout(() => {
            renderRests(restArray);
        }, 1000);
    }
};

const goodsFun = () => {
    const container = document.querySelector("#goods-container");

    const goodsArray = [
        {
            id: 1,
            goodsName: "Ролл угорь стандарт",
            text: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
            price: 250,
            image: "good-01.jpg",
        },
        {
            id: 2,
            goodsName: "Калифорния лосось стандарт",
            text: "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
            price: 395,
            image: "good-02.jpg",
        },
        {
            id: 3,
            goodsName: "Окинава стандарт",
            text: "Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
            price: 250,
            image: "good-03.jpg",
        },
        {
            id: 4,
            goodsName: "Цезарь маки хl",
            text: "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
            price: 250,
            image: "good-04.jpg",
        },
        {
            id: 5,
            goodsName: "Ясай маки стандарт 185 г",
            text: "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
            price: 250,
            image: "good-05.jpg",
        },
        {
            id: 6,
            goodsName: "Ролл с креветкой стандарт",
            text: "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
            price: 250,
            image: "good-06.jpg",
        },
    ];

    const loading = () => {
        container.innerHTML =
            "<p style='width: 100%; text-align:center;'>LOADING...</p>";
    };

    const renderArray = (array) => {
        container.innerHTML = "";
        array.forEach((card) => {
            container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="products-card">
                    <div class="products-card__image">
                        <img src="./images/goods/${card.image}" alt="${card.image}">
                    </div>

                    <div class="products-card__description">
                        <div class="products-card__description-row">
                            <h5 class="products-card__description--name">${card.goodsName}</h5>
                        </div>

                        <div class="products-card__description-row">
                            <p class="products-card__description--text">${card.text}</p>
                        </div>

                        <div class="products-card__description-row">
                            <div class="products-card__description-controls">
                                <button class="btn btn-primary">В корзину <img
                                        src="./images/icons/cart-white.svg" alt="Cart White"></button>
                                <span class="products-card__description-controls--price">${card.price} ₽</span>
                            </div>
                        </div>

                    </div>
                </div>
                `
            );
        });
    };

    if (container) {
        loading();

        setTimeout(() => {
            renderArray(goodsArray);
        }, 1000);
    }
};

modalFun();

restFun();

goodsFun();
