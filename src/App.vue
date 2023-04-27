<!-- 页面结构-->
<template>
  <div class="tinypng-wrapper">
    <div class="tips">
      <p>1. 只能压缩 <span class="highlight">jpg/png</span> 格式图片；</p>
      <p>2. 一次最多压缩<span class="highlight">100张</span>；</p>
      <p>
        3. 压缩后的文件会保存在<span class="highlight"
          >最后一张图片路径下的image-compress文件夹</span
        >中, 请留意成功后的提示；
      </p>
      <p>
        4. image-compress文件夹中如果有同名文件，将被<span class="highlight"
          >覆盖</span
        >；
      </p>
      <p>5. 图片处理需要时间，点击压缩后请耐心等待片刻。</p>
    </div>
    <div class="header">
      <span class="label">压缩质量</span>
      <el-slider
        class="slider"
        v-model="quality"
        :step="10"
        :min="10"
        :marks="marks"
        show-stops
      >
      </el-slider>
    </div>
    <div class="header">
      <el-input placeholder="保存文件目录" v-model="targetDir" disabled>
        <template #prepend>图片保存目录</template>
      </el-input>
      <el-button style="margin-left: 24px" type="success" @click="handleSubmit"
        >开始压缩</el-button
      >
    </div>

    <div class="tinypng-content">
      <el-upload
        class="upload-demo"
        ref="upload"
        accept=".jpg,.png"
        multiple
        :auto-upload="false"
        :limit="maxFileNum"
        :file-list="fileList"
        :before-upload="beforeUpload"
        :on-exceed="handleExceed"
        :on-change="handleChangeFile"
        action=""
        list-type="picture-card"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    // console.log(window.versions.node(), "window.versions.node");
    // console.log(window.versions.chrome(), "versiwindow.ons.chrome");
    // console.log(window.versions.electron(), "versions.electron");
    // window.versions
    //   .ping()
    //   .then((res) => console.log(res, "window.versions.ping()"));
  },
};
</script>
