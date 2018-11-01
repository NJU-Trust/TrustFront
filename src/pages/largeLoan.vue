<template>
  <div id="app">
    <navi></navi>
    <el-form class="back">

      <!--<el-alert
        title="成功提示的文案"
        type="success"
        center
        v-show="visible"
        show-icon>
      </el-alert>-->

      <div>
        <right-bar></right-bar>
      </div>
      <table style="margin:0 auto;">
        <tbody>
        <tr>
          <td>
            <div id="sheet" class="sheet">

              <div style="margin-top: 20px;padding-top:15px;padding-left:5.5%;width: 860px">
                <el-steps :active="active" style="width: 800px">
                  <el-step class="test" title="项目信息"  align-center></el-step>
                  <el-step title="信息披露"  align-center></el-step>
                  <el-step title="关于贷款"  align-center></el-step>
                </el-steps>
              </div>

              <div class="primary_panel" style="margin-top: 20px">

                <el-form id="primary" ref="form1" :model="form1" label-width="100px" class="primary_info " >
                  <div class="title">基本信息</div>

                  <el-form-item label="项目名称">
                    <div>
                      <el-input placeholder="请填写项目名称" v-model="form1.name"></el-input>
                      <div style="color:red;font-size: 12px;">*项目名称不超过20字 例：2018年9月16号Jessie J演唱会</div>
                    </div>

                  </el-form-item>

                  <el-form-item label="开始日期">
                    <div>
                      <el-date-picker type="date" placeholder="选择开始日期" v-model="form1.date1" style="width: 100%;"></el-date-picker>
                      <div style="color:red;font-size: 12px;">*标的审核通过后的发布时间</div>
                    </div>

                  </el-form-item>
                  <el-form-item label="截止日期">
                    <div>
                      <el-date-picker type="date" placeholder="选择截止日期" v-model="form1.date2" style="width: 100%;"></el-date-picker>
                      <div style="color:red;font-size: 12px;">*标的发布后筹资结束时间</div>
                    </div>

                  </el-form-item>

                  <el-form-item label="最低达标率">
                    <div>
                      <el-input placeholder="请填写项目最低达标率" v-model="form1.least_rate"></el-input>
                      <div style="color:red;font-size: 12px;">*截止日期时，标的已筹金额占目标金额的最低比率</div>
                    </div>

                  </el-form-item>

                  <hr>

                  <div class="title">资金去向</div>
                  <el-form-item label="资金用途分类">
                    <el-cascader
                      expand-trigger="hover"
                      :options="options"
                      v-model="selectedOptions2"
                      @change="handleChange">
                    </el-cascader>

                  </el-form-item>

                  <el-form-item label="资金用途详述">
                    <div>
                      <el-input
                        type="textarea"
                        :rows="4"
                        placeholder="请输入内容"
                        v-model="form2.textarea1">
                      </el-input>
                      <div style="color:red;font-size: 12px;">*不超过100字</div>
                    </div>
                  </el-form-item>
                  <el-form-item label="上传凭证">
                    <el-upload
                      class="upload-demo"
                      drag
                      :action='url'
                      :onSuccess="uploadSuccess"
                      multiple>
                      <i class="el-icon-upload"></i>
                      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </el-form-item>

                  <!-- <el-alert
                     title="设置了回调的 alert"
                     type="warning"
                     @close="testAlert"></el-alert>-->

                  <!--<el-button @click="testAlert">test</el-button>-->
                </el-form>

                <el-form id="information" ref="form2" :model="form2" label-width="140px" class="primary_info" style="display: none">
                  <div class="title">信息披露层级</div>

                  <el-form-item label="选择信息披露层级">
                    <el-button type="primary" plain @click="get_layer(4)">第四层级</el-button>&nbsp&nbsp>
                    <el-button type="primary" plain @click="get_layer(3)">第三层级</el-button>&nbsp&nbsp>
                    <el-button type="primary" plain @click="get_layer(2)">第二层级</el-button>&nbsp&nbsp>
                    <el-button type="primary" plain @click="get_layer(1)">第一层级</el-button>
                  </el-form-item>

                  <el-form style="width: 700px;">

                    <div style="padding-left: 20px">

                      <el-form-item v-if="form2.layer4">
                        <div>
                          <el-button type="primary" size="mini">偿债能力</el-button>
                          <el-button type="primary" size="mini">杠杆比例</el-button>
                          <el-button type="primary" size="mini">消费比率</el-button>
                          <el-button type="primary" size="mini">储蓄比率</el-button>
                          <el-button type="primary" size="mini">刚性比率</el-button>
                          <el-button type="primary" size="mini">恩格尔系数</el-button>
                          <el-button type="primary" size="mini">资产负债率</el-button>
                        </div>
                        <div>
                          <el-button type="primary" size="mini">受教育情况</el-button>
                          <el-button type="primary" size="mini">信用评级指标</el-button>
                          <el-button type="primary" size="mini">学生的经济来源</el-button>
                          <el-button type="primary" size="mini">学生成绩</el-button>
                        </div>


                      </el-form-item>

                      <el-form-item v-if="form2.layer3&&form2.layer4">
                        <div>
                          <el-button type="success" size="mini">月收入</el-button>
                          <el-button type="success" size="mini">月支出</el-button>
                          <el-button type="success" size="mini">结余</el-button>
                          <el-button type="success" size="mini">负债</el-button>
                          <el-button type="success" size="mini">净资产</el-button>
                          <el-button type="success" size="mini">总收入</el-button>
                          <el-button type="success" size="mini">总支出</el-button>
                          <el-button type="success" size="mini">刚性支出</el-button>
                        </div>
                        <div>
                          <el-button type="success" size="mini">可调支出</el-button>
                        </div>


                      </el-form-item>

                      <el-form-item v-if="form2.layer2&&form2.layer3&&form2.layer4">
                        <div>
                          <el-button type="info" size="mini">月投资额</el-button>
                          <el-button type="info" size="mini">总投资额</el-button>
                          <el-button type="info" size="mini">各支出占总支出比率</el-button>
                          <el-button type="info" size="mini">各月支出占总支出比率</el-button>
                          <el-button type="info" size="mini">奖学金情况</el-button>
                        </div>
                        <div>
                          <el-button type="info" size="mini">科研竞赛获奖</el-button>
                          <el-button type="info" size="mini">学生工作（社团等）</el-button>
                          <el-button type="info" size="mini">志愿时长</el-button>
                        </div>
                      </el-form-item>

                      <el-form-item v-if="form2.layer1&&form2.layer2&&form2.layer3&&form2.layer4">
                        <el-button type="warning" size="mini">姓名</el-button>
                        <el-button type="warning" size="mini">身份证号</el-button>
                        <el-button type="warning" size="mini">月各支出</el-button>
                        <el-button type="warning" size="mini">总各支出</el-button>
                        <el-button type="warning" size="mini">月学习支出</el-button>
                        <el-button type="warning" size="mini">总学习支出</el-button>
                      </el-form-item>
                    </div>
                  </el-form>

                </el-form>

                <div id="test" style="display: flex">
                  <el-form id="small_loan" ref="form3" :model="form3" label-width="100px" class="primary_info" style="display: none">
                    <div class="title">关于贷款</div>
                    <el-form-item
                      label="拆借金额"
                      :rules="[
                            { required: true, message: '金额不能为空'},
                            { type: 'number', message: '金额必须为数字值'}
                         ]">
                      <div>
                        <el-input placeholder="请填写拆借金额" v-model="form3.money"></el-input>
                        <!--<div style="color:red;font-size: 12px;">*借款额度剩余{{limit}}</div>-->
                      </div>
                    </el-form-item>
                    <el-form-item label="还款期数">
                      <div>
                        <el-input placeholder="请填写还款期数(一期时长为一个月)" v-model="form3.period"></el-input>
                        <div style="color:red;font-size: 12px;">*小额贷款最长期限为1年，建议范围为[{{form3.lowerPeriod}},{{form3.upperPeriod}}]</div>
                      </div>

                    </el-form-item>
                    <el-form-item label="基准还款利率">
                      <div>
                        <el-input placeholder="请设置还款利率" v-model="form3.rate"></el-input>
                        <div style="color:red;font-size: 12px;">*利率上下限为[{{form3.lowerRate}},{{form3.upperRate}}],建议设置为{{form3.recommendRate}}</div>
                      </div>
                    </el-form-item>

                    <el-form-item label="还款方式">
                      <el-collapse v-model="form3.activeName" accordion>

                        <div @click="get_scheme(1)">
                          <el-collapse-item title="等额本息" name="1">
                            <div>每月偿还等同数额的贷款；</div>
                            <div>还款期限内压力平分，总利息高于等额本金。</div>
                          </el-collapse-item>
                        </div>

                        <div @click="get_scheme(2)">
                          <el-collapse-item title="等额本金" name="2" >
                            <div>贷款数总额等分，每月的还款本金额固定，利息越来越少；</div>
                            <div>起初还款压力较大，但是随着时间的推移每月的还款数也越来越少。</div>
                          </el-collapse-item>
                        </div>

                        <div @click="get_scheme(3)">
                          <el-collapse-item title="一次性还本付息" name="3">
                            <div>贷款到期后一次性归还本金和利息；</div>
                            <div>还款期压力大，操作间大，借款人资金调整弹性大，资金利用时间长</div>
                          </el-collapse-item>
                        </div>

                        <div @click="get_scheme(4)">
                          <el-collapse-item title="先息后本" name="4">
                            <div>每月只需支付利息，期末还清本金；</div>
                            <div>资金利用时间长。</div>
                          </el-collapse-item>
                        </div>

                      </el-collapse>
                    </el-form-item>

                    <!--<el-form-item>
                      <div v-if="this.form3.activeName==='1'">
                        <evaluate :scheme="scheme"></evaluate>
                      </div>
                      <div v-else-if="this.form3.activeName==='2'">
                        <evaluate :scheme="scheme"></evaluate>
                      </div>
                      <div v-else-if="this.form3.activeName==='3'">
                        C
                      </div>
                      <div v-else-if="this.form3.activeName==='4'">
                        <evaluate :scheme="scheme"></evaluate>
                      </div>
                    </el-form-item>-->

                    <div style="padding-top: 30px">
                      <el-form-item style="padding-left: 20%;">
                        <el-button type="primary" @click="onSubmit">确定贷款</el-button>
                        <el-button @click="clean_form3">清空重写</el-button>
                      </el-form-item>
                    </div>

                  </el-form>
                  <el-form id="evaluate" class="evaluate" style="background-color: white">
                    <evaluate ref="evaluate" :scheme="scheme" v-on:getSchemeEvent="getScheme"></evaluate>
                  </el-form>
                </div>
              </div>

              <div style="margin: auto;width: 210px;padding-top: 40px;padding-bottom: 20px">
                <el-button-group>
                  <el-button type="primary" icon="el-icon-arrow-left" @click="last">上一步</el-button>
                  <el-button type="primary" @click="next">下一步<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
              </div>


              <div>

              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>


    </el-form>
    <footerBar style="float: bottom"></footerBar>
  </div>
