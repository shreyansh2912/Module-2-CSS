
function input(name) {
    console.log(name.id);
    let text = document.getElementById("text").style.paddingTop = "10px"
    let pass = document.getElementById("passw").style.paddingTop = "10px"
    if (name.id == "span1") {  
        let span1 = document.getElementById("span1");
        console.log("h");
        span1.style.top = "140px"
        span1.style.fontSize = "16px"
    }
    else{
        let span1 = document.getElementById("span2");
        span1.style.top = "190px"
        span1.style.fontSize = "16px"
    }
}
function input2(name) {
    console.log(name.id);
    let text = document.getElementById("text2").style.paddingTop = "10px"
    // let pass = document.getElementById("passw").style.paddingTop = "10px"
    if (name.id == "span3") {  
        let span3 = document.getElementById("span3");
        span3.style.top = "310px"
        span3.style.fontSize = "16px"
    }else if(name.id == "span4"){
        let span4 = document.getElementById("span4");
        span4.style.top = "360px"
        span4.style.fontSize = "16px"
    }else if(name.id == "span5"){
        let span5 = document.getElementById("span5");
        span5.style.top = "400px"
        span5.style.fontSize = "16px"
    }else if(name.id == "span6"){
        let span6 = document.getElementById("span6");
        span6.style.top = "443px"
        span6.style.fontSize = "16px"
    }
}