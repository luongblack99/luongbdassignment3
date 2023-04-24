function handleSubmit() {
  // lay gia tri cua input email va chuyen sang in thuong
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // lay element cua the p hien thi loi
  const errorEmail = document.getElementById("error-email");
  // dieu kien de la mot email
  const checkMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log("check value email", emailValue);
  // dung match de kiem tra voi email vua nhap
  const check = emailValue.match(checkMail);
  console.log("email", check);
  // lay phan chua thong tin user
  const sectionContent = document.querySelector(".t-t-2-1");
  // console.log("check section", sectionContent);

  //lay element de kiem soat submit
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "vui long nhap lai email";
  }
}
// const widthf = 1170;
// const width = $(window).width();
// if (width >= widthf) {
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view");
  // const lessMore = emlement.querySelector(".less");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view");

  // const lessMore = emlement.querySelector(".less");
  viewMore.style.display = "none";
}
// }
// function handleViewMore(element) {
//   const parentElement = element.closest(".parent");
//   const viewMore = parentElement.querySelector(".control-view");
//   const sectionContent = parentElement.querySelectorAll(".t-t-4-1");
//   if (viewMore.classList.value.includes("control-view")) {
//     sectionContent.forEach((element) => {
//       element.style.display = "block";
//     });
//     viewMore.classList.remove("view");
//     viewMore.classList.add("less-more");
//     viewMore.innerHTML = "less more";
//   } else {
//     sectionContent.forEach((element) => {
//       element.style.display = "none";
//     });
//     viewMore.classList.remove("less");
//     viewMore.classList.add("view");
//     viewMore.innerHTML = "view more";
//   }
//   console.log(viewMore.classList);
// }

const showMoreBtn = document.querySelector(".control-view");
const text = document.querySelector(".t-t-4-1");
showMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (showMoreBtn.innerText === "Read More") {
    showMoreBtn.innerText = "Read Less";
  } else {
    showMoreBtn.innerText = "Read More";
  }
});

const showMoreBtn1 = document.querySelector(".control-view-1");
const text1 = document.querySelector(".t-t-t-1");
showMoreBtn1.addEventListener("click", (e) => {
  text1.classList.toggle("show-more-1");
  if (showMoreBtn1.innerText === "Read More") {
    showMoreBtn1.innerText = "Read Less";
  } else {
    showMoreBtn1.innerText = "Read More";
  }
});
const showMoreBtn2 = document.querySelector(".control-view-2");
const text2 = document.querySelector(".t-t-t-2");
showMoreBtn2.addEventListener("click", (e) => {
  text2.classList.toggle("show-more-2");
  if (showMoreBtn2.innerText === "Read More") {
    showMoreBtn2.innerText = "Read Less";
  } else {
    showMoreBtn2.innerText = "Read More";
  }
});

const showMoreBtn3 = document.querySelector(".control-view-3");
const text3 = document.querySelector(".t-t-t-3");
showMoreBtn3.addEventListener("click", (e) => {
  text3.classList.toggle("show-more-3");
  if (showMoreBtn3.innerText === "Read More") {
    showMoreBtn3.innerText = "Read Less";
  } else {
    showMoreBtn3.innerText = "Read More";
  }
});
const showMoreBtn4 = document.querySelector(".control-view-4");
const text4 = document.querySelector(".t-t-t-4");
showMoreBtn4.addEventListener("click", (e) => {
  text4.classList.toggle("show-more-4");
  if (showMoreBtn4.innerText === "Read More") {
    showMoreBtn4.innerText = "Read Less";
  } else {
    showMoreBtn4.innerText = "Read More";
  }
});
const showMoreBtn5 = document.querySelector(".control-view-5");
const text5 = document.querySelector(".t-t-t-5");
showMoreBtn5.addEventListener("click", (e) => {
  text5.classList.toggle("show-more-5");
  if (showMoreBtn5.innerText === "Read More") {
    showMoreBtn5.innerText = "Read Less";
  } else {
    showMoreBtn5.innerText = "Read More";
  }
});

// if (handleViewMore) {
//   viewMore.innerHTML = "less more";
// }
