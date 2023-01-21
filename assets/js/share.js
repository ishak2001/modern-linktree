const shareBtn = document.getElementById('share-button')
shareBtn.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      text: 'Schau dich doch mal auf meiner Webseite um: ',
      url: 'dein_link_zur_webseite'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    alert("Der aktuelle Browser unterstützt die Freigabefunktion nicht.")
  }
});