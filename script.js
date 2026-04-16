// 📞 Call Button Function
document.querySelector(".btn").addEventListener("click", function () {
    window.location.href = "tel:9783138686";
});


// 📚 Class Box Click Effect
let classes = document.querySelectorAll(".class-box");

classes.forEach(function(box) {
    box.addEventListener("click", function () {
        alert("You clicked on " + box.innerText);
    });
});


// 👨‍🏫 Staff Card Click
let staff = document.querySelectorAll(".staff-card");

staff.forEach(function(card) {
    card.addEventListener("click", function () {
        alert("Teacher: " + card.innerText);
    });
});
