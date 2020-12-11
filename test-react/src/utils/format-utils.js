// 函数防抖: 解决refresh频繁刷新
export function debounce(func, delay) {
    let timer = null
    return function (...args) {
        if (timer) clearInterval(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}