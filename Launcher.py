import eel
import requests
import json

@eel.expose
def getLiverInfo(uid):
	headers = {
	    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36'
	}
	url = 'https://api.bilibili.com/x/space/acc/info?mid='+str(uid)+'&jsonp=jsonp'
	requests.packages.urllib3.disable_warnings()
	res = requests.get(url, headers=headers, verify = False)
	return json.loads(res.text)

@eel.expose
def getRoomInfo(uid):
	headers = {
	    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
	    'cookie': "_uuid=C85952D5-3949-7B66-D80F-B28F31F9EE2144004infoc;"
	}
	url = 'https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld?mid='+str(uid);
	requests.packages.urllib3.disable_warnings()
	res = requests.get(url, headers=headers, verify = False)
	return json.loads(res.text)

@eel.expose
def getLiveAddress(roomid):
	headers = {
	    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36'
	}
	url = 'http://api.live.bilibili.com/room/v1/Room/playUrl?cid='+str(roomid)+'&qn=0&platform=web';
	requests.packages.urllib3.disable_warnings()
	res = requests.get(url, headers=headers, verify = False)
	return json.loads(res.text)

@eel.expose
def writeJson(str):
	print(str)
	f = open("DDLive/data/Livers.json", "w", encoding='utf-8')
	f.write('['+str+']')
	f.close()

eel.init('DDLive')
eel.start('main.html')
