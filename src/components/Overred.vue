<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-12-06 09:51:01
 -->
<template>
  <div class="hotBox">
    <div class="top">【红文】- 完结小说</div>
    <div class="bottom">
      <div class="content">
        <ul>
          <router-link to="/bookinfo">
            <li v-for="(book,index) in books" :key="index" >
                <img :src="book.img" />
                <span>{{book.name}}</span>
                <p>{{book.author}}</p>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
 <script>
import $ from "jquery";
export default {
  name: "Get",
  data() {
    return {
      books: []
    };
  },
  created() {
    fetch("http://localhost:3000/books")
      .then(res => {
        // console.log("---------第一次" + res);
        return res.json();
      })
      .then(data => {
        this.books = data.slice(0, 8);
        // console.log(data.slice(0, 8));
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    changes: function() {
      fetch("http://localhost:3000/books/")
        .then(res => {
          console.log("-----2" + res);
          return res.json();
        })
        .then(data => {
          let obj = data;
           this.books = data.slice(8,16);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" type="text/css" scoped >
.hotBox {
  margin: 0 auto 0.1rem;
  width: 100%;
  background-color: white;
}
.top {
  width: 2rem;
  height: 0.4rem;
  font-size: 0.2rem;
  line-height: 0.4rem;
  padding-left: 0.2rem;
}
.bottom {
  width: 100%;
  height:4rem;
}
.content {
  width: 100%;
  height: 2.5rem;
}
ul {
  width: 100%;
  height: 4.5rem;
  padding: 10px 0;
}

li {
  width: 0.87rem;
  height: 1.9rem;
  float: left;
  margin: 0 3px;
  color: black;
    
}
.content img {
  display: block;
  width: 100%;
  height: 1.2rem;
  border-radius: 0.05rem;
}
span {
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px 0;
}

</style>
