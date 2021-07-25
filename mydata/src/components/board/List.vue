<template>	
	<div>
		<h1>게시판 </h1>
		<p>{{ title }} </p>
		<p>{{ sayHello()}} </p>
		<p>{{ Date() }} </p>
		<p>{{ howAreYou()}} </p>

		<ul>
			<li v-for="todo in todos" v-bind:key="todo">{{ todo.text }} </li>
		</ul>
		<h3><input type="checkbox" v-model="smile" /> 웃어요 개구리</h3>
		<h1>카운터: {{ number }}</h1>
		<button v-on:click="inc">증가</button>
		<button v-on:click="decre">감소</button>

		<p> Input </p>
		<input type="text" :value="inputData" />
		<a :href="getVueStudyUrl('kossiecoder')">코지 코더 채널</a>
	</div>
</template>

<script>
export default {
    data() {
       return {
        title: 'test',
		smile: true,
		feelsgood: `https://imgh.us/feelsgood_1.jpg`,
		feelsbad: 'http://imgh.us/feelsbad.jpg',
		todos: [
			{ text: 'Vue.js 튜토리얼 작성하기' },
			{ text: 'Webpack2 알아보기' },
			{ text: '사이드 프로젝트 진행하기' }
		],
		number: 0,
		inputData: 'test-value',
		link: 'https://www.youtube.com/'
       }
    },
    methods: {
		howAreYou() {
			return "기분이 어때?"
		},
		sayHello() {
			return this.title
		},
		getVueStudyUrl(channel) {
			return this.link + channel
		},
		inc() {
			this.number++;
		},
		decre() {
			this.number--;
		}
     }
	
}
</script>

<style scoped>

</style>