<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <!-- <a href="###">登录</a> -->
            <router-link to="/login">登录</router-link>
            <!-- <a href="###" class="register">免费注册</a> -->
            <router-link class="register" to="/register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <!-- <button class="sui-btn btn-xlarge btn-danger" type="button">
            搜索
          </button> -->
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    // 点击搜索按钮,跳转到搜索页面
    goSearch() {
      // 第一种路由传参: 其实就是纯字符串
      /*       this.$router.push(
        "/search/" + this.keyword + "?k=" + this.keyword.toUpperCase()
      ); */
      // 第二种模板字符串形式:
      /*       this.$router.push(
        `/search/${this.keyword}?k=${this.keyword.toUpperCase()}`
      ); */
      // 第三种就是对象的写法:
      this.$router.push(
        {
          // 这里注意要给search路由起一个名字
          name: "search",
          params: {
            keyword: this.keyword,
          },
          // 虽然params可传可不传,但是如果params参数传递的是空字符串""(keyword: ""),那么会出现路径问题(search不显示在路径中)
          // 解决办法 给params参数传递的时候使用undefined,即 params:{keyword: "" || undefined }
          query: {
            k: this.keyword.toUpperCase(),
          },
        },
 /*        // 成功的回调
        () => {},
        // 失败的回调
        (error) => console.log(error) */
      ); // 返回的是一个promise对象,通过传递成功和失败的回调虽然解决了警告报错的问题,但是治标不治本
      // 解决方法: 重写vue-router的push和replace方法

      // path传递参数:
      /*       this.$router.push({
        path: `/search/${this.keyword}`,
        // 注意使用path的方式param参数无效
        // param: {
        //   keyword: this.keyword,
        // },
        query: {
          k: this.keyword.toUpperCase(),
        },
      }); */
    },
  },
};
</script>

<style lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
