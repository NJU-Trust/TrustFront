<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="正在进行" name="first" >
        <loanTopBar v-on:getConditionEvent="getCondition"></loanTopBar>
        <loanUnderway ref="underway"></loanUnderway>
      </el-tab-pane>
      <el-tab-pane label="完成项目" name="second" >
        <loanTopBar></loanTopBar>
        <loanComplete ref="complete"></loanComplete>
      </el-tab-pane>
      <el-tab-pane label="已发布项目" name="third">
        <loanTopBar></loanTopBar>
        <loanLaunched ref="launched"></loanLaunched>
      </el-tab-pane>
      <el-tab-pane label="违约记录" name="fourth">
        <loanTopBar></loanTopBar>
        <loanUnbelievable ref="unbelievable"></loanUnbelievable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

  import personalCenter from "./personalCenter";
  import loanTopBar from "./loanTopBar";
  import loanUnderway from "./loanUnderway"
  import loanComplete from "./loanComplete"
  import loanLaunched from "./loanLaunched"
  import loanUnbelievable from "./loanUnbelievable"

    export default {
      name: "loan-information-pane",
      components: {personalCenter,loanTopBar,loanUnderway,loanComplete,loanLaunched,loanUnbelievable},
      mounted:function(){
        this.getUnderway();
      },
      data() {
        return {
          currentPage1: 2,
          activeName: 'first',
          paneName:'',

          condition:{
            moneyUpper:null,
            moneyLower:null,
            targetType:null,
            name:null,
            startDate:null,
            endDate:null
          },

        };
      },
      methods:{
        handleClick(tab, event) {
          this.paneName = tab.name;
          console.log(this.paneName);
          if(this.paneName==='first'){
            this.getUnderway();
          }else if(this.paneName==='second'){
            this.getComplete();
          }else if(this.paneName==='third'){
            this.getLaunched();
          }else if(this.paneName==='fourth'){
            this.getUnbelieve();
          }
        },
        getUnderway(){

          var moneyUpper = this.condition.moneyUpper;
          var moneyLower = this.condition.moneyLower;
          var targetType = this.condition.targetType;
          var name = this.condition.name;
          var startDate = this.condition.startDate;
          var endDate = this.condition.endDate;

          console.log("正在进行");
          this.$refs.underway.getTableData(moneyUpper,moneyLower,targetType,name,startDate,endDate);
        },
        getComplete(){
          console.log("已完成");

          var moneyUpper = this.condition.moneyUpper;
          var moneyLower = this.condition.moneyLower;
          var targetType = this.condition.targetType;
          var name = this.condition.name;
          var startDate = this.condition.startDate;
          var endDate = this.condition.endDate;

          this.$refs.complete.getTableData(moneyUpper,moneyLower,targetType,name,startDate,endDate);
        },
        getLaunched(){
          console.log("已发布");

          var moneyUpper = this.condition.moneyUpper;
          var moneyLower = this.condition.moneyLower;
          var targetType = this.condition.targetType;
          var name = this.condition.name;
          var startDate = this.condition.startDate;
          var endDate = this.condition.endDate;

          this.$refs.launched.getTableData(moneyUpper,moneyLower,targetType,name,startDate,endDate);
        },
        getUnbelieve(){
          console.log("违约记录");

          var moneyUpper = this.condition.moneyUpper;
          var moneyLower = this.condition.moneyLower;
          var targetType = this.condition.targetType;
          var name = this.condition.name;
          var startDate = this.condition.startDate;
          var endDate = this.condition.endDate;

          this.$refs.unbelievable.getTableData(moneyUpper,moneyLower,targetType,name,startDate,endDate);
        },
        getCondition(money,date,state){
          console.log("data in loanInformation");
          console.log("money:"+money);
          console.log("date:"+date);
          console.log("state:"+state);

        }
      }
    }
</script>

<style scoped>

</style>

<style>
  .el-tabs__item{
    font-size: 18px !important;
  }
</style>
