import Key from './key.js'

const template = `
<div :class="['row', order]">
	<div v-for="key of keys">
			<app-key v-bind:activeKey="activeKey" :content="key"></app-key>
	</div>
	
</div>
`

export default {
	template,

	props: {
		keys: Array,
		index: Number,
		activeKey: Object
	},

	computed: {
		order() {
			const map = {
				0: 'first',
				1: 'second',
				2: 'third',
				3: 'fourth',
				4: 'fifth',
				5: 'sixth',
				6: 'seventh'
			} // to make 1st row smaller
			return map[this.index]
		}
	},

	components: { 'app-key': Key },

	mounted() {
		console.log('Content component mounted.')
	}
}
