import scrollReveal from "scrollreveal";


const sectList = ["#home", "#mobile", "#code", "#real", "#connect"]

const reveal = ()=>{
    sectList.forEach(function(sect){
        scrollReveal().reveal(sect, { delay: 150, reset: true});
     })
}

module.exports = reveal;