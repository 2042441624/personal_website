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
          <el-upload action="#" list-type="picture-card" :auto-upload="false">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
                @load="changepic(file)"
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>

          <el-col>
            <el-row>
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name" autocomplete="on"></el-input>
              </el-form-item>
              <el-form-item label="住址" prop="address">
                <el-input v-model="form.address" autocomplete="on"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-select v-model="form.sex" placeholder="请选择您的性别">
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
                  <el-option label="中专" value="中专"></el-option>
                  <el-option label="大专" value="大专"></el-option>
                  <el-option label="本科" value="本科"></el-option>
                  <el-option
                    label="硕士/研究生"
                    value="硕士/研究生"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="出生日期" prop="birthday">
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="请选择"
                    v-model="form.birthday"
                    style="min-width: 50px"
                  ></el-date-picker>
                </el-col>
              </el-form-item>
            </el-row>
            <el-row :xs="24" :sm="24">
              <el-col :xs="24" :sm="12" :gutter="20">
                <el-form-item
                  style="display: block"
                  v-for="(c, index) in form.contact"
                  :key="c.title"
                  :prop="c.ruleName"
                >
                  <el-col :xs="24" :sm="4"
                    ><el-checkbox
                      :label="c.title"
                      name="type"
                      v-model="c.ischecked"
                      @change="handlRequired(c.ischecked, c.ruleName)"
                    ></el-checkbox>
                  </el-col>

                  <el-input
                    v-if="c.ischecked"
                    v-model="form[c.ruleName]"
                    @change="handlInput($event, index)"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12"
                ><el-form-item style="display: block">
                  <div style="margin-bottom: 10px">
                    <span slot="label">
                      <span>求职岗位</span>
                      <el-tooltip
                        class="item"
                        effect="light"
                        placement="right-start"
                      >
                        <span slot="content"
                          ><!--slot-->
                          <span v-for="item in 10" :key="item"
                            >{{ item }}<br
                          /></span>
                        </span>
                        <i class="el-icon-question" /><!--小问号提示-->
                      </el-tooltip>
                    </span>
                    <el-button
                      type="danger"
                      icon="el-icon-delete"
                      circle
                      size="mini"
                      style="float: right"
                    ></el-button>
                    <el-button
                      type="success"
                      icon="el-icon-plus"
                      circle
                      size="mini"
                      style="float: right"
                    ></el-button>
                  </div>
                  <el-checkbox-group v-model="form.occupation">
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
        <el-form-item
          label="自我评价"
          id="selfAssessment"
          style="display: block"
        >
          <el-table :data="form.selfAssessment" style="width: 100%">
            <el-table-column label="标签" prop="name"> </el-table-column>
            <el-table-column label="内容" prop="address"> </el-table-column>
            <el-table-column align="right">
              <template slot="header" slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleCreate(scope.$index, scope.row)"
                  >新建</el-button
                >
              </template>
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @once="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item style="display: block; width: 100%; padding-right: 10px">
          <div
            style="
              margin-bottom: 10px;
              display: flex;
              justify-content: space-between;
            "
          >
            <span slot="label">
              <span>学习背景</span>
              <el-tooltip class="item" effect="light" placement="right-start">
                <span slot="content"
                  ><!--slot-->
                  <span v-for="item in 10" :key="item">{{ item }}<br /></span>
                </span>
                <i class="el-icon-question" /><!--小问号提示-->
              </el-tooltip>
            </span>
            <el-button
              type="primary"
              @click="createdInputItem($event)"
              style="float: right"
              size="mini"
              >立即创建</el-button
            >
          </div>
          <ul>
            <li>
              <el-row
                ><el-col :sm="5"
                  ><el-input
                    type="text"
                    v-model="form.desc"
                    style="display: inline"
                    placeholder="你的概述标签"
                  ></el-input>
                </el-col>
                <el-col :span="0.2">:</el-col>
                <el-col :sm="18" :span="18">
                  <el-input
                    type="text"
                    v-model="form.desc"
                    placeholder="你的标签内容"
                  ></el-input
                ></el-col>
              </el-row>
            </li>
          </ul>
        </el-form-item>
        <el-form-item style="display: block; width: 100%; padding-right: 10px">
          <div
            style="
              margin-bottom: 10px;
              display: flex;
              justify-content: space-between;
            "
          >
            <span slot="label">
              <span>项目经验</span>
              <el-tooltip class="item" effect="light" placement="right-start">
                <span slot="content"
                  ><!--slot-->
                  <span v-for="item in 10" :key="item">{{ item }}<br /></span>
                </span>
                <i class="el-icon-question" /><!--小问号提示-->
              </el-tooltip>
            </span>
            <el-button
              type="primary"
              @click="created('bioForm')"
              style="float: right"
              size="mini"
              >立即创建</el-button
            >
          </div>

          <el-input
            :autosize="{ minRows: 4, maxRows: 8 }"
            style="width: 100%"
            placeholder="请输入内容"
            type="textarea"
          />
        </el-form-item>

        <el-form-item label="教育背景" style="display: block">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="工作经验" style="display: block">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="实习经验" style="display: block">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="项目经验" style="display: block">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="综合经验" style="display: block">
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
import { getparent } from "@/utility/viewport/DOMcorrelation.js";
// import * as imageConversion from "image-conversion";
import $ from "jquery";
export default {
  name: "home_page",
  data() {
    return {
      //头像
      imageUrl: "",
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      //form的盒子模式
      formIsInline: "",
      //label的显示方式
      labelPosition: "top",
      //加载
      formTemplate: false,
      fullscreenLoading: true,
      // 表单
      form: {
        phone: "",
        email: "",
        wechat: "",
        name: "",
        address: "",
        occupation: [],
        pictureSrc: "",
        school: "",
        sex: "",
        selfAssessment: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
        ],
        contact: [
          {
            title: "手机",
            ruleName: "phone",
            content: "",
            ischecked: false,
          },
          {
            title: "微信",
            ruleName: "wechat",
            content: "",
            ischecked: false,
          },
          {
            title: "邮箱",
            ruleName: "email",
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
        address: [
          {
            required: true,
            message: "请选择地址",
            trigger: "blur",
          },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
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
            trigger: "change",
          },
        ],
        birthday: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        sex: [
          {
            required: true,
            message: "请至少选择一个性别",
            trigger: "change",
          },
        ],
        phone: [
          {
            required: false,
            min: 11,
            max: 11,
            message: "请正确输入您的号码",
            trigger: "blur",
          },
        ],
        wechat: [
          {
            required: false,
            message: "请输入您的微信",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: false,
            message: "请输入您的邮箱",
            trigger: "blur",
          },
        ],
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
      sessionStorage.removeItem("myresumeform");
      //视口初始化
      this.formIsInline = distinguishFacility();
      //加载初始化
      let a = setTimeout(() => {
        this.fullscreenLoading = false;
        this.formTemplate = true;
        clearTimeout(a);
      }, 1500);
    },
    // 新建输入框
    createdInputItem(event) {
      let eventParent = getparent(event.target, ".el-form-item__content");
      console.log();
      $(eventParent)
        .children("ul")
        .eq(0)
        .append(
          `<li data-v-8b8e04b6=""><div data-v-8b8e04b6="" class="el-row"><div data-v-8b8e04b6="" class="el-col el-col-24 el-col-sm-5"><div data-v-8b8e04b6="" class="el-input" style="display: inline;"><!----><input type="text" autocomplete="off" placeholder="你的概述标签" class="el-input__inner"><!----><!----><!----><!----></div></div><div data-v-8b8e04b6="" class="el-col el-col-0.2">:</div><div data-v-8b8e04b6="" class="el-col el-col-18 el-col-sm-18"><div data-v-8b8e04b6="" class="el-input"><!----><input type="text" autocomplete="off" placeholder="你的标签内容" class="el-input__inner"><!----><!----><!----><!----></div></div></div></li>`
        );
    },
    //生产简历按钮
    generateBiographicalNotes() {},
    handlInput(e, i) {
      console.log(e);
      this.$set(this.form.contact[i], "content", e);
    },
    handlRequired(r, t) {
      this.rules[t][0].required = r;
    },
    contactInput(index) {
      console.dir(this.form, index);
    },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleRemove(file) {
      console.log(file);
    },
    handleDownload(file) {
      console.log(file);
    },

    changepic(file) {
      let reads = new FileReader();
      let f = file.raw;
      reads.readAsDataURL(f);
      let _vueThis = this;
      reads.onload = function () {
        _vueThis.form.pictureSrc = this.result;
        console.log(_vueThis.form.pictureSrc);
      };

      // new Promise((resolve) => {
      //   // console.log("压缩前", file) // 压缩到 1MB，大于 1MB 的图片都会进行压缩，小于则不会
      //   imageConversion.compressAccurately(file, 50).then((res) => {
      //     res = new File([res], file.name, {
      //       type: res.type,
      //       lastModified: Date.now(),
      //     });
      //     resolve(res);
      //   });
      // }).then(() => {
      //   // 上传图片至文件服务器
      // });
    },
    handleCreate() {},
    handleEdit() {},
    handleDelete() {},
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid);
        if (valid) {
          let JosnForm = JSON.stringify(this.form);
          console.log(JosnForm);
          this.$router.push({
            name: "resume",
            query: {
              form: JosnForm,
            },
          });
        } else {
          console.log(this.form);
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
  div {
    height: 100%;
  }

  .profile_photo_col {
    display: grid;
    background: red;
    place-items: center;
  }
  .profile_photo_col > #profile_photo {
    min-width: 200px;
    min-height: 200px;
  }
}
/deep/ .el-form {
  min-height: 100%;
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
