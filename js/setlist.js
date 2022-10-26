function getset() {
    fetch('https://setlist.benjiwallis.workers.dev/', {
        method: 'GET',
        headers: {
          'id': '3b141db', // Set the id/that end part of the URL her
        },
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
}