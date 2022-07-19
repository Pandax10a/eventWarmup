let h1_event = document.querySelector(`#hover_me`);

let header_event = document.querySelectorAll(`header`);
h1_event.addEventListener(`mouseover`, add_h3);

function add_h3(details) {
    // details[`target`].insertAdjacentHTML(`afterend`, `<h3 id = "to_remove"> secret hover!</h3>`)
    h1_event.insertAdjacentHTML(`afterend`, `<h3 id ="testing">Secret hover!</h3>`);
}

function remove_h3() {
    let h3_event = document.querySelector(`h3`);
    h3_event.remove();
    // h1_event.insertAdjacentHTML(`beforebegin`, `<h1>hover me</h1>`);
}

h1_event.addEventListener(`mouseleave`, remove_h3);

