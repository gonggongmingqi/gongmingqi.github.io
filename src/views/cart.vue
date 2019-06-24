<template>
    <div>
        <Head title="title"></Head>
        <!-- <Swiper></Swiper>
        <consult></consult> -->
        <Tba></Tba>
    </div>
</template>
<script>
import consult from "./consult"
import Tba from "./Tba"
export default {
    name:'cart',
    components:{
        consult,
        Tba
    },
    data() {
        return {
            
        }
    },
}
</script>