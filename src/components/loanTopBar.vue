<template>
  <!--<div class="col-sm-12 col-md-12">
    <div style="margin-top:1%;margin-left:1%;">
      <span><b>投资金额&nbsp&nbsp&nbsp</b></span>
      <el-radio-group v-model="value_radio1">
        <el-radio-button label="100以下"></el-radio-button>
        <el-radio-button label="100-500"></el-radio-button>
        <el-radio-button label="500-1000"></el-radio-button>
        <el-radio-button label="1000以上"></el-radio-button>
      </el-radio-group>
      <el-input-number v-model="num1" @change="handleChange" :min="1" :max="100000000" label="描述文字"></el-input-number>
    </div>
    <div style="margin-top:2%;margin-left:1%;">
      <span><b>项目类型&nbsp&nbsp&nbsp</b></span>
      <el-select v-model="value_radio2" style="width:180px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span><b>&nbsp&nbsp借款名称&nbsp&nbsp</b></span>
      <el-input v-model="input" placeholder="请输入内容" style="width:180px"></el-input>
    </div>
    <div style="margin-top:1%;margin-left:1%;">
      <span><b>开始时间&nbsp&nbsp&nbsp</b></span>
      <el-date-picker
        v-model="date1"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0" style="width:180px;">
      </el-date-picker>
      <span><b>&nbsp&nbsp结束时间&nbsp</b></span>
      <el-date-picker
        v-model="date2"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0" style="width:180px;">
      </el-date-picker>
      <el-button type="primary" icon="el-icon-search" style="margin-top: 15px;margin-left: 20px">一键搜索</el-button>
    </div>
    <br>
    <hr>
  </div>-->
  <div>
    <el-form v-model="radioData">
      <el-form-item label="投资金额">
        <el-radio-group v-model="radioData.money">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="100以下"></el-radio-button>
          <el-radio-button label="100-500"></el-radio-button>
          <el-radio-button label="500-1000"></el-radio-button>
          <el-radio-button label="1000以上"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="项目时间">
        <el-radio-group v-model="radioData.date">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="15天之内"></el-radio-button>
          <el-radio-button label="1个月之内"></el-radio-button>
          <el-radio-button label="6个月之内"></el-radio-button>
          <el-radio-button label="6个月以上"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="项目状态">
        <el-radio-group v-model="radioData.state">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="正在还款"></el-radio-button>
          <el-radio-button label="转让审核"></el-radio-button>
        </el-radio-group>

      </el-form-item>
    </el-form>
    <hr>
  </div>

</template>

<script>
    export default {
        name: "info-top-bar",
        data(){
          return{
            radioData:{
              money:'全部',
              date:'全部',
              state:'全部'
            },
          }//return
        },
      methods: {
        handleChange(value) {
          console.log(value);
        },
      },
      watch:{
          radioData:{
            handler(a){
              var money = this.radioData.money;
              var date = this.radioData.date;
              var state = this.radioData.state;

              this.$emit("getConditionEvent",money,date,state);

              /*console.log("money:"+this.radioData.money);
              console.log("date:"+this.radioData.date);
              console.log("state:"+this.radioData.state);*/
            },
            deep:true
          }
      }
    }
</script>

<style scoped>

</style>
