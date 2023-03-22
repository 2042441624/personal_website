//视口初始化：判断是否手机
const distinguishFacility = () => window.matchMedia("(max-width: 425px)").matches;


export {
    distinguishFacility
}