class Avideo{
	constructor(address, num) {
		this.address = address
		this.num = num
		this.flvPlayer = null
		this.element = $('<div class="video-container" id="video-container'+num+'"><video class="video-content" id="video'+num+'" controls>Please Update your browser~~</video></div>')
		$(".video-panel").append(this.element)
		var w = parseInt(this.element.css("width"))
		this.element.css("height",w/2.22+"px")
	}

	play() {
		this.flvPlayer = flvjs.createPlayer({
		    type: 'flv',
            isLive: true,
            hasAudio: true,
            hasVideo: true,
            enableStashBuffer: true,
            url: this.address
		})
		this.element.css("display","block")
		var video = document.getElementById("video"+this.num)
		this.flvPlayer.attachMediaElement(video)
		this.flvPlayer.load()
		this.flvPlayer.play()
	}

	stop() {
		if (this.flvPlayer == null) return
		this.element.css("display","none")
		this.flvPlayer.pause()
		this.flvPlayer.unload()
		this.flvPlayer.detachMediaElement()
		this.flvPlayer.destroy()
		this.flvPlayer = null
	}

	reload() {
		this.stop()
		this.play()
	}

	delete() {
		stop();
		this.address = ""
		this.element.remove();
		this.element = null;
	}
}