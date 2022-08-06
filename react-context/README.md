## 优化context的n+1渲染问题
- 被context.Provide包裹的子组件中，部分子组件没有用到context中的value，不想被更新时应该怎么办

## 被memo高阶组件包裹的组件，内部使用的context发生变化，会重新渲染
- C2组件就是demo