</template>

<script>
  import navi from '@/components/navi.vue';
  import ElCard from "element-ui/packages/card/src/main";
  import footerBar from '@/components/footerBar.vue';
  import rightBar from '@/components/rightBar.vue';
  import evaluate from '@/components/evaluate.vue';
  import checkList from '@/components/checkList.vue';
  import scrollReveal from 'scrollreveal'

  export default {
    name: "large-loan",
    components:{
      ElCard,
      navi,
      footerBar,
      rightBar,
      evaluate,
      checkList
    },
    /* props: {

       title: {

         type: String,

         default: '',

         required: true

       },*/
    beforeCreate: function () {
      localStorage.route = "#loan";
    },
    methods: {

      testAlert(){
        alert("HELLO");
      },

      uploadSuccess(response, file, fileList) {
        console.log("uploadSuccess");
        this.proof += 'http://'+ this.url_config +   ':8000/';
        this.proof += response;
        console.log("this.proof:" + this.proof);
      },

      onSubmit() {
        console.log("确认贷款：" + this.form3.activeName);
        if (this.form3.activeName === "1") {
          this.form3.repaymentType = 'EQUAL_INSTALLMENT_OF_PRINCIPAL_AND_INTEREST';
        } else if (this.form3.activeName === "2") {
          this.form3.repaymentType = 'EQUAL_PRINCIPAL';
        } else if (this.form3.activeName === "3") {
          this.form3.repaymentType = 'ONE_TIME_PAYMENT';
        } else if (this.form3.activeName === "4") {
          this.form3.repaymentType = 'PRE_INTEREST';
        }

        var name = this.form1.name;
        var start_time = this.form1.date1;
        var money = this.form3.money;
        var description = this.form2.textarea1;
        var username = "test";
        var targetType = "LARGE";
        var proof = this.proof;
        var completoinRate = this.form1.least_rate;
        var interestRate = this.form3.rate;
        var duration = this.form3.period;
        var useOfFonds = this.selectedOptions2[1];
        var identityOption = this.layer;
        var repaymentType = this.form3.repaymentType;

        this.$axios.post('/loan/new/large', {
          name: name, startTime: start_time, money: money, projectDescription: description, proof: proof,
          completionRate: completoinRate, interestRate: interestRate, duration: duration, useOfFunds: useOfFonds,
          identityOption: identityOption, repaymentType: repaymentType,
        }).then(
          function (response) {
            console.log(response.data);
            if (response.data.success === true) {
              /*self.$message({
                message:'提交成功！',
                type:'success',
              });*/
              alert("提交成功！");
              this.$router.push({name:'homepage'});
            }else{
              _this.$message({
                message:'提交失败！',
                type:'error',
              });
              alert("提交失败！");
            }
          }
        ).catch(function (error) {
          console.log(error);
        });


      },
      clean_form3() {
        this.form3.activeName = '';
      },

      get_scheme(num) {

        this.visible = true;

        this.scheme.show_table = true;

        var money = parseFloat(this.form3.money);
        var period = parseInt(this.form3.period);
        var rate = parseFloat(this.form3.rate);

        this.scheme.interest_list = [];
        this.scheme.capital_and_interest_list = [];

        if (num === 1) {
          this.get_average_capital_plus_interest(money, period, rate);
        } else if (num === 2) {
          this.get_average_capital(money, period, rate);
        } else if (num === 3) {
          this.scheme.show_table = false;
          this.get_one_off(money, period, rate);
        } else if (num === 4) {
          this.get_interest_first(money, period, rate);
        }

        document.getElementById('small_loan').className += ' animation_left';
        document.getElementById('small_loan').setAttribute('width', '550px');
        document.getElementById('evaluate').style.display = 'block';
        this.show_evaluate = true;
      },

      get_average_capital(money, period, rate) {
        console.log("等额本金");
        console.log(money, period, rate);
        const self = this;
        this.$axios.post('/loan/repayment/ep', {money: money, duration: period, interestRate: rate}).then(
          function (response) {
            var res = response;
            console.log(res.data);


            var month_list = res.data.monthlyData;
            console.log("month_list");
            console.log(month_list);
            for (var i = 0; i < month_list.length; i++) {
              self.scheme.interest_list.push(month_list[i].interest.toFixed(2));
              self.scheme.capital_and_interest_list.push((month_list[i].interest + month_list[i].principal).toFixed(2));
            }

            self.scheme.interest = res.data.interest.toFixed(2);
            self.scheme.sum = res.data.sum.toFixed(2);
            self.scheme.difficulty = parseInt(res.data.note.difficulty);
            self.scheme.capital = parseFloat(self.form3.money);
            /*self.scheme.enough = res.data.note.exceedSurplus;
          self.scheme.change = res.data.note.exceedDisc;*/

            self.scheme.count = res.data.note.exceedSurplusMonths.length;
            self.scheme.months = res.data.note.exceedSurplusMonths;
            if (self.scheme.count == 0) {
              self.scheme.enough = false;
            } else {
              self.scheme.enough = true;
            }
            self.scheme.a = res.data.note.discRatios[0] + "%";
            self.scheme.b = res.data.note.discRatios[1] + "%";
            self.scheme.c = res.data.note.discRatios[2] + "%";
            self.scheme.d = res.data.note.discRatios[3] + "%";
            self.scheme.income = res.data.note.needIncomeMonths;
            self.scheme.count2 = res.data.note.needIncomeMonths.length;
            if (self.scheme.count2 == 0) {
              self.scheme.change = false;
            } else {
              self.scheme.change = true;
            }

            self.scheme.each = self.scheme.sum / parseFloat(self.form3.period);
            self.scheme.activeName = "second";

            self.$refs.evaluate.drawLine();

            console.log("self.scheme.interest_list:" + self.scheme.interest_list);

          }
        ).catch(function (error) {
          console.log(error);
        });
      },

      get_average_capital_plus_interest(money, period, rate) {

        console.log("等额本息");
        console.log(money, period, rate);
        const self = this;
        this.$axios.post('/loan/repayment/eipi', {money: money, duration: period, interestRate: rate}).then(
          function (response) {
            var res = response;
            console.log(res.data);
            self.scheme.interest = res.data.interest.toFixed(2);
            self.scheme.sum = res.data.sum.toFixed(2);
            self.scheme.difficulty = parseInt(res.data.note.difficulty);
            self.scheme.capital = parseFloat(self.form3.money);
            /*self.scheme.enough = res.data.note.exceedSurplus;
          self.scheme.change = res.data.note.exceedDisc;*/

            self.scheme.count = res.data.note.exceedSurplusMonths.length;
            self.scheme.months = res.data.note.exceedSurplusMonths;
            if (self.scheme.count == 0) {
              self.scheme.enough = false;
            } else {
              self.scheme.enough = true;
            }
            self.scheme.a = res.data.note.discRatios[0] + "%";
            self.scheme.b = res.data.note.discRatios[1] + "%";
            self.scheme.c = res.data.note.discRatios[2] + "%";
            self.scheme.d = res.data.note.discRatios[3] + "%";
            self.scheme.income = res.data.note.needIncomeMonths;
            self.scheme.count2 = res.data.note.needIncomeMonths.length;
            if (self.scheme.count2 == 0) {
              self.scheme.change = false;
            } else {
              self.scheme.change = true;
            }

            var month_list = res.data.monthlyData;
            console.log("month_list");
            console.log(month_list);
            for (var i = 0; i < month_list.length; i++) {
              self.scheme.interest_list.push(month_list[i].interest.toFixed(2));
              self.scheme.capital_and_interest_list.push((month_list[i].interest + month_list[i].principal).toFixed(2));
            }

            self.scheme.activeName = "first";

            self.scheme.each = self.scheme.sum / parseFloat(self.form3.period);

            /*self.scheme.difficulty = 4;*/
            console.log("self.scheme.each:" + self.scheme.each);

          }
        ).catch(function (error) {
          console.log(error);
        });

      },

      get_one_off(money, period, rate) {
        console.log("一次性还本付息");
        console.log(money, period, rate);
        const self = this;
        this.$axios.post('/loan/repayment/ep', {money: money, duration: period, interestRate: rate}).then(
          function (response) {
            var res = response;
            console.log(res.data);
            self.scheme.interest = res.data.interest.toFixed(2);
            self.scheme.sum = res.data.sum.toFixed(2);
            self.scheme.difficulty = parseInt(res.data.note.difficulty);
            self.scheme.capital = parseFloat(self.form3.money);
            /*self.scheme.enough = res.data.note.exceedSurplus;
          self.scheme.change = res.data.note.exceedDisc;*/

            self.scheme.count = res.data.note.exceedSurplusMonths.length;
            self.scheme.months = res.data.note.exceedSurplusMonths;
            if (self.scheme.count == 0) {
              self.scheme.enough = false;
            } else {
              self.scheme.enough = true;
            }
            self.scheme.a = res.data.note.discRatios[0] + "%";
            self.scheme.b = res.data.note.discRatios[1] + "%";
            self.scheme.c = res.data.note.discRatios[2] + "%";
            self.scheme.d = res.data.note.discRatios[3] + "%";
            self.scheme.income = res.data.note.needIncomeMonths;
            self.scheme.count2 = res.data.note.needIncomeMonths.length;
            if (self.scheme.count2 == 0) {
              self.scheme.change = false;
            } else {
              self.scheme.change = true;
            }

            self.scheme.activeName = "third";


            self.scheme.each = self.scheme.sum / parseFloat(self.form3.period);

            /*self.scheme.difficulty = 4;*/
            console.log("self.scheme.each:" + self.scheme.each);

          }
        ).catch(function (error) {
          console.log(error);
        });
      },

      get_interest_first(money, period, rate) {
        console.log("先息后本");
        console.log(money, period, rate);
        const self = this;
        this.$axios.post('/loan/repayment/ep', {money: money, duration: period, interestRate: rate}).then(
          function (response) {
            var res = response;
            console.log(res.data);
            self.scheme.interest = res.data.interest.toFixed(2);
            self.scheme.sum = res.data.sum.toFixed(2);
            self.scheme.difficulty = parseInt(res.data.note.difficulty);
            self.scheme.capital = parseFloat(self.form3.money);
            /*self.scheme.enough = res.data.note.exceedSurplus;
          self.scheme.change = res.data.note.exceedDisc;*/

            self.scheme.count = res.data.note.exceedSurplusMonths.length;
            self.scheme.months = res.data.note.exceedSurplusMonths;
            if (self.scheme.count == 0) {
              self.scheme.enough = false;
            } else {
              self.scheme.enough = true;
            }
            self.scheme.a = res.data.note.discRatios[0] + "%";
            self.scheme.b = res.data.note.discRatios[1] + "%";
            self.scheme.c = res.data.note.discRatios[2] + "%";
            self.scheme.d = res.data.note.discRatios[3] + "%";
            self.scheme.income = res.data.note.needIncomeMonths;
            self.scheme.count2 = res.data.note.needIncomeMonths.length;
            if (self.scheme.count2 == 0) {
              self.scheme.change = false;
            } else {
              self.scheme.change = true;
            }

            self.scheme.activeName = "fourth";

            var month_list = res.data.monthlyData;
            console.log("month_list");
            console.log(month_list);
            for (var i = 0; i < month_list.length; i++) {
              self.scheme.interest_list.push(month_list[i].interest.toFixed(2));
              self.scheme.capital_and_interest_list.push((month_list[i].interest + month_list[i].principal).toFixed(2));
            }

            self.scheme.each = self.scheme.sum / parseFloat(self.form3.period);

            /*self.scheme.difficulty = 4;*/
            console.log("self.scheme.each:" + self.scheme.each);

          }
        ).catch(function (error) {
          console.log(error);
        });
      },

      last() {
        if (this.active > 0) {
          this.active--;
        }

        if (this.active === 0) {
          document.getElementById("primary").style.display = "block";
          document.getElementById("information").style.display = "none";
          document.getElementById("small_loan").style.display = "none";
          document.getElementById("evaluate").style.display = "none";
        } else if (this.active === 1) {
          document.getElementById("primary").style.display = "none";
          document.getElementById("information").style.display = "block";
          document.getElementById("small_loan").style.display = "none";
          document.getElementById("evaluate").style.display = "none";
        } else if (this.active === 2) {
          document.getElementById("primary").style.display = "none";
          document.getElementById("information").style.display = "none";
          document.getElementById("small_loan").style.display = "block";
        }
      },

      next() {
        if (this.active < 2) {
          this.active++;
        }

        if (this.active === 0) {
          document.getElementById("primary").style.display = "block";
          document.getElementById("information").style.display = "none";
          document.getElementById("small_loan").style.display = "none";
        } else if (this.active === 1) {
          document.getElementById("primary").style.display = "none";
          document.getElementById("information").style.display = "block";
          document.getElementById("small_loan").style.display = "none";
        } else if (this.active === 2) {
          document.getElementById("primary").style.display = "none";
          document.getElementById("information").style.display = "none";
          document.getElementById("small_loan").style.display = "block";
          if (this.show_evaluate) {
            document.getElementById("evaluate").style.display = "block";
          }
        }

      },
      get_layer(num) {
        console.log(num);
        if (num === 1) {
          this.layer = "ONE";
          this.form2.layer1 = true;
          this.form2.layer2 = true;
          this.form2.layer3 = true;
          this.form2.layer4 = true;
        } else if (num === 2) {
          this.layer = "TWO";
          this.form2.layer1 = false;
          this.form2.layer2 = true;
          this.form2.layer3 = true;
          this.form2.layer4 = true;
        } else if (num === 3) {
          this.layer = "THREE";
          this.form2.layer1 = false;
          this.form2.layer2 = false;
          this.form2.layer3 = true;
          this.form2.layer4 = true;
        } else if (num === 4) {
          this.layer = "FOUR";
          this.form2.layer1 = false;
          this.form2.layer2 = false;
          this.form2.layer3 = false;
          this.form2.layer4 = true;
        }
      },
      handleChange(value) {
        console.log(value);
      },
      getRate() {
        const self = this;
        this.$axios.post('/loan/rate').then(
          function (response) {
            let res = response;
            console.log("rate");
            console.log(res.data);
            self.form3.rate = res.data;
            self.form3.recommendRate = res.data;
          }
        ).catch(function (error) {
          console.log("error in  rate");
          console.log(error);
        });
      },
      getRateRange() {
        const self = this;
        this.$axios.post('/loan/rateRange').then(
          function (response) {
            var res = response;
            console.log('rateRange');
            console.log(res.data.lower);
            console.log(res.data.upper);
            self.form3.lowerRate = res.data.lower;
            self.form3.upperRate = res.data.upper;
          }
        ).catch(function (error) {
          console.log("error in rateRange")
          console.log(error);
        });
      },
      getTimeRange(a) {
        const self = this;
        var money = parseFloat(a.money);
        this.$axios.get('/loan/timeRange', {
          params: {
            money: money
          }
        }).then(
          function (response) {
            console.log("timeRange");
            var res = response;
            console.log("timeRange");
            console.log(res.data.lower);
            console.log(res.data.upper);
            self.form3.lowerPeriod = res.data.lower;
            self.form3.upperPeriod = res.data.upper;
          }
        ).catch(function (error) {
          console.log("error in timeRange");
          console.log(error);
        });
      },
      getScheme(activeName){

        var num;
        if(activeName === "first"){
          this.form3.activeName = "1";
          num = 1;
        }else if(activeName === "second"){
          this.form3.activeName = "2";
          num = 2;
        }else if(activeName === "third"){
          this.form3.activeName = "3";
          num = 3;
        }else if(activeName === "fourth"){
          this.form3.activeName = "4";
          num = 4;
        }

        this.get_scheme(num);
      }

    },

    data() {
      return {
        active: 0,
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
        url: "http://" + this.url_config +  ":8000/upload/image",
        proof: '',
        visible: false,
        form1: {
          name: '',
          date1: '',
          date2: '',
          least_rate: ''
        },
        form2: {
          user: '',
          region: '',
          textarea1: '',
          layer1: true,
          layer2: true,
          layer3: true,
          layer4: true,
        },
        form3: {
          money: '',
          period: '',
          rate: '',
          create: false,
          activeName: '',
          recommendRate: '',
          lowerRate: '',
          upperRate: '',
          lowerPeriod: 0,
          upperPeriod: 0,
          repaymentType: '',

        },

        scheme: {
          difficulty: 0,
          capital: 0,
          interest: 0,
          sum: 0,
          each: 0,
          count: 0,
          months: [],
          enough: false,
          change: true,
          a: '',
          b: '',
          c: '',
          d: '',
          income: [],
          count2: 0,
          interest_list: [],
          capital_and_interest_list: [],
          period: [],
          activeName:'first',
          show_table : true,
        },

        limit: 3000,

        usage_radio: 3,
        textarea2: '',

        layer: 'ONE',

        options: [{
          value: '交换生',
          label: '交换生'
        }, {
          value: 'GMAT',
          label: 'GMAT'
        }, {
          value: 'TOEFL',
          label: 'TOEFL',
        }, {
          value: 'IELTS',
          label: 'IELTS',
        }, {
          value: '大额考证',
          label: '大额考证'
        }],
        selectedOptions2: [],
        scrollReveal: scrollReveal(),
        show_evaluate: false,

      };//return
    },
    watch: {
      form3: {
        handler(a) {
          this.getRate();
          this.getRateRange();
          this.getTimeRange(a);
        },
        deep: true
      }
    },


  }
</script>

<style scoped>

  .back{
    /*min-height: 1200px;*/
    width: 100%;
    display:flex;
    background-image: url("../../static/pic/loanBack.jpg");
    background-size:100% 100%;
  }

  .sheet{
    margin-top: 40px;

  }

  .primary_info{
    width:750px;
    margin-top: 50px;
    margin-left: 50px;
    border:2px #d6d6d6 solid;
    border-radius:20px;
    padding:10px 50px 20px 40px;
    position: relative;
    background-color: white;
  }
  .title{
    font-size: 23px;
    color: #6a6a6a;
    padding-bottom: 20px;
  }

  .animation_left{
    -webkit-animation:move_left 0.5s;
    -webkit-animation-iteration-count:1;
    -webkit-animation-fill-mode:forwards;
  }

  @-webkit-keyframes move_left /* Safari and Chrome */
  {
    0%   {left:0;  width:750px;}
    100% {left:-150px; width:500px;}
  }

  .evaluate{
    display: none;
    margin-top: 50px;
    margin-left: -80px;
    border:2px #d6d6d6 solid;
    border-radius:20px;
    padding:30px 20px 20px 20px;
  }

  .test{
    opacity: 0.5;
  }


</style>
