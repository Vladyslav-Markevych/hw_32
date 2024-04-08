const images = [
  {
    src: "http://www.avatava.org/pics100/animals/avatar-1.jpg",
    alt: "cat",
  },
  {
    src: "http://www.avatava.org/pics100/animals/avatar-2.jpg",
    alt: "tiger",
  },
  {
    src: "http://www.avatava.org/pics100/animals/avatar-3.jpg",
    alt: "hippopotamus",
  },
  {
    src: "http://www.avatava.org/pics100/animals/avatar-4.jpg",
    alt: "ferret",
  },
  {
    src: "http://www.avatava.org/pics100/animals/avatar-5.jpg",
    alt: "tiger rabbit",
  },
  {
    src: "http://www.avatava.org/pics100/animals/avatar-6.jpg",
    alt: "cat",
  },
  {
    src: "http://www.avatava.org/pics100/animals/avatar-7.jpg",
    alt: "panther",
  },
  {
    src: "http://www.avatava.org/pics100/animals/avatar-8.jpg",
    alt: "cat",
  },
  {
    src: "http://www.avatava.org/pics100/animals/avatar-9.jpg",
    alt: "cartoon cat",
  },
  {
    src: "http://www.avatava.org/pics100/animals/avatar-10.jpg",
    alt: "chickens",
  },
  {
    src: "http://www.avatava.org/pics100/animals/avatar-11.jpg",
    alt: "cat",
  },
  {
    src: "http://www.avatava.org/pics100/animals/avatar-12.jpg",
    alt: "eagle",
  },
  {
    src: "http://www.avatava.org/pics100/animals/avatar-13.jpg",
    alt: "leopard",
  },
  {
    src: "http://www.avatava.org/pics100/animals/avatar-14.jpg",
    alt: "cat",
  },
  {
    src: "http://www.avatava.org/pics100/animals/avatar-15.jpg",
    alt: "dog",
  },
  {
    src: "http://www.avatava.org/pics100/animals/avatar-16.jpg",
    alt: "squirrel",
  },
];

function addImage() {
  let wrapper = document.createElement("div");
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

addImage();

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
  document.querySelector("div").append(fragmentRandom);
}

firstDiv = document.querySelector("div");
firstDiv.addEventListener("click", random);
