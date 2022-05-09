const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClasses(); // to remove "non-active" class
        panel.classList.add("active"); // every click gets added to the list/each element expands
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}