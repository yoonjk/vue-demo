const module3 = {
    state: {
        count: 0,
        weight: 2,
        module3Value: 'Module 3',
        todos: [ 
            { id: 1, text: '...', done: true  }, 
            { id: 2, text: '...', done: false },
            { id: 3, text: 'test 3', done: true  }
        ]
    },
    computed: {
        count() {
            return this.$store.state.count = this.$store.state.count + 1
        }
    },
    getters: { 
        doneTodos: state => state.todos.filter(todo => todo.done),
        getTodoById : state => (id) => state.todos.find(todo => todo.id == id ? (todo.text) : ''),
        weight : state => state.weight,
        getCount: state => state.count,
        inc: state => state.count++,
    },
    mutations: {
        setModule3Value(state, value) {
            this.state.count = value;
        },
        increment(state, value) {
            this.state.count = value;
        },
    },
    action: {
        generate (context, value) {
            context.commit('increment', value);
        }
    }
};

export default module3;