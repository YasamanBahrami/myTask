let page = 1;

function loadUsers() {
  fetch(
    `https://book.afarokhru.ir/api/v1/admin/books?api_token=XWIEW9EXAMnxbhmgWVBCd7QEBF4e11uULvj1Tp2rxRNtQAijnfdMCNQxhkFfwEvmmruJZOS7PVFfk775hmgyqgJA6NbR3kZUVZWz&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => {
      let books = data.data;
      let list = "";

      for (let i = 0; i < books.length; i++) {
        list += `
                <tr>
                    <td>
                    ${books[i].id}
                    </td>
                    <td>
                        <img src=""
                            alt="book-img" title="contact-img" class="rounded me-3"
                            height="48">
                            
                        <p class="m-0 d-inline-block align-middle font-16">
                            <a href="apps-ecommerce-products-details.html"
                                class="text-body">${books[i].persian_name}</a>
                                
                        </p>
                    </td>
                    <td>
                    ${books[i].english_name}
                    </td>
                    <td>
                    ${books[i].writer}
                    </td>
                    <td>
                    ${books[i].translator}
                    </td>
                    <td>
                    ${books[i].category}
                    </td>
                    <td>
                    ${books[i].summary}
                    </td>
                    <td>
                    ${books[i].slug}
                    </td>
                    <td >
                     ${toggle()}
                    </td>
                    <td>
                    ${books[i].created_at}
                    </td>
                    <td>
                    ${books[i].updated_at}
                    </td>

                    <td class="table-action">
                        <a href="javascript:void(0);" class="action-icon"> <i
                                class="mdi mdi-eye"></i></a>
                        <a href="#modal" class="action-icon edit" title=${
                          books[i].id
                        }> <i
                                class="fa-solid fa-pen-to-square" data-bs-toggle="modal"
                                data-bs-target="#exampleModal"></i></a>
                        <a href="javascript:void(0);" class="action-icon"> <i
                                class="fa-solid fa-trash" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"></i></a>
                    </td>
                </tr>`;

        function toggle() {
          if (books[i].status == 0) {
            return ` <div class="form-check form-switch mb-1 ">
                    <input class="form-check-input" type="checkbox" name="color-scheme-mode" value="dark"
                        id="dark-mode-check togel" ${books[i].slug}>
                    <label class="form-check-label" for="dark-mode-check"  ></label>
                </div>`;
          } else {
            return `   <div class="form-check form-switch mb-1 a">
                   <input class="form-check-input" type="checkbox" name="color-scheme-mode" value="light"
                       id="light-mode-check togel" checked=""  data-slug=${books[i].slug}>
                   <label class="form-check-label" for="light-mode-check" ></label>
               </div>`;
          }
        }
      }

      document.getElementById("book-list").innerHTML = list;
    });
}

document.getElementById("next-page").addEventListener("click", function () {
  page++;
  loadUsers();
});
document.getElementById("perv-page").addEventListener("click", function () {
  page--;
  loadUsers();
});
loadUsers();

changeStatus();
function changeStatus() {
  let toggle = document.querySelectorAll('input[type="checkbox"]');
  toggle.forEach((item) => {
    item.addEventListener("click", () => {
      let slug = item.dataset.slug;
      console.log(slug);
      var data = new FormData();
      data.append("english_name", "Hi");
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });

      xhr.open(
        "GET",
        `https://book.afarokhru.ir/api/v1/admin/books/changeStatus/${slug}?api_token=TAGWnBYIUlfo6pDdZ7VUEye5SMN4ikNmm6krXCyaGs6TrjRy1YOQ72vQGzbnsPQYNzG266oKkPBs49RyVxRH5AWig9XmNgOJSoId`
      );
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("cache-control", "no-cache");
      xhr.setRequestHeader(
        "postman-token",
        "3b5451a8-e6b2-12bf/7e48-4d6810412b59"
      );

      xhr.send(data);
    });
  });
}
