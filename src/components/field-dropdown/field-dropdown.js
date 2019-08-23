function initGuestsDropdown(evt) {
    evt.preventDefault();

    const input = evt.target;
    input.removeEventListener("click", initGuestsDropdown);
    input.addEventListener("click", showDropdown);

    document.body.insertAdjacentHTML("beforeend", `
    <span class="dropdown">
        <span class="dropdown__item">
            <b class="dropdown__title">Взрослые</b>
            <span class="dropdown__count">
                <button class="dropdown__del" type="button"></button>
                <span class="dropdown__amount">0</span>
                <button class="dropdown__add" type="button"></button>
            </span>
        </span>
        <span class="dropdown__item">
            <b class="dropdown__title">Дети</b>
            <span class="dropdown__count">
                <button class="dropdown__del" type="button"></button>
                <span class="dropdown__amount">0</span>
                <button class="dropdown__add" type="button"></button>
            </span>
        </span>
        <span class="dropdown__item">
            <b class="dropdown__title">Младенцы</b>
            <span class="dropdown__count">
                <button class="dropdown__del" type="button"></button>
                <span class="dropdown__amount dropdown__amount_baby">0</span>
                <button class="dropdown__add" type="button"></button>
            </span>
        </span>
        <span class="dropdown__item dropdown__buttons">
            <span class="dropdown__clear">Очистить</span>
            <span class="dropdown__apply">Применить</span>
        </span>
    </span>`);

    const dropdown = document.body.querySelector(".dropdown");
    const inputCoords = input.getBoundingClientRect();
    dropdown.style.left = inputCoords.left + "px";
    dropdown.style.top = inputCoords.bottom + pageYOffset + "px";
    dropdown.style.width = input.offsetWidth + "px";

    const dropdownItems = dropdown.querySelectorAll(".dropdown__item:not(.dropdown__buttons)");

    dropdownItems.forEach(item => {
        const delButton = item.querySelector(".dropdown__del");
        delButton.addEventListener("click", subtractOne);

        const addButton = item.querySelector(".dropdown__add");
        addButton.addEventListener("click", addOne);
    });

    const dropdownClear = dropdown.querySelector(".dropdown__clear");
    dropdownClear.addEventListener("click", clearInput);

    const dropdownApply = dropdown.querySelector(".dropdown__apply");
    dropdownApply.addEventListener("click", applyChanges);

    document.addEventListener("click", ({ target }) => {
        if (target != input && !target.closest(".dropdown")) hideDropdown();
    });

    function hideDropdown() {
        dropdown.classList.add("dropdown_hidden");
    }

    function showDropdown() {
        const inputCoords = input.getBoundingClientRect();

        dropdown.classList.remove("dropdown_hidden");
        dropdown.style.left = inputCoords.left + "px";
        dropdown.style.top = inputCoords.bottom + pageYOffset + "px";
        dropdown.style.width = input.offsetWidth + "px";
    }

    function subtractOne({ target }) {
        const amount = target.nextElementSibling;

        if (amount.textContent == 0) return;

        amount.textContent -= 1;

        if (amount.textContent == 0) {
            target.style = "";

            if (checkIsFieldsEmpty()) dropdownClear.style = "";
        }
    }

    function addOne({ target }) {
        const amount = target.previousElementSibling;
        amount.textContent = +amount.textContent + 1;

        const delButton = amount.previousElementSibling;
        delButton.style.opacity = "1";

        dropdownClear.style.display = "block";
    }

    function clearInput({ target }) {
        const amounts = dropdown.querySelectorAll(".dropdown__amount");
        const delButtons = dropdown.querySelectorAll(".dropdown__del");

        for (let i = 0; i < amounts.length; i++) {
            amounts[i].textContent = 0;
            delButtons[i].style = "";
        }

        input.value = "";
        target.style = "";
    }

    function applyChanges() {
        let amountGuests = 0;
        let amountBabies = 0;

        for (let i = 0; i < dropdownItems.length; i++) {
            const title = dropdownItems[i].querySelector(".dropdown__title").textContent;
            const amount = +dropdownItems[i].querySelector(".dropdown__amount").textContent;

            if (title == "Младенцы") amountBabies += amount;
            amountGuests += amount;
        }

        if (amountGuests == 1) input.value = `${amountGuests} гость, `;
        if (amountGuests >= 2 && amountGuests <= 4) input.value = `${amountGuests} гостя, `;
        if (amountGuests >= 5 || amountGuests == 0) input.value = `${amountGuests} гостей, `;

        if (amountBabies == 1) input.value += `${amountBabies} младенец`;
        if (amountBabies >= 2 && amountBabies <= 4) input.value += `${amountBabies} младенца`;
        if (amountBabies >= 5 || amountBabies == 0) input.value += `${amountBabies} младенцев`;

        hideDropdown();
    }

    function checkIsFieldsEmpty() {
        const amounts = dropdown.querySelectorAll(".dropdown__amount");
        let flag = true;

        for (let i = 0; i < amounts.length; i++) {
            if (amounts[i].textContent > 0) flag = false;
        }

        return flag;
    }
}

