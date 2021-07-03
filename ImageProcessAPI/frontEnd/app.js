const SERVER = 'http://localhost:8000';

function defaultFetchOpts() {
    return {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': SERVER,
      },
    };
  }
  

const getImage = async (fileName,width,height) => {
  try {
    await fetch(`${SERVER}/api/images?filename=${fileName}&width=${width}&height=${height}`, {
        method: 'GET',
        ...defaultFetchOpts()
    })
      .then(res => res.json)
      .then(data => console.log(data));
  } catch(e) {
      console.error(e);
  }
};

getImage('flower', 200, 200);