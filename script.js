console.info("hiya! your javascript is working!")
console.info("^_^")

async function download() {
    let quoteNum = prompt("How many quotes do you want?")

    let api = "https://api.breakingbadquotes.xyz/v1/quotes/";
    api += quoteNum;
    console.info("Getting " + quoteNum + " quotes from api")
    const response = await fetch(api);
    const data = await response.json();
    // const quoteText = document.getElementById("quote");
    // const authorText = document.getElementById("author");
    const quoteBox = document.querySelector('.quotebox');

    quoteBox.innerHTML = "";
    for (const item of data) {
        // const quote = item.quote;
        // const author = item.author;
        // quoteText.innerHTML += quote;
        // authorText.innerHTML += "~ " + author;
        const quote = item.quote;
        const author = item.author;
        quoteBox.innerHTML +='<p id="quote" class="quote">' + quote + '</p>' + '<p id="author" class="author">~ ' + author + '</p>'
    }
    console.log("finished download")
}
download()