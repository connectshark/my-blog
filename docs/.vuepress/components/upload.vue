<template>
  <div id="upload-img">
		<input type="file" accept="image/png, image/jpeg ,image/jpg" @change="fileLoad">
		<div class="img">
			<img :src="img" :alt="imgName">
		</div>
	</div>
</template>

<script>
export default {
	name: 'uploadImg',
	data() {
		return {
			img: '',
			imgName: ''
		}
	},
	methods: {
		fileLoad(e) {
			let file = e.target.files.item(0)
			this.imgName = file.name
			let readfile = new FileReader()
			readfile.readAsDataURL(file)
			readfile.addEventListener('load', this.imgLoad)
		},
		imgLoad(e) {
			this.img = e.target.result
		},
	}
}
</script>

<style scoped lang="scss">

</style>