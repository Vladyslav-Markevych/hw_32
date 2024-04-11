let categories = document.querySelector("#categories");
console.log(`Number of Categories: ${categories.childElementCount}
-------------`);

function allCategory() {
  let item = categories.querySelectorAll(".item");
  item.forEach((elem) => {
    let nameCategory = elem.querySelector("h2").textContent;
    let countItem = elem.querySelector("ul").childElementCount;
    let longest = "";
    elem.querySelectorAll("ul li").forEach((element) => {
      if (element.textContent.length > longest.length) {
        longest = element.textContent;
      }
    });

    console.log(`Category: ${nameCategory}`);
    console.log(`Elements: ${countItem}`);
    console.log(`LongestElement: ${longest}`);
    console.log(`---------`);
  });
}
allCategory();
