## 鉴定网络热门面试题

### useCallback的使用场景

- 这里要说一句，不把useCallback和memo高阶组件，那就是扯淡！
- 父组件中的props或者state更新时，必然会重新渲染子组件（除非你的子组件用了useMemo包裹或者用了高阶组件memo包裹，并且props和state都不会影响到它们）