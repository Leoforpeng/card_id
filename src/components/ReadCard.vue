<template>
  <div class="hello">
    <div>
      <object id="CardReader1" codebase="FirstActivex.cab#version=3,0,0,1" classid="CLSID:F225795B-A882-4FBA-934C-805E1B2FBD1B"
              width="102" height="126">
        <param name="_Version" value="65536"/>
        <param name="_ExtentX" value="2646"/>
        <param name="_ExtentY" value="1323"/>
        <param name="_StockProps" value="0"/>
      </object>
      <form id="formCard">
        <table border="0" width="100%">
          <td class="title1">证件类型</td>
          <td class="textbox1"><input type="text" size="30" name="cardSize" disabled /></td>
          <tr>
            <td class="title1"></td>
            <td class="textbox1">身份证/港澳台居民居住证</td>
            <td class="title1"></td>
            <td class="textbox1">外国人永久居留证</td>
          </tr>
          <tr>
            <td class="title1">姓名</td>
            <td class="textbox1"><input type="text" size="30" name="nameL" /></td>
            <td class="title1">英文姓名</td>
            <td class="textbox1"><input type="text" size="30" name="prEnglishName" /></td>
          </tr>
          <tr>
            <td class="title1">性别代码</td>
            <td class="textbox1"><input type="text" size="30" name="sexCode" /></td>
            <td class="title1">性别代码</td>
            <td class="textbox1"><input type="text" size="30" name="prSexCode" /></td>
          </tr>
          <tr>
            <td class="title1">性别</td>
            <td class="textbox1"><input type="text" size="30" name="sexL" /></td>
            <td class="title1">性别</td>
            <td class="textbox1"><input type="text" size="30" name="prSex" /></td>
          </tr>
          <tr>
            <td class="title1">民族代码</td>
            <td class="textbox1"><input type="text" size="30" name="nationCode" /></td>
            <td class="title1">居留证号码</td>
            <td class="textbox1"><input type="text" size="30" name="prNumber" /></td>
          </tr>
          <tr>
            <td class="title1">民族</td>
            <td class="textbox1"><input type="text" size="30" name="nationL" /></td>
            <td class="title1">国籍代码</td>
            <td class="textbox1"><input type="text" size="30" name="prCountryCode" /></td>
          </tr>
          <tr>
            <td class="title1">出生日期1</td>
            <td class="textbox1"><input type="text" size="30" name="born" /></td>
            <td class="title1">国籍或地区</td>
            <td class="textbox1"><input type="text" size="30" name="prCountry" /></td>
          </tr>
          <tr>
            <td class="title1">出生日期2</td>
            <td class="textbox1"><input type="text" size="30" name="bornL" /></td>
            <td class="title1">中文姓名</td>
            <td class="textbox1"><input type="text" size="30" name="prChineseName" /></td>
          </tr>
          <tr>
            <td class="title1">住址</td>
            <td class="textbox1"><input type="text" size="30" name="address" /></td>
            <td class="title1">签发日期</td>
            <td class="textbox1"><input type="text" size="30" name="prEffectDate" /></td>
          </tr>
          <tr>
            <td class="title1">身份号码</td>
            <td class="textbox1"><input id="cardID" type="text" size="30" name="cardNo" /></td>
            <td class="title1">终止日期</td>
            <td class="textbox1"><input type="text" size="30" name="prExpiryDate" /></td>
          </tr>
          <tr>
            <td class="title1">签发机关</td>
            <td class="textbox1"><input type="text" size="30" name="police" /></td>
            <td class="title1">出生日期</td>
            <td class="textbox1"><input type="text" size="30" name="prBirthDate" /></td>
          </tr>
          <tr>
            <td class="title1">有效期限1</td>
            <td class="textbox1"><input type="text" size="30" name="activity" /></td>
            <td class="title1">证件版本</td>
            <td class="textbox1"><input type="text" size="30" name="prVersion" /></td>
          </tr>
          <tr>
            <td class="title1">有效期限2</td>
            <td class="textbox1"><input type="text" size="30" name="activityL" /></td>
            <td class="title1">机关代码</td>
            <td class="textbox1"><input type="text" size="30" name="prIssuerCode" /></td>
          </tr>
          <tr>
            <td class="title1">生效日期</td>
            <td class="textbox1"><input type="text" size="30" name="activityLFrom" /></td>
            <td class="title1">签发机关</td>
            <td class="textbox1"><input type="text" size="30" name="prIssuer" /></td>
          </tr>
          <tr>
            <td class="title1">失效日期</td>
            <td class="textbox1"><input type="text" size="30" name="activityLTo" /></td>
          </tr>
          <tr>
            <td class="title1">通行证号码</td>
            <td class="textbox1"><input type="text" size="30" name="passNumber" /></td>
          </tr>
          <tr>
            <td class="title1">签发次数</td>
            <td class="textbox1"><input type="text" size="30" name="issueCount" /></td>
          </tr>
          <tr>
            <td class="title1">照片保存路径</td>
            <td class="textbox1"><input type="text" size="30" name="photoPath" value="" /></td>
            <td class="title1">模块序列号</td>
            <td class="textbox1"><input type="text" size="40" name="samid" /></td>
          </tr>
        </table>
        <textarea rows="6" cols="100" name="base64Image" ></textarea><br />
        <input id="button1" type="button" value="读取" name="btnRead" @click="readCard()" />
        <input id="button2" type="reset" value="重置" name="btnReset" />
        <input id="button3" type="button" value="保存数据" name="btnData" @click="SetData()" />
      </form>
    </div>
    <div>
      <br/>
      <button @click="changeCharm()">切换谷歌浏览器</button>
      <br/>
      <input id="newID" type="text" size="30" name="cardSize" />
      <button>确认身份证号码</button>
      <div>
        <video id="video" width="500px" height="500px" autoplay="autoplay"></video>
        <canvas id="canvas" width="500px" height="500px"></canvas>
      </div>
      <input type="button" title="开启摄像头" value="开启摄像头" @click="getMedia()" />
      <input id="button4" type="button" value="认证核验" name="btnCheckFace" @click="CheckFace()" />
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
      var form1 = this.byId("formCard");
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
      obj.PhotoPath=form1.photoPath.value;
//读卡
      var rst = obj.ReadCard();
      if(0x90===rst)
      {
        var cardType=obj.CardType;
        if(1===cardType)
        {
          form1.cardSize.value  = '身份证';
          form1.nameL.value     =obj.NameL();
          form1.sexCode.value   =obj.Sex();
          form1.sexL.value      =obj.SexL();
          form1.nationCode.value=obj.Nation();
          form1.nationL.value   =obj.NationL();
          form1.born.value      =obj.Born();
          form1.bornL.value     =obj.BornL();

          form1.address.value   =obj.Address();
          form1.cardNo.value    =obj.CardNo();
          form1.police.value    =obj.Police();

          form1.activity.value     =obj.Activity();
          form1.activityL.value    =obj.ActivityL();
          form1.activityLFrom.value=obj.ActivityLFrom();
          form1.activityLTo.value  =obj.ActivityLTo();

          form1.passNumber.value="";
          form1.issueCount.value="";

          this.cardNo = obj.CardNo();
          this.nameL = obj.NameL();
          this.sexL = obj.SexL();
          this.nationL = obj.NationL();
          this.born = obj.Born().slice(0,4) + '-' + obj.Born().slice(4,6) + '-' + obj.Born().slice(6,8);
          this.address = obj.Address();
          this.activityLFrom = obj.ActivityLFrom().slice(0,4) + '-' + obj.ActivityLFrom().slice(4,6) + '-' + obj.ActivityLFrom().slice(6,8);
          this.activityLTo = obj.ActivityLTo().slice(0,4) + '-' + obj.ActivityLTo().slice(4,6) + '-' + obj.ActivityLTo().slice(6,8);
          this.avatar = obj.GetImage()
        }
        else if(2===cardType)
        {
          form1.cardSize.value  	 = '外国人永久居留证';
          form1.prEnglishName.value=obj.PREnglishName();
          form1.prSexCode.value    =obj.PRSexCode();
          form1.prSex.value        =obj.PRSex();
          form1.prNumber.value     =obj.PRNumber();
          form1.prCountryCode.value=obj.PRCountryCode();
          form1.prCountry.value    =obj.PRCountry();
          form1.prChineseName.value=obj.PRChineseName();
          form1.prEffectDate.value =obj.PREffectDate(2);
          form1.prExpiryDate.value =obj.PRExpiryDate(2);
          form1.prBirthDate.value  =obj.PRBirthDate(1);
          form1.prVersion.value    =obj.PRVersion();
          form1.prIssuerCode.value =obj.PRIssuerCode();
          form1.prIssuer.value     =obj.PRIssuer();
        }
        else if(3===cardType)
        {
          form1.cardSize.value  = '港澳台居民居住证';
          form1.nameL.value     =obj.NameL();
          form1.sexCode.value   =obj.Sex();
          form1.sexL.value      =obj.SexL();
          form1.nationCode.value="";
          form1.nationL.value   ="";
          form1.born.value      =obj.Born();
          form1.bornL.value     =obj.BornL();

          form1.address.value   =obj.Address();
          form1.cardNo.value    =obj.CardNo();
          form1.police.value    =obj.Police();

          form1.activity.value     =obj.Activity();
          form1.activityL.value    =obj.ActivityL();
          form1.activityLFrom.value=obj.ActivityLFrom;
          form1.activityLTo.value  =obj.ActivityLTo;

          form1.passNumber.value=obj.PassNumber();
          form1.issueCount.value=obj.IssueCount();
        }
        form1.samid.value=obj.GetSAMID(2);
        form1.base64Image.value =obj.GetImage();
      }
      else
      {
        form1.cardSize.value  ="识别失败!";
        form1.nameL.value     ="";
        form1.sexCode.value   ="";
        form1.sexL.value      ="";
        form1.nationCode.value="";
        form1.nationL.value   ="";
        form1.born.value      ="";
        form1.bornL.value     ="";

        form1.address.value   ="";
        form1.cardNo.value    ="";
        form1.police.value    ="";

        form1.activity.value     ="";
        form1.activityL.value    ="";
        form1.activityLFrom.value="";
        form1.activityLTo.value  ="";

        form1.passNumber.value="";
        form1.issueCount.value="";

        form1.prEnglishName.value="";
        form1.prSexCode.value    ="";
        form1.prSex.value        ="";
        form1.prNumber.value     ="";
        form1.prCountryCode.value="";
        form1.prCountry.value    ="";
        form1.prChineseName.value="";
        form1.prEffectDate.value ="";
        form1.prExpiryDate.value ="";
        form1.prBirthDate.value  ="";
        form1.prVersion.value    ="";
        form1.prIssuerCode.value ="";
        form1.prIssuer.value     ="";

        form1.samid.value="";
        form1.base64Image.value ="";
      }
    },
    changeCharm(){
      // 获取输入框元素
      let input = document.getElementById('cardID')
      // 选中元素中的文本（必须可编辑）
      input.select()
      // 检测复制命令返回值（是否可用）
      if(document.execCommand('copy')){
        document.execCommand('copy')//执行复制到剪贴板
        window.alert('已复制！请在谷歌页面中的输入框粘贴并提交确认')//反馈信息
        // eslint-disable-next-line no-undef
        var objShell= new ActiveXObject("WScript.Shell");
        objShell.Run("cmd.exe /c start chrome  http://127.0.0.1:8080/",0,true);
      }

      // 无法复制（不可用）
      else{
        window.alert('复制失败！请手动切换谷歌浏览器，并复制身份证号码填入！')//反馈信息
      }
    },
    getMedia(){
      let video = document.getElementById("video");
      let constraints = {
        video: {width: 500, height: 500},
        audio: true
      };
      let promise = navigator.mediaDevices.getUserMedia(constraints);
      promise.then(function (MediaStream) {
        video.srcObject = MediaStream;
        video.play();
      }).catch(function (PermissionDeniedError) {
        console.log(PermissionDeniedError);
      })
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
        if (data.msg === 200){
          alert('上传成功!')
        }
        else {
          alert('人员已存在，请检查!')
        }
        }).catch(err =>{
        console.log(err);
      });
    },

    CheckFace(){
      console.log('拍摄照片~')
      let video = document.getElementById("video");
      //获得Canvas对象
      let canvas = document.getElementById("canvas");
      // 打印
      let ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, 500, 500);
      // 转换成base64
      let fileNow = canvas.toDataURL('image/jpeg',1);
      // base64转换成Blod
      var arr = fileNow.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
        u8arr[n] = bstr.charCodeAt(n);
      }
      let files = new Blob([u8arr], {type:mime})

      console.log('人证核验')
      // 准备核验
      let fd_check = new FormData()
      let newID = document.getElementById('newID').value
      fd_check.append('id', newID)
      fd_check.append('unknown_image', files)
      console.log(fd_check.get('unknown_image'))
      this.$http.post("http://127.0.0.1:8000/v1/hr/compareFace/", fd_check).then(res =>{
        const data = res.data;
        if (data.data === 'True'){
          alert('核验成功!')
        }
        else {
          alert('核验失败，请重新核验!')
        }
      }).catch(err =>{
        console.log(err);
      });
    }
  }
}
</script>

<style scoped>

</style>
