const images = [
  {
    src: "https://avotar.ru/avatar/krutye/100/76.jpg",
    alt: "cat",
  },
  {
    src: "https://avotar.ru/avatar/krutye/100/79.jpg",
    alt: "boy",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/10.jpg",
    alt: "monkey",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/7.jpg",
    alt: "frog",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/41.jpg",
    alt: "cow",
  },
  {
    src: "https://avotar.ru/avatar/krutye/100/78.jpg",
    alt: "cat",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/57.jpg",
    alt: "dog",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/63.jpg",
    alt: "hamster",
  },
  {
    src: "https://avotar.ru/avatar/minony/100/13.jpg",
    alt: "minion",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/112.jpg",
    alt: "owl",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/116.jpg",
    alt: "cat",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/128.jpg",
    alt: "eagle",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/12.jpg",
    alt: "leopard",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/6.jpg",
    alt: "cat",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/5.jpg",
    alt: "dog",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/30.jpg",
    alt: "squirrel",
  },
];

function addImages() {
  let wrapper = document.createElement("div");
  wrapper.id = "div";
  const fragment = new DocumentFragment();
  images.forEach((elem) => {
    let img = new Image();
    img.src = elem.src;
    img.alt = elem.alt;
    fragment.append(img);
  });

  wrapper.append(fragment);

  wrapper.style.cssText =
    "display: grid; grid-template-columns: repeat(4, 1fr);  grid-gap: 10px; max-width: 1000px; margin: 0 auto";

  document.body.append(wrapper);
}

addImages();

// 3
function getRandomInt() {
  return Math.floor(Math.random() * 10);
}
function random() {
  const fragmentRandom = new DocumentFragment();
  let clone = firstDiv.cloneNode(true).childNodes;

  while (clone.length > 0) {
    let randomka = getRandomInt();
    if (clone[randomka]) {
      firstDiv.removeChild(firstDiv.childNodes[randomka]);
      fragmentRandom.append(clone[randomka]);
    }
  }
  document.getElementById("div").append(fragmentRandom);
}

let firstDiv = document.querySelector("div");
firstDiv.addEventListener("click", random);
