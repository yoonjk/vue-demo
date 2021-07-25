<template>
    <div>
        <h1> 이벤트 예제 </h1>
        <p>{{ year }} </p>
        <button v-on:click="plus" >plus</button>
        <button @click="doublePlus" >double plus</button>
        <button v-on:click="minus">minus </button>

        <p> 양방향 이벤트 </p>
        <input type="text" :value="text" @keyup="updateText"><br>
        {{text}}<br>

        <input type="text" v-model="text2"><br>
        {{text2}}<br>
        
        <div>
            <p> {{ reversedMessage }} </p>
        </div>

        <div>
            <p> {{ message }} </p>
            <button @click="changeMessage">Click</button><br>
        </div>
    </div>
</template>
<script>
export default {
   data() {
       return {
           year: 2018,
           text: 'test',
           text2: 'test2',
           message: '안녕하세요',
           updatedMessage: '아니요'
       }
   },
   methods: {
       plus() {
           this.year++;
       },
       changeMessage() {
           this.message = 'ibm';
       },
       doublePlus() {
           this.year = this.year + 2;
       },
       minus() {
           this.year--;
       },
       updateText(e) {
           this.text = e.target.value;
       }
   },
   computed: {
       reversedMessage() {
           return this.message.split('').reverse().join('');
       }
   },
   watch: {
       message(newVal, oldVal) {
           console.log('oldVal:'+oldVal + 'newVal:'+ newVal);
           this.updatedMessage = 'good';
       }
   }
}
</script>
<style scoped>

</style>