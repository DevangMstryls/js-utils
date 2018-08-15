/**
 * Wrapper around the Fetch API
 *
 * @param {String} url      The url of the request
 * @param {String} method   Method of the request
 * @param {Object} body
 */
function fetchRequest(url, method = 'GET', body = null, xhr = true, headers = null) {

  let _defaultHeaders = {
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    "Accept": "application/json, text/javascript, */*;",
  };

  if (xhr) {
    _defaultHeaders['X-Requested-With'] = 'XMLHttpRequest';
  }

  let options = {
    method: method,
    headers: headers ? headers : _defaultHeaders,
  };

  if (body) {
    var urlsearchparams = new URLSearchParams();

    for (const key in body) {
      if (body.hasOwnProperty(key)) {
        const value = body[key];
        urlsearchparams.append(key, value)
      }
    }

    if (method.toUpperCase() === 'GET') {
      let _sep = url.includes('?') ? '&' : '?';
      url = url + _sep + urlsearchparams.toString();
    }

    if (!['GET', 'HEAD'].includes(method.toUpperCase())) {
      options['body'] = urlsearchparams;
    }
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
