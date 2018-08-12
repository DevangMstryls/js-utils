/**
 * Wrapper around the Fetch API
 * 
 * @param {String} url      The url of the request
 * @param {String} method   Method of the request
 * @param {Object} body     
 */
function fetchRequest(url, method = 'GET', body = null) {
  
  let options = {
    method: method,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      "Accept": "application/json, text/javascript, */*;",
      "X-Requested-With": "XMLHttpRequest",
    },
  };

  if (body && !['GET', 'HEAD'].includes(method.toUpperCase())) {
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

/* 
  References: 
    https://gist.github.com/justsml/529d0b1ddc5249095ff4b890aad5e801
    https://flaviocopes.com/fetch-api/
    https://github.github.io/fetch/
*/