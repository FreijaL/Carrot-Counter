window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
        height: '400',
        width: '60%',
        uri: 'spotify:artist:0hEurMDQu99nJRq8pTxO14'
      };
    let callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };

