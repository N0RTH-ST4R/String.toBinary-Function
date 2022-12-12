String.prototype.toBinary=function(){
    let res = '';
    res = this.toString().split('').map(char => {
       return char.charCodeAt(0).toString(2);
    }).join(' ');
    return res;
}
