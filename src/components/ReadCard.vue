<template>
  <div class="content">
    <div class="title">
      请放置二代居民身份证放置指定识别区
    </div>
    <div>
      <object id="CardReader1" codebase="FirstActivex.cab#version=3,0,0,1" classid="CLSID:F225795B-A882-4FBA-934C-805E1B2FBD1B"
              width="153" height="189">
        <param name="_Version" value="65536"/>
        <param name="_ExtentX" value="2646"/>
        <param name="_ExtentY" value="1323"/>
        <param name="_StockProps" value="0"/>
      </object>
      <form id="formCard">
        <input id="button1" type="button" value="读取" name="btnRead" @click="readCard()" />
        <input id="button3" type="button" value="保存数据" name="btnData" @click="SetData()" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReadCard',
  data() {
    return {
      cardNo : '',
      nameL : '',
      sexL : '',
      nationL : '',
      born : '',
      address : '',
      activityLFrom : '',
      activityLTo : '',
      avatar : '',
    };
  },
  methods: {
    byId(id) {
      return document.getElementById(id);
    },
    readCard(){
      var obj = this.byId("CardReader1");
      // var form1 = this.byId("formCard");
      var isInit = false;
      if(false===isInit)
      {
//设置端口号，1表示串口1，2表示串口2，依此类推；1001表示USB。0表示自动选择。
        obj.setPortNum(0);
        isInit=true;
      }
//Flag：0启用重复读卡；1禁用重复读卡。
      obj.Flag=0;
//设置照片保存路径。照片文件名：(身份证号).bmp。默认不保存。
//       obj.PhotoPath=form1.photoPath.value;
//读卡
      var rst = obj.ReadCard();
      if(0x90===rst)
      {
        var cardType=obj.CardType;
        if(1===cardType)
        {
          this.cardNo = obj.CardNo();
          this.nameL = obj.NameL();
          this.sexL = obj.SexL();
          this.nationL = obj.NationL();
          this.born = obj.Born().slice(0,4) + '-' + obj.Born().slice(4,6) + '-' + obj.Born().slice(6,8);
          this.address = obj.Address();
          this.activityLFrom = obj.ActivityLFrom().slice(0,4) + '-' + obj.ActivityLFrom().slice(4,6) + '-' + obj.ActivityLFrom().slice(6,8);
          this.activityLTo = obj.ActivityLTo().slice(0,4) + '-' + obj.ActivityLTo().slice(4,6) + '-' + obj.ActivityLTo().slice(6,8);
          this.avatar = obj.GetImage()
          alert('读取成功~录入人员：', this.nameL)
        }
        else
        {
          alert('其他证件，暂不支持录入。')
        }
      }
      else
      {
        alert('缺少卡片，请规范放置。')
      }
    },
    SetData() {
      alert('正在核验数据，请稍等......')
      let fd = new FormData()
      fd.append('id', this.cardNo)
      fd.append('name', this.nameL)
      fd.append('gender', this.sexL)
      fd.append('nation', this.nationL)
      fd.append('birthday', this.born)
      fd.append('address', this.address)
      fd.append('effective_start', this.activityLFrom)
      fd.append('effective_end', this.activityLTo)
      fd.append('avatar', this.avatar)
      this.$http.post("http://127.0.0.1:8000/v1/hr/idcardData/", fd).then(res =>{
        const data = res.data;
        alert('上传成功!')
        console.log(data)
        }).catch(err =>{
        console.log(err);
      });
    },
  }
}
</script>

<style scoped>
.title {
  height: 100px;
  background-color: #EBEBEB;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  width: 100%;
}
</style>
