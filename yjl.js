/*
author:demo
纯属好玩daxialaile
 */
var body=$response.body;body={
  "code": 0,
  "message": "执行成功",
  "data": {
    "userId": "293440768951975936",
    "phone": "guestA0C66F6B-964F-4E6D-8F5A-C805C9AED25E",
    "secretKey": "00f09cfa-d246-490f-b8b8-8e0b296a76d3",
    "expired": false,
    "expireTime": "2299-02-22 18:26:32",
    "loginTime": "2020-03-16 19:43:57",
    "createTime": "2020-03-10 23:54:48",
    "signedToday": true,
    "signedDays": 999,
    "signedDuration": 15
  }
}
;body=JSON.stringify(body);$done({body});
