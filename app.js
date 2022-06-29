//setup date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
// =============== navbar ===============
// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const navList = document.getElementById("nav-list");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
// close nav after clicking links
navList.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

// =============== 自动生成card ===============
const htmlContainer = document.getElementById("htmlContainer");
const javascriptContainer = document.getElementById("javascriptContainer");
const nodeContainer = document.getElementById("nodeContainer");
const reactContainer = document.getElementById("reactContainer");

window.addEventListener("DOMContentLoaded", function () {
  //html&CSS
  const htmlItems = filterItemsByTech(projects, "HTML&CSS");
  let htmlDisplay = displayItems(htmlItems);
  htmlContainer.innerHTML = htmlDisplay;
  //javascript
  const jsItems = filterItemsByTech(projects, "JavaScript");
  let jsDisplay = displayItems(jsItems);
  javascriptContainer.innerHTML = jsDisplay;
  //node
  const nodeItems = filterItemsByTech(projects, "Node");
  let nodeDisplay = displayItems(nodeItems);
  nodeContainer.innerHTML = nodeDisplay;
  //react
  const reactItems = filterItemsByTech(projects, "React");
  let reactDisplay = displayItems(reactItems);
  reactContainer.innerHTML = reactDisplay;
});

// =============== functions ===============
function filterItemsByTech(items, condition) {
  return items.filter(function (item) {
    return item.tech === `${condition}`;
  });
}
function displayItems(arrayName) {
  let newName = arrayName.map(function (item) {
    return `        <article class="single-card">
          <div class="img-container">
            <img class="card-img" src=${item.image} alt=${item.urlName} />
          </div>
          <div class="content-container">
          <h4>${item.name}</h4>
          <p><span class="strong">网页介绍：</span>${item.intro}</p>
          <p>
            <span class="strong">在线地址：</span
            ><a
              class="url"
              href=${item.link}
              >${item.urlName}</a>
          </p>
          <p>
            <span class="strong">技术总结：</span><br />
            ${item.summary}
          </p>
          </div>
        </article>`;
  });
  return (newName = newName.join(""));
}
