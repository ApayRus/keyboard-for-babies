import Row from './row.js'
import LangSwitcher from './lang-switcher.js'
import keyboardData from './keyboardData.js'

const template = /*html*/ `
<div class="keyboard">
	<div v-for="(row, index) in rows">
		<app-row v-bind:activeKey="activeKey" :index="index" :keys="row" />
	</div>
	<!-- <lang-switcher :langs="langs" :activeLang="activeLang" :switchLang="switchLang" /> -->
</div>
`

export default {
	template,
	created() {
		window.addEventListener('keydown', e => {
			e.preventDefault()
			const { key, code } = e
			this.activeKey = { key, code }
			console.log(e)
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
			timeout: 0,
			langs: ['en', 'ru', 'ar'],
			activeLang: 'en'
		}
	},
	methods: {
		switchLang(lang) {
			this.activeLang = lang
		}
	},
	components: {
		'app-row': Row,
		'lang-switcher': LangSwitcher
	},
	mounted() {
		console.log('Content component mounted.')
	}
}
