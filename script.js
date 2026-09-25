const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

cards.forEach((card) => {
    observer.observe(card);
});


// Numbers
const counters = document.querySelectorAll(".counter");

function startCounters() {
    counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target"));

        let number = 0;

        const timer = setInterval(() => {
            number++;

            counter.innerText = number;

            if (number >= target) {
                clearInterval(timer);
                counter.innerText = target + "+";
            }
        }, 30);
    });
}

document.addEventListener("DOMContentLoaded", () => {

    const buyButtons = document.querySelectorAll(".card button");

    buyButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const card = button.closest(".card");
            const productName = card.querySelector("h3").textContent;

            const popup = document.createElement("div");

            popup.className = "buy-popup";

            popup.innerHTML = `
                <div class="popup-box">
                    <span class="popup-close">&times;</span>
                    <h2>🛍️ ${productName}</h2>
                    <p>Thanks for choosing this product!</p>
                    <button class="popup-ok">Continue</button>
                </div>
            `;

            document.body.appendChild(popup);

            popup.querySelector(".popup-close").onclick = () => {
                popup.remove();
            };

            popup.querySelector(".popup-ok").onclick = () => {
                popup.remove();
            };

        });

    });

});
const darkButton = document.createElement("button");

darkButton.innerText = "🌙 Dark Mode";

darkButton.style.position = "fixed";
darkButton.style.bottom = "20px";
darkButton.style.right = "20px";
darkButton.style.zIndex = "9999";
darkButton.style.padding = "12px 18px";
darkButton.style.border = "none";
darkButton.style.borderRadius = "25px";
darkButton.style.cursor = "pointer";

document.body.appendChild(darkButton);

darkButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkButton.innerText = "☀️ Light Mode";
    } else {
        darkButton.innerText = "🌙 Dark Mode";
    }
});