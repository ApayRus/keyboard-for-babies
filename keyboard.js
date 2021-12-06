import Row from './row.js'
import keyboardData from './keyboardData.js'

const template = `
<div class="keyboard">
	<div v-for="(row, index) in rows">
		<app-row v-bind:activeKey="activeKey" :index="index" :keys="row"></app-row>
	</div>
</div>
`

export default {
	template,
	created() {
		window.addEventListener('keydown', e => {
			e.preventDefault()
			const { key, code } = e
			this.activeKey = { key, code }
			console.log(code)
			clearTimeout(this.timeout)
			this.timeout = setTimeout(() => (this.activeKey = null), 1000)
			// audio
			const audio = new Audio(`./audio/${code}.mp3`)
			audio.play()
		})
	},
	data() {
		return {
			rows: keyboardData,
			activeKey: null,
			timeout: 0
		}
	},
	components: { 'app-row': Row },
	mounted() {
		console.log('Content component mounted.')
	}
}
