// navbar
let menu_btn = document.querySelector(".menu-button");
let bar = document.querySelector(".bar"); //side bar
let main = document.querySelector("main");

menu_btn.addEventListener("click", () => {
    bar.classList.toggle("active");

    if (bar.matches(".active")) {
        main.style.marginLeft = "100px";
    }
    else {
        main.style.marginLeft = "250px";
    }
});

// aside
let search_box1 = document.querySelector(".search-kk");
let search_box2 = document.querySelector(".search_box")
let seacrh = document.querySelectorAll(".aside-search");
Array.from(seacrh).forEach((item) => {

    item.addEventListener("click", () => {
        search_box2.style.display = "block";
        search_box1.classList.toggle("search_class");
    })
})

// redirecting to login page
let acc = document.querySelector(".acc");
acc.addEventListener("click", () => {

    window.location.href = "login.html";
})

// add button






let add_click = document.querySelectorAll(".add_button");
Array.from(add_click).forEach((items) => {
    items.addEventListener("click", () => {
        items.style.backgroundColor = "blue";
        items.innerHTML = `
            <div class="kartik">
                <button class= "minus">-</button>
                <p><span id = "count">1</span></p>
                <button class= "plus">+</button>
            </div>
            `

        let num = 0;
        document.querySelector(".minus").addEventListener("click", () => {

            num--;
            let count = document.getElementById("count");
            count.innerText = num;
        })
        document.querySelector(".plus").addEventListener("click", () => {
            num++;
            let count = document.getElementById("count");
            count.innerText = num;
        })
    })
})
