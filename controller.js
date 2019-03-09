module.exports.nhanPham = function(ave){
    if (ave >= 8) return 'Giỏi' ; 
    if (ave >= 6.5) return 'Khá' ; 
    if (ave >= 5) return 'Trung bình' ; 
    return 'Yếu' ; 
}
module.exports.ave = function(diem){
    let sum = 0 ; 
    for (let i = 0 ; i < diem.length ; i++){
        sum+= diem[i] ; 
    }
    return parseFloat(sum/diem.length).toFixed(1) ; 
}