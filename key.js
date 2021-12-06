const template = `

<div :class="['key', content.slot1, content.name]" @click="click()">
	<div v-if="activeKeyStyle" :class="['key', content.slot1, content.name, activeKeyStyle]">
		<div class="slot1">{{content.slot1}}</div>
		<div class="slot2">{{content.slot2}}</div>
		<div class="slot3">{{content.slot3}}</div>
		<div class="slot4">{{content.slot4}}</div>
	</div>
	<div class="slot1">{{content.slot1}}</div>
	<div class="slot2">{{content.slot2}}</div>
	<div class="slot3">{{content.slot3}}</div>
	<div class="slot4">{{content.slot4}}</div>
</div>

`

export default {
	template,
	props: {
		content: Object,
		activeKey: Object
	},
	data() {
		return {
			clickCount: 0,
			clickedAt: null
		}
	},
	computed: {
		activeKeyStyle() {
			if (!this.activeKey) {
				return ''
			}
			const { key, code } = this.activeKey
			const { slot1, name } = this.content
			if (key === slot1.toLowerCase() || code === name || code === slot1) {
				return 'activeKey'
			}
		}
	},

	methods: {
		click() {
			console.log('clicked', this.content)
		}
	},
	mounted() {
		console.log('Content component mounted.')
	}
}
