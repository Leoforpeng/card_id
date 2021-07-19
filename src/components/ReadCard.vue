<template>
  <div class="content">
    <div class="title">
      请放置二代居民身份证放置指定识别区
    </div>
    <div style="height: 400px; width: 600px; background-color: #EBEBEB; display: flex; align-items: center; justify-content: center; text-align: justify; margin:0 auto;">
      <img src="#" style="opacity: 0" width="600" height="400" alt="引导图" title="请根据引导图操作！">
    </div>
    <div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
      <object id="CardReader1" codebase="FirstActivex.cab#version=3,0,0,1" classid="CLSID:F225795B-A882-4FBA-934C-805E1B2FBD1B"
              width="153" height="189">
        <param name="_Version" value="65536"/>
        <param name="_ExtentX" value="2646"/>
        <param name="_ExtentY" value="1323"/>
        <param name="_StockProps" value="0"/>
      </object>
      <input id="button1" type="button" value="读取" name="btnRead" @click="readCard()" title="Ctrl + N 可快速读卡"/>
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
  mounted() {
    this.clickSpace()
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

          alert('读取成功~录入人员：'+ this.nameL)
          this.SetData()
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
        alert('上传失败!请检查网络连接~')
      });
    },
    clickSpace(){
      window.addEventListener("keydown", function(e) {
        if((e.key==='n'||e.key==='N') &&(navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
          e.preventDefault();
          document.getElementById('button1').click()
        }
      }, false);
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
  margin-bottom: 40px;
}
.content {
  width: 100%;
}

#button1{
  width: 270px;
  height: 40px;
  border-width: 0;
  border-radius: 3px;
  background: #1E90FF;
  cursor: pointer;
  outline: none;
  color: white;
  font-size: 17px;
  margin-top: 20px;
}
#button1:hover {
  background: #5599FF;
}
</style>
