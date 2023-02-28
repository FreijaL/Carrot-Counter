
// SPOTIFY Api embedding.
const groupCounterContainer = document.querySelector('.group-counter-container');
const weeklyPointsContainer = document.querySelector('.weekly-points-container');




window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
        height: '400',
        width: '40%',
        uri: 'spotify:track:4T6FWA703h6H7zk1FoSARw'
      };
    let callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };



