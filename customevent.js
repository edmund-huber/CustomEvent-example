(function() {

    var EVENT_NAME = 'stuff';

    var customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(EVENT_NAME, true, false, {
	'detail': {
	    'any': 'kind',
	    'of': 'crap'
	}
      }, true);

    var divOne = document.getElementById('div-one');
    divOne.addEventListener(EVENT_NAME, function(e) {
	divOne.textContent = 'bubbled up: got ' + e.detail;
      });

    var divThree = document.getElementById('div-three');
    divThree.dispatchEvent(customEvent);
})();