console.info("hiya! your javascript is working!")
console.info("^_^")



async function download() {
    const api = "https://api.breakingbadquotes.xyz/v1/quotes";
    const response = await fetch(api);
    const data = await response.json();
    const quoteText = document.getElementById("quote");
    const authorText = document.getElementById("author");

    quoteText.innerHTML = "";
    for (const item of data) {
        const quote = item.quote;
        const author = item.author;
        quoteText.innerHTML = quote;
        authorText.innerHTML = "~ " + author;
    }
    console.log("finished download")
}
download()