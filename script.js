const urls = [
  "https://swapi.py4e.com/api/planets",
  "https://swapi.py4e.com/api/starships",
]

const getData = async function() {
  try {
    const [ planets, starships ] = await Promise.all(
      urls.map(async(url) => {
        const response = await fetch(url);
        return response.json();
      }),
    );
    console.log("planets", planets);
  }
  catch(err) 
  {
    console.log('Something went wrong', err);
  }
}

getData();