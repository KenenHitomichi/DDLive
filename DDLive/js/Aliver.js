/*
The class of single liver:
    uid: The uid number
    liveInfoFlag: flag of info reading
    roomInfoFlag: flag of room reading
    addressInfoFlag: flag of address reading
    active: active status (chosen or not)
    load: load status
    name: liver's name
    img: liver's avatar
    desc: liver's description
    liveStatus: living or not
    roomStatus: have room or not
    title: living title
    roomid: the number of room
    liveAddress: the living address
*/

class Aliver {
    constructor(uidNum) {
        this.uid = uidNum;
        this.active = false;
        this.readData();
    }

    readData() {
        this.element = null;
        this.liverInfoFlag = 0;
        this.roomInfoFlag = 0;
        this.addressInfoFlag =0;
        this.load = false;
        eel.getLiverInfo(this.uid)().then((value)=>{
            if (value["code"]!=0) {
                this.AddressInfoFlag = -1;
                return;
            }
            this.name = value["data"]["name"];
            this.img = value["data"]["face"];
            this.desc = value["data"]["sign"];
            this.liverInfoFlag = 1;
        });
        eel.getRoomInfo(this.uid)().then((value)=>{
            if (value["code"]!=0) {
                this.roomInfoFlag = -1;
                return;
            }
            this.liveStatus = value["data"]["liveStatus"];
            this.roomStatus = value["data"]["roomStatus"];
            this.title = value["data"]["title"];
            this.roomid = value["data"]["roomid"];
            eel.getLiveAddress(this.roomid)().then((value)=>{
                if (value["code"]!=0) {
                    this.addressInfoFlag = -1;
                    return;
                }
                this.liveAddress = value["data"]["durl"][value["data"]["durl"].length-1]["url"];
                this.addressInfoFlag = 1;
            })

            this.roomInfoFlag = 1;
        });

    }
};