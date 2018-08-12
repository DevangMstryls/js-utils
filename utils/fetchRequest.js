function fetchRequest(url, method, body) {

  // AJAX

  // $.ajax
  // ({
  //   url: url,
  //   type: method,
  //   dataType: 'JSON',
  //   data: body,
  //   success: function( __data )
  //   {
  //     if( __data.success === true )
  //     {

  //     }
  //     else if( __data.success === false )
  //     {

  //     }
  //   },
  //   error: function(e)
  //   {
  //     console.log(e);
  //   }
  // });

  // XHR

  // var request;
  // if (window.XMLHttpRequest) { // Mozilla, Safari, ...
  //   request = new XMLHttpRequest();
  // } else if (window.ActiveXObject) { // IE
  //   try {
  //     request = new ActiveXObject('Msxml2.XMLHTTP');
  //   }
  //   catch (e) {
  //     try {
  //       request = new ActiveXObject('Microsoft.XMLHTTP');
  //     }
  //     catch (e) { }
  //   }
  // }

  // request.open(method, url, true);
  // request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

  // var data = null;
  // if( method !== 'GET' && body ) {
  //   data = body;
  // }
  // request.send(data);

  // request.onreadystatechange = () => {
  //   if (request.readyState === 4) { // done
  //     if (request.status === 200) { // complete	
  //       console.log(request.responseText)
  //     }
  //   }
  // };

  // fetch

  let options = {
    method: method,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      "Accept": "application/json, text/javascript, */*;",
      "X-Requested-With": "XMLHttpRequest"
    },
  };

  var urlsearchparams = new URLSearchParams();

  for (const key in body) {
    if (body.hasOwnProperty(key)) {
      const value = body[key];
      urlsearchparams.append(key, value)
    }
  }

  if (body) {
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