<template>
    <div class="video">
        <div>
            <span>快速入门</span>
        <iframe height=300px width=100% src='http://player.youku.com/embed/XMzIwNTQ0NjM0NA==' frameborder= 'allowfullscreen'></iframe>
        </div>
        <div>
            <span>最新前端移动开发html5+css3day1-06-HTML5-表单新增的其它属性</span>
       <iframe height=300px width=100% src='http://player.youku.com/embed/XNDE2NzA0ODQ3Ng==' frameborder= 'allowfullscreen'></iframe>
        </div>
        <div>
            <span>2019年Html5+Css3深入浅出day2-03-HTML5-FileReader的使用</span>
            <iframe height=300px width=100% src='http://player.youku.com/embed/XNDE3MDUzMzcxMg==' frameborder= 'allowfullscreen'></iframe>
        </div>
    </div>
</template>
<script>
export default {
    name:'dvd',
}
</script>
<style lang="scss" scoped>
.video{
    >div{
        text-align: left;
        width: 100%;
        border-bottom: 1px solid #2b2b2b2b;
    >span{
        font-size: 20px;
        color: #2b2b;
        
    }
    }
}
</style>
