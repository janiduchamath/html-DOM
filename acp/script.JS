function myFunction() {
    // Get and assign values from one node to another
    document.getElementById("result").innerHTML =
        document.getElementById("demo").textContent; // Retrieves text content of the title tag

    document.getElementById("result1").innerHTML =
        document.getElementById("demo").childNodes[0].nodeValue; // Alternate way to access the same content
}