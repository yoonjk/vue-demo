<template>	
	<div>
		<h1>게시판 </h1>
		<p>{{ title }} </p>
		<p>{{ sayHello()}} </p>
		<p>{{ Date() }} </p>
		<p>{{ howAreYou()}} </p>

		<ul>
			<li v-for="todo in todos" v-bind:key="todo.text">{{ todo.text }} </li>
		</ul>
		<h3><input type="checkbox" v-model="smile" /> 웃어요 개구리</h3>
		<h1>카운터: {{ number }}</h1>
		<button v-on:click="inc">증가</button>
		<button v-on:click="decre">감소</button>

		<p> Input </p>
		<input type="text" :value="inputData" />
		<a :href="getVueStudyUrl('kossiecoder')">코지 코더 채널</a>

		<p> comboBox </p>
		<select class="form-control" v-model="region" @change="changeRegion">
			<option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
		</select>

		<p> table example </p>
		<table class="table table-bordered" v-show="tableShow">
			<tr :key="i" v-for="(d,i) in options">
				<td>{{d.v}}</td>
				<td>{{d.t}}</td>
			</tr>	
		</table>
		<div>
			<p :class="{ red: isRed, 'fontSize': isBold }" >Hello for binding class</p>
			<p :style="{ color: red, fontSize: size }" >Hello for binding style</p>
			<p :style="styleObject" >Hello for binding style object</p>
			<button @click="update">ClickMe</button>
		</div>
		<br>
		<p> v-if example</p>
		<template v-if="num === 1">
			<div>1</div>
			<div>2</div>
		</template>
		<template v-else-if="num === 2">
			<div>Hi</div>
			<div>Hi 2</div>
		</template>
		<div v-else>No</div>
			
		<button @click="incBtn">inc</button>
		<br><br>

		<p> v-for example </p>
		<div v-for="(person, index) in persons" :key="person.id">
			{{ person.name}} {{ person.age }} {{ index }}
		</div>

		<InputField :name="name" @update-name="updateNameTest"/>
		<p> {{ name }} </p>
	</div>
</template>

<script>
import InputField from '@/components/InputField.vue';

export default {
	components: {
		InputField
	},
    data() {
       return {
        title: 'test',
		smile: true,
		name: 'test name',
		feelsgood: `https://imgh.us/feelsgood_1.jpg`,
		feelsbad: 'http://imgh.us/feelsbad.jpg',
		todos: [
			{ text: 'Vue.js 튜토리얼 작성하기' },
			{ text: 'Webpack2 알아보기' },
			{ text: '사이드 프로젝트 진행하기' }
		],
		options : [
			{v : 'S', t: 'Seoul'},
			{v: 'J', t: 'Jeju'},
			{v: 'B', t: 'Busan'}
		],
		region: 'J',
		number: 0,
		num: 0,
		inputData: 'test-value',
		link: 'https://www.youtube.com/',
		tableShow: false,
		isRed: false,
		isBold: false,
		red: 'red',
		size: '30px',
		styleObject : {
			color: 'red',
			fontSize: '30px'
		},
		persons : [
			{ name: 'a', age: 20 },
			{ name: 'b', age: 30 },
			{ name: 'c', age: 40 }
		]
       }
    },
    methods: {
		howAreYou() {
			return "기분이 어때?"
		},
		changeRegion() {
			console.log('region:'+this.region)
		},
		sayHello() {
			return this.title;
		},
		getVueStudyUrl(channel) {
			return this.link + channel;
		},
		inc() {
			this.number++;
		},
		incBtn() {
			this.num++;
		},
		decre() {
			this.number--;
		},
		update() {
			this.isRed = !this.isRed;
			this.isBold = !this.isBold;
		},
		updateNameTest(name) {
			this.name = name;
		}
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