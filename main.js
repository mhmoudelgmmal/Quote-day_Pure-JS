var q = document.getElementById("quote");
var qte = document.getElementById("qte");
var quotes =[{qote:'\“Two things are infinite: the universe and human stupidity;and I\'m not sure about the universe.\”',authr:"― Albert Einstein"},
    {qote:"\“So many books, so little time.\”",authr:"― Frank Zappa"},
    {qote:"\“A room without books is like a body without a soul.\”",authr:"― Marcus Tullius Cicero"},
    {qote:"\“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.\”",authr:"― Bernard M. Baruch"},
    {qote:"\“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.\”",authr:"― William W. Purkey"}]
function getQuote(){
    var num = Math.floor(Math.random()*5);
q.innerHTML = quotes[num].qote;
qte.innerHTML = quotes[num].authr;
}