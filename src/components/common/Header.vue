<template>
  <header>
    <div class="header">
      <div class="header-logo">
        <img src="../../assets/images/logo.png" alt="小鹿线" title="小鹿线">
      </div>
      <div class="header-nav">
        <ul>
          <li>首页</li>
          <li>课程</li>
          <li>会员</li>
          <li>简历</li>
          <li>博客</li>
          <li>系统班</li>
        </ul>
      </div>
      <div class="header-search">
        <input type="text" placeholder="请输入要搜索的课程" id="keywords" name="courseName" value="">
        <div class="searchicon">
          <el-icon :size="25">
            <Search />
          </el-icon>
        </div>
      </div>
      <div class="header-login">
        登录/注册
      </div>


    </div>
  </header>
</template>

<script setup>

</script>
<style scoped lang="less">
header {
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 5px 5px #aaa;
  position: relative;
}

.header {
  width: 1140px;
  height: 100px;
  display: flex;

  .header-logo {
    width: 140px;
    display: flex;
    align-items: center;

    img {
      width: 140px;
      height: 56px;
    }
  }

  ;

  .header-nav {
    width: 480px;
    display: flex;
    margin-left: 30px;

    ul {
      display: flex;

      li {
        width: 80px;
        font-size: 16px;
        color: #808080;
        text-align: center;
        align-self: center;
      }
    }
  }

  ;

  .header-search {
    display: flex;
    width: 200px;
    margin-left: 158px;
    margin-right: 50px;
    align-self: center;

    input {
      width: 160px;
      height: 40px;
      border: none;
      outline: none;
      border-radius: 10px 0 0 10px;
      background-color: #f0f2f4;
    }

    ;

    .searchicon {
      width: 40px;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f0f2f4;
      border-radius: 0 10px 10px 0;
    }
  }

  ;

  .header-login {
    width: 82px;
    text-align: center;
    align-self: center;
  }
}
</style>