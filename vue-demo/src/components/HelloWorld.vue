<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item.q }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data() {
    return {
      list: [],
    };
  },
  created() {
    const url = 'http://localhost:8888/search';
    const method = 'get';
    axios({
      url,
      method,
      data: { plant: 'CN30', partNumber: '114-0038H' },
      headers: { 'content-type': 'text/plain; charset=UTF-8' },
    })
      .then((res) => {
        this.list = res.data.g;
        console.log(res.data.g);
      })
      .catch((error) => {
        throw error;
      });
  },
};
</script>

<style lang='scss' scoped>
</style>
