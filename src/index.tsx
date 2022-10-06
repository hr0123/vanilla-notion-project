// 1. content에 슬래시 여부 -> popper display
const content = document.getElementById("content") as HTMLElement;
const popper = document.querySelector(".popper") as HTMLElement;

content.addEventListener("input", onChangeContent);
content.addEventListener("keypress", enterContent);

function onChangeContent() {
  content.innerText.lastIndexOf("/") === content.innerText.length - 1
    ? (popper.style.display = "block")
    : (popper.style.display = "none");
  content.innerText === "" && (popper.style.display = "none");
}

function enterContent(e: { key: string; preventDefault: () => void }) {
  if (e.key === "Enter") {
    // e?.preventDefault();
    console.log("ENTER");
  }
}

// 2. popper menu 선택에 따라 -> input placeholder, style 변동
const text = document.getElementById('Type "/" for commands') as HTMLElement;
const headingOne = document.getElementById("Heading 1") as HTMLElement;
const headingTwo = document.getElementById("Heading 2") as HTMLElement;
const headingThree = document.getElementById("Heading 3") as HTMLElement;
const list = document.getElementById("List") as HTMLElement;
// const menu = document.getElementsByClassName("menu");
const bullet = document.querySelector(".bullet") as HTMLElement;

text.addEventListener("click", onClickMenu);
headingOne.addEventListener("click", onClickMenu);
headingTwo.addEventListener("click", onClickMenu);
headingThree.addEventListener("click", onClickMenu);
list.addEventListener("click", onClickMenu);
// menu[0].addEventListener("click", onClickMenu);
// menu[1].addEventListener("click", onClickMenu);
// menu[2].addEventListener("click", onClickMenu);
// menu[3].addEventListener("click", onClickMenu);
// menu[4].addEventListener("click", onClickMenu);
// console.log(menu[0].id);

// (e.target = menu)
function onClickMenu(e: any) {
  popper.style.display = "none";
  content.innerText = "";
  content.ariaPlaceholder = e.target.id;
  e.target.id === "Heading 1"
    ? (content.style.fontSize = "32px")
    : e.target.id === "Heading 2"
    ? (content.style.fontSize = "28px")
    : e.target.id === "Heading 3"
    ? (content.style.fontSize = "22px")
    : (content.style.fontSize = "16px");
  e.target.id === "Heading 1"
    ? (content.style.fontWeight = "700")
    : e.target.id === "Heading 2"
    ? (content.style.fontWeight = "600")
    : e.target.id === "Heading 3"
    ? (content.style.fontWeight = "500")
    : (content.style.fontWeight = "400");
  e.target.id === "List"
    ? (bullet.style.display = "block")
    : (bullet.style.display = "none");
}
