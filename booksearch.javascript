<script>
let searchInputEle = document.getElementById("searchInput");
let searchResultsEle = document.getElementById("searchResults");
let messageEle = document.getElementById("message");
let spinnerEle = document.getElementById("spinner");
let headingEle = document.createElement("h1"); // Create the heading element

function createAndAppendSearchResults(search_results) {
    searchResultsEle.innerHTML = ""; // Clear previous search results
    if (search_results.length < 1) {
        messageEle.textContent = "No results";
    } else {
        messageEle.textContent = ""; // Clear any previous messages
        headingEle.textContent = "Popular Books"; // Set heading text
        searchResultsEle.appendChild(headingEle); // Append heading element
        for (let eachItem of search_results) {
            let title = eachItem.title;
            let image = eachItem.imageLink;
            let author = eachItem.author;
            let imageEle = document.createElement("img");
            imageEle.setAttribute("src", image);
            let textEle = document.createElement("p");
            textEle.textContent = author;
            searchResultsEle.appendChild(imageEle);
            searchResultsEle.appendChild(textEle);
            console.log(eachItem);
        }
    }
</script>

