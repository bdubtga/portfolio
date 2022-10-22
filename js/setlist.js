function getset() {
    fetch('https://api.setlist.fm/rest/1.0/setlist/3b141db', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'x-api-key': 'LJHLWRJzSyx7X7Yo_FpzeLdDaoeG8ImGy0DN'
        },
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:');
      })
      .catch((error) => {
        console.error('Error:');
      });
}