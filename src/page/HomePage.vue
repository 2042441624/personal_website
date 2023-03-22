<template>
  <div class="home" v-loading.fullscreen.lock="fullscreenLoading">
    <!-- 首页骨架 -->
    <div v-if="!formTemplate" class="skeleton">
      <el-row :gutter="5" id="headerContent" type="flex">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <!-- 主体第二行 -->
      <el-row :gutter="5" id="mainContent" type="flex">
        <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
      <!-- 底部第三行 -->
      <el-row :gutter="5" id="footerContent" type="flex">
        <el-col :xs="12" :sm="6" :md="12" :lg="12" :xl="12">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="12" :sm="6" :md="12" :lg="12" :xl="12">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
    </div>

    <!-- 首页加载完模板 -->
    <div v-else>
      <el-form
        :label-position="labelPosition"
        ref="bioForm"
        :model="form"
        label-width="80px"
        class="demo-form-inline"
        :rules="rules"
        :inline="!formIsInline"
        status-icon
      >
        <el-row>
          <el-col :xs="24" :sm="8">
            <form action="" enctype="multipart/form-data">
              <input
                id="file"
                class="filepath"
                @change="changepic()"
                type="file"
              /><br />
              <img src="" id="show" width="200" />
            </form>
            <!-- <el-form-item label="头像" prop="profilePhoto">
              <el-upload
                class="upload-demo"
                action="https://my.qidian.com/ajax/headimage/uploadimg"
                drag
                multiple
                @change="uploadPictures()"
                ref="uploadPictures"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>
                </div>
                <div class="el-upload__tip" slot="tip">
                  只能上传jpg/png文件，且不超过500kb
                  <img ref="imga" />
                </div>
              </el-upload>
            </el-form-item> -->
          </el-col>
          <el-col :xs="24" :sm="16">
            <el-row>
              <!-- form设置inline配置 -->
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-select
                  v-model="form.sex"
                  placeholder="请选择您的性别"
                  prop="sex"
                >
                  <el-option label="男" value="1"></el-option>
                  <el-option label="女" value="0"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="学校" prop="school">
                <el-input v-model="form.school"></el-input>
              </el-form-item>
              <el-form-item label="学历" prop="education">
                <el-select
                  v-model="form.education"
                  placeholder="请选择您的学历"
                >
                  <el-option label="中专" value="0"></el-option>
                  <el-option label="大专" value="1"></el-option>
                  <el-option label="本科" value="2"></el-option>
                  <el-option label="硕士/研究生" value="3"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="出生日期">
                <el-col :span="11">
                  <el-date-picker
                    prop="date1"
                    type="date"
                    placeholder="请选择"
                    v-model="form.date1"
                    style="min-width: 50px"
                  ></el-date-picker>
                </el-col>
                <!-- <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="选择时间"
            v-model="form.date2"
            style="width: 100%"
          ></el-time-picker>
        </el-col> -->
              </el-form-item>
            </el-row>
            <el-row :xs="24" :sm="24">
              <el-col :xs="24" :sm="12" :gutter="20">
                <el-form-item label="联系方式" style="display: block">
                  <el-row v-for="(c, index) in form.contact" :key="c.title">
                    <el-col :xs="24" :sm="4"
                      ><el-checkbox
                        :label="c.title"
                        name="type"
                        v-model="form.contact[index].ischecked"
                      ></el-checkbox>
                    </el-col>
                    <el-col :xs="24" :sm="16">
                      <el-input
                        v-if="form.contact[index].ischecked"
                        v-model="form.contact[index].content"
                      ></el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12"
                ><el-form-item label="求职岗位">
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox label="科技老师" name="type"></el-checkbox>
                    <el-checkbox label="前端工程师" name="type"></el-checkbox>
                    <el-checkbox label="网络管理" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="求职状态">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="在校-实习"></el-radio>
                    <el-radio label="离校-应届"></el-radio>
                    <el-radio label="在职-找工作"></el-radio>
                    <el-radio label="离职-找工作"></el-radio>
                  </el-radio-group> </el-form-item
              ></el-col>
            </el-row>
          </el-col>
        </el-row>

        <!-- <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item> -->

        <el-form-item label="自我评价">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="学校课程">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="学习课程">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="教育背景">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="工作经验">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="实习经验">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="项目经验">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="综合经验">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('bioForm')"
            >立即创建</el-button
          >
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { distinguishFacility } from "@/utility/viewport/viewport.js";
import * as imageConversion from "image-conversion";
export default {
  name: "home_page",
  data() {
    return {
      //form的盒子模型
      formIsInline: "",
      //label的显示方式
      labelPosition: "top",
      //联系方式多选状态
      isphone: false,
      isWeChat: false,
      isEmail: false,
      //加载
      formTemplate: false,
      fullscreenLoading: true,
      // 表单
      form: {
        pictureSrc: "",
        name: "",
        school: "",
        sex: "",
        region: "",
        education: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        contact: [
          {
            title: "手机",
            content: "",
            ischecked: false,
          },
          {
            title: "微信",
            content: "",
            ischecked: false,
          },
          {
            title: "邮箱",
            content: "",
            ischecked: false,
          },
        ],
        resource: "",
        desc: "",
      },
      computed: {},
      rules: {
        name: [
          { required: true, message: "请输入名字", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
        sex: [
          {
            required: true,
            message: "请选择性别",
            trigger: "change",
          },
        ],
        school: [
          { required: true, message: "请输入学校", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        education: [
          {
            required: true,
            message: "请选择学历",
            trigger: "blur",
          },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "blur",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  props: {
    msg: String,
  },
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    init() {
      //视口初始化
      this.formIsInline = distinguishFacility();
      //加载初始化
      let a = setTimeout(() => {
        this.fullscreenLoading = false;
        this.formTemplate = true;
        clearTimeout(a);
      }, 1500);
    },
    changepic() {
      var reads = new FileReader();
      let file = document.getElementById("file").files[0];
      reads.readAsDataURL(file);
      let _vueThis = this;
      reads.onload = function () {
        _vueThis.form.pictureSrc = this.result;

        document.getElementById("show").src = this.result;
      };

      new Promise((resolve) => {
        // console.log("压缩前", file) // 压缩到 1MB，大于 1MB 的图片都会进行压缩，小于则不会
        imageConversion.compressAccurately(file, 50).then((res) => {
          res = new File([res], file.name, {
            type: res.type,
            lastModified: Date.now(),
          });
          console.log("压缩后", res);
          resolve(res);
        });
      }).then(() => {
        // 上传图片至文件服务器
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.form); 
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.home {
  padding: 0.5%;
  height: 100%;
  box-sizing: border-box;
  display: grid;
  align-items: center;
  overflow: scroll;
  .skeleton {
    height: 100%;
  }

  /deep/ .el-form {
    min-height: 100%;
  }
}

.el-row {
  padding-bottom: 20px;
  &:last-child {
    padding-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
    height: 100%;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    width: 100%;
    height: 100%;
  }
}

#headerContent {
  height: 25%;
}

#mainContent {
  height: 50%;
}

#footerContent {
  height: 25%;
}

#headerContent .bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}
</style>
