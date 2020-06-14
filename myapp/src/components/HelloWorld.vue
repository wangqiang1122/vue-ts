<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="feature in features" :key="feature.id">
      {{feature.name}}
    </div>
    <div>特性：{{count}}</div>
    <input type="text" @keydown.enter="addFeature">



  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator';
import axios from 'axios';

import { State, Action, Mutation } from "vuex-class";


// 声明类
// class Feature {
//     constructor(
//         public id: number,
//         public name: string,
//     ) {
//
//     }
// }

// 使用接口  不需要修饰符了

interface Feature{
     id: number,
     name: string,
}

// 使用泛型
interface Result<T> {
    ok: 0 | 1,
    data: T,
}
function getData<T>(): Promise<Result<T>>{
    const data: any = [
        {id: 1, name: '类型'}, {id: 2,name: 'sssss'}
    ]
    return Promise.resolve<Result<T>>({ ok: 1,data: data });
}


class Myte {
    public age: number = 1;
    private hit: string; // 私有不可继承
    protected _h: string = 'name'; // 受保护的可以继承
    constructor(hit: string) {
        this.hit = hit;
    }
    get h() {
        return this._h+'gdsgsd';
    }

}
@Component
export default class HelloWorld extends Vue {
  @Prop({type: String, default: ''}) // 是给vue是给js的

  private msg!: string; // 是给ts的

    @State features!: string[];
    @Action addFeatureAction: any;
    @Mutation addFeatureMutation: any;


    features: Feature[]=[];
  async created() {
     //  let a = new Myte('ddd');
     // console.log(a.age)
     //  console.log(a.h)
      // alert('created')


    // const reslut = await getData<Feature[]>();
    // this.features = reslut.data;


    //   axios.get<Feature[]>('/api/list').then(res=>{
    //       console.log(res)
    //       this.features = res.data;
    //   })
    //  this.features = @State('features')


  }
  beforeCreate() {
      // alert('beforeCreate')
  }
  @Watch('msg',{deep: true})
  onMsgChange(val: string, oldVal: string) {
      console.log('msg变化了')
  }
  // 方法直接作为回掉函数
  @Emit('addFeature')
  private addFeature<Feature>(event: KeyboardEvent) {
      // 断言 as 是类型的断言
     console.log(event)
     const input = event.target as HTMLInputElement;
     const feature = { id: this.features.length+1,name: input.value};
     this.features.push(feature)
     input.value = '';
     // this.msg = 'dddddd';
     return feature
  }
  // 存取器可以被算成计算属性
  get count() {
      return this.features.length;
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
