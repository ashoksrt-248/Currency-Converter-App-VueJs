<template>
  <div class="hello">
    <h1>Currency Convertor App</h1>
    <h2 class="usd">USD: <input  type="text" v-model="usd" ></h2> <br/>
    <h2 class="inr">INR: <input  type="text" v-model="inr"></h2>    
  </div>
</template>

<script>
export default {
  name: 'CurrencyConvertor',
  data() {
    return {
      usd: 0,
      inr: 0
    };
  },
  watch:{
    usd: function(val){
      this.usd = val;
      this.inr = val*74;
    },
    inr: function(val){
      this.usd = val/74;
      this.inr = val;
    }
  }
}
</script>

<style scoped>
.hello{background-color:tomato;width:50%;margin:0 auto;height:240px;}
.usd{color:teal;}
.inr{color: steelblue;}
input{border:none;height:25px;border-radius: 3px;}
</style>
