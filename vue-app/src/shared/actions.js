class Actions {
    actions = {}

    setActions(actions) {
        this.actions = actions
    }

    onGlobalStateChange(...args) {
        return this.actions.onGlobalStateChange(...args)
    }

    setGlobalState(...args) {
        return this.actions.setGlobalState(...args)
    }
}


export default new Actions()