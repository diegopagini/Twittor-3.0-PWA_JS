/** @format */

class Camara {
	constructor(videoNode) {
		this.videoNode = videoNode;
		console.log('Camara Class Init');
	}

	encender() {
		if (navigator.mediaDevices) {
			navigator.mediaDevices
				.getUserMedia({
					audio: false,
					video: { width: 300, height: 300 },
				})
				.then((stream) => {
					this.videoNode.srcObject = stream;
					this.stream = stream;
				});
		}
	}

	apagar() {}
}
