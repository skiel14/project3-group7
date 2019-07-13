// Initialize the Noteflight client API.
NFClient.init(function(info) {
  alert("Noteflight API is ready, version " + info.version);
});


var options = {
  host: 'www.noteflight.com',
  width: 800,
  height: 400,
  viewParams: {
    scale: 1.5,
    role: 'template',
    app: 'html5'
  }
}
var scoreView = new NFClient.ScoreView('score1', 'fcfd6d0bc0770f67cdbe1b8129456521fec090a0', options);


