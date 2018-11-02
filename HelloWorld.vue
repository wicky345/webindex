<template>
<div>
<el-input placeholder="请输入你的名字" v-model="msgname" size="large"></el-input>
<el-input placeholder="请输入你的年龄" v-model="msgage" size="large"></el-input>
<el-button type="primary" @click="add()">添加信息</el-button>
<el-input placeholder="请输入搜索关键字" v-model="searchmsg" size="large"></el-input>
<el-button type="primary" @click="search(searchmsg,tabledata)">搜索</el-button>
<el-table :data="tabledata" border style="width:58%;text-align:left">
<el-table-column prop="id" label="序号" width="180">
</el-table-column>
<el-table-column prop="name" label="姓名" width="180">
</el-table-column>
<el-table-column prop="age" label="年龄" width="180">
</el-table-column>
<el-table-column label="delete" width="120">
<template slot-scope="scope">
        <el-button
          @click="Delete(scope.$index, tabledata)"
          type="primary"
          size="small">
          删除
        </el-button>
</template>
</el-table-column>
<el-table-column label="edit" width="120">
  <template slot-scope="scope">
    <el-button 
    type="primary" 
    size="small"
     @click="edit(scope.$index)">编辑</el-button>
    </template>
    </el-table-column>
</el-table>
</div>
</template>
<script>
export default {
  data() {
    return {
      msgname: "",
      msgage: "",
      searchmsg: "",
      tabledata: [
        { id: "1", name: "nancy", age: "20" },
        { id: "2", name: "cindy", age: "30" },
        { id: "3", name: "lucy", age: "40" }
      ]
    };
  },
  methods: {
    add() {
      this.tabledata.push({
        id: this.tabledata.length + 1,
        name: this.msgname,
        age: this.msgage
      });
    },
    Delete(index, rows) {
      rows.splice(index, 1);
    },
    edit(index) {
      var newname = prompt("请输入更新后姓名");
      var newage = prompt("请输入更新后年龄");
      this.tabledata[index].name = newname;
      this.tabledata[index].age = newage;
    },
    search(searchmsg, tabledata) {
      var searchResult = [];
      var items = this.tabledata;
      for (var i = 0; i < items.length; i++) {
        var msg = items[i].name + "," + items[i].age;
        if (msg.indexOf(searchmsg) > -1) {
          searchResult.push(items[i]);
        }
      }
      this.tabledata = searchResult;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-input {
  width: 200px;
  float: left;
  margin-bottom: 10px;
}
.el-button {
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>