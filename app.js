const tableContent = document.querySelector(".table-content");
const iconWrapper = document.querySelector(".icon-wrapper");
const checkbox = document.getElementById("checkboxId");

function renderTableContent(n) {
  tableContent.innerHTML = "";
  for (let i = 0; i < n; i++) {
    let rawHTML = `
                  <div class="content-wrapper">
                <input type="checkbox" class="content-input" />
                <div class="contents">
                  <tr>
                    <td class="table-title-content">
                      <span class="id">1</span>
                      <span class="name">Christmas 2020</span>
                      <span class="advertiser">Food Market</span>
                      <span class="description"
                        >holiday night during chr...</span
                      >
                      <span class="price">$2000</span>
                      <span class="start-time">2020/12/24 19:30</span>
                      <span class="end-time">2021/01/02 23:00</span>
                      <div class="action-panel">
                        <div class="action">
                          <input type="checkbox" class="action-toggle" id="action-toggle" />
                          <ul class="action-list">
                              <li class="action-list-item"><img
                            class="action-item"
                            src="./icon/duplicate.svg"
                            alt="duplicate"
                          /><span>duplicate</span>
                              <li class="action-list-item"><img class="action-item" src="./icon/edit.svg"
                          alt=edit"" />
                          <span>edit</span></li>
                              <li class="action-list-item"><img
                            class="action-item"
                            src="./icon/delete.svg"
                            alt="delete"
                          /><span>delete</span></li>
                          </ul>
                          <label for="action-toggle" class="action-toggle-label">
                            <span class="hamburger"></span>
                          </label>
                       
                      </div>
                    </td>
                  </tr>
                </div>
              </div>
    `;
    tableContent.innerHTML += rawHTML;
  }
}
renderTableContent(2);

const contentInput = document.querySelectorAll(".content-input");

document.addEventListener("DOMContentLoaded", function () {
  const contents = document.querySelectorAll(".contents");

  contents.forEach((content, index) => {
    if (index % 2 === 0) {
      content.classList.add("even");
    } else {
      content.classList.add("odd");
    }
  });
});

checkbox.addEventListener("click", () => {
  const isChecked = checkbox.checked;

  contentInput.forEach((input) => {
    input.checked = isChecked;
  });
});

iconWrapper.addEventListener("click", (e) => {
  const icons = iconWrapper.querySelectorAll(".icon-item");
  if (e.target.closest(".icon-item")) {
    icons.forEach((icon) => {
      icon.classList.remove("active");
    });
    e.target.closest(".icon-item").classList.add("active");
  }
});
