const module1 = {
    state: {
      module1Value: 'Module 1'
    },
    getters: {
      module1ValueWithHello(state, getters, rootState) {
          console.log('module1 state', state);
          console.log('module1 rootState', rootState)
          return 'Hello, ' + state.module1Value;
      }
    },
    mutations: {
      setModule1Value(state, value) {
        state.module1Value = value;
      }
    },
    actions: {
      setModule1Value(context, value) {
        context.commit('setModule1Value', value);
      }
    }
  };

  export default module1;