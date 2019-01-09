function get(url) {
  return fetch(url, {
    method: "GET",
    headers: headers,
  }).then(res => {
    return handleRes(url, res);
  }).catch(err => {
    console.log(err);
    return
  })
}

function post(url, data) {
  return fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  }).then(res => {
    return handleRes(url, res);
  }).catch(err => {
    console.log(err);
    return
  })
}

function handleRes(url, res) {
  if (res.status < 500) {
    return res.json();
  } else {
    console.log('error:' + res)
    return
  }
}

export { get, post }