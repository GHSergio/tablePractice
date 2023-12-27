const tableContent = document.querySelector(".table-content");
const iconWrapper = document.querySelector(".icon-wrapper");
const titleCheckbox = document.getElementById("checkboxId");

//template literals
(function renderTableContent() {
  tableContent.innerHTML = "";
  for (let i = 1; i <= 20; i++) {
    let rawHTML = `
                       <div class="table-content-wrapper" data-id=${i}>
                <tr class="table-row">
                  <th class="table-content-checkbox">
                    <input type="checkbox" class="table-checkbox" />
                  </th>
                  <th class="table-content-id"><span>ID</span></th>
                  <th class="table-content-name"><span>Name</span></th>
                  <th class="table-content-advertiser">
                    <span class="advertiser"
                      >Advertiser
                      <p class="group">group</p></span
                    >
                  </th>
                  <th class="table-content-description">Description</th>
                  <th class="table-content-price">
                    <span class="price">Price</span>
                  </th>
                  <th class="table-content-startTime">
                    <span class="start-time">Start Time</span>
                  </th>
                  <th class="table-content-endTime">
                    <span class="end-time">End Time</span>
                  </th>
                  <th class="table-content-actions">
                    <img src="./icon/menu.svg" alt="" class="menu" data-id="${i}" />
                    <div class="menu-content hidden" data-id="${i}" id="action__menu_1">
                      <div class="menu-item">
                        <img
                          src="./icon/duplicate.svg"
                          alt="duplicate"
                          class="menu-img"
                        /><span class="menu-text">Duplicate</span>
                      </div>
                      <div class="menu-item">
                        <img
                          src="./icon/edit.svg"
                          alt="edit"
                          class="menu-img"
                        /><span class="menu-text">Edit</span>
                      </div>
                      <div class="menu-item">
                        <img
                          src="./icon/delete.svg"
                          alt="delete"
                          class="menu-img"
                        /><span class="menu-text">Delete</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </div>
    `;
    tableContent.innerHTML += rawHTML;
  }
})();

// //click icon --> active

const icons = document.querySelector(".icons");
//取得.icon-item, click找到最近的icon-item = target

const iconActive = function (e) {
  const clickedIconItem = e.target.closest(".icon-item");
  if (clickedIconItem) {
    const iconItems = icons.querySelectorAll(".icon-item");
    iconItems.forEach((icon) => {
      icon.classList.remove("active");
    });
    clickedIconItem.classList.add("active");
  }
};

// 取得所有的 checkbox
const tableCheckboxes = document.querySelectorAll(".table-checkbox");

const checkedToggle = function () {
  // 取得 checkbox 所在的 row
  const row = this.closest(".table-content-wrapper");
  // 如果 checkbox 被選取，則添加 checked class，否則移除
  if (row) {
    if (this.checked) {
      row.classList.add("checked");
    } else {
      row.classList.remove("checked");
    }
  }
};

const checkAllToggle = function () {
  const isChecked = titleCheckbox.checked;
  tableCheckboxes.forEach((checkbox) => {
    checkbox.checked = isChecked;
    // 取得 checkbox 所在的 row
    const row = checkbox.closest(".table-content-wrapper");
    // 如果 checkbox 被選取，則添加 checked class，否則移除
    if (row) {
      if (isChecked) {
        row.classList.add("checked");
      } else {
        row.classList.remove("checked");
      }
    }
  });
};

// 取得所有的 menu-img
const menuIcons = document.querySelectorAll(".menu");
const menuContent = document.querySelectorAll(".menu-content");
const menuToggle = function (e) {
  // 使用 dataset.id 來識別對應的 menuContent
  const menuId = e.target.dataset.id;
  const clickedMenuContent = document.querySelector(
    `.menu-content[data-id="${menuId}"]`
  );

  // 如果找到對應的 menuContent，就 toggle hidden
  if (clickedMenuContent) {
    clickedMenuContent.classList.toggle("hidden");
  }

  // 除了被點擊的那個，將其他的 menuContent 隱藏
  menuContent.forEach((content) => {
    if (
      content !== clickedMenuContent &&
      !content.classList.contains("hidden")
    ) {
      content.classList.add("hidden");
    }
  });
};

// dark mode
const darkModeToggle = document.getElementById("dark__mode__toggle");
// dark mode toggle handler
const darkModeToggleHandler = (event) => {
  const theme = event.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
};

// // iconActive
icons.addEventListener("click", iconActive);

// checkedToggle
tableCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", checkedToggle);
});
// checkAllToggle
titleCheckbox.addEventListener("change", checkAllToggle);
//menuToggle
menuIcons.forEach((menuIcon) => {
  menuIcon.addEventListener("click", menuToggle);
});
//darkModeToggle
darkModeToggle.addEventListener("change", darkModeToggleHandler);
