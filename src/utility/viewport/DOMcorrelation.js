//获取指定的父类
const getparent = function (evetDom, parentDom) {
    let evetPare;
    let _newEvetDom = evetDom.parentNode
    let thisparentDom = document.querySelectorAll(parentDom)
    let parentlength = [...thisparentDom].filter(p => p === _newEvetDom)
    if (!parentlength.length) { evetPare = getparent(_newEvetDom, parentDom) } else {
        evetPare = parentlength[0]
    }
    return evetPare
}
export {
    getparent
}