function initComfortDropdown(evt) {
    evt.preventDefault();

    const input = evt.target;
    input.removeEventListener("click", initComfortDropdown);
    input.addEventListener("click", () => {
        if (dropdown.classList.contains("dropdown_hidden")) showDropdown();
        else hideDropdown();
    });

    document.body.insertAdjacentHTML(
        "beforeend",
        `
    <span class="dropdown">
        <span class="dropdown__item">
            <b class="dropdown__title">Спальни</b>
            <span class="dropdown__count">
                <button class="dropdown__del" type="button"></button>
                <span class="dropdown__amount">0</span>
                <button class="dropdown__add" type="button"></button>
            </span>
        </span>
        <span class="dropdown__item">
            <b class="dropdown__title">Кровати</b>
            <span class="dropdown__count">
                <button class="dropdown__del" type="button"></button>
                <span class="dropdown__amount">0</span>
                <button class="dropdown__add" type="button"></button>
            </span>
        </span>
        <span class="dropdown__item">
            <b class="dropdown__title">Ванные комнаты</b>
            <span class="dropdown__count">
                <button class="dropdown__del" type="button"></button>
                <span class="dropdown__amount">0</span>
                <button class="dropdown__add" type="button"></button>
            </span>
        </span>
    </span>`
    );

    const dropdown = document.body.querySelector(".dropdown");
    const inputCoords = input.getBoundingClientRect();
    dropdown.style.left = inputCoords.left + "px";
    dropdown.style.top = inputCoords.bottom + pageYOffset + "px";
    dropdown.style.width = input.offsetWidth + "px";

    const dropdownItems = dropdown.querySelectorAll(".dropdown__item");
    
    dropdownItems.forEach(item => {
        const delButton = item.querySelector(".dropdown__del");
        delButton.addEventListener("click", subtractOne);

        const addButton = item.querySelector(".dropdown__add");
        addButton.addEventListener("click", addOne);
    });

    document.addEventListener("click", ({ target }) => {
        if (target != input && !target.closest(".dropdown")) applyChanges();
    });

    function hideDropdown() {
        dropdown.classList.add("dropdown_hidden");
    }

    function showDropdown() {
        dropdown.classList.remove("dropdown_hidden");
        const inputCoords = input.getBoundingClientRect();
        dropdown.style.left = inputCoords.left + "px";
        dropdown.style.top = inputCoords.bottom + pageYOffset + "px";
        dropdown.style.width = input.offsetWidth + "px";
    }

    function subtractOne({ target }) {
        const amount = target.nextElementSibling;

        if (amount.textContent == 0) return;

        amount.textContent -= 1;

        if (amount.textContent == 0) target.style = "";
    }

    function addOne({ target }) {
        const amount = target.previousElementSibling;
        amount.textContent = +amount.textContent + 1;

        const delButton = amount.previousElementSibling;
        delButton.style.opacity = "1";
    }

    function applyChanges() {
        let amountBedrooms = 0;
        let amountBeds = 0;
        let amountBathrooms = 0;

        for (let i = 0; i < dropdownItems.length; i++) {
            const title = dropdownItems[i].querySelector(".dropdown__title").textContent;
            const amount = +dropdownItems[i].querySelector(".dropdown__amount").textContent;

            if (title == "Спальни") amountBedrooms += amount;
            if (title == "Кровати") amountBeds += amount;
            if (title == "Ванные комнаты") amountBathrooms += amount;
        }

        if (amountBedrooms == 1) input.value = `${amountBedrooms} спальня, `;
        if (amountBedrooms >= 2 && amountBedrooms <= 4) input.value = `${amountBedrooms} спальни, `;
        if (amountBedrooms >= 5 || amountBedrooms == 0) input.value = `${amountBedrooms} спален, `;

        if (amountBeds == 1) input.value += `${amountBeds} кровать, `;
        if (amountBeds >= 2 && amountBeds <= 4) input.value += `${amountBeds} кровати, `;
        if (amountBeds >= 5 || amountBeds == 0) input.value += `${amountBeds} кроватей, `;

        if (amountBathrooms == 1) input.value += `${amountBathrooms} ванная комната`;
        if (amountBathrooms >= 2 && amountBathrooms <= 4) input.value += `${amountBathrooms} ванные комнаты`;
        if (amountBathrooms >= 5 || amountBathrooms == 0) input.value += `${amountBathrooms} ванных комнат`;

        dropdown.classList.add("dropdown_hidden");
    }
}

export { initGuestsDropdown, initComfortDropdown };
