const category = document.querySelector("#categorySearch").value;
console.log(category);

if (category) {
  document.querySelector("#categoryButton").addEventListener("click", e => {
    fetch(`/quotes?category=${category}`)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  });
}
