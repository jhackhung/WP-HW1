// for routing
function loadContent(page) {
  const contentDiv = document.getElementById("content");

  fetch(page + ".html") // 讀取對應的 HTML 檔案
    .then((response) => response.text()) // 取得 HTML 內容
    .then((data) => {
      console.log(data); // 在控制台中顯示載入的內容
      contentDiv.innerHTML = data; // 插入到頁面中
    })
    .catch((error) => {
      contentDiv.innerHTML = "<h1>頁面載入錯誤</h1><p>無法載入內容。</p>";
      console.error("Error loading page: ", error);
    });
}

function route() {
  const path = window.location.hash || "#";
  const page = path.substring(1);
  const mainContent = document.querySelector("main");
  const contentDiv = document.getElementById("content");
  if (page === "home" || page === "about" || page === "teacher") {
    loadContent(page);
    mainContent.style.display = "none";
  } else if (page === 'not-work') {
    window.location.hash = "";
    alert("此頁面尚未實作！");
  } 
  else {
    // loadContent("");
    mainContent.style.display = "block";
    contentDiv.innerHTML = "";
  }

  if (page === "teacher") {
    let script = document.createElement("script");
    script.src = "assets/teacher_data.js";
    document.body.appendChild(script);

    script = document.createElement("script");
    script.src = "assets/teacher.js";
    document.body.appendChild(script);
  }
}

document.addEventListener("DOMContentLoaded", route);
window.addEventListener("hashchange", route);

$(document).ready(function () {
  // Initialize main Carousel
  setInterval(function () {
    $("#mainCarousel").carousel("next");
  }, 3000);

  $("#search-addon").click(function () {
    alert("搜尋功能尚未實作！");
  });

  let images = [
    {
      src: "https://im.mgt.ncu.edu.tw/img/welcome/114%E5%B9%B4%E5%BA%A6%E5%AD%B8%E8%A1%93%E7%A0%94%E7%A9%B6%E7%8D%8E%20%E8%83%A1%E9%9B%85%E6%B6%B5%E6%95%99%E6%8E%88(banner).png",
      alt: "Main Visual 1",
    },
    {
      src: "https://im.mgt.ncu.edu.tw/img/welcome/114%E5%B9%B4%E5%BA%A6%E5%AD%B8%E8%A1%93%E7%A0%94%E7%A9%B6%E5%82%91%E5%87%BA%E7%8D%8E%20%E6%95%99%E5%B8%AB%E7%BE%A4%20(1920%20x%20581%20%E5%83%8F%E7%B4%A0).png",
      alt: "Main Visual 2",
    },
    {
      src: "https://im.mgt.ncu.edu.tw/img/welcome/2.png",
      alt: "Main Visual 3",
    },
    {
      src: "https://im.mgt.ncu.edu.tw/img/welcome/3.png",
      alt: "Main Visual 4",
    },
    {
      src: "https://im.mgt.ncu.edu.tw/img/welcome/%E7%B3%BB%E8%BE%A6%E6%A9%AB%E5%B9%85.png",
      alt: "Main Visual 5",
    },
  ];

  images.forEach(function (image, index) {
    let isActive = index === 0 ? "active" : "";
    let carouselItem = `
        <div class="carousel-item ${isActive}">
            <img src="${image.src}" class="d-block w-100" alt="${image.alt}" />
        </div>
        `;
    $("#mainCarousel .carousel-inner").append(carouselItem);

    let indicatorItem = `
            <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="${index}" class="${isActive}"></button>
        `;
    $("#mainCarousel .carousel-indicators").append(indicatorItem);
  });

  // for announcement
  var $tbody = $("#data-content");
  $tbody.empty();

  announcements.forEach(function (item) {
    var row =
      "<tr>" +
      "<td>" +
      item.category +
      "</td>" +
      "<td>" +
      item.title +
      "</td>" +
      "<td>" +
      item.attachment +
      "</td>" +
      "<td>" +
      item.date +
      "</td>" +
      "</tr>";
    $tbody.append(row);
  });

  // Add sticky class to navbar on scroll
  const $navbar = $("#navbar-top");
  const $toTop = $("#toTop");
  $toTop.hide();
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $navbar.addClass("sticky-nav");
      $toTop.show();
    } else {
      $navbar.removeClass("sticky-nav");
      $toTop.hide();
    }
  });

  $toTop.on("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // For simulating cookie acceptance
  $(".cookie-content").addClass("show");
  $(".accept-cookies").on("click", function () {
    $(".cookie-content").removeClass("show");
    setTimeout(function () {
      $(".cookie-content").remove();
    }, 500); // 0.5 seconds delay before removing the element
  });
});
