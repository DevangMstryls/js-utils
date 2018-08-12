function fetchRequest(url, method, body) {
  
  let options = {
    method: method,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      "Accept": "application/json, text/javascript, */*;",
      "X-Requested-With": "XMLHttpRequest",
    },
  };

  if (body) {
    var urlsearchparams = new URLSearchParams();

    for (const key in body) {
      if (body.hasOwnProperty(key)) {
        const value = body[key];
        urlsearchparams.append(key, value)
      }
    }

    options['body'] = urlsearchparams;
  }

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        console.log('Error', e);
        reject(e);
      });
  });
}

export default fetchRequest;