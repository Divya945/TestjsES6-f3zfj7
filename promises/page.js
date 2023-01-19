// async() and await()
async function fetchMethod() {
  try {
    let response = await fetch("https://api.github.com/users/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchMethod();