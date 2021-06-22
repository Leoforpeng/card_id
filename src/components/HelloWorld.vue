<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
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
            <td class="textbox1"><input type="text" size="30" name="cardNo" /></td>
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
            <td class="textbox1"><input type="text" size="30" name="photoPath" value="C:\Users\IT\WebstormProjects\card_id\src\assets" /></td>
            <td class="title1">模块序列号</td>
            <td class="textbox1"><input type="text" size="40" name="samid" /></td>
          </tr>
        </table>
        <textarea rows="6" cols="100" name="base64Image" ></textarea><br />
        <input id="button1" type="button" value="读取" name="btnRead" @click="readCard()" />
        <input id="button2" type="reset" value="重置" name="btnReset" />
        <input id="button4" type="button" value="提交数据库" name="btnDB" @click="SetDB()" />
        <input id="button5" type="button" value="保存数据" name="btnData" @click="SetData()" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
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
      console.log(obj.PhotoPath)
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
          form1.activityLFrom.value=obj.ActivityLFrom;
          form1.activityLTo.value  =obj.ActivityLTo;

          form1.passNumber.value="";
          form1.issueCount.value="";
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
    SetData() {
      console.log('dadadada')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
