<template>
	<vuejs-datepicker
		:minimum-view="'day'"
		:maximum-view="'month'"
	v-if="timed" :value="timed" @selected="result"></vuejs-datepicker>
	<input v-else type="text" placeholder="時間" :value="date">
</template>
<script>
import moment from 'moment'
import VuejsDatepicker from 'vuejs-datepicker'
	export default {
		name: 'app',
		props: {
			date: String
		},
		data: function() {
			return {
				timed: null
			}
		},
		mounted() {
			this.timed = new Date(this.date)
		},
		components: {
			VuejsDatepicker
		},
		methods: {
			setShowDate(d) {
				this.showDate = d;
			},
			result(v) {
				v = moment(v).format('YYYY-MM-DD')
				this.$emit('timed_Father', v)
			}
		}
	}
</script>
