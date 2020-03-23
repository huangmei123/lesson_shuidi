<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{$store.state.count}}-{{count}}</h3>
        <div>
            <button @click="add">+</button>
            <button @click="reduce">-</button>
            <!-- <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button> -->
        </div>
    </div>
</template>
<script>
import store from '@/vuex/store'
import {mapState, mapGetters,mapMutations} from 'vuex'
export default {
    data(){
        return{
            msg:'hello vuex'
        }
    },
    methods:mapMutations([
        'add',
        'reduce'
    ]),
    // computed:mapState({
    //     count:state => state.count
    // }),
    computed:{
    ...mapState(["count"]),
    // count(){
    //     return this.$store.getters.count;
    // }
    ...mapGetters(["count"])
},
    store
}
</script>