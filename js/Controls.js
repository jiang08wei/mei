(function () {
    // 导航栏
    let nav = document.querySelector('.bg-body-tertiary')
    // 导航列表
    const navList = document.querySelector('.navbar-nav')
    // 导航文字
    const navText = document.querySelectorAll('.nav-item a')
    // 背影
    const couple = document.querySelector('.couple').offsetTop
    // 路游城市
    const project = document.querySelector('.project').offsetTop
    // 我的女孩
    const girl = document.querySelector('.girl').offsetTop
    // 底部
    const footer = document.querySelector('.footer').offsetTop


    // 鼠标滚动事件
    window.addEventListener('scroll', function () {
        let scrollTop = document.documentElement.scrollTop

        // 背景颜色
        if (scrollTop >= 200) {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
        } else {
            nav.style.backgroundColor = 'transparent'
        }
        // 滚动到哪一个位置
        if (scrollTop >= girl + 250) {
            for (let i = 0; i < navText.length; i++) {
                navText[i].classList.remove('active')
                navText[4].classList.add('active')
            }



        }
        else if (scrollTop >= girl - 200) {
            for (let i = 0; i < navText.length; i++) {
                navText[i].classList.remove('active')
            }
            navText[3].classList.add('active')
        }
        else if (scrollTop >= project - 200) {
            for (let i = 0; i < navText.length; i++) {
                navText[i].classList.remove('active')
            }
            navText[2].classList.add('active')
        }
        else if (scrollTop >= couple - 200) {
            for (let i = 0; i < navText.length; i++) {
                navText[i].classList.remove('active')
            }
            navText[1].classList.add('active')
        }
        else {
            for (let i = 0; i < navText.length; i++) {
                navText[i].classList.remove('active')
            }
            navText[0].classList.add('active')
        }
    })
    // 鼠标点击事件
    navList.addEventListener('click', function (e) {
        e.preventDefault()
        let text = e.target.innerText
        switch (text) {
            case '首页':
                window.scrollTo(0, 0)
                break;
            case '我们':
                window.scrollTo(0, couple)
                break;
            case '城市':
                window.scrollTo(0, project)
                break;
            case '偶像':
                window.scrollTo(0, girl)
                break;
            default:
                window.scrollTo(0, footer)
                break;
        }
    })
})()