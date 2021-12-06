import Keyboard from './keyboard.js'

const App = {
	el: 'main',
	components: {
		'app-keyboard': Keyboard
	},

	mounted() {
		console.log('Application mounted.')
	}
}

window.addEventListener('load', () => {
	new Vue(App)
})
