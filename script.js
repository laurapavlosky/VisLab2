
// loading data set 
let attractions;
fetch("./attractions.json")
    .then(response => response.json())
    .then(data => {
        attractions = data;
        renderBarChart(filterData("all"));     
    }
    );

function filterData(category) {
    // filter array by category
    if (category == "all") {
        var categoryArray = attractions;
    }
    else {
        var categoryArray = attractions.filter(function(a) {
            return a.Category == category;
        });
    }

    // sort array in descending order by # of visitors
    let ordered = categoryArray.sort(function(a,b){  
        return b.Visitors - a.Visitors;
    });

    // get first 5 rows
    return topFive = ordered.slice(0,5);
}


// event listener for dropdown menu 
let selectBox = document.querySelector("#attraction-category");
selectBox.addEventListener("change", function(e){
    let filtered = filterData(e.target.value);
    renderBarChart(filtered);
});
