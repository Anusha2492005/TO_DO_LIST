function addActivity() {
    let input = document.getElementById('activityInput');
    let display = document.getElementById('display');

    if (input.value.trim() !== "") {
        let item = document.createElement('li');
        item.textContent = input.value;
        display.appendChild(item);
        input.value = "";
    } else {
        alert("Please enter an activity.");
    }
}
