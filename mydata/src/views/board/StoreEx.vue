<template>
    <div>
        <h1>
        module1
        </h1>
        <h3>{{ module1 }}</h3>

        <p>module1 값 변경</p>
        <input type="text" v-model="module1Value">
        <button type="button" @click="changeModule1Value">변경</button>
        <br />
        <h1>
        module2
        </h1>
        <h3>{{ module2 }}</h3>
        <input type="text" v-model="module2Value">
        <button type="button" @click="changeModule2Value">변경</button>

        <p>module3 값 변경</p>
        <div class="vuex">

            <h1>Vuex 화면 입니다.</h1>
            count : {{ module3 }}
        </div>

        <div class="hello">

            <b>count 2 : {{doneTodosCount}}</b><br>
            <b>count 3 : {{getTodoById(1)}}</b><br>
            <b>count 4 : {{inc}}</b><br>
            <b>count 5 : {{ module3 }}</b><br>
            <b>count 6 : {{ getCnt }}</b><br>
            <b>count 7 : {{ module3 }}</b><br>
        </div>    
    </div>
</template>
<script>

import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      module1Value: '',
      module2Value: ''
    };
  },
  methods: {
    changeModule1Value() {
      this.$store.dispatch('setModule1Value', this.module1Value);
    },
    changeModule2Value() {
      this.$store.dispatch('setModule2Value', this.module2Value);
    }
  },
  computed: {
    ...mapState({
      module1: state => state.module1.module1Value,
      module2: state => state.module2.module2Value,
      module3: state => state.module3.count
    }),
    ...mapGetters({
      module1ValueWithHello: 'module1ValueWithHello',
      module2ValueWithHello: 'module2ValueWithHello',
      doneTodosCount: 'doneTodos',
      getTodoById: 'getTodoById',
      getCnt: 'getCount',
      inc: 'inc'
    })
  },
  components: {
  }
}
</script>

<style scoped>
.red {
	color: red;
}
.font-bold {
	font-weight: bold;
}
</style>
