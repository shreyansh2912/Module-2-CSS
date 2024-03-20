
$(document).ready(function () {
    $("button").click(function () {
        $("body").toggleClass("dark-mode");
        let button = $("button");
        button.toggleClass("dark-mode")
        if(button.text() == "☀️Light Mode" ){
            button.text("🌥️Dark Mode");
        }else{
            button.text("☀️Light Mode");
        }
    })
})