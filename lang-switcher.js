const template = `
<div class="langSwitcher">
	<div v-for="lang of langs">
			<div :class="{lang:true, activeLang: lang === activeLang}" @click="switchLang(lang)">
				{{lang}}
			</div>
	</div>
</div>
`

export default {
	template,

	props: {
		langs: Array,
		activeLang: String,
		switchLang: Function
	},

	mounted() {
		console.log('Content component mounted.')
	}
}
