(function () {
    const form = document.querySelector("[data-search-filter-form]");
    if (!form) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const priceMinInput = form.querySelector('input[name="price__gte"]');
    const priceMaxInput = form.querySelector('input[name="price__lte"]');
    const presetRadios = form.querySelectorAll("[data-price-preset]");

    form.querySelectorAll("[data-filter-param]").forEach(function (input) {
        const value = params.get(input.name);
        if (value !== null && value !== "") {
            input.value = value;
        }
    });

    function syncPricePresetFromInputs() {
        if (!priceMinInput || !priceMaxInput) {
            return;
        }

        const min = priceMinInput.value.trim();
        const max = priceMaxInput.value.trim();
        let matched = false;

        presetRadios.forEach(function (radio) {
            const presetMin = radio.dataset.priceMin || "";
            const presetMax = radio.dataset.priceMax || "";

            if (radio.value === "") {
                if (!min && !max) {
                    radio.checked = true;
                    matched = true;
                }
                return;
            }

            if (min === presetMin && max === presetMax) {
                radio.checked = true;
                matched = true;
            }
        });

        if (!matched && presetRadios.length) {
            presetRadios[0].checked = true;
        }
    }

    function applyPricePreset(radio) {
        if (!priceMinInput || !priceMaxInput || !radio) {
            return;
        }

        if (radio.value === "") {
            return;
        }

        priceMinInput.value = radio.dataset.priceMin || "";
        priceMaxInput.value = radio.dataset.priceMax || "";
    }

    presetRadios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            if (radio.checked) {
                applyPricePreset(radio);
            }
        });
    });

    if (priceMinInput) {
        priceMinInput.addEventListener("input", syncPricePresetFromInputs);
    }
    if (priceMaxInput) {
        priceMaxInput.addEventListener("input", syncPricePresetFromInputs);
    }

    syncPricePresetFromInputs();

    form.addEventListener("submit", function () {
        form.querySelectorAll("[data-filter-param]").forEach(function (input) {
            if (input.value.trim() === "") {
                input.removeAttribute("name");
            }
        });

        presetRadios.forEach(function (radio) {
            radio.removeAttribute("name");
        });
    });
})();
