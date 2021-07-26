const module2 = {
    state: {
      module2Value: 'Module 2'
    },
    getters: {
      module2ValueWithHello(state, getters, rootState) {
        console.log('module1 state', state);
        console.log('module1 rootState', rootState)
        return 'Hello, ' + state.module2Value;
      }
    },
    mutations: {
      setModule2Value(state, value) {
        state.module2Value = value;
      }
    },
    actions: {
      setModule2Value(context, value) {
        context.commit('setModule2Value', value);
      }
    }
  };

  export default module2;