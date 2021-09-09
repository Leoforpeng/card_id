<template>
  <div>
    <div class="content1">
      <div class="title">
        请放置二代居民身份证放置指定识别区
      </div>
      <div style="height: 400px; width: 600px; background-color: #EBEBEB; display: flex; align-items: center; justify-content: center; text-align: justify; margin:0 auto;">
        <img src="../assets/demo.jpg" width="600" height="400" alt="引导图" title="请根据引导图操作！"/>
      </div>
      <div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
        <object id="CardReader1" codebase="FirstActivex.cab#version=3,0,0,1" classid="CLSID:F225795B-A882-4FBA-934C-805E1B2FBD1B"
                width="153" height="189">
          <param name="_Version" value="65536"/>
          <param name="_ExtentX" value="2646"/>
          <param name="_ExtentY" value="1323"/>
          <param name="_StockProps" value="0"/>
        </object>
        <br/>
        <a-button id="button1" type="primary" @click="readCard()" title="Ctrl + M 可快速读卡">读取</a-button>
      </div>
    </div>
    <hr/>
    <div class="content2" style="height: 500px; width: 800px; display: flex; flex-direction: column; justify-content: space-around; background-color: #EBEBEB; text-align: justify; margin:0 auto;">
      <div style="padding: 10px; display: flex; justify-content: space-between">
        <div>
          <p>班组：</p>
          <a-select default-value="lucy" style="width: 200px" @change="handleChange">
            <a-select-option value="jack">
              Jack
            </a-select-option>
            <a-select-option value="lucy">
              Lucy
            </a-select-option>
            <a-select-option value="disabled" disabled>
              Disabled
            </a-select-option>
            <a-select-option value="Yiminghe">
              yiminghe
            </a-select-option>
          </a-select>
        </div>
        <div>
          <p>工种：</p>
          <a-select default-value="lucy" style="width: 200px" @change="handleChange">
            <a-select-option value="jack">
              Jack
            </a-select-option>
            <a-select-option value="lucy">
              Lucy
            </a-select-option>
            <a-select-option value="disabled" disabled>
              Disabled
            </a-select-option>
            <a-select-option value="Yiminghe">
              yiminghe
            </a-select-option>
          </a-select>
        </div>
        <div>
          <p>手机号：</p>
          <a-input placeholder="大陆手机号" style="width: 200px" maxLength="11"/>
        </div>
      </div>
      <div style="padding: 10px; display: flex; justify-content: space-between">
        <div>
          <p>进场时间：</p>
          <a-date-picker @change="onChange" style="width: 200px"/>
        </div>
        <div>
          <p>出场时间：</p>
          <a-date-picker @change="onChange" style="width: 200px"/>
        </div>
        <div>
          <p>添加标签：</p>
          <a-select default-value="lucy" style="width: 200px" @change="handleChange">
            <a-select-option value="jack">
              Jack
            </a-select-option>
            <a-select-option value="lucy">
              Lucy
            </a-select-option>
            <a-select-option value="disabled" disabled>
              Disabled
            </a-select-option>
            <a-select-option value="Yiminghe">
              yiminghe
            </a-select-option>
          </a-select>
        </div>
      </div>
      <div style="padding: 10px; display: flex; justify-content: space-between">
        <div>
          <p>紧急联系人电话：</p>
          <a-input placeholder="大陆手机号" style="width: 200px" maxLength="11"/>
        </div>
        <div>
          <p>车牌号：</p>
          <a-input placeholder="车牌号" style="width: 200px" maxLength="8"/>
        </div>
        <div style="width: 200px">
          <p>是否愿意建立农民工账户：</p>
          <a-radio default-checked>是</a-radio>
          <a-radio disabled>否</a-radio>
        </div>
      </div>
      <div style="width: 300px; padding: 10px; display: flex; justify-content: space-between">
        <p>证书：</p>
        <a-upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :default-file-list="defaultFileList"
        >
          <a-button> <a-icon type="upload" /> 上传 </a-button>
        </a-upload>
      </div>
      <a-button type="primary" @click="Messagesubmit()">提交</a-button>
    </div>
    <div style="margin-top: 20px; margin-bottom: 20px">
      <a-button type="primary" @click="toFaceCheck()">直达人脸核验页面</a-button>
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

      company: '',
      team: '',
      occupation: '',
      phone: '',
      inboundTime: '',
      outTime: '',
      carNumber: '',
      emergencyPhone: '',
      laborAccount: '',
      defaultFileList: [
        {
          uid: '1',
          name: 'xxx.png',
          status: 'done',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/xxx.png',
        },
        {
          uid: '2',
          name: 'yyy.png',
          status: 'done',
          url: 'http://www.baidu.com/yyy.png',
        },
        {
          uid: '3',
          name: 'zzz.png',
          status: 'error',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/zzz.png',
        },
      ],
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
      this.$http.post("http://127.0.0.1:8888/v1/hr/idcardData/", fd).then(res =>{
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
        if((e.key==='m'||e.key==='M') &&(navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
          e.preventDefault();
          document.getElementById('button1').click()
        }
      }, false);
    },
    toFaceCheck(){
      window.location.href="http://127.0.0.1:8000/employee/face_recognition";
    },
    Messagesubmit(){}
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
.content1 {
  width: 100%;
  height: 800px;
}
</style>
