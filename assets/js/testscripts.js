fetch('https://67287885270bd0b975559810.mockapi.io/api/v1/task', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(tasks => {
    // Do something with the list of tasks
  }).catch(error => {
    // handle error
  })

  const newTask = {
    content: 'Check out mockapi.io',
    completed: false,
  };
  
  fetch('https://67287885270bd0b975559810.mockapi.io/api/v1/task', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(newTask)
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    // do something with the new task
  }).catch(error => {
    // handle error
  })


fetch('https://67287885270bd0b975559810.mockapi.io/api/v1/task/1', {
    method: 'PUT', // or PATCH
    headers: {'content-type':'application/json'},
    body: JSON.stringify({completed: true})
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    // Do something with updated task
  }).catch(error => {
    // handle error
  })


fetch('https://67287885270bd0b975559810.mockapi.io/api/v1/task/1', {
    method: 'DELETE',
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    // Do something with deleted task
  }).catch(error => {
    // handle error
  })


fetch('https://67287885270bd0b975559810.mockapi.io/api/v1/task/1', {
    method: 'DELETE',
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    // Do something with deleted task
  }).catch(error => {
    // handle error
  })