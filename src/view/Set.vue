<template>
  <div class="set">
    <h3>为什么要使用$set()</h3>
    <br />
    <p>vue中不能检测到数组和对象的两种变化：</p>
    <p>1、数组长度的变化 vm.arr.length = 4</p>
    <p>2、数组通过索引值修改内容 vm.arr[1] = 'aa'</p>
    <p>Vue.$set(target,key,value)可以动态的给数组、对象添加修改数据，并更新视图中数据的显示。</p>
    <p>vue在构造函数new Vue()时，就通过Object.defineProperty中的getter和setter 这两个方法，完成了对数据的绑定。所以直接通过vm.arr[1] = 'aa'的方法，无法修改值触发vue中视图的更新，必须还得通过Object.defineProperty的方法去改变，而Vue.$set()就封装了js底层的Object.defineProperty方法。</p>
    <br />
    <p>{{arrayList}}</p>
    <button @click="changeArrayItem">改变数组中的变量changeArrayItem</button>
    <button @click="changeArray">改变数组项changeArray</button>
    <button @click="changeArrayErr">无法改变数组项的方法changeArrayErr</button>
    <button @click="back">恢复back</button>
    <pre>
      <code>changeArray() {
        this.$set(this.arrayList, 2, {
          name: 33,
          id: 33
        });
      },
      changeArrayItem() {
        this.arrayList[2].name = 333;
      },
      changeArrayErr() {
        this.arrayList[2] = {
          name: 3333,
          id: 3333
        };
      },
      back() {
        this.arrayList = [
          {
            name: 1,
            id: 1
          },
          {
            name: 2,
            id: 2
          },
          {
            name: 3,
            id: 3
          }
        ];
      }</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: "Set",
  data() {
    return {
      arrayList: [
        {
          name: 1,
          id: 1
        },
        {
          name: 2,
          id: 2
        },
        {
          name: 3,
          id: 3
        }
      ]
    };
  },
  methods: {
    changeArray() {
      this.$set(this.arrayList, 2, {
        name: 33,
        id: 33
      });
    },
    changeArrayItem() {
      this.arrayList[2].name = 333;
    },
    changeArrayErr() {
      this.arrayList[2] = {
        name: 3333,
        id: 3333
      };
    },
    back() {
      this.arrayList = [
        {
          name: 1,
          id: 1
        },
        {
          name: 2,
          id: 2
        },
        {
          name: 3,
          id: 3
        }
      ];
    }
  },
  components: {}
};
</script>

<style lang="scss">
.set {
  width: 100%;
  height: 100%;
  pre {
    background-color: #282c34;
    color: #fff;
    border-radius: 6px;
    line-height: 1.4;
    padding: 15px 10px 0;
    margin: 10px 0;
    overflow: auto;
  }
}
</style>
