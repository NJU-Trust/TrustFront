<template>
    <div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="项目名称"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="money"
          label="借款金额(元)"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="year_rate"
          label="年利率"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="launch_date"
          label="发布时间"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="state"
          label="项目状态"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop=""
          label="项目详情"
          align="center"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="getRepayDetail(scope.row.targetId,scope.row.name)">查看</el-button>
          </template>
        </el-table-column>

      </el-table>

      <div class="projectPanel">
        <div class="projectPages">

        </div>
       <!-- <div id="poj_pagination" class="poj_pagination">
          <div class="block">
            &lt;!&ndash;<span class="demonstration">完整功能</span>&ndash;&gt;
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage1"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="40">
            </el-pagination>
          </div>
        </div>-->

      </div>

    </div>
</template>

<script>
    export default {
        name: "loan-launched",
        data(){
          return{
            tableData:[],
            a:{
              targetId:0,
              targetName:''
            },
            currentPage1:1
          }// end return
        },
     methods: {
       handleSizeChange(val) {
         console.log(`每页 ${val} 条`);
       },
       handleCurrentChange(val) {
         console.log(`当前页: ${val}`);
       },
       getTableData(moneyUpper,moneyLower,targetType,name,startDate,endDate){
         console.log(moneyUpper,moneyLower,targetType,name,startDate,endDate);
         this.tableData = [];
         var list = [];
         const self = this;
         this.$axios.post('/loan/info/released',{
           moneyUpper:moneyUpper,
           moneyLower:moneyLower,
           targetType:targetType,
           name:name,
           startDate:startDate,
           endDate:endDate
         }).then(
           function(response){
             console.log(response.data);
             list = response.data;

             for(var i=0;i<list.length;i++){
               self.tableData.push({name:list[i].name, money:list[i].money, year_rate:list[i].interestRate,
                 launch_date:list[i].duration[0],state:list[i].state,targetId:list[i].targetId});
             }
             console.log("tableData:");
             console.log(self.tableData);

           }
         ).catch(function (error) {
           console.log("error in Underway");
           console.log(error);
         });

       },

       getRepayDetail(targetId,targetName){
         console.log("targetId in loanUnderway:"+targetId);
         this.a.targetId = targetId;
         this.a.targetName = targetName
         //console.log("a in loanUnderway:"+this.a.targetId);
         this.$router.push({name:'repay',params:this.a});
       }
     },
    }
</script>

<style scoped>

  .poj_pagination{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }

</style>
