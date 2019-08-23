const selectDropDown = document.querySelector("#categorySearch");

if (selectDropDown) {
  const category = selectDropDown.value;
  document.querySelector("#categoryButton").addEventListener("click", e => {
    e.preventDefault();
    fetch(`/quotes/searchcategory/${category}`).then(response =>
      console.log(response)
    );
  });
}
