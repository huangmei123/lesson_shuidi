<template>
    <div class="el-badge">
        <slot></slot>
        <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        class="el-badge__content"
        :class="[
        //content里的内容
       'el-badge__content--' + type,
        {
            'is-fixed':$slots.default,
              'is-dot': isDot
        }
        ]"
        v-text="content">

        </sup>
    </div>
</template>
<script>
import { isDate } from 'util';
export default {
    name:'ElBadge',
    props:{
        value:[String,Number],
        max:Number,
        hidden: Boolean,
        isDot:Boolean, //js风格
        type:{
            type:String,
            // 对props的升级 规定类型
            validator(val) {
                return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1;
            }
        }
    },
    computed:{
        //是content 不是value 为了更好的需求
        content(){
            //整数输出，超过与不超过最大值 
            //输出 hot/new
            if(this.isDot) return;
            const value = this.value
            const max = this.max
            if (typeof value === 'number' &&typeof max ==='number'){
                 return max<value ? `${max}+`  :value;
            }          
            return value;
        }
    }
}
</script>