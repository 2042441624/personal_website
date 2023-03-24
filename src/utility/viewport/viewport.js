//视口初始化：判断是否手机
const distinguishFacility = function () {
    return window.matchMedia("(max-width: 425px)").matches;
}


export {
    distinguishFacility
}