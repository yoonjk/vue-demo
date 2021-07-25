<template>
    <div>
        <h1> 이벤트 예제 </h1>
        <p>{{ year }} </p>
        <button v-on:click="plus" >plus</button>
        <button v-on:click="minus">minus </button>
    </div>
</template>
<script>
export default {
   data() {
       return {
           year: 2018
       }
   },
   methods: {
       plus() {
           this.year++;
       },
       minus() {
           this.year--;
       }
   }
}
</script>
<style scoped>

</style>