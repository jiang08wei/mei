// 在一起时间函数
(function () {
    let oldDate = '2024-5-16 23:20:00'
    function fn(oldDate) {
        // 1.得到当前的时间戳
        const now = +new Date()
        //  2.得到之前的时间时间戳
        const old = +new Date(oldDate)
        let count = parseInt((now - old) / 1000)

        let d = parseInt(count / 24 / 60 / 60)
        let h = parseInt(count / 60 / 60 % 24)
        let m = parseInt(count / 60 % 60)
        let s = parseInt(count % 60)
        h = h < 10 ? '0' + h : h
        m = m < 10 ? '0' + m : m
        s = s < 10 ? '0' + s : s

        let obj = {
            d,
            h,
            m,
            s
        }
        return obj
    }

    const day = document.querySelector('#day span')
    const hour = document.querySelector('#hours')
    day.innerHTML = fn(oldDate).d
    function dayHour() {
        let obj = fn(oldDate)
        hour.innerHTML = `${obj.h}时${obj.m}分${obj.s}秒`

    }
    dayHour()
    setInterval(dayHour, 1000)
})();

