import { useState } from 'react'

export default function coupon() {

var Code =[
"kkear@gmail.com", 
"gilugi407@gmail.com"
];

var i;
var couponCode="";
function cpSubmit(a) {
    $.ajax({
      url: "https:\/\/account.devplay.com/v2/coupon/ck",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        "email": Code[a],
        "coupon_code": couponCode
      }),
      success: function(data) {
        switch(data.code) {
          case 20000:
	console.log(Code[a] + "상품이 정상적으로 지급되었습니다. 게임에 접속해서 확인해주세요.");
            break;
          case 40006:
	console.log(Code[a] + "DevPlay 계정을 다시 한번 확인해주세요.");
            break;
          case 42501:
	console.log(Code[a] + "사용 기간이 만료된 쿠폰입니다.");
            break;
          case 42502:
	console.log(Code[a] + "쿠폰번호를 다시 한번 확인해주세요.");
            break;
          case 42201:
          case 42503:
	console.log(Code[a] + "해당 계정으로 이미 같은 종류의 쿠폰을 등록하셨습니다.");
            break;
          case 42203:
          case 42504:
	console.log(Code[a] + "이미 사용된 쿠폰입니다.");
            break;
          default:
	console.log(Code[a] + "서버에서 알 수 없는 응답이 발생하였습니다. 잠시후 다시 시도해주세요.");
            break;
        }
      }
    });
  }
function cp1() {
for (i = 0; i < Code.length; i++) {
  cpSubmit(i);
document.write(cpSubmit(i));
}
return (
<div className="flex flex-col mt-65">
        <form className="flex justify-between p-6 mt-6 text-left border gap-x-6 w-96 rounded-xl5" id="frm">
                <label htmlFor="couponCode">couponCode</label>
                <input
                    className="pl-2 mx-2 text-right border w-14 rounded-m5"     
//                    type="number" 
                    id="couponCode" 
                    name="couponCode" 
                    min='1'
                    max='160'
                    value='input'
                />
                <label htmlFor="percent">쿠폰 업데이트 : 21-07-14</label> 

	   <input type="button" id="btn" onclick="cp1();" value='submit'/>
        </form>
</div>
)
}
