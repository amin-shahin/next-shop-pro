import http from "./httpServices";

export async function getOtpCode(phoneNumber) {
  return await http.post("/user/get-otp", {phoneNumber}).then(({data}) => data.data);
//   const { data } = res.data || {};
//   return data;
}


export async function checkOtpCode(data) {
  return await http.post("/user/check-otp",data).then(({data}) => data.data);
//   const { data } = res.data || {};
//   return data;
}


export async function completeProfileApi(data) {
  return await http.post("/user/complete-profile",data).then(({data}) => data.data);

}