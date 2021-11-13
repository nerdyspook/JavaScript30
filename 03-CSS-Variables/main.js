const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
    const suffix = this.dataset.sizing || ""; // adds px or nothing at the end
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // returns the Element that is the root element of the document
}

inputs.forEach(input => {
    input.addEventListener("change", handleUpdate);
});
inputs.forEach(input => {
    input.addEventListener("mousemove", handleUpdate);
});