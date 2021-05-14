<template>
  <div id="all" style="width: 100%;height: 600px;">
  1111
  </div>
</template>

<script>
// @ is an alias to /src
let BMapGL = window.BMapGL;
export default {
  name: 'Home',
  data() {
    return {
        name: 'huohhhh'
    }
	},
  mounted(){
debugger
	var map = new BMapGL.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMapGL.Point(118.5, 27.5), 5);  // 初始化地图,设置中心点坐标和地图级别
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	map.setMapType(BMAP_EARTH_MAP);   
	},
	methods: {
    testFn(){
    }
	}
}

</script>